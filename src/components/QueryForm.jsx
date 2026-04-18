import { useCallback, useState } from 'react'

function truncateSelected(text) {
  if (!text || text.length <= 80) return text
  return `${text.slice(0, 80)}…`
}

export default function QueryForm({
  selectedText = '',
  stepLabel,
  position,
  onSubmit,
  onCancel,
}) {
  const [remark, setRemark] = useState('')
  const trimmed = remark.trim()
  const canSubmit = trimmed.length > 0

  const handleSubmit = useCallback(() => {
    if (!canSubmit) return
    onSubmit(trimmed)
  }, [canSubmit, onSubmit, trimmed])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  const preview = truncateSelected(selectedText)

  return (
    <div
      className="fixed z-[200] w-[260px] rounded-lg border border-[#e0e6ed] bg-white p-3 shadow-lg"
      style={{
        top: position.y,
        left: `clamp(0px, ${position.x}px, calc(100vw - 280px))`,
      }}
    >
      {preview ? (
        <div className="border-l-2 border-[#0077c8] bg-[#f8f9fb] px-2 py-1 text-[11px] italic text-[#6a7380]">
          {preview}
        </div>
      ) : null}
      <div className="mt-1 text-[11px] text-[#b0b7bf]">{stepLabel}</div>
      <textarea
        autoFocus
        rows={3}
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Write your remark..."
        className="mt-2 w-full resize-none rounded border border-[#d2d8e0] p-1.5 text-[12px]"
      />
      <div className="text-[10px] text-[#b0b7bf] mt-1">
        Enter to send · Shift+Enter for new line
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="text-[12px] text-[#6a7380] hover:text-[#1f2328]"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={!canSubmit}
          onClick={handleSubmit}
          className="rounded bg-[#0077c8] px-3 py-1 text-[12px] text-white hover:bg-[#005fa3] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
