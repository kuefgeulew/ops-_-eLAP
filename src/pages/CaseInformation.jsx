/**
 * Case information — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function CaseInformation() {
  const { get, formatBDT, profile } = useCaseData()
  const th = 'border border-black px-1 py-[3px] text-[10px] font-semibold text-center'
  const td = 'border border-black px-1 py-[3px] text-[10px] leading-tight'

  return (
    <div className="min-h-screen bg-white px-2 py-2 text-black">
      <div className="mx-auto w-full max-w-[1750px] font-['Arial']">
        <div className="flex justify-end">
          <button
            type="button"
            className="border border-[#555] px-2 py-[1px] text-[12px] leading-none text-[#111]"
          >
            Print
          </button>
        </div>

        <table className="mt-16 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[14px]`} colSpan={4}>
                CASE INFORMATION
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>CRM Center:</b>
                {get('crmCenter')}
                <br />
                <b>CRM Loan ID:</b> {get('crmLoanId')}
                <br />
                <b>Territory:</b>
                {get('territory')}
                <br />
                <b>Area:</b>
                {get('territory')}
                <br />
                <b>Unit :</b> {get('territory')}
                <br />
                <b>Relationship Length-Yrs :</b> - years
                <br />
                <b>Special File Category:</b> NA,
                <br />
                <b>RO ID:</b> {get('roId')}
                <br />
                <b>Risk Manager/MC ID:</b> {get('riskManager')}
              </td>
              <td className={td} colSpan={3}>
                <b>Proposal Name:</b> {get('businessName')}
                <br />
                <b>Business Location:</b> {get('businessLocation')}
                <br />
                <b>Business Since:</b> {get('businessSince')}
                <br />
                <b>Legal Status:</b> {get('legalStatus')}
                <br />
                <b>Proposal Type:</b>
                {get('proposalType')}
                <br />
                <b>Main Premise Ownership:</b> -
                <br />
                <b>Previous Appraisal Date &amp; ID:</b>{' '}
                {get('previousAppraisalDate') + ' & ' + get('previousAppraisalId')}
                <br />
                <b>BDM/TM/RH ID:</b> {get('riskManagerName')} ({get('riskManagerPins')})
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <thead>
            <tr>
              <th className={th} colSpan={7}>
                REQUESTED FACILITY DETAILS
              </th>
            </tr>
            <tr>
              <th className={th}>Loan Type</th>
              <th className={th}>Loan</th>
              <th className={th}>Tenor</th>
              <th className={th}>Interest</th>
              <th className={th}>EMI Comf</th>
              <th className={th}>Purpose</th>
              <th className={th}>Tenor Passed % (Repeat)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-center`}>{get('loanType')}</td>
              <td className={`${td} text-center`}>{formatBDT(profile?.loanAmount)}</td>
              <td className={`${td} text-center`}>{get('tenor')}</td>
              <td className={`${td} text-center`}>{get('interest')}</td>
              <td className={`${td} text-center`}>{formatBDT(profile?.emiComfort)}</td>
              <td className={`${td} text-center`}>{get('purpose')}</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`} colSpan={4}>
                Total Requested Loan Amount
              </td>
              <td className={td} colSpan={3}>
                {formatBDT(profile?.loanAmount)}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <thead>
            <tr>
              <th className={th} colSpan={8}>
                EXISTING FACILITIES DETAILS WITH ALL FINANCIAL INSTITUTIONS
              </th>
            </tr>
            <tr>
              <th className={th}>Loan In the Name of</th>
              <th className={th}>Institutions</th>
              <th className={th}>Nature of Facility</th>
              <th className={th}>Security</th>
              <th className={th}>Limit</th>
              <th className={th}>O/S</th>
              <th className={th}>Rate</th>
              <th className={th}>EMI Passed or Expiry</th>
              <th className={th}>After Financeg Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-center`}>{get('businessName')}</td>
              <td className={`${td} text-center`}>BRAC Bank Ltd.</td>
              <td className={`${td} text-center`}>Term Loan</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>৳ 1,300,000</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}>{get('interest')}%</td>
              <td className={`${td} text-center`}>0 Out of 60</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Proposed with</td>
              <td className={`${td} text-center`}>BRAC Bank Ltd.</td>
              <td className={`${td} text-center`}>Term Loan</td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}>৳ 1,00,000</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`} colSpan={4}>
                Total Funded Facilities
              </td>
              <td className={`${td} text-center`}>৳ 1,300,000</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}>৳ 1,00,000</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`} colSpan={4}>
                Total Non-Funded
              </td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`} colSpan={4}>
                Total Funded &amp; Non-Funded
              </td>
              <td className={`${td} text-center`}>৳ 1,300,000</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}>1000000</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={5}>
                BUSINESS&apos; INFORMATION
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={5}>
                <b>Nature of Business:</b> Agri Crop
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={5}>
                <b>Business Address (Actual):</b> SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14, {get('division')} City, {get('division')},
                {get('division')}, 3255, 502, 1
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <b>Majority Ownership Status:</b> male
              </td>
              <td className={td} colSpan={2}>
                <b>TIN No:</b> 49067576802
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <b>Business Type:</b> Agriculture
              </td>
              <td className={td} colSpan={2}>
                <b>Business Contact No.:</b> -
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <b>Business Product:</b> COSMETICS AND GIFT ITEMS
              </td>
              <td className={td} colSpan={2}>
                <b>Business Age:</b> -
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Sales Keeping:</b> -
              </td>
              <td className={td}>
                <b>Wholesale %:</b> 0
              </td>
              <td className={td}>
                <b>Retail %:</b> 0
              </td>
              <td className={td}>
                <b>Service %:</b> 0
              </td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td} colSpan={5}>
                <b>Declined/send back status:</b> -
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={3}>
                KEY PERSON/OWNER&apos;S INFORMATION
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Name:</b> {get('businessName')}
              </td>
              <td className={td}></td>
              <td className={td}>
                <b>Role in Business:</b> Proprietor
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Date of Birth:</b> 13-Jan-1987
              </td>
              <td className={td}>
                <b>Age:</b> 39
              </td>
              <td className={td}>
                <b>Gender:</b> M
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Marital Status:</b> MST01
              </td>
              <td className={td}>
                <b>NID No.:</b> 7518377532733
              </td>
              <td className={td}>
                <b>Contact No.:</b> 0173523102
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Education:</b> -
              </td>
              <td className={td}>
                <b>Share %:</b> 100%
              </td>
              <td className={td}>
                <b>Years in Current Premises:</b> -
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Succession Plan :</b> -
              </td>
              <td className={td}>
                <b>Residence Status:</b>Own Land
              </td>
              <td className={td}>
                <b>Other Earnings (Monthly BDT):</b> 0
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Personal Net Worth (PNW):</b> ৳ 878,078
              </td>
              <td className={td}>
                <b>Relevant Experience (Yrs):</b> -
              </td>
              <td className={td}>
                <b>Sources of Other Earnings:</b>-
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Family Net Worth:</b> -
              </td>
              <td className={td}>
                <b>PG to Existing BBL Loan :</b> No
              </td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={8}>
                PREMISE OWNERSHIP
              </td>
            </tr>
            <tr>
              <td className={th}>Showroom/Office</td>
              <td className={th}></td>
              <td className={th}>Godown</td>
              <td className={th}></td>
              <td className={th}>Factory</td>
              <td className={th}></td>
              <td className={th}>
                Existing Employes: 8
                <br />
                Male Employee: 7
                <br />
                Female Employees: 1
              </td>
            </tr>
            <tr>
              <td className={td}>Number</td>
              <td className={td}>-</td>
              <td className={td}>Number</td>
              <td className={td}>-</td>
              <td className={td}>Number</td>
              <td className={td}>-</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Ownership Status</td>
              <td className={td}>-</td>
              <td className={td}>Ownership Status</td>
              <td className={td}>-</td>
              <td className={td}>Ownership Status</td>
              <td className={td}>-</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={8}>
                FINANCIAL PERFORMANCE
              </td>
            </tr>
            <tr>
              <td className={th}>Year</td>
              <td className={th}>Previous Year</td>
              <td className={th}>Current Year</td>
              <td className={th}>Growth %</td>
              <td className={th} colSpan={2}>
                Profitability &amp; Key Ratios
              </td>
              <td className={th}></td>
            </tr>

            <tr><td className={td}>Sales/Revenue</td><td className={`${td} text-center`}>৳ 1,800,000</td><td className={`${td} text-center`}>৳ 1,252,366</td><td className={`${td} text-center`}>-30.42%</td><td className={td} colSpan={2}>Gross Margin (%)</td><td className={`${td} text-center`}>15%</td></tr>
            <tr><td className={td}>Net Profit after Tax</td><td className={`${td} text-center`}>৳ 252,000</td><td className={`${td} text-center`}>৳ -117,578</td><td className={`${td} text-center`}>-146.66%</td><td className={td} colSpan={2}>Operating Profit (%)</td><td className={`${td} text-center`}>15%</td></tr>
            <tr><td className={td}>Inventory</td><td className={`${td} text-center`}>-</td><td className={`${td} text-center`}>-</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Net Profit Margin (After Tax)</td><td className={`${td} text-center`}>-9.39%</td></tr>
            <tr><td className={td}>Receivables</td><td className={`${td} text-center`}>-</td><td className={`${td} text-center`}>-</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Return on Asset (ROA)</td><td className={`${td} text-center`}>0%</td></tr>
            <tr><td className={td}>Business Paybles</td><td className={`${td} text-center`}>-</td><td className={`${td} text-center`}>-</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Return on Equity (ROE)</td><td className={`${td} text-center`}>-362.65%</td></tr>
            <tr><td className={td}>Outstanding Amount of All Loan</td><td className={`${td} text-center`}>৳ 1,097,261</td><td className={`${td} text-center`}>৳ 1,097,261</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Total Asset Turnover</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Total Liabilites/Debt</td><td className={`${td} text-center`}>৳ 1,097,261</td><td className={`${td} text-center`}>৳ 1,097,261</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Inventory Turnover in days</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Business Networth</td><td className={`${td} text-center`}>৳ -1,07,261</td><td className={`${td} text-center`}>৳ 32,422</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Receivable Turnover in days</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Total Assets (Without Land &amp; Building)</td><td className={`${td} text-center`}>0</td><td className={`${td} text-center`}>0</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Payable Turnover in days</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Personal Networth</td><td className={`${td} text-center`}>৳ 1,499,093</td><td className={`${td} text-center`}>৳ 531,622</td><td className={`${td} text-center`}>-64.54%</td><td className={td} colSpan={2}>Cash Conversion Cycle in days</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Total Business Assets</td><td className={`${td} text-center`}>0</td><td className={`${td} text-center`}>0</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Current Ratio</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Loan Limits &amp; Existing facilities</td><td className={`${td} text-center`}>৳ 1,30,0000</td><td className={`${td} text-center`}>৳ 1,30,0000</td><td className={`${td} text-center`}>0%</td><td className={td} colSpan={2}>Debt to Total Assets</td><td className={`${td} text-center`}>0</td></tr>
            <tr><td className={td}>Financing Amount</td><td className={`${td} text-center`}>৳ 90,000</td><td className={`${td} text-center`}>৳ 1,00,000</td><td className={`${td} text-center`}>11.11%</td><td className={td} colSpan={2}>Funds Available for Debt Servicing</td><td className={`${td} text-center`}>৳ -117,578</td></tr>

            <tr>
              <td className={`${td} text-center font-semibold`} colSpan={2}>DER</td>
              <td className={`${td} text-center font-semibold`}>DBR</td>
              <td className={`${td} text-center font-semibold`}>DSCR</td>
              <td className={td} colSpan={2}>Financial Obligation (After Proposed Financing)</td>
              <td className={`${td} text-center`}>৳ 574,740</td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>Before Proposed Financing</td>
              <td className={`${td} text-center`}>1.21</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0</td>
              <td className={td}>Bank Transacton (% of Sales)</td>
              <td className={`${td} text-center`}>0%</td>
            </tr>
            <tr>
              <td className={td} colSpan={2}><b>After Proposed Financing</b></td>
              <td className={`${td} text-center`}>2.3</td>
              <td className={`${td} text-center`}>-4.89</td>
              <td className={`${td} text-center`}>-0.2</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>

            <tr>
              <td className={`${td} text-center font-semibold`} rowSpan={6}>
                LOAN AMOUNT
                <br />
                DETERMINATION
              </td>
              <td className={td} colSpan={4}>
                <b>Suggested Loan Limit as per IFC Rule Engine</b>
              </td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>DBR below</td>
              <td className={`${td} text-center`}>80 %</td>
              <td className={td}>(Repayment Capacity Calculation)</td>
              <td className={`${td} text-center`}>৳ -163,649</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>DER below</td>
              <td className={`${td} text-center`}>70 %</td>
              <td className={td}>(Debt Equity Ratio Calculation)</td>
              <td className={`${td} text-center`}>৳ 637,350</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>As per Working Capital Fund Requirement</td>
              <td className={`${td} text-center`}>- %</td>
              <td className={td}>of Net Required Working Capital/(AR &amp; Stock)</td>
              <td className={`${td} text-center`}>0</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>Fixed Assets Finance up to</td>
              <td className={`${td} text-center`}>- %</td>
              <td className={td}>of Quotation/Price</td>
              <td className={`${td} text-center`}>0</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>Adjustment amount of previous loan (fixed assets loan)</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}></td>
              <td className={td} colSpan={4}>Maximum Allowable Loan Amount (As per Lowest  Calculation-PPG Criterla)</td>
              <td className={`${td} text-center`}>0</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}></td>
              <td className={td} colSpan={4}>Only for Fixed Assets Purchase: Maximum Permissible Loan</td>
              <td className={`${td} text-center`}>0</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={7}>
                IFC SCORECARD &amp; RULE ENGINE
              </td>
            </tr>
            <tr>
              <td className={td}><b>Scorecard</b></td>
              <td className={td}></td>
              <td className={td}><b>Total Score</b></td>
              <td className={td}><b>Risk Category</b></td>
              <td className={td}><b>Decision</b></td>
              <td className={td} colSpan={2}><b>Suggested Amount</b></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={10}>
                CREDIT SCORING &amp; SBS CODE
              </td>
            </tr>
            <tr>
              <td className={th}>SME Code</td>
              <td className={th}>Economic Purpose Code 1, 2</td>
              <td className={th}>Product Code 1, 2</td>
              <td className={th}>Secu. Code-1</td>
              <td className={th}>Secu. Code-2</td>
              <td className={th}>Sector Code</td>
              <td className={th}>General Provisioning</td>
            </tr>
            <tr>
              <td className={td}>99 | NON SME Personal Transport Agriculture Loan</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>00901001</td>
              <td className={`${td} text-center`}>1</td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Sales Turnover (Trading Only):</b> ৳ 1,252,366
              </td>
              <td className={td} colSpan={2}>
                <b>Fixed Asset Exc. Land Building:</b> ৳ 0
              </td>
              <td className={td} colSpan={3}>
                <b>No. of Employee:</b> 8
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={3}>
                INTERNAL CUSTOMER SEGMENTATION
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>
                <b>SME - Male - NON SME Personal Transport Agriculture Loan - AGRICULTURE</b>
              </td>
              <td className={`${td} text-center`}><b>Code</b></td>
              <td className={`${td} text-center`}><b>9 - 18 - 26 - 921</b></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={4}>
                ESRM COMPLIANCE
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center`}><b>Environment category:</b> Green</td>
              <td className={`${td} text-center`}><b>ESDD Checklist Required?</b> No</td>
              <td className={`${td} text-center`}><b>If Yes, Risk Rating:</b> -</td>
              <td className={`${td} text-center`}><b>ECC Obtained?:</b> -</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={10}>
                CIB REPORT STATUS
              </td>
            </tr>
            <tr>
              <td className={th}>CIB Report Particulars</td>
              <td className={th}>Subject Code</td>
              <td className={th}>Report Date</td>
              <td className={th}>Status</td>
              <td className={th}>No. Living Facilities As Borrower</td>
              <td className={th}>Reporting Institutions No.</td>
              <td className={th}>Loan O/S as borrower</td>
              <td className={th}>Loan O/S as Guarantor</td>
              <td className={th}>Overdue status</td>
              <td className={th}>CIB Search Check</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Borrower</td>
              <td className={`${td} text-center`}>856</td>
              <td className={`${td} text-center`}>01-Jan-2026</td>
              <td className={`${td} text-center`}>NIL</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>No</td>
              <td className={`${td} text-center`}>1</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Note</td>
              <td className={`${td} text-center`}>-</td>
              <td className={td} colSpan={6}></td>
              <td className={td}><b>Total No. of CIB Search</b></td>
              <td className={`${td} text-center`}>1</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={8}>
                PERSONAL GUARANTOR(S)
              </td>
            </tr>
            <tr>
              <td className={th}>Name</td>
              <td className={th}>Relationship</td>
              <td className={th}>Age</td>
              <td className={th}>PNW</td>
              <td className={th}>NID Number</td>
              <td className={th}>Profession</td>
              <td className={th}>Loan Details</td>
              <td className={th}>No of PG</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>FOR HAD HOSSAIN</td>
              <td className={`${td} text-center`}>ADMINISTRATOR</td>
              <td className={`${td} text-center`}>30</td>
              <td className={`${td} text-center`}>৳ 3,818,290</td>
              <td className={`${td} text-center`}>1995751837700527</td>
              <td className={`${td} text-center`}>Self employed</td>
              <td className={`${td} text-center`}>-, -</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>MD SAHIDUL ISLAM</td>
              <td className={`${td} text-center`}>AUTHORISED SIGNATORY</td>
              <td className={`${td} text-center`}>37</td>
              <td className={`${td} text-center`}>৳ 4,194,101</td>
              <td className={`${td} text-center`}>19742693004024197</td>
              <td className={`${td} text-center`}>OTHER</td>
              <td className={`${td} text-center`}>-, -</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`}>FINANCING JUSTIFICATION AND WAY OUT PLAN</td>
            </tr>
            <tr>
              <td className="h-[78px] border border-black px-1 py-1 text-[10px]">-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={6}>
                SPECIAL COVENANTS &amp; CONDITIONS
              </td>
            </tr>
            <tr>
              <td className={`${th} text-[11px]`} colSpan={6}>
                credit condition/covenants to be mentiond in Sanction letter:
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={6}>
                Security deposit for <b>Faclity 1</b> BDT ৳ 10,000, in the form of Fixed Deposit (Prachuro, for 60
                days term from the date of opening which will be auto renewed with Interest &amp; PrincIpal at the
                prevalling interest rate) will be kept under lien as &quot;Cash Collateral&quot; against the loan untill full
                settlement which will be duly deposited by the customer before disbursement.
              </td>
            </tr>
            <tr>
              <td className={`${th} text-[11px]`} colSpan={6}>
                Credit condition/covenants NOT to be mentiond in Sanction letter:
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={6}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-12 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={10}>
                RECOMENDED FACILITY DETAILS - SUMMARY
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}><b>Product Name:</b></td>
              <td className={td} colSpan={4}><b>compound Frequency for Term Loan</b></td>
              <td className={td} colSpan={2}>Monthly</td>
            </tr>
            <tr>
              <td className={th}>LINE</td>
              <td className={th}>Facility Type</td>
              <td className={th}>Limit</td>
              <td className={th}>Rate</td>
              <td className={th}>Card Rate</td>
              <td className={th}>EMI/Interest</td>
              <td className={th}>EMI No.</td>
              <td className={th}>Grace Period</td>
              <td className={th}>Purpose</td>
              <td className={th}>Special File Category</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>1</td>
              <td className={td}>Term Loan</td>
              <td className={td}>৳ 1,00,000</td>
              <td className={td}>{get('interest')}%</td>
              <td className={td}>15</td>
              <td className={td}>47895</td>
              <td className={td}>{get('tenor')}</td>
              <td className={td}>0</td>
              <td className={td}>Business Expansion</td>
              <td className={td}>NA</td>
            </tr>
            <tr>
              <td className={`${td} font-semibold`} colSpan={2}>Total Proposed Limit</td>
              <td className={td}>৳ 1,00,000</td>
              <td className={`${td} font-semibold`} colSpan={6}>Yearly Debt Burden For Proposed Financing of BBL</td>
              <td className={td}>৳ 574,740</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <thead>
            <tr>
              <th className={th}>DEVIATION PARAMETER</th>
              <th className={th}>APPROVING USERS</th>
              <th className={th}>CONDITION</th>
              <th className={th}>JUSTIFICATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>Debt-Equity Ratio (DER)</td>
              <td className={td}>S M Alomgir Hossain</td>
              <td className={td}>If Sum of total liabilities and loan amount &gt; 70% of total equity then mark it as Deviation</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Loan Limit Increase</td>
              <td className={td}>S M Alomgir Hossain</td>
              <td className={td}>Loan can be provided up to 150% of previous financing</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Top Up Repeat Financing for Druti</td>
              <td className={td}>Mohammed Abul Aziz , S M Alomgir Hossain</td>
              <td className={td}>Tenor is 12 and emi passed is less than or equals 9 Tenor Is 15 and emi passed is less than or equals 12 Tenor is 18 and emi passed is less than or equals 15 Tenor is 24 and emi passed is less than or equals 18 for a repeat loan then deviation</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Debt-Equity Ratio (DER)</td>
              <td className={td}>Hussain Md. Yasin</td>
              <td className={td}>If Sum of total liabilities and loan amount &gt; 70% of total equity then mark it as Deviation</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={td}><b>Approval Date:</b> 23-Jan-2026</td>
              <td className={td}><b>Approver&apos;s Comfort Category:</b> -</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <thead>
            <tr>
              <th className={`${th} text-[12px]`} colSpan={5}>
                Digital Approval and Remarks
              </th>
            </tr>
            <tr>
              <th className={th}>Username</th>
              <th className={th}>User Role</th>
              <th className={th}>Remark Date</th>
              <th className={th}>Remark</th>
              <th className={th}>Decision</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className={`${td} text-center`}>{get('roName')} [ {get('roPin')} ]</td><td className={`${td} text-center`}>Relationship Officer (RO)</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>-</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>BDM</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>TM</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>Regional Head (RH)</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>Md. Ashraful Abedin [ 27424 ]</td><td className={`${td} text-center`}>Risk Manager</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Received</td></tr>
            <tr><td className={`${td} text-center`}>Md. Ashraful Abedin [ 27424 ]</td><td className={`${td} text-center`}>Risk Manager</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>BDM</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Loan Amount Confirmed</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>TM</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>MC</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>ok</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>{get('riskManagerName')} [ {get('riskManagerPins')} ]</td><td className={`${td} text-center`}>Regional Head (RH)</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>Hussain Md. Yasin [ 29818 ]</td><td className={`${td} text-center`}>Regional Credit Head (RCH)</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>S M Alomgir Hossain [ 10085 ]</td><td className={`${td} text-center`}>HO SB</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>Mohammed Abul Aziz [ 25414 ]</td><td className={`${td} text-center`}>HO SC</td><td className={`${td} text-center`}>23-Jan-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
            <tr><td className={`${td} text-center`}>{get('roName')} [ {get('roPin')} ]</td><td className={`${td} text-center`}>Relationship Officer (RO)</td><td className={`${td} text-center`}>13-Feb-2026</td><td className={`${td} text-center`}>okay</td><td className={`${td} text-center`}>Recommend</td></tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-[12px]`} colSpan={3}>
                DEDUPE SEARCH RESULT
              </td>
            </tr>
            <tr>
              <td className={td}><b>NID-TIN Dedupe Search Date:</b> 23-Jan-2026</td>
              <td className={td}><b>Report Generated By:</b> Md. Moynul Islam</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}><b>Borrow&apos;s Dedupe Information</b></td>
              <td className={td}>-</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}><b>Guarantor&apos;s Dedupe Information</b></td>
              <td className={td}>-</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}><b>Sanction List Search Result</b></td>
              <td className={td}>-</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}><b>Justification for Dedupe and/or Sanction Search (If Required)</b></td>
              <td className={td}>-</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CaseInformation
