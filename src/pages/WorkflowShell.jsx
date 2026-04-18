import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getWorkflowSteps } from '../config/workflowConfig'
import useWorkflowProgress from '../hooks/useWorkflowProgress'
import { useQueryRemarks } from '../hooks/useQueryRemarks'
import WorkflowProgressBar from '../components/WorkflowProgressBar'
import QueryPanel from '../components/QueryPanel'
import RolePicker from '../components/RolePicker'
import QueryBubble from '../components/QueryBubble'
import QueryForm from '../components/QueryForm'
import ApplicationDetails from './ApplicationDetails'
import OperationApplicationDetails from './OperationApplicationDetails'
import HardcopyStatus from './HardcopyStatus'
import AppraisalMemo from './AppraisalMemo'
import ApplicationForm from './ApplicationForm'
import SanctionLetter from './SanctionLetter'
import ChargeDocuments from './ChargeDocuments'
import ExclusionList from './ExclusionList'
import DemandPromissoryNote from './DemandPromissoryNote'
import DocumentChecklist from './DocumentChecklist'
import DrutiSalesMemo from './DrutiSalesMemo'
import DrutiChargeDocument from './DrutiChargeDocument'
import AccountOpeningForm from './AccountOpeningForm'
import CibUndertaking from './CibUndertaking'
import LoanAmountApproval from './LoanAmountApproval'
import CaseInformation from './CaseInformation'
import UploadDocuments from './UploadDocuments'

const componentMap = {
  'case-information': CaseInformation,
  'application-details': ApplicationDetails,
  'operation-application-details': OperationApplicationDetails,
  'appraisal-memo': AppraisalMemo,
  'application-form': ApplicationForm,
  'sanction-letter': SanctionLetter,
  'charge-documents': ChargeDocuments,
  'exclusion-list': ExclusionList,
  'demand-promissory-note': DemandPromissoryNote,
  'document-checklist': DocumentChecklist,
  'druti-sales-memo': DrutiSalesMemo,
  'druti-charge-document': DrutiChargeDocument,
  'upload-documents': UploadDocuments,
  'hardcopy-status': HardcopyStatus,
  'account-opening-form': AccountOpeningForm,
  'cib-undertaking': CibUndertaking,
  'loan-amount-approval': LoanAmountApproval,
}

