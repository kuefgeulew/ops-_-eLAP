/**
 * Charge documents from DPN through checklist — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function ChargeDocuments() {
  const { get, formatBDT, profile } = useCaseData()
  const c = 'border border-[#2d2d2d] px-1 py-[1px] align-top text-[10px] leading-[1.25]'

  return (
    <div className="min-h-screen bg-white px-3 py-3 text-black">
      <div className="mx-auto w-full max-w-[1600px] font-['Arial'] text-[10px]">
        <div className="border border-[#2d2d2d]">
        <div className="border-b border-[#2d2d2d] py-[2px] text-center text-[10px] font-semibold tracking-wide">
          DEMAND PROMISSORY NOTE
        </div>

        <div className="px-2 pb-3 pt-6">
          <div className="flex items-start justify-between text-[10px]">
            <span>{formatBDT(profile?.loanAmount)}</span>
            <span className="pr-10 text-[10px]">
              <b>Date:</b>&nbsp; 23-Jan-2026
            </span>
          </div>

          <p className="mt-12 text-[10px] leading-[1.3]">
            I/We,&nbsp;
            <b>{get('businessName')}, Proprietor of {get('businessName')}</b> the undersigned, promise to pay on demand to BRAC Bank
            PLC the sum of&nbsp;
            <b>{formatBDT(profile?.loanAmount)} (Taka Ten Lakh only)</b> for the value received with interest thereon from this date, at
            the rate of&nbsp;
            <b>{get('interest')}</b> % per month/annum with monthly/quarterly rests or at such rate as the Bank shall determine
            from time to time.
          </p>

          <p className="mt-6 text-[10px] leading-[1.3]">
            All payments under this note shall be made free and clear of and without any deductions and withholdings
            of any kind whatsoever.
          </p>

          <div className="mt-20 grid grid-cols-2 gap-16 text-center text-[10px] font-semibold">
            <div>Authorized Signature</div>
            <div>Authorized Signature</div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-16">
            <div className="border-t border-dashed border-[#2d2d2d]"></div>
            <div className="border-t border-dashed border-[#2d2d2d]"></div>
          </div>
        </div>
        </div>

        <table className="mt-2 w-full border-collapse border border-[#2d2d2d] text-[10px]">
          <tbody>
            <tr>
              <td className={c}>Date: 23-Jan-2026</td>
            </tr>
            <tr>
              <td className={c}>BRAC Bank Limited</td>
            </tr>
            <tr>
              <td className={c}>{get('branchName')}</td>
            </tr>
            <tr>
              <td className="border border-[#2d2d2d] py-[2px] text-center text-[10px] font-semibold">
                GENERAL LOAN AGREEMENT
              </td>
            </tr>
            <tr>
              <td className={c}>
                <b>Dear Sir(s),</b>
                <br />
                In consideration of BRAC Bank Limited, a banking company hereafter called the &quot;Bank&quot; (which
                expression shall, where the context so admits, include its successors and assigns) making or continuing
                advance or otherwise giving credit or providing finance to us under one or more modes of advance or
                otherwise and/or by way of banking facilities or accommodation of any kind (hereinafter collectively
                referred to as &quot;Loans&quot;) up to a limit of <b>{formatBDT(profile?.loanAmount)} (Taka Ten Lakh only)</b>, I/We of
                <b> {get('businessName')}, at - {get('territory')}</b> hereby agree to the terms and conditions.
              </td>
            </tr>
            <tr>
              <td className={c}>
                <b>HEREBY AGREE, UNDERTAKE, WARRANT, ASSURE AND COVENANT AS FOLLOWS:</b>
                <br />
                <b>1. Definition:</b> The term &quot;Loan&quot;, &quot;Security&quot;, &quot;Pledge&quot;, &quot;Hypothecation&quot;,
                &quot;Guarantee&quot;, &quot;Bond&quot;, &quot;Court&quot; and all other terms shall carry the meanings
                applicable under relevant laws and banking practice.
                <br />
                <b>2. Sanction Letter:</b> Sanction letter of any or all credit facility, letter of renewal,
                enhancement or rearrangement of credit facilities are deemed to be part of this agreement.
                <br />
                <b>3. General Rights in Security:</b> On the occurrence of any event of default, the Bank may at its
                option, without incurring any liability and without discharging or otherwise affecting any liability of
                the Borrower:
                <br />
                (a) exercise any powers with respect to any Security with the same force and effect as an absolute
                owner thereof;
                <br />
                (b) transfer any Security to the name of the Bank;
                <br />
                (c) execute all voting rights;
                <br />
                (d) remove or have removed any Security from any state or country to any other state or country;
                <br />
                (e) pledge obligations issued or guaranteed by the Government of Bangladesh or any local authority;
                <br />
                (f) demand and receive all payments and distributions under any Security;
                <br />
                (g) the Bank may act on behalf of the Borrower in its name or in the name of anyone from whom it has
                acted as agent and collect monies;
                <br />
                (h) sell any Security with constituting an obligation for the payment of money in any manner provided;
                <br />
                (i) apply proceeds of any Security to hold such proceeds as Security;
                <br />
                (j) surrender or release any Security to the Borrower or by way of settlement by the Borrower.
              </td>
            </tr>
            <tr>
              <td className={c}>
                <b>4. Bank&apos;s Obligation as to Security:</b> The Bank shall be under no obligation in any manner in
                connection with the management of the Security. The Bank shall have no responsibility or liability for
                any Security or any instrument in any way relating thereto.
                <br />
                <b>5. Acceleration of Maturity:</b> The Bank, at its own discretion, may declare and accelerate the
                date of maturity of the Loans, in the event that:
                <br />
                (a) the Borrower fails to furnish further/additional security as required; or
                <br />
                (b) any covenant in this Agreement is breached; or
                <br />
                (c) the Borrower fails to perform terms and conditions herein contained; or
                <br />
                (d) any policy of insurance constituting part of the Security is not paid when due; or
                <br />
                (e) any person involved with the Borrower is suspended/terminated/excluded by authority; or
                <br />
                (f) petition for dissolution/bankruptcy/insolvency is filed or receiver is appointed; or
                <br />
                (g) the Borrower, being a corporation, passes any resolution for winding up; or
                <br />
                (h) any event occurs which, in the Bank&apos;s opinion, materially and adversely affects repayment.
              </td>
            </tr>
            <tr>
              <td className={c}>
                ৬) The Borrower expressly waives and forever releases all present and future legal or equitable rights
                in relation to any Security in favor of the Bank and agrees that, where permitted by law, the Bank may
                enforce recovery without prior notice and realize dues by sale, assignment or application of Security.
                <br />
                <b>7. Expenses:</b> All costs, expenses and legal fees incurred by the Bank for enforcement,
                preservation and realization of dues or Security shall be recoverable from the Borrower/Guarantor and
                added to the liabilities.
                <br />
                <b>8. Liability for unpaid balance:</b> Notwithstanding realization of Security, if total proceeds are
                insufficient to fully adjust all liabilities, the Borrower remains liable for unpaid balance until full
                and final settlement.
                <br />
                <b>9. Rights cumulative:</b> No delay or omission by the Bank in exercising any right or remedy shall
                operate as waiver; rights and remedies are cumulative and may be exercised at any time.
                <br />
                <b>10. Waiver of presentment:</b> The Borrower waives presentment, protest, notice of protest,
                dishonor and all related notices regarding Loans/Security.
                <br />
                <b>11. Notices:</b> Any notice by the Bank may be given by post/courier/telegram/email/other lawful
                means to the latest known address of the Borrower and shall be deemed duly served.
                <br />
                <b>12. Participation/assignment:</b> The Bank may assign, transfer or participate any portion of the
                Loans/Security, and corresponding rights, to any person, institution or assignee.
                <br />
                <b>13. Set-off:</b> The Bank may at any time set-off or transfer balances from any account of the
                Borrower with the Bank against liabilities due under the Loans.
                <br />
                <b>14. Renewal/continuation:</b> This agreement shall continue to remain valid for all present and
                future facilities, renewals, restructures and amendments unless expressly discharged by the Bank.
                <br />
                <b>15. Joint and several liability:</b> Where there is more than one Borrower/Guarantor, liabilities
                shall be joint and several unless expressly stated otherwise.
                <br />
                <b>16. Continuity/entire agreement:</b> This agreement supplements sanction terms and survives closure,
                termination or settlement to the extent of outstanding obligations and indemnities.
                <br />
                The singular includes plural and vice versa. This agreement is executed for convenience and shall not
                affect interpretation of any of its provisions.
              </td>
            </tr>
            <tr>
              <td className={c}>
                IN WITNESS whereof we executed these presents on the day, month and year first hereinabove written.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-2 grid grid-cols-2 gap-20 text-[10px] font-semibold">
          <div className="text-center">Authorized Signature</div>
          <div className="text-center">Authorized Signature</div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-20">
          <div className="border-t border-dashed border-[#2d2d2d]"></div>
          <div className="border-t border-dashed border-[#2d2d2d]"></div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-20 text-[10px]">
          <div>
            <div>
              <b>Witness: 1</b>
            </div>
            <div className="mt-1">Name&nbsp;&nbsp;&nbsp;&nbsp;....................................................</div>
            <div className="mt-1">Address&nbsp;&nbsp;....................................................</div>
          </div>
          <div>
            <div>
              <b>Witness: 2</b>
            </div>
            <div className="mt-1">Name&nbsp;&nbsp;&nbsp;&nbsp;....................................................</div>
            <div className="mt-1">Address&nbsp;&nbsp;....................................................</div>
          </div>
        </div>

        <table className="mt-4 w-full border-collapse border border-[#2d2d2d] text-[10px]">
          <tbody>
            <tr>
              <td className="border border-[#2d2d2d] py-[2px] text-center text-[10px] font-semibold">
                DEBIT AUTHORITY
              </td>
            </tr>
            <tr>
              <td className={c}>
                <b>Date:</b> 23-Jan-2026
                <br />
                <br />
                To
                <br />
                The Manager
                <br />
                BRAC Bank Limited
                <br />
                {get('branchName')}
                <br />
                <br />
                In consideration of granting me/us a <b>Druti</b> loan, I/we hereby authorize the bank to debit
                my/our savings/current/business account no. ______________________________ on the installment repayment
                date and/or immediate next installment due date towards realization of the installment charged every
                month/our loan account no. ______________________________ as per sanction letter duly accepted by you
                under reference no. ______________________________ dated ______________________________ including
                mandatory security deposit and any amendment/renewal/enhancement of the aforesaid loan.
                <br />
                <br />
                Sincerely Yours,
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-3 grid grid-cols-2 gap-20 text-[10px] font-semibold">
          <div className="text-center">Applicant Name</div>
          <div className="text-center">Seal &amp; Signature of the client</div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-20 text-[10px]">
          <div className="pl-28">{get('businessName')}</div>
          <div className="border-t border-dashed border-[#2d2d2d]"></div>
        </div>

        <div className="mt-6 text-center text-[10px] font-semibold">Verified By</div>

        <div className="mx-auto mt-14 w-[62%] border-t border-dashed border-[#2d2d2d]"></div>
        <div className="text-center text-[10px] font-semibold">Seal &amp; Signature of the Initiator</div>

        <table className="mt-4 w-full border-collapse border border-[#2d2d2d] text-[10px]">
          <tbody>
            <tr>
              <td className="border border-[#2d2d2d] py-[2px] text-center text-[10px] font-semibold">
                Personal Guarantee Form
              </td>
            </tr>
            <tr>
              <td className={c}>
                <div className="flex justify-between">
                  <div>
                    To,
                    <br />
                    The Manager
                    <br />
                    {get('branchName')}
                    <br />
                    BRAC Bank pLC
                  </div>
                  <div>
                    <b>Date:</b> 23-Jan-2026
                  </div>
                </div>
                <br />
                Dear Sir/Madam,
                <br />
                In consideration of your granting loan facility (hereinafter referred to as the &quot;Loan&quot;) amounting
                to Taka (in number) <b>{formatBDT(profile?.loanAmount)}</b> (in word) <b>Taka Ten Lakh only</b>, vide sanction advice no. /
                loan contract no. <b>{get('crmLoanId')}</b> (hereinafter referred to as the &quot;Loan Contract&quot;) dated
                23-Jan-2026 in favor of firm <b>{get('businessName')}</b> (hereinafter referred to as the &quot;Principal
                Debtor&quot;), I/We <b>{get('businessName')}</b> (hereinafter referred to as the &quot;Guarantor&quot;), present
                address: HOUSE#3/ ROAD#7 BLOCK B, SECTION 14, {get('division')}, {get('division')} - 4357, {get('division')}, permanent address:
                MIRZANAGAR TOXIT UDDIN HAZI BARI, NATESHOR, KUMILLA, {get('division')} Sadar, {get('division')} - 3821, {get('division')}, NID no
                19957618377006527 do hereby irrevocably and unconditionally guarantee you as follows:
              </td>
            </tr>
            <tr>
              <td className={c}>
                1. In the event of any default on part of the Principal Debtor, I will be liable to pay the amount of
                the Loan along with interest accrued and any charges and fees applicable thereon within 07 (seven)
                working days of the receipt of your first demand notice without raising any question or referring to
                the Principal Debtor.
                <br />
                2. In the event of failure to pay the guaranteed amount within the stipulated time, I shall be liable
                to pay any late payment fees, charges, compensations etc. decided by the Bank from time to time until
                the payment is made.
                <br />
                3. My liability under this Loan Contract is co-extensive with that of the Principal Debtor in respect
                of the said Loan, the Bank shall be entitled to implead me as a defendant at any stage in any suit
                against the Principal Debtor.
                <br />
                4. This guarantee shall be a continuous security and shall remain valid until full and final settlement
                of all dues.
                <br />
                5. This guarantee shall not be discharged or ceased by any partial payment of the Loan by the
                Principal Debtor or by the Guarantor.
                <br />
                6. My liability under this guarantee shall remain in full force notwithstanding any agreement between
                the parties to grant extension, indulgence or concession.
                <br />
                7. This guarantee constitutes a legally binding obligation upon me and my successors.
                <br />
                8. This instrument supersedes all previous oral or written arrangements related to this guarantee.
                <br />
                9. This guarantee shall be construed and governed by the laws of Bangladesh.
                <br />
                10. This guarantee shall be treated as an instrument legally enforceable at any appropriate court.
                <br />
                11. Any notice by post/courier to my stated address shall be deemed duly served.
                <br />
                12. I hereby undertake not to do any act prejudicial to the Bank&apos;s right in any security.
                <br />
                13. In witness whereof I have executed this Personal Guarantee on the date mentioned above.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-3 grid grid-cols-2 gap-20 text-[10px]">
          <div>
            <div className="border-t border-dashed border-[#2d2d2d]"></div>
            <div className="mt-1">
              <b>Guarantor&apos;s signature</b>
            </div>
            <div>
              <b>Name:</b> {get('businessName')}
            </div>
            <div>
              <b>Contact No:</b> 01845707216, 01845707266,
            </div>
          </div>
          <div>
            <div className="border-t border-dashed border-[#2d2d2d]"></div>
            <div className="mt-1">
              <b>Thumb Impression (Both hand) of the Guarantor</b>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-20 text-[10px]">
          <div>
            <div>
              <b>Witnesses 1</b>
            </div>
            <div className="mt-1 border-t border-dashed border-[#2d2d2d]"></div>
            <div className="mt-1">
              <b>Signature:</b>
            </div>
          </div>
          <div>
            <div>
              <b>Witnesses 2</b>
            </div>
            <div className="mt-1 border-t border-dashed border-[#2d2d2d]"></div>
            <div className="mt-1">
              <b>Signature:</b>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-20 text-[10px]">
          <div>
            <div>
              <b>Guarantor&apos;s signature</b>
            </div>
            <div>
              <b>Name:</b> MD SAHIDUL ISLAM
            </div>
            <div>
              <b>Contact No:</b> 01673169123,
            </div>
          </div>
          <div>
            <div>
              <b>Thumb Impression (Both hand) of the Guarantor</b>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-20 text-[10px]">
          <div>
            <div>
              <b>Witnesses 1</b>
            </div>
            <div className="mt-2 border-t border-dashed border-[#2d2d2d]"></div>
            <div className="mt-1">
              <b>Signature:</b>
            </div>
            <div>
              <b>Full name:</b>
            </div>
            <div>
              <b>S/O or D/O or W/O:</b>
            </div>
            <div>
              <b>Address:</b>
            </div>
          </div>
          <div>
            <div>
              <b>Witnesses 2</b>
            </div>
            <div className="mt-2 border-t border-dashed border-[#2d2d2d]"></div>
            <div className="mt-1">
              <b>Signature:</b>
            </div>
            <div>
              <b>Full name:</b>
            </div>
            <div>
              <b>S/O or D/O or W/O:</b>
            </div>
            <div>
              <b>Address:</b>
            </div>
          </div>
        </div>

        <table className="mt-4 w-full border-collapse border border-[#2d2d2d] text-[10px]">
          <tbody>
            <tr>
              <td className="border border-[#2d2d2d] py-[2px] text-center text-[10px] font-semibold" colSpan={2}>
                DOCUMENTATION CHECKLIST - Unsecured Loan (SME) for Operations
              </td>
            </tr>
            <tr>
              <td className="border border-[#2d2d2d] py-[2px] text-center font-semibold">
                Mandatory Documentation
              </td>
              <td className="w-[70px] border border-[#2d2d2d] py-[2px] text-center font-semibold">Status</td>
            </tr>
            <tr><td className={c}>1. Loan application duly filled up &amp; signed by the customer</td><td className={c}></td></tr>
            <tr><td className={c}>2. Customer &amp; Guarantor NID, verification report copy (with NID sign declaration form- if applicable)</td><td className={c}></td></tr>
            <tr><td className={c}>3. Customer&apos;s &amp; guarantor&apos;s passport size color photograph</td><td className={c}></td></tr>
            <tr><td className={c}>4. Demand Promissory Note</td><td className={c}></td></tr>
            <tr><td className={c}>5. General Loan Agreement</td><td className={c}></td></tr>
            <tr><td className={c}>6. Personal Letter of Guarantee</td><td className={c}></td></tr>
            <tr><td className={c}>7. Debit Authority Form (Fully Filled up)</td><td className={c}></td></tr>
            <tr><td className={c}>8. CRM Approval(with approver seal, sign &amp; date)</td><td className={c}></td></tr>
            <tr><td className={c}>9. ( i) 01 PDC for every six installment for Term Loan (ii) 01 PDC for total limit for Non-EMI based facility(Fully Filled up)</td><td className={c}></td></tr>
            <tr><td className={c}>10. Two sets of Pre-formed Sanction Letter with customer acceptance</td><td className={c}></td></tr>
            <tr><td className={c}>11. Acknowledgment of Mandatory Deposit and Consent for Debit Instruction against the Account</td><td className={c}></td></tr>
            <tr><td className={c}>12. Up to date Trade License</td><td className={c}></td></tr>
            <tr><td className={c}>13. E-TIN/Up to date Tax Clearance Certificate for loan amount 5 lac above with TIN verification report</td><td className={c}></td></tr>
            <tr><td className={c}>14. Fire Insurance Format</td><td className={c}></td></tr>
            <tr><td className={c}>15. Life Insurance Format ( where applicable)</td><td className={c}></td></tr>
            <tr><td className={c}>16. CDR/Mutation &amp; Up date Khajna (where applicable)</td><td className={c}></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ChargeDocuments

