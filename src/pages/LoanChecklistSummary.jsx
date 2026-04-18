/**
 * Loan application checklist summary — printable layout.
 */
function LoanChecklistSummary() {
  const th = 'border border-black px-1 py-[2px] text-left text-[11px] font-bold leading-none'
  const td = 'border border-black px-1 py-[2px] text-[11px] leading-none'

  return (
    <div className="min-h-screen bg-white px-2 py-3 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <div className="mb-[4px] flex items-start justify-between">
          <div className="mt-[7px] h-[14px] w-[14px] border border-[#808080]"></div>
          <button type="button" className="border border-[#666] px-2 py-0 text-[12px] leading-none">
            Print
          </button>
        </div>

        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center text-[34px] font-bold`} colSpan={13}>
                Loan Application Checklist
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center text-[22px] font-bold`} colSpan={8}>
                Loan Information Summary
              </td>
              <td className={`${th} text-center text-[18px] font-bold`} colSpan={2}>
                Fire Insurance Details
              </td>
              <td className={`${th} text-center text-[18px] font-bold`} colSpan={3}>
                Other Insurance Details
              </td>
            </tr>

            <tr>
              <td className={`${th} w-[160px]`}>Ref. ID:</td>
              <td className={`${td} w-[260px]`} colSpan={3}>2601002662</td>
              <td className={th}>Loan Product:</td>
              <td className={td} colSpan={3}>Druti</td>
              <td className={`${th} text-center`} rowSpan={2}>Insurance Class</td>
              <td className={`${th} text-center`} colSpan={1}>Premium</td>
              <td className={`${th} text-center`} rowSpan={2}>Life Ins. Premium</td>
              <td className={`${th} text-center`} rowSpan={2}>Livestock Premium</td>
              <td className={`${th} text-center`} rowSpan={2}>Without Insurance</td>
            </tr>
            <tr>
              <td className={th}>Business Name:</td>
              <td className={td} colSpan={3}>RAFI COSMETICS</td>
              <td className={th}>Loan Application Date:</td>
              <td className={td} colSpan={3}>22-Jan-2026</td>
              <td className={`${th} text-center`}>1st Year</td>
            </tr>
            <tr>
              <td className={th}>Propretor Name:</td>
              <td className={td} colSpan={3}>FAYSAL AHMMAD</td>
              <td className={th}>Approval Date:</td>
              <td className={td} colSpan={3}>23-Jan-2026</td>
              <td className={td}></td>
              <td className={`${th} text-center`}>2nd Year</td>
              <td className={`${td} text-center`}>৳ 0</td>
              <td className={`${td} text-center`}>৳ 0</td>
              <td className={`${td} text-center`}></td>
            </tr>
            <tr>
              <td className={th}>Business Adress:</td>
              <td className={td} colSpan={3}>SHOP-33, SAIKOT PLAZA NAVY MARKET MIRPUR-14,Madaripur,Habiganj,SYLHET,1206,470,6 Family Owner</td>
              <td className={th}>Loan File Receive Dt:</td>
              <td className={td} colSpan={3}>23 Jan 2025</td>
              <td className={`${td} text-center`}>GIID - Green Delta Ins</td>
              <td className={td}></td>
              <td className={`${th} text-center`}>Ins. Stock:</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={th}>Permanant Loan A/c No. :</td>
              <td className={td} colSpan={3}></td>
              <td className={th}>Approver Name &amp; PIN:</td>
              <td className={td} colSpan={3}>Md.AshrfaulAbedin -27424 (Risk Manager)</td>
              <td className={`${th} text-center`}>Application Fee</td>
              <td className={`${th} text-center`}>Documetation Fee</td>
              <td className={`${th} text-center`}>Processing Fee</td>
              <td className={`${th} text-center`}>Total VAT</td>
              <td className={`${th} text-center`}>Stamp Charge</td>
            </tr>
            <tr>
              <td className={th}>BBL CA SA:</td>
              <td className={td} colSpan={7}></td>
              <td className={`${td} text-center`}>৳ 700</td>
              <td className={`${td} text-center`}>৳ 700</td>
              <td className={`${td} text-center`}></td>
              <td className={`${td} text-center`}>৳ 1,000</td>
              <td className={`${td} text-center`}>৳ 0</td>
            </tr>
            <tr>
              <td className={th}>Existing BBL Loan A/C:</td>
              <td className={td} colSpan={7}>1507202452932001</td>
              <td className={`${th} text-center`} colSpan={5}>Loan File Supercentcing Details</td>
            </tr>
            <tr>
              <td className={th}>Legal Status:</td>
              <td className={td} colSpan={7}>PROPRIETORSHIP</td>
              <td className={`${th} text-center`}>Initiator PIN</td>
              <td className={`${th} text-center`}>Initiator Name</td>
              <td className={`${th} text-center`}>Unit</td>
              <td className={`${th} text-center`}>Zone/Area</td>
              <td className={`${th} text-center`}>Territory</td>
            </tr>
            <tr>
              <td className={th}>Operation Center:</td>
              <td className={td} colSpan={3}>HO Operation</td>
              <td className={th}>Loan Type:</td>
              <td className={td} colSpan={3}>Repeat</td>
              <td className={`${td} text-center`}>26666</td>
              <td className={`${td} text-center`}>Shishir Das</td>
              <td className={`${td} text-center`}>Elephant Road</td>
              <td className={`${td} text-center`}>Elephant Road</td>
              <td className={`${td} text-center`}>Elephant Road</td>
            </tr>
            <tr>
              <td className={th}>CRM Center:</td>
              <td className={td} colSpan={3}>Elephant Road</td>
              <td className={th}>Total Sanction Limit:</td>
              <td className={td} colSpan={3}>৳ 1,00,000</td>
              <td className={`${th} text-center`} colSpan={5}>CIB Status</td>
            </tr>
            <tr>
              <td className={th}>Loan Purpose:</td>
              <td className={td} colSpan={3}>Repeat</td>
              <td className={th}>EMI</td>
              <td className={td} colSpan={3}>4795</td>
              <td className={td} colSpan={5}></td>
            </tr>
            <tr>
              <td className={th}>Facility Details:</td>
              <td className={td} colSpan={12}>Term Loan @13.75 % for 24 months</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-5 w-full border-collapse">
          <thead>
            <tr>
              <th className={`${th} text-center`} colSpan={6}>
                List of Recieved Document(s)
              </th>
            </tr>
            <tr>
              <th className={th}>Document Name</th>
              <th className={th}>Document Type</th>
              <th className={th}>Issue Date</th>
              <th className={th}>Expiry Date</th>
              <th className={th}>Updated On</th>
              <th className={th}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} h-[180px]`} colSpan={6}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse">
          <thead>
            <tr>
              <th className={`${th} text-center`} colSpan={9}>
                List of Deferral Document(s)
              </th>
            </tr>
            <tr>
              <th className={th}>Document Name</th>
              <th className={th}>Deferral Date</th>
              <th className={th}>Expiry Date</th>
              <th className={th}>Aging</th>
              <th className={th}>Responsible PIN</th>
              <th className={th}>Responsible Name</th>
              <th className={th}>Approver PIN</th>
              <th className={th}>Approver Name</th>
              <th className={th}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} h-[180px]`} colSpan={9}></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-[54px] grid grid-cols-4 gap-8 text-center text-[14px] leading-none">
          <div>
            <div className="mx-auto h-0 w-[120px] border-t border-black"></div>
            <div className="mt-1">Saction Approved by</div>
          </div>
          <div>
            <div className="mx-auto h-0 w-[120px] border-t border-black"></div>
            <div className="mt-1">Document Compiled by</div>
          </div>
          <div>
            <div className="mx-auto h-0 w-[150px] border-t border-black"></div>
            <div className="mt-1">Loan Conditionally Setled by</div>
          </div>
          <div>
            <div className="mx-auto h-0 w-[120px] border-t border-black"></div>
            <div className="mt-1">Loan Disbursed by</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanChecklistSummary
