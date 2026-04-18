export default function DocumentDataEntry({
  fields = [],
  values = {},
  onChange,
  onSave,
  saved = false,
  docType = '',
  mismatches = new Set(),
}) {
  return (
    <div className="h-full overflow-y-auto px-4 py-3">
      <div className="mb-3 text-[13px] font-semibold text-[#1f2328]">Document Data — {docType}</div>

      {fields.map((field) => (
        <div key={field.key} className="mb-3">
          {(() => {
            const isMismatch = mismatches.has(field.key)
            return (
              <>
          <label className="mb-0.5 block text-[11px] text-[#6a7380]">{field.label}</label>

          {field.type === 'text' ? (
            <input
              type="text"
              value={values[field.key] || ''}
              onChange={(e) => onChange(field.key, e.target.value)}
              className={`w-full rounded border px-2 py-1 text-[12px] outline-none focus:border-[#0077c8] ${
                isMismatch ? 'border-[#f59e0b]' : 'border-[#d2d8e0]'
              }`}
            />
          ) : null}

          {field.type === 'date' ? (
            <input
              type="date"
              value={values[field.key] || ''}
              onChange={(e) => onChange(field.key, e.target.value)}
              className={`w-full rounded border px-2 py-1 text-[12px] outline-none focus:border-[#0077c8] ${
                isMismatch ? 'border-[#f59e0b]' : 'border-[#d2d8e0]'
              }`}
            />
          ) : null}

          {field.type === 'select' ? (
            <select
              value={values[field.key] || ''}
              onChange={(e) => onChange(field.key, e.target.value)}
              className={`w-full rounded border px-2 py-1 text-[12px] outline-none focus:border-[#0077c8] ${
                isMismatch ? 'border-[#f59e0b]' : 'border-[#d2d8e0]'
              }`}
            >
              <option value="">— Select —</option>
              {(field.options || []).map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : null}
          {isMismatch ? (
            <p style={{ fontSize: 10, color: '#92400e', marginTop: 2 }}>⚠ Does not match case profile</p>
          ) : null}
              </>
            )
          })()}
        </div>
      ))}

      <div className="sticky bottom-0 border-t border-[#e8ecef] bg-white pt-2">
        <button
          type="button"
          onClick={onSave}
          className="w-full rounded bg-[#0077c8] py-1.5 text-[12px] text-white hover:bg-[#005fa3]"
        >
          {saved ? '✓ Saved' : 'Save Data'}
        </button>
      </div>
    </div>
  )
}
