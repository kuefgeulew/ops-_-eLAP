/**
 * Paginated case grid with column picker, selection, row actions, and hardcopy/print modals.
 */
import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import {
  columnPickerOptions,
  defaultVisibleColumns,
  drutiActionItems,
  nonDrutiActionItems,
  tableColumns,
} from '../data/tableConfig'
import { getWorkflowSteps } from '../config/workflowConfig'
import useClickOutside from '../hooks/useClickOutside'
import usePaginatedRows from '../hooks/usePaginatedRows'

function exportToXLSX(rows, visibleColumns, tableColumns) {
  const cols = tableColumns.filter((c) => visibleColumns[c.key])
  const headers = cols.map((c) => c.label)
  const dataRows = rows.map((row) =>
    cols.map((col) => {
      const v = row[col.key]
      return v === undefined || v === null || v === '-' || v === '' ? '' : String(v)
    }),
  )

  // Build XML parts
  const escXml = (s) =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')

  const sharedStrings = []
  const ssMap = {}
  const si = (v) => {
    const k = String(v)
    if (ssMap[k] === undefined) {
      ssMap[k] = sharedStrings.length
      sharedStrings.push(k)
    }
    return ssMap[k]
  }

  const allRows = [headers, ...dataRows]
  const cellLetter = (i) => {
    let s = ''
    let n = i + 1
    while (n > 0) {
      s = String.fromCharCode(64 + (n % 26 || 26)) + s
      n = Math.floor((n - 1) / 26)
    }
    return s
  }

  const sheetRows = allRows
    .map(
      (row, ri) =>
        `<row r="${ri + 1}">${row
          .map(
            (cell, ci) =>
              `<c r="${cellLetter(ci)}${ri + 1}" t="s"${ri === 0 ? ' s="1"' : ''}><v>${si(escXml(cell))}</v></c>`,
          )
          .join('')}</row>`,
    )
    .join('')

  const ssXml = `<?xml version="1.0" encoding="UTF-8"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${sharedStrings.length}" uniqueCount="${sharedStrings.length}">${sharedStrings.map((s) => `<si><t xml:space="preserve">${escXml(s)}</t></si>`).join('')}</sst>`

  const sheetXml = `<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${sheetRows}</sheetData></worksheet>`

  const stylesXml = `<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts><font><sz val="11"/></font><font><sz val="11"/><b/></font></fonts><fills><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF0077C8"/></patternFill></fill></fills><borders><border/></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs><xf fontId="0" fillId="0"/><xf fontId="1" fillId="2" applyFont="1" applyFill="1"><alignment horizontal="center"/></xf></cellXfs></styleSheet>`

  const wbXml = `<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Cases" sheetId="1" r:id="rId1"/></sheets></workbook>`

  const wbRels = `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`

  const pkgRels = `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`

  const ct = `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`

  // Minimal ZIP builder
  function u8(s) {
    return new TextEncoder().encode(s)
  }
  function crc32(buf) {
    const t = new Int32Array(256)
    for (let i = 0; i < 256; i++) {
      let c = i
      for (let j = 0; j < 8; j++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      t[i] = c
    }
    let c = 0xffffffff
    for (const b of buf) c = t[(c ^ b) & 0xff] ^ (c >>> 8)
    return (c ^ 0xffffffff) >>> 0
  }
  function entry(name, data) {
    const n = u8(name),
      d = typeof data === 'string' ? u8(data) : data
    const crc = crc32(d),
      sz = d.length
    const lh = new Uint8Array(30 + n.length)
    const dv = new DataView(lh.buffer)
    dv.setUint32(0, 0x04034b50, true)
    dv.setUint16(4, 20, true)
    dv.setUint16(6, 0, true)
    dv.setUint16(8, 0, true)
    dv.setUint16(10, 0, true)
    dv.setUint16(12, 0, true)
    dv.setUint32(14, crc, true)
    dv.setUint32(18, sz, true)
    dv.setUint32(22, sz, true)
    dv.setUint16(26, n.length, true)
    dv.setUint16(28, 0, true)
    lh.set(n, 30)
    return { name: n, data: d, lh, crc, sz }
  }
  const files = [
    entry('[Content_Types].xml', ct),
    entry('_rels/.rels', pkgRels),
    entry('xl/workbook.xml', wbXml),
    entry('xl/_rels/workbook.xml.rels', wbRels),
    entry('xl/worksheets/sheet1.xml', sheetXml),
    entry('xl/sharedStrings.xml', ssXml),
    entry('xl/styles.xml', stylesXml),
  ]
  const parts = []
  let off = 0
  const cds = []
  for (const f of files) {
    cds.push({ name: f.name, crc: f.crc, sz: f.sz, off })
    parts.push(f.lh, f.data)
    off += f.lh.length + f.sz
  }
  const cdParts = cds.map((cd) => {
    const b = new Uint8Array(46 + cd.name.length),
      dv = new DataView(b.buffer)
    dv.setUint32(0, 0x02014b50, true)
    dv.setUint16(4, 20, true)
    dv.setUint16(6, 20, true)
    dv.setUint16(8, 0, true)
    dv.setUint16(10, 0, true)
    dv.setUint16(12, 0, true)
    dv.setUint32(14, cd.crc, true)
    dv.setUint32(18, cd.sz, true)
    dv.setUint32(22, cd.sz, true)
    dv.setUint16(26, cd.name.length, true)
    dv.setUint16(28, 0, true)
    dv.setUint16(30, 0, true)
    dv.setUint16(32, 0, true)
    dv.setUint16(34, 0, true)
    dv.setUint32(38, 0, true)
    dv.setUint32(42, cd.off, true)
    b.set(cd.name, 46)
    return b
  })
  const cdSize = cdParts.reduce((s, p) => s + p.length, 0)
  const eocd = new Uint8Array(22)
  const edv = new DataView(eocd.buffer)
  edv.setUint32(0, 0x06054b50, true)
  edv.setUint16(4, 0, true)
  edv.setUint16(6, 0, true)
  edv.setUint16(8, cds.length, true)
  edv.setUint16(10, cds.length, true)
  edv.setUint32(12, cdSize, true)
  edv.setUint32(16, off, true)
  edv.setUint16(20, 0, true)
  const blob = new Blob([...parts, ...cdParts, eocd], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `elap_cases_${new Date().toISOString().slice(0, 10)}.xlsx`
  a.click()
  URL.revokeObjectURL(url)
}

function DataTable({
  data,
  page = 1,
  pageSize = 10,
  onFilteredRowCountChange,
  selectedTrackingIds = [],
  onToggleRowSelection,
  onToggleAllVisible,
  workflowProgress = {},
  querySummaries = {},
}) {
  const [isColumnPickerOpen, setIsColumnPickerOpen] = useState(false)
  const [openActionMenuFor, setOpenActionMenuFor] = useState(null)
  const [hardcopyPopupData, setHardcopyPopupData] = useState(null)
  const [printPopupData, setPrintPopupData] = useState(null)
  const [selectedPrintDocs, setSelectedPrintDocs] = useState([])
  const [visibleColumns, setVisibleColumns] = useState(defaultVisibleColumns)
  const [draftVisibleColumns, setDraftVisibleColumns] = useState(defaultVisibleColumns)
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')
  const [columnFilters, setColumnFilters] = useState({})
  const [openFilterCol, setOpenFilterCol] = useState(null)
  const filterPanelRef = useRef(null)
  const filterThRefs = useRef({})
  const [filterPanelPos, setFilterPanelPos] = useState({ top: 0, left: 0 })
  const [filterSearch, setFilterSearch] = useState('')
  const [copyFeedback, setCopyFeedback] = useState(false)
  const [lastClickedIndex, setLastClickedIndex] = useState(null)
  const columnPickerRef = useRef(null)
  const actionMenuRef = useRef(null)

  useClickOutside(
    useMemo(
      () => [
        { ref: columnPickerRef, onOutside: () => setIsColumnPickerOpen(false) },
        { ref: actionMenuRef, onOutside: () => setOpenActionMenuFor(null) },
        { ref: filterPanelRef, onOutside: () => setOpenFilterCol(null) },
      ],
      [],
    ),
  )

  useEffect(() => {
    setFilterSearch('')
  }, [openFilterCol])

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const sortedData = useMemo(() => {
    if (!sortKey) return data
    return [...data].sort((a, b) => {
      const av = String(a[sortKey] ?? '')
      const bv = String(b[sortKey] ?? '')
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
    })
  }, [data, sortKey, sortDir])

  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      Object.entries(columnFilters).every(([key, vals]) =>
        vals.length === 0 || vals.includes(String(row[key] ?? '')),
      ),
    )
  }, [sortedData, columnFilters])

  useLayoutEffect(() => {
    if (!openFilterCol) return
    function position() {
      const el = filterThRefs.current[openFilterCol]
      if (!el) return
      const r = el.getBoundingClientRect()
      setFilterPanelPos({ top: r.bottom, left: r.left })
    }
    position()
    window.addEventListener('scroll', position, true)
    window.addEventListener('resize', position)
    return () => {
      window.removeEventListener('scroll', position, true)
      window.removeEventListener('resize', position)
    }
  }, [openFilterCol, sortKey, sortDir, visibleColumns, filteredData.length])

  useEffect(() => {
    onFilteredRowCountChange?.(filteredData.length)
  }, [filteredData.length, onFilteredRowCountChange])

  const rows = usePaginatedRows(filteredData, page, pageSize)

  const filterUniqValues = useMemo(() => {
    if (!openFilterCol) return []
    const s = new Set()
    for (const row of data) {
      s.add(String(row[openFilterCol] ?? ''))
    }
    return Array.from(s).sort((a, b) => a.localeCompare(b))
  }, [data, openFilterCol])
  const selectedSet = useMemo(() => new Set(selectedTrackingIds), [selectedTrackingIds])
  const allVisibleSelected = rows.length > 0 && rows.every((r) => selectedSet.has(r.trackingId))

  const handleRowCheckboxClick = useCallback(
    (e, row, rowIndex) => {
      e.stopPropagation()
      if (e.shiftKey && lastClickedIndex !== null) {
        const start = Math.min(lastClickedIndex, rowIndex)
        const end = Math.max(lastClickedIndex, rowIndex)
        const rangeRows = rows.slice(start, end + 1)
        rangeRows.forEach((r) => {
          if (!selectedSet.has(r.trackingId)) {
            onToggleRowSelection?.(r.trackingId)
          }
        })
      } else {
        onToggleRowSelection?.(row.trackingId)
        setLastClickedIndex(rowIndex)
      }
    },
    [lastClickedIndex, rows, selectedSet, onToggleRowSelection],
  )

  useEffect(() => {
    setLastClickedIndex(null)
  }, [page])

  const handleCopySelected = useCallback(() => {
    const visibleCols = tableColumns.filter((col) => visibleColumns[col.key])
    const headers = visibleCols.map((col) => col.label).join('\t')
    const selectedSetForCopy = new Set(selectedTrackingIds)
    const selectedRows = filteredData.filter((row) => selectedSetForCopy.has(row.trackingId))
    const dataRows = selectedRows.map((row) =>
      visibleCols.map((col) => String(row[col.key] ?? '')).join('\t'),
    )
    const text = [headers, ...dataRows].join('\n')
    navigator.clipboard?.writeText(text)?.then(() => {
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 2000)
    })
  }, [filteredData, selectedTrackingIds, tableColumns, visibleColumns])

  const handleExportSelected = useCallback(() => {
    const selectedSetForExport = new Set(selectedTrackingIds)
    const selectedRows = filteredData.filter((row) => selectedSetForExport.has(row.trackingId))
    exportToXLSX(selectedRows, visibleColumns, tableColumns)
  }, [filteredData, selectedTrackingIds, visibleColumns])

  useEffect(() => {
    const handler = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key === 'c' &&
        selectedTrackingIds.size > 0
      ) {
        e.preventDefault()
        handleCopySelected()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [handleCopySelected, selectedTrackingIds])

  function renderRoc(value) {
    if (!value || value === '-') return 'HO Operation'
    return value
  }

  function renderDeferred(value) {
    if (!value || value === '-') return '-'
    return 'No'
  }

  const handleRowClick = (row) => {
    const saved = (() => {
      try {
        const map = JSON.parse(localStorage.getItem('elap_workflow_progress') || '{}')
        return map[row.trackingId]
      } catch {
        return null
      }
    })()

    const resumeStep = saved && saved.product === row.product ? saved.currentStep : 0

    try {
      sessionStorage.setItem(
        `elap_row_context_${row.trackingId}`,
        JSON.stringify({ product: row.product, businessName: row.businessName }),
      )
    } catch {
      /* ignore sessionStorage errors */
    }

    window.open(`/workflow/${row.trackingId}/step/${resumeStep}`, '_blank')
  }

  function openInNewTab(path) {
    window.open(path, '_blank', 'noopener,noreferrer')
    setOpenActionMenuFor(null)
  }

  function openAction(actionPath, trackingId) {
    if (actionPath === '/hardcopy-status') {
      const row = data.find((d) => d.trackingId === trackingId)
      setHardcopyPopupData({
        trackingId,
        status: row?.hardcopyStatus ?? 'Not Received',
        remark: row?.hardcopyRemark ?? '',
      })
      setOpenActionMenuFor(null)
      return
    }
    if (actionPath === '/print-all-documents') {
      setPrintPopupData({ trackingId })
      setSelectedPrintDocs([])
      setOpenActionMenuFor(null)
      return
    }
    openInNewTab(`${actionPath}/${trackingId}`)
  }

  const printDocumentOptions = [
    'All Documents',
    'CREDIT APPRAISAL MEMO (CMB)',
    'Business Details Approval',
    'CIB Details Approval',
    'Case Information',
    'GLA for 10 TK Refinancing Scheme',
    'Credit Guarantee Scheme',
    'Application Form',
    'NID Related CIFs',
    'CIF Summary NID Owner',
    'Existing Term Loan',
    'Existing Short Term Loan',
    'Existing Non Funded Loan',
    'Previous Case Data',
    'eLAP and CBS Comparison Application Details',
    'Credit Details Approval',
    'Appraisal Memo',
    'Operation Application Details',
    'CIB Undertaking',
    'Account Opening Form (AOF)',
    'Covid 19 LAF',
    'Exclusion List',
    'Document Checklist',
    'CIF Summary NID Guarantor',
    'Related Accounts',
    'Guarantor NID Related CIFs',
    'Business Visit Details',
    'Requested Facility FD Details',
    'CBS Search Summary',
    'Sanction Letter',
    'Druti Sales Memo',
    'Druti Charge Document',
    'RO-BDM Appraisal Memo',
    'Charge Documents',
    'Demand Promissory Note',
    'Application Details',
    'Charge Documents(Limited Company)',
    'Loan Application Checklist Summary',
    'Loan Application Checklist Audit',
    'Guarantor Nominees',
  ]

  function togglePrintOption(option) {
    if (option === 'All Documents') {
      const allSelected = selectedPrintDocs.length === printDocumentOptions.length
      setSelectedPrintDocs(allSelected ? [] : [...printDocumentOptions])
      return
    }
    setSelectedPrintDocs((prev) =>
      prev.includes(option) ? prev.filter((doc) => doc !== option) : [...prev, option],
    )
  }

  function toggleFilterOption(colKey, valueStr) {
    setColumnFilters((prev) => {
      const uniq = Array.from(new Set(data.map((r) => String(r[colKey] ?? '')))).sort((a, b) =>
        a.localeCompare(b),
      )
      const cur = prev[colKey]
      const dropKey = (p) => {
        const n = { ...p }
        delete n[colKey]
        return n
      }
      if (!cur?.length) {
        const next = uniq.filter((x) => x !== valueStr)
        if (next.length === 0) return dropKey(prev)
        return { ...prev, [colKey]: next }
      }
      if (cur.includes(valueStr)) {
        const next = cur.filter((x) => x !== valueStr)
        if (next.length === 0) return dropKey(prev)
        return { ...prev, [colKey]: next }
      }
      const next = [...cur, valueStr].sort((a, b) => a.localeCompare(b))
      if (next.length === uniq.length) return dropKey(prev)
      return { ...prev, [colKey]: next }
    })
  }

  const openFilterColumn = openFilterCol ? tableColumns.find((c) => c.key === openFilterCol) : null
  const visibleFilterOptions = filterUniqValues.filter((v) =>
    v.toLowerCase().includes(filterSearch.trim().toLowerCase()),
  )

  return (
    <>
      <div className="mb-1 flex justify-end gap-3">
        {Object.keys(columnFilters).some((k) => columnFilters[k]?.length > 0) && (
          <button
            type="button"
            onClick={() => setColumnFilters({})}
            className="text-[11px] text-[#ef4444] hover:underline"
          >
            Clear All Filters
          </button>
        )}
        {selectedTrackingIds.size > 0 && (
          <button
            type="button"
            onClick={handleCopySelected}
            className="flex items-center gap-1 rounded border border-[#d2d8e0] bg-white px-3 py-1.5 text-[12px] text-[#39414a] hover:bg-[#f8f9fb]"
          >
            {copyFeedback ? 'Copied!' : '⎘ Copy'}
          </button>
        )}
        {selectedTrackingIds.size === 0 ? (
          <button
            type="button"
            onClick={() => exportToXLSX(filteredData, visibleColumns, tableColumns)}
            className="flex items-center gap-1 rounded border border-[#d2d8e0] bg-white px-3 py-1.5 text-[12px] text-[#39414a] hover:bg-[#f8f9fb]"
          >
            ↓ Export XLSX
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => exportToXLSX(filteredData, visibleColumns, tableColumns)}
              className="flex items-center gap-1 rounded border border-[#d2d8e0] bg-white px-3 py-1.5 text-[12px] text-[#39414a] hover:bg-[#f8f9fb]"
            >
              ↓ Export All
            </button>
            <button
              type="button"
              onClick={handleExportSelected}
              className="flex items-center gap-1 rounded border border-[#d2d8e0] bg-white px-3 py-1.5 text-[12px] text-[#39414a] hover:bg-[#f8f9fb]"
            >
              {`↓ Export Selected (${filteredData.filter((row) => selectedSet.has(row.trackingId)).length})`}
            </button>
          </div>
        )}
      </div>
      <div className="mt-1 overflow-x-auto border border-[#e7ebf0]">
        <table className="w-full min-w-[1500px] border-collapse">
        <thead>
          <tr className="h-[44px] cursor-default border-b border-[#e8edf2] bg-white text-left text-[12px] font-semibold text-[#39414a] hover:bg-white">
            <th className="relative w-6 px-2 font-normal text-[#a9b0b8]">
              <button
                type="button"
                onClick={() => {
                  setDraftVisibleColumns(visibleColumns)
                  setIsColumnPickerOpen((prev) => !prev)
                  setOpenActionMenuFor(null)
                }}
                className="inline-flex h-4 w-4 items-center justify-center border border-[#bfc7d1] bg-[#f7f8fa] text-[12px] leading-none"
              >
                +
              </button>

              {isColumnPickerOpen && (
                <div
                  ref={columnPickerRef}
                  className="absolute left-2 top-7 z-50 w-[380px] rounded-[3px] border border-[#e5e9ef] bg-white p-0 shadow-[0_2px_10px_rgba(0,0,0,0.14)]"
                >
                  <div className="max-h-[620px] overflow-y-auto px-2 py-2">
                    {columnPickerOptions.map((column) => (
                      <label
                        key={`col-picker-${column.key}`}
                        className="flex h-[52px] cursor-pointer items-center gap-3 border-b border-transparent px-2"
                      >
                        <input
                          type="checkbox"
                          checked={Boolean(draftVisibleColumns[column.key])}
                          onChange={() =>
                            setDraftVisibleColumns((prev) => ({
                              ...prev,
                              [column.key]: !prev[column.key],
                            }))
                          }
                          className="h-[18px] w-[18px] accent-[#00a0e9]"
                        />
                        <span className="text-[14px] font-medium text-[#27303a]">{column.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-end border-t border-[#eef2f6] px-4 py-3">
                    <button
                      type="button"
                      onClick={() => {
                        setVisibleColumns(draftVisibleColumns)
                        setIsColumnPickerOpen(false)
                      }}
                      className="h-[38px] min-w-[82px] bg-[#008fdd] px-5 text-[14px] font-semibold text-white"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </th>
            <th className="w-6 px-2">
              <input
                type="checkbox"
                checked={allVisibleSelected}
                onChange={() => onToggleAllVisible?.(rows.map((r) => r.trackingId), !allVisibleSelected)}
                className="h-3 w-3 accent-[#0096e7]"
              />
            </th>
            {tableColumns.map((column) =>
              visibleColumns[column.key] ? (
                column.key === 'trackingId' ? (
                  <Fragment key={column.key}>
                    <th
                      ref={(el) => {
                        filterThRefs.current[column.key] = el
                      }}
                      className="px-2.5 cursor-pointer select-none hover:bg-[#f0f4fa]"
                      style={{
                        position: 'sticky',
                        left: 0,
                        zIndex: 2,
                        background: '#f8f9fb',
                        borderRight: '2px solid #e7ebf0',
                      }}
                      onClick={() => handleSort(column.key)}
                    >
                      {column.label}
                      <span className="ml-1 text-[10px] text-[#b0b7bf]">
                        {sortKey === column.key ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
                      </span>
                      <button
                        type="button"
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenFilterCol((prev) => (prev === column.key ? null : column.key))
                        }}
                        className="ml-1 text-[10px]"
                        style={{
                          color: columnFilters[column.key]?.length > 0 ? '#0077c8' : '#b0b7bf',
                        }}
                      >
                        ▾
                      </button>
                    </th>
                    <th className="px-2 py-2 text-center text-[11px] text-[#39414a]">
                      Open Q
                    </th>
                    <th className="px-2 py-2 text-center text-[11px] text-[#39414a]">
                      Responded
                    </th>
                  </Fragment>
                ) : (
                  <th
                    key={column.key}
                    ref={(el) => {
                      filterThRefs.current[column.key] = el
                    }}
                    className="px-2.5 cursor-pointer select-none hover:bg-[#f0f4fa]"
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                    <span className="ml-1 text-[10px] text-[#b0b7bf]">
                      {sortKey === column.key ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
                    </span>
                    <button
                      type="button"
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenFilterCol((prev) => (prev === column.key ? null : column.key))
                      }}
                      className="ml-1 text-[10px]"
                      style={{
                        color: columnFilters[column.key]?.length > 0 ? '#0077c8' : '#b0b7bf',
                      }}
                    >
                      ▾
                    </button>
                  </th>
                )
              ) : null,
            )}
            <th className="px-2.5 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const qs = querySummaries[row.trackingId] || { open: 0, responded: 0 }
            return (
            <tr
              key={row.trackingId}
              onClick={() => handleRowClick(row)}
              className="h-[40px] cursor-pointer border-b border-[#edf1f5] bg-white text-[12px] leading-[13px] text-[#1f2328] hover:bg-[#f0f7ff]"
            >
              <td className="px-2 text-[#b0b7bf]"></td>
              <td
                className="px-2 text-[#b0b7bf]"
                onClick={(e) => handleRowCheckboxClick(e, row, rowIndex)}
              >
                <input
                  type="checkbox"
                  checked={selectedSet.has(row.trackingId)}
                  className="h-3 w-3 accent-[#0096e7]"
                />
              </td>
              {visibleColumns.trackingId && (
                <>
                  <td
                    className="px-2.5 tracking-wide"
                    style={{
                      position: 'sticky',
                      left: 0,
                      zIndex: 2,
                      background: 'white',
                      borderRight: '2px solid #e7ebf0',
                    }}
                  >
                    {row.trackingId}
                    {workflowProgress[row.trackingId] ? (
                      workflowProgress[row.trackingId]?.completedSteps?.length ===
                      getWorkflowSteps(row.product).length ? (
                        <span className="ml-2 rounded border border-[#a8dfc0] bg-[#eafaf1] px-1 py-0.5 text-[10px] font-semibold text-[#1a7f4b]">
                          Done
                        </span>
                      ) : (
                        <span className="ml-2 rounded border border-[#b3d9f5] bg-[#e8f3fc] px-1 py-0.5 text-[10px] font-semibold text-[#0077c8]">
                          In Progress
                        </span>
                      )
                    ) : null}
                  </td>
                  <td className="px-2 py-2 text-center text-[11px]">
                    {qs.open > 0 ? (
                      <span style={{ color: '#ef4444', fontWeight: 600 }}>{qs.open}</span>
                    ) : (
                      <span className="text-[#b0b7bf]">—</span>
                    )}
                  </td>
                  <td className="px-2 py-2 text-center text-[11px]">
                    {qs.responded > 0 ? (
                      <span style={{ color: '#16a34a', fontWeight: 600 }}>{qs.responded}</span>
                    ) : (
                      <span className="text-[#b0b7bf]">—</span>
                    )}
                  </td>
                </>
              )}
              {visibleColumns.businessName && <td className="px-2.5 font-medium">{row.businessName}</td>}
              {visibleColumns.updatedDate && <td className="px-2.5">{row.updatedDate}</td>}
              {visibleColumns.applicationStatus && <td className="px-2.5">{row.applicationStatus}</td>}
              {visibleColumns.unit && <td className="px-2.5">{row.unit}</td>}
              {visibleColumns.applicationExpiredDate && <td className="px-2.5">{renderRoc(row.applicationExpiredDate)}</td>}
              {visibleColumns.product && <td className="px-2.5">{row.product}</td>}
              {visibleColumns.lastDisburseDate && <td className="px-2.5">{renderDeferred(row.lastDisburseDate)}</td>}
              {visibleColumns.assignTo && <td className="px-2.5">{row.assignTo}</td>}
              <td
                className="relative px-2.5 text-center text-[16px] tracking-tight text-[#5d6672]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenActionMenuFor((prev) => (prev === row.trackingId ? null : row.trackingId))
                  }
                  className="leading-none"
                >
                  •••
                </button>
                {openActionMenuFor === row.trackingId && (
                  <div
                    ref={actionMenuRef}
                    className="absolute right-1 top-7 z-40 max-h-[300px] w-[360px] overflow-y-auto rounded-[2px] border border-[#e7ebf0] bg-white p-1 text-left shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                  >
                    {(row.product === 'Druti' ? drutiActionItems : nonDrutiActionItems).map((action) => (
                      <button
                        key={action.path}
                        type="button"
                        onClick={() => openAction(action.path, row.trackingId)}
                        className="flex h-[40px] w-full items-center justify-start whitespace-nowrap px-3 text-left text-[13px] hover:bg-[#f8fbff]"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </td>
            </tr>
            )
          })}
        </tbody>
        </table>
      </div>

      {openFilterCol &&
        openFilterColumn &&
        createPortal(
          <div
            ref={filterPanelRef}
            className="fixed z-[300] w-[220px] rounded-lg border border-[#e0e6ed] bg-white p-2 shadow-xl"
            style={{ top: `${filterPanelPos.top}px`, left: `${filterPanelPos.left}px` }}
          >
            <div className="mb-2 text-[11px] font-medium text-[#1f2328]">
              Filter: {openFilterColumn.label}
            </div>
            <input
              type="text"
              value={filterSearch}
              onChange={(e) => setFilterSearch(e.target.value)}
              className="mb-2 w-full rounded border border-[#d2d8e0] px-2 py-1 text-[11px]"
            />
            <div className="mb-1 flex cursor-pointer justify-between text-[10px] text-[#0077c8]">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  setColumnFilters((prev) => {
                    const n = { ...prev }
                    delete n[openFilterCol]
                    return n
                  })
                }}
              >
                Select All
              </button>
              <button type="button" className="cursor-pointer" onClick={() => setFilterSearch('')}>
                Clear
              </button>
            </div>
            <div className="max-h-[180px] overflow-y-auto">
              {visibleFilterOptions.map((opt) => {
                const active = columnFilters[openFilterCol]
                const checked = !active?.length ? true : active.includes(opt)
                return (
                  <label
                    key={`${openFilterCol}-${opt}`}
                    className="flex cursor-pointer items-center gap-2 py-0.5"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleFilterOption(openFilterCol, opt)}
                    />
                    <span className="text-[11px]">{opt || '(blank)'}</span>
                  </label>
                )
              })}
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded bg-[#0077c8] px-3 py-1 text-[11px] text-white"
              onClick={() => setOpenFilterCol(null)}
            >
              Apply
            </button>
          </div>,
          document.body,
        )}

      {hardcopyPopupData && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 pt-12">
          <div className="w-full max-w-[640px] border border-[#d8dce2] bg-[#f4f5f6] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <div className="flex h-[68px] items-center justify-between border-b border-[#d8dce2] px-6">
              <h2 className="text-[17px] font-semibold text-[#21262d]">Detail Hardcopy Status</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setHardcopyPopupData(null)}
                className="text-[48px] font-light leading-none text-[#7b8086]"
              >
                ×
              </button>
            </div>
            <div className="px-6 pb-10 pt-4 text-[#2d3137]">
              <div className="mb-8">
                <div className="text-[16px] font-semibold">Hardcopy Status</div>
                <div className="mt-1 text-[16px]">{hardcopyPopupData.status}</div>
              </div>
              <div className="text-[16px] font-semibold">Remark</div>
              <div className="mt-1 min-h-[24px] text-[16px]">{hardcopyPopupData.remark || '-'}</div>
            </div>
          </div>
        </div>
      )}

      {printPopupData && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 pt-12">
          <div className="w-full max-w-[680px] rounded-[3px] border border-[#d8dce2] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <div className="flex h-[44px] items-center justify-between border-b border-[#d8dce2] px-4">
              <h2 className="text-[18px] font-semibold text-[#222]">Print Documents</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setPrintPopupData(null)}
                className="text-[32px] font-light leading-none text-[#6f7680]"
              >
                ×
              </button>
            </div>
            <div className="max-h-[520px] overflow-y-auto px-4 py-2">
              {printDocumentOptions.map((option) => (
                <label key={option} className="flex items-center gap-2 py-[2px] text-[14px] text-[#1f2328]">
                  <input
                    type="checkbox"
                    checked={selectedPrintDocs.includes(option)}
                    onChange={() => togglePrintOption(option)}
                    className="h-[13px] w-[13px] accent-[#0077c8]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end border-t border-[#d8dce2] px-4 py-3">
              <button
                type="button"
                onClick={() => {
                  window.print()
                  setPrintPopupData(null)
                }}
                className="h-[30px] min-w-[100px] bg-[#0077b6] px-4 text-[14px] font-semibold text-white"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DataTable
