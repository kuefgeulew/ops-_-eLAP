/**
 * Page size selector and “showing X–Y of Z” summary for the grid footer.
 */
import { useEffect, useRef, useState } from 'react'
import { PAGE_SIZE_OPTIONS } from '../config/uiConstants'
import Button from './ui/Button'

function Pagination({ totalEntries, pageSize, onPageSizeChange }) {
  const [isSizeOpen, setIsSizeOpen] = useState(false)
  const sizeRef = useRef(null)

  useEffect(() => {
    function handleOutside(event) {
      if (sizeRef.current && !sizeRef.current.contains(event.target)) {
        setIsSizeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <div className="flex items-center justify-end border border-t-0 border-[#e7ebf0] bg-white px-3 py-1.5">
      <div className="flex items-center gap-2 text-[12px] text-[#48515c]">
        <span>Total {totalEntries} Entries</span>
        <div className="relative" ref={sizeRef}>
          <Button
            type="button"
            onClick={() => setIsSizeOpen((o) => !o)}
            className="flex h-6 min-w-[62px] items-center justify-between border border-[#dbe1e8] px-2 text-[12px]"
          >
            {pageSize} <span className="text-[10px]">▼</span>
          </Button>
          {isSizeOpen && (
            <div className="absolute bottom-full right-0 z-20 mb-1 min-w-full border border-[#dbe1e8] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
              {PAGE_SIZE_OPTIONS.map((opt) => (
                <Button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onPageSizeChange(opt)
                    setIsSizeOpen(false)
                  }}
                  className={`flex h-8 w-full items-center px-3 text-left text-[13px] hover:bg-[#f4f7fb] ${
                    opt === pageSize ? 'bg-[#eef6fc] font-semibold text-[#007cbf]' : ''
                  }`}
                >
                  {opt}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pagination
