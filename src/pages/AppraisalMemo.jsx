/**
 * Credit appraisal memo — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function AppraisalMemo() {
  const { get, formatBDT, profile } = useCaseData()
  const commonCell = 'border border-[#6e6e6e] px-2 py-[2px] align-top'
  const titleCell =
    'border border-[#6e6e6e] bg-[#f3f3f3] px-2 py-[2px] text-center font-semibold uppercase'

  return (
    <div className="min-h-screen bg-white px-3 py-2 text-[12px] text-[#2a2a2a]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 font-['Arial']">
        <table className="order-2 w-full border-collapse">
          <tbody>
            <tr>
              <td className={titleCell} colSpan={10}>
                Record of Bank Transaction
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>Name of Bank</td>
              <td className={commonCell}>Account Name</td>
              <td className={commonCell}>Account Type</td>
              <td className={commonCell}>Account Number</td>
              <td className={commonCell}>Balance</td>
              <td className={commonCell}>Total Months</td>
              <td className={commonCell}>Recycle Time for OD/CC/SOD</td>
              <td className={commonCell}>Debit Sum</td>
              <td className={commonCell}>Credit Sum</td>
              <td className={commonCell}>% of Revenue</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-%</td>
            </tr>
            <tr className="font-semibold">
              <td className={commonCell} colSpan={8}>
                Total
              </td>
              <td className={`${commonCell} text-center`}>-</td>
              <td className={`${commonCell} text-center`}>-%</td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Business&apos;s Information
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                <b>Nature of Business:</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={6}>
                <b>Business Address (Actual):</b> 31,CITY PLAZA,1ST FLOOR,FULBARIA SUPER
                MARKET-2,BLOCK-A,{get('city').toUpperCase()} - {get('city')} (South) {get('city')} 1207
              </td>
              <td className={commonCell} colSpan={4}>
                <b>TIN No:</b> 551416171156
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={6}>
                <b>Majority Ownership Status:</b> Male
              </td>
              <td className={commonCell} colSpan={4}>
                <b>TIN No:</b> 551416171156
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={6}>
                <b>Business Type:</b> Trading
              </td>
              <td className={commonCell} colSpan={4}>
                <b>Business Contact No.:</b> 01715055560
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={6}>
                <b>Business Product:</b> ELECTRONICS BUSINESS
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Business Age:</b> -
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Service %:</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                <b>Sales Keeping:</b> -
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Wholesale%:</b> -
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Retail %:</b> -
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Service %:</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                <b>Trade License No.:</b> 058454
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Trade License Issue Date:</b> 12-Apr-2007
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Registration No.:</b> -
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Registration Issue Date :</b> 0
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                <b>Declined/Send back status:</b> -
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Key Person/Owner&apos;s Information
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={6}>
                <b>Name:</b> {get('businessName')}
              </td>
              <td className={commonCell} colSpan={4}>
                <b>Role In Business:</b> Managing Director
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                <b>Present Address:</b> PREMA ENTERPRISE 86/A-GA, SIDDIK BAZAR - {get('city')}
                (South) {get('city')} 1207
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                <b>Permanent Address:</b> PREMA ENTERPRISE 86/A-GA, SIDDIK BAZAR - {get('city')}
                (North) {get('city')} 1204
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                <b>Date of Birth:</b> 02-Jan-1971
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Age:</b> 55
              </td>
              <td className={commonCell} colSpan={4}>
                <b>Gender:</b> M
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Father:</b> LATE ABDUL HAI
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Mother:</b> FOJUL NESA
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Spouse:</b> SUMONA AKTER
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Marital Status:</b> Married
              </td>
              <td className={commonCell} colSpan={3}>
                <b>NID No.:</b> 19712694069110692
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Contact No.:</b> 01715055560
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Education:</b> Graduate
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Share %:</b> 100%
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Dependent:</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Residence Status:</b> Own Land
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Relevant Exper.(Yrs):</b> -
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Years in Current Premise :</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Personal Net Worth (PNW):</b> ৳ 249,021,710
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Other Earnings (Monthly BDT):</b> -
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Source of Other Earnings :</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Family Net Worth:</b> -
              </td>
              <td className={commonCell} colSpan={6}>
                <b>No of PG to Existing BBL Loan :</b> -
              </td>
            </tr>
          </tbody>
        </table>

        <table className="order-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={titleCell} colSpan={8}>
                Premise Ownership
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell} colSpan={2}>
                Showroom/Office
              </td>
              <td className={commonCell} colSpan={2}>
                Godown
              </td>
              <td className={commonCell} colSpan={2}>
                Factory
              </td>
              <td className={commonCell} colSpan={2}>
                Existing Employees: 25
              </td>
            </tr>
            <tr>
              <td className={commonCell}>
                <b>Number</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>
                <b>Number</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>
                <b>Number</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell} colSpan={2}>
                <b>Male Employee:</b> 25
              </td>
            </tr>
            <tr>
              <td className={commonCell}>
                <b>Ownership Status</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>
                <b>Ownership Status</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>
                <b>Ownership Status</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell} colSpan={2}>
                <b>Female Employees:</b> 0
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={8}>
                Particulars of Sister &amp; Allied Concern
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>Name of the concern</td>
              <td className={commonCell}>Legal Form</td>
              <td className={commonCell}>Business Type</td>
              <td className={commonCell}>Revenue</td>
              <td className={commonCell}>Net Profit</td>
              <td className={commonCell}>Investment</td>
              <td className={commonCell}>Bank Name &amp; Liability</td>
              <td className={commonCell}>Remarks</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>dhufh</td>
              <td className={commonCell}>Partnership</td>
              <td className={commonCell}>Service</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={8}>
                Financial Performance
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>Year</td>
              <td className={commonCell} colSpan={2}>
                Previous Year
              </td>
              <td className={commonCell}>Current Year</td>
              <td className={commonCell}>Growth %</td>
              <td className={commonCell} colSpan={3}>
                Profitability &amp; Key Ratios
              </td>
            </tr>
            {[
              'Sales/Revenue',
              'Net Profit after Tax',
              'Inventory',
              'Receivables',
              'Business Payables',
              'Outstanding Amount of All Loan',
              'Total Liabilities/Debt',
              'Business Networth',
              'Total Asset (Without Land & Building)',
              'Personal Networth',
              'Total Business Assets',
              'Loan Limits of Existing facilities',
              'Financing Amount',
            ].map((row) => (
              <tr key={row}>
                <td className={commonCell}>{row}</td>
                <td className={`${commonCell} text-center`} colSpan={2}>
                  -
                </td>
                <td className={`${commonCell} text-center`}>-</td>
                <td className={`${commonCell} text-center`}>-%</td>
                <td className={commonCell} colSpan={3}>
                  {row === 'Sales/Revenue' && 'Gross Margin (%)'}
                  {row === 'Net Profit after Tax' && 'Operating Profit (%)'}
                  {row === 'Inventory' && 'Net Profit Margin (After Tax)'}
                  {row === 'Receivables' && 'Return on Asset (ROA)'}
                  {row === 'Business Payables' && 'Return on Equity (ROE)'}
                  {row === 'Outstanding Amount of All Loan' && 'Total Asset Turnover'}
                  {row === 'Total Liabilities/Debt' && 'Inventory Turnover in days'}
                  {row === 'Business Networth' && 'Receivable Turnover in days'}
                  {row === 'Total Asset (Without Land & Building)' && 'Payable Turnover in days'}
                  {row === 'Personal Networth' && 'Cash Conversion Cycle in days'}
                  {row === 'Total Business Assets' && 'Current Ratio'}
                  {row === 'Loan Limits of Existing facilities' && 'Debt to Total Assets'}
                  {row === 'Financing Amount' && 'Funds Available for Debt Servicing'}
                  <span className="float-right">-%</span>
                </td>
              </tr>
            ))}
            <tr className="text-center font-semibold">
              <td className={commonCell}></td>
              <td className={commonCell} colSpan={2}>
                DER
              </td>
              <td className={commonCell}>DBR</td>
              <td className={commonCell}>DSCR</td>
              <td className={commonCell} colSpan={3}>
                Financial Obligation (After Proposed Financing)
              </td>
            </tr>
            <tr>
              <td className={commonCell}>Before Proposed Financing</td>
              <td className={`${commonCell} text-center`} colSpan={2}>
                -
              </td>
              <td className={`${commonCell} text-center`}>-</td>
              <td className={`${commonCell} text-center`}>-</td>
              <td className={commonCell} colSpan={3}></td>
            </tr>
            <tr>
              <td className={commonCell}>After Proposed Financing</td>
              <td className={`${commonCell} text-center`} colSpan={2}>
                -
              </td>
              <td className={`${commonCell} text-center`}>-</td>
              <td className={`${commonCell} text-center`}>-</td>
              <td className={commonCell} colSpan={3}>
                Bank Transaction (% of Sales) <span className="float-right">-%</span>
              </td>
            </tr>
            <tr>
              <td className={`${commonCell} text-center`} rowSpan={8}>
                LOAN AMOUNT
                <br />
                DETERMINATION
              </td>
              <td className={`${commonCell} font-semibold`} colSpan={3}>
                Suggested Loan Limit As per Behavioral Scorecard
              </td>
              <td className={`${commonCell} text-center`}>- %</td>
              <td className={commonCell} colSpan={3}>
                (Repayment Capacity Calculation)
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                DBR below
              </td>
              <td className={`${commonCell} text-center`}>- %</td>
              <td className={commonCell} colSpan={3}>
                (Debt Equity Ratio Calculation)
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                As per Working Capital Fund Requirement
              </td>
              <td className={`${commonCell} text-center`}>- %</td>
              <td className={commonCell} colSpan={3}>
                of Net Required Working Capital(AR &amp; Stock)
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                Fixed Assets Finance up to
              </td>
              <td className={`${commonCell} text-center`}>- %</td>
              <td className={commonCell} colSpan={3}>
                of Quotation Price
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                Adjustment amount of previous loan (fixed assets loan)
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                Maximum Allowable Loan Amount (As per Lowest Calculation-PPG Criteria)
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                Only for Fixed Assets Purchase: Maximum Permissible Loan
              </td>
            </tr>
          </tbody>
        </table>

        <table className="order-1 w-full border-collapse">
          <tbody>
            <tr>
              <td className={titleCell} colSpan={8}>
                Credit Appraisal Memo
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>CRM Center:</b> {get('crmCenter')}
                <br />
                <b>CRM Loan ID:</b> {get('crmLoanId')}
                <br />
                <b>Territory:</b> {get('territory')}
                <br />
                <b>Area:</b> {get('territory')}
                <br />
                <b>Unit :</b> {get('territory')}
                <br />
                <b>Relationship Length-Yrs:</b> -
                <br />
                <b>Special File Category:</b> -, -
                <br />
                <b>RO ID:</b> {get('roId')}
                <br />
                <b>Risk Manager/MC ID:</b> {get('riskManager')}
              </td>
              <td className={commonCell} colSpan={4}>
                <b>Proposal Name:</b> {get('businessName')}
                <br />
                <b>Business Location:</b> {get('businessLocation')}
                <br />
                <b>Business Since:</b> {get('businessSince')}
                <br />
                <b>Legal Status:</b> {get('legalStatus')}
                <br />
                <b>Proposal Type:</b> {get('proposalType')}
                <br />
                <b>Main Premise Ownership:</b> -
                <br />
                <b>Previous Appraisal Date &amp; ID:</b>{' '}
                {get('previousAppraisalDate') + ' & ' + get('previousAppraisalId')}
                <br />
                <b>BDM/TM/RH ID:</b>
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={8}>
                Requested Facility Details
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>Loan Type</td>
              <td className={commonCell}>Loan</td>
              <td className={commonCell}>Tenor</td>
              <td className={commonCell}>Interest</td>
              <td className={commonCell}>EMI Comfort</td>
              <td className={commonCell}>Purpose</td>
              <td className={commonCell} colSpan={2}>
                Tenor Passed % (Repeat)
              </td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>{get('loanType')}</td>
              <td className={commonCell}>{formatBDT(profile?.loanAmount)}</td>
              <td className={commonCell}>{get('tenor')}</td>
              <td className={commonCell}>{get('interest')}</td>
              <td className={commonCell}>{formatBDT(profile?.emiComfort)}</td>
              <td className={commonCell}>{get('purpose')}</td>
              <td className={commonCell} colSpan={2}>
                83.33
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Total Requested Loan Amount</b>
              </td>
              <td className={commonCell} colSpan={4}>
                {formatBDT(profile?.loanAmount)}
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={8}>
                Behavioural Scorecard Details
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>Behavioural Scorecard Applicable?</td>
              <td className={commonCell}>Risk Group</td>
              <td className={commonCell}>Maximum Limit As per Risk Group</td>
              <td className={commonCell}>Fastrack Increase Percentage</td>
              <td className={commonCell}>Existing Loan amount with BBL</td>
              <td className={commonCell}>Existing Tenor</td>
              <td className={commonCell} colSpan={2}>
                Tenor Passed
              </td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>{formatBDT(profile?.loanAmount)}</td>
              <td className={commonCell}>{get('tenor')}</td>
              <td className={commonCell} colSpan={2}>
                30
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={8}>
                Existing Facilities Details with All Financial Institutions
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>Loan in the Name of</td>
              <td className={commonCell}>Institutions</td>
              <td className={commonCell}>Nature of Facility</td>
              <td className={commonCell}>Security</td>
              <td className={commonCell}>Limit</td>
              <td className={commonCell}>O/S</td>
              <td className={commonCell}>Rate</td>
              <td className={commonCell}>EMI Passed or Expiry</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-%</td>
              <td className={commonCell}>- Out of -</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>-</td>
              <td className={commonCell}></td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-%</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>-</td>
              <td className={commonCell}></td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-%</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>Proposed with</td>
              <td className={commonCell}>BRAC Bank Ltd.</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={`${commonCell} font-semibold`} colSpan={4}>
                Total Funded Facilities
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={`${commonCell} font-semibold`} colSpan={4}>
                Total Non-Funded
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={`${commonCell} font-semibold`} colSpan={4}>
                Total Funded &amp; Non-Funded
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="order-5 w-full border-collapse">
          <tbody>
            <tr>
              <td className={titleCell} colSpan={7}>
                Special Covenants &amp; Conditions
              </td>
            </tr>
            <tr>
              <td className={`${commonCell} text-center font-semibold`} colSpan={7}>
                Credit condition/covenants to be mentioned in Sanction letter:
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                <div className="h-[265px] leading-7">
                  -<br />
                  ---<br />
                  ---<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${commonCell} text-center font-semibold`} colSpan={7}>
                Credit condition/covenants NOT to be mentioned in Sanction letter:
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                <div className="h-[235px] leading-7">
                  -<br />
                  ----<br />
                  ----<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --<br />
                  --
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="order-4 w-full border-collapse">
          <tbody>
            <tr>
              <td className={titleCell} colSpan={10}>
                Credit Scoring &amp; SBS Code
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>SME Code</td>
              <td className={commonCell}>Economic Purpose Code</td>
              <td className={commonCell}>Product Code</td>
              <td className={commonCell}>Security Code</td>
              <td className={commonCell}>Sector Code</td>
              <td className={commonCell}>General Provisioning</td>
            </tr>
            <tr>
              <td className={commonCell}>-</td>
              <td className={commonCell}>- Economic Purpose Code :- ,-</td>
              <td className={commonCell}>- Product Code :- ,-</td>
              <td className={commonCell}>- Security Code :- ,-</td>
              <td className={commonCell}>00901001</td>
              <td className={commonCell}>1</td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={3}>
                <b>Sales Turnover (Trading Only):</b> -
              </td>
              <td className={commonCell} colSpan={2}>
                <b>Fixed Asset Exc. Land Building:</b>৳ 0
              </td>
              <td className={commonCell}>
                <b>No. of Employee:</b>25
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Internal Customer Segmentation
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell} colSpan={4}>
                SME - Male - - - AGRICULTURE
              </td>
              <td className={commonCell} colSpan={2}>
                Code
              </td>
              <td className={commonCell} colSpan={4}>
                9 - 18 - - -921
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                ESRM Compliance
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell} colSpan={3}>
                Environment Category : -
              </td>
              <td className={commonCell} colSpan={3}>
                ESDD Checklist Required? : -
              </td>
              <td className={commonCell} colSpan={2}>
                If Yes, Risk Rating: -
              </td>
              <td className={commonCell} colSpan={2}>
                ECC Obtained? : -
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell} colSpan={3}>
                Total Score General Risk ESDD: -
              </td>
              <td className={commonCell} colSpan={3}>
                Total Score Environmental Risk ESDD: -
              </td>
              <td className={commonCell} colSpan={2}>
                Total Score Social Risk ESDD : -
              </td>
              <td className={commonCell} colSpan={2}>
                Total Score : -
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                CIB Report Status
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>CIB Report Particulars</td>
              <td className={commonCell}>Subject Code</td>
              <td className={commonCell}>Report Date</td>
              <td className={commonCell}>Status</td>
              <td className={commonCell}>No. Living Facilities As Borrower</td>
              <td className={commonCell}>Reporting Institutions No.</td>
              <td className={commonCell}>Loan O/S as Borrower</td>
              <td className={commonCell}>Loan O/S as Guarantor</td>
              <td className={commonCell}>Overdue Status</td>
              <td className={commonCell}>CIB Search Check</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={commonCell}>Note</td>
              <td className={commonCell}>-</td>
              <td className={commonCell} colSpan={7}>
                <b>Total No. of CIB Search</b>
              </td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Personal Guarantor(s)
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell} colSpan={2}>
                Name
              </td>
              <td className={commonCell} colSpan={2}>
                Relationship
              </td>
              <td className={commonCell}>Age</td>
              <td className={commonCell}>PNW</td>
              <td className={commonCell}>NID Number</td>
              <td className={commonCell}>Profession</td>
              <td className={commonCell}>Loan Details</td>
              <td className={commonCell}>No of PG</td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={2}>
                RUBAL KUDHF KHANU
              </td>
              <td className={commonCell} colSpan={2}>
                DIRECTOR-ELECTED
              </td>
              <td className={commonCell}>38</td>
              <td className={commonCell}>৳ 374,403,083</td>
              <td className={commonCell}>19876816020000092</td>
              <td className={commonCell}>Self employed</td>
              <td className={commonCell}>3335, ৳ 3,453,345</td>
              <td className={commonCell}>66</td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={2}>
                SUMA NIPA SURMIN
              </td>
              <td className={commonCell} colSpan={2}>
                DIRECTOR-NOMINATED (BY GOVT.)
              </td>
              <td className={commonCell}>47</td>
              <td className={commonCell}>৳ 23,241,701</td>
              <td className={commonCell}>19932692620000725</td>
              <td className={commonCell}>Salaried</td>
              <td className={commonCell}>HJRHF, -</td>
              <td className={commonCell}>77</td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Financing Justification and Way Out Plan
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                <div className="h-[120px]">-</div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="order-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={commonCell} colSpan={2}>
                <b>Cluster Fnancing Information</b>
              </td>
              <td className={commonCell}>
                <b>Code</b>
              </td>
              <td className={commonCell} colSpan={7}>
                <b>Business Location : Street Address</b>
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={2}>
                -
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell} colSpan={7}>
                {get('businessLocation')}
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Recommended Facility Details - Summary
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={2}>
                <b>Product Name:</b> Anonno
              </td>
              <td className={commonCell} colSpan={5}>
                <b>Compound Frequency for Term Loan</b>
              </td>
              <td className={commonCell} colSpan={3}>
                Quarterly
              </td>
            </tr>
            <tr className="text-center font-semibold">
              <td className={commonCell}>LINE</td>
              <td className={commonCell}>Facility Type</td>
              <td className={commonCell}>Limit</td>
              <td className={commonCell}>Rate</td>
              <td className={commonCell}>Card Rate</td>
              <td className={commonCell}>ELAP - EMI/Interest</td>
              <td className={commonCell}>Installments</td>
              <td className={commonCell}>Grace Period</td>
              <td className={commonCell}>Tenor(Months)</td>
              <td className={commonCell}>Purpose / Special File Category / Mode / Formal Takeover</td>
            </tr>
            <tr className="text-center">
              <td className={commonCell}>- / - / - / -</td>
              <td className={commonCell}>{get('loanType')}</td>
              <td className={commonCell}>{formatBDT(profile?.loanAmount)}</td>
              <td className={commonCell}>{get('interest')}</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>{formatBDT(profile?.emiComfort)}</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>-</td>
              <td className={commonCell}>{get('tenor')}</td>
              <td className={commonCell}>{get('purpose')}</td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={2}>
                <b>Total Proposed Limit</b>
              </td>
              <td className={commonCell}>{formatBDT(profile?.loanAmount)}</td>
              <td className={commonCell} colSpan={2}>
                <b>Total Loan Limit with BBL After Proposed Financing</b>
              </td>
              <td className={commonCell}>-</td>
              <td className={commonCell} colSpan={3}>
                <b>Yearly Debt Burden For Proposed Financing of BBL</b>
              </td>
              <td className={commonCell}>-</td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={8}>
                <b>Loan Approved by</b>
              </td>
              <td className={commonCell} colSpan={2}>
                -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={4}>
                <b>Approval Date :</b> -
              </td>
              <td className={commonCell} colSpan={6}>
                <b>Approver&apos;s Comfort Category :</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                -
              </td>
            </tr>
            <tr>
              <td className={titleCell} colSpan={10}>
                Dedupe Search Result
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                <b>NID-TIN Dedupe Search Date:</b> -
              </td>
              <td className={commonCell} colSpan={3}>
                <b>Report Generated By:</b> -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                <b>Borrower&apos;s Dedupe Information</b>
              </td>
              <td className={commonCell} colSpan={3}>
                -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                <b>Guarantor&apos;s Dedupe Information</b>
              </td>
              <td className={commonCell} colSpan={3}>
                -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={7}>
                <b>Sanction List Search Result</b>
              </td>
              <td className={commonCell} colSpan={3}>
                -
              </td>
            </tr>
            <tr>
              <td className={commonCell} colSpan={10}>
                <b>Justification for Dedupe and/or Sanction Search (IF Required)</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppraisalMemo
