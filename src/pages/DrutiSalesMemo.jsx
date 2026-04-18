/**
 * Druti sales appraisal memo — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function DrutiSalesMemo() {
  const { get, formatBDT, profile } = useCaseData()
  const th = 'border border-black px-2 py-[3px] text-[12px] font-semibold leading-none'
  const td = 'border border-black px-2 py-[4px] text-[12px] leading-none'

  const rows = [
    ['HO SC', 'Mohammed Abul Aziz', '25414', '01708123490'],
    ['HO SB', 'S M Alomgir Hossain', '10085', '01714259106'],
    ['Operation Officer', 'Wakjuruni', '30137', '01786741805'],
    ['Regional Credit Head (RCH)', 'Hussain Md. Yasin', '29818', '0173037454'],
    ['MC', get('riskManagerName'), get('riskManagerPins'), '01714084640'],
    ['Risk Manager', 'Md. Ashraful Abedin', '27424', '01713350203'],
    ['Risk Manager', get('riskManagerName'), get('riskManagerPins'), '01787676930'],
    ['Regional Head (RH)', get('riskManagerName'), get('riskManagerPins'), '01714084760'],
    ['TM', get('riskManagerName'), get('riskManagerPins'), '01713424974'],
    ['BDM', get('riskManagerName'), get('riskManagerPins'), '01755982136'],
    ['Credit MIS', 'Md. Moynul Islam', 'EZB1448', '01959146107'],
    ['Relationship Officer  (RO)', get('roId'), '—', '—'],
  ]

  return (
    <div className="min-h-screen bg-white px-2 py-2 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border border-black px-2 py-[4px] text-center text-[20px] font-bold leading-none">
                SALES APPRAISAL MEMO
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr>
              <td className={td}>
                <b>CRM Center:</b> {get('crmCenter')}
              </td>
              <td className={td}>
                <b>RO Lead Date:</b> 22-Jan-2026
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Unit :</b> {get('crmCenter')}
              </td>
              <td className={td}>
                <b>CRM Loan ID:</b> {get('crmLoanId')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Area:</b> {get('crmCenter')}
              </td>
              <td className={td}>
                <b>Territory:</b> {get('territory')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Product Name :</b> Druti
              </td>
              <td className={td}>
                <b>Proposal Name:</b> {get('businessName')}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-8 w-full border-collapse">
          <tbody>
            <tr>
              <td className={td}>
                <b>Key Person:</b> {get('businessName')}
              </td>
              <td className={td}>
                <b>Business Since:</b> 20-Jan-2016
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Business Location:</b> {get('territory')}
              </td>
              <td className={td}>
                <b>Legal Status:</b> {get('legalStatus')}
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Current Proposal:</b> {formatBDT(profile?.loanAmount)}
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Proposal Type:</b> Repeat Customer
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <thead>
            <tr>
              <th className={`${th} text-center`}>ROLE</th>
              <th className={`${th} text-center`}>USER NAME</th>
              <th className={`${th} text-center`}>PIN</th>
              <th className={`${th} text-center`}>CONTACT NO</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([role, name, pin, contact]) => (
              <tr key={`${role}-${pin}`}>
                <td className={`${td} text-center`}>{role}</td>
                <td className={`${td} text-center`}>{name}</td>
                <td className={`${td} text-center`}>{pin}</td>
                <td className={`${td} text-center`}>{contact}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={7}>
                REQUESTED FACILITY DETAILS
              </td>
            </tr>
            <tr>
              <td className={th} colSpan={2}>
                TOTAL REQUESTED LOAN AMOUNT
              </td>
              <td className={td} colSpan={5}>
                {formatBDT(profile?.loanAmount)} (Taka Twenty Lakh)
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`}>Loan Type</td>
              <td className={`${th} text-center`}>Loan</td>
              <td className={`${th} text-center`}>Tenor</td>
              <td className={`${th} text-center`}>Interest</td>
              <td className={`${th} text-center`}>EMI Comfort</td>
              <td className={`${th} text-center`}>Purpose</td>
              <td className={`${th} text-center`}>Special File Category:</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('loanType')}</td>
              <td className={`${td} text-center`}>{formatBDT(profile?.loanAmount)}</td>
              <td className={`${td} text-center`}>{get('tenor')}</td>
              <td className={`${td} text-center`}>{get('interest')}</td>
              <td className={`${td} text-center`}>{formatBDT(profile?.emiComfort)}</td>
              <td className={`${td} text-center`}>{get('purpose')}</td>
              <td className={`${td} text-center`}>NA,</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={th}>Business Address Details</td>
              <td className={th}>Registered Address (As per TL/Registration)</td>
              <td className={th}>BusIness Address 2 (Factory-warehouse-Shop)</td>
              <td className={th}>Actual Business Address (If Registered Address Differs)</td>
            </tr>
            <tr>
              <td className={td}>Street Address (Holding-House-Shop -Road-Plot- Market-Area-Post Office-Police Station</td>
              <td className={td}>SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14 , --</td>
              <td className={td}>- - -</td>
              <td className={td}>SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14 , --</td>
            </tr>
            <tr>
              <td className={td}>Post Code</td>
              <td className={td}>1206</td>
              <td className={td}>-</td>
              <td className={td}>1206</td>
            </tr>
            <tr>
              <td className={td}>Division</td>
              <td className={td}>{get('division')}</td>
              <td className={td}>-</td>
              <td className={td}>{get('division')}</td>
            </tr>
            <tr>
              <td className={td}>District</td>
              <td className={td}>{get('territory')}</td>
              <td className={td}>-</td>
              <td className={td}>{get('division')}</td>
            </tr>
            <tr>
              <td className={td}>Upazila</td>
              <td className={td}>Madhabpur</td>
              <td className={td}>-</td>
              <td className={td}>{get('division')} City</td>
            </tr>
            <tr>
              <td className={td}>Ownership</td>
              <td className={td}>Family Owned</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Years at this place</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>If Rented, Validity of Agreement (Month/Day/Year)</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Reason For Address Mismatch</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${th} text-center`} colSpan={4}>
                Buyer- Information
              </td>
            </tr>
            <tr>
              <td className={th}>Business Name</td>
              <td className={th}>Owner Name</td>
              <td className={th}>Contact No.</td>
              <td className={th}>Receivable Amount</td>
            </tr>
            <tr>
              <td className={td}>BUYER</td>
              <td className={td}>OWNER</td>
              <td className={td}>09678745165</td>
              <td className={td}>৳ 40,000</td>
            </tr>
            <tr>
              <td className={`${th} text-center`} colSpan={4}>
                Supplier-Information
              </td>
            </tr>
            <tr>
              <td className={th}>Business Name</td>
              <td className={th}>Owner Name</td>
              <td className={th}>Contact No.</td>
              <td className={th}>Payable Amount</td>
            </tr>
            <tr>
              <td className={td}>SUPPLIERS</td>
              <td className={td}>OWNER</td>
              <td className={td}>09895657676</td>
              <td className={td}>৳ 50,000</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={6}>
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
            </tr>
            <tr>
              <td className={td}>99 &nbsp;&nbsp; NON SME Personal Transport Agriculture Loan</td>
              <td className={td}>
                Product Code 1: &nbsp; -
              </td>
              <td className={td}>
                Product Code 1: 21099,
                <br />
                Product Code 1: 79,
              </td>
              <td className={td}>00901001</td>
              <td className={td}>1</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>
                <b>Sales Turnover (Trading Only):</b> ৳ 1,252,366
              </td>
              <td className={td} colSpan={2}>
                <b>Fixed Asset Exc. Land Building:</b> 0
              </td>
              <td className={td} colSpan={3}>
                <b>No. of Employee :</b> 8
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-8 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={5}>
                BUSINESS INFORMATION
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Nature of Business:</b> Service
              </td>
              <td className={td}>
                <b>Business Sector Type :</b> COSMETICS AND GIFT ITEMS
              </td>
              <td className={td} colSpan={2}>
                <b>Business Address (In License):</b> SHOP-33,SAIKOT PLAZA,NAVY MARKET,MIRPUR-14 ,
                Madhabpur, {get('territory')}, {get('division')}, 1206
              </td>
              <td className={td}>
                <b>Business District :</b> {get('division')}
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Type of Entity:</b> PROPRIETORSHIP
              </td>
              <td className={td}>
                <b>Age of Business :</b> 7
              </td>
              <td className={td}>
                <b>Male Employe :</b> 7
              </td>
              <td className={td}>
                <b>Other Source of Income :</b> 0
              </td>
              <td className={td}>
                <b>Female Employe :</b> 1
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Registration No. (If Partnership):</b> -
              </td>
              <td className={td}>
                <b>Registration Issue Date :</b> 0
              </td>
              <td className={td}>
                <b>Trade Lic. No.:</b> 4601
              </td>
              <td className={td}>
                <b>Trade License Issue /Renewal Date :</b> 19-Sep-2021
              </td>
              <td className={td}>
                <b>No. of Employes :</b> 8
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Business Product:</b> COSMETICS AND GIFT ITEMS
              </td>
              <td className={td}>
                <b>Trade License Expiry Date:</b> 10-Jan-2040
              </td>
              <td className={td}>
                <b>Trade License Issuing :</b> DFCGG
              </td>
              <td className={td}></td>
              <td className={td}>
                <b>Business Premise Ownership :</b> Family Owned
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Operation Mode:</b> Agriculture
              </td>
              <td className={td}>
                <b>Business Name (Mentioning Signboard) :</b> {get('businessName')}
              </td>
              <td className={td}>
                <b>Initial Investment :</b> ৳ 150,000
              </td>
              <td className={td}></td>
              <td className={td}>
                <b>Business Start Date :</b> 20-Jan-2016
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Business TIN No:</b> 49067576802
              </td>
              <td className={td}>
                <b>Existing YG :</b> 03425932
              </td>
              <td className={td}>
                <b>BBL SB/CD Account No. :</b> 1507203425932001
              </td>
              <td className={td}>
                <b>Business Email :</b> -
              </td>
              <td className={td}>
                <b>No of Shops/Godown/Factory :</b> -
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`} colSpan={5}>
                KEY PERSON/OWNER&apos;S INFORMATION
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <b>Name :</b> {get('businessName')}
              </td>
              <td className={td} colSpan={2}>
                <b>Role In Business:</b> Proprietor
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={5}>
                <b>Present Address:</b>PLOT-A/3,MAIN ROAD,SEC-14,MIRPUR,{get('division')} Sadar,{get('division')},{get('division')},4564,503,6
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={5}>
                <b>Permanent Address:</b> VIL-MIRZANAGAR,PO-NATERSHOP,PS-SONAIMURI, {get('division')} Sadar,{get('division')},{get('division')},6457,503,6
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
              <td className={td}>
                <b>Father:</b> MOHAMMAD ULLA
              </td>
              <td className={td}>
                <b>Mother:</b> MOSHREDA BEGUM
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Spouse:</b> MST SHARMIN AKTER
              </td>
              <td className={td}>
                <b>Marital Status:</b> Married
              </td>
              <td className={td}>
                <b>NID No:</b> 7518377532733
              </td>
              <td className={td}>
                <b>Contact No.:</b> 01733523102
              </td>
              <td className={td}>
                <b>Education:</b> Grdaute
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Share %:</b> 100%
              </td>
              <td className={td}>
                <b>Dependent:</b> -
              </td>
              <td className={td}>
                <b>Residence Status:</b> Resident
              </td>
              <td className={td}>
                <b>Business Experience (Yrs):</b> 10
              </td>
              <td className={td}>
                <b>Years in Current Premise :</b> 10
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>Place of Birth :</b> Natore
              </td>
              <td className={td}>
                <b>Monthly Family Expenses :</b> -
              </td>
              <td className={td}>
                <b>TIN No :</b> 490675768802
              </td>
              <td className={td}>
                <b>Personal Aset :</b> ৳ 1,24,534
              </td>
              <td className={td}>
                <b>Personal Liability :</b> ৳ 346,456
              </td>
            </tr>
            <tr>
              <td className={td}>
                <b>CIF :</b> 03425937
              </td>
              <td className={td} colSpan={4}>
                <b>PG to Existing BBL Loan :</b> No
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={10}>
                CIB REPORT STATUS
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`}>CIB Report Particulars</td>
              <td className={`${th} text-center`}>Subject Code</td>
              <td className={`${th} text-center`}>Report Date</td>
              <td className={`${th} text-center`}>Status</td>
              <td className={`${th} text-center`}>No. Living Facilities As Borrower</td>
              <td className={`${th} text-center`}>Reporting Institutions No.</td>
              <td className={`${th} text-center`}>Loan O/S as Borrower</td>
              <td className={`${th} text-center`}>Overdue Amount</td>
              <td className={`${th} text-center`}>CIB Search Check</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Borrower</td>
              <td className={`${td} text-center`}>856</td>
              <td className={`${td} text-center`}>01-Jan-2026</td>
              <td className={`${td} text-center`}>NIL</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>No</td>
              <td className={`${td} text-center`}>1</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Note</td>
              <td className={`${td} text-center`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-right`} colSpan={2}>
                <b>Total no. of CIB Search</b>
              </td>
              <td className={`${td} text-center`}>1</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={8}>
                Bank Account Details
              </td>
            </tr>
            <tr>
              <td className={th}>Name of Bank</td>
              <td className={th}>Account Name</td>
              <td className={th}>Account Number</td>
              <td className={th}>Account Type</td>
              <td className={th}>Balance</td>
              <td className={th}>Duration</td>
              <td className={th}>Credit Sum</td>
              <td className={th}>% of Sales</td>
            </tr>
            <tr>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>0</td>
              <td className={td}>-</td>
              <td className={td}>0</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-5 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={4}>
                BUSINESS VISITED BY
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`}>Role</td>
              <td className={`${th} text-center`}>Visit User</td>
              <td className={`${th} text-center`}>PIN</td>
              <td className={`${th} text-center`}>Visit Date</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Relationship Officer (RO)</td>
              <td className={`${td} text-center`}>{get('roId')}</td>
              <td className={`${td} text-center`}>—</td>
              <td className={`${td} text-center`}>01-Jan-2026</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={4}>
                BUSINESS FINANCIAL
              </td>
            </tr>
            <tr>
              <td className={th} colSpan={2}>
                Cash Flow/ Income Statement
              </td>
              <td className={th} colSpan={2}>
                Asset &amp; Liability Position
              </td>
            </tr>
            <tr>
              <td className={th}>Particulars</td>
              <td className={th}>Amount</td>
              <td className={th}>Current Asset</td>
              <td className={th}>Total Value (BDT)</td>
            </tr>
            <tr>
              <td className={td}>Sales/Revenue (Yearly Total)</td>
              <td className={td}>৳ 1,252,366</td>
              <td className={td}>Cash</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Gross Profit (gm %)</td>
              <td className={td}>15</td>
              <td className={td}>Inventory/Stock</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`} colSpan={2}>
                Monthly Operating Expense
              </td>
              <td className={td}>A/C Receivable</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Owner&apos;s Drawing</td>
              <td className={td}>-</td>
              <td className={td}>Advance to supplier(s)</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Salaries and wages</td>
              <td className={td}>-</td>
              <td className={td}>FDR</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Rent for Business Premises</td>
              <td className={td}>-</td>
              <td className={td}>Other Current Asset</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Utility Expense/Electricity Bill</td>
              <td className={td}>-</td>
              <td className={td}>Livestock (Birds/Cows/Fish)</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Transportation Cost</td>
              <td className={td}>-</td>
              <td className={td}>Advance Rent/Possession value</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Repair and Maintenance</td>
              <td className={td}>-</td>
              <td className={td}>Furniture &amp; Fixture</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Other Expenses</td>
              <td className={td}>-</td>
              <td className={td}>Machineries and Equipment</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Tax</td>
              <td className={td}>-</td>
              <td className={td}>Vehicle</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`} colSpan={2}>
                Monthly Family Expense
              </td>
              <td className={td}>Land</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Food Expense</td>
              <td className={td}>-</td>
              <td className={td}>Building</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>House Rent</td>
              <td className={td}>0</td>
              <td className={`${th} text-left`} colSpan={2}>
                Liability
              </td>
            </tr>
            <tr>
              <td className={td}>House Electricity &amp; Utility</td>
              <td className={td}>-</td>
              <td className={td}>A/C Payable</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Child&apos;s Educational Exp.</td>
              <td className={td}>-</td>
              <td className={td}>Other Payables [If Any]</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Medical Exp.</td>
              <td className={td}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Other Family Expenses</td>
              <td className={td}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Total Family expenses</td>
              <td className={td}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>DBR (%) as per PPG</td>
              <td className={td}>80</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>DER (%) as per PPG</td>
              <td className={td}>70</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={8}>
                FINANCIAL PERFORMANCE
              </td>
            </tr>
            <tr>
              <td className={th}>Year</td>
              <td className={`${th} text-center`}>Previous Year</td>
              <td className={`${th} text-center`}>Current Year</td>
              <td className={`${th} text-center`}>Growth %</td>
              <td className={`${th} text-center`} colSpan={4}>
                Profitability &amp; Key Ratios
              </td>
            </tr>
            <tr>
              <td className={td}>Sales/Revenue</td>
              <td className={`${td} text-center`}>৳ 1,800,000</td>
              <td className={`${td} text-center`}>৳ 1,252,366</td>
              <td className={`${td} text-center`}>-30.42%</td>
              <td className={td} colSpan={3}>Gross Margin (%)</td>
              <td className={`${td} text-center`}>15%</td>
            </tr>
            <tr>
              <td className={td}>Net Profit after Tax</td>
              <td className={`${td} text-center`}>৳ 252,000</td>
              <td className={`${td} text-center`}>৳ 117,578</td>
              <td className={`${td} text-center`}>-146.6%</td>
              <td className={td} colSpan={3}>Net Profit Margin (%)</td>
              <td className={`${td} text-center`}>-9.39%</td>
            </tr>
            <tr>
              <td className={td}>Net Consolidated Income</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>৳ 117,578</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>DBR After Availing Loan</td>
              <td className={`${td} text-center`}>48%</td>
            </tr>
            <tr>
              <td className={td}>Inventory</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>DER After Availing Loan</td>
              <td className={`${td} text-center`}>2.3</td>
            </tr>
            <tr>
              <td className={td}>Receivables</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>Cash Conversion Cycle in days</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={td}>Business Payables</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>Considered DBR %</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={td}>Outstanding Amount of All Loan</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>Considered DER %</td>
              <td className={`${td} text-center`}>70</td>
            </tr>
            <tr>
              <td className={td}>Total Liabilities/Debt</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>Loan Amount As per DBR</td>
              <td className={`${td} text-center`}>৳ -163,649</td>
            </tr>
            <tr>
              <td className={td}>Business Networth</td>
              <td className={`${td} text-center`}>৳ -1,097,261</td>
              <td className={`${td} text-center`}>৳ 32,422</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>Loan Amount As per DER</td>
              <td className={`${td} text-center`}>৳ 673,350</td>
            </tr>
            <tr>
              <td className={td}>Total Asset (without Land &amp; Building)</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={td} colSpan={3}>Maximum Allowable Loan Amount</td>
              <td className={`${td} text-center`}>৳ -163,649</td>
            </tr>
            <tr>
              <td className={td}>Land &amp; Building</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={td} colSpan={3}>Loan Amount As per FAQ</td>
              <td className={`${td} text-center`}>-</td>
            </tr>
            <tr>
              <td className={td}>Personal Assets</td>
              <td className={`${td} text-center`}>৳ 1,499,093</td>
              <td className={`${td} text-center`}>৳ 531,622</td>
              <td className={`${td} text-center`}>-64.54%</td>
              <td className={td} colSpan={4}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={5}>
                GUARANTOR(S) INFORMATION
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`} colSpan={5}>
                GUARANTOR 1
              </td>
            </tr>
            <tr>
              <td className={td}><b>Name:</b> {get('businessName')}</td>
              <td className={td}><b>Age:</b> 30</td>
              <td className={td}><b>Professions:</b> Self employed</td>
              <td className={td} colSpan={2}><b>Guarantor&apos;s BB SBS Code:</b> 91000</td>
            </tr>
            <tr>
              <td className={td}><b>Gender:</b> M</td>
              <td className={td}><b>CIF:</b> 03954951</td>
              <td className={td}><b>Account No. with BBL:</b> -</td>
              <td className={td}><b>Date of Birth:</b> 14-Apr-1995</td>
              <td className={td}><b>Email:</b> -</td>
            </tr>
            <tr>
              <td className={td}><b>Education:</b> Graduate</td>
              <td className={td}><b>Place of Birth:</b> Coxsbazar</td>
              <td className={td}><b>Experience:</b> 6</td>
              <td className={td}><b>NID Number:</b> 19957518377000527</td>
              <td className={td}><b>Contact No:</b> 01845707266</td>
            </tr>
            <tr>
              <td className={td}><b>PNW:</b> ৳ 3,818,290</td>
              <td className={td}><b>Business Name:</b> -</td>
              <td className={td}><b>Father&apos;s Name:</b> MOHAMMAD ULLAH</td>
              <td className={td}><b>Mother&apos;s Name:</b> MORSHEDA BEGUM</td>
              <td className={td}><b>Spouse Name:</b> -</td>
            </tr>
            <tr>
              <td className={td}><b>Personal &amp; Business Liability:</b> ৳ 546,457</td>
              <td className={td}><b>Monthly Income:</b> ৳ 40,000</td>
              <td className={td}><b>Monthly Expense:</b> ৳ 25,000</td>
              <td className={td}><b>CIB Required:</b> No</td>
              <td className={td}><b>Personal &amp; Business Asset:</b> ৳ 4,364,747</td>
            </tr>
            <tr>
              <td className={td}><b>No of PG:</b> 0</td>
              <td className={td}><b>Name of Institute:</b> -</td>
              <td className={td}><b>Address of Institute:</b> -</td>
              <td className={td}><b>Loan Details (Bank, Amount):</b> -</td>
              <td className={td}><b>No of PG Provided in BBL:</b> 0</td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Present Address:</b> HOUSE#3/5 ROAD#7 BLOCK B, SECTION T4, {get('division')} City, {get('division')}, 457502, 6
              </td>
              <td className={td} colSpan={3}>
                <b>Permanent Address:</b> MIRZANAGAR, TOMIZ UDDIN HAZI BARI, NATESHOR, KUMILLA, {get('division')} Sadar, {get('division')}, 7821, 503, 6
              </td>
            </tr>
            <tr>
              <td className={td}><b>Residence Status:</b> Own Land</td>
              <td className={td}><b>Relationship with sponsor:</b> ADMINISTRATOR</td>
              <td className={td}><b>Loan Details (Bank, Amount):</b> -</td>
              <td className={td} colSpan={2}><b>No of PG Provided in BBL:</b> 0</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={5}>
                GUARANTOR 2
              </td>
            </tr>
            <tr>
              <td className={td}><b>Name:</b> MD SAHIDUL ISLAM</td>
              <td className={td}><b>Age:</b> 37</td>
              <td className={td}><b>Professions:</b> OTHER</td>
              <td className={td} colSpan={2}><b>Guarantor&apos;s BB SBS Code:</b> 915059</td>
            </tr>
            <tr>
              <td className={td}><b>Gender:</b> M</td>
              <td className={td}><b>CIF:</b> 05270245</td>
              <td className={td}><b>Account No. with BBL:</b> -</td>
              <td className={td}><b>Date of Birth:</b> 07-Apr-1988</td>
              <td className={td}><b>Email:</b> -</td>
            </tr>
            <tr>
              <td className={td}><b>Education:</b> Graduate</td>
              <td className={td}><b>Place of Birth:</b> Cumilla</td>
              <td className={td}><b>Experience:</b> 10</td>
              <td className={td}><b>NID Number:</b> 19742693004024197</td>
              <td className={td}><b>Contact No:</b> 01673169123</td>
            </tr>
            <tr>
              <td className={td}><b>PNW:</b> ৳ 4,194,101</td>
              <td className={td}><b>Business Name:</b> -</td>
              <td className={td}><b>Father&apos;s Name:</b> A MANNAN GAZI</td>
              <td className={td}><b>Mother&apos;s Name:</b> MST ALKUMA BEGUM</td>
              <td className={td}><b>Spouse Name:</b> MST RAHIMA BEGUM</td>
            </tr>
            <tr>
              <td className={td}><b>Personal &amp; Business Liability:</b> ৳ 564,578</td>
              <td className={td}><b>Monthly Income:</b> ৳ 80,000</td>
              <td className={td}><b>Monthly Expense:</b> ৳ 50,000</td>
              <td className={td}><b>CIB Required:</b> No</td>
              <td className={td}><b>Personal &amp; Business Asset:</b> ৳ 4,758,679</td>
            </tr>
            <tr>
              <td className={td}><b>No of PG:</b> 0</td>
              <td className={td}><b>Name of Institute:</b> -</td>
              <td className={td}><b>Address of Institute:</b> -</td>
              <td className={td}><b>Loan Details (Bank, Amount):</b> -</td>
              <td className={td}><b>No of PG Provided in BBL:</b> 0</td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                <b>Present Address:</b> H-2, LANE-6, TINSHADE, MIRPUR-14, Tampianganj ({get('division')}), {get('division')}, 4674, 94, 6
              </td>
              <td className={td} colSpan={3}>
                <b>Permanent Address:</b> NORTH ELI, BAGA BAZAR, SADAR, {get('division')} City, {get('division')}, {get('division')}, 5758, 502, 6
              </td>
            </tr>
            <tr>
              <td className={td}><b>Residence Status:</b> Own Land</td>
              <td className={td}><b>Relationship with sponsor:</b> AUTHORISED SIGNATORY</td>
              <td className={td}><b>Loan Details (Bank, Amount):</b> -</td>
              <td className={td} colSpan={2}><b>No of PG Provided in BBL:</b> 0</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={8}>
                Loan Details with Other Institutions
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`}>Institutions</td>
              <td className={`${th} text-center`}>Nature of Facility</td>
              <td className={`${th} text-center`}>Limit</td>
              <td className={`${th} text-center`}>O/S</td>
              <td className={`${th} text-center`}>Rate</td>
              <td className={`${th} text-center`}>EMI Passed or Expiry</td>
              <td className={`${th} text-center`}>Closing Condition</td>
              <td className={`${th} text-center`}>After Financing Limit</td>
            </tr>
            <tr>
              <td className={td}>BRAC Bank Ltd.</td>
              <td className={`${td} text-center`}>Term Loan</td>
              <td className={`${td} text-center`}>৳ 1,300,000</td>
              <td className={`${td} text-center`}>৳ 1,097,261</td>
              <td className={`${td} text-center`}>{get('interest')}%</td>
              <td className={`${td} text-center`}>0 Out of 0</td>
              <td className={`${td} text-center`}>Yes</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>0%</td>
              <td className={`${td} text-center`}>0</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>0</td>
            </tr>
            <tr>
              <td className={td}>BRAC Bank Ltd.</td>
              <td className={`${td} text-center`}>Term Loan</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>-</td>
              <td className={`${td} text-center`}>৳ 1,000,000</td>
            </tr>
            <tr>
              <td className={th}>Total Funded Facilities</td>
              <td className={th}></td>
              <td className={`${th} text-center`}>৳ 1,300,000</td>
              <td className={`${th} text-center`}>৳ 1,097,261</td>
              <td className={th}></td>
              <td className={th}></td>
              <td className={th}></td>
              <td className={`${th} text-center`}>৳ 1,000,000</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`} colSpan={5}>
                Digital Approval and Remarks
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center`}>Username</td>
              <td className={`${th} text-center`}>User Role</td>
              <td className={`${th} text-center`}>Remark Date</td>
              <td className={`${th} text-center`}>Remark</td>
              <td className={`${th} text-center`}>Decision</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('roId')}</td>
              <td className={`${td} text-center`}>Relationship Officer (RO)</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>BDM</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>TM</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>Regional Head (RH)</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Md. Ashraful Abedin [27424]</td>
              <td className={`${td} text-center`}>Risk Manager</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Received</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Md. Ashraful Abedin [27424]</td>
              <td className={`${td} text-center`}>Risk Manager</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>BDM</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Loan Amount Confirmed</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>TM</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>MC</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>ok</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('riskManagerName')} [{get('riskManagerPins')}]</td>
              <td className={`${td} text-center`}>Regional Head (RH)</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Hussain Md. Yasin [29818]</td>
              <td className={`${td} text-center`}>Regional Credit Head (RCH)</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>S M Alomgir Hossain [10085]</td>
              <td className={`${td} text-center`}>HO SB</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>Mohammed Abul Aziz [25414]</td>
              <td className={`${td} text-center`}>HO SC</td>
              <td className={`${td} text-center`}>23-Jan-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>{get('roId')}</td>
              <td className={`${td} text-center`}>Relationship Officer (RO)</td>
              <td className={`${td} text-center`}>13-Feb-2026</td>
              <td className={`${td} text-center`}>okay</td>
              <td className={`${td} text-center`}>Recommend</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center`}>DEVIATION PARAMETER</td>
              <td className={`${th} text-center`}>APPROVING USERS</td>
              <td className={`${th} text-center`}>CONDITION</td>
              <td className={`${th} text-center`}>JUSTIFICATION</td>
            </tr>
            <tr>
              <td className={td}>Debt-Equity Ratio (DER)</td>
              <td className={td}>S M Alomgir Hossain</td>
              <td className={td}>
                If sum of total liabilities and loan amount &gt; 70% of total equity then mark it as Deviation
              </td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Loan Limit Increase</td>
              <td className={td}>S M Alomgir Hossain</td>
              <td className={td}>Loan can be provided up to up to 150% of previous financing</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Top Up Repeat Financing for Druti</td>
              <td className={td}>Mohammed Abul Aziz, S M Alomgir Hossain</td>
              <td className={td}>
                Tenor is {get('tenor')} and EMI passed is less than or equal 5; Tenor is {get('tenor')} and EMI passed is less than or equals 11; Tenor is {get('tenor')} and EMI passed is less than or equals 18 for a repeat loan then deviation
              </td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={td}>Debt-Equity Ratio (DER)</td>
              <td className={td}>Hussain Md. Yasin</td>
              <td className={td}>
                If sum of total liabilities and loan amount &gt; 70% of total equity then mark it as Deviation
              </td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DrutiSalesMemo