function WorkflowShell() {
  const { trackingId, stepIndex } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const contentRef = useRef(null)

  const locationState = useMemo(
    () =>
      location.state ||
      (() => {
        try {
          const raw = sessionStorage.getItem(`elap_row_context_${trackingId}`)
          return raw ? JSON.parse(raw) : null
        } catch {
          return null
        }
      })(),
    [location.state, trackingId],
  )

  const product = locationState?.product || 'Druti'
  const businessName = locationState?.businessName || ''

  const steps = useMemo(() => getWorkflowSteps(product), [product])

  const stepIndexNum = useMemo(() => {
    const n = parseInt(stepIndex, 10)
    return Number.isFinite(n) ? n : NaN
  }, [stepIndex])

  const tooLow = !Number.isFinite(stepIndexNum) || stepIndexNum < 0
  const tooHigh =
    Number.isFinite(stepIndexNum) && steps.length > 0 && stepIndexNum >= steps.length
  const validStep =
    Number.isFinite(stepIndexNum) &&
    stepIndexNum >= 0 &&
    steps.length > 0 &&
    stepIndexNum < steps.length

  const { currentStep, completedSteps, goToStep, advance, resetProgress } = useWorkflowProgress(
    trackingId ?? '',
    product,
    stepIndexNum,
  )

  const [currentRole, setCurrentRole] = useState(() => {
    try {
      return sessionStorage.getItem('elap_current_role') || null
    } catch {
      return null
    }
  })

  const {
    queries,
    addQuery,
    resolveQuery,
    deleteQuery,
    getQueriesForStep,
    addReply,
    toggleQueryResponded,
    markNotificationRead,
    setPriority,
  } = useQueryRemarks(trackingId)

  const handleQueryAdded = useCallback(
    ({ id, stepIndex, stepLabel, selectedText, remark }) => {
      addQuery({
        id,
        stepIndex: Number(stepIndex),
        stepLabel,
        selectedText,
        remark,
      })
    },
    [addQuery],
  )

  const removeQueryHighlight = useCallback((id) => {
    const mark = document.querySelector(`mark[data-elap-query-id="${id}"]`)
    if (!mark) return
    const parent = mark.parentNode
    if (!parent) return
    while (mark.firstChild) {
      parent.insertBefore(mark.firstChild, mark)
    }
    parent.removeChild(mark)
  }, [])

  const handleDeleteQuery = useCallback(
    (id) => {
      removeQueryHighlight(id)
      deleteQuery(id)
    },
    [removeQueryHighlight, deleteQuery],
  )

  const handleNavigateToQuery = useCallback(
    (qStepIndex, selectedText) => {
      goToStep(qStepIndex)
      navigate(`/workflow/${trackingId}/step/${qStepIndex}`, { state: locationState })
      setTimeout(() => {
        if (selectedText && String(selectedText).trim() !== '') {
          window.find(selectedText)
        }
      }, 600)
    },
    [goToStep, locationState, navigate, trackingId],
  )

  const bulkResolveResponded = useCallback(() => {
    queries
      .filter((q) => q.toggledResolved && !q.resolved)
      .forEach((q) => resolveQuery(q.id))
  }, [queries, resolveQuery])

  const copyThread = useCallback((query) => {
    const lines = [
      `Query: ${query.remark}`,
      `Page: ${query.stepLabel}`,
      query.selectedText ? `Selected: ${query.selectedText}` : '',
      ...(query.replies || []).map((r) => `${r.role}: ${r.text}`),
    ].filter(Boolean)
    navigator.clipboard?.writeText(lines.join('\n')).catch(() => {})
  }, [])

  useEffect(() => {
    const unread = queries.filter((q) => q.notificationUnread).length
    document.title = unread > 0 ? `(${unread}) eLAP` : 'eLAP'
    return () => {
      document.title = 'eLAP'
    }
  }, [queries])

  const [manualQueryOpen, setManualQueryOpen] = useState(false)

  const queriesByStep = useMemo(
    () =>
      Object.fromEntries(
        steps.map((_, i) => [
          i,
          getQueriesForStep(i).filter((q) => !q.resolved).length,
        ]),
      ),
    [getQueriesForStep, steps, queries],
  )

  useLayoutEffect(() => {
    if (!trackingId) return
    if (tooLow) {
      navigate(`/workflow/${trackingId}/step/0`, { replace: true, state: locationState })
      return
    }
    if (tooHigh) {
      const last = Math.max(0, steps.length - 1)
      navigate(`/workflow/${trackingId}/step/${last}`, { replace: true, state: locationState })
    }
  }, [locationState, navigate, stepIndexNum, steps.length, tooHigh, tooLow, trackingId])

  useEffect(() => {
    if (!validStep || !trackingId) return
    if (stepIndexNum !== currentStep) {
      goToStep(stepIndexNum)
    }
  }, [validStep, stepIndexNum, currentStep, goToStep, trackingId])

  const handleNext = useCallback(() => {
    if (!trackingId || !validStep) return
    advance(steps.length)
    if (stepIndexNum < steps.length - 1) {
      navigate(`/workflow/${trackingId}/step/${stepIndexNum + 1}`, { state: locationState })
    } else {
      resetProgress()
      navigate('/', { state: locationState })
    }
  }, [
    advance,
    locationState,
    navigate,
    resetProgress,
    stepIndexNum,
    steps.length,
    trackingId,
    validStep,
  ])

  const handlePrev = useCallback(() => {
    if (!trackingId || !validStep || stepIndexNum <= 0) return
    navigate(`/workflow/${trackingId}/step/${stepIndexNum - 1}`, { state: locationState })
  }, [locationState, navigate, stepIndexNum, trackingId, validStep])

  const handleStepClick = useCallback(
    (index) => {
      if (!trackingId) return
      goToStep(index)
      navigate(`/workflow/${trackingId}/step/${index}`, { state: locationState })
    },
    [goToStep, locationState, navigate, trackingId],
  )

  const handleExit = useCallback(() => {
    navigate('/', { state: locationState })
  }, [locationState, navigate])

  if (!trackingId || tooLow || tooHigh) {
    return null
  }

  const step = steps[stepIndexNum]
  const ActiveComponent = step ? componentMap[step.path] : null
  const isLast = stepIndexNum >= steps.length - 1

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {!currentRole && (
        <RolePicker onRoleSelected={(role) => setCurrentRole(role)} />
      )}
      <style>
        {`@media print { .workflow-shell-chrome { display: none !important; } }`}
      </style>

      <div className="workflow-shell-chrome shrink-0">
        <WorkflowProgressBar
          steps={steps}
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
          trackingId={trackingId}
          onExit={handleExit}
          businessName={businessName}
          queriesByStep={queriesByStep}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {ActiveComponent ? (
          <div
            ref={contentRef}
            className="workflow-content-area relative"
          >
            <ActiveComponent />
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center text-[#6a7380]">
            Page not available in workflow.
          </div>
        )}
      </div>

      <div className="workflow-shell-chrome sticky bottom-0 z-40 flex shrink-0 justify-between border-t border-[#e8ecef] bg-white px-6 py-3">
        <div>
          <button
            type="button"
            disabled={stepIndexNum <= 0}
            onClick={handlePrev}
            className={`border-0 bg-transparent p-0 text-[#0077c8] ${
              stepIndexNum <= 0 ? 'cursor-default opacity-50' : ''
            }`}
          >
            ← Previous
          </button>
        </div>
        <div>
          {isLast ? (
            <button
              type="button"
              onClick={handleNext}
              className="rounded bg-[#0077c8] px-4 py-2 text-white"
            >
              Complete & Close
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="rounded bg-[#0077c8] px-4 py-2 text-white"
            >
              Next →
            </button>
          )}
        </div>
      </div>

      <QueryBubble
        contentRef={contentRef}
        stepIndex={stepIndex}
        stepLabel={steps[stepIndex]?.label}
        onQueryAdded={handleQueryAdded}
        queries={getQueriesForStep(stepIndexNum)}
      />
      <QueryPanel
        queries={queries}
        currentRole={currentRole}
        onNavigate={handleNavigateToQuery}
        onResolve={resolveQuery}
        onDelete={handleDeleteQuery}
        onAddManual={() => setManualQueryOpen(true)}
        onAddReply={addReply}
        onToggleResponded={toggleQueryResponded}
        onMarkNotificationRead={markNotificationRead}
        onSetPriority={setPriority}
        onBulkResolve={bulkResolveResponded}
        onCopyThread={copyThread}
        onSwitchRole={() => {
          try {
            sessionStorage.removeItem('elap_current_role')
          } catch {}
          setCurrentRole(null)
        }}
      />
      {manualQueryOpen ? (
        <QueryForm
          selectedText=""
          stepLabel={steps[stepIndex]?.label}
          position={{ x: window.innerWidth - 300, y: 140 }}
          onSubmit={(remark) => {
            addQuery({
              stepIndex: stepIndexNum,
              stepLabel: steps[stepIndexNum]?.label ?? '',
              selectedText: '',
              remark,
            })
            setManualQueryOpen(false)
          }}
          onCancel={() => setManualQueryOpen(false)}
        />
      ) : null}
    </div>
  )
}

export default WorkflowShell
