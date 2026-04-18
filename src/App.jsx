/**
 * Root route table: dashboard, details views, and printable document pages.
 */
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ApplicationDetails from './pages/ApplicationDetails'
import OperationApplicationDetails from './pages/OperationApplicationDetails'
import ComingSoonPage from './pages/ComingSoonPage'
import HardcopyStatus from './pages/HardcopyStatus'
import AppraisalMemo from './pages/AppraisalMemo'
import ApplicationForm from './pages/ApplicationForm'
import SanctionLetter from './pages/SanctionLetter'
import ChargeDocuments from './pages/ChargeDocuments'
import AccountOpeningForm from './pages/AccountOpeningForm'
import CibUndertaking from './pages/CibUndertaking'
import ExclusionList from './pages/ExclusionList'
import Covid19Laf from './pages/Covid19Laf'
import DemandPromissoryNote from './pages/DemandPromissoryNote'
import ChargeDocumentsLimitedCompany from './pages/ChargeDocumentsLimitedCompany'
import DocumentChecklist from './pages/DocumentChecklist'
import CaseInformation from './pages/CaseInformation'
import LoanChecklistAudit from './pages/LoanChecklistAudit'
import LoanChecklistSummary from './pages/LoanChecklistSummary'
import GlaRefinancing from './pages/GlaRefinancing'
import CreditGuaranteeScheme from './pages/CreditGuaranteeScheme'
import DrutiSalesMemo from './pages/DrutiSalesMemo'
import DrutiChargeDocument from './pages/DrutiChargeDocument'
import CbsSearchSummary from './pages/CbsSearchSummary'
import ElapCbsComparisonApplicationDetails from './pages/ElapCbsComparisonApplicationDetails'
import LoanAmountApproval from './pages/LoanAmountApproval'
import WorkflowShell from './pages/WorkflowShell'
import UploadDocuments from './pages/UploadDocuments'
import { comingSoonRoutes } from './data/routeConfig'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/application-details/:trackingId" element={<ApplicationDetails />} />
      <Route
        path="/operation-application-details/:trackingId"
        element={<OperationApplicationDetails />}
      />
      <Route path="/hardcopy-status/:trackingId" element={<HardcopyStatus />} />
      <Route path="/appraisal-memo/:trackingId" element={<AppraisalMemo />} />
      <Route path="/application-form/:trackingId" element={<ApplicationForm />} />
      <Route path="/sanction-letter/:trackingId" element={<SanctionLetter />} />
      <Route path="/charge-documents/:trackingId" element={<ChargeDocuments />} />
      <Route path="/account-opening-form/:trackingId" element={<AccountOpeningForm />} />
      <Route path="/cib-undertaking/:trackingId" element={<CibUndertaking />} />
      <Route path="/exclusion-list/:trackingId" element={<ExclusionList />} />
      <Route path="/covid-19-laf/:trackingId" element={<Covid19Laf />} />
      <Route path="/demand-promissory-note/:trackingId" element={<DemandPromissoryNote />} />
      <Route
        path="/charge-documents-limited-company/:trackingId"
        element={<ChargeDocumentsLimitedCompany />}
      />
      <Route path="/document-checklist/:trackingId" element={<DocumentChecklist />} />
      <Route path="/case-information/:trackingId" element={<CaseInformation />} />
      <Route path="/loan-checklist-audit/:trackingId" element={<LoanChecklistAudit />} />
      <Route path="/loan-checklist-summary/:trackingId" element={<LoanChecklistSummary />} />
      <Route path="/gla-refinancing/:trackingId" element={<GlaRefinancing />} />
      <Route path="/credit-guarantee-scheme/:trackingId" element={<CreditGuaranteeScheme />} />
      <Route path="/druti-sales-memo/:trackingId" element={<DrutiSalesMemo />} />
      <Route path="/druti-charge-document/:trackingId" element={<DrutiChargeDocument />} />
      <Route path="/cbs-search-summary/:trackingId" element={<CbsSearchSummary />} />
      <Route
        path="/elap-cbs-comparison/:trackingId"
        element={<ElapCbsComparisonApplicationDetails />}
      />
      <Route path="/loan-amount-approval/:trackingId" element={<LoanAmountApproval />} />
      <Route path="/workflow/:trackingId/step/:stepIndex" element={<WorkflowShell />} />
      <Route path="/upload-documents/:trackingId" element={<UploadDocuments />} />
      {comingSoonRoutes.map(({ path, title }) => (
        <Route key={path} path={path} element={<ComingSoonPage title={title} />} />
      ))}
    </Routes>
  )
}

export default App
