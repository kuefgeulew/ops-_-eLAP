/**
 * Loan application checklist audit — printable layout.
 */
function LoanChecklistAudit() {
  const label = 'px-1 text-[18px] font-bold leading-none'
  const valueCell = 'h-[42px] border border-black px-2 text-[20px] leading-none'

  return (
    <div className="min-h-screen bg-white px-8 py-6 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <div className="flex items-start justify-end gap-[840px]">
          <div className="mt-[8px] h-[16px] w-[20px] border border-[#8c8c8c] bg-white"></div>
          <button
            type="button"
            className="h-[22px] border border-[#6f6f6f] bg-white px-3 text-[14px] leading-none"
          >
            Print
          </button>
        </div>

        <div className="mt-[54px] text-[17px] leading-none">Date:</div>

        <div className="mt-[8px] text-[16px] leading-none font-bold">
          Subject: Handover of Original Loan file to Audit Team: ICC
        </div>

        <div className="mt-[12px] border-b border-[#7a7a7a] pb-[7px] text-[18px] leading-none">
          This is to confirm that we are handing over the following loan file from SME-LD to Internal
          Control &amp; Compliance, with the follwoing disclosures:
        </div>

        <table className="mt-[10px] w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${label} w-[330px]`}>Name of Borrower</td>
              <td className={`${valueCell} w-[685px]`}>RAFI COSMETICS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ref.2601002662</td>
              <td className={`${label} w-[210px]`}>A/C</td>
              <td className={`${valueCell} w-[314px]`}>-</td>
            </tr>
            <tr>
              <td className={`${label} w-[330px]`}>Approved</td>
              <td className={`${valueCell} w-[685px]`}></td>
              <td className={`${label} w-[210px]`}></td>
              <td className={`${valueCell} w-[314px]`}></td>
            </tr>
            <tr>
              <td className={`${label} w-[330px]`}>Loan Amount</td>
              <td className={`${valueCell} w-[685px]`}>৳ 1,00,000</td>
              <td className={`${label} w-[210px]`}>Unit Office</td>
              <td className={`${valueCell} w-[314px]`}>Elphant Road</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-[22px] w-full border-collapse text-[16px] leading-none">
          <thead>
            <tr className="bg-[#d9d9d9]">
              <th className="border border-black px-2 py-[4px] text-center font-bold" colSpan={3}>
                Document Check List For Loan file
              </th>
            </tr>
            <tr>
              <th className="border border-black px-2 py-[4px] text-left font-bold">Document Name</th>
              <th className="border border-black px-2 py-[4px] text-left font-bold">Document Type</th>
              <th className="border border-black px-2 py-[4px] text-left font-bold">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {[
              'Trade License',
              'E-TIN',
              'E-TIN Verification Copy',
              'Business Finanical Relevant Documents',
              'Owners NID Copy',
              'Guarators Recent passport size color photograph',
              'Owners Verfied NID Copy',
              'Gurartors NID Copy',
              'Guarators Verfied NID Copy',
              'Letter of UnderTaking (CIB)',
              'Business Premise Documents',
              'Recent passport size color photograph',
              '',
            ].map((item, idx) => (
              <tr key={`check-${idx}`}>
                <td className="border border-black px-2 py-[5px]">{item}</td>
                <td className="border border-black px-2 py-[5px]">Original</td>
                <td className="border border-black px-2 py-[5px]">-</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-[10px] text-[15px] leading-none">
          Security Documentation is in place according to the approval terms as per above checklist
        </div>

        <table className="mt-[8px] w-full border-collapse text-[17px] leading-none">
          <tbody>
            <tr>
              <td className="h-[56px] border border-black px-2 text-center font-bold">
                Handover By: &nbsp;Shishir Das , PIN - 26666
              </td>
              <td className="h-[56px] w-[180px] border border-black px-2 text-center font-bold">
                Date :
              </td>
            </tr>
            <tr>
              <td className="h-[56px] border border-black px-2 text-center font-bold">
                Recevied by: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, PIN -
              </td>
              <td className="h-[56px] border border-black px-2 text-center font-bold">Date :</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoanChecklistAudit
