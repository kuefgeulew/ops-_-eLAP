# eLAP OPS Codebase Handover (Current Implementation State)

## 1) What This Project Is

`elap` is a React + Vite single-page application that simulates an operations workflow for loan-case documentation.

The application has two main execution surfaces:

- A **dashboard** for listing, filtering, selecting, assigning, exporting, and opening case workflows.
- A **workflow shell** that steps through document pages and supports in-context query/remark collaboration.

The codebase is currently **frontend-only**. There is no backend API integration for cases, workflow data, queries, or uploads in production mode. Persistence is browser/local storage centric, with additional dev-server file writes for uploaded files.

---

## 2) Runtime Stack and Build Tooling

- **Framework**: React 19
- **Router**: `react-router-dom` 7 (`BrowserRouter`)
- **Build/dev server**: Vite 8 + `@vitejs/plugin-react`
- **Styling**: Tailwind CSS v4 (via PostCSS) + utility classes in JSX
- **Linting**: ESLint 9

Primary scripts (`package.json`):

- `npm run dev` -> Vite dev server
- `npm run build` -> production build
- `npm run preview` -> preview build locally
- `npm run lint` -> run ESLint

---

## 3) High-Level Architecture

The code is organized by responsibility:

- `src/pages` -> route-level screens (dashboard, workflow shell, document pages)
- `src/components` -> reusable UI and interaction components
- `src/hooks` -> state and behavior hooks (filters, workflow progress, queries, uploads metadata helpers)
- `src/data` -> mock datasets and static config-like data
- `src/config` -> UI/workflow/document config constants
- `src/lib` -> browser storage and upload path/manifest utilities

The app has a **configuration-driven workflow**:

- Product type selects workflow steps via `getWorkflowSteps(product)`.
- Step path selects active page component via `componentMap` in `WorkflowShell`.
- Action-menu item arrays select route targets per product in `tableConfig`.

---

## 4) Application Bootstrapping and Entry

- `src/main.jsx` mounts `<App />` within `<StrictMode>` and `<BrowserRouter>`.
- `src/App.jsx` defines all routes.
- `src/index.css` loads Tailwind and base styles.
- `vite.config.js` adds a custom plugin that:
  - handles `POST /__ops/save-upload` (dev upload persistence),
  - serves `GET /__ops/user-documents-manifest.json` (merged manifest in dev/preview).

---

## 5) Routing Model

### Core routes

- `/` -> `Dashboard`
- `/workflow/:trackingId/step/:stepIndex` -> `WorkflowShell`
- `/upload-documents/:trackingId` -> `UploadDocuments`

### Document/detail routes

`App.jsx` maps many printable/static page routes (example: `application-details`, `appraisal-memo`, `sanction-letter`, `charge-documents`, `document-checklist`, `case-information`, `loan-checklist-audit`, `loan-checklist-summary`, etc.) each with `:trackingId`.

### Placeholder routing

`comingSoonRoutes` in `src/data/routeConfig.js` injects routes for not-fully-implemented paths (e.g., export CIB data, view all queries, print-all-documents).  
Important: some of these paths are also explicitly routed to real components in `App.jsx`; explicit route definitions appear first and therefore win.

---

## 6) Dashboard Surface (`Dashboard` + `FilterPanel` + `DataTable` + `Pagination`)

### Dashboard state and lifecycle

`src/pages/Dashboard.jsx` owns:

- `tableData` seeded from `src/data/mockCases.js`
- `appliedCriteria` for panel filters
- pagination state (`page`, `pageSize`, `filteredRowCount`)
- selected rows (`selectedTrackingIds`)
- workflow progress cache from `localStorage`
- per-case query summaries from `localStorage`

Filtering is performed by `useCaseFiltering(tableData, appliedCriteria)`.

### FilterPanel behavior (`src/components/FilterPanel.jsx`)

Provides:

- text filters: business name, tracking ID
- territory dropdown (searchable)
- status dropdown
- application type dropdown
- approval-date preset and custom date range picker
- assign-application modal (including self-assign switch)

Current submit payload behavior:

- `assignTo` and `unit` are both set from `selectedTerritory`.
- status/app-type selections are currently UI-only and not passed into filter logic.
- approval date maps to `approvalDateActive` + `approvalRange`.

### DataTable behavior (`src/components/DataTable.jsx`)

Implements:

- column visibility picker (`visibleColumns`)
- client-side sorting per column (`sortKey`, `sortDir`)
- client-side column value filters (`columnFilters`)
- row selection + shift-range selection
- "copy selected" to clipboard (tab-separated text)
- XLSX export (`exportToXLSX`) implemented manually (XML + zip generation in browser)
- action menu per row:
  - uses `drutiActionItems` for Druti products
  - uses `nonDrutiActionItems` otherwise
- row click opens workflow in a new tab and attempts resume from persisted progress
- hardcopy status modal
- print documents modal (`window.print()`)

Special dashboard data points:

- Query counters (`Open Q`, `Responded`) are rendered as extra columns adjacent to `trackingId`.
- Workflow badge (`Done`/`In Progress`) computed from stored completed steps.

### Pagination behavior (`src/components/Pagination.jsx`)

Shows:

- total entries
- page-size selector

Current limitation:

- no visible page-number/next-prev controls; page state exists but practical interaction is page-size only.

---

## 7) Workflow Engine and Step Navigation

### Step configuration

`src/config/workflowConfig.js` defines:

- `DRUTI_WORKFLOW_STEPS`
- `NON_DRUTI_WORKFLOW_STEPS`
- `getWorkflowSteps(product)` selector

### Workflow shell (`src/pages/WorkflowShell.jsx`)

Responsibilities:

- validates `stepIndex` param and redirects if out of bounds
- infers row context (`product`, `businessName`) from `location.state` or session storage key `elap_row_context_{trackingId}`
- loads step component via `componentMap`
- renders progress bar + navigation controls + query UI
- handles completion path (resets progress and navigates back to dashboard on final step)
- enforces role selection (Operations/RO-RE/CRM) with `RolePicker`

### Progress persistence

`useWorkflowProgress` stores all entries in `localStorage` under `elap_workflow_progress` as a map keyed by tracking ID.  
Each entry tracks:

- product
- currentStep
- completedSteps (array)
- lastVisited timestamp

---

## 8) Query / Remark Subsystem

### Storage and data model (`useQueryRemarks`)

Per tracking ID key: `elap_queries_{trackingId}`.  
Each query object includes:

- `id`, `trackingId`, `stepIndex`, `stepLabel`
- `selectedText`, `remark`
- `createdAt`, `resolved`
- `replies[]`, `notificationUnread`, `toggledResolved`, `priority`

Supported operations:

- add/delete/toggle resolve
- add reply with role identity
- toggle responded state
- mark notification read
- update priority
- filter queries by step

### Inline selection UX (`QueryBubble`)

Behavior:

- listens to global `mouseup`
- validates selection is within workflow content root
- opens bubble near selected text
- on submit, wraps selected DOM range in `<mark>` and saves query

Rehydration behavior:

- for unresolved queries, re-runs text-node scanning and wraps first text match in mark if not already marked.
- matching is content-string based and uses first occurrence in current render tree.

### Query panel/card UX

- `QueryPanel` is a fixed right drawer (collapsible).
- supports search, resolved toggle, manual query add, bulk "resolve responded", role switch.
- `QueryCard` supports navigation to step, priority controls, replies, copy-thread, role-dependent actions.

---

## 9) Upload Documents Module (Large Feature Surface)

Primary implementation file: `src/pages/UploadDocuments.jsx`.

### Section model

Main sections:

- Business Documents
- Additional Documents
- General Documents
- Charge Documents
- FDR/DPS Related Documents
- Party sections (`Owner 1`, `Guarantor 1`, `Guarantor 2`) with KYC rows

