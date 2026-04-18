import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  DOCUMENT_UPLOAD_SCOPE,
  loadUploadsForScope,
  saveUploadToDb,
} from '../lib/uploadDocumentsDb.js'
import {
  attachmentDisplayUrl,
  canonicalUserDocumentStoragePath,
  fetchUserDocumentsManifest,
  hasAttachmentDisplay,
  manifestToAttachmentMap,
} from '../lib/userDocumentPublicPath.js'

const TEAL_PRIMARY = '#157a9e'
const TEAL_PARTY = '#047896'

/** Document type dropdown options for the Business Documents section. */
const BUSINESS_DOCUMENT_TYPE_OPTIONS = [
  'Trade License',
  'E-TIN',
  'Customers undertaking/ trade license deferral permission',
  'E-TIN Verification Copy',
  'Business Financial Relevant Documents',
  'TIN Certificate',
  'Tax Return Receipt',
  'Tax Return Certificate',
  'Undertaking for Submission of TRR (Tax Return Receipt)',
  'BIN Certificate',
  'Bank Statements',
  'Loan Clearance certificate/Zero Balance Loan Statement',
  'Import Registration Certificate (IRC) – for importers',
  'Export Registration Certificate (ERC) – for exporters',
  'Buyers/Suppliers List',
  'Supply Chain Agreement',
  'Special License',
  'Other Documents',
]

/** Document type dropdown options for the General Documents section. */
const GENERAL_DOCUMENT_TYPE_OPTIONS = [
  'Sanction Letter',
  'Loan Application Form (Signed)',
  'Owner Information Page (Signed)',
  'Owners NID Copy',
  'Guarantors Recent passport size color photograph',
  'Owners Verified NID Copy',
  'PDC of Link Account',
  'Guarantors NID Copy',
  'Fire Insurance Form',
  'Guarantors Verified NID Copy',
  'Guarantor Information Page (Signed)',
  'Life insurance Form',
  'NOC for Life Insurance',
  'Letter of Undertaking (CIB)',
  'Debit Authority Form fully filed up (Security Deposit format)',
  'Credit Rating Report',
  'Price Quotation and other relevant documents for Fixed Asset Financing',
  'PDC Acknowledgement letter',
]

/** Document type dropdown options for the Additional Documents section. */
const ADDITIONAL_DOCUMENT_TYPE_OPTIONS = ['Other Additional Documents']

/** Document type dropdown options for the Charge Documents section. */
const CHARGE_DOCUMENT_TYPE_OPTIONS = [
  'Personal Letter of Guarantee',
  'Demand Promissory Note',
  'General Loan Agreement',
  'Letter of Hypothecation of Present & Future Assets',
  'Letter of Continuity',
  'Letter of Lien and Set-Off Over Deposit Accounts/Margin Deposit',
  'Other Charge Documents',
]

/** Document type dropdown options for the FDR/DPS Related Documents section. */
const FDR_DPS_DOCUMENT_TYPE_OPTIONS = [
  'Irrevocable Letter of Authority',
  'Term Deposit/DPS Advice Copy',
  'Letter of Lien and Authorization for Encashment of Securities for Advances against Fixed Deposits',
  'Letter of Lien and Set-off over deposits Account/Margin Deposits',
  'Memorandum Of Deposit Of Securities',
  'Other Documents',
]

/** Stable row ids + most common document types per row (defaults). */
const SECTION_INITIAL_ROW_IDS = {
  business: ['business-0', 'business-1', 'business-2'],
  additional: ['additional-0'],
  general: ['general-0', 'general-1', 'general-2'],
  charge: ['charge-0', 'charge-1'],
  'fdr-dps': ['fdr-0', 'fdr-1'],
}

const SECTION_DEFAULT_DOCUMENT_TYPES = {
  business: ['Trade License', 'E-TIN', 'Bank Statements'],
  additional: ['Other Additional Documents'],
  general: ['Loan Application Form (Signed)', 'Owners NID Copy', 'Sanction Letter'],
  charge: ['General Loan Agreement', 'Demand Promissory Note'],
  'fdr-dps': ['Irrevocable Letter of Authority', 'Term Deposit/DPS Advice Copy'],
}

const KYC_INITIAL_ROW_IDS = ['kyc-0', 'kyc-1']
const KYC_DEFAULT_TYPES = ['photograph', 'nid']

function defaultDocTypeForRow(sectionKey, rowIndex, options) {
  const list = SECTION_DEFAULT_DOCUMENT_TYPES[sectionKey]
  const fallback = options[0] ?? ''
  if (!list?.length) return fallback
  const pick = list[Math.min(rowIndex, list.length - 1)]
  return options.includes(pick) ? pick : fallback
}

async function persistFileToPublicDev(relativePath, file, uploadKey, kind) {
  const buf = await file.arrayBuffer()
  const res = await fetch('/__ops/save-upload', {
    method: 'POST',
    headers: {
      'x-path': encodeURIComponent(relativePath),
      'x-upload-key': encodeURIComponent(uploadKey),
      'x-original-name': encodeURIComponent(file.name),
      'x-kind': kind,
    },
    body: buf,
  })
  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(t || `save failed ${res.status}`)
  }
  return res.json()
}

function FullSizeAttachmentPreview({ file, onRequestClose = null }) {
  const src = attachmentDisplayUrl(file)
  if (!src) return null

  if (file.kind === 'pdf') {
    return (
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-[#1e293b] bg-[#0f172a] shadow-2xl ring-1 ring-black/25">
        <div className="flex items-center gap-2 border-b border-black/40 bg-[#111827] px-2 py-2 text-zinc-100 sm:px-3">
          <span className="shrink-0 rounded bg-[#dc2626] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            PDF
          </span>
          <span className="min-w-0 flex-1 truncate text-left text-[12px] font-medium text-zinc-200">
            {file.name}
          </span>
          {onRequestClose ? (
            <button
              type="button"
              onClick={onRequestClose}
              className="shrink-0 rounded border border-zinc-500 bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-100 hover:bg-zinc-700"
            >
              Close
            </button>
          ) : null}
        </div>
        <div className="bg-[#1e293b] p-2 sm:p-4">
          <iframe
            title={file.name}
            src={src}
            className="h-[min(78vh,860px)] w-full rounded border border-black/30 bg-white"
          />
        </div>
      </div>
    )
  }

  return (
    <figure className="mx-auto flex w-full max-w-6xl flex-col items-center">
      <div className="flex max-h-[min(88vh,980px)] w-full justify-center overflow-auto rounded-lg border border-[#cbd5e1] bg-[#0f172a]/5 p-2 sm:p-3">
        <img
          src={src}
          alt={file.name}
          className="max-h-[min(88vh,980px)] w-auto max-w-full object-contain shadow-md"
        />
      </div>
      <figcaption className="mt-3 max-w-full truncate px-2 text-center text-[13px] font-medium text-[#334155]">
        {file.name}
      </figcaption>
    </figure>
  )
}

function CollapseChevron({ expanded, className = 'text-white' }) {
  return (
    <span
      className={`select-none text-lg font-light leading-none ${className}`}
      aria-hidden
    >
      {expanded ? '−' : '+'}
    </span>
  )
}

function TrashIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#dc3545]"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )
}

function FileStackBadge({
  accent = TEAL_PRIMARY,
  count = 1,
  onToggle = null,
  expanded = false,
}) {
  const n = Math.max(1, Math.min(99, count))
  const icon = (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: accent }}
        aria-hidden
      >
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          fill="currentColor"
          fillOpacity="0.9"
        />
        <path d="M14 2v6h6" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#64748b] px-0.5 text-[10px] font-semibold text-white">
        {n}
      </span>
    </>
  )

  if (onToggle) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        title={expanded ? 'Hide full-size preview' : 'Show full-size preview'}
        aria-label={expanded ? 'Hide full-size attachment preview' : 'Show full-size attachment preview'}
        className={`relative shrink-0 rounded-md border p-0.5 outline-none transition-colors focus-visible:border-[#157a9e] focus-visible:ring-2 focus-visible:ring-[#157a9e]/30 ${
          expanded
            ? 'border-[#7dd3fc] bg-[#e0f2fe] ring-1 ring-[#38bdf8]'
            : 'border-transparent hover:bg-[#f0f7ff]'
        }`}
      >
        {icon}
      </button>
    )
  }

  return (
    <div className="relative shrink-0" title={`${count} file(s)`}>
      {icon}
    </div>
  )
}

function DocumentRow({
  index,
  showFileBadge = true,
  accent = TEAL_PRIMARY,
  documentTypeOptions = null,
  defaultDocumentType = null,
  uploadKey = '',
  attachment = null,
  onFileSelected = null,
  registerPickTrigger = null,
}) {
  const typeOptions = documentTypeOptions ?? []
  const hasChoiceList = typeOptions.length > 0
  const [docType, setDocType] = useState(() => {
    if (defaultDocumentType && typeOptions.includes(defaultDocumentType)) {
      return defaultDocumentType
    }
    return typeOptions[0] ?? ''
  })

  const [attachmentsOpen, setAttachmentsOpen] = useState(false)
  const fileInputRef = useRef(null)
  const fileInputId = useId()
  const hasFile = hasAttachmentDisplay(attachment)

  useEffect(() => {
    if (!registerPickTrigger || !uploadKey) return undefined
    return registerPickTrigger(uploadKey, () => fileInputRef.current?.click())
  }, [registerPickTrigger, uploadKey])

  const statusText = attachment?.name ?? 'No file chosen'

  const onInputChange = (e) => {
    const f = e.target.files?.[0]
    if (f && onFileSelected) onFileSelected(uploadKey, f)
    e.target.value = ''
  }

  return (
    <div
      id={`upload-anchor-${uploadKey.replace(/:/g, '-')}`}
      className="w-full rounded-md border-t border-[#dee2e6] pt-4 first:border-t-0 first:pt-0"
    >
      <div className="flex w-full flex-wrap items-end gap-x-4 gap-y-3 md:flex-nowrap">
        <div className="flex w-8 shrink-0 items-end pb-2 text-[13px] font-medium text-[#374151]">
          {index}.
        </div>
        <div className="min-w-[140px] flex-1 md:min-w-0 md:basis-0">
          <label className="mb-1 block text-[12px] text-[#374151]">Document Type</label>
          <div className="relative">
            <select
              value={hasChoiceList ? docType : ''}
              onChange={(e) => {
                if (!hasChoiceList) return
                setDocType(e.target.value)
                setAttachmentsOpen(false)
              }}
              className={`w-full appearance-none rounded border border-[#dee2e6] bg-white py-2 pl-2 pr-8 text-[12px] outline-none focus:border-[#157a9e] ${
                hasChoiceList ? 'text-[#1f2328]' : 'text-[#6b7280]'
              }`}
            >
              <option value="" disabled>
                Select
              </option>
              {typeOptions.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280]">
              ▼
            </span>
          </div>
        </div>
        <div className="min-w-[200px] flex-1 md:min-w-0 md:basis-0">
          <label className="mb-1 block text-[12px] text-[#374151]">Files</label>
          <div className="flex items-center gap-2">
            {hasFile ? (
              <button
                type="button"
                onClick={() => setAttachmentsOpen((o) => !o)}
                aria-expanded={attachmentsOpen}
                aria-label={attachmentsOpen ? 'Hide file preview' : 'Show file preview'}
                className="flex min-h-[38px] flex-1 cursor-pointer items-center rounded border border-[#dee2e6] bg-white px-2 text-left text-[12px] text-[#374151] outline-none transition-colors hover:bg-[#f8fafc] focus-visible:border-[#157a9e] focus-visible:ring-2 focus-visible:ring-[#157a9e]/25"
              >
                <span className="shrink-0 rounded border border-[#dee2e6] bg-[#f0f1f3] px-2 py-1 text-[11px]">
                  Preview
                </span>
                <span className="ml-2 min-w-0 flex-1 truncate text-[11px] text-[#374151]">
                  {statusText}
                </span>
              </button>
            ) : (
              <label
                htmlFor={fileInputId}
                className="flex min-h-[38px] flex-1 cursor-pointer items-center rounded border border-[#dee2e6] bg-white px-2 text-[12px] text-[#374151]"
              >
                <span className="shrink-0 rounded border border-[#dee2e6] bg-[#f0f1f3] px-2 py-1 text-[11px]">
                  Choose Files
                </span>
                <span
                  className={`ml-2 min-w-0 flex-1 truncate text-[11px] ${attachment ? 'text-[#374151]' : 'text-[#9ca3af]'}`}
                >
                  {statusText}
                </span>
              </label>
            )}
            <input
              id={fileInputId}
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept=".pdf,.png,.jpg,.jpeg,image/*,application/pdf"
              onChange={onInputChange}
            />
            {showFileBadge && hasAttachmentDisplay(attachment) ? (
              <FileStackBadge
                accent={accent}
                count={1}
                expanded={attachmentsOpen}
                onToggle={() => setAttachmentsOpen((o) => !o)}
              />
            ) : null}
          </div>
        </div>
        <div className="min-w-[160px] flex-1 md:min-w-0 md:basis-0">
          <label className="mb-1 block text-[12px] text-[#374151]">Remarks</label>
          <input
            type="text"
            className="w-full rounded border border-[#dee2e6] bg-white px-2 py-2 text-[12px] text-[#1f2328] outline-none focus:border-[#157a9e]"
          />
        </div>
        <div className="flex shrink-0 items-end pb-1">
          <button
            type="button"
            aria-label="Remove row"
            className="rounded p-1 text-[#dc3545] hover:bg-red-50"
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      {attachmentsOpen && hasAttachmentDisplay(attachment) ? (
        <div
          className="mt-4 w-full cursor-pointer rounded-lg border border-[#94a3b8] bg-[#eef2f7] p-2 shadow-md sm:p-4 md:p-6"
          onClick={() => setAttachmentsOpen(false)}
          title="Click to hide preview"
          role="presentation"
        >
          <FullSizeAttachmentPreview
            file={attachment}
            onRequestClose={() => setAttachmentsOpen(false)}
          />
        </div>
      ) : null}
    </div>
  )
}

