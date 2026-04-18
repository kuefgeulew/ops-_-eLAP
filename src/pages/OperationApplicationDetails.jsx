/**
 * Operation view comparing eLAP vs CBS fields; laid out for printing.
 */
import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { operationApplicationMock as defaultMock } from '../data/operationApplicationMock'
import useCaseData from '../hooks/useCaseData'

const td = 'border border-black px-2 py-1.5 text-[12px] align-top'
const thGrey = 'border border-black bg-[#d3d3d3] px-2 py-2 text-center text-[12px] font-bold text-black'
const barBlack = 'bg-black py-2 text-center text-[13px] font-bold text-white'
const barGrey = 'bg-[#d3d3d3] py-2 text-center text-[12px] font-bold text-black'

function Val({ v, highlight }) {
  if (v === '⚠') {
    return <span className="text-amber-500">⚠</span>
  }
  return <span className={highlight ? 'bg-[#ffeb3b]' : ''}>{v ?? ''}</span>
}

function CompareBlock({ title, rows, tableClassName = '', oc }) {
  const overrideCell = oc ?? ((v) => v)
  return (
    <div className="mb-4">
      {title ? <div className={barBlack}>{title}</div> : null}
      <table className={`w-full border-collapse border border-black ${tableClassName}`}>
        <thead>
          <tr>
            <th className={thGrey}>Particulars</th>
            <th className={thGrey}>eLAP</th>
            <th className={thGrey}>CBS</th>
            <th className={thGrey}>Particulars</th>
            <th className={thGrey}>eLAP</th>
            <th className={thGrey}>CBS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className={`${td} font-semibold`}>{overrideCell(row.left.p)}</td>
              <td className={`${td} whitespace-pre-line`}>
                <Val v={overrideCell(row.left.elap)} />
              </td>
              <td className={`${td} whitespace-pre-line`}>
                <Val v={overrideCell(row.left.cbs)} highlight={row.left.cbsHighlight} />
              </td>
              <td className={`${td} font-semibold`}>{overrideCell(row.right.p)}</td>
              <td className={`${td} whitespace-pre-line`}>
                <Val v={overrideCell(row.right.elap)} />
              </td>
              <td className={`${td} whitespace-pre-line`}>
                <Val v={overrideCell(row.right.cbs)} highlight={row.right.cbsHighlight} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function OperationApplicationDetails() {
  const { trackingId } = useParams()
  const { get, formatBDT, profile } = useCaseData()
  const data = useMemo(() => {
    return { ...defaultMock, trackingId: trackingId || defaultMock.trackingId }
  }, [trackingId])

  const d = data

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

  const generalDetailValue = (label, value) => {
    if (label === 'Proposal Name') return get('businessName')
    if (label === 'Territory') return get('territory')
    if (typeof label === 'string' && label.includes('Business Location')) return get('businessLocation')
    return value
  }

  const bn = get('businessName')
  const replaceNamesInString = (v) =>
    typeof v === 'string'
      ? v.replace(
          new RegExp(String(get('businessName')).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          bn,
        )
      : v
  const borrowerCompareRows = d.borrowerCompare.map((row) => {
    if (row.left?.p === 'Business Name') {
      return {
        ...row,
        left: { ...row.left, elap: bn, cbs: bn },
      }
    }
    return {
      ...row,
      left: {
        ...row.left,
        elap: replaceNamesInString(row.left.elap),
        cbs: replaceNamesInString(row.left.cbs),
      },
      right: {
        ...row.right,
        elap: replaceNamesInString(row.right.elap),
        cbs: replaceNamesInString(row.right.cbs),
      },
    }
  })

  return (
    <div className="flex min-h-[100dvh] w-full max-w-none flex-col bg-white font-sans text-black">
      <header className="grid w-full shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-[#e0e0e0] px-3 py-3 sm:px-4">
        <Link to="/" className="justify-self-start text-[13px] text-[#0077c8] hover:underline">
          ← Back to listing
        </Link>
        <h1 className="text-center text-[22px] font-bold text-[#0066cc]">
          Operation Application Details
        </h1>
        <div className="justify-self-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="border border-[#ccc] bg-white px-4 py-1.5 text-[13px]"
          >
            Print
          </button>
        </div>
      </header>

      <main className="w-full max-w-none flex-1 overflow-x-auto px-2 pb-16 pt-3 sm:px-3">
        {/* Top notes */}
        <table className="mb-0 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={td} colSpan={2}>
                <span className="font-semibold">Return Reason:</span> {overrideCell(d.returnReason)}
              </td>
              <td className={td}>
                <span className="font-semibold">Special Query:</span> {overrideCell(d.specialQuery || '')}
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <span className="font-semibold">Document Comply Note:</span> {overrideCell(d.documentComplyNote)}
              </td>
            </tr>
            <tr>
              <td className={`${barBlack} border border-black`} colSpan={3}>
                CIF IDs
              </td>
            </tr>
            <tr>
              <th className={thGrey}>Guarantors&apos; CIF</th>
              <th className={thGrey}>Owner/s CIF</th>
              <th className={thGrey}>Borrower CIF</th>
            </tr>
            <tr>
              <td className={td}>{overrideCell(d.cifIds.guarantors)}</td>
              <td className={td}>{overrideCell(d.cifIds.owners)}</td>
              <td className={td}>{get('crmLoanId')}</td>
            </tr>
          </tbody>
        </table>

        <h2 className="my-4 text-center text-[16px] font-bold text-[#800080]">CIF DETAILS</h2>

        <div className={barGrey}>DEDUPE</div>
        <table className="mb-6 w-full border-collapse border border-t-0 border-black">
          <tbody>
            <tr>
              <td className={`${td} w-1/3 font-semibold`}>Borrower Information</td>
              <td className={td}>-</td>
            </tr>
          </tbody>
        </table>

        <CompareBlock title="Borrower Information" rows={borrowerCompareRows} oc={overrideCell} />

        <h2 className="my-4 text-center text-[16px] font-bold text-[#800080]">GENERAL DETAILS</h2>
        <table className="mb-6 w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={thGrey}>Cluster Financing Information</th>
              <th className={thGrey}>Code</th>
              <th className={thGrey}>Business Location: Street Address</th>
            </tr>
          </thead>
          <tbody>
            {d.generalDetails.map((r, i) => (
              <tr key={i}>
                <td className={td}>{overrideCell(generalDetailValue(r[0], r[1]))}</td>
                <td className={td}>{overrideCell(generalDetailValue(r[2], r[3]))}</td>
                <td className={td}>{overrideCell(generalDetailValue(r[4], r[5]))}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={barGrey}>SBS CODE</div>
        <CompareBlock title="" rows={d.sbsCompare} tableClassName="border-t-0" oc={overrideCell} />

        <div className={barBlack}>Owner Information</div>
        <div className={barGrey}>Owner 1</div>
        <CompareBlock title="" rows={d.owner1Compare} tableClassName="border-t-0" oc={overrideCell} />

        <div className={barGrey}>DEDUPE</div>
        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${td} font-semibold`}>Guarantor Information</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <div className={barBlack}>Guarantor Information</div>
        <div className={barGrey}>GUARANTOR 1</div>
        <CompareBlock title="" rows={d.guarantor1Compare} tableClassName="border-t-0" oc={overrideCell} />

        <h2 className="my-6 text-center text-[18px] font-bold text-[#800080]">LOAN DETAILS</h2>

        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${td} font-semibold`}>Branch SOL</td>
              <td className={td}>{overrideCell(d.loanDetails.branchSol)}</td>
            </tr>
          </tbody>
        </table>

        <div className="grid grid-cols-2 bg-black text-white">
          <div className="border border-black py-2 pl-2 text-[12px] font-bold">FACILITY 1</div>
          <div className="border border-black py-2 pr-2 text-right text-[12px] font-bold">
            SCHEME CODE (-)
          </div>
        </div>
        <table className="mb-4 w-full border-collapse border border-t-0 border-black">
          <tbody>
            <tr>
              <td className={`${td} font-semibold`}>Facility Type</td>
              <td className={td}>{get('loanType')}</td>
              <td className={`${td} font-semibold`}>Tenor</td>
              <td className={td}>{get('tenor')}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>Interest Rate</td>
              <td className={td}>{get('interest')}</td>
              <td className={`${td} font-semibold`}>Facility Limit</td>
              <td className={td}>{formatBDT(profile?.loanAmount)}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>Mode</td>
              <td className={td}>{overrideCell(d.loanDetails.facility.mode)}</td>
              <td className={`${td} font-semibold`}>Purpose of Advance</td>
              <td className={td}>{get('purpose')}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>Formal Takeover</td>
              <td className={td}>{overrideCell(d.loanDetails.facility.formalTakeover)}</td>
              <td className={`${td} font-semibold`}>Special File Category</td>
              <td className={td}>{overrideCell(d.loanDetails.facility.specialFile)}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>CBS Installment Amount</td>
              <td className={td}>{overrideCell(d.loanDetails.facility.cbsInstallment)}</td>
              <td className={`${td} font-semibold`}>eLAP Installment Amount</td>
              <td className={td}>{overrideCell(d.loanDetails.facility.elapInstallment)}</td>
            </tr>
          </tbody>
        </table>

        <div className={barGrey}>FDR 1</div>
        <table className="mb-4 w-full border-collapse border border-t-0 border-black">
          <tbody>
            <tr>
              <td className={`${td} font-semibold`}>FDR Type</td>
              <td className={td}>{overrideCell(d.loanDetails.fdr.fdrType)}</td>
              <td className={`${td} font-semibold`}>FDR Amount</td>
              <td className={td}>{overrideCell(d.loanDetails.fdr.fdrAmount)}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>FDR Account No.</td>
              <td className={td}>{overrideCell(d.loanDetails.fdr.fdrAccountNo)}</td>
              <td className={`${td} font-semibold`}>FDR Lien Amount</td>
              <td className={td}>{overrideCell(d.loanDetails.fdr.fdrLien)}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>FDR Amount Available</td>
              <td className={td}>{overrideCell(d.loanDetails.fdr.fdrAvailable)}</td>
              <td className={`${td} font-semibold`}>Security Deposit Amount</td>
              <td className={td}>{overrideCell(d.loanDetails.fdr.securityDeposit)}</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-[#00ff00] py-2 text-center text-[13px] font-bold text-black">
          LOAN AMOUNT SUMMARY (PROPOSED LIMIT vs APPROVED LIMIT)
        </div>
        <table className="mb-4 w-full border-collapse border border-t-0 border-black">
          <tbody>
            <tr className="bg-[#e0ffff]">
              <td className={`${td} font-semibold`}>Total Proposed Limit:</td>
              <td className={td}>{formatBDT(profile?.loanAmount)}</td>
              <td className={`${td} font-semibold`}>Total Approved Limit/s:</td>
              <td className={td}>{formatBDT(profile?.loanAmount)}</td>
            </tr>
            <tr className="bg-[#e0ffff]">
              <td className={`${td} bg-[#a52a2a] font-semibold text-white`}>
                Total Proposed Limit Amount in Words:
              </td>
              <td className={td} colSpan={3}>
                {overrideCell(d.loanDetails.summary.inWords)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className={barGrey}>APPROVAL INFORMATION</div>
        <table className="mb-8 w-full border-collapse border border-t-0 border-black">
          <tbody>
            {d.loanDetails.approvalInfo.map((r, i) => (
              <tr key={i}>
                <td className={`${td} font-semibold`}>{overrideCell(r[0])}</td>
                <td className={td}>{overrideCell(r[1])}</td>
                <td className={`${td} font-semibold`}>{overrideCell(r[2])}</td>
                <td className={td}>{overrideCell(r[3])}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mb-4 text-center text-[18px] font-bold text-[#800080]">DISBURSEMENT DETAILS</h2>

        <div className={barGrey}>APPROVAL INFORMATION</div>
        <table className="mb-4 w-full border-collapse border border-t-0 border-black">
          <tbody>
            {d.disbursement.approvalRows.map((r, i) => {
              const v3 = r[2] === 'Cost Center Code' ? `${get('territory')} (99029209)` : r[3]
              return (
                <tr key={i}>
                  <td className={`${td} font-semibold`}>{overrideCell(r[0])}</td>
                  <td className={td}>{overrideCell(r[1])}</td>
                  <td className={`${td} font-semibold`}>{overrideCell(r[2])}</td>
                  <td className={td}>{overrideCell(v3)}</td>
                </tr>
              )
            })}
            <tr>
              <td className={`${td} whitespace-pre-line bg-[#fff9c4]`} colSpan={2}>
                {overrideCell(d.disbursement.ownersBlock.owners)}
              </td>
              <td className={`${td} bg-[#fff9c4]`}>{overrideCell(d.disbursement.ownersBlock.loanAppDate)}</td>
              <td className={`${td} whitespace-pre-line bg-[#f5f5f5]`}>
                {overrideCell(d.disbursement.ownersBlock.creditApprovalPin)}
              </td>
            </tr>
            <tr>
              <td className={`${td} bg-[#fff9c4]`}>{overrideCell(d.disbursement.psoRow[0])}</td>
              <td className={`${td} bg-[#fff9c4]`}>{overrideCell(d.disbursement.psoRow[1])}</td>
              <td className={`${td} bg-[#f5f5f5]`}>{overrideCell(d.disbursement.psoRow[2])}</td>
              <td className={`${td} bg-[#f5f5f5]`}>{overrideCell(d.disbursement.psoRow[3])}</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`}>Special Covenants Code</td>
              <td className={td} colSpan={3}>
                {overrideCell(d.disbursement.specialCovenantsCode)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className={barGrey}>SPECIAL COVENANTS & CONDITIONS</div>
        <table className="mb-4 w-full border-collapse border border-t-0 border-black">
          <tbody>
            <tr>
              <td className={`${td} font-semibold`}>
                Credit conditions/covenants to be mentioned in the Sanction letter:
              </td>
              <td className={`${td} font-semibold`}>
                Credit conditions/covenants not to be mentioned in the Sanction letter:
              </td>
            </tr>
            <tr>
              <td className={td}>{overrideCell(d.disbursement.covenantsInLetter)}</td>
              <td className={td}>{overrideCell(d.disbursement.covenantsNotInLetter)}</td>
            </tr>
          </tbody>
        </table>

        <div className={barGrey}>FEES AND CHARGES</div>
        <table className="mb-8 w-full border-collapse border border-t-0 border-black">
          <thead>
            <tr>
              <th className={thGrey}>Charge Name</th>
              <th className={thGrey}>System Derived Value</th>
            </tr>
          </thead>
          <tbody>
            {d.disbursement.fees.map(([name, val], i) => (
              <tr key={i}>
                <td className={td}>{overrideCell(name)}</td>
                <td className={td}>{overrideCell(val)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="mb-6 w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={thGrey} colSpan={10}>
                CIB REPORT STATUS
              </th>
            </tr>
            <tr>
              {[
                'CIB Report Particulars',
                'Subject Code',
                'Report Date',
                'Status',
                'No. Living Facilities As Borrower',
                'Reporting Institutions No.',
                'Loan O/S as Borrower',
                'Loan O/S as Guarantor',
                'Overdue Status',
                'CIB Search Check',
              ].map((h) => (
                <th key={h} className={`${thGrey} text-[10px]`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {d.cibReport.row.map((c, i) => (
                <td key={i} className={`${td} text-center`}>
                  {overrideCell(c)}
                </td>
              ))}
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                Note: {overrideCell(d.cibReport.note)}
              </td>
              <td className={`${td} text-center font-semibold`} colSpan={6}>
                Total No. of CIB Search
              </td>
              <td className={`${td} text-center`} colSpan={2}>
                {overrideCell(d.cibReport.totalSearches)}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-6 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${td} font-semibold`}>Life Insurance</td>
              <td className={td}>{overrideCell(d.insuranceTop.life)}</td>
              <td className={`${td} font-semibold`}>Livestock Insurance</td>
              <td className={td}>{overrideCell(d.insuranceTop.livestock)}</td>
              <td className={`${td} font-semibold`}>Company</td>
              <td className={td}>{overrideCell(d.insuranceTop.company)}</td>
              <td className={`${td} font-semibold`}>Class</td>
              <td className={td}>{overrideCell(d.insuranceTop.classVal)}</td>
              <td className={`${td} bg-[#d3d3d3] text-center font-bold`} colSpan={2}>
                Fire Insurance
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={8}></td>
              <td className={`${td} font-semibold`}>1st Year</td>
              <td className={`${td} font-semibold`}>2nd Year</td>
            </tr>
            <tr>
              <td className={td} colSpan={8}></td>
              <td className={td}>{overrideCell(d.insuranceTop.fire1)}</td>
              <td className={td}>{overrideCell(d.insuranceTop.fire2)}</td>
            </tr>
          </tbody>
        </table>

        <h2 className="mb-4 text-center text-[18px] font-bold text-[#800080]">ADDITIONAL DETAILS</h2>

        <div className={barGrey}>Other Information</div>
        <table className="mb-4 w-full border-collapse border border-t-0 border-black">
          <tbody>
            {d.additional.otherInfo.map((row, i) => {
              const pink = row[6]
              const c1 = row[0] === 'Proposal Name' ? get('businessName') : row[1]
              return (
                <tr key={i}>
                  <td className={`${td} font-semibold ${pink ? 'bg-[#ffc0cb]' : ''}`}>{overrideCell(row[0])}</td>
                  <td className={`${td} ${pink ? 'bg-[#ffc0cb]' : ''}`}>{overrideCell(c1)}</td>
                  <td className={`${td} font-semibold ${pink ? 'bg-[#ffc0cb]' : ''}`}>{overrideCell(row[2])}</td>
                  <td className={`${td} ${pink ? 'bg-[#ffc0cb]' : ''}`}>{overrideCell(row[3])}</td>
                  <td className={`${td} font-semibold ${pink ? 'bg-[#ffc0cb]' : ''}`}>{overrideCell(row[4])}</td>
                  <td className={`${td} ${pink ? 'bg-[#ffc0cb]' : ''}`}>{overrideCell(row[5])}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <thead>
            <tr>
              {['ROLE', 'USER NAME', 'PIN', 'CONTACT NO'].map((h) => (
                <th key={h} className={thGrey}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {d.additional.roles.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j} className={`${td} text-center`}>
                    {overrideCell(c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={barGrey}>Digital Approval and Remarks</div>
        <table className="mb-8 w-full border-collapse border border-t-0 border-black">
          <thead>
            <tr>
              {['Username', 'User Role', 'Remark Date', 'Remark', 'Decision'].map((h) => (
                <th key={h} className={thGrey}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {d.additional.digitalRemarks.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j} className={`${td} ${j === 0 || j === 3 ? 'text-left' : 'text-center'}`}>
                    {overrideCell(c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-center text-[16px] font-bold text-[#800080]">LOAN DETAILS</p>
      </main>
    </div>
  )
}

export default OperationApplicationDetails
