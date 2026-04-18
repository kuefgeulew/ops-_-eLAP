import { useMemo } from 'react'
import { UI_TEXT } from '../config/uiConstants'

/**
 * Filters the case list by text, status, territory, dates, and related criteria.
 */
const monthMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
}

function parseDateValue(value) {
  if (!value || value === '-') return null
  const [datePart, timePart] = String(value).split(' ')
  if (!datePart) return null
  const [day, mon, year] = datePart.split('-')
  const [h = '0', m = '0'] = (timePart || '00:00').split(':')
  const monthIndex = monthMap[mon]
  if (monthIndex === undefined) return null
  return new Date(Number(year), monthIndex, Number(day), Number(h), Number(m))
}

function normalizeDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

function rowDayInRange(dateStr, start, end) {
  const d = parseDateValue(dateStr)
  if (!d) return false
  const t = normalizeDay(d)
  return t >= normalizeDay(start) && t <= normalizeDay(end)
}

function filterCasesByPanel(rows, c) {
  return rows.filter((row) => {
    if (c.businessName && !String(row.businessName).toLowerCase().includes(c.businessName.toLowerCase())) {
      return false
    }
    if (c.trackingId && !String(row.trackingId).includes(c.trackingId)) return false
    if (c.unit !== UI_TEXT.selectTerritory && row.unit !== c.unit) return false
    if (c.assignTo === UI_TEXT.assignedToMe) {
      const a = String(row.assignTo ?? '').trim()
      if (!a || a === '-') return false
    }
    if (c.approvalDateActive && c.approvalRange) {
      if (!rowDayInRange(row.updatedDate, c.approvalRange.start, c.approvalRange.end)) return false
    }
    if (c.lastDisburseActive && c.lastDisburseRange) {
      if (!rowDayInRange(row.lastDisburseDate, c.lastDisburseRange.start, c.lastDisburseRange.end)) {
        return false
      }
    }
    return true
  })
}

export function useCaseFiltering(rows, criteria) {
  return useMemo(() => filterCasesByPanel(rows, criteria), [rows, criteria])
}

