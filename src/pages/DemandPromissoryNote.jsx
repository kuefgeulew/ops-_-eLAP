/**
 * Demand promissory note — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function DemandPromissoryNote() {
  const { get, formatBDT, profile } = useCaseData()
  return (
    <div className="min-h-screen bg-white px-3 py-2 text-black">
      <div className="mx-auto w-full max-w-[1700px] font-['Arial']">
        <table className="mt-2 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black py-[4px] text-center text-[12px] font-semibold">
                DEMAND PROMISSORY NOTE
              </td>
            </tr>
            <tr>
              <td className="px-1 py-0">
                <div className="flex items-start justify-between pt-10">
                  <span className="font-semibold">{formatBDT(profile?.loanAmount)}</span>
                  <span className="font-semibold">
                    Date: <span className="inline-block min-w-[120px] border-b border-dotted border-black"></span>
                  </span>
                </div>

                <p className="mt-10">
                  I/We, <span className="inline-block min-w-[320px] border-b border-dotted border-black"></span> of
                  <span className="inline-block min-w-[250px] border-b border-dotted border-black">{get('businessName')}</span>{' '}
                  the
                  undersigned, promise to pay on demand to BRAC Bank Limited the sum of
                  <span className="inline-block min-w-[180px] border-b border-dotted border-black">{formatBDT(profile?.loanAmount)}</span> for the
                  value received with interest thereon from this date, at the rate of
                  <span className="inline-block min-w-[120px] border-b border-dotted border-black">{get('interest')}</span> per
                  month/annum with monthly/quarterly rests or at such rate as the Bank shall determine from time to
                  time.
                </p>

                <p className="mt-5">
                  All payments under this note shall be made free and clear of and without any deductions and
                  withholdings of any whatsoever.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-10 text-center text-[12px] font-semibold">
                  <div>Authorized Signature</div>
                  <div>Authorized Signature</div>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-10 pb-6">
                  <div className="mx-auto h-0 w-[360px] border-t border-dotted border-black"></div>
                  <div className="mx-auto h-0 w-[460px] border-t border-dotted border-black"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DemandPromissoryNote