Each section uses stable seeded row IDs and default doc-type choices, and allows appending dynamic rows (`+`).

### Upload slot keying

Upload rows are keyed by `uploadKey` patterns such as:

- `business::business-0`
- `general::general-1`
- `owner-kyc::kyc-0`

These keys are central to status, checklist, and data-entry persistence.

### File ingestion + persistence flow

When a file is chosen:

1. Creates temporary object URL and updates UI.
2. Saves blob to IndexedDB via `saveUploadToDb(uploadKey, file)`.
3. In dev mode, posts bytes to `/__ops/save-upload` and stores canonical public path metadata in `public/user-documents/manifest.json`.
4. If dev disk save succeeds, switches display source from object URL to public URL.

On load:

- merges disk manifest attachments and IndexedDB blobs (manifest entries take precedence).

### Preview + verification modal

`DocumentPreviewModal` opens with:

- image or PDF preview pane
- right-side data-entry form (`DocumentDataEntry`)
- status controls (`DocumentStatusBadge`)
- checklist (`DocumentVerificationChecklist`)

This verification stack uses configuration from `src/config/documentFieldConfig.js`:

- `DOCUMENT_FIELDS`
- `DOCUMENT_FIELD_DEFAULTS`
- `DOCUMENT_CHECKLISTS`

Doc type normalization: lowercased + spaces to `-` (e.g., `trade-licence`, `bank-statement`).

### Mismatch detection

`useFieldMismatch` compares selected document fields against case profile values from `src/data/caseProfiles.js` using rule tables for specific doc types (`trade-licence`, `nid`, `bank-statement`).

Additional lightweight mismatch counting is also computed in `UploadDocuments` for badge display on rows.

---

## 10) State, Storage, and Data Sources

### Mock/static sources

- `src/data/mockCases.js` -> dashboard rows
- `src/data/applicationDetailsMock.js` -> application details page data
- `src/data/operationApplicationMock.js` -> operation details page data
- `src/data/caseProfiles.js` -> profile baselines for mismatch checks

### Browser persistence keys

- `elap_workflow_progress` (map by tracking ID)
- `elap_queries_{trackingId}`
- `elap_row_context_{trackingId}` (session storage)
- `elap_current_role` (session storage)
- `elap_doc_data_{uploadKey}_{scope}`
- `elap_doc_checklist_{uploadKey}`
- `elap_doc_status_{uploadKey}`

### IndexedDB

`src/lib/uploadDocumentsDb.js`:

- DB name: `ops-upload-documents`
- store: `files`
- scope constant: `DOCUMENT_UPLOAD_SCOPE = '4909930'`
- row key format: `{scope}::{uploadKey}`

### Dev filesystem + manifest

`public/user-documents` keeps uploaded files plus `manifest.json`.  
`vite.config.js` includes middleware to:

- save files to this folder,
- maintain/merge manifest entries,
- expose merged manifest endpoint in dev/preview.

---

## 11) Component and Hook Inventory (Responsibilities)

### Key components

- `Navbar` -> dashboard top bar
- `FilterPanel` -> filter + assign modal
- `DataTable` -> data grid + action modals + exports/copy
- `Pagination` -> page-size and totals
- `WorkflowProgressBar` -> clickable step strip with query count badges
- `RolePicker` -> role gate modal
- `QueryBubble` / `QueryForm` / `QueryPanel` / `QueryCard` -> query system UI
- `DocumentPreviewModal` / `DocumentDataEntry` / `DocumentStatusBadge` / `DocumentVerificationChecklist` -> upload verification workflow
- `ui/Button`, `ui/TextInput`, `ui/StatusBadge` -> basic primitives

### Hooks

