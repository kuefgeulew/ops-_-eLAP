/**
 * Druti loan document checklist — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function DocumentChecklist() {
  const { get, formatBDT, profile } = useCaseData()
  const th = 'border border-black px-1 py-[3px] text-left text-[10px] font-semibold'
  const td = 'border border-black px-1 py-[3px] text-[10px] leading-tight'

  return (
    <div className="min-h-screen bg-white px-3 py-2 text-black">
      <div className="mx-auto w-full max-w-[1700px] font-['Arial']">
        <div className="text-center text-[30px] font-bold leading-none">BRAC Bank PLC</div>
        <div className="text-center text-[16px] leading-none">Bank Copy / Customer Copy</div>

        <div className="mt-4 grid grid-cols-2 gap-8 text-[11px]">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="px-1 py-[2px] font-semibold">Ref. ID</td>
                <td className="px-1 py-[2px]">:</td>
                <td className="border border-black px-1 py-[2px]">{get('crmLoanId')}</td>
              </tr>
              <tr>
                <td className="px-1 py-[2px] font-semibold">Name of the Borrower</td>
                <td className="px-1 py-[2px]">:</td>
                <td className="border border-black px-1 py-[2px]">{get('businessName')}</td>
              </tr>
              <tr>
                <td className="px-1 py-[2px] font-semibold">Name of the Owner</td>
                <td className="px-1 py-[2px]">:</td>
                <td className="border border-black px-1 py-[2px]"></td>
              </tr>
            </tbody>
          </table>

          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="px-1 py-[2px] font-semibold">Loan Amount</td>
                <td className="px-1 py-[2px]">:</td>
                <td className="border border-black px-1 py-[2px]">{formatBDT(profile?.loanAmount)}</td>
              </tr>
              <tr>
                <td className="px-1 py-[2px] font-semibold">Loan A/C Number</td>
                <td className="px-1 py-[2px]">:</td>
                <td className="border border-black px-1 py-[2px]">-</td>
              </tr>
              <tr>
                <td className="px-1 py-[2px] font-semibold">Unit Office, Territory</td>
                <td className="px-1 py-[2px]">:</td>
                <td className="border border-black px-1 py-[2px]">
                  {get('territory')}, {get('territory')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className="mt-4 w-full border-collapse">
          <thead>
            <tr>
              <th className={`${th} text-center`} colSpan={6}>
                Druti : Loan Document Checklist
              </th>
            </tr>
            <tr>
              <th className={th}>Document Name</th>
              <th className={th}>Document Type</th>
              <th className={th}>Doc. No.</th>
              <th className={th}>Update Date</th>
              <th className={th}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {[
              'Trade License',
              'E-TIN',
              'E-TIN Verification Copy',
              'Business Financial Relevant Documents',
              'Select',
              'Owners NID Copy',
              'Guarantors Recent passport size color photograph',
              'owners Vested NID Copy',
              'Guarantor NID Copy',
              'Guarantors Vertied NID Copy',
              'Letter of Undertaking (KIB)',
              'Select',
              'Select',
              'Select',
              'Select',
              'Business Premise Documents',
              'Business Premise Documents',
              'Recent passport size color photograph',
            ].map((name, idx) => (
              <tr key={`${name}-${idx}`}>
                <td className={td}>{name}</td>
                <td className={td}>-</td>
                <td className={td}>-</td>
                <td className={td}>-</td>
                <td className={td}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-[12px] font-semibold">At the time of Disbursement:</div>

        <div className="mt-3 grid grid-cols-3 gap-12 text-center text-[11px]">
          <div>
            <div>Documents Recived by: RO</div>
            <div className="mx-auto mt-14 h-0 w-[280px] border-t border-black"></div>
            <div className="mt-2">{get('roId')}</div>
            <div>PIN: {get('roId')}</div>
          </div>
          <div>
            <div>Documents Recived by: BDM</div>
            <div className="mx-auto mt-14 h-0 w-[280px] border-t border-black"></div>
            <div className="mt-2">{get('riskManagerName')}</div>
            <div>PIN: {get('riskManagerPins')}</div>
          </div>
          <div>
            <div>Documents Submitted By Owner</div>
            <div className="mx-auto mt-14 h-0 w-[280px] border-t border-black"></div>
            <div className="mt-2">{get('businessName')}</div>
          </div>
        </div>

        <div className="mt-8 text-[12px] font-semibold">At the time of Loan Settlement:</div>

        <div className="mt-3 grid grid-cols-2 gap-12 text-center text-[11px]">
          <div>
            <div>Documents Handed over By:</div>
            <div className="mx-auto mt-14 h-0 w-[360px] border-t border-black"></div>
            <div className="mt-2 font-semibold">(on behalf of AOD)</div>
          </div>
          <div>
            <div>Documents Received By</div>
            <div className="mx-auto mt-14 h-0 w-[360px] border-t border-black"></div>
            <div className="mt-2">{get('businessName')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentChecklist
