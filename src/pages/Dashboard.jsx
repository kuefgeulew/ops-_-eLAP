/**
 * Home view: filters, case table, pagination, row selection, and assign-to.
 */
import { useCallback, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FilterPanel from '../components/FilterPanel'
import DataTable from '../components/DataTable'
import Pagination from '../components/Pagination'
import { cases } from '../data/mockCases'
import { UI_TEXT } from '../config/uiConstants'
import { useCaseFiltering } from '../hooks/useCaseFiltering'

const initialPanelCriteria = {
  businessName: '',
  trackingId: '',
  assignTo: UI_TEXT.selectUser,
  unit: UI_TEXT.selectTerritory,
  approvalDateActive: false,
  approvalRange: null,
  lastDisburseActive: false,
  lastDisburseRange: null,
}

function readWorkflowProgressMap() {
  try {
    const raw = localStorage.getItem('elap_workflow_progress')
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

function readQuerySummary(trackingId) {
  try {
    const raw = localStorage.getItem(`elap_queries_${trackingId}`)
    const arr = raw ? JSON.parse(raw) : []
    return {
      open: arr.filter((q) => !q.resolved).length,
      responded: arr.filter((q) => q.toggledResolved && !q.resolved).length,
    }
  } catch {
    return { open: 0, responded: 0 }
  }
}

function Dashboard() {
  const [tableData, setTableData] = useState(cases)
  const [appliedCriteria, setAppliedCriteria] = useState(initialPanelCriteria)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filteredRowCount, setFilteredRowCount] = useState(() => cases.length)
  const [selectedTrackingIds, setSelectedTrackingIds] = useState([])
  const [workflowProgress, setWorkflowProgress] = useState({})
  const [querySummaries, setQuerySummaries] = useState({})

  useEffect(() => {
    queueMicrotask(() => {
      setWorkflowProgress(readWorkflowProgressMap())
    })
  }, [])

  useEffect(() => {
    const map = {}
    tableData.forEach((row) => {
      map[row.trackingId] = readQuerySummary(row.trackingId)
    })
    setQuerySummaries(map)
  }, [tableData])

  const panelFilteredCases = useCaseFiltering(tableData, appliedCriteria)

  const handleSubmitCriteria = useCallback((c) => {
    setAppliedCriteria({
      businessName: c.businessName,
      trackingId: c.trackingId,
      assignTo: c.assignTo,
      unit: c.unit,
      approvalDateActive: c.approvalDateActive,
      approvalRange: c.approvalDateActive ? c.approvalRange : null,
      lastDisburseActive: c.lastDisburseActive,
      lastDisburseRange: c.lastDisburseActive ? c.lastDisburseRange : null,
    })
    setPage(1)
  }, [])

  const handleResetCriteria = useCallback(() => {
    setAppliedCriteria(initialPanelCriteria)
    setPage(1)
  }, [])

  const handleFilteredRowCount = useCallback((n) => {
    setFilteredRowCount(n)
  }, [])
  const handleToggleRowSelection = useCallback((trackingId) => {
    setSelectedTrackingIds((prev) =>
      prev.includes(trackingId) ? prev.filter((id) => id !== trackingId) : [...prev, trackingId],
    )
  }, [])
  const handleToggleAllVisible = useCallback((ids, shouldSelect) => {
    setSelectedTrackingIds((prev) => {
      if (shouldSelect) {
        const merged = new Set([...prev, ...ids])
        return [...merged]
      }
      return prev.filter((id) => !ids.includes(id))
    })
  }, [])
  const handleAssignUser = useCallback((assignUserLabel) => {
    const userName = assignUserLabel.split(' - ')[0]?.trim() || assignUserLabel
    if (!userName || userName === 'Select' || selectedTrackingIds.length === 0) return
    setTableData((prev) =>
      prev.map((row) =>
        selectedTrackingIds.includes(row.trackingId) ? { ...row, assignTo: userName } : row,
      ),
    )
    setSelectedTrackingIds([])
    setWorkflowProgress(readWorkflowProgressMap())
  }, [selectedTrackingIds])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRowCount / Math.max(1, pageSize)) || 1,
  )
  const pageForView = Math.min(page, totalPages)

  return (
    <div className="min-h-screen bg-white text-[#1f2328]">
      <Navbar />

      <main className="pb-0 pt-0">
        <section className="flex items-center justify-between border-b border-[#edf1f4] px-2 py-1.5 text-[13px]">
          <div className="text-[#6a7380]">
            LMS <span className="mx-1">›</span>{' '}
            <span className="text-[#0077c8]">Documentation</span>
          </div>
          <button className="h-[30px] min-w-[78px] border border-[#d2d8e0] bg-[#f8f9fb] px-4 text-[13px] text-[#4d5561]">
            Filter
          </button>
        </section>

        <div className="px-2 pt-2">
          <FilterPanel
            onSubmitCriteria={handleSubmitCriteria}
            onResetCriteria={handleResetCriteria}
            onAssignUser={handleAssignUser}
          />
          <DataTable
            data={panelFilteredCases}
            page={pageForView}
            pageSize={pageSize}
            onFilteredRowCountChange={handleFilteredRowCount}
            selectedTrackingIds={selectedTrackingIds}
            onToggleRowSelection={handleToggleRowSelection}
            onToggleAllVisible={handleToggleAllVisible}
            workflowProgress={workflowProgress}
            querySummaries={querySummaries}
          />
          <Pagination
            totalEntries={filteredRowCount}
            page={pageForView}
            pageSize={pageSize}
            onPageChange={setPage}
            onPageSizeChange={(sz) => {
              setPageSize(sz)
              setPage(1)
            }}
          />
        </div>
        <footer className="mt-1.5 flex h-[24px] items-center justify-between border-t border-[#eceff3] px-2 text-[11px] text-[#7b8591]">
          <span>© Copyright 2026 | All Rights Reserved</span>
          <span>
            Powered by <span className="text-[#4f5966]">Veefin</span>
          </span>
        </footer>
      </main>
    </div>
  )
}

export default Dashboard
