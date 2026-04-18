import { useCallback, useEffect, useState } from 'react'

function storageKey(trackingId) {
  return `elap_queries_${trackingId}`
}

function readQueries(trackingId) {
  try {
    const raw = localStorage.getItem(storageKey(trackingId))
    if (raw == null) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeQueries(trackingId, queries) {
  try {
    localStorage.setItem(storageKey(trackingId), JSON.stringify(queries))
  } catch {
    // ignore quota / private mode / denied access
  }
}

function sortByCreatedAtAsc(list) {
  return [...list].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  )
}

export function useQueryRemarks(trackingId) {
  const [queries, setQueries] = useState([])

  useEffect(() => {
    if (!trackingId) return
    setQueries(sortByCreatedAtAsc(readQueries(trackingId)))
  }, [trackingId])

  const addQuery = useCallback(
    ({ stepIndex, stepLabel, selectedText, remark, id }) => {
      setQueries((prev) => {
        const newQuery = {
          id: id || Date.now().toString(),
          trackingId: String(trackingId),
          stepIndex,
          stepLabel,
          selectedText,
          remark,
          createdAt: new Date().toISOString(),
          resolved: false,
          replies: [],
          notificationUnread: false,
          toggledResolved: false,
          priority: 'Medium',
        }
        const updated = sortByCreatedAtAsc([...prev, newQuery])
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const resolveQuery = useCallback(
    (id) => {
      setQueries((prev) => {
        const updated = prev.map((q) =>
          q.id === id ? { ...q, resolved: !q.resolved } : q
        )
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const deleteQuery = useCallback(
    (id) => {
      setQueries((prev) => {
        const updated = prev.filter((q) => q.id !== id)
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const addReply = useCallback(
    (queryId, text, role) => {
      setQueries((prev) => {
        const reply = {
          id: Date.now().toString(),
          role,
          text,
          createdAt: new Date().toISOString(),
        }
        const updated = prev.map((q) =>
          q.id === queryId
            ? {
                ...q,
                replies: [...(q.replies || []), reply],
                notificationUnread: role !== 'Operations',
              }
            : q
        )
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const toggleQueryResponded = useCallback(
    (queryId) => {
      setQueries((prev) => {
        const updated = prev.map((q) => {
          if (q.id !== queryId) return q
          const nextToggled = !q.toggledResolved
          return {
            ...q,
            toggledResolved: nextToggled,
            notificationUnread: nextToggled,
          }
        })
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const markNotificationRead = useCallback(
    (queryId) => {
      setQueries((prev) => {
        const updated = prev.map((q) =>
          q.id === queryId ? { ...q, notificationUnread: false } : q
        )
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const setPriority = useCallback(
    (queryId, priority) => {
      setQueries((prev) => {
        const updated = prev.map((q) =>
          q.id === queryId ? { ...q, priority } : q
        )
        writeQueries(trackingId, updated)
        return updated
      })
    },
    [trackingId]
  )

  const getQueriesForStep = useCallback(
    (stepIndex) => queries.filter((q) => q.stepIndex === stepIndex),
    [queries]
  )

  return {
    queries,
    addQuery,
    resolveQuery,
    deleteQuery,
    addReply,
    toggleQueryResponded,
    markNotificationRead,
    setPriority,
    getQueriesForStep,
  }
}
