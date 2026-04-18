/**
 * Druti charge document pack; first section is the demand promissory note.
 */
import useCaseData from '../hooks/useCaseData'

function DrutiChargeDocument() {
  const { get, formatBDT, profile } = useCaseData()
  return (
    <div className="min-h-screen bg-white px-3 py-2 text-black">
      <div className="mx-auto w-full max-w-[1750px] font-['Arial']">
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="border border-black px-2 py-[1px] text-[11px] leading-none"
          >
            Print
          </button>
        </div>

        <table className="w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black py-[3px] text-center text-[12px] font-semibold">
                DEMAND PROMISSORY NOTE
              </td>
            </tr>
            <tr>
              <td className="px-2 py-0">
                <div className="flex items-start justify-between pt-10">
                  <span className="font-semibold">{formatBDT(profile?.loanAmount)}</span>
                  <span className="pr-12 font-semibold">Date: 23-Jan-2026</span>
                </div>

                <p className="mt-16">
                  I/We, of <b>{get('businessName')}</b> the undersigned, promise to pay on demand to BRAC Bank Limited the
                  sum of <b>{formatBDT(profile?.loanAmount)} (Taka Ten Lakh only)</b> for the value received with interest thereon from this
                  date, at the rate of <b>{get('interest')} %</b> per month/annum with monthly/quarterly rests or at such rate as
                  the Bank shall determine from time to time.
                </p>

                <p className="mt-6">
                  All payments under this note shall be made free and clear of and without any deductions and
                  withholdings of any kind whatsoever.
                </p>

                <div className="mt-28 grid grid-cols-2 gap-10 text-center text-[12px] font-semibold">
                  <div>Authorized Signature</div>
                  <div>Authorized Signature</div>
                </div>

                <div className="mt-16 mb-4 grid grid-cols-2 gap-10 pb-2">
                  <div className="mx-auto h-0 w-[360px] border-t border-dotted border-black"></div>
                  <div className="mx-auto h-0 w-[460px] border-t border-dotted border-black"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black text-[10px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black px-2 py-[2px]">
                <div>Date: 23-Jan-2026</div>
                <div>BRAC Bank Limited</div>
                <div>{get('branchName')}</div>
              </td>
            </tr>
            <tr>
              <td className="border border-black py-[3px] text-center text-[12px] font-semibold">
                GENERAL LOAN AGREEMENT
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">
                <p className="mb-1">
                  Dear Sir(s),
                </p>
                <p className="mb-1">
                  In consideration of BRAC Bank Limited, a banking company hereafter called the &quot;Bank&quot; (which
                  expression shall, where the context so admits, include its successors and assigns) making or
                  continuing advance or otherwise giving credit or providing finance to us under one or more modes of
                  finance or otherwise affording any other banking facilities or other accommodation of any kind
                  (hereinafter collectively referred to as &quot;Loans&quot;) up to a limit of <b>{formatBDT(profile?.loanAmount)} (Taka Ten Lakh
                  only)</b>, I/We of <b>{get('businessName')}</b>, at - {get('territory')}, {get('territory')}, {get('division')}, {get('city')} 1206
                  {' '}
                  hereinafter called the &quot;Borrower&quot; (which expression shall, where the context so admits, include its
                  heirs/successors and assigns).
                </p>
                <p className="mb-1 font-semibold">HEREBY AGREE, UNDERTAKE, WARRANT, ASSURE AND COVENANT AS FOLLOWS:</p>
                <p className="mb-1">
                  <b>1. Definition:</b> The term &quot;Loan&quot;, &quot;Security&quot;, &quot;Pledge&quot;, &quot;Hypothecation&quot;, &quot;Guarantee&quot;,
                  &quot;Bond&quot;, &quot;Court&quot; and all other terms will be defined as per definition of relevant existing laws of
                  Bangladesh relating to the financial institution and its business.
                </p>
                <p className="mb-1">
                  <b>2. Terms:</b> Interest and tenor of all credit facility, letter of installment, letter of
                  amendment or re-arrangement of credit facility are deemed to be part of this agreement.
                </p>
                <p className="mb-1">
                  <b>3. General Rights in Security:</b> On the occurrence of any event of default, the Bank may at its
                  option, without notice and without incurring any liability and without discharging or otherwise
                  affecting any liability of the Borrower thereon:
                </p>
                <p className="mb-1">
                  (a) exercise any or all powers with respect to any Security with the same force and effect and in
                  the same manner as an absolute owner thereof;
                </p>
                <p className="mb-1">(b) transfer any Security to the name of the Bank;</p>
                <p className="mb-1">
                  (c) exercise all voting powers;
                </p>
                <p className="mb-1">
                  (d) remove or transfer any Security from state or country to any other state or country;
                </p>
                <p className="mb-1">
                  (e) realize any obligation issued or guaranteed by the Government of Bangladesh or any local
                  authority which comprises the Security either alone or jointly with other collateral to the Bangladesh
                  Bank or any other authority in Bangladesh to secure deposit or other obligations of the Bank whether
                  or not in excess of the Loans to the Borrower by the Bank;
                </p>
                <p className="mb-1">
                  (f) demand and receive all payments and distributions of any Security (including principal, premium,
                  interest, dividend or other income, share dividends and rights to subscribe);
                </p>
                <p className="mb-1">
                  (g) the Bank may act on behalf of the Borrower in its name or in the name of any person or as agent,
                  demand, sue for, collect and receive any exchange for any Security or make any compromise or
                  settlement deemed desirable with respect thereto; monies, securities or other property at any time
                  due, payable or receivable on account of or with respect to any such Security, arrange for payment of
                  any such Security in installments, or otherwise modify the terms of any such Security;
                </p>
                <p className="mb-1">
                  (h) apply the net cash proceeds of any Security, whether principal or interest, to the principal and
                  interest if any payable on any loan, or continue to hold such proceeds as Security;
                </p>
                <p className="mb-1">
                  (i) surrender or realize any Security to the Borrower, or exchange any Security for another Security
                  provided by the Borrower.
                </p>
                <p className="mb-1">
                  <b>4. Bank&apos;s obligation as to Security:</b> The Bank shall be under no obligation in any manner in
                  connection with the management of the Security. The Bank shall have no responsibility or liability for
                  any Security or any instrument in any way relating thereto or any signature thereon, or any instrument
                  representing or purporting to represent property or goods.
                </p>
                <p className="mb-1">
                  <b>5. Acceleration of Maturity:</b> The Bank, at its own discretion, may decide to accelerate the due
                  date or maturity of the Loans, in the event that:
                </p>
                <p className="mb-1">
                  (a) the Borrower fails to furnish further/additional security or make payments as required; or
                </p>
                <p className="mb-1">
                  (b) any sum becoming due and unpaid by the Borrower within 7 days of becoming due; or
                </p>
                <p className="mb-1">
                  (c) the Borrower shall fail to perform any terms and conditions herein contained; or
                </p>
                <p className="mb-1">
                  (d) the prime rate or any policy insurance constituting a part of the Security is not paid when due,
                  or such premium if paid by the operation of provision in any such policy for automatic premium loans
                  by the insurer with or without the consent of the Bank; or
                </p>
                <p className="mb-1">
                  (e) the Borrower (i) dies, (ii) becomes insolvent (however evident), (iii) commits any act of
                  insolvency, (iv) indebtedness, (v) makes a general assignment for the benefit of creditors, (vi)
                  suspends the operation of the Borrower&apos;s business, (vii) is expelled or restrained from any exchange
                  or trade association, (viii) admits in writing the inability of the Borrower to pay the Borrower&apos;s
                  debts generally as they become due, or
                </p>
                <p className="mb-1">
                  (f) any petition in bankruptcy or insolvency, or for a reorganization, composition, extension of the
                  appointment of a receiver or other relief under any law relating to bankruptcy, insolvency, the relief
                  of debtors or the liquidation or adjustment of indebtedness is filed by or against the Borrower or the
                  property of the Borrower; or
                </p>
                <p className="mb-1">
                  (g) the Borrower, being a corporation, a resolution, for its winding up is passed or an order is made
                  for its winding up; or
                </p>
                <p className="mb-1">
                  (h) any warrant, order of attachment, tax lien or levy, restraint or appointment or sequestration is
                  issued against any of the property of the Borrower by any receiver, court or governmental authority to
                  take possession or control of any substantial part of such property or control over the affairs and
                  obligations of the Borrower.
                </p>
                <p className="mb-1">
                  (i) any of the events described in sub-divisions (e) through (h) above shall occur (1) with respect
                  to any maker, obligor, endorser, guarantor, surety, issuer or other person liable, upon or for any
                  loan or Security or any partnership of which the Borrower or any such person may be a member, (2)
                  with respect to the property of any such person or partnership, then and in any such event at all
                  Loans shall be due and payable forthwith without prevention or demand for payment which are hereby
                  expressly waived and thereafter all Loans shall bear interest at the legal rate (if higher than the
                  rate then applicable thereto), provided however, that the Bank in its sole discretion may be notice in
                  writing waive, suspend or modify the effect of any such event upon any Loan either before or after the
                  same shall have occurred.
                </p>
                <p className="mb-1">
                  <b>6. Realization on Security:</b> Upon non-payment of interest or non-payment of any instalment or
                  non-payment of principal on any loan that is due or becoming due, the Bank may enforce, collect and
                  realize the dues by sale of the Security, assignment, set-off, application and otherwise.
                </p>
                <p className="mb-1">
                  <b>7. Account:</b> That the account in the books of the Bank shall be conclusive proof against
                  Borrower and Guarantor in any legal proceedings against them in all courts of law and elsewhere.
                </p>
                <p className="mb-1">
                  <b>8. Expenses:</b> The Borrower shall, at Borrower&apos;s own cost, provide and maintain all required
                  and valid documents for support of any legal rights over and in respect of the Security and shall pay
                  all expenses incurred by the Bank in relation to the Security.
                </p>
                <p className="mb-1">
                  <b>9. Liability for Unpaid Balance, Return of Security:</b> Notwithstanding realization by the Bank,
                  the Borrower remains liable for unpaid balances of all loans with interest, principal and other sums
                  until fully paid, even if any Security is returned to the Borrower.
                </p>
                <p className="mb-1">
                  <b>10. Rights Cumulative, No Waiver:</b> Rights and remedies are cumulative and non-exclusive and any
                  right or remedy exercised in any jurisdiction is without prejudice to rights in other jurisdictions.
                </p>
                <p className="mb-1">
                  <b>11. Waiver of Presentment:</b> The Borrower waives presentment (except for acceptance when
                  necessary), protest, notice of protest and notice of dishonor of any and all Instruments included in
                  the Loans or the Security.
                </p>
                <p className="mb-1">
                  <b>12. Notice:</b> Service of process, demands for additional Security and any other demands/notices to
                  the undersigned may be by telephone, text or telegram, e-mail to address provided by the Borrower, by
                  letter or by publication in newspaper.
                </p>
                <p className="mb-1">
                  <b>13. Participation:</b> The Bank may assign part or all of any Loan or Security and permit
                  participation in loans by any lender in all or any manner at terms agreed by the Bank.
                </p>
                <p className="mb-1">
                  <b>14. Lien and Set Off:</b> Borrower declares and acknowledges deposits and interests maintained with
                  the Bank are held as security for repayment and the Bank may set off such deposits/interests to adjust
                  liabilities due from the Borrower at any time.
                </p>
                <p className="mb-1">
                  <b>15. Debit Authority:</b> Borrower authorizes the Bank to debit Borrower&apos;s account(s) for all dues
                  toward installments, charges and costs relating to the aforesaid loans.
                </p>
                <p className="mb-1">
                  <b>16. Continuing Agreement:</b> This agreement applies to all existing and future transactions
                  contemplated as of the date hereof and to all transactions between the Bank and Borrower unless closed.
                </p>
                <p className="mb-1">
                  If this agreement is signed or otherwise executed by or on behalf of more than one party, the
                  obligations and liabilities of such parties shall be deemed joint and several unless expressly stated
                  to the contrary.
                </p>
                <p className="mb-1">
                  It is also understood that any word appearing in the singular will also apply to the plural and vice
                  versa.
                </p>
                <p className="mb-1">
                  The subject-headings of this agreement are for the purpose of convenience only and shall not affect the
                  construction or interpretation of any of its provisions.
                </p>
                <p className="mb-2">
                  IN WITNESS WHEREOF we executed these presents on the day, month and year first hereinabove written.
                </p>

                <div className="mt-3 grid grid-cols-2 gap-10 text-center text-[12px] font-semibold">
                  <div>Authorized Signature</div>
                  <div>Authorized Signature</div>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-10">
                  <div className="mx-auto h-0 w-[420px] border-t border-dotted border-black"></div>
                  <div className="mx-auto h-0 w-[420px] border-t border-dotted border-black"></div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-10 text-[11px]">
                  <div>
                    <div className="mb-1 font-semibold">Witness: 1</div>
                    <div className="mb-1">Name ............................................................</div>
                    <div>Address .........................................................</div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Witness: 2</div>
                    <div className="mb-1">Name ............................................................</div>
                    <div>Address .........................................................</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black py-[3px] text-center text-[12px] font-semibold">
                DEBIT AUTHORITY
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <p className="mb-8">Date: 23-Jan-2026</p>

                <p>To</p>
                <p>The Manager</p>
                <p>BRAC Bank Limited</p>
                <p>{get('branchName')}</p>

                <p className="mt-2">
                  In consideration of granting me/us a Druti loan, we hereby authorize the Bank to debit my/our
                  savings/current/business account no. ______________________________ on the installment repayment date
                  and/or immediate next installment due date towards realization of the installment charged over my/our
                  loan account ______________________________ as per sanction letter duly accepted by you under
                  reference no. __________________ dated __________________ including mandatory security deposit and any
                  amendment/renewal/enhancement of the aforesaid loan.
                </p>

                <p className="mt-8">Sincerely Yours,</p>

                <div className="mt-2 grid grid-cols-2 gap-10 text-center font-semibold">
                  <div>Applicant Name</div>
                  <div>Seal &amp; Signature of the client</div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-10 text-center">
                  <div>{get('businessName')}</div>
                  <div></div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-10">
                  <div></div>
                  <div className="mx-auto h-0 w-[420px] border-t border-dotted border-black"></div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-10 text-center font-semibold">
                  <div></div>
                  <div>Verified By</div>
                </div>

                <div className="mt-24">
                  <div className="mx-auto h-0 w-[620px] border-t border-dotted border-black"></div>
                  <div className="mt-1 text-center font-semibold">Seal &amp; Signature of the Initiator</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black text-[10px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black px-2 py-[2px]">
                <div>Date: 23-Jan-2026</div>
                <div>To</div>
                <div>The Manager</div>
                <div>BRAC Bank Limited</div>
                <div>{get('branchName')}</div>
              </td>
            </tr>
            <tr>
              <td className="border border-black py-[3px] text-center text-[12px] font-semibold">
                LETTER OF GUARANTEE
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">
                <p className="mb-1">
                  In consideration of your making or continuing advances or otherwise giving or continuing credit or
                  accommodation or other banking facilities to <b>&quot;{get('businessName')}&quot;</b> hereinafter called the
                  <b>&quot; Principal &quot;</b>, I <b>&quot;{get('businessName')}&quot;</b> the undersigned, Guarantee to you due repayment
                  within 3 (three) business days after demand of all monies which shall at any time be due to you from
                  the Principal, in any shape or form together with interest, charges, costs etc. Provided that the
                  total amount receivable from me under this Guarantee shall be the Principal sum of <b>{formatBDT(profile?.loanAmount)}
                  (Taka Ten Lakh only)</b> exclusive of interest, costs and charges and I further agree as under:
                </p>
                <p className="mb-1">
                  1. My liability under this Guarantee shall be as if I am a principal debtor and you may at your
                  option hold me primarily responsible for all liabilities of the principal toward you.
                </p>
                <p className="mb-1">
                  2. In case of delay or default by the principal debtor to repay the debt, I undertake to pay the
                  principal amount together with interest accrued and all costs, charges and expenses.
                </p>
                <p className="mb-1">
                  3. The Guarantee shall be a continuing security binding on me and my personal representative(s) and
                  shall remain effective until all indebtedness due by the principal is fully settled.
                </p>
                <p className="mb-1">
                  4. This Guarantee shall not be considered as satisfied by any intermediate payment or satisfaction
                  between the principal and the Bank and shall continue as a security.
                </p>
                <p className="mb-1">
                  5. You may at any time and without reference to me grant time or indulgence or make any arrangements
                  with the principal and may release any security without affecting my liability.
                </p>
                <p className="mb-1">
                  6. I may deal with my dividends, partial payments etc. received in respect of the indebtedness hereby
                  guaranteed and all such dividends and proceeds may be retained by you.
                </p>
                <p className="mb-1">
                  7. In respect of liabilities held by you under the indebtedness hereby guaranteed, I shall not be
                  entitled to any benefit under principal securities.
                </p>
                <p className="mb-1">
                  8. Any accounts settled between you and the principal as well as any statement of the Bank regarding
                  amount due accepted by me shall be conclusive evidence.
                </p>
                <p className="mb-1">
                  9. My liability hereunder shall not be discharged, released, waived, altered or otherwise affected by
                  discharge of guarantor rights, composition, settlement or compromise between Bank and principal.
                </p>
                <p className="mb-1">
                  10. So long as any monies remain unpaid hereunder the Bank shall have a lien on all securities
                  belonging to me now or hereafter held by the Bank.
                </p>
                <p className="mb-1">
                  11. In case of the principal being a company, any change in constitution shall not affect my liability
                  hereunder.
                </p>
                <p className="mb-1">
                  12. Where principal defaults, I confirm all powers of principal and monies borrowed by him/them will
                  be covered by this Guarantee.
                </p>
                <p className="mb-1">
                  13. Any notice or demand addressed to me at my known address by post shall be deemed sufficient and
                  effective.
                </p>
                <p className="mb-2">
                  It is also understood that any word appearing in the singular will also apply to their plural and
                  vice versa.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-8 text-[11px]">
                  <div>
                    <div className="mb-1 border-t border-dotted border-black pt-2 font-semibold">Guarantor&apos;s Sign</div>
                    <div className="mb-1">Guarantor&apos;s Name: {get('businessName')}</div>
                    <div className="mb-1">Present Address: HOUSE#3/5 ROAD#7 BLOCK B, SECTION 14, {get('division')}, {get('division')}, 4575, 502, 6</div>
                    <div>Contact No: 01845707266</div>
                  </div>
                  <div>
                    <div className="mb-1 border-t border-dotted border-black pt-2 font-semibold">Witness 1&apos;s Sign</div>
                    <div className="mb-1">Witness 1&apos;s Name:</div>
                    <div className="mb-1">Present Address:</div>
                    <div>Contact No:</div>
                  </div>
                  <div>
                    <div className="mb-1 border-t border-dotted border-black pt-2 font-semibold">Witness 2&apos;s Sign</div>
                    <div className="mb-1">Witness 2&apos;s Name:</div>
                    <div className="mb-1">Present Address:</div>
                    <div>Contact No:</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black text-[10px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black px-2 py-[2px]">
                <div>Date: 23-Jan-2026</div>
                <div>To</div>
                <div>The Manager</div>
                <div>BRAC Bank Limited</div>
                <div>{get('branchName')}</div>
              </td>
            </tr>
            <tr>
              <td className="border border-black py-[3px] text-center text-[12px] font-semibold">
                LETTER OF GUARANTEE
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">
                <p className="mb-1">
                  In consideration of your making or continuing advances or otherwise giving or continuing credit or
                  accommodation or other banking facilities to <b>&quot;{get('businessName')}&quot;</b> hereinafter called the
                  <b>&quot; Principal &quot;</b>, I <b>&quot;MD SAHIDUL ISLAM&quot;</b> the undersigned, Guarantee to you due repayment
                  within 3 (three) business days after demand of all monies which shall at any time be due to you
                  from the Principal, in any shape or form together with interest, charges, costs etc. Provided that
                  the total amount receivable from me under this Guarantee shall be the Principal sum of <b>{formatBDT(profile?.loanAmount)}
                  (Taka Ten Lakh only)</b> exclusive of interest, costs and charges and I further agree as
                  under:
                </p>
                <p className="mb-1">1. My liability under this Guarantee shall be as if I am a principal debtor, and you may at your option hold me primarily responsible for all liabilities of the principal towards you.</p>
                <p className="mb-1">2. In case of delay or default by the principal debtor to repay the debt, I undertake to pay the principal amount together with interest accrued thereon and all costs, charges and expenses.</p>
                <p className="mb-1">3. The Guarantee shall be a continuing security binding on me and my personal representative(s) until all liabilities are paid in full and shall not be affected by your giving notice, granting time or indulgence.</p>
                <p className="mb-1">4. This Guarantee shall not be considered as satisfied by any intermediate payment or satisfaction and shall continue as security.</p>
                <p className="mb-1">5. You may at any time and without reference to me grant indulgence, make arrangements with the principal, renew/release/realize securities and my liabilities shall not be affected.</p>
                <p className="mb-1">6. I may set off any dividends, partial payments etc. received in respect of indebtedness guaranteed and all such proceeds may be retained by you as security.</p>
                <p className="mb-1">7. In respect of liabilities held by you under indebtedness hereby guaranteed, I shall not be entitled to any benefit under principal securities.</p>
                <p className="mb-1">8. Any accounts settled between you and principal and any statement of the Bank regarding amount due accepted by me shall be conclusive evidence against me.</p>
                <p className="mb-1">9. My liability hereunder shall not be discharged, released, waived, altered or otherwise affected by compromise/arrangement between the Bank and principal.</p>
                <p className="mb-1">10. So long as monies remain unpaid, the Bank shall have a lien on all securities belonging to me now or hereafter held by the Bank.</p>
                <p className="mb-1">11. In case of principal being a company, any change in constitution shall not affect my liability hereunder.</p>
                <p className="mb-1">12. Where principal defaults or inability to pay occurs, all monies borrowed by him/them shall be covered by this Guarantee.</p>
                <p className="mb-1">13. Notice addressed to me at my last known address or sent by post/public notice shall be deemed sufficient and effective.</p>
                <p className="mb-2">
                  It is also understood that any word appearing in the singular will also apply to their plural and
                  vice versa.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-8 text-[11px]">
                  <div>
                    <div className="mb-1 border-t border-dotted border-black pt-2 font-semibold">Guarantor&apos;s Sign</div>
                    <div className="mb-1">Guarantor&apos;s Name: MD SAHIDUL ISLAM</div>
                    <div className="mb-1">Present Address: H-2, LANE-6, TINSHADE, MIRPUR-14, {`Compiganj (${get('division')})`}, {get('division')}, {get('division')}, 4574, 94, 6</div>
                    <div>Contact No: -</div>
                  </div>
                  <div>
                    <div className="mb-1 border-t border-dotted border-black pt-2 font-semibold">Witness 1&apos;s Sign</div>
                    <div className="mb-1">Witness 1&apos;s Name:</div>
                    <div className="mb-1">Present Address:</div>
                    <div>Contact No:</div>
                  </div>
                  <div>
                    <div className="mb-1 border-t border-dotted border-black pt-2 font-semibold">Witness 2&apos;s Sign</div>
                    <div className="mb-1">Witness 2&apos;s Name:</div>
                    <div className="mb-1">Present Address:</div>
                    <div>Contact No:</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 mb-4 w-full border-collapse border border-black text-[10px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black py-[3px] text-center text-[12px] font-semibold" colSpan={2}>
                DOCUMENTATION CHECKLIST - Unsecured Loan (SME) for Operations
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-[3px] text-center font-semibold">Mandatory Documentation</td>
              <td className="border border-black px-2 py-[3px] text-center font-semibold w-[100px]">Status</td>
            </tr>
            <tr><td className="border border-black px-2 py-[3px]">1. Loan application duly filled up &amp; signed by the customer</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">2. Customer &amp; Guarantor NID, Verification report copy (with NID sign declaration form - if applicable)</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">3. Customer&apos;s &amp; Guarantor&apos;s passport size color photograph</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">4. Demand Promissory Note</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">5. General Loan Agreement</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">6. Personal Letter of Guarantee</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">7. Debit Authority Form (duly filled up)</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">8. CRM Approval (with approver seal, sign &amp; date)</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">9. (i) 01 PDC for every installment for Term Loan (ii) 01 PDC for total limit for Non-EMI based facility (fully filled up)</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">10. Two sets of pre-formed Sanction Letter with customer acceptance</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">11. Acknowledgment of Mandatory Deposit and Consent for Debit Instruction against the Account</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">12. Up-to-date Trade License</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">13. E-TIN/up-to-date Tax Clearance Certificate for loan amount 5 lac and above with TIN verification report</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">14. Fire Insurance Format</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">15. Life Insurance Format (where applicable)</td><td className="border border-black px-2 py-[3px]"></td></tr>
            <tr><td className="border border-black px-2 py-[3px]">16. DCR, Mutation &amp; Up-to-date Khajna (where applicable)</td><td className="border border-black px-2 py-[3px]"></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DrutiChargeDocument
