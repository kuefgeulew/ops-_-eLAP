import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import QueryForm from './QueryForm'

export default function QueryBubble({
  contentRef,
  stepIndex,
  stepLabel,
  onQueryAdded,
  queries,
}) {
  const [bubble, setBubble] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formPosition, setFormPosition] = useState({ x: 0, y: 0 })
  const [tooltip, setTooltip] = useState(null)

  const onQueryAddedRef = useRef(onQueryAdded)
  useEffect(() => {
    onQueryAddedRef.current = onQueryAdded
  }, [onQueryAdded])

  const showFormRef = useRef(showForm)
  useEffect(() => {
    showFormRef.current = showForm
  }, [showForm])

  const savedRangeRef = useRef(null)

  const handleMouseUp = useCallback(() => {
    if (showFormRef.current) return
    const root = contentRef?.current
    if (!root) {
      setBubble(null)
      return
    }

    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0) {
      setBubble(null)
      return
    }

    const selectedText = sel.toString().trim()
    if (selectedText.length < 2) {
      setBubble(null)
      return
    }

    let range
    try {
      range = sel.getRangeAt(0)
    } catch {
      setBubble(null)
      return
    }

    const anchor = range.commonAncestorContainer
    if (!root.contains(anchor)) {
      setBubble(null)
      return
    }

    const rect = range.getBoundingClientRect()
    savedRangeRef.current = range.cloneRange()
    setBubble({
      text: selectedText,
      x: rect.left + rect.width / 2,
      y: rect.top - 40,
    })
  }, [contentRef])

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    return () => document.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseUp])

  useEffect(() => {
    const root = contentRef?.current
    if (!root) return undefined

    const targetEl = (t) =>
      t?.nodeType === Node.TEXT_NODE ? t.parentElement : t

    const onMouseOver = (e) => {
      const el = targetEl(e.target)
      const mark = el?.closest?.('mark[data-elap-query="saved"]')
      if (!mark || !root.contains(mark)) return
      const rect = mark.getBoundingClientRect()
      setTooltip({
        x: rect.left + rect.width / 2,
        y: rect.top,
        text: mark.dataset.elapRemark || '',
      })
    }

    const onMouseOut = (e) => {
      const el = targetEl(e.target)
      const fromMark = el?.closest?.('mark[data-elap-query="saved"]')
      if (!fromMark || !root.contains(fromMark)) return
      const rel = targetEl(e.relatedTarget)
      if (rel && (fromMark === rel || fromMark.contains(rel))) return
      setTooltip(null)
    }

    root.addEventListener('mouseover', onMouseOver)
    root.addEventListener('mouseout', onMouseOut)
    return () => {
      root.removeEventListener('mouseover', onMouseOver)
      root.removeEventListener('mouseout', onMouseOut)
    }
  }, [contentRef])

  useEffect(() => {
    if (!queries || queries.length === 0) return
    const timer = setTimeout(() => {
      const root = contentRef?.current
      if (!root) return

      queries.forEach((query) => {
        if (!query.selectedText || query.resolved) return
        const existing = document.querySelector(
          `mark[data-elap-query-id="${query.id}"]`
        )
        if (existing) return

        // Search for text node containing selectedText within contentRef only
        const walker = document.createTreeWalker(
          root,
          NodeFilter.SHOW_TEXT,
          null
        )
        let node
        let found = false
        while ((node = walker.nextNode())) {
          const idx = node.textContent.indexOf(query.selectedText)
          if (idx === -1) continue
          try {
            const range = document.createRange()
            range.setStart(node, idx)
            range.setEnd(node, idx + query.selectedText.length)
            const mark = document.createElement('mark')
            mark.style.cssText =
              'background: #fca5a5; color: inherit; padding: 0; cursor: pointer;'
            mark.dataset.elapQuery = 'saved'
            mark.dataset.elapRemark = query.remark
            mark.dataset.elapQueryId = query.id
            range.surroundContents(mark)
            found = true
            break
          } catch {
            continue
          }
        }
      })
    }, 800)

    return () => clearTimeout(timer)
  }, [queries, stepIndex, contentRef])

  const handleAddQueryClick = useCallback(() => {
    if (!bubble) return
    setFormPosition({ x: bubble.x, y: bubble.y + 44 })
    window.getSelection()?.removeAllRanges()
    setShowForm(true)
  }, [bubble])

  const handleDismissBubble = useCallback(() => {
    setBubble(null)
    savedRangeRef.current = null
  }, [])

  const handleFormSubmit = useCallback(
    (remark) => {
      if (!bubble) return

      const queryId = Date.now().toString()

      if (savedRangeRef.current) {
        try {
          const mark = document.createElement('mark')
          mark.style.cssText =
            'background: #fca5a5; color: inherit; padding: 0; cursor: pointer;'
          mark.dataset.elapQuery = 'saved'
          mark.dataset.elapRemark = remark
          mark.dataset.elapQueryId = queryId
          savedRangeRef.current.surroundContents(mark)
        } catch {}
        savedRangeRef.current = null
      }

      onQueryAddedRef.current?.({
        id: queryId,
        stepIndex,
        stepLabel,
        selectedText: bubble.text,
        position: formPosition,
        remark,
      })

      setShowForm(false)
      setBubble(null)
    },
    [bubble, formPosition, stepIndex, stepLabel]
  )

  const handleFormCancel = useCallback(() => {
    savedRangeRef.current = null
    setShowForm(false)
    setBubble(null)
  }, [])

  return createPortal(
    <>
      {bubble && !showForm ? (
        <div
          className="fixed z-[150] flex gap-1 rounded bg-[#1f2328] px-2 py-1 shadow"
          style={{
            top: bubble.y,
            left: bubble.x,
            transform: 'translateX(-50%)',
          }}
        >
          <button
            type="button"
            onClick={handleAddQueryClick}
            className="text-[11px] font-medium text-white"
          >
            + Add Query
          </button>
          <button
            type="button"
            onClick={handleDismissBubble}
            className="text-[11px] text-[#b0b7bf]"
          >
            ✕
          </button>
        </div>
      ) : null}
      {showForm && bubble ? (
        <QueryForm
          selectedText={bubble.text}
          stepLabel={stepLabel}
          position={formPosition}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      ) : null}
      {tooltip ? (
        <div
          role="tooltip"
          style={{
            position: 'fixed',
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, calc(-100% - 6px))',
            maxWidth: 280,
            padding: '6px 8px',
            background: '#1f2328',
            color: '#fff',
            fontSize: 12,
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: 250,
            pointerEvents: 'none',
          }}
        >
          {tooltip.text}
        </div>
      ) : null}
    </>,
    document.body
  )
}
