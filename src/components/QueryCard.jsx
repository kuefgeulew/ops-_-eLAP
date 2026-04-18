import { useEffect, useState } from 'react'

function roleColor(role) {
  switch (role) {
    case 'Operations':
      return '#0077c8'
    case 'RO/RE':
      return '#16a34a'
    case 'CRM':
      return '#7c3aed'
    default:
      return '#6a7380'
  }
}

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const n = parseInt(h, 16, 10)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function roleBg(role) {
  const { r, g, b } = hexToRgb(roleColor(role))
  return `rgba(${r}, ${g}, ${b}, 0.08)`
}

function formatReplyTime(iso) {
  const d = new Date(iso)
  return d.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export default function QueryCard({
  query,
  currentRole,
  onNavigate,
  onResolve,
  onDelete,
  onAddReply,
  onToggleResponded,
  onMarkRead,
  onSetPriority,
  onCopyThread,
  index,
}) {
  const [expanded, setExpanded] = useState(
    () => Boolean(query.notificationUnread)
  )
  const [replyText, setReplyText] = useState('')

  useEffect(() => {
    if (expanded && query.notificationUnread) {
      onMarkRead(query.id)
    }
  }, [expanded, query.notificationUnread, query.id, onMarkRead])

  const unread = Boolean(query.notificationUnread)
  const isOperations = currentRole === 'Operations'
  const replies = query.replies ?? []
  const priorityColor =
    { High: '#ef4444', Medium: '#f59e0b', Low: '#6a7380' }[
      query.priority || 'Medium'
    ]

  const cardStyle = unread
    ? {
        borderColor: '#fca5a5',
        boxShadow: '0 0 0 2px #fecaca',
      }
    : undefined

  return (
    <div
      className="mb-3 overflow-hidden rounded-lg border border-[#e8ecef]"
      style={cardStyle}
    >
      <div
        className="flex cursor-pointer justify-between bg-[#f8f9fb] px-3 py-2"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8ecef] text-[10px] font-medium text-[#1f2328]">
            {index + 1}
          </span>
          <span
            title={query.priority || 'Medium'}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: priorityColor,
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          {unread && (
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-red-500"
              aria-hidden
            />
          )}
          <button
            type="button"
            className="min-w-0 truncate text-left text-[11px] text-[#6a7380] hover:underline"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(query.stepIndex, query.selectedText)
            }}
          >
            {query.stepLabel}
          </button>
        </div>
        <div className="ml-2 flex shrink-0 items-center gap-2">
          {isOperations && query.toggledResolved && (
            <span className="rounded-full bg-[#16a34a] px-2 py-0.5 text-[10px] font-medium text-white">
              Responded
            </span>
          )}
          {!isOperations && (
            <button
              type="button"
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                query.toggledResolved
                  ? 'bg-[#16a34a] text-white'
                  : 'bg-[#e8ecef] text-[#6a7380]'
              }`}
              onClick={(e) => {
                e.stopPropagation()
                onToggleResponded(query.id)
              }}
            >
              {query.toggledResolved ? 'Responded' : 'Pending'}
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onCopyThread(query)
            }}
            title="Copy thread"
            className="text-[10px] text-[#b0b7bf] hover:text-[#1f2328]"
          >
            ⎘
          </button>
          <span className="text-[10px] text-[#6a7380]" aria-hidden>
            {expanded ? '▲' : '▼'}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="px-3 py-2">
          {query.selectedText ? (
            <p
              className="mb-1 truncate border-l-2 border-[#0077c8] pl-2 text-[11px] italic text-[#6a7380]"
              title={query.selectedText}
            >
              {query.selectedText}
            </p>
          ) : null}
          <p className="mb-2 text-[12px] font-medium text-[#1f2328]">{query.remark}</p>
          <p className="mb-2 text-[10px] text-[#b0b7bf]">
            {formatReplyTime(query.createdAt)}
          </p>
          <div className="mb-2 flex gap-1">
            {['High', 'Medium', 'Low'].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => onSetPriority(query.id, p)}
                className="rounded px-1.5 py-0.5 text-[10px]"
                style={{
                  background:
                    (query.priority || 'Medium') === p ? priorityColor : '#f0f0f0',
                  color:
                    (query.priority || 'Medium') === p ? 'white' : '#6a7380',
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {replies.map((reply) => (
            <div key={reply.id} className="mb-2">
              <div className="flex items-baseline gap-2 text-[10px]">
                <span style={{ color: roleColor(reply.role) }}>{reply.role}</span>
                <span className="text-[#b0b7bf]">{formatReplyTime(reply.createdAt)}</span>
              </div>
              <div
                className="py-1 pl-2 text-[11px]"
                style={{
                  borderLeft: `3px solid ${roleColor(reply.role)}`,
                  backgroundColor: roleBg(reply.role),
                }}
              >
                {reply.text}
              </div>
            </div>
          ))}

          <textarea
            rows={2}
            placeholder={`Reply as ${currentRole}...`}
            className="mt-2 w-full resize-none rounded border border-[#d2d8e0] p-1.5 text-[11px] outline-none focus:border-[#0077c8]"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                if (replyText.trim()) {
                  onAddReply(query.id, replyText.trim(), currentRole)
                  setReplyText('')
                }
              }
            }}
          />

          <div className="mt-1 flex justify-between items-center gap-2">
            <div>
              {isOperations && replies.length > 0 ? (
                <button
                  type="button"
                  className="text-left text-[11px] text-[#16a34a] hover:underline"
                  onClick={() => onResolve(query.id)}
                >
                  ✓ Cross query
                </button>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-[11px] text-[#b0b7bf] hover:text-red-500"
                onClick={() => onDelete(query.id)}
                aria-label="Delete query"
              >
                ✗
              </button>
              <button
                type="button"
                disabled={!replyText.trim()}
                className="rounded bg-[#0077c8] px-2 py-1 text-[11px] text-white disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => {
                  onAddReply(query.id, replyText.trim(), currentRole)
                  setReplyText('')
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
