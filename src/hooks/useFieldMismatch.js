import { useMemo } from 'react'
import { getCaseProfile } from '../data/caseProfiles'

const MISMATCH_RULES = {
  'trade-licence': [
    { fieldKey: 'businessName', profileKey: 'businessName' },
    { fieldKey: 'ownerAddress', profileKey: 'businessLocation' },
  ],
  nid: [{ fieldKey: 'fullName', profileKey: 'businessName' }],
  'bank-statement': [
    { fieldKey: 'accountName', profileKey: 'businessName' },
    { fieldKey: 'branchName', profileKey: 'branchName' },
  ],
}

export default function useFieldMismatch(uploadKey, scope, docType, values) {
  const trackingId = scope?.split('::')?.[0] || scope
  const profile = getCaseProfile(trackingId)

  const mismatches = useMemo(() => {
    if (!profile) return new Set()
    const rules = MISMATCH_RULES[docType] || []
    const result = new Set()
    rules.forEach(({ fieldKey, profileKey }) => {
      const docVal = String(values[fieldKey] || '')
        .trim()
        .toLowerCase()
      const profVal = String(profile[profileKey] || '')
        .trim()
        .toLowerCase()
      if (docVal && profVal && docVal !== profVal) {
        result.add(fieldKey)
      }
    })
    return result
  }, [profile, docType, values])

  return { mismatches }
}
