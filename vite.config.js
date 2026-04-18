import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { Buffer } from 'node:buffer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024

/** Must match upload keys used in UploadDocuments.jsx default rows + guided slots. */
const SLOT_UPLOAD_KEYS = [
  'business::business-0',
  'business::business-1',
  'business::business-2',
  'additional::additional-0',
  'general::general-0',
  'general::general-1',
  'general::general-2',
  'charge::charge-0',
  'charge::charge-1',
  'fdr-dps::fdr-0',
  'fdr-dps::fdr-1',
  'owner-kyc::kyc-0',
  'owner-kyc::kyc-1',
]

const CASE_SCOPE = '4909930'

function slugFromUploadKey(uploadKey) {
  return uploadKey.replace(/::/g, '__').replace(/[^a-zA-Z0-9_-]/g, '_')
}

function isDocumentFile(name) {
  if (name === 'manifest.json' || name === '.gitkeep') return false
  return /\.(pdf|png|jpe?g|webp|gif|bmp)$/i.test(name)
}

/** Resolve relative path under user-documents for a slot (canonical layout or legacy folder). */
function findRelativePathForSlot(outRoot, uploadKey) {
  const slug = slugFromUploadKey(uploadKey)
  const canonicalDir = path.join(outRoot, `case-${CASE_SCOPE}`, slug)
  if (fs.existsSync(canonicalDir) && fs.statSync(canonicalDir).isDirectory()) {
    const found = fs.readdirSync(canonicalDir).filter(isDocumentFile).sort()
    if (found.length) return `case-${CASE_SCOPE}/${slug}/${found[0]}`.replace(/\\/g, '/')
  }
  const legacyDir = path.join(outRoot, slug)
  if (fs.existsSync(legacyDir) && fs.statSync(legacyDir).isDirectory()) {
    const found = fs.readdirSync(legacyDir).filter(isDocumentFile).sort()
    if (found.length) return `${slug}/${found[0]}`.replace(/\\/g, '/')
  }
  return null
}

function buildMergedManifest(outRoot) {
  const base = readUserDocumentsManifest(outRoot)
  const entries = { ...(base.entries && typeof base.entries === 'object' ? base.entries : {}) }

  for (const [uploadKey, meta] of Object.entries({ ...entries })) {
    if (!meta?.path || typeof meta.path !== 'string') {
      delete entries[uploadKey]
      continue
    }
    const rel = meta.path.replace(/\\/g, '/').replace(/^\/+/, '')
    if (rel.includes('..')) {
      delete entries[uploadKey]
      continue
    }
    const full = path.join(outRoot, ...rel.split('/'))
    if (!fs.existsSync(full)) delete entries[uploadKey]
  }

  for (const uploadKey of SLOT_UPLOAD_KEYS) {
    const existing = entries[uploadKey]
    if (existing?.path) {
      const rel = String(existing.path).replace(/\\/g, '/').replace(/^\/+/, '')
      const full = path.join(outRoot, ...rel.split('/'))
      if (fs.existsSync(full)) continue
    }
    const rel = findRelativePathForSlot(outRoot, uploadKey)
    if (!rel) continue
    entries[uploadKey] = {
      path: rel,
      name: existing?.name && typeof existing.name === 'string' ? existing.name : path.basename(rel),
      kind: rel.toLowerCase().endsWith('.pdf') ? 'pdf' : 'image',
    }
  }

  return {
    version: 1,
    scope: base.scope || CASE_SCOPE,
    updatedAt: new Date().toISOString(),
    entries,
  }
}

function userDocumentsManifestDevMiddleware(outRoot) {
  return (req, res, next) => {
    const urlPath = req.url?.split('?')[0] ?? ''
    if (urlPath !== '/__ops/user-documents-manifest.json' || req.method !== 'GET') {
      next()
      return
    }
    try {
      const manifest = buildMergedManifest(outRoot)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.setHeader('Cache-Control', 'no-store')
      res.end(`${JSON.stringify(manifest, null, 2)}\n`)
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end(String(e?.message ?? e))
    }
  }
}

function readUserDocumentsManifest(outRoot) {
  const manifestPath = path.join(outRoot, 'manifest.json')
  const base = { version: 1, scope: '4909930', entries: {} }
  if (!fs.existsSync(manifestPath)) return { ...base, updatedAt: null }
  try {
    const parsed = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    return {
      ...base,
      ...parsed,
      entries: { ...base.entries, ...(parsed.entries && typeof parsed.entries === 'object' ? parsed.entries : {}) },
    }
  } catch {
    return { ...base, updatedAt: null }
  }
}

function writeUserDocumentsManifest(outRoot, manifest) {
  const manifestPath = path.join(outRoot, 'manifest.json')
  fs.mkdirSync(outRoot, { recursive: true })
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
}

function headerDecoded(req, name) {
  const raw = req.headers[name.toLowerCase()]
  if (typeof raw !== 'string') return ''
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

/** Dev / preview: save uploads + serve merged manifest (scans disk for legacy folders). */
function saveUserUploadsPlugin() {
  const outRoot = path.resolve(process.cwd(), 'public', 'user-documents')
  const manifestMw = userDocumentsManifestDevMiddleware(outRoot)
  return {
    name: 'save-user-uploads',
    configureServer(server) {
      server.middlewares.use(manifestMw)
      server.middlewares.use(async (req, res, next) => {
        const urlPath = req.url?.split('?')[0] ?? ''
        if (urlPath !== '/__ops/save-upload' || req.method !== 'POST') {
          next()
          return
        }
        const rawHeader = req.headers['x-path'] ?? req.headers['x-path'.toLowerCase()]
        const rel = typeof rawHeader === 'string' ? decodeURIComponent(rawHeader) : ''
        if (!rel || rel.includes('..') || path.isAbsolute(rel)) {
          res.statusCode = 400
          res.end('invalid x-path')
          return
        }
        const normalized = rel.replace(/\\/g, '/').replace(/^\/+/, '')
        const chunks = []
        let total = 0
        try {
          for await (const chunk of req) {
            total += chunk.length
            if (total > MAX_UPLOAD_BYTES) {
              res.statusCode = 413
              res.end('too large')
              return
            }
            chunks.push(chunk)
          }
        } catch {
          res.statusCode = 500
          res.end('read failed')
          return
        }
        const buffer = Buffer.concat(chunks)
        const outPath = path.join(outRoot, normalized)
        fs.mkdirSync(path.dirname(outPath), { recursive: true })
        fs.writeFileSync(outPath, buffer)

        const uploadKey = headerDecoded(req, 'x-upload-key')
        const originalName = headerDecoded(req, 'x-original-name') || path.basename(normalized)
        const kindRaw = headerDecoded(req, 'x-kind')
        const kind = kindRaw === 'pdf' ? 'pdf' : 'image'

        if (uploadKey && !uploadKey.includes('..')) {
          const manifest = readUserDocumentsManifest(outRoot)
          manifest.version = 1
          manifest.scope = manifest.scope || '4909930'
          manifest.entries[uploadKey] = {
            path: normalized,
            name: originalName,
            kind,
          }
          manifest.updatedAt = new Date().toISOString()
          writeUserDocumentsManifest(outRoot, manifest)
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: true, publicPath: `/user-documents/${normalized}` }))
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use(manifestMw)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), saveUserUploadsPlugin()],
})
