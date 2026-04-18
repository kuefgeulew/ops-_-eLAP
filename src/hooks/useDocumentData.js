import { useState } from 'react'
import { getDocumentDefaults } from '../config/documentFieldConfig'

export default function useDocumentData(uploadKey, scope, docType) {
  const [values, setValues] = useState(() => {
    const defaults = getDocumentDefaults(docType)
    try {
      const raw = localStorage.getItem(`elap_doc_data_${uploadKey}_${scope}`)
      const saved = raw ? JSON.parse(raw) : {}
      return { ...defaults, ...saved }
    } catch {
      return defaults
    }
  })

  const [saved, setSaved] = useState(false)

  function handleChange(key, value) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function handleSave() {
    try {
      localStorage.setItem(`elap_doc_data_${uploadKey}_${scope}`, JSON.stringify(values))
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch {}
  }

  return { values, saved, handleChange, handleSave }
}