- `useCaseFiltering` -> panel criteria filtering
- `usePaginatedRows` -> memoized page slicing
- `useWorkflowProgress` -> step progress persistence and transitions
- `useQueryRemarks` -> query CRUD/replies/notification state
- `useClickOutside` -> outside-click dispatcher for multi-ref UIs
- `useDateRangeUtils` (utility functions) -> date range presets/grid logic
- `useDocumentData` -> document extraction form state + save
- `useDocumentChecklist` -> checklist state + progress
- `useDocumentStatus` -> status/note state
- `useFieldMismatch` -> profile mismatch set computation

---

## 12) Document Pages in `src/pages`

The following route pages are implemented and render as standalone screens and/or workflow steps:

- `CaseInformation`
- `ApplicationDetails`
- `OperationApplicationDetails`
- `AppraisalMemo`
- `ApplicationForm`
- `SanctionLetter`
- `ChargeDocuments`
- `ChargeDocumentsLimitedCompany`
- `AccountOpeningForm`
- `CibUndertaking`
- `ExclusionList`
- `Covid19Laf`
- `DemandPromissoryNote`
- `DocumentChecklist`
- `LoanChecklistAudit`
- `LoanChecklistSummary`
- `GlaRefinancing`
- `CreditGuaranteeScheme`
- `DrutiSalesMemo`
- `DrutiChargeDocument`
- `CbsSearchSummary`
- `ElapCbsComparisonApplicationDetails`
- `LoanAmountApproval`
- `HardcopyStatus`
- `UploadDocuments`
- `ComingSoonPage` (placeholder renderer)

Most of these pages are static/mock-driven document layouts with no backend fetches.

---

## 13) Cross-Module Interaction Map

- `Dashboard` -> `DataTable` receives filtered rows and emits row-count back to dashboard.
- `DataTable` -> workflow resume depends on `useWorkflowProgress` storage shape.
- `WorkflowShell` -> query stack (`useQueryRemarks`) + progress stack (`useWorkflowProgress`) run in parallel and both key on `trackingId`.
- `QueryBubble` marks DOM, while `QueryPanel`/`QueryCard` manage thread state; both operate on shared query store.
- `UploadDocuments` -> preview modal uses field/checklist/status hooks and config maps from `documentFieldConfig`.
- `UploadDocuments` + `userDocumentPublicPath` + Vite middleware + IndexedDB functions form a complete upload persistence pipeline.

---

## 14) Constraints and Invariants in Current Code

- Case listing is seeded from static mock data; assignment edits are in-memory only.
- Workflow-product mapping is binary: `"Druti"` vs everything else.
- Query highlighting anchors to selected text content, not stable document coordinates.
- Upload scope is currently fixed to `'4909930'` in IndexedDB/util layers.
- Dev file persistence endpoint exists only in Vite server context.
- Filter panel includes controls that are not fully wired into `useCaseFiltering`.
- Pagination UI does not expose page navigation controls.

---

## 15) Known Boundaries / Limitations

- No authentication/authorization backend; role selection is client-side session storage only.
- No server API integration for cases, progress, queries, or document metadata.
- Print modal selection list does not route to per-document batch printing; final action is `window.print()`.
- Query text rehydration can mismatch when duplicate text appears multiple times; first text-node match wins.
- `window.find()` navigation in query jump is browser-dependent and approximate.
- Some path/route declarations intentionally remain placeholders (`ComingSoonPage` coverage).

---

## 16) Running and Using the App

```bash
npm install
npm run dev
```

Then open the Vite URL.

Typical flow:

1. Use dashboard filters and optionally assign selected rows.
2. Open a case row (new tab workflow shell).
3. Move through workflow steps; add/resolve query remarks.
4. Open upload documents step; upload files and verify in preview modal.
5. Save extracted data/checklists/status per document slot.

---

## 17) Git Working-Tree Note (Current Snapshot Context)

At generation time, the workspace includes newly added document-verification files and `UploadDocuments`-related updates not reflected in older handoff versions. This handoff captures the **current implemented state including those modules**.

