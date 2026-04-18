# eLAP / OPS — Developer Handoff

## 1. PROJECT OVERVIEW

**What this app is**  
Single-page React application (`package.json` name: `elap`) that prototypes an **eLAP-style operations / documentation** experience: a **case dashboard** (filterable grid, bulk assign, deep links into loan documents) and many **print-oriented document views** (appraisal memo, sanction letter, forms, checklists, etc.). A **guided workflow shell** walks a case through ordered steps per product (**Druti** vs non-Druti), with **text-selection queries** (remarks, highlights, side panel, local persistence).

**Key features (at a glance)**

| Area | Behavior |
|------|----------|
| Dashboard grid | Mock case rows, optional column visibility, row checkbox selection, per-row action menu (opens routes or modals), click row → workflow in new tab |
| Filters | Panel-driven text + territory + optional approval date range; criteria applied in `useCaseFiltering` |
| Queries | Select text in workflow content → bubble → remark → `<mark>` highlight + hover tooltip; `QueryPanel` / `QueryCard`; stored per `trackingId` in `localStorage` |
| Workflow | `WorkflowShell` + `WorkflowProgressBar`; step persistence in `localStorage`; product-specific step lists |
| Uploads | `UploadDocuments` + IndexedDB (`uploadDocumentsDb.js`); dev-only Vite middleware writes `public/user-documents` + merged manifest |
| Routing | `react-router-dom`: `/` dashboard, `/workflow/:trackingId/step/:stepIndex`, `/…/:trackingId` for standalone document URLs, `ComingSoonPage` for placeholders |

---

## 2. TECH STACK

| Layer | Choice |
|-------|--------|
| UI | React **19** |
| Build | **Vite** 8 (`@vitejs/plugin-react`) |
| Routing | **react-router-dom** 7 |
| Styling | **Tailwind CSS v4** via `@import "tailwindcss"` in `src/index.css` + **PostCSS** (`@tailwindcss/postcss` in `postcss.config.js`) |
| State | **React component state** + hooks; no Redux/Zustand |
| Persistence | **`localStorage`** (workflow progress, queries, role), **`sessionStorage`** (row context, role), **`IndexedDB`** (upload blobs, scoped), **dev filesystem** (Vite plugin for uploads + manifest) |

**Libraries (dependencies)**  
`react`, `react-dom`, `react-router-dom` only.

---

## 3. FOLDER STRUCTURE

### `src/components/`

| File | Purpose |
|------|---------|
| `DataTable.jsx` | Case table: column picker, header check-all for visible page, cells, row click → `window.open` workflow URL, action menu (Druti vs non-Druti items), hardcopy + print modals |
| `FilterPanel.jsx` | Filter UI: business name, tracking ID, approval date presets + dual-month range, territory dropdown, status/app-type controls (partially disconnected from filter hook — see §7), assign-user modal |
| `Pagination.jsx` | Footer: total count + page-size dropdown (`PAGE_SIZE_OPTIONS`); **does not render page index controls** (Dashboard still passes `page` / `onPageChange` — unused) |
| `Navbar.jsx` | Shell header for dashboard |
| `WorkflowProgressBar.jsx` | Step strip, exit, per-step unresolved query counts |
| `QueryBubble.jsx` | Global `mouseup` selection inside workflow content; portal UI for “+ Add Query”, `QueryForm`, and fixed-position tooltip over saved marks |
| `QueryForm.jsx` | Floating remark form (selected text preview, Enter to submit) |
| `QueryPanel.jsx` | Fixed right drawer: search, list of `QueryCard`, bulk resolve, new manual query |
| `QueryCard.jsx` | Single query thread: expand/collapse, priority, navigate, resolve, delete, reply, copy |
| `RolePicker.jsx` | Initial role gate for workflow (`Operations` / `RO/RE` / `CRM`) |
| `StatusBadge.jsx` | Shared badge styling (legacy / alternate) |
| `ui/Button.jsx`, `ui/TextInput.jsx`, `ui/StatusBadge.jsx` | Small presentational primitives |

### `src/pages/`

| File | Responsibility |
|------|----------------|
| `Dashboard.jsx` | Composes `Navbar`, `FilterPanel`, `DataTable`, `Pagination`; owns `tableData` (seeded from `mockCases`), `appliedCriteria`, pagination state, selection, assign handler, workflow + query summary reads |
| `WorkflowShell.jsx` | Route `/workflow/:trackingId/step/:stepIndex`: validates step, syncs `useWorkflowProgress`, renders active step component from `componentMap`, chrome (progress + prev/next), `QueryBubble`, `QueryPanel`, optional manual `QueryForm` |
| `UploadDocuments.jsx` | Multi-section document upload UI, previews, IndexedDB + dev save |
| `ApplicationDetails.jsx`, `OperationApplicationDetails.jsx`, `CaseInformation.jsx`, … | Large **static / mock-driven** document layouts mirroring bank forms; most are self-contained JSX + occasional imports from `src/data/*Mock*.js` |
| `ComingSoonPage.jsx` | Placeholder for routes registered in `routeConfig.js` but not fully implemented in `App.jsx` |

### `src/hooks/`

| File | Responsibility |
|------|----------------|
| `useCaseFiltering.js` | Pure memoized filter: business name substring, tracking id substring, `unit` (territory), optional “assigned to me” (`assignTo === UI_TEXT.assignedToMe`), optional approval / last-disburse date windows vs row string dates |
| `usePaginatedRows.js` | `data.slice((page-1)*pageSize, …)` |
| `useQueryRemarks.js` | CRUD + replies + flags for queries; keyed `elap_queries_${trackingId}` in `localStorage` |
| `useWorkflowProgress.js` | Read/write `elap_workflow_progress` map; merge completed steps; advance/goTo/reset |
| `useClickOutside.js` | Multi-ref outside click for closing popovers |
| `useDateRangeUtils.js` | Calendar grid + preset ranges for `FilterPanel` |

### `src/data/`

| File | Responsibility |
|------|----------------|
| `mockCases.js` | `cases` export: seed rows for dashboard |
| `tableConfig.js` | Column metadata, default visibility, Druti vs non-Druti **action menu** path lists |
| `filterOptions.js` | Territory, status, app type, assign users, date presets |
| `routeConfig.js` | `comingSoonRoutes` for placeholder pages |
| `applicationDetailsMock.js`, `operationApplicationMock.js` | Tabular / field data for specific detail pages |

### `src/config/`

| File | Responsibility |
|------|----------------|
| `workflowConfig.js` | `DRUTI_WORKFLOW_STEPS` / `NON_DRUTI_WORKFLOW_STEPS`, `getWorkflowSteps(product)` |
| `uiConstants.js` | `UI_TEXT`, `PAGE_SIZE_OPTIONS`, `DATE_UI` defaults |

### `src/lib/`

| File | Responsibility |
|------|----------------|
| `uploadDocumentsDb.js` | IndexedDB open/put/get scoped by `DOCUMENT_UPLOAD_SCOPE` |
| `userDocumentPublicPath.js` | Manifest fetch, canonical paths, `attachmentDisplayUrl` / `hasAttachmentDisplay` |

### Root app files

| File | Responsibility |
|------|----------------|
| `src/main.jsx` | `StrictMode`, `BrowserRouter`, `createRoot`, imports `index.css` |
| `src/App.jsx` | Declares all `<Route>` elements |
| `src/index.css` | Tailwind v4 entry + global box model / fonts |
| `src/App.css` | Present if legacy; primary styling is Tailwind classes in components |
| `vite.config.js` | React plugin + **custom middleware**: `POST /__ops/save-upload`, `GET /__ops/user-documents-manifest.json`, merges disk + `manifest.json` under `public/user-documents` |
| `postcss.config.js` | Tailwind PostCSS pipeline |

---

## 4. CORE FEATURES (DETAILED)

### DataTable

- **Sorting:** **Not implemented.** Header labels are not clickable; there is no sort state.
- **Filtering:** **Not inside the table.** `Dashboard` passes **already filtered** `panelFilteredCases` from `useCaseFiltering`. Row count callback `onFilteredRowCountChange` syncs total for pagination display.
- **Column visibility:** First header cell opens a picker; draft checkboxes → **Save** commits `visibleColumns`. `tableColumns` drives rendered `<th>`/`<td>`. For `trackingId`, two extra columns show **Open Q** / **Responded** counts from `querySummaries` (read from `localStorage` per id on dashboard mount).
- **Row expansion / attachments:** **Not in DataTable.** Attachments and inline previews live on **`UploadDocuments`** (workflow step), not as sub-rows of the grid.
- **Selection:** Per-row checkbox (`stopPropagation`); header checkbox selects/deselects **all rows on the current page** only (`usePaginatedRows` slice).
- **Row click:** Opens `/workflow/{trackingId}/step/{resumeStep}` in a new tab; resume step from `localStorage` `elap_workflow_progress` when product matches, else `0`. Writes `sessionStorage` `elap_row_context_{trackingId}` for product/business name.
- **Action column:** Product-specific menu (`tableConfig` `drutiActionItems` vs `nonDrutiActionItems`). Special cases: `hardcopy-status` opens inline modal; `print-all-documents` opens checklist modal then `window.print()`; relative paths like `upload-documents` become `/{path}/{trackingId}`.

### FilterPanel

- Local state for all controls; **Submit** calls `onSubmitCriteria` with `businessName`, `trackingId`, `approvalDateActive` + `approvalRange`, `unit` / `assignTo` (both set from **territory** selection in current code — see §7).
- **Reset** clears inputs and calls `onResetCriteria`.
- **Assign application** modal: picks user (or self-assign), calls `onAssignUser` with label; parent updates `assignTo` on selected rows only.
- Date UX: presets from `filterOptions` + `useDateRangeUtils.getPresetRange`; custom dual-month picker updates `draftRange` then **Apply**.

### Query / remark system

- **Creation:** `QueryBubble` listens to `document` `mouseup`. If selection length ≥ 2 and range is inside `contentRef`, shows floating “+ Add Query”. Submitting `QueryForm` wraps selection in `<mark>` via `Range.surroundContents`, stores query via `useQueryRemarks.addQuery`.
- **Rehydration:** On step change / query list updates, an effect walks text nodes with `TreeWalker`, finds first `indexOf(selectedText)`, wraps in `<mark data-elap-query="saved" data-elap-remark …>` if not already present. **First match only** per query id.
- **Tooltip:** Mouseover/out on marks inside `contentRef`; fixed tooltip in portal (`dataset.elapRemark`).
- **Panel:** Search by remark/selected text; expand card for replies; Operations vs other roles affects reply affordances (`QueryCard`).

### Pagination

- **Data:** `usePaginatedRows(data, page, pageSize)` inside `DataTable` slices the filtered array.
- **UI:** `Pagination` shows **total entries** and **page size** only. **No previous/next page UI** despite `Dashboard` holding `page` state — changing page requires future work or unused wiring.

### Navigation / routing

- **`BrowserRouter`** in `main.jsx`; routes in `App.jsx`.
- **Workflow:** `/workflow/:trackingId/step/:stepIndex` → `WorkflowShell` renders one of many page components from `componentMap` keyed by `workflowConfig` `path`.
- **Standalone:** Same pages reachable under `/{document-path}/:trackingId` for deep links / action menu.
- **Placeholders:** `comingSoonRoutes` in `App.jsx` map to `ComingSoonPage`.

---

## 5. DATA FLOW

**Dashboard listing**

1. `mockCases.js` → `cases` imported into `Dashboard` as initial `tableData`.
2. User submits `FilterPanel` → `appliedCriteria` updated → `useCaseFiltering(tableData, appliedCriteria)` → `panelFilteredCases`.
3. `DataTable` receives `panelFilteredCases`, reports `data.length` upward for `filteredRowCount`, internally slices with `usePaginatedRows(data, page, pageSize)`.
4. Assign user: `setTableData` maps selected `trackingId`s to new `assignTo` (in-memory until refresh).

**Query highlights**

1. `useQueryRemarks(trackingId)` loads `localStorage` → `queries` state.
2. `QueryBubble` receives `queries` for current step; DOM marks inserted under `.workflow-content-area`.
3. `Dashboard` aggregates per-row open/responded counts by scanning same storage keys (structure must stay in sync with `useQueryRemarks`).

**Workflow progress**

1. `useWorkflowProgress` reads/writes `elap_workflow_progress[trackingId]` (current step, completed indices, product).
2. `WorkflowShell` navigates when step invalid or on Next/Previous; completion resets and returns `/`.

---

## 6. KEY DESIGN DECISIONS

**DOM `<mark>` highlights instead of a separate coordinate model**  
Queries anchor to **literal selected substrings** in the rendered document. `surroundContents` ties the highlight to the same DOM tree users see and keeps implementation small. Tradeoff: fragile if page text changes or the same substring appears multiple times (walker stops at first hit).

**Inline workflow content instead of navigating away per document**  
`WorkflowShell` keeps one shell (progress, queries, next/prev) and swaps the inner page component. Preserves context for selection-based queries and avoids full reloads.

**Product-specific step lists**  
`getWorkflowSteps(product)` switches Druti vs default pipelines so the same shell supports multiple product templates without backend feature flags.

**Dashboard row → new tab**  
`window.open` for workflow isolates long document review from the grid tab and matches “open case in working window” behavior.

---

## 7. KNOWN LIMITATIONS

- **No real backend:** Case list, document bodies, and most field values are **mock / static**.
- **Dashboard case data:** Lives in React state; **refresh loses** assign-to edits unless you add persistence.
- **FilterPanel vs `useCaseFiltering`:** Submit payload does **not** include **application status** or **application type** from the panel; `assignTo` in criteria is populated from **territory** selection, so the **`UI_TEXT.assignedToMe`** branch in `useCaseFiltering` is **not reachable** from the current Submit shape without code changes.
- **Pagination:** No UI to change `page` (only page size); first page always shown in practice.
- **Query highlights:** `surroundContents` can throw if selection spans elements; errors swallowed; duplicate text picks first occurrence; `window.find` used when navigating from panel is **browser-dependent** and imprecise.
- **Role / auth:** `RolePicker` is a **client-only gate**, not security.
- **Print modal:** Selecting documents does not map to distinct routes; it ends in a single `window.print()` of the current view.
- **Selection / marks:** Deleting a query unwraps the mark via `querySelector`; overlapping selections and React re-renders can desync marks from stored `selectedText`.

**Partial persistence (do not claim “no persistence” globally)**  
`localStorage`: queries, workflow progress, current role. `IndexedDB`: upload blobs. Dev: files under `public/user-documents`.

---

## 8. HOW TO RUN PROJECT

From repository root:

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

---

## 9. HOW TO EXTEND

| Goal | Approach |
|------|----------|
| **New table column** | Add entry to `tableColumns` + `defaultVisibleColumns` / `columnPickerOptions` in `tableConfig.js`; render `<td>` branch in `DataTable.jsx`; extend `mockCases` objects |
| **New filter dimension** | Extend `useCaseFiltering` predicate + pass field from `FilterPanel` `handleSubmit` through `Dashboard` `appliedCriteria` |
| **Connect backend API** | Replace `useState(cases)` with `useEffect` fetch + loading/error; consider SWR/React Query; normalize API shape to current row keys (`trackingId`, `businessName`, …) |
| **Persist queries server-side** | Replace `localStorage` read/write in `useQueryRemarks.js` with API calls; handle merge conflict and auth |
| **Improve attachments** | Centralize MIME/size validation; add replace-file UX; production upload API + virus scan; widen `SLOT_UPLOAD_KEYS` in `vite.config.js` if new keys |

---

## 10. CODE QUALITY NOTES

- **Separation:** Clear split between **data config** (`data/`, `config/`), **hooks** (`hooks/`), and **views** (`pages/` vs `components/`). Workflow-specific UI (`Query*`, `WorkflowProgressBar`) is grouped sensibly.
- **Reusability:** `QueryForm` is reusable; `DataTable` is monolithic (~430 lines) and owns modals + menu — acceptable for a prototype, harder to test in isolation.
- **Technical debt:** Pagination props mismatch; filter criteria incomplete vs panel; `FilterPanel` `handleSubmit` field naming (`assignTo` vs territory); duplicate `StatusBadge` paths under `components/` and `components/ui/`; heavy presentational pages without shared layout primitive.

---

## 11. FUTURE IMPROVEMENTS

- **Table:** Column sorting, stable row keys, virtualized rows if API returns large datasets.
- **Pagination:** Wire `page` / `onPageChange` into visible controls; optional URL sync (`?page=`).
- **Tooltips:** Use a single positioning library or CSS anchor positioning; avoid duplicate portal logic vs query bubble.
- **Role-based UI:** Server-derived roles, route guards, hide actions by permission.
- **Query system:** Store character offsets or node paths if documents become dynamic; avoid `window.find`.
- **Attachments:** S3-compatible uploads, signed URLs, manifest from API not `public/` scan.
- **Testing:** Add Vitest + RTL for `useCaseFiltering`, `usePaginatedRows`, and query reducer logic.

---

## 12. Workflow feature

### Overview
Clicking a dashboard row opens a guided step-by-step workflow in a
new browser tab. Progress is saved to localStorage and resumable.
The existing action menu (⋯) is preserved alongside row-click.

### New files

| File | Purpose |
|------|---------|
| `src/config/workflowConfig.js` | DRUTI_WORKFLOW_STEPS and NON_DRUTI_WORKFLOW_STEPS arrays ({ label, path }[]). Exports getWorkflowSteps(product). |
| `src/hooks/useWorkflowProgress.js` | localStorage CRUD for elap_workflow_progress. Exposes currentStep, completedSteps, advance(), goToStep(), resetProgress(). Accepts (trackingId, product, stepIndex). |
| `src/components/WorkflowProgressBar.jsx` | Sticky top bar: milestone dots with step labels, all dots clickable (no lock), business name, tracking id, Dashboard link, Exit. Red number badge on dots with unresolved queries. |
| `src/pages/WorkflowShell.jsx` | Route /workflow/:trackingId/step/:stepIndex. Reads row context from location.state with sessionStorage fallback. Renders progress bar, active document page, sticky bottom nav. Print style hides .workflow-shell-chrome. resetProgress() on Complete & Close only. |

### Modified files

| File | What changed |
|------|-------------|
| `src/App.jsx` | Added /workflow/:trackingId/step/:stepIndex before comingSoonRoutes. |
| `src/components/DataTable.jsx` | handleRowClick writes sessionStorage elap_row_context_{trackingId}, reads localStorage for resume step, window.open new tab. stopPropagation on action menu and checkbox cells. In Progress / Done badge on trackingId cell. |
| `src/pages/Dashboard.jsx` | Reads elap_workflow_progress on mount, passes workflowProgress to DataTable. |

### localStorage schema — workflow
Key: "elap_workflow_progress"
Value: { trackingId: { product, currentStep, completedSteps, lastVisited } }

### sessionStorage schema
Key: "elap_row_context_{trackingId}"
Value: { product, businessName }

