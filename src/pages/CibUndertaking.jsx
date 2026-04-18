/**
 * CIB undertaking, part one — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function CibUndertaking() {
  const { get, formatBDT, profile } = useCaseData()
  const label = 'font-semibold'

  return (
    <div className="min-h-screen bg-white px-3 py-2 text-black">
      <div className="mx-auto w-full max-w-[1700px] font-['Arial'] text-[11px] leading-tight">
        <div className="flex justify-end">
          <button
            type="button"
            className="border border-[#555] px-2 py-[1px] text-[12px] leading-none text-[#111]"
          >
            Print
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8">
          <div>
            <div>
              <span className={label}>Type of Financing:</span> {get('loanType')}
            </div>
            <div>
              <span className={label}>Number of Installments:</span> {get('tenor')}
            </div>
            <div>
              <span className={label}>Periodicity of Payment:</span> Monthly
            </div>
            <div>
              <span className={label}>Amount for Loan Applied for:</span> {formatBDT(profile?.loanAmount)}
            </div>
            <div>
              <span className={label}>Sector type:</span> Private
            </div>
            <div>
              <span className={label}>Sector Code (6 Digit):</span> [090100]
            </div>
            <div>
              <span className={label}>Branch Name:</span> {get('territory')}
            </div>
          </div>

          <div>
            <div>
              <span className={label}>CIB Subject Code:</span> -
            </div>
            <div>
              <span className={label}>FI Subject Code (Cust ID):</span> -
            </div>
            <div>
              <span className={label}>(If Borrower is Other than New):</span>
            </div>
            <div>
              <span className={label}>Date:</span> 22-Jan-2026
            </div>
            <div>
              <span className={label}>Ref. No:</span> {get('crmLoanId')}
            </div>
          </div>
        </div>

        <h1 className="mt-6 text-center text-[13px] font-bold tracking-wide">UNDERTAKING (Owner - 1)</h1>

        <div className="mt-5 space-y-2">
          <p>To</p>
          <p>The Manager</p>
          <p>
            <span className={label}>Branch:</span> {get('crmCenter')}
          </p>
          <p>
            <span className={label}>
              Subject: Submission of ownership information of borrowing individual/institution
            </span>
          </p>
          <p>Dear Sir/Madam,</p>
          <p>
            I, {get('businessName')} proprietor/partner/shareholder/member of Trustee/Body/Director/Managing
            Director/Chairman of {get('businessName')} am applying for sanctioning/renewal/rescheduling of a loan in my own
            name/aforementioned company&apos;s name.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-1">
          <div>
            <span className={label}>Father&apos;s Name:</span> MOHAMMAD ULLA
          </div>
          <div>
            <span className={label}>ID Issue Date:</span> 20-Jan-2016
          </div>

          <div>
            <span className={label}>Mother&apos;s Name:</span> MOTSHEDA BEGUM
          </div>
          <div>
            <span className={label}>Date of Birth:</span> 13-Jan-1987
          </div>

          <div>
            <span className={label}>Spouse&apos;s Name (if applicable):</span> MST SHARMIN AKTER
          </div>
          <div>
            <span className={label}>Country of Birth:</span> Bangladesh
          </div>

          <div>
            <span className={label}>Permanent Address:</span> VILL-MIRKANAGAR, P.O-NAZIRSHOR, PS-SONAIMURI, {get('division')}
            Sadar, {get('division')}, {get('division')}, 647, 503,6
          </div>
          <div>
            <span className={label}>Gender:</span> M
          </div>

          <div>
            <span className={label}>Business/Present Address:</span> PLOT-AJ, MAIN ROAD, SE-14, MIRPUR, {get('division')} Sadar,
            {get('division')}, {get('division')}, 458, 503,8
          </div>
          <div></div>

          <div>
            <span className={label}>National ID Number:</span> 753877523733
          </div>
          <div></div>

          <div>
            <span className={label}>Other ID documents (Passport/Driving license/Nationality certificate):</span>
          </div>
          <div></div>

          <div>
            <span className={label}>ID Number:</span> 753877523733
          </div>
          <div></div>

          <div>
            <span className={label}>ID Issue Country:</span> Bangladesh
          </div>
          <div></div>

          <div>
            <span className={label}>District of Birth:</span> Natore
          </div>
          <div></div>

          <div>
            <span className={label}>TIN:</span> 49057786902
          </div>
          <div></div>

          <div>
            <span className={label}>Telephone Number:</span> 017336231702
          </div>
          <div></div>
        </div>

        <p className="mt-3">
          are given for your kind consideration. The list of companies under the ownership or name along with their
          bank liability status is given in the following table:
        </p>

        <table className="mt-2 w-full border-collapse border border-black text-[10px]">
          <thead>
            <tr>
              <th className="border border-black px-1 py-1 text-center" rowSpan={2}>
                Sl No.
              </th>
              <th className="border border-black px-1 py-1 text-center" rowSpan={2}>
                Name of Company
              </th>
              <th className="border border-black px-1 py-1 text-center" rowSpan={2}>
                Main Address
              </th>
              <th className="border border-black px-1 py-1 text-center" rowSpan={2}>
                Additional Address
              </th>
              <th className="border border-black px-1 py-1 text-center" colSpan={3}>
                Whether the company is availing any loan or not?
              </th>
            </tr>
            <tr>
              <th className="border border-black px-1 py-1 text-center" colSpan={2}>
                Yes
              </th>
              <th className="border border-black px-1 py-1 text-center">No</th>
            </tr>
            <tr>
              <th className="border border-black px-1 py-1 text-center"></th>
              <th className="border border-black px-1 py-1 text-center"></th>
              <th className="border border-black px-1 py-1 text-center"></th>
              <th className="border border-black px-1 py-1 text-center"></th>
              <th className="border border-black px-1 py-1 text-center">Name of bank/FI</th>
              <th className="border border-black px-1 py-1 text-center">Branch</th>
              <th className="border border-black px-1 py-1 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-1 py-1 text-center">1</td>
              <td className="border border-black px-1 py-1 text-center">{get('businessName')}</td>
              <td className="border border-black px-1 py-1">{get('businessLocation')}</td>
              <td className="border border-black px-1 py-1 text-center">-</td>
              <td className="border border-black px-1 py-1 text-center">-</td>
              <td className="border border-black px-1 py-1 text-center"></td>
              <td className="border border-black px-1 py-1 text-center"></td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Apart from the information stated above, if any liability in my own name or my company&apos;s name is found, I
          will be bound to obey any decision made by the authority concerned relating to sanctioning/renewal/
          rescheduling of the loan applied for and I will be punishable by law for providing this false or fabricated
          information.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-20 text-center text-[11px]">
          <div>
            <div className="mx-10 border-t border-dashed border-black pt-1">
              Seal and Signature of the bank
              <br />
              official who certified the borrower
            </div>
          </div>
          <div>
            <div className="mx-10 border-t border-dashed border-black pt-1">Seal &amp; Signature of Loan Applicant</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-20 text-[11px]">
          <div></div>
          <div>
            <div>
              <span className={label}>Name:</span> {get('businessName')}
            </div>
            <div>
              <span className={label}>Name of the Borrowing Organization:</span> {get('businessName')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CibUndertaking
