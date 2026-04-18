/**
 * Paths that still render the generic “coming soon” placeholder when no concrete route matches first.
 */
export const comingSoonRoutes = [
  { path: '/export-cib-data/:trackingId', title: 'Export CIB Data' },
  { path: '/view-all-queries/:trackingId', title: 'View All Queries' },
  { path: '/druti-charge-document/:trackingId', title: 'Druti Charge Document' },
  { path: '/cbs-search-summary/:trackingId', title: 'CBS Search Summary' },
  {
    path: '/elap-cbs-comparison/:trackingId',
    title: 'eLAP and CBS Comparison Application Details',
  },
  { path: '/print-all-documents/:trackingId', title: 'Print All Documents' },
]

