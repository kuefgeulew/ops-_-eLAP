import { getDocumentFields } from '../config/documentFieldConfig'
import useDocumentData from '../hooks/useDocumentData'
import useFieldMismatch from '../hooks/useFieldMismatch'
import DocumentDataEntry from './DocumentDataEntry'
import DocumentStatusBadge from './DocumentStatusBadge'
import DocumentVerificationChecklist from './DocumentVerificationChecklist'

export default function DocumentPreviewModal({
  open,
  onClose,
  imageUrl,
  uploadKey,
  scope,
  docType,
  docLabel,
  fileType,
}) {
  if (!open) return null

  const fields = getDocumentFields(docType)
  const { values, saved, handleChange, handleSave } = useDocumentData(uploadKey, scope, docType)
  const { mismatches } = useFieldMismatch(uploadKey, scope, docType, values)

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/60">
      <div className="flex h-[90vh] w-[90vw] max-w-[1200px] flex-col rounded-xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-[#e8ecef] px-4 py-3">
          <div className="text-[14px] font-semibold text-[#1f2328]">{docLabel} — Preview</div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6a7380] hover:text-[#1f2328]"
            aria-label="Close preview"
          >
            ✕
          </button>
        </div>

        <div className="flex min-h-0 flex-1">
          <div className="flex flex-1 items-start justify-center overflow-auto border-r border-[#e8ecef] bg-[#f8f9fb] p-4">
            {String(fileType || '').startsWith('image/') ? (
              <img src={imageUrl} alt="document" className="max-w-full rounded object-contain shadow-md" />
            ) : null}

            {fileType === 'application/pdf' ? (
              <iframe src={imageUrl} className="h-full w-full rounded border-0" title="document-preview" />
            ) : null}

            {!String(fileType || '').startsWith('image/') && fileType !== 'application/pdf' ? (
              <div className="mt-8 text-[13px] text-[#6a7380]">Preview not available for this file type.</div>
            ) : null}
          </div>

          <div className="w-[360px] shrink-0 overflow-y-auto">
            <DocumentDataEntry
              fields={fields}
              values={values}
              onChange={handleChange}
              onSave={handleSave}
              saved={saved}
              docType={docLabel}
              mismatches={mismatches}
            />
            <div className="px-4 pb-3">
              <DocumentStatusBadge uploadKey={uploadKey} showControls={true} />
              <DocumentVerificationChecklist uploadKey={uploadKey} docType={docType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
