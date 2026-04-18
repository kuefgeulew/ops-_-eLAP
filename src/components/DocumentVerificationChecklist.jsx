import { getDocumentChecklist } from '../config/documentFieldConfig'
import useDocumentChecklist from '../hooks/useDocumentChecklist'

export default function DocumentVerificationChecklist({ uploadKey, docType }) {
  const items = getDocumentChecklist(docType)
  const { checks, toggle, completedCount, totalCount, allComplete } = useDocumentChecklist(
    uploadKey,
    items,
  )
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <div className="mt-3 rounded-lg border border-[#e8ecef] p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-[11px] font-semibold text-[#1f2328]">Verification Checklist</div>
        {allComplete ? (
          <div className="rounded-full border border-[#86efac] bg-[#f0fdf4] px-2 py-0.5 text-[10px] font-semibold text-[#16a34a]">
            {completedCount}/{totalCount} Complete
          </div>
        ) : (
          <div className="rounded-full border border-[#e8ecef] bg-[#f8f9fb] px-2 py-0.5 text-[10px] font-semibold text-[#6a7380]">
            {completedCount}/{totalCount}
          </div>
        )}
      </div>

      <div className="mb-3 h-1 rounded bg-[#e8ecef]">
        <div
          className="h-full rounded bg-[#16a34a] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {items.map((item) => (
        <label key={item.key} className="group flex cursor-pointer items-center gap-2 py-1">
          <input
            type="checkbox"
            checked={!!checks[item.key]}
            onChange={() => toggle(item.key)}
            className="h-3.5 w-3.5 accent-[#0077c8]"
          />
          <span
            className={`text-[11px] ${checks[item.key] ? 'line-through text-[#b0b7bf]' : 'text-[#1f2328]'}`}
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>
  )
}
