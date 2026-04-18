/**
 * Exclusion list, part one — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function ExclusionList() {
  const { get, formatBDT, profile } = useCaseData()
  void formatBDT
  void profile
  const th = 'border border-black px-1 py-[2px] text-[10px] font-semibold'
  const td = 'border border-black px-1 py-[2px] align-top text-[10px] leading-tight'

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

        <table className="mt-3 w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${th} text-center text-[14px]`} colSpan={4}>
                ENVIRONMENTAL &amp; SOCIAL RISK ASSESSMENT - EXCLUSION LIST
              </td>
            </tr>
            <tr>
              <td className={`${th} text-center text-[13px]`} colSpan={4}>
                Basic Information
              </td>
            </tr>
            <tr>
              <td className={td}>Date</td>
              <td className={td}></td>
              <td className={td}>Loan Assessment Date</td>
              <td className={td}>01-Jan-2026</td>
            </tr>
            <tr>
              <td className={td}>Name of Client/Account</td>
              <td className={td}></td>
              <td className={td}>Loan Proposal Name</td>
              <td className={td}>{get('businessName')}</td>
            </tr>
            <tr>
              <td className={td}>Transaction ID</td>
              <td className={td}></td>
              <td className={td}>CRM Loan ID</td>
              <td className={td}>{get('crmLoanId')}</td>
            </tr>
            <tr>
              <td className={td}>Location</td>
              <td className={td}></td>
              <td className={td}>Business Address</td>
              <td className={td}>SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14, {get('division')} City, {get('division')}, 3255, 502,1</td>
            </tr>
            <tr>
              <td className={td}>Industry / Sector</td>
              <td className={td}></td>
              <td className={td}>Cottage/Micro/Small/Medium/Large</td>
              <td className={td}>NON SME, Person Transport Agriculture Loan</td>
            </tr>
            <tr>
              <td className={td}>Product Manufactured / Traded</td>
              <td className={td}></td>
              <td className={td}>Name of Business Product</td>
              <td className={td}>Cultivator</td>
            </tr>
            <tr>
              <td className={td}>Core Market</td>
              <td className={td}></td>
              <td className={td}>Business Operational Period/Nature</td>
              <td className={td}>-</td>
            </tr>
            <tr>
              <td className={td}>Name of Relationship Officer, PIN, Phone</td>
              <td className={td}></td>
              <td className={td}>Shibir DBS</td>
              <td className={td}>2666 | -</td>
            </tr>
            <tr>
              <td className={td}>Business line (Sub-sector)</td>
              <td className={td}></td>
              <td className={td}>As per SBS Guideline 2013</td>
              <td className={td}>00901001</td>
            </tr>
            <tr>
              <td className={td}>DOE categorisation</td>
              <td className={td}></td>
              <td className={td}>Green/ Orange A/ Orange B/ Red</td>
              <td className={td}>Green</td>
            </tr>
            <tr>
              <td className={td}>Transaction Type as Table 1 of Guidelines</td>
              <td className={td}></td>
              <td className={td}>As per ESRM Guideline 2017</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-1 w-full border-collapse">
          <thead>
            <tr>
              <th className={`${th} w-[40px]`}>No.</th>
              <th className={th}>Question</th>
              <th className={`${th} w-[320px]`}>Answer</th>
              <th className={`${th} w-[220px]`}>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-center`}>1</td>
              <td className={td}>
                Production or trade in any product or activity deemed illegal under host country laws or regulations
                or international conventions and agreements, or subject to international bans, such as pharmaceuticals,
                pesticides/herbicides, ozone depleting substances, PCBs, wildlife or products regulated under the
                Convention on International Trade in Endangered Species (CITES). Links: United Nations (UN) list of
                banned chemicals and products
              </td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>2</td>
              <td className={td}>
                Ship breaking/ trading activities which include: 1. Ships with prevalent asbestos use (for e.g.
                passenger cruise); 2. Ships listed on the Greenpeace blacklist; 3. Ships not certified “gas free” for
                hot work
              </td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>3</td>
              <td className={td}>Drift net fishing, deep sea bottom trawling, or fishing with the use of explosives or cyanide</td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>4</td>
              <td className={td}>Operations impacting UNESCO World Heritage Site and/or Ramsar site</td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>5</td>
              <td className={td}>Illegal logging, and logging operations or conversion of land for plantation use in primary tropical moist forests</td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>6</td>
              <td className={td}>Production or activities involving forced labour/ child labour</td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>7</td>
              <td className={td}>Production or trade in: 1. Weapons and munitions 2. Tobacco 3. Gambling, casino 4. Pornography</td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-center`}>8</td>
              <td className={td}>
                Production or activities that impinge on the lands owned, or claimed under adjudication, by indigenous
                peoples, without full documented consent of such peoples
              </td>
              <td className={td}>No</td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-24 flex justify-center">
          <div className="w-[520px] border-t border-[#666] text-center text-[12px] leading-tight">
            BDM/TM/RH Name: {get('riskManagerName')} ({get('riskManagerPins')})
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExclusionList
