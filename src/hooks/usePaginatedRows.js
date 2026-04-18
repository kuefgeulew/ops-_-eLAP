import { useMemo } from 'react'

/**
 * Memoized `data.slice` for the current page index and page size.
 */
function usePaginatedRows(data, page, pageSize) {
  return useMemo(() => {
    const safePage = Math.max(1, page)
    const safePageSize = Math.max(1, pageSize)
    const start = (safePage - 1) * safePageSize
    return data.slice(start, start + safePageSize)
  }, [data, page, pageSize])
}

export default usePaginatedRows

