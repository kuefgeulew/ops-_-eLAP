import useDocumentStatus from '../hooks/useDocumentStatus'

const STATUS_CONFIG = {
  pending: { label: 'Pending', bg: '#f8f9fb', color: '#6a7380', border: '#d2d8e0' },
  uploaded: { label: 'Uploaded', bg: '#fffbeb', color: '#92400e', border: '#fcd34d' },
  verified: { label: 'Verified', bg: '#f0fdf4', color: '#16a34a', border: '#86efac' },
  rejected: { label: 'Rejected', bg: '#fef2f2', color: '#dc2626', border: '#fca5a5' },
}

export default function DocumentStatusBadge({ uploadKey, showControls = false }) {
  const { status, note, updatedAt, updateStatus, updateNote } = useDocumentStatus(uploadKey)
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending

  if (!showControls) {
    return (
      <span
        style={{
          background: cfg.bg,
          color: cfg.color,
          border: `1px solid ${cfg.border}`,
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 600,
          padding: '2px 6px',
        }}
      >
        {cfg.label}
      </span>
    )
  }

  return (
    <div className="mt-3 rounded-lg border border-[#e8ecef] p-3">
      <div className="mb-2 text-[11px] font-semibold text-[#1f2328]">Document Status</div>

      <div className="flex gap-1">
        {['pending', 'uploaded', 'verified', 'rejected'].map((key) => {
          const itemCfg = STATUS_CONFIG[key] || STATUS_CONFIG.pending
          return (
            <button
              key={key}
              type="button"
              onClick={() => updateStatus(key)}
              style={{
                background: status === key ? itemCfg.bg : '#f8f9fb',
                color: status === key ? itemCfg.color : '#6a7380',
                border: `1px solid ${status === key ? itemCfg.border : '#e8ecef'}`,
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 600,
                padding: '3px 8px',
                cursor: 'pointer',
              }}
            >
              {itemCfg.label}
            </button>
          )
        })}
      </div>

      <textarea
        rows={2}
        placeholder="Add note (optional)..."
        value={note}
        onChange={(e) => updateNote(e.target.value)}
        className="mt-2 w-full resize-none rounded border border-[#d2d8e0] px-2 py-1 text-[11px] outline-none focus:border-[#0077c8]"
      />

      {updatedAt ? (
        <div className="mt-1 text-[10px] text-[#b0b7bf]">
          Updated: {new Date(updatedAt).toLocaleString()}
        </div>
      ) : null}
    </div>
  )
}
