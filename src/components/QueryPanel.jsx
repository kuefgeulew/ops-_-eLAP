import { useState } from 'react'
import QueryCard from './QueryCard'

export default function QueryPanel({
  queries,
  currentRole,
  onNavigate,
  onResolve,
  onDelete,
  onAddManual,
  onAddReply,
  onToggleResponded,
  onMarkNotificationRead,
  onSwitchRole,
  onSetPriority,
  onBulkResolve,
  onCopyThread,
}) {
  const [collapsed, setCollapsed] = useState(true)
  const [search, setSearch] = useState('')
  const [showResolved, setShowResolved] = useState(false)

  const unresolvedCount = queries.filter((q) => !q.resolved).length
  const count = queries.length
  const hasUnreadNotification = queries.some((q) => q.notificationUnread)

  const visible = queries.filter((q) => {
    if (!showResolved && q.resolved) return false
    if (!search.trim()) return true
    const s = search.toLowerCase()
    return (
      q.remark?.toLowerCase().includes(s) ||
      q.selectedText?.toLowerCase().includes(s)
    )
  })

  return (
    <div className="fixed right-0 top-[120px] z-[100] flex items-stretch bottom-[56px]">
      {collapsed ? (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="flex w-8 cursor-pointer flex-col items-center gap-2 rounded-l-lg border-b border-l border-t border-[#e0e6ed] bg-white pt-3 shadow-md"
        >
          <span className="text-[14px] text-[#0077c8]" aria-hidden>
            ⚑
          </span>
          {hasUnreadNotification ? (
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-red-500"
              aria-hidden
            />
          ) : null}
          {unresolvedCount > 0 ? (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
              {unresolvedCount > 9 ? '9+' : unresolvedCount}
            </span>
          ) : null}
        </button>
      ) : (
        <div className="flex w-80 flex-col border-l border-[#e0e6ed] bg-white shadow-xl">
          <header className="flex flex-shrink-0 items-center justify-between border-b border-[#e8ecef] px-3 py-2">
            <div className="flex items-center">
              <span className="text-[13px] font-semibold text-[#1f2328]">
                Queries
              </span>
              <span className="ml-2 rounded bg-[#e8f3fc] px-1.5 text-[11px] text-[#0077c8]">
                {count}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={onBulkResolve}
                className="mr-2 text-[10px] text-[#16a34a] hover:underline"
              >
                Resolve Responded
              </button>
              <button
                type="button"
                onClick={onAddManual}
                className="mr-2 text-[11px] text-[#0077c8]"
              >
                + New
              </button>
              <button
                type="button"
                onClick={() => setCollapsed(true)}
                className="text-[#6a7380]"
              >
                ←
              </button>
            </div>
          </header>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search queries..."
            className="mx-2 mb-2 w-[calc(100%-16px)] rounded border border-[#d2d8e0] px-2 py-1 text-[11px] outline-none focus:border-[#0077c8]"
          />
          <div className="flex-1 overflow-y-auto px-2 py-2">
            <div className="flex justify-end px-2 pb-1">
              <button
                type="button"
                onClick={() => setShowResolved((v) => !v)}
                className="text-[10px] text-[#6a7380] hover:text-[#1f2328]"
              >
                {showResolved ? 'Hide Resolved' : 'Show Resolved'}
              </button>
            </div>
            {count === 0 ? (
              <div className="flex h-full min-h-[120px] items-center justify-center text-[12px] text-[#b0b7bf]">
                No queries yet
              </div>
            ) : (
              visible.map((q, i) => (
                <QueryCard
                  key={q.id}
                  query={q}
                  index={i}
                  currentRole={currentRole}
                  onNavigate={onNavigate}
                  onResolve={onResolve}
                  onDelete={onDelete}
                  onAddReply={onAddReply}
                  onToggleResponded={onToggleResponded}
                  onMarkRead={onMarkNotificationRead}
                  onSetPriority={onSetPriority}
                  onCopyThread={onCopyThread}
                />
              ))
            )}
            <div className="text-center mt-2 pt-2 border-t border-[#f0f0f0]">
              <button
                type="button"
                onClick={onSwitchRole}
                className="text-[10px] text-[#b0b7bf] hover:text-[#6a7380]"
              >
                Switch Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