### Step sequences
Non-Druti (10 steps): Case Information → Application Details → Operation Application Details → Appraisal Memo → Application Form → Sanction Letter → Account Opening Form → CIB Undertaking → Loan Amount Approval → Upload Documents → Hardcopy Status

Druti (13 steps): Case Information → Application Details → Operation Application Details → Appraisal Memo → Application Form → Sanction Letter → Charge Documents → Exclusion List → Demand Promissory Note → Document Checklist → Druti Sales Memo → Druti Charge Document → Upload Documents → Hardcopy Status

---

## 13. Query & Remarks feature

### Overview
Ops users can select text on any document page inside the workflow
and raise a query with a remark. Selected text is highlighted red
in-place. Queries are stored per case in localStorage and visible
in a collapsible right-side panel with full threaded replies.

### New files

| File | Purpose |
|------|---------|
| `src/hooks/useQueryRemarks.js` | localStorage CRUD. Key: elap_queries_{trackingId}. Exposes queries, addQuery(), resolveQuery(), deleteQuery(), getQueriesForStep(), addReply(), toggleQueryResponded(), markNotificationRead(), setPriority(). |
| `src/components/QueryPanel.jsx` | Collapsible fixed right drawer. Collapsed tab shows unresolved count + red pulse dot if any unread. Expanded: search input, Show/Hide Resolved toggle, Resolve Responded bulk button, QueryCard list, Switch Role footer. |
| `src/components/QueryCard.jsx` | Single query thread card. Priority dot + selector (High/Medium/Low). Expand/collapse. Role-colored reply bubbles. Enter to send reply. Timestamp on original remark. Cross query (Operations only). Copy thread. Toggle Responded (non-Operations). |
| `src/components/QueryBubble.jsx` | mouseup detection inside contentRef. Floating "+ Add Query" bubble. Wraps selection in red mark via surroundContents on submit. Re-injects marks on step change using TreeWalker. onQueryAddedRef and showFormRef prevent stale closure and mouseup interference. |
| `src/components/QueryForm.jsx` | Fixed-position remark form. 80-char selected text preview. Enter to submit, Shift+Enter for newline. Position clamped to viewport. |
| `src/components/RolePicker.jsx` | One-time session role gate. Stores in sessionStorage elap_current_role. Roles: Operations (#0077c8), RO/RE (#16a34a), CRM (#7c3aed). |

### Modified files

| File | What changed |
|------|-------------|
| `src/pages/WorkflowShell.jsx` | Mounts QueryBubble, QueryPanel, RolePicker, optional manual QueryForm. contentRef on workflow-content-area. handleNavigateToQuery: goToStep + navigate + window.find after 600ms. handleDeleteQuery unwraps DOM mark before deleting. queriesByStep (unresolved per step) passed to WorkflowProgressBar. |
| `src/components/WorkflowProgressBar.jsx` | queriesByStep prop: number badge on milestone dots when count > 0. |

### localStorage schema — queries
Key: "elap_queries_{trackingId}"
Value: array of { id, trackingId, stepIndex, stepLabel, selectedText,
remark, createdAt, resolved, toggledResolved, notificationUnread,
priority, replies: [{ id, role, text, createdAt }] }

### Role colors
Operations: #0077c8 — RO/RE: #16a34a — CRM: #7c3aed

### DOM highlight approach
Range.surroundContents() wraps selected text in a native mark element.
Cross-boundary selections fail silently — query still saved.
Attributes: data-elap-query (pending/saved), data-elap-remark, data-elap-query-id.
Highlights reset on step navigation (component remount); TreeWalker
re-injects on mount for saved queries.
Deleting a query: handleDeleteQuery finds mark by data-elap-query-id,
unwraps children, removes element, then calls deleteQuery().

### Known limitations
- Cross-element selections get no highlight but query is saved.
- Highlights reset between steps on remount.
- window.find() is Chromium-only; fallback is navigation without scroll.
- RolePicker is client-only, not a security gate.
- surroundContents picks first text node match per query id.

---

## 14. Upload Documents page

### Overview
A new workflow step and action menu item for document uploads.
Currently renders a Coming Soon placeholder pending full implementation.

### New files

| File | Purpose |
|------|---------|
| `src/pages/UploadDocuments.jsx` | Centered Coming Soon placeholder. Will become multi-section upload UI with IndexedDB persistence and dev Vite middleware. |

### Modified files

| File | What changed |
|------|-------------|
| `src/data/tableConfig.js` | Added Upload Documents to both drutiActionItems and nonDrutiActionItems. |
| `src/config/workflowConfig.js` | Added Upload Documents step before Hardcopy Status in both step sequences. |
| `src/pages/WorkflowShell.jsx` | Added upload-documents → UploadDocuments to componentMap. |
| `src/App.jsx` | Added /upload-documents/:trackingId route before comingSoonRoutes. |

---

## 15. Case data consistency

### Overview
Three canonical cases are pinned to the top of the dashboard.
All case-specific values across all 15 document pages are driven
from a single profile object — no hardcoded names, locations,
amounts, person names, or IDs remain as JSX text.

### Canonical cases (top 3 rows in mockCases.js)

| Index | trackingId | Business Name | Product |
|-------|-----------|---------------|---------|
| 0 | 26030058034 | Jorina Poultry House | Druti |
| 1 | 24030077483 | M/S KHADIZA TRADERS | Druti |
| 2 | 26030058026 | RAFI COSMETICS | Druti |

### New files

| File | Purpose |
|------|---------|
| `src/data/caseProfiles.js` | CASE_PROFILES keyed by trackingId. Fields per profile: trackingId, businessName, product, proposalName, businessLocation, businessSince, legalStatus, proposalType, territory, crmCenter, crmLoanId, roId, roName, roPin, riskManager, riskManagerName, riskManagerPins, branchName, city, division, loanType, loanAmount, tenor, interest, emiComfort, purpose, previousAppraisalDate, previousAppraisalId. Exports getCaseProfile(trackingId) → profile or null. |
| `src/hooks/useCaseData.js` | Hook for document pages. Reads trackingId from useParams(), calls getCaseProfile(). Exposes get(field, fallback='—'), formatBDT(amount), profile, trackingId. get() returns fallback when profile null or field missing. formatBDT() returns '—' when amount falsy, else ৳ X,XX,XXX via toLocaleString('en-IN'). |

### Modified files

| File | What changed |
|------|-------------|
| `src/data/mockCases.js` | Three canonical cases moved to indices 0,1,2. All three set product:'Druti'. |
| 15 document pages | Import useCaseData, use get()/formatBDT() for all case-specific fields. |

### Pages updated
AccountOpeningForm, AppraisalMemo, ApplicationDetails,
ApplicationForm, CaseInformation, ChargeDocuments, CibUndertaking,
DemandPromissoryNote, DocumentChecklist, DrutiChargeDocument,
DrutiSalesMemo, ExclusionList, LoanAmountApproval,
OperationApplicationDetails, SanctionLetter

### overrideCell pattern
ApplicationDetails and OperationApplicationDetails import large mock
objects. A local overrideCell(value) helper applies regex substitutions
at render time. Every mock cell render ({cell}, {row[n]}, {r[n]},
row.left.p, row.right.p) is wrapped with overrideCell(). Patterns cover:
case names, Habiganj/Elephant Road, BARURA BRANCH, Sylhet variants,
person names → respective get() calls. Standalone Sylhet token included.

### Profile values by case

| Field | Jorina (26030058034) | KHADIZA (24030077483) | RAFI (26030058026) |
|-------|---------------------|----------------------|-------------------|
| loanAmount | 2000000 | 1500000 | 2000000 |
| tenor | 36 | 24 | 24 |
| interest | 9 | 9 | 13.75 |
| city | Habiganj | Dhaka | Habiganj |
| division | Sylhet | Dhaka | Sylhet |

### Known limitations
- Profile data is static; cases outside the three canonical ones
  show '—' for all profile-driven fields.
- overrideCell regex matches first occurrence only.
- Mock data files (applicationDetailsMock, operationApplicationMock)
  are not modified; substitution happens at render time only.

---

## 16. Excel-style table features

### Overview
DataTable.jsx was extended with five Excel-style features:
column autofilter, clipboard copy, proper XLSX export, 
selected-row export, and shift+click range selection.

### Features added (all in src/components/DataTable.jsx)

**Column sorting**
- Click any column header to sort ascending/descending
- Sort indicator ▲/▼/⇅ on every sortable header
- sortKey and sortDir state; sortedData via useMemo
- Open Q, Responded, Action headers are not sortable
- Frozen trackingId column header uses hover:bg-[#f0f4fa]
  distinct from row hover bg-[#f0f7ff]

**Freeze first column**
- trackingId <th> and <td>: position sticky, left 0, zIndex 2
- Header background #f8f9fb, cell background white
- borderRight: 2px solid #e7ebf0 as freeze indicator

**Column autofilter**
- State: columnFilters ({}), openFilterCol (null), filterPanelRef
- useClickOutside closes open filter panel
- filteredData useMemo filters sortedData by columnFilters entries
- usePaginatedRows, onFilteredRowCountChange, exportToXLSX all
  use filteredData (not raw data or sortedData)
- Filter ▾ icon on each sortable column header, blue when active
- Dropdown rendered via createPortal to document.body
- Dropdown: search input, Select All / Clear, checkbox option list
  built from full unfiltered data, Apply button
- "Clear All Filters" button in toolbar when any filter active

**Copy to clipboard**
- Copy button visible only when selectedTrackingIds.size > 0
- Tab-separated columns, newline-separated rows, headers included
- Shows "Copied!" feedback for 2 seconds after copy
- Ctrl+C / Cmd+C keyboard shortcut when rows selected
- Listener cleaned up on unmount

**XLSX export**
- Self-contained ZIP + XLSX builder (no npm dependency)
- Replaces old CSV export entirely
- Output: elap_cases_YYYY-MM-DD.xlsx
- Blob type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- Contains: [Content_Types].xml, xl/workbook.xml,
  xl/worksheets/sheet1.xml, xl/sharedStrings.xml, xl/styles.xml
- Header row styled with bold font + blue fill (#0077C8)
- Uses sharedStrings for all cell values; crc32 ZIP integrity

**Export selected rows**
- When selectedTrackingIds.size > 0: two buttons shown:
  "↓ Export All" (full filteredData) and
  "↓ Export Selected (n)" (selected rows only)
- When nothing selected: single "↓ Export XLSX" button

**Shift+click range select**
- lastClickedIndex state (null default)
- rows.map uses (row, rowIndex) — rowIndex is page-relative
- Shift+click selects contiguous range between lastClickedIndex
  and current rowIndex, adding only unselected rows
- Normal click updates lastClickedIndex
- lastClickedIndex resets to null on page change
- e.stopPropagation() preserved in handleRowCheckboxClick

### State added to DataTable
- sortKey, sortDir — column sort
- columnFilters, openFilterCol — autofilter
- copyFeedback — clipboard feedback
- lastClickedIndex — shift+click range

### Data pipeline order
data (prop, full filtered set from Dashboard)
→ sortedData (useMemo, sort by sortKey/sortDir)
→ filteredData (useMemo, apply columnFilters)
→ usePaginatedRows(filteredData, page, pageSize) → rows (rendered)

### Known limitations
- Column filter options always show all unique values from the
  full unfiltered data prop, not the current filteredData subset
- XLSX builder has no column width auto-sizing
- Shift+click rowIndex is page-relative; selecting across pages
  is not supported
- Ctrl+C copy only works when rows are selected; does not copy
  individual cell ranges