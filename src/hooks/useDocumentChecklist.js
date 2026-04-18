import { useState } from 'react'

export default function useDocumentChecklist(uploadKey, items) {
  const [checks, setChecks] = useState(() => {
    try {
      const raw = localStorage.getItem(`elap_doc_checklist_${uploadKey}`)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  function toggle(key) {
    setChecks((prev) => {
      const updated = { ...prev, [key]: !prev[key] }
      try {
        localStorage.setItem(`elap_doc_checklist_${uploadKey}`, JSON.stringify(updated))
      } catch {}
      return updated
    })
  }

  const completedCount = items.filter((item) => checks[item.key]).length
  const totalCount = items.length
  const allComplete = completedCount === totalCount

  return { checks, toggle, completedCount, totalCount, allComplete }
}
