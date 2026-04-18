import { useParams } from 'react-router-dom'
import { getCaseProfile } from '../data/caseProfiles'

export default function useCaseData() {
  const { trackingId } = useParams()
  const profile = getCaseProfile(trackingId)

  const get = (field, fallback = '—') => {
    if (!profile) return fallback
    const val = profile[field]
    if (val === undefined || val === null || val === '') return fallback
    return val
  }

  const formatBDT = (amount) => {
    if (!amount) return '—'
    return '৳ ' + Number(amount).toLocaleString('en-IN')
  }

  return { profile, get, formatBDT, trackingId }
}
