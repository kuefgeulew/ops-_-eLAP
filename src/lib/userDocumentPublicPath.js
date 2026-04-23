import { DOCUMENT_UPLOAD_SCOPE } from './uploadDocumentsDb.js'

/** Stable path under public/user-documents (one file per upload slot, overwrites on re-upload). */
export function canonicalUserDocumentStoragePath(uploadKey, fileName) {
  const base = uploadKey.replace(/::/g, '__').replace(/[^a-zA-Z0-9_-]/g, '_')
  let ext = ''
  const i = fileName.lastIndexOf('.')
  if (i > -1) {
    const raw = fileName.slice(i).toLowerCase()
    if (/^\.[a-z0-9]{1,12}$/.test(raw)) ext = raw
  }
  return `case-${DOCUMENT_UPLOAD_SCOPE}/${base}/file${ext}`
}

export async function fetchUserDocumentsManifest() {
  const bust = Date.now()
  const urls = import.meta.env.DEV
    ? [
        `/__ops/user-documents-manifest.json?t=${bust}`,
        `/user-documents/manifest.json?t=${bust}`,
      ]
    : [`/user-documents/manifest.json?t=${bust}`]

  for (const url of urls) {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) continue
    try {
      return await res.json()
    } catch {
      /* try next */
    }
  }
  return { version: 1, scope: DOCUMENT_UPLOAD_SCOPE, entries: {} }
}

/** @returns {Record<string, { name: string, publicUrl: string, kind: 'image'|'pdf' }>} */
export function manifestToAttachmentMap(manifest) {
  const out = {}
  const entries = manifest?.entries ?? {}
  const bust =
    manifest?.updatedAt != null && manifest.updatedAt !== ''
      ? `?m=${encodeURIComponent(String(manifest.updatedAt))}`
      : ''
  for (const [uploadKey, meta] of Object.entries(entries)) {
    if (!meta?.path || typeof meta.path !== 'string') continue
    const rel = meta.path.replace(/^\/+/, '').replace(/\\/g, '/')
    if (rel.includes('..')) continue
    const isPdf = meta.kind === 'pdf' || rel.toLowerCase().endsWith('.pdf')
    out[uploadKey] = {
      name: typeof meta.name === 'string' && meta.name ? meta.name : 'Document',
      publicUrl: `/user-documents/${rel}${bust}`,
      kind: isPdf ? 'pdf' : 'image',
    }
  }
  return out
}

export function attachmentDisplayUrl(attachment) {
  if (!attachment) return ''
  // Prefer in-browser object URLs when available.
  // This avoids broken previews in environments where /user-documents files are not deployed.
  return attachment.objectUrl || attachment.publicUrl || ''
}

export function hasAttachmentDisplay(attachment) {
  return Boolean(attachmentDisplayUrl(attachment))
}
