/**
 * Loan Amount Approval — printable layout with sample Anonno data.
 */
import useCaseData from '../hooks/useCaseData'

function LoanAmountApproval() {
  const { get, formatBDT, profile } = useCaseData()
  const th = 'border border-black px-2 py-[3px] text-[11px] font-semibold leading-tight'
  const td = 'border border-black px-2 py-[4px] text-[11px] leading-tight'

  return (
    <div className="min-h-screen bg-white px-2 py-2 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="border border-black px-2 py-[1px] text-[11px] leading-none"
          >
            Print
          </button>
        </div>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] py-[4px] text-center text-[14px] font-bold leading-none">
                LOAN AMOUNT APPROVAL
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} w-1/2 align-top`}>
                <div className="mb-1">
                  <b>CRM Center:</b> {get('crmCenter')}
                </div>
                <div className="mb-1">
                  <b>CRM Loan ID:</b> {get('crmLoanId')}
                </div>
                <div className="mb-1">
                  <b>Territory / Area / Unit:</b> {get('territory')}
                </div>
                <div className="mb-1">
                  <b>Relationship Length-Yrs:</b> 20 years
                </div>
                <div className="mb-1">
                  <b>Special File Category:</b> -
                </div>
                <div className="mb-1">
                  <b>RO ID:</b> {get('roId')}
                </div>
                <div>
                  <b>Risk Manager/MC ID:</b> {get('riskManagerName')} ({get('riskManagerPins')})
                </div>
              </td>
              <td className={`${th} w-1/2 align-top`}>
                <div className="mb-1">
                  <b>Proposal Name:</b> {get('businessName')}
                </div>
                <div className="mb-1">
                  <b>Business Location:</b> {get('city')}
                </div>
                <div className="mb-1">
                  <b>Business Since:</b> 07-Jan-2017
                </div>
                <div className="mb-1">
                  <b>Legal Status:</b> {get('legalStatus')}
                </div>
                <div className="mb-1">
                  <b>Proposal Type:</b> Top-Up
                </div>
                <div className="mb-1">
                  <b>Main Premise Ownership:</b> Own Land
                </div>
                <div className="mb-1">
                  <b>Previous Appraisal Date &amp; ID:</b> - &amp; 25120002605
                </div>
                <div>
                  <b>BDM/TM/RH ID:</b> {get('riskManagerName')} ({get('riskManagerPins')})
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                REQUESTED FACILITY DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Loan Type</th>
              <th className={th}>Loan Amount</th>
              <th className={th}>Tenor</th>
              <th className={th}>Interest</th>
              <th className={th}>EMI Comfort</th>
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
              <td className={th} colSpan={6}>
                Total Requested Loan Amount
              </td>
              <td className={`${td} text-center font-semibold`}>{formatBDT(profile?.loanAmount)}</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                EXISTING FACILITIES DETAILS WITH ALL FINANCIAL INSTITUTIONS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Institutions</th>
              <th className={th}>Nature of Facility</th>
              <th className={th}>Limit</th>
              <th className={th}>O/S</th>
              <th className={th}>Rate</th>
              <th className={th}>EMI Passed or Expiry</th>
              <th className={th}>Closing Condition</th>
              <th className={th}>After Financing Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
            </tr>
            <tr>
              <td className={th}>Total Funded Facilities</td>
              <td className={td}></td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-center`}>-</td>
            </tr>
            <tr>
              <td className={th}>Total Non-Funded</td>
              <td className={td}></td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-center`}>-</td>
            </tr>
            <tr>
              <td className={th}>Total Funded &amp; Non-Funded</td>
              <td className={td}></td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-center`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                BUSINESS&apos;S INFORMATION
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={td} colSpan={4}>
                <b>Nature of Business:</b> Agri Crop
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                <b>Business Address (Actual):</b> SHOP-001B2, LEVEL-04, BLOCK-C, MANSIB L1, JAMUNA FUTURE
                PARK VATARA, MANSIB L2, MANSIB L3, {get('city')} (South), {get('city')}, {get('city').toUpperCase()}, 3369, 150, 1
              </td>
            </tr>
            <tr>
              <td className={`${td} w-1/4`}>
                <b>Majority Ownership Status:</b> Male
              </td>
              <td className={`${td} w-1/4`}>
                <b>Business Type:</b> Trading
              </td>
              <td className={`${td} w-1/4`}>
                <b>Business Product:</b> MOBILE SHOWROOM
              </td>
              <td className={`${td} w-1/4`}>
                <b>Sales Keeping:</b> Bank Statements
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Trade License No:</b> 08326033699
              </td>
              <td className={td}>
                <b>Trade License Issue Date:</b> 11-Sep-2021
              </td>
              <td className={td}>
                <b>TIN No:</b> 795381233699
              </td>
              <td className={td}>
                <b>Business Age:</b> 10
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Registration Issue Date:</b> 0
              </td>
              <td className={td}>
                <b>Declined/Send back status:</b> No
              </td>
              <td className={td}>
                <b>Wholesale%:</b> -
              </td>
              <td className={td}>
                <b>Retail%:</b> -
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Service%:</b> -
              </td>
              <td className={td}>
                <b>Business Contact No.:</b> -
              </td>
              <td className={td} colSpan={2}>
                <b>Registration No.:</b> -
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={6}>
                KEY PERSON/OWNER&apos;S INFORMATION
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Name:</b> SABINA SARMIN
              </td>
              <td className={td} colSpan={2}>
                <b>Role In Business:</b> Managing Director
              </td>
              <td className={td} colSpan={2}>
                <b>Date of Birth:</b> 25-May-1977
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Age:</b> 48
              </td>
              <td className={td} colSpan={2}>
                <b>Gender:</b> F
              </td>
              <td className={td} colSpan={2}>
                <b>Marital Status:</b> MST01
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>NID No.:</b> 2694813881192
              </td>
              <td className={td} colSpan={2}>
                <b>Contact No.:</b> 01730097942
              </td>
              <td className={td} colSpan={2}>
                <b>Education:</b> BSC
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Share %:</b> 100%
              </td>
              <td className={td} colSpan={2}>
                <b>Years in Current Premise:</b> 10
              </td>
              <td className={td} colSpan={2}>
                <b>Succession Plan:</b> -
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Residence Status:</b> Own Land
              </td>
              <td className={td} colSpan={2}>
                <b>Other Earnings (Monthly BDT):</b> -
              </td>
              <td className={td} colSpan={2}>
                <b>Personal Net Worth (PNW):</b> ৳ 59,700,000
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Relevant Exper.(Yrs):</b> 10
              </td>
              <td className={td} colSpan={2}>
                <b>Sources of Other Earnings:</b> -
              </td>
              <td className={td} colSpan={2}>
                <b>Family Net Worth:</b> -
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={6}>
                <b>PG to Existing BBL Loan:</b> No
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={6}>
                PREMISE OWNERSHIP
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Showroom/Office:</b> Number: 1 | Ownership Status: Title Owned
              </td>
              <td className={td} colSpan={2}>
                <b>Godown:</b> Number: 0 | Ownership Status: -
              </td>
              <td className={td} colSpan={2}>
                <b>Factory:</b> Number: 0 | Ownership Status: -
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={6}>
                <b>Existing Employees:</b> 10 (Male: 7, Female: 3)
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={8}>
                FINANCIAL PERFORMANCE
              </td>
            </tr>
            <tr>
              <td className={`${th} text-left`} colSpan={4}>
                Comparative
              </td>
              <td className={`${th} text-left`} colSpan={4}>
                Profitability &amp; Key Ratios
              </td>
            </tr>
            <tr>
              <td className={th}>Particulars</td>
              <td className={th}>Previous Year</td>
              <td className={th}>Current Year</td>
              <td className={th}>Growth %</td>
              <td className={`${td} text-left`} colSpan={2}>
                Gross Margin (%):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                -%
              </td>
            </tr>
            <tr>
              <td className={td}>Sales/Revenue</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-74.75%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Operating Profit (%):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                -9.5%
              </td>
            </tr>
            <tr>
              <td className={td}>Net Profit after Tax</td>
              <td className={`${td} text-center`}>৳ -240,000</td>
              <td className={`${td} text-center`}>৳ -240,000</td>
              <td className={`${td} text-center`}>-122.66%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Net Profit Margin (After Tax):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                -9.5%
              </td>
            </tr>
            <tr>
              <td className={td}>Inventory</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-100%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Return on Asset (ROA):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                -0.12%
              </td>
            </tr>
            <tr>
              <td className={td}>Receivables</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-100%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Return on Equity (ROE):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                600%
              </td>
            </tr>
            <tr>
              <td className={td}>Business Payables</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-100%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Total Asset Turnover:
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                0.01
              </td>
            </tr>
            <tr>
              <td className={td}>Outstanding Amount of All Loan</td>
              <td className={`${td} text-center`}>৳ 1</td>
              <td className={`${td} text-center`}>৳ 1</td>
              <td className={`${td} text-center`}>-100%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Inventory / Receivable / Payable Turnover in days:
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                0
              </td>
            </tr>
            <tr>
              <td className={td}>Total Liabilities/Debt</td>
              <td className={`${td} text-center`}>৳ 252,346</td>
              <td className={`${td} text-center`}>৳ 252,346</td>
              <td className={`${td} text-center`}>-99.96%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Cash Conversion Cycle in days:
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                0
              </td>
            </tr>
            <tr>
              <td className={td}>Business Networth</td>
              <td className={`${td} text-center`}>৳ -40,000</td>
              <td className={`${td} text-center`}>৳ -40,000</td>
              <td className={`${td} text-center`}>-100.02%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Current Ratio:
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                797.9
              </td>
            </tr>
            <tr>
              <td className={td}>Total Asset (Without Land &amp; Building)</td>
              <td className={`${td} text-center`}>৳ 201,346,553</td>
              <td className={`${td} text-center`}>৳ 201,346,553</td>
              <td className={`${td} text-center`}>-0.22%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Debt to Total Assets:
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                0
              </td>
            </tr>
            <tr>
              <td className={td}>Personal Networth</td>
              <td className={`${td} text-center`}>৳ 10,000,000</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-95.43%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Funds Available for Debt Servicing:
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                ৳ -780,000
              </td>
            </tr>
            <tr>
              <td className={td}>Total Business Assets</td>
              <td className={`${td} text-center`}>৳ 201,346,553</td>
              <td className={`${td} text-center`}>৳ 201,346,553</td>
              <td className={`${td} text-center`}>-0.31%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Financial Obligation (After Proposed Financing):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                ৳ 1,430,376
              </td>
            </tr>
            <tr>
              <td className={td}>Loan Limits of Existing facilities</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-100%</td>
              <td className={`${td} text-left`} colSpan={2}>
                Bank Transaction (% of Sales):
              </td>
              <td className={`${td} text-left`} colSpan={2}>
                -%
              </td>
            </tr>
            <tr>
              <td className={td}>Financing Amount</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>40%</td>
              <td className={td} colSpan={4}></td>
            </tr>
            <tr>
              <td className={`${th} text-left`} colSpan={4}>
                Before Proposed Financing: DER: -0.05 | DBR: 0 | DSCR: -4.22
              </td>
              <td className={`${th} text-left`} colSpan={4}>
                After Proposed Financing: DER: -87.55 | DBR: -1.83 | DSCR: -0.55
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} w-[22%] text-center align-middle`} rowSpan={7}>
                LOAN AMOUNT
                <br />
                DETERMINATION
              </td>
              <td className={th}>Suggested Loan Limit As per IFC Rule Engine</td>
              <td className={`${td} text-center`}></td>
            </tr>
            <tr>
              <td className={td}>DBR below 80% (Repayment Capacity Calculation)</td>
              <td className={`${td} text-right`}>0</td>
            </tr>
            <tr>
              <td className={td}>DER below 70% (Debt Equity Ratio Calculation)</td>
              <td className={`${td} text-right`}>৳ -28,001</td>
            </tr>
            <tr>
              <td className={td}>As per Working Capital Fund Requirement 75% of Net Required Working Capital (A/R &amp; Stock)</td>
              <td className={`${td} text-right`}>0</td>
            </tr>
            <tr>
              <td className={td}>Fixed Assets Finance up to - % of Quotation Price</td>
              <td className={`${td} text-right`}>0</td>
            </tr>
            <tr>
              <td className={td}>Adjustment amount of previous loan (fixed assets loan)</td>
              <td className={`${td} text-right`}>0</td>
            </tr>
            <tr>
              <td className={th}>Maximum Allowable Loan Amount (As per Lowest Calculation-PPG Criteria)</td>
              <td className={`${td} text-right`}>৳ -1,526,883</td>
            </tr>
            <tr>
              <td className={`${th} text-center`} colSpan={2}>
                Only for Fixed Assets Purchase: Maximum Permissible Loan
              </td>
              <td className={`${td} text-right`}>0</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={7}>
                IFC SCORECARD &amp; RULE ENGINE
              </td>
            </tr>
            <tr>
              <td className={th}>Scorecard</td>
              <td className={td}></td>
              <td className={th}>Total Score</td>
              <td className={td}></td>
              <td className={th}>Risk Category</td>
              <td className={th}>Decision</td>
              <td className={th}>Suggested Amount</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={7}>
                CREDIT SCORING &amp; SBS CODE
              </td>
            </tr>
            <tr>
              <td className={th}>SME Code</td>
              <td className={th}>Economic Purpose Code</td>
              <td className={th}>Product Code</td>
              <td className={th}>Security Code</td>
              <td className={th}>Sector Code</td>
              <td className={th}>General Provisioning</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>-</td>
              <td className={td}>Economic Purpose Code 1: 0000 [01]</td>
              <td className={td}>Product Code 1: 21099,</td>
              <td className={td}>Security Code 1: 74,</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>1</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}><b>Sales Turnover (Trading Only):</b> -</td>
              <td className={td} colSpan={2}><b>Fixed Asset Exc. Land Building:</b> 0</td>
              <td className={td} colSpan={2}><b>No. of Employee:</b> 10</td>
              <td className={td} colSpan={2}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={3}>
                INTERNAL CUSTOMER SEGMENTATION
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>SME - Male - - ACCESSORIES</td>
              <td className={`${td} text-center`}><b>Code</b></td>
              <td className={`${td} text-center`}>9 - 18 - 22 - 939</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={4}>
                ESRM COMPLIANCE
              </td>
            </tr>
            <tr>
              <td className={td}><b>Environment Category:</b> Green</td>
              <td className={td}><b>ESDD Checklist Required?:</b> No</td>
              <td className={td}><b>If Yes, Risk Rating:</b> -</td>
              <td className={td}><b>ECC Obtained?:</b> -</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={4}>
                PROPOSAL VISITED BY
              </td>
            </tr>
            <tr>
              <td className={th}>Role</td>
              <td className={th}>Name</td>
              <td className={th}>PIN</td>
              <td className={th}>Visit Date</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={10}>
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
              <td className={th}>Loan O/S as Borrower</td>
              <td className={th}>Loan O/S as Guarantor</td>
              <td className={th}>Overdue Status</td>
              <td className={th}>CIB Search Check</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
            </tr>
            <tr>
              <td className={td}><b>Note</b></td>
              <td className={td}>-</td>
              <td className={td} colSpan={4}></td>
              <td className={`${td} text-right`} colSpan={3}><b>Total No. of CIB Search</b></td>
              <td className={`${td} text-center`}>1</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={8}>
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
              <td className={td}>TAHMINA SG FG2 AKTER SGD3</td>
              <td className={td}>SPOUSE</td>
              <td className={`${td} text-center`}>29</td>
              <td className={td}>৳ 6,000,000</td>
              <td className={td}>19969312894000225</td>
              <td className={td}>Housewife</td>
              <td className={td}>-, -</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={td}>MST MUKTA</td>
              <td className={td}>CORPORATE GUARANTOR</td>
              <td className={`${td} text-center`}>43</td>
              <td className={td}>৳ 50,000,000</td>
              <td className={td}>19822694265742916</td>
              <td className={td}>Housewife</td>
              <td className={td}>-, -</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[6px] text-center text-[12px] font-semibold leading-none">
                FINANCING JUSTIFICATION AND WAY OUT PLAN
              </td>
            </tr>
            <tr>
              <td className={`${td} min-h-[200px] align-top py-3 pl-3 text-[11px] leading-relaxed`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[6px] text-center text-[12px] font-semibold leading-none">
                SPECIAL COVENANTS &amp; CONDITIONS
              </td>
            </tr>
            <tr>
              <td className="border border-b-0 border-black bg-[#e8e8e8] px-3 py-2 text-left text-[11px] font-bold">
                Credit condition/covenants to be mentioned in Sanction letter:
              </td>
            </tr>
            <tr>
              <td className={`${td} border-t-0 align-top py-2 pl-3 font-mono text-[11px] leading-6`}>
                {'-\n-\n-\n-\n-\n--\n--\n--\n--\n--\n--'}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-0">
                <div className="whitespace-pre-line py-2 pl-3 font-mono text-[11px] leading-6">
                  {'-\n-\n-\n-\n-'}
                </div>
                <div className="border-y border-black bg-[#e8e8e8] px-3 py-2 text-left text-[11px] font-bold">
                  Credit condition/covenants NOT to be mentioned in Sanction letter:
                </div>
                <div className="whitespace-pre-line py-2 pl-3 pb-4 font-mono text-[11px] leading-6">
                  {'-\n-\n-\n-\n-\n-\n-\n-\n-\n-\n---'}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={th}>Cluster Financing Information</td>
              <td className={th}>Code</td>
              <td className={th}>Business Location : Street Address</td>
            </tr>
            <tr>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>
                KA-244, JAMUNA FUTURE PARK SHOP- 4C, MANSIB, 001 B2, VATARA, KURIL, MANSIB L2, MANSIB
                L3, {get('city')} (South), {get('city')}, {get('city').toUpperCase()}, 3369, 150, 1
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={14}>
                RECOMMENDED FACILITY DETAILS - SUMMARY
              </td>
            </tr>
            <tr>
              <td className={th} colSpan={3}>
                Product Name: <span className="font-normal">Anonno</span>
              </td>
              <td className={th} colSpan={11}>
                Compound Frequency for Term Loan: <span className="font-normal">-</span>
              </td>
            </tr>
            <tr>
              <td className={th}>LINE</td>
              <td className={th}>Facility Type</td>
              <td className={th}>Limit</td>
              <td className={th}>Rate</td>
              <td className={th}>Card Rate</td>
              <td className={th}>EMI/Interest</td>
              <td className={th}>Installments</td>
              <td className={th}>Grace Period</td>
              <td className={th}>Tenor(Months)</td>
              <td className={th}>Purpose</td>
              <td className={th}>Special File Category</td>
              <td className={th}>Mode</td>
              <td className={th} colSpan={2}>Formal Takeover</td>
            </tr>
            <tr>
              <td className={td}>1</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>{get('tenor')}</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td} colSpan={2}>-</td>
            </tr>
            <tr>
              <td className={th} colSpan={2}>Total Proposed Limit</td>
              <td className={td}>-</td>
              <td className={th} colSpan={2}>Total Loan Limit with BBPL After Proposed Financing</td>
              <td className={td} colSpan={2}>350000</td>
              <td className={th} colSpan={5}>Yearly Debt Burden For Proposed Financing of BBL</td>
              <td className={td} colSpan={2}>৳ 1,430,376</td>
            </tr>
            <tr>
              <td className={td} colSpan={14}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>Loan Approved by</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-1 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>Approval Date: -</td>
              <td className={`${th} text-left`}>Approver's Comfort Category: -</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={5}>
                Digital Approval and Remarks
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Username</th>
              <th className={th}>User Role</th>
              <th className={th}>Remark Date</th>
              <th className={th}>Remark</th>
              <th className={th}>Decision</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-center`}>{get('roId')}</td>
              <td className={`${td} text-center`}>Relationship Officer (RO)</td>
              <td className={`${td} text-center`}>06-Jan-2026</td>
              <td className={`${td} text-center`}>okk</td>
              <td className={`${td} text-center`}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>BDM</td>
              <td className={`${td} text-center`}>05-Feb-2026</td>
              <td className={`${td} text-center`}>ok</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>TM</td>
              <td className={`${td} text-center`}>10-Feb-2026</td>
              <td className={`${td} text-center`}>OK</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>MC</td>
              <td className={`${td} text-center`}>10-Feb-2026</td>
              <td className={`${td} text-center`}>OK</td>
              <td className={`${td} text-center`}>Return to RO</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('roId')}</td>
              <td className={`${td} text-center`}>Relationship Officer (RO)</td>
              <td className={`${td} text-center`}>15-Feb-2026</td>
              <td className={`${td} text-center`}>OKA</td>
              <td className={`${td} text-center`}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>BDM</td>
              <td className={`${td} text-center`}>17-Feb-2026</td>
              <td className={`${td} text-center`}>OK</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>TM</td>
              <td className={`${td} text-center`}>17-Feb-2026</td>
              <td className={`${td} text-center`}>OK</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>MC</td>
              <td className={`${td} text-center`}>17-Feb-2026</td>
              <td className={`${td} text-center`}>OK</td>
              <td className={`${td} text-center`}>Return to RO</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={td}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#e8e8e8] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={2}>
                DEDUPE SEARCH RESULT
              </td>
            </tr>
            <tr>
              <td className={th}>NID-TIN Dedupe Search Date: -</td>
              <td className={th}>Report Generated By: -</td>
            </tr>
            <tr>
              <td className={th}>Borrower's Dedupe Information</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={th}>Guarantor's Dedupe Information</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={th}>Sanction List Search Result</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={th}>Justification for Dedupe and/or Sanction Search (If Required)</td>
              <td className={td}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoanAmountApproval
