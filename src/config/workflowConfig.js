export const DRUTI_WORKFLOW_STEPS = [
  { label: "Case Information", path: "case-information" },
  { label: "Application Details", path: "application-details" },
  { label: "Operation Application Details", path: "operation-application-details" },
  { label: "Appraisal Memo", path: "appraisal-memo" },
  { label: "Application Form", path: "application-form" },
  { label: "Sanction Letter", path: "sanction-letter" },
  { label: "Charge Documents", path: "charge-documents" },
  { label: "Exclusion List", path: "exclusion-list" },
  { label: "Demand Promissory Note", path: "demand-promissory-note" },
  { label: "Document Checklist", path: "document-checklist" },
  { label: "Druti Sales Memo", path: "druti-sales-memo" },
  { label: "Druti Charge Document", path: "druti-charge-document" },
  { label: "Upload Documents", path: "upload-documents" },
  { label: "Hardcopy Status", path: "hardcopy-status" },
];

export const NON_DRUTI_WORKFLOW_STEPS = [
  { label: "Case Information", path: "case-information" },
  { label: "Application Details", path: "application-details" },
  { label: "Operation Application Details", path: "operation-application-details" },
  { label: "Appraisal Memo", path: "appraisal-memo" },
  { label: "Application Form", path: "application-form" },
  { label: "Sanction Letter", path: "sanction-letter" },
  { label: "Account Opening Form", path: "account-opening-form" },
  { label: "CIB Undertaking", path: "cib-undertaking" },
  { label: "Loan Amount Approval", path: "loan-amount-approval" },
  { label: "Upload Documents", path: "upload-documents" },
  { label: "Hardcopy Status", path: "hardcopy-status" },
];

export function getWorkflowSteps(product) {
  return product === "Druti" ? DRUTI_WORKFLOW_STEPS : NON_DRUTI_WORKFLOW_STEPS;
}
