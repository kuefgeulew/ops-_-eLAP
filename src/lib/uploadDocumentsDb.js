/** Scope per loan / CIF so keys stay unique if we add more cases later. */
export const DOCUMENT_UPLOAD_SCOPE = '4909930'

const DB_NAME = 'ops-upload-documents'
const DB_VERSION = 1
const STORE = 'files'

function scopedId(uploadKey) {
  return `${DOCUMENT_UPLOAD_SCOPE}::${uploadKey}`
}

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error ?? new Error('indexedDB open failed'))
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'id' })
      }
    }
    req.onsuccess = () => resolve(req.result)
  })
}

/**
 * @param {string} uploadKey
 * @param {File} file
 */
export async function saveUploadToDb(uploadKey, file) {
  const db = await openDb()
  try {
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error ?? new Error('indexedDB transaction failed'))
      tx.onabort = () => reject(tx.error ?? new Error('indexedDB transaction aborted'))
      tx.objectStore(STORE).put({
        id: scopedId(uploadKey),
        uploadKey,
        scope: DOCUMENT_UPLOAD_SCOPE,
        name: file.name,
        type: file.type || 'application/octet-stream',
        lastModified: file.lastModified,
        body: file,
      })
    })
  } finally {
    db.close()
  }
}

/** @returns {Promise<Array<{ uploadKey: string, name: string, type: string, body: Blob }>>} */
export async function loadUploadsForScope(scope = DOCUMENT_UPLOAD_SCOPE) {
  const db = await openDb()
  try {
    const rows = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).getAll()
      req.onsuccess = () => resolve(req.result ?? [])
      req.onerror = () => reject(req.error ?? new Error('indexedDB read failed'))
    })
    return rows.filter((r) => r.scope === scope && r.uploadKey && r.body)
  } finally {
    db.close()
  }
}
