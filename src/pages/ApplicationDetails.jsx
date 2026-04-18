/**
 * Application details report tuned for browser print (tables and section blocks).
 */
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { applicationDetailsMock as defaultMock } from '../data/applicationDetailsMock'
import useCaseData from '../hooks/useCaseData'

const td = 'border border-black px-2 py-1.5 text-[12px] align-top text-black'
const th = 'border border-black bg-[#e8e8e8] px-2 py-2 text-center text-[11px] font-bold text-black'
const secBar =
  'border-b border-black bg-[#e8e8e8] px-2 py-2 text-center text-[12px] font-bold uppercase tracking-wide text-black'

function SectionBox({ title, children, className = '' }) {
  return (
    <div className={`mb-6 border border-black ${className}`}>
      <div className={secBar}>{title}</div>
      {children}
    </div>
  )
}

function ApplicationDetails() {
  const { trackingId } = useParams()
  const { get, formatBDT, profile } = useCaseData()
  const d = useMemo(() => {
    const base = { ...defaultMock.summary }
    if (trackingId) base.crmTrackingId = trackingId
    return { ...defaultMock, summary: base }
  }, [trackingId])
  const s = d.summary
  const lam = d.loanAmountDetermination
  const lamRowCount = lam.rows.length

  const overrideCell = (value) => {
    if (!profile) return value
    const str = String(value ?? '')
    return str
      .replace(/Jorina Poultry House|JORINA|Jorina|RAFI COSMETICS|RAFI|M\/S KHADIZA TRADERS|KHADIZA|PHONE VILLAGE|FAYSAL AHM+[A-Z]+|ABC Trading|NAHAR FASHION/gi, get('businessName'))
      .replace(/Habiganj(?!\s*Branch)/gi, get('city'))
      .replace(/Elephant Road(?!\s*Branch)/gi, get('crmCenter'))
      .replace(/BARURA BRANCH|Barura Branch/gi, get('branchName'))
      .replace(/Sylhet City|SYLHET|Sylhet Sadar|Sylhet/gi, get('division'))
      .replace(/Shishir Das/gi, get('roName'))
      .replace(/Md\.?\s*Jahidul Islam|Ali Mustafa|Shirajul Islam|Hedayet Kabir|Soumitra Sarkar/gi, get('riskManagerName'))
  }

  return (
    <div className="flex min-h-[100dvh] w-full max-w-none flex-col bg-white font-sans text-black">
      <header className="flex w-full shrink-0 items-center justify-end gap-3 border-b border-[#e0e0e0] px-3 py-2 sm:px-4">
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 border border-[#ccc] bg-white px-4 py-1.5 text-[13px]"
        >
          Print
        </button>
      </header>

      <main className="w-full max-w-none flex-1 overflow-x-auto px-2 pb-24 pt-3 sm:px-3">
        {/* Title bar */}
        <div className="mb-6 border border-black">
          <div className="bg-[#e8e8e8] px-2 py-2 text-center text-[12px] font-bold uppercase tracking-wide text-black">
            APPLICATION DETAILS
          </div>
        </div>

        {/* Block 1: CRM / dates */}
        <table className="mb-6 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${td} w-1/2`}>
                <span className="font-semibold">CRM Center:</span> {get('crmCenter')}
              </td>
              <td className={td}>
                <span className="font-semibold">CRM Tracking ID:</span> {get('trackingId')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Approval Date:</span> {overrideCell(s.approvalDate)}
              </td>
              <td className={td}>
                <span className="font-semibold">Loan Application Date:</span> {overrideCell(s.loanApplicationDate)}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Unit:</span> {get('territory')}
              </td>
              <td className={td}>
                <span className="font-semibold">Area:</span> {get('territory')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Territory:</span> {get('territory')}
              </td>
              <td className={td}>
                <span className="font-semibold">ROC:</span> {overrideCell(s.roc)}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">RO ID:</span> {get('roId')}
              </td>
              <td className={td}>
                <span className="font-semibold">Risk Manager:</span> {get('riskManagerName')}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Block 2: Proposal */}
        <table className="mb-6 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={td} colSpan={2}>
                <span className="font-semibold">Proposal Name:</span> {get('businessName')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Key Person:</span> {get('businessName')}
              </td>
              <td className={td}>
                <span className="font-semibold">Business Location:</span> {get('businessLocation')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Business Since:</span> {get('businessSince')}
              </td>
              <td className={td}>
                <span className="font-semibold">Legal Status:</span> {get('legalStatus')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Current Proposal:</span> {formatBDT(profile?.loanAmount)}
              </td>
              <td className={td}>
                <span className="font-semibold">Proposal Type:</span> {get('proposalType')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Sector:</span> {overrideCell(s.sector)}
              </td>
              <td className={td}>
                <span className="font-semibold">Sub-Sector:</span> {overrideCell(s.subSector)}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">CIB Status:</span> {overrideCell(s.cibStatus)}
              </td>
              <td className={td}>
                <span className="font-semibold">Security:</span> {overrideCell(s.security)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Roles */}
        <table className="mb-6 w-full border-collapse border border-black">
          <thead>
            <tr>
              {['ROLE', 'USER NAME', 'PIN', 'CONTACT NO'].map((h) => (
                <th key={h} className={th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {d.roles.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={`${td} text-center`}>
                    {overrideCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* REQUESTED FACILITY */}
        <SectionBox title="REQUESTED FACILITY DETAILS">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  'Loan Type',
                  'Loan',
                  'Tenor',
                  'Interest',
                  'EMI Comfort',
                  'Purpose',
                  'Tenor Passed % (Repeat)',
                ].map((h) => (
                  <th key={h} className={th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>{get('loanType')}</td>
                <td className={td}>{formatBDT(profile?.loanAmount)}</td>
                <td className={td}>{get('tenor')}</td>
                <td className={td}>{get('interest')}</td>
                <td className={td}>{formatBDT(profile?.emiComfort)}</td>
                <td className={td}>{get('purpose')}</td>
                <td className={td}>{get('tenor')}</td>
              </tr>
              <tr>
                <td className={`${td} font-semibold`} colSpan={4}>
                  Total Requested Loan Amount
                </td>
                <td className={`${td} text-center`}>{formatBDT(profile?.loanAmount)}</td>
                <td className={td}></td>
                <td className={td}></td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* FACILITIES */}
        <SectionBox title="FACILITIES DETAILS WITH ALL FINANCIAL INSTITUTIONS">
          <div className="border-b border-black bg-[#e8e8e8] py-2 text-center text-[12px] font-bold">
            EXISTING TERM LOAN
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  'Loan in the Name of',
                  'Institutions',
                  'Nature of Facility',
                  'Security Type',
                  'Limit',
                  'Rate',
                  'Tenor Passed or Expiry',
                ].map((h) => (
                  <th key={h} className={th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.existingTermLoan.map((r, i) => (
                <tr key={i}>
                  <td className={td}>{overrideCell(r.name)}</td>
                  <td className={td}>{overrideCell(r.institutions)}</td>
                  <td className={td}>{overrideCell(r.nature)}</td>
                  <td className={td}>{overrideCell(r.security)}</td>
                  <td className={td}>{overrideCell(r.limit)}</td>
                  <td className={td}>{overrideCell(r.rate)}</td>
                  <td className={td}>{overrideCell(r.tenor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-b border-t border-black bg-[#e8e8e8] py-2 text-center text-[12px] font-bold">
            EXISTING SHORT TERM LOAN
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  'Loan in the Name of',
                  'Institutions',
                  'Nature of Facility',
                  'Security Type',
                  'Limit',
                  'Rate',
                  'Tenor Passed',
                ].map((h) => (
                  <th key={h} className={th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.existingShortTerm.map((r, i) => (
                <tr key={i}>
                  <td className={td}>{overrideCell(r.name)}</td>
                  <td className={td}>{overrideCell(r.institutions)}</td>
                  <td className={td}>{overrideCell(r.nature)}</td>
                  <td className={td}>{overrideCell(r.security)}</td>
                  <td className={td}>{overrideCell(r.limit)}</td>
                  <td className={td}>{overrideCell(r.rate)}</td>
                  <td className={td}>{overrideCell(r.tenor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        {/* BUSINESS'S INFORMATION */}
        <SectionBox title="BUSINESS'S INFORMATION">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={`${td} font-semibold`}>Nature of Business</td>
                <td className={td} colSpan={3}>
                  {overrideCell(d.businessInfo.natureOfBusiness)}
                </td>
              </tr>
              <tr>
                <td className={`${td} font-semibold`}>Business Address (In License)</td>
                <td className={td} colSpan={3}>
                  {overrideCell(d.businessInfo.addressLicense)}
                </td>
              </tr>
              <tr>
                <td className={`${td} font-semibold`}>Business Address (Actual)</td>
                <td className={td} colSpan={3}>
                  {overrideCell(d.businessInfo.addressActual)}
                </td>
              </tr>
              <tr>
                <td className={`${td} font-semibold`}>Additional Address (if any)</td>
                <td className={td} colSpan={3}>
                  {overrideCell(d.businessInfo.additionalAddress)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Majority Ownership Status:</span>{' '}
                  {overrideCell(d.businessInfo.majorityOwnership)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Location:</span> {overrideCell(d.businessInfo.location)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Business Type:</span> {overrideCell(d.businessInfo.businessType)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Organization Type:</span>{' '}
                  {overrideCell(d.businessInfo.organizationType)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Business Product:</span> {overrideCell(d.businessInfo.businessProduct)}
                </td>
                <td className={td}>
                  <span className="font-semibold">TIN No:</span> {overrideCell(d.businessInfo.tin)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Registration Issue Date.:</span>{' '}
                  {overrideCell(d.businessInfo.registrationIssueDate)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Trade License Issue date:</span>{' '}
                  {overrideCell(d.businessInfo.tradeLicenseIssue)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Trade Lic. No.:</span> {overrideCell(d.businessInfo.tradeLicNo)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Trade License Valid Till:</span>{' '}
                  {overrideCell(d.businessInfo.tradeLicenseValid)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Business Age:</span> {overrideCell(d.businessInfo.businessAge)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Business Contact No.:</span>{' '}
                  {overrideCell(d.businessInfo.businessContact)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Sales Keeping:</span> {overrideCell(d.businessInfo.salesKeeping)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Wholesale%:</span> {overrideCell(d.businessInfo.wholesalePct)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Retail %:</span> {overrideCell(d.businessInfo.retailPct)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Service %:</span> {overrideCell(d.businessInfo.servicePct)}
                </td>
              </tr>
              <tr>
                <td className={td} colSpan={2}>
                  <span className="font-semibold">Has the customer previously declined/send back?:</span>{' '}
                  {overrideCell(d.businessInfo.previouslyDeclined)}
                </td>
                <td className={td} colSpan={2}>
                  <span className="font-semibold">If Yes, Reason:</span> {overrideCell(d.businessInfo.declineReason)}
                </td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* BUSINESS OVERVIEW — 6 cells */}
        <SectionBox title="BUSINESS OVERVIEW">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={td}>
                  <span className="font-semibold">{overrideCell(d.businessOverview.totalLabel)}</span>
                </td>
                <td className={td}>{overrideCell(d.businessOverview.totalVal)}</td>
                <td className={td}>
                  <span className="font-semibold">{overrideCell(d.businessOverview.femaleLabel)}</span>
                </td>
                <td className={td}>{overrideCell(d.businessOverview.femaleVal)}</td>
                <td className={td}>
                  <span className="font-semibold">{overrideCell(d.businessOverview.maleLabel)}</span>
                </td>
                <td className={td}>{overrideCell(d.businessOverview.maleVal)}</td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* KEY PERSON — 3-column detail grid */}
        <SectionBox title="KEY PERSON/OWNER'S INFORMATION">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Name:</span> {overrideCell(d.keyPerson.name)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Role In Business:</span> {overrideCell(d.keyPerson.role)}
                </td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td} colSpan={3}>
                  <span className="font-semibold">Present Address:</span> {overrideCell(d.keyPerson.presentAddress)}
                </td>
              </tr>
              <tr>
                <td className={td} colSpan={3}>
                  <span className="font-semibold">Permanent Address:</span> {overrideCell(d.keyPerson.permanentAddress)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Date of Birth:</span> {overrideCell(d.keyPerson.dob)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Age:</span> {overrideCell(d.keyPerson.age)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Gender:</span> {overrideCell(d.keyPerson.gender)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Father:</span> {overrideCell(d.keyPerson.father)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Mother:</span> {overrideCell(d.keyPerson.mother)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Spouse:</span> {overrideCell(d.keyPerson.spouse)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Marital Status:</span> {overrideCell(d.keyPerson.marital)}
                </td>
                <td className={td}>
                  <span className="font-semibold">NID No.:</span> {overrideCell(d.keyPerson.nid)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Smart NID No:</span> {overrideCell(d.keyPerson.smartNid)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Tax Return Receipt (TRR):</span> {overrideCell(d.keyPerson.trr)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Education:</span> {overrideCell(d.keyPerson.education)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Contact No.:</span> {overrideCell(d.keyPerson.contact)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Share %:</span> {overrideCell(d.keyPerson.sharePct)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Initial Investment:</span> {overrideCell(d.keyPerson.initialInvestment)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Dependent:</span> {overrideCell(d.keyPerson.dependent)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Residence Status:</span> {overrideCell(d.keyPerson.residence)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Relevant Exper.(Yrs):</span> {overrideCell(d.keyPerson.experience)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Business Established By:</span>{' '}
                  {overrideCell(d.keyPerson.businessEstablishedBy)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Years in Current Premise:</span> {overrideCell(d.keyPerson.yearsInPremise)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Succession Plan:</span> {overrideCell(d.keyPerson.successionPlan)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Relationship with Successor:</span>{' '}
                  {overrideCell(d.keyPerson.relationshipSuccessor)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Personal Net Worth (PNW):</span> {overrideCell(d.keyPerson.pnw)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Family Net Worth:</span> {overrideCell(d.keyPerson.familyNetWorth)}
                </td>
                <td className={td}>
                  <span className="font-semibold">Other Earnings (Monthly BDT):</span>{' '}
                  {overrideCell(d.keyPerson.otherEarnings)}
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold">Sources of Other Earnings:</span>{' '}
                  {overrideCell(d.keyPerson.sourcesOtherEarnings)}
                </td>
                <td className={td}>
                  <span className="font-semibold">PG to Existing BBL Loan:</span> {overrideCell(d.keyPerson.pgExistingBbl)}
                </td>
                <td className={td}></td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* FINANCIAL PERFORMANCE */}
        <SectionBox title="FINANCIAL PERFORMANCE">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={th}>Year</th>
                <th className={th}>Previous Year</th>
                <th className={th}>Jan-20</th>
                <th className={th}>Growth %</th>
                <th className={th}>Profitability</th>
                <th className={th}></th>
              </tr>
            </thead>
            <tbody>
              {d.financialPerformance.map((row, i) => (
                <tr key={i}>
                  <td className={`${td} font-semibold`}>{overrideCell(row[0])}</td>
                  <td className={`${td} text-center`}>{overrideCell(row[1])}</td>
                  <td className={td}>
                    {row[0] === 'Financing Amount' ? formatBDT(profile?.loanAmount) : overrideCell(row[2])}
                  </td>
                  <td className={`${td} text-center`}>{overrideCell(row[3])}</td>
                  <td className={`${td} font-semibold`}>{overrideCell(row[4])}</td>
                  <td className={td}>{overrideCell(row[5])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        {/* LOAN AMOUNT DETERMINATION */}
        <div className="mb-6 border border-black">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td
                  rowSpan={lamRowCount + 1}
                  className={`${td} w-[36px] max-w-[40px] align-middle text-center text-[11px] font-bold leading-tight`}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  LOAN AMOUNT DETERMINATION
                </td>
                <td colSpan={4} className={`${td} bg-[#e8e8e8] text-center text-[12px] font-bold`}>
                  {overrideCell(lam.engineHeader)}
                </td>
              </tr>
              {lam.rows.map((r, i) => (
                <tr key={i}>
                  <td className={td}>{overrideCell(r[0])}</td>
                  <td className={td}>{overrideCell(r[1])}</td>
                  <td className={td}>{overrideCell(r[2])}</td>
                  <td className={`${td} text-right`}>{overrideCell(r[3])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CREDIT SCORING & SBS */}
        <SectionBox title="CREDIT SCORING & SBS CODE">
          <table className="w-full border-collapse">
            <tbody>
              {d.creditScoringSbs.left.map((pair, i) => (
                <tr key={i}>
                  <td className={`${td} font-semibold`}>{overrideCell(pair[0])}</td>
                  <td className={td}>{overrideCell(pair[1])}</td>
                  <td className={`${td} font-semibold`}>
                    {overrideCell(d.creditScoringSbs.middle[i]?.[0] ?? '')}
                  </td>
                  <td className={td}>{overrideCell(d.creditScoringSbs.middle[i]?.[1] ?? '')}</td>
                  <td className={`${td} font-semibold`}>{overrideCell(d.creditScoringSbs.right[i]?.[0] ?? '')}</td>
                  <td className={td}>{overrideCell(d.creditScoringSbs.right[i]?.[1] ?? '')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        {/* INTERNAL CUSTOMER SEGMENTATION */}
        <SectionBox title="INTERNAL CUSTOMER SEGMENTATION">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={th}></th>
                <th className={th}></th>
                <th className={th}>Code</th>
                <th className={th}>Sub-segment Details</th>
              </tr>
            </thead>
            <tbody>
              {d.internalSegmentation.rows.map((r, i) => (
                <tr key={i}>
                  <td className={`${td} font-semibold`}>{overrideCell(r[0])}</td>
                  <td className={td}>{overrideCell(r[1])}</td>
                  <td className={td}>{overrideCell(r[2])}</td>
                  {i === 0 ? (
                    <td className={td} rowSpan={d.internalSegmentation.rows.length}>
                      {overrideCell(d.internalSegmentation.details)}
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        {/* ESRM */}
        <div className="mb-6 flex justify-center border border-black">
          <table className="w-full max-w-[720px] border-collapse">
            <thead>
              <tr>
                <th className={`${th} text-center`} colSpan={4}>
                  ESRM COMPLIANCE
                </th>
              </tr>
              <tr>
                {d.esrmCompliance.headers.map((h) => (
                  <th key={h} className={th}>
                    {overrideCell(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {d.esrmCompliance.row.map((c, j) => (
                  <td key={j} className={`${td} text-center`}>
                    {overrideCell(c)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* PROPOSAL VISITED BY */}
        <SectionBox title="PROPOSAL VISITED BY">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['Role', 'Name', 'PIN', 'Visit Date'].map((h) => (
                  <th key={h} className={th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.proposalVisitedBy.map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j} className={`${td} text-center`}>
                      {overrideCell(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        {/* CIB REPORT */}
        <SectionBox title="CIB REPORT STATUS">
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr>
                {d.cibReport.headers.map((h) => (
                  <th key={h} className={th}>
                    {overrideCell(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {d.cibReport.dataRow.map((c, j) => (
                  <td key={j} className={`${td} text-center`}>
                    {overrideCell(c)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className={td}>{overrideCell(d.cibReport.noteRow[0])}</td>
                <td className={td}>{overrideCell(d.cibReport.noteRow[1])}</td>
                <td className={td} colSpan={8}></td>
              </tr>
              <tr>
                <td className={td} colSpan={8}></td>
                <td className={`${td} font-semibold`}>{overrideCell(d.cibReport.totalLabel)}</td>
                <td className={`${td} text-center`}>{overrideCell(d.cibReport.totalValue)}</td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* GUARANTORS */}
        {d.guarantors.map((g, gi) => (
          <SectionBox key={gi} title="GUARANTOR(S) INFORMATION">
            <div className="border-b border-black bg-[#e8e8e8] py-2 text-center text-[12px] font-bold">
              {overrideCell(g.label)}
            </div>
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className={td}>
                    <span className="font-semibold">Guarantor&apos;s Code:</span> {overrideCell(g.rows[0].code)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Name:</span> {overrideCell(g.rows[0].name)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">CIF:</span> {overrideCell(g.rows[0].cif)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Date of Birth:</span> {overrideCell(g.rows[0].dob)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Age:</span> {overrideCell(g.rows[0].age)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Profession:</span> {overrideCell(g.rows[0].profession)}
                  </td>
                </tr>
                <tr>
                  <td className={td}>
                    <span className="font-semibold">Guarantor&apos;s Segment Code:</span>{' '}
                    {overrideCell(g.rows[1].segment)}
                  </td>
                  <td className={td} colSpan={2}>
                    <span className="font-semibold">Father&apos;s Name:</span> {overrideCell(g.rows[1].father)}
                  </td>
                  <td className={td} colSpan={2}>
                    <span className="font-semibold">Mother&apos;s Name:</span> {overrideCell(g.rows[1].mother)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Spouse Name:</span> {overrideCell(g.rows[1].spouse)}
                  </td>
                </tr>
                <tr>
                  <td className={td}>
                    <span className="font-semibold">PNW:</span> {overrideCell(g.rows[2].pnw)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Business Name:</span> {overrideCell(g.rows[2].businessName)}
                  </td>
                  <td className={td} colSpan={2}>
                    <span className="font-semibold">NID Number:</span> {overrideCell(g.rows[2].nid)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Smart NID No.:</span> {overrideCell(g.rows[2].smartNid)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">Contact No.:</span> {overrideCell(g.rows[2].contact)}
                  </td>
                </tr>
                <tr>
                  <td className={td} colSpan={3}>
                    <span className="font-semibold">Present Address:</span> {overrideCell(g.rows[3].present)}
                  </td>
                  <td className={td} colSpan={3}>
                    <span className="font-semibold">Permanent Address:</span> {overrideCell(g.rows[3].permanent)}
                  </td>
                </tr>
                <tr>
                  <td className={td}>
                    <span className="font-semibold">Residence Status:</span> {overrideCell(g.rows[4].residence)}
                  </td>
                  <td className={td} colSpan={2}>
                    <span className="font-semibold">Relationship with sponsor:</span>{' '}
                    {overrideCell(g.rows[4].relationship)}
                  </td>
                  <td className={td} colSpan={2}>
                    <span className="font-semibold">Loan Details (Bank, Amount):</span>{' '}
                    {overrideCell(g.rows[4].loanDetails)}
                  </td>
                  <td className={td}>
                    <span className="font-semibold">No of PG Provided in BBL:</span> {overrideCell(g.rows[4].pgBbl)}
                  </td>
                </tr>
              </tbody>
            </table>
          </SectionBox>
        ))}

        {/* SPECIAL COVENANTS */}
        <SectionBox title="SPECIAL COVENANTS & CONDITIONS">
          <div className="border-b border-black px-3 py-2 text-[12px] font-bold">
            {overrideCell(d.specialCovenants.inLetterTitle)}
          </div>
          <div className="space-y-3 px-3 py-3 text-[12px] leading-relaxed">
            {d.specialCovenants.inLetterParas.map((p, i) => (
              <p key={i}>{overrideCell(p)}</p>
            ))}
          </div>
        </SectionBox>

        <div className="mb-6 border border-black">
          <div className={secBar}>{overrideCell(d.specialCovenants.notInLetterTitle)}</div>
          <div className="px-3 py-3 text-[12px]">{overrideCell(d.specialCovenants.notInLetter)}</div>
        </div>

        {/* Cluster + approval */}
        <table className="mb-6 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={td}>
                <span className="font-semibold">Cluster Financing Information :</span>{' '}
                {overrideCell(d.clusterFinancing.cluster)}
              </td>
              <td className={td}>
                <span className="font-semibold">Code:</span> {overrideCell(d.clusterFinancing.code)}
              </td>
              <td className={td}>
                <span className="font-semibold">Business Location : Street Address</span>
                <br />
                {get('businessLocation')}
              </td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`} colSpan={1}>
                Loan Approved by
              </td>
              <td className={td} colSpan={2}>
                {overrideCell(d.loanApproved.approver)}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Approval Date:</span> {overrideCell(d.loanApproved.approvalDate)}
              </td>
              <td className={td} colSpan={2}>
                <span className="font-semibold">Approver&apos;s Comfort Category:</span>{' '}
                {overrideCell(d.loanApproved.comfortCategory)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* RECOMMENDED FACILITY */}
        <SectionBox title="RECOMMENDED FACILITY DETAILS - SUMMARY">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={th} colSpan={5}>
                  {overrideCell(d.recommendedFacility.product)}
                </th>
                <th className={th} colSpan={5}>
                  {overrideCell(d.recommendedFacility.compoundFreq)}
                </th>
                <th className={th} colSpan={4}>
                  {overrideCell(d.recommendedFacility.compoundVal)}
                </th>
              </tr>
              <tr>
                {d.recommendedFacility.columns.map((c) => (
                  <th key={c} className={th}>
                    {overrideCell(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {d.recommendedFacility.dataRow.map((c, j) => {
                  let cell = c
                  if (j === 1) cell = get('loanType')
                  else if (j === 2) cell = formatBDT(profile?.loanAmount)
                  else if (j === 3) cell = get('interest')
                  else if (j === 5) cell = formatBDT(profile?.emiComfort)
                  else if (j === 9) cell = get('tenor')
                  else if (j === 10) cell = get('purpose')
                  return (
                    <td key={j} className={`${td} text-center text-[11px]`}>
                      {overrideCell(cell)}
                    </td>
                  )
                })}
              </tr>
              <tr>
                <td className={`${td} font-semibold`} colSpan={2}>
                  Total Proposed Limit
                </td>
                <td className={td}>{formatBDT(profile?.loanAmount)}</td>
                <td className={`${td} font-semibold`} colSpan={5}>
                  Total Exposure with BBL After Proposed Financing
                </td>
                <td className={td} colSpan={2}>
                  {overrideCell(d.recommendedFacility.footer.totalExposure)}
                </td>
                <td className={`${td} font-semibold`} colSpan={3}>
                  Yearly Debt Burden For Proposed Financing of BBL
                </td>
                <td className={td}>{overrideCell(d.recommendedFacility.footer.yearlyDebt)}</td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* INSURANCE (before digital remarks) */}
        <SectionBox title="INSURANCE DETAILS">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={`${td} text-center font-semibold`}>Life Insurance</td>
                <td className={`${td} text-center font-semibold`}>Livestock Insurance</td>
                <td className={`${td} text-center font-semibold`}>Company</td>
                <td className={`${td} text-center font-semibold`}>Class</td>
                <td className={`${th} text-center`} colSpan={2}>
                  Fire Insurance
                </td>
              </tr>
              <tr>
                <td className={`${td} text-center`}>{overrideCell(d.insurance.life)}</td>
                <td className={`${td} text-center`}>{overrideCell(d.insurance.livestock)}</td>
                <td className={`${td} text-center`}>{overrideCell(d.insurance.company)}</td>
                <td className={`${td} text-center`}>{overrideCell(d.insurance.classVal)}</td>
                <td className={`${td} text-center font-semibold`}>1st Year</td>
                <td className={`${td} text-center font-semibold`}>2nd Year</td>
              </tr>
              <tr>
                <td className={td} colSpan={4}></td>
                <td className={`${td} text-center`}>{overrideCell(d.insurance.fire1)}</td>
                <td className={`${td} text-center`}>{overrideCell(d.insurance.fire2)}</td>
              </tr>
            </tbody>
          </table>
        </SectionBox>

        {/* Digital Approval */}
        <SectionBox title="Digital Approval and Remarks">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['Username', 'User Role', 'Remark Date', 'Remark', 'Decision'].map((h) => (
                  <th key={h} className={th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.digitalRemarks.map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j} className={`${td} ${j === 0 || j === 3 ? 'text-left' : 'text-center'}`}>
                      {overrideCell(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        {/* DEDUPE */}
        <SectionBox title="DEDUPE SEARCH RESULT">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={`${td} font-semibold`} colSpan={2}>
                  NID-TIN Dedupe Search Date: {overrideCell(d.dedupeSearch.searchDate)}
                </td>
                <td className={`${td} font-semibold`} colSpan={2}>
                  Report Generated By: {overrideCell(d.dedupeSearch.generatedBy)}
                </td>
              </tr>
              {d.dedupeSearch.rows.map((r, i) => (
                <tr key={i}>
                  <td className={`${td} font-semibold`} colSpan={2}>
                    {overrideCell(r[0])}
                  </td>
                  <td className={td} colSpan={2}>
                    {overrideCell(r[1])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>

        <div className="mb-4 border border-black px-3 py-2 text-[12px]">
          <span className="font-semibold">Return Reason :</span> {overrideCell(d.footer.returnReason)}
        </div>
        <div className="mb-8 border border-black px-3 py-2 text-[12px]">
          <span className="font-semibold">Query Reason :</span> {overrideCell(d.footer.queryReason)}
        </div>
        <p className="text-right text-[12px] text-black">{overrideCell(d.footer.page)}</p>
      </main>
    </div>
  )
}

export default ApplicationDetails