const KYC_TYPE_LABEL = {
  photograph: 'Photograph of Borrower',
  nid: 'National ID',
}

function KycDocumentRow({
  index,
  defaultKycType = 'photograph',
  uploadKey = '',
  attachment = null,
  onFileSelected = null,
  registerPickTrigger = null,
}) {
  const [kycType, setKycType] = useState(() =>
    defaultKycType === 'nid' || defaultKycType === 'photograph' ? defaultKycType : 'photograph',
  )

  const [attachmentsOpen, setAttachmentsOpen] = useState(false)
  const fileInputRef = useRef(null)
  const fileInputId = useId()
  const hasFile = hasAttachmentDisplay(attachment)

  useEffect(() => {
    if (!registerPickTrigger || !uploadKey) return undefined
    return registerPickTrigger(uploadKey, () => fileInputRef.current?.click())
  }, [registerPickTrigger, uploadKey])

  const statusText = attachment?.name ?? 'No file chosen'

  const onInputChange = (e) => {
    const f = e.target.files?.[0]
    if (f && onFileSelected) onFileSelected(uploadKey, f)
    e.target.value = ''
  }

  return (
    <div
      id={`upload-anchor-${uploadKey.replace(/:/g, '-')}`}
      className="w-full rounded-md border-t border-[#dee2e6] pt-4 first:border-t-0 first:pt-0"
    >
      <div className="flex w-full flex-wrap items-end gap-x-4 gap-y-3 md:flex-nowrap">
        <div className="flex w-8 shrink-0 items-end pb-2 text-[13px] font-medium text-[#374151]">
          {index}.
        </div>
        <div className="min-w-[180px] flex-1 md:min-w-0 md:basis-0">
          <label className="mb-1 block text-[12px] text-[#374151]">
            Document Type<span className="text-[#ef4444]">*</span>
          </label>
          <div className="relative">
            <select
              value={kycType}
              onChange={(e) => {
                setKycType(e.target.value)
                setAttachmentsOpen(false)
              }}
              className="w-full appearance-none rounded border border-[#dee2e6] bg-white py-2 pl-2 pr-8 text-[12px] text-[#1f2328] outline-none focus:border-[#047896]"
            >
              <option value="photograph">Photograph of Borrower</option>
              <option value="nid">National ID</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280]">
              ▼
            </span>
          </div>
        </div>
        <div className="min-w-[220px] flex-1 md:min-w-0 md:basis-0">
          <label className="mb-1 block text-[12px] text-[#374151]">
            Files<span className="text-[#ef4444]">*</span>
          </label>
          <div className="flex items-center gap-2">
            {hasFile ? (
              <button
                type="button"
                onClick={() => setAttachmentsOpen((o) => !o)}
                aria-expanded={attachmentsOpen}
                aria-label={attachmentsOpen ? 'Hide file preview' : 'Show file preview'}
                className="flex min-h-[38px] w-full min-w-0 flex-1 cursor-pointer items-center rounded border border-[#dee2e6] bg-white px-2 text-left text-[12px] text-[#374151] outline-none transition-colors hover:bg-[#f8fafc] focus-visible:border-[#047896] focus-visible:ring-2 focus-visible:ring-[#047896]/25"
              >
                <span className="shrink-0 rounded border border-[#dee2e6] bg-[#f0f1f3] px-2 py-1 text-[11px]">
                  Preview
                </span>
                <span className="ml-2 min-w-0 flex-1 truncate text-[11px] text-[#374151]">
                  {statusText}
                </span>
              </button>
            ) : (
              <label
                htmlFor={fileInputId}
                className="flex min-h-[38px] w-full min-w-0 flex-1 cursor-pointer items-center rounded border border-[#dee2e6] bg-white px-2 text-[12px] text-[#374151]"
              >
                <span className="shrink-0 rounded border border-[#dee2e6] bg-[#f0f1f3] px-2 py-1 text-[11px]">
                  Choose Files
                </span>
                <span
                  className={`ml-2 min-w-0 flex-1 truncate text-[11px] ${attachment ? 'text-[#374151]' : 'text-[#9ca3af]'}`}
                >
                  {statusText}
                </span>
              </label>
            )}
            <input
              id={fileInputId}
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept=".pdf,.png,.jpg,.jpeg,image/*,application/pdf"
              onChange={onInputChange}
            />
            {hasAttachmentDisplay(attachment) ? (
              <FileStackBadge
                accent={TEAL_PARTY}
                count={1}
                expanded={attachmentsOpen}
                onToggle={() => setAttachmentsOpen((o) => !o)}
              />
            ) : null}
          </div>
        </div>
        <div className="min-w-[200px] flex-[1.2] md:flex-1 md:basis-0 md:min-w-0">
          <label className="mb-1 block text-[12px] text-[#374151]">Remarks</label>
          <input
            type="text"
            className="w-full rounded border border-[#dee2e6] bg-white px-2 py-2 text-[12px] text-[#1f2328] outline-none focus:border-[#047896]"
          />
        </div>
        <div className="flex shrink-0 items-end pb-1">
          <button
            type="button"
            aria-label="Remove row"
            className="rounded p-1 text-[#dc3545] hover:bg-red-50"
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      {attachmentsOpen && hasAttachmentDisplay(attachment) ? (
        <div
          className="mt-4 w-full cursor-pointer rounded-lg border border-[#94a3b8] bg-[#eef2f7] p-2 shadow-md sm:p-4 md:p-6"
          onClick={() => setAttachmentsOpen(false)}
          title="Click to hide preview"
          role="presentation"
        >
          <FullSizeAttachmentPreview
            file={attachment}
            onRequestClose={() => setAttachmentsOpen(false)}
          />
        </div>
      ) : null}
    </div>
  )
}

function DocumentSection({
  title,
  sectionExpanded,
  onToggleSection,
  accent = TEAL_PRIMARY,
  documentTypeOptions = null,
  sectionKey = '',
  uploadsByKey,
  onFileSelected,
  registerPickTrigger,
}) {
  const initialIds = SECTION_INITIAL_ROW_IDS[sectionKey] ?? ['row-0']
  const [rowIds, setRowIds] = useState(() => initialIds)

  const addRow = useCallback(() => {
    setRowIds((r) => [...r, `row-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`])
  }, [])

  if (!sectionExpanded) {
    return (
      <div className="border-x border-b border-[#e5e7eb] bg-white">
        <button
          type="button"
          onClick={onToggleSection}
          className="flex w-full items-center justify-between bg-[#f3f4f6] px-3 py-2.5 text-left"
        >
          <span className="text-[13px] font-semibold text-[#374151]">{title}</span>
          <CollapseChevron expanded={false} className="text-[#6b7280]" />
        </button>
      </div>
    )
  }

  return (
    <div className="border-x border-b border-[#e5e7eb] bg-white">
      <button
        type="button"
        onClick={onToggleSection}
        className="flex w-full items-center justify-between bg-[#f3f4f6] px-3 py-2.5 text-left"
      >
        <span className="text-[13px] font-semibold text-[#374151]">{title}</span>
        <CollapseChevron expanded className="text-[#6b7280]" />
      </button>
      <div className="relative px-4 pb-4 pt-3">
        <button
          type="button"
          onClick={addRow}
          className="absolute right-4 top-3 flex h-8 w-8 items-center justify-center rounded border text-lg font-light leading-none text-white shadow-sm hover:opacity-90"
          style={{ backgroundColor: accent, borderColor: accent }}
          aria-label={`Add ${title} row`}
        >
          +
        </button>
        <div className="pr-12">
          {rowIds.map((id, i) => {
            const uploadKey = `${sectionKey}::${id}`
            const defType = defaultDocTypeForRow(sectionKey, i, documentTypeOptions ?? [])
            return (
              <DocumentRow
                key={id}
                index={i + 1}
                accent={accent}
                documentTypeOptions={documentTypeOptions}
                defaultDocumentType={defType}
                uploadKey={uploadKey}
                attachment={uploadsByKey[uploadKey]}
                onFileSelected={onFileSelected}
                registerPickTrigger={registerPickTrigger}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function KycDocumentsBlock({
  uploadsByKey,
  onFileSelected,
  registerPickTrigger,
}) {
  const [rowIds, setRowIds] = useState(() => [...KYC_INITIAL_ROW_IDS])
  const [open, setOpen] = useState(true)

  const addRow = useCallback(() => {
    setRowIds((r) => [...r, `kyc-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`])
  }, [])

  return (
    <div className="mt-4 border border-[#dee2e6] bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between bg-[#f0f1f3] px-3 py-2.5 text-left"
      >
        <span className="text-[13px] font-semibold text-[#374151]">KYC Documents</span>
        <CollapseChevron expanded={open} className="text-[#1f2328]" />
      </button>
      {open && (
        <div className="relative border-t border-[#dee2e6] px-4 pb-4 pt-3">
          <button
            type="button"
            onClick={addRow}
            className="absolute right-4 top-3 flex h-8 w-8 items-center justify-center rounded border border-[#047896] bg-[#047896] text-lg font-light leading-none text-white shadow-sm hover:bg-[#03667d]"
            aria-label="Add KYC document row"
          >
            +
          </button>
          <div className="pr-12">
            {rowIds.map((id, i) => {
              const uploadKey = `owner-kyc::${id}`
              const kycDefault = KYC_DEFAULT_TYPES[Math.min(i, KYC_DEFAULT_TYPES.length - 1)] ?? 'photograph'
              return (
                <KycDocumentRow
                  key={id}
                  index={i + 1}
                  defaultKycType={kycDefault}
                  uploadKey={uploadKey}
                  attachment={uploadsByKey[uploadKey]}
                  onFileSelected={onFileSelected}
                  registerPickTrigger={registerPickTrigger}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function PartySection({ title, expanded, onToggle, children }) {
  return (
    <div className="border-x border-b border-[#e5e7eb] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-[#047896] px-4 py-3 text-left"
      >
        <span className="text-[15px] font-semibold text-white">{title}</span>
        <CollapseChevron expanded={expanded} />
      </button>
      {expanded && children != null ? (
        <div className="border-t border-[#dee2e6] bg-white px-4 py-4">{children}</div>
      ) : null}
    </div>
  )
}

export default function UploadDocuments() {
  const [pageOpen, setPageOpen] = useState(true)
  const [businessOpen, setBusinessOpen] = useState(true)
  const [additionalOpen, setAdditionalOpen] = useState(true)
  const [generalOpen, setGeneralOpen] = useState(true)
  const [chargeOpen, setChargeOpen] = useState(true)
  const [fdrOpen, setFdrOpen] = useState(true)

  const [ownerOpen, setOwnerOpen] = useState(true)
  const [guarantor1Open, setGuarantor1Open] = useState(true)
  const [guarantor2Open, setGuarantor2Open] = useState(false)

  const [uploadsByKey, setUploadsByKey] = useState({})
  const [saveStatus, setSaveStatus] = useState(null)
  const [storageError, setStorageError] = useState(null)
  const pickTriggersRef = useRef(new Map())
  const uploadsRef = useRef(uploadsByKey)

  useEffect(() => {
    uploadsRef.current = uploadsByKey
  }, [uploadsByKey])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const [manifest, rows] = await Promise.all([
          fetchUserDocumentsManifest(),
          loadUploadsForScope(),
        ])
        if (cancelled) return
        const fromDisk = manifestToAttachmentMap(manifest)
        const next = { ...fromDisk }
        for (const row of rows) {
          const blob = row.body
          if (!blob) continue
          if (next[row.uploadKey]?.publicUrl) continue
          const isPdf =
            row.type === 'application/pdf' || row.name?.toLowerCase().endsWith('.pdf')
          next[row.uploadKey] = {
            name: row.name,
            objectUrl: URL.createObjectURL(blob),
            kind: isPdf ? 'pdf' : 'image',
          }
        }
        if (cancelled) {
          Object.values(next).forEach((u) => {
            if (u?.objectUrl) URL.revokeObjectURL(u.objectUrl)
          })
          return
        }
        setUploadsByKey((existing) => {
          const merged = { ...existing }
          for (const [key, value] of Object.entries(next)) {
            if (value.publicUrl) {
              if (merged[key]?.objectUrl) URL.revokeObjectURL(merged[key].objectUrl)
              merged[key] = value
              continue
            }
            if (merged[key]?.objectUrl) continue
            merged[key] = value
          }
          return merged
        })
      } catch (e) {
        console.warn('Could not restore uploads (manifest / IndexedDB)', e)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const registerPickTrigger = useCallback((key, fn) => {
    pickTriggersRef.current.set(key, fn)
    return () => pickTriggersRef.current.delete(key)
  }, [])

  const onFileSelected = useCallback(async (uploadKey, file) => {
    if (!file) return
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
    const kind = isPdf ? 'pdf' : 'image'
    const objectUrl = URL.createObjectURL(file)
    setUploadsByKey((prev) => {
      const cur = prev[uploadKey]
      if (cur?.objectUrl) URL.revokeObjectURL(cur.objectUrl)
      return {
        ...prev,
        [uploadKey]: {
          name: file.name,
          objectUrl,
          kind,
        },
      }
    })
    try {
      await saveUploadToDb(uploadKey, file)
      setStorageError(null)
    } catch (err) {
      const name = err?.name
      setStorageError(
        name === 'QuotaExceededError'
          ? 'Browser storage is full. Try smaller files or clear site data for this app.'
          : 'Could not save a permanent copy in the browser (IndexedDB).',
      )
      console.warn('IndexedDB save failed:', err)
    }

    let finalEntry = { name: file.name, objectUrl, kind }
    if (import.meta.env.DEV) {
      try {
        const rel = canonicalUserDocumentStoragePath(uploadKey, file.name)
        const data = await persistFileToPublicDev(rel, file, uploadKey, kind)
        if (data?.publicPath) {
          URL.revokeObjectURL(objectUrl)
          finalEntry = {
            name: file.name,
            publicUrl: `${data.publicPath}?v=${file.lastModified}`,
            kind,
          }
        }
      } catch (err) {
        console.warn('Dev save to public/user-documents failed:', err)
      }
    }

    setUploadsByKey((prev) => ({
      ...prev,
      [uploadKey]: finalEntry,
    }))
  }, [])

  useEffect(
    () => () => {
      Object.values(uploadsRef.current).forEach((u) => {
        if (u?.objectUrl) URL.revokeObjectURL(u.objectUrl)
      })
    },
    [],
  )

  const handleSaveClick = useCallback(async () => {
    setSaveStatus(null)
    try {
      const [stored, manifest] = await Promise.all([
        loadUploadsForScope(),
        fetchUserDocumentsManifest(),
      ])
      const diskSlots = Object.keys(manifest?.entries ?? {}).length
      setSaveStatus({
        ok: true,
        text: `${stored.length} file(s) in IndexedDB (case ${DOCUMENT_UPLOAD_SCOPE}). ${diskSlots} slot(s) mapped on disk in public/user-documents/manifest.json — the UI loads /user-documents/… for each row when that file exists. Reload to verify.`,
      })
    } catch (e) {
      setSaveStatus({
        ok: false,
        text: e?.message ?? 'Could not read browser storage.',
      })
    }
  }, [])

  return (
    <div className="min-h-screen w-full max-w-none bg-[#f0f2f5] px-2 py-6 pb-24 text-[#1f2328] sm:px-4 md:px-6">
      <div className="w-full min-w-0 max-w-none overflow-hidden rounded-sm border border-[#d1d5db] bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setPageOpen((o) => !o)}
          className="flex w-full items-center justify-between border border-white bg-[#157a9e] px-4 py-3 text-left"
        >
          <h1 className="text-[15px] font-semibold tracking-tight text-white">
            Upload Documents
          </h1>
          <CollapseChevron expanded={pageOpen} />
        </button>

        {pageOpen && (
          <>
            <div className="border-x border-b border-[#e5e7eb] bg-[#fafafa] px-4 py-4">
              {storageError ? (
                <p className="mb-3 rounded border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-900">
                  {storageError}
                </p>
              ) : null}
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-x-6 md:gap-x-10">
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">Name</label>
                  <input
                    type="text"
                    readOnly
                    value="BISMILLAH STORE"
                    className="w-full rounded border border-[#e5e7eb] bg-[#eef1f4] px-2.5 py-2 text-[12px] text-[#1f2328]"
                  />
                </div>
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">
                    Type of Entity
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="Proprietorship"
                    className="w-full rounded border border-[#e5e7eb] bg-[#eef1f4] px-2.5 py-2 text-[12px] text-[#1f2328]"
                  />
                </div>
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">CIF ID</label>
                  <input
                    type="text"
                    readOnly
                    value="4909930"
                    className="w-full rounded border border-[#d1d5db] bg-white px-2.5 py-2 text-[12px] text-[#1f2328]"
                  />
                </div>
              </div>
            </div>

            <DocumentSection
              title="Business Documents"
              sectionKey="business"
              sectionExpanded={businessOpen}
              onToggleSection={() => setBusinessOpen((o) => !o)}
              documentTypeOptions={BUSINESS_DOCUMENT_TYPE_OPTIONS}
              uploadsByKey={uploadsByKey}
              onFileSelected={onFileSelected}
              registerPickTrigger={registerPickTrigger}
            />
            <DocumentSection
              title="Additional Documents"
              sectionKey="additional"
              sectionExpanded={additionalOpen}
              onToggleSection={() => setAdditionalOpen((o) => !o)}
              documentTypeOptions={ADDITIONAL_DOCUMENT_TYPE_OPTIONS}
              uploadsByKey={uploadsByKey}
              onFileSelected={onFileSelected}
              registerPickTrigger={registerPickTrigger}
            />
            <DocumentSection
              title="General Documents"
              sectionKey="general"
              sectionExpanded={generalOpen}
              onToggleSection={() => setGeneralOpen((o) => !o)}
              documentTypeOptions={GENERAL_DOCUMENT_TYPE_OPTIONS}
              uploadsByKey={uploadsByKey}
              onFileSelected={onFileSelected}
              registerPickTrigger={registerPickTrigger}
            />
            <DocumentSection
              title="Charge Documents"
              sectionKey="charge"
              sectionExpanded={chargeOpen}
              onToggleSection={() => setChargeOpen((o) => !o)}
              documentTypeOptions={CHARGE_DOCUMENT_TYPE_OPTIONS}
              uploadsByKey={uploadsByKey}
              onFileSelected={onFileSelected}
              registerPickTrigger={registerPickTrigger}
            />
            <DocumentSection
              title="FDR/DPS Related Documents"
              sectionKey="fdr-dps"
              sectionExpanded={fdrOpen}
              onToggleSection={() => setFdrOpen((o) => !o)}
              documentTypeOptions={FDR_DPS_DOCUMENT_TYPE_OPTIONS}
              uploadsByKey={uploadsByKey}
              onFileSelected={onFileSelected}
              registerPickTrigger={registerPickTrigger}
            />

            <PartySection
              title="Owner 1 Details"
              expanded={ownerOpen}
              onToggle={() => setOwnerOpen((o) => !o)}
            >
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8">
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">Name</label>
                  <input
                    type="text"
                    readOnly
                    value="MOHAMMAD ALAM"
                    className="w-full rounded border border-[#dee2e6] bg-[#f0f1f3] px-2.5 py-2 text-[12px] text-[#1f2328]"
                  />
                </div>
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">CIF ID</label>
                  <input
                    type="text"
                    className="w-full rounded border border-[#dee2e6] bg-white px-2.5 py-2 text-[12px] text-[#1f2328]"
                    placeholder=""
                  />
                </div>
              </div>
              <KycDocumentsBlock
                uploadsByKey={uploadsByKey}
                onFileSelected={onFileSelected}
                registerPickTrigger={registerPickTrigger}
              />
            </PartySection>

            <PartySection
              title="Guarantor 1 Details"
              expanded={guarantor1Open}
              onToggle={() => setGuarantor1Open((o) => !o)}
            >
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8">
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">Name</label>
                  <input
                    type="text"
                    readOnly
                    value="MD SHARIF"
                    className="w-full rounded border border-[#dee2e6] bg-[#f0f1f3] px-2.5 py-2 text-[12px] text-[#1f2328]"
                  />
                </div>
                <div className="min-w-0">
                  <label className="mb-1 block text-[12px] text-[#374151]">CIF ID</label>
                  <input
                    type="text"
                    className="w-full rounded border border-[#dee2e6] bg-white px-2.5 py-2 text-[12px] text-[#1f2328]"
                  />
                </div>
              </div>
            </PartySection>

            <PartySection
              title="Guarantor 2 Details"
              expanded={guarantor2Open}
              onToggle={() => setGuarantor2Open((o) => !o)}
            />

            <div className="flex flex-col items-end gap-2 border-x border-b border-[#e5e7eb] bg-white px-4 py-4">
              {saveStatus ? (
                <p
                  className={`max-w-full text-right text-[12px] ${
                    saveStatus.ok ? 'text-[#166534]' : 'text-[#b91c1c]'
                  }`}
                >
                  {saveStatus.text}
                </p>
              ) : null}
              <button
                type="button"
                onClick={handleSaveClick}
                className="min-w-[100px] rounded-sm px-6 py-2.5 text-[14px] font-semibold text-white shadow-sm hover:opacity-95"
                style={{ backgroundColor: TEAL_PARTY }}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
