import { useState } from 'react'

const DEFAULT = { status: 'pending', note: '', updatedAt: '' }

export default function useDocumentStatus(uploadKey) {
  const [statusData, setStatusData] = useState(() => {
    try {
      const raw = localStorage.getItem(`elap_doc_status_${uploadKey}`)
      return raw ? JSON.parse(raw) : DEFAULT
    } catch {
      return DEFAULT
    }
  })

  function updateStatus(status, note = statusData.note) {
    const updated = { status, note, updatedAt: new Date().toISOString() }
    try {
      localStorage.setItem(`elap_doc_status_${uploadKey}`, JSON.stringify(updated))
    } catch {}
    setStatusData(updated)
  }

  function updateNote(note) {
    const updated = { ...statusData, note }
    try {
      localStorage.setItem(`elap_doc_status_${uploadKey}`, JSON.stringify(updated))
    } catch {}
    setStatusData(updated)
  }

  return {
    status: statusData.status,
    note: statusData.note,
    updatedAt: statusData.updatedAt,
    updateStatus,
    updateNote,
  }
}
