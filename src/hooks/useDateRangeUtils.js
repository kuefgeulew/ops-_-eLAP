/**
 * Formatting and comparison helpers shared by the filter panel and case filter hook.
 */
export function formatDateForInput(date) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  return `${dd}/${mm}/${date.getFullYear()}`
}

export function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function sameDate(a, b) {
  return Boolean(a && b) && normalizeDate(a).getTime() === normalizeDate(b).getTime()
}

export function getPresetRange(option) {
  const today = normalizeDate(new Date())
  if (option === 'Today') return { start: today, end: today }
  if (option === 'Yesterday') {
    const d = new Date(today)
    d.setDate(d.getDate() - 1)
    return { start: d, end: d }
  }
  if (option === 'Last 7 Days') {
    const start = new Date(today)
    start.setDate(start.getDate() - 6)
    return { start, end: today }
  }
  if (option === 'Last 30 Days') {
    const start = new Date(today)
    start.setDate(start.getDate() - 29)
    return { start, end: today }
  }
  if (option === 'This Month') return { start: new Date(today.getFullYear(), today.getMonth(), 1), end: today }
  if (option === 'Last Month') {
    return {
      start: new Date(today.getFullYear(), today.getMonth() - 1, 1),
      end: new Date(today.getFullYear(), today.getMonth(), 0),
    }
  }
  return null
}

export function getMonthGrid(monthDate) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()
  const cells = []
  for (let i = firstDay - 1; i >= 0; i -= 1) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), inCurrentMonth: false })
  }
  for (let d = 1; d <= daysInMonth; d += 1) cells.push({ date: new Date(year, month, d), inCurrentMonth: true })
  while (cells.length < 42) {
    cells.push({ date: new Date(year, month + 1, cells.length - (firstDay + daysInMonth) + 1), inCurrentMonth: false })
  }
  return cells
}

