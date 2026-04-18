/**
 * Charge documents (limited company), part one — printable layout.
 */
function ChargeDocumentsLimitedCompany() {
  const td = 'border border-black px-1 py-[3px] text-[11px] leading-tight'

  return (
    <div className="min-h-screen bg-white px-3 py-2 text-black">
      <div className="mx-auto w-full max-w-[1700px] font-['Arial']">
        <div className="flex justify-end">
          <button
            type="button"
            className="border border-[#555] px-2 py-[1px] text-[12px] leading-none text-[#111]"
          >
            Print
          </button>
        </div>

        <table className="mt-24 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className={`${td} text-center font-semibold`} colSpan={4}>
                3214
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={2}>
                Form No. XVII
              </td>
              <td className={td} colSpan={2}>
                <div className="flex justify-end">
                  <span className="font-semibold">Filing Fee&nbsp;&nbsp;Tk</span>
                  <span className="ml-2 inline-block min-w-[100px] border-b border-dotted border-black"></span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center font-semibold`} colSpan={4}>
                PARTICULARS OF MORTGAGES OR CHARGES
                <br />
                THE COMPANIES ACT, 1994
                <br />
                (See Section 159 &amp; 391)
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                <span className="font-semibold">Name of the Company:</span> RAFI COSMETICS
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                <span className="font-semibold">Registered Office:</span> SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14,
                Madhabpur, Habiganj, SYLHET, 1206, 470,6, Family Owned
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                <span className="font-semibold">Regn. No. -</span>
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                Particulars to be filed with the registrar pursuant to Sections 159 &amp; 391 of a mortgage or charge
                created by the
                <span className="mx-1 inline-block min-w-[420px] border-b border-dotted border-black"></span>
                and being
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (a) A mortgage charge for the purpose of securing any issue of debenture, or
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (b) A mortgage or charge on uncalled share capital of Company, or
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (c) A mortgage or charge on any immovable property whenever situated, or any interest therein, or
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (d) A mortgage or charge on any book debts of the Company, or
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (e) A mortgage or a charge not being a pledge on any movable property of the Company except stock in
                trade, or
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (f) A floating charge on the undertaking or property of the Company
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={4}>
                (Strike out the sub-Heads (a), (b), (c), (d), (e) or (f) which does not apply)
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-14 text-[11px]">
          Presented for filing by <span className="inline-block min-w-[220px] border-b border-dotted border-black"></span>
        </div>

        <table className="mt-2 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className={`${td} text-center font-semibold`} colSpan={3}>
                PARTICULARS OF MORTGAGE OR CHARGE CREATED BY RAFI COSMETICS
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center font-semibold`}>
                Date of the instrument creating or evidencing the mortgage or charge and description thereof (a)
                <br />1
              </td>
              <td className={`${td} text-center font-semibold`}>
                Amount secured by the mortgage or charge (b)
                <br />2
              </td>
              <td className={`${td} text-center font-semibold`}>
                Short particulars of the property mortgage or charge
                <br />3
              </td>
            </tr>
            <tr>
              <td className={`${td} min-h-[230px] align-top`}>
                Hypothecation of fixed and floating assets (present and future),
                <br />
                etc. dated: <span className="inline-block min-w-[120px] border-b border-dotted border-black"></span>
              </td>
              <td className={`${td} min-h-[230px] align-top`}>
                BDT ৳ 1,000,000 (In Words: Taka Ten Lakh)
              </td>
              <td className={`${td} min-h-[230px] align-top`}>
                Charge in favor of BRAC Bank Limited on fixed and floating assets (present and future) of the company
                as mentioned in the Letter of Hypothecation of fixed and floating assets (present and future) etc.
                dated: <span className="inline-block min-w-[120px] border-b border-dotted border-black"></span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-2 space-y-1 text-[11px] leading-tight">
          <p>(a) A description of the instrument, e.g. &quot;Trust Deed&quot;, &quot;Mortgage&quot;, Debenture etc. as the case may be give.</p>
          <p>(b) A definite figure should be given.</p>
          <p>
            Date <span className="inline-block min-w-[120px] border-b border-dotted border-black"></span> day of
            <span className="mx-1 inline-block min-w-[160px] border-b border-dotted border-black"></span>201
            <span className="inline-block min-w-[16px] border-b border-dotted border-black"></span>
          </p>
        </div>

        <table className="mt-2 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className={`${td} text-center font-semibold`} colSpan={3}>
                PARTICULARS OF MORTGAGE OR CHARGE CREATED BY RAFI COSMETICS
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center font-semibold`}>
                List of the terms of conditions of extent or operation of relating to any mortgage or charge
                <br />4
              </td>
              <td className={`${td} text-center font-semibold`}>
                Names (with address and description) of the mortgage or persons&apos; entitled to the charge
                <br />5
              </td>
              <td className={`${td} text-center font-semibold`}>
                Amount or rate percent of the commission, allowance or discount (if any)
                <br />6
              </td>
            </tr>
            <tr>
              <td className={`${td} min-h-[320px] align-top`}>
                As per terms of the sanction letter Ref. HO Operation/SMF Asset &amp; ROC OPS/Sanction/Druti/Elephant
                Road/26010002662. Dated: 23-Jan-2026
              </td>
              <td className={`${td} min-h-[320px] align-top`}>
                BRAC Bank Limited Anik Tower, 220/B Tejgaon Gulshan Link Road, Tejgaon, Dhaka-1208.
              </td>
              <td className={`${td} min-h-[320px] align-top`}>As per banking rules</td>
            </tr>
            <tr>
              <td className={`${td} h-[430px]`}></td>
              <td className={`${td} h-[430px]`}></td>
              <td className={`${td} h-[430px]`}></td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <span className="font-semibold">Signature:</span>{' '}
                <span className="inline-block min-w-[240px] border-b border-dotted border-black"></span>
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                <span className="font-semibold">Designation:</span>{' '}
                <span className="inline-block min-w-[240px] border-b border-dotted border-black"></span>
              </td>
            </tr>
            <tr>
              <td className={td} colSpan={3}>
                (State whether Director, Manager, Secretary or person authorized to accept service of process under
                Section 139(1) (d))
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className={`${td} text-center font-semibold`}>
                BEFORE A NOTARY IRREVOCABLE GENERAL POWER OF ATTORNEY FOR MOVABLE PROPERTIES
              </td>
            </tr>
            <tr>
              <td className={td}>
                This Irrevocable General Power of Attorney is made at Dhaka on this the
                <span className="mx-1 inline-block min-w-[120px] border-b border-dotted border-black"></span>
                day of the month of
                <span className="mx-1 inline-block min-w-[140px] border-b border-dotted border-black"></span>
                Two Thousand
                <span className="mx-1 inline-block min-w-[60px] border-b border-dotted border-black"></span>
                of Christian Era.
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">We, RAFI COSMETICS</span> a Private Limited company having its address:
                <span className="font-semibold">
                  {' '}
                  SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14, Madhabpur, Habiganj, SYLHET, 1206, 470,6, Family
                  Owned
                </span>{' '}
                (hereinafter referred to as the &quot;Principal&quot;), represented by its Managing Director
                <span className="mx-1 inline-block min-w-[180px] border-b border-dotted border-black"></span>, who are
                singly authorized to execute this Irrevocable General Power of Attorney, do hereby state as follows:
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">WHEREAS:</span>
              </td>
            </tr>
            <tr>
              <td className={td}>
                (A) By a LETTER OF HYPOTHECATION OF FIXED AND FLOATING ASSETS (PRESENT AND FUTURE) by way of fixed
                charge dated
                <span className="mx-1 inline-block min-w-[110px] border-b border-dotted border-black"></span>
                (hereinafter referred to as the &quot;Letter of Hypothecation&quot;) the properties described in the Schedule
                hereinafter referred to as the &quot;Properties&quot; were hypothecated as a continuing security for repayment
                of the loan facility (hereinafter referred to as the &quot;Facility&quot;) granted to the Principal by
                <span className="font-semibold"> BRAC BANK LIMITED</span>,
                <br />
                Head Office Ark Tower, 220/B Tejgaon Gulshan Link Road, Tejgaon, Dhaka-1208 (hereinafter referred to as
                the &quot;Lender&quot;)
                <br />
                on the terms and conditions contained in its Sanction Advice executed by and between the Borrower and
                the Lender.
              </td>
            </tr>
            <tr>
              <td className={td}>
                (B) In order to exercise the powers of sale in relation to the Hypothecated Properties it is necessary
                for us to execute this Irrevocable General Power of Attorney in favour of the Lender in the manner
                stipulated hereunder wherever any expressed term is used in this Power of Attorney and not defined
                hereunder, such term shall have the meaning given to it in the Letters of Hypothecation.
              </td>
            </tr>
            <tr>
              <td className={td}>
                NOW THEREFORE BY THESE PRESENTS, WE, RAFI COSMETICS in consideration of the Lender granting us the Loan
                to hereby make, nominate, constitute, ordain and appoint the Lender (hereinafter referred to as the
                &quot;Attorney&quot;) acting through any authorized signatory or signatories, to be the true and lawful attorney
                for and on behalf of and in the name of the Principal, with full powers of substitution and delegation,
                to do, execute and perform, or cause to be done, executed and performed, at any time from time to time,
                all or any of the acts, deeds, matters, things and authorities hereinafter mentioned:
              </td>
            </tr>
            <tr>
              <td className={td}>(i) upon the occurrence of an event of default or breach of the Letters of Hypothecation or the Letter of Offer of Facilities; or</td>
            </tr>
            <tr>
              <td className={td}>(ii) at any time if specified herein; or</td>
            </tr>
            <tr>
              <td className={td}>(iii) if the Lender and the Principal expressly agree that this Power of Attorney should become exercisable;</td>
            </tr>
            <tr>
              <td className={td}>The rights, powers, acts or discretion conferred by the Principal upon the Attorney are:</td>
            </tr>
            <tr>
              <td className={td}>1. To take possession of the Properties or any part thereof and to take their entire administration, management, and control.</td>
            </tr>
            <tr>
              <td className={td}>2. To sell or dispose of the Properties or any part thereof together in parcel or account and at the risk of the Principal, either privately or by public auction or by private contract on such terms and conditions as the Attorney shall think fit and proper, without any reference to the Principal;</td>
            </tr>
            <tr>
              <td className={td}>3. To realize and receive the sale proceeds and any other moneys receivable in respect of the Properties or any part thereof and apply the same towards the liabilities of the Principal with Lender;</td>
            </tr>
            <tr>
              <td className={td}>4. To seal, sign and execute the necessary deeds, present those for registration and get the same registered or assigned (as the case may be) and to vest the Properties or any part thereof in any transferee, together with all rights of the owner in, or to the Proprietor in any part thereof if the same had been sold to the transferee by the Principal as the owner.</td>
            </tr>
            <tr>
              <td className={td}>5. To incur any expenditure on behalf of the Principal that may be necessary for taking over, management and control of the Properties or any part thereof and for sale, charge or disposal thereof and to incur any liabilities on behalf of the Principal for the said purpose.</td>
            </tr>
            <tr>
              <td className={td}>6. To advertise through newspapers or otherwise for auction of the Properties or any part thereof, to arrange and effect the auction or sale to receive the bid money, and apply the same in meeting expenses and in liquidating the indebtedness of the Principal to the Lender.</td>
            </tr>
            <tr>
              <td className={td}>7. To negotiate for the sale of the Properties or any part thereof, and settle the terms of sale, to sign, seal, execute and deliver all such contracts, agreements, sale deeds or deeds of conveyance and/or other documents, and/or instruments of transfer with all necessary and reasonable covenants on behalf of the Principal, and generally for such terms and conditions as the Attorney shall deem necessary or expedient.</td>
            </tr>
            <tr>
              <td className={td}>8. To do and perform all other acts, matters and things that may be necessary or proper for completing the sale or disposal of the Properties or any part thereof;</td>
            </tr>
            <tr>
              <td className={td}>9. To realize, receive and take payment of any consideration or purchase money or other moneys that may become payable to the Principal in connection with such sale or disposal as aforesaid, and upon receipt thereof to give and grant sufficient and effectual receipts or discharges for the same;</td>
            </tr>
            <tr>
              <td className={td}>
                10. To collect, receive and take in respect of the Properties payment of any receivables or book debts
                of the Principal or other moneys that may become payable to the Principal from any person, firm,
                company or authority and upon receipt thereof to give and grant sufficient and effectual receipts or
                discharges for the same.
              </td>
            </tr>
            <tr>
              <td className={td}>
                11. To represent the Principal before any authorities, the Bangladesh Bank or any other person in
                connection with the transactions referred to herein above, and sign and execute whatever instruments
                that may be necessary for obtaining the approval, if required, of such transactions by any authority or
                any other organization or institution for the purpose of completion of the sale of the Properties.
              </td>
            </tr>
            <tr>
              <td className={td}>
                12. To prepare, represent and act in all civil or criminal Courts or arbitration and before judicial
                quasi-judicial, statutory and revenue authorities, either in the original or appellate side as well as
                in any government department, local authority, autonomous, semi autonomous authority or other body
                corporate, and to present or defend or to take part in all or any action, application, suit, appeal,
                proceeding, and for such purposes to subscribe, sign and verify all plaints, written statements and any
                memorandum of appeal and to do all acts, deeds and things which may be necessary in relation thereto,
                and to execute any power of vakalatnamas by signing on behalf of and in the name of the Principal on
                any part under any Court.
              </td>
            </tr>
            <tr>
              <td className={td}>
                13. To appoint and retain lawyers and advocates and to remove such advocates and retainers from time to
                time and again to appoint as occasion shall require for the aforesaid purposes.
              </td>
            </tr>
            <tr>
              <td className={td}>
                14. To apply for withdrawal, withdrawal and receive all moneys that may be deposited in any Court or
                office concerning the Properties or any part thereof in case of acquisition or requisition of the
                Properties or any part thereof by any Government or other lawful authority.
              </td>
            </tr>
            <tr>
              <td className={td}>
                15. To appear before any registering authority having jurisdiction in that behalf in relation to the
                Properties for registration and acknowledge and register pursuant to the provisions and regulations in
                that respect for the time being in force, all instruments and writings involving sale deeds, deeds of
                conveyance, mortgage deeds executed and signed either by the Principal directly or under the authority
                of those presents and to present for registration and to admit execution thereof and do all such acts
                and deeds in that behalf as the Attorney may deem proper and expedient.
              </td>
            </tr>
            <tr>
              <td className={td}>
                16. Without notice to the Principal set off, transfer or apply all or any of the moneys from time to
                time standing to the credit of any account in the name of the Principal or towards the discharge and
                satisfaction of all sums of money which are, at the time, due or owing to Lender by the Principal.
              </td>
            </tr>
            <tr>
              <td className={td}>
                17. At any time (including, for the avoidance of doubt, prior to the occurrence of an event of
                default) to sign, execute, seal, deliver, perfect and do all deeds, documents, assurances, instruments,
                acts and things which the Attorney may consider to be required or desirable in connection with
                extending the powers granted herein.
              </td>
            </tr>
            <tr>
              <td className={td}>
                18. To appoint by deed or in writing under hand any one or more qualified persons from an accounting
                firm of international standing (or its equivalent) or such other firm as we, acting reasonably and
                without undue delay may agree) to be a receiver or manager (the &quot;Receiver&quot;) of all or any part of the
                Properties on such terms and conditions as the Attorney deems fit and appropriate and to remove any
                Receiver appointed by it and appoint a new Receiver in its place. This power shall be in addition to
                all statutory and other powers of appointment under the Code of Civil Procedure, 1908 (Act V of 1908).
                The Receiver is deemed to be the agent of the Principal for all purposes and Lender shall not incur any
                liability (either to the Principal or to any other person) by reason of Lender making its appointment
                of a Receiver for any other reason.
              </td>
            </tr>
            <tr>
              <td className={td}>
                19. At any time (including, for the avoidance of doubt, prior to the occurrence of an event of
                default) and from time to time to appoint any substitute or substitutes and to delegate to him or them
                all or any of the powers, authorities and discretion vested in the Attorney under by virtue of these
                presents (other than this power of substitution) and to remove any such substitute or substitutes at
                pleasure and appoint another or others in his or their place, to do all or any acts, deeds, matters and
                things hereunder, as may be necessary, usual, proper or expedient for the purposes hereof.
              </td>
            </tr>
            <tr>
              <td className={td}>
                20. To do, perform, sign and execute generally each and all other acts, deeds, matters and things,
                legally and effectually, which the Lender may deem necessary and expedient for any of the purposes
                aforesaid or otherwise as the Principal could have done if personally present.
              </td>
            </tr>
            <tr>
              <td className={td}>
                AND the Principal do hereby ratify and confirm whatever the said Attorney or any substitute(s) acting
                under them shall lawfully do or purport to do or cause to be done by virtue of those presents.
              </td>
            </tr>
            <tr>
              <td className={td}>
                AND the powers conferred on the Attorney hereunder are solely to protect the interests of Lender in the
                Properties and shall not impose any duty upon the Attorney to exercise any such power. The Attorney
                shall be accountable only for amounts it actually received by it as a result of the exercise of such
                powers, and neither it, nor any of its officers, directors, employees, agents, shall be responsible to
                the Principal for any act or failure to act hereunder.
              </td>
            </tr>
            <tr>
              <td className={td}>
                THE PRINCIPAL further declares and undertakes that if this Power of Attorney is revoked by operation of
                law or otherwise, it shall not prejudice any right, interest or security already created in favour of
                the Lender and all such rights and remedies shall remain fully enforceable.
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">THE PRINCIPAL FURTHER DECLARES THAT THIS IRREVOCABLE POWER OF ATTORNEY IS VALID AND BINDING ON THE PRINCIPAL, ITS SUCCESSORS-IN-INTEREST AND ASSIGNEES.</span>
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center font-semibold`}>SCHEDULE OF THE PROPERTIES</td>
            </tr>
            <tr>
              <td className={td}>
                (c) All plant, machinery, spare parts, accessories, electrical equipments, all other movable
                properties and assets acquired or to be acquired by availing the Revolving Loan as described in the
                annexed list of Plant and Machinery and the documents constituting or evidencing title to or control
                over or otherwise relating to such property, in which the Borrower may from time to time have an
                interest, and all policies of insurance relating thereto and all sale proceeds thereof, of the
                Principal;
              </td>
            </tr>
            <tr>
              <td className={td}>
                (d) All present and future plant, machinery, spare parts, accessories, electrical equipments, all
                other movable properties and assets and like assets and other documents constituting or evidencing
                title to or control over or otherwise relating to such property, in which the Borrower may from time
                to time have an interest, and all policies of insurance relating thereto and all sale proceeds thereof,
                of the Principal;
              </td>
            </tr>
            <tr>
              <td className={td}>
                (e) All present and future movable property, including furniture and fixtures, office equipment, stocks
                of raw materials, work-in-process, finished goods, lease assets, vehicles and all other assets,
                wherever situated (including goods in transit), and all negotiable instruments, bills of lading,
                railway receipts, warrants, delivery orders, and policies of insurance, and all sale proceeds thereof;
              </td>
            </tr>
            <tr>
              <td className={td}>
                (f) All present and future book debts, outstanding monies, receivables, claims, bills, contracts,
                engagements, securities, rights and like assets and other documents constituting or evidencing title to
                or control over or otherwise relating to such property, and all proceeds thereof of the Principal and in
                which the Principal may have an interest; and
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">IN WITNESS WHEREOF</span> the Principal has executed this Power of
                Attorney on the day, month and year first written above.
              </td>
            </tr>
            <tr>
              <td className="h-[320px] border border-black"></td>
            </tr>
            <tr>
              <td className="h-[420px] border border-black align-bottom px-4 pb-8">
                <div className="grid grid-cols-2 gap-16 text-[11px]">
                  <div>
                    <p>
                      Signed, sealed and delivered by <span className="font-semibold">RAFI COSMETICS</span> through
                      its authorized signatory,
                    </p>
                    <p className="mt-3">
                      <span className="inline-block min-w-[380px] border-b border-dotted border-black"></span>
                    </p>
                    <div className="mt-3 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Name:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Designation:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Name:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Designation:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold">In witness whereof:</p>
                    <p className="mt-3">
                      <span className="inline-block min-w-[380px] border-b border-dotted border-black"></span>
                    </p>
                    <div className="mt-3 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Name:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Address:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Name:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[70px_1fr] items-center gap-x-2">
                      <span className="font-semibold text-right">Address:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-8 w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className={td}>
                <span className="font-semibold">Date :</span>{' '}
                <span className="inline-block min-w-[160px] border-b border-dotted border-black"></span>
              </td>
            </tr>
            <tr>
              <td className={td}>
                <div className="font-semibold">BRAC Bank Limited</div>
                <div>Anik Tower, 220/B Tejgaon Gulshan Link Road, Tejgaon, Dhaka-1208.</div>
              </td>
            </tr>
            <tr>
              <td className={`${td} text-center font-semibold`}>
                LETTER OF HYPOTHECATION OF FIXED AND FLOATING ASSETS
                <br />
                (PRESENT &amp; FUTURE)
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">Dear Sir(s),</span>
              </td>
            </tr>
            <tr>
              <td className={td}>
                In consideration of <span className="font-semibold">BRAC BANK LIMITED</span>, a banking company
                registered in Bangladesh under the Companies Act, 1994 and licensed to do banking business by the
                Bangladesh Bank under the Bank Companies Act 1991 (hereinafter called the &quot;Bank&quot;) (which expression
                will, where the context so admits, include its successors and assigns) making or continuing advances or
                otherwise giving credit or providing finance to us under one or more modes of finance or otherwise
                affording any other banking facilities or other accommodation of any kind, hereinafter collectively
                referred to as the &quot;Credit Facilities&quot;, up to a limit of <span className="font-semibold">BDT 1,00,000 (In Words: Taka Ten Lakh)</span> for so long as the Bank may think fit, we, <span className="font-semibold">RAFI COSMETICS</span> at address: <span className="font-semibold">FLOOR: SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14, Madhabpur, Habiganj, SYLHET, 1206,470,6, Family Owned</span> hereinafter called the &quot;Borrower&quot;.
              </td>
            </tr>
            <tr>
              <td className={td}>
                <span className="font-semibold">DO HEREBY AGREE, UNDERTAKE AND COVENANTS AS FOLLOWS:</span>
              </td>
            </tr>
            <tr>
              <td className={td}>
                1. We do hereby hypothecate in your favor all our existing and future Fixed and Floating Assets, spare
                parts, accessories, equipments, all other movable and immovable properties and assets and such other
                Fixed and Floating Assets as may hereinafter be brought or become by us under ownership and title and
                any right and title we may have thereon by way of mortgage, security or other lien as security for the
                repayment by us of the Credit Facilities and all other dues, interest, commissions, costs, charges and
                expenses incidental thereto that may be payable by us to your under and in terms of the Credit
                Facilities.
              </td>
            </tr>
            <tr>
              <td className={td}>
                2. The Fixed and Floating Assets as hereby hypothecated will be kept in marketable and good repair and
                condition and will be insured by us against fire, lightning, floods, riots and civil commotion in the
                joint names of ourselves and yourselves with an insurance company approved by you to the full extent of
                the Credit Facilities obtained by us and the insurance policies will be assigned in your favor and
                delivered to you. If we fail to effect such insurance or to keep premiums current, you may insure the
                same and/or pay the insurance premium on due date and debit the premium and other charges to our
                account. We expressly agree that we will be entitled to adjust, settle, compromise in the event of any
                dispute between the insurer and the insured arising under or in connection with such policy or policies
                and such adjustment, settlement or compromise will be valid and binding on us and shall in no event
                involve your liability or your right over any claim made there under and to give valid receipt thereof
                and that the amount so received will be adjusted against our payment or satisfaction of our
                indebtedness hereunder and we will not raise any question that a larger sum might or ought to have been
                received nor be entitled to dispute your liability for the balance remaining due after such partial
                payment and adjustment.
              </td>
            </tr>
            <tr>
              <td className={td}>
                3. We will not permit any act of insolvency, if at any time we be adjudicated insolvent or we execute a
                deed of arrangement or composition with any of our creditors, it will be lawful for you forthwith or at
                any time and without any notice to us and without prejudice to any of your rights and powers to sell,
                transfer or otherwise dispose of all or any of the Hypothecated Fixed and Floating Assets forming the
                Security hereunder either together or in lots or separately and to apply the net proceeds of such sale
                in or towards liquidation of the balance then due to you.
              </td>
            </tr>
            <tr>
              <td className={td}>
                4. We will carry on our business efficiently and will furnish to you all relevant statements, reports,
                returns, certificates, accounts, documents and information from time to time as required by you and
                will also execute all documents and do all acts and things which may secure to give effect hereto and we
                authorize you and your agents and nominees to do as required to execute all documents in this regard.
              </td>
            </tr>
            <tr>
              <td className={td}>
                5. We will not create any Mortgage, Charge, Hypothecation, Lien or any other Encumbrance upon or over
                the Hypothecated Fixed and Floating Assets or any part thereof except to your prior written consent.
              </td>
            </tr>
            <tr>
              <td className={td}>
                6. It is declared that the Hypothecated Fixed and Floating Assets are or as become our absolute
                property free from any prior Mortgage, Charge, Hypothecation, Pledge, Lien or other Encumbrances.
              </td>
            </tr>
            <tr>
              <td className={td}>
                7. You, your agents and nominees will be entitled at all times without notice to us and at our risk and
                expense and as Attorney for us and in our name to enter into the factory premises and inspect, value,
                insure, supervise and take particulars and charge of all the Hypothecated Fixed and Floating Assets and
                all documents and records concerning the same, and for carrying out all such and every acts and things
                and issuing all receipts and discharges as may be necessary and expedient for protection and realization
                of your rights.
              </td>
            </tr>
            <tr>
              <td className={td}>
                8. Nothing herein contained will prejudice any of your rights or remedies in respect of any present or
                future Security, guarantee, obligation or decree for any of our indebtedness or liabilities towards you.
              </td>
            </tr>
            <tr>
              <td className={td}>
                9. The Hypothecated Fixed and Floating Assets will always be kept distinguishable and held by us in
                trust as your exclusive property specifically appropriated to the Security to be dealt with only under
                your directions.
              </td>
            </tr>
            <tr>
              <td className={td}>
                10. The hypothecated Fixed and Floating Assets will be a continuing security for due payment of all
                monies, indebtedness and liabilities by us to you at any time up to your then due and owing amount and
                if at any time in respect of your claim, the security and rights and interests may prove or become
                inadequate, then the Borrower shall forthwith pay cash or provide further security to your satisfaction.
              </td>
            </tr>
            <tr>
              <td className={td}>
                11. We hereby acknowledge, undertake, confirm and authorize that you will at all times be at liberty to
                pay into and reimburse all expenses and costs connected with the management, protection and realization
                of the Hypothecated Fixed and Floating Assets, and all such expenses shall be debited to and recoverable
                from us.
              </td>
            </tr>
            <tr>
              <td className={td}>
                12. We will, whenever required by you, give full particulars to you of all our assets including the
                Hypothecated Fixed and Floating Assets and will at all times allow your authorized agent inspection of
                the Hypothecated Fixed and Floating Assets and all records in relation thereto and permit all acts
                necessary to verify and protect your security.
              </td>
            </tr>
            <tr>
              <td className={td}>
                13. We will at all times during the continuance of this Security keep and maintain such margins of
                Security in your favor as may be required by you from time to time. You will not at any time operate or
                draw against any account through which any Credit Facilities are made available to us to a value to the
                extent such credit in value are less than your prescribed margins and we will pay and/or maintain such
                shortfall on demand.
              </td>
            </tr>
            <tr>
              <td className={td}>
                14. We undertake to pay all rents, charges, taxes, outgoings and other charges related to any
                immovable property and all obligations in relation to the Hypothecated Fixed and Floating Assets, or
                any part thereof, where stored or used.
              </td>
            </tr>
            <tr>
              <td className={td}>
                15. The Credit Facilities hereby secured will be wholly applied in the ordinary course of and for the
                purpose of our business.
              </td>
            </tr>
            <tr>
              <td className={td}>
                16. We will not have the right to sell or otherwise dispose of or part with possession of any
                Hypothecated Fixed and Floating Assets without your prior written consent. If you permit such sale, we
                undertake to pay to you the sale proceeds and if the sale proceeds are paid by cheque/bill, the
                instrument shall be endorsed and delivered to you for collection.
              </td>
            </tr>
            <tr>
              <td className={td}>
                17. If after the execution hereof any circumstance will occur which in your sole judgment is
                prejudicial to or imperils this Security then at any time or times after such occurrence you, if you
                think fit, will be entitled at our risk and expense and without any notice to us, to enter (and for
                that purpose to do all necessary things) any place where the Hypothecated Fixed and Floating Assets may
                be or to inspect, take inventories, value, insure and/or take charge and/or take possession of all or
                any part of the Hypothecated Fixed and Floating Assets, and if there be no way by default by us in
                payment of monies due to you or in the performance of any obligation to you hereunder or if any
                circumstance will occur which in your sole opinion will be prejudicial to or endanger or is likely to
                endanger this Security, you will be entitled to seize, invoke, remove, appoint receivers or remove and/or
                realize and dispose and convert into cash by public auction or private contract or otherwise dispose of
                all or any part of the Hypothecated Fixed and Floating Assets and to enforce, realize, settle,
                compromise and/or execute all rights as aforesaid in such manner and to such terms as the exercise of
                your rights and remedies.
              </td>
            </tr>
            <tr>
              <td className={td}>
                18. In the event of there being a surplus available of net proceeds of any sale or other disposal of
                the Hypothecated Fixed and Floating Assets after payment in full of the liabilities due to you, it will
                be lawful for you to retain and apply such surplus together with any other monies belonging to us (or
                any one or more of us) for the time being in your hands in or under whatever account, as far as the
                same will extend against, in or towards payment or liquidation of any and all other monies which will
                or may hereafter become due to you from us (or any one or more of us).
              </td>
            </tr>
            <tr>
              <td className={td}>
                19. We hereby declare and guarantee the hypothecated Fixed and Floating Assets (now in existence or
                absolutely and unencumbered property) with full power to dispose of the same and any Fixed and Floating
                Assets purchased or acquired in future will likewise be similarly free from all prior encumbrances and
                of title except as stated herein.
              </td>
            </tr>
            <tr>
              <td className={td}>
                20. If we remove the assets to any other place where the same may be without your prior written consent
                in writing or payment in cash to you of the value of the same or replacing the same with other assets
                of equal value and being acceptable to you.
              </td>
            </tr>
            <tr>
              <td className={td}>
                21. We confirm that the Hypothecated Fixed and Floating Assets and all additions thereto and any
                documents and any and all sale proceeds received upon any sale or realization and insurance monies
                received will always be kept in trust for you and for this purpose will be distinguishable and held by
                us in your favour as principal assets specifically appropriated to this Security and we will not dispose
                of, transfer, create charge over or any part thereof without your prior written consent.
              </td>
            </tr>
            <tr>
              <td className={td}>
                22. We agree to accept as conclusive proof of the correctness of the monies due to you from us, and of
                all entries made in your books and signed by any of your duly authorized officers, and we shall not
                dispute such entries except for manifest error.
              </td>
            </tr>
            <tr>
              <td className={td}>
                23. It is hereby expressly agreed and declared that the amount of the Credit Facilities to be granted by
                you will be in your sole discretion notwithstanding that a specified maximum may at any time be agreed
                upon or that there is a Margin in accordance with the terms hereof and that our total liability to you
                however arising is payable on demand and if not paid in full on demand, you will, in addition to the
                rights and remedies herein provided, be entitled to enforce all your rights and remedies available to
                you whether by common law or statute or according to customs or otherwise for recovery of our
                indebtedness to you in respect of such liability whether the Security will have been realized wholly or
                partly or not.
              </td>
            </tr>
            <tr>
              <td className={td}>
                24. If upon demand for payment of any monies due or of any other amount due by us hereunder being made
                by you, we fail to make payment within 3 (three) business days of receiving such demand from you, we
                will pay to you together with any costs and expenses incurred by you in or associated with effecting
                recovery.
              </td>
            </tr>
            <tr>
              <td className={td}>
                25. We agree and undertake that immediately after execution of this Letter of Hypothecation, we will
                register the charges hereby created by us in favor of the Bank, over the Hypothecated Fixed and
                Floating Assets in accordance with the current Company Law and will submit the relevant forms and
                documentary evidence of such registration with the Registrar of Joint Stock Companies and Firms.
              </td>
            </tr>
            <tr>
              <td className={td}>
                26. This Security will be a continuing Security for Monies due to you from time to time and where the
                accommodation is by way of cash credit/overdraft, the said cash credit/overdraft account is to be
                considered as closed for the purpose of this Security and this Security is not to be considered to be
                exhausted by reason of the said cash credit/overdraft account being brought into credit at any time or
                from time to time or its being drawn upon to the full extent if afterwards reopened by a payment of
                credit.
              </td>
            </tr>
            <tr>
              <td className={td}>
                27. We (where if it is corporate body or partnership) declare, represent and warrant that the
                composition and liability and registration under the laws of Bangladesh and any policy and tax status of
                entities and rights and obligations under this Security and all related documents are valid and binding
                and enforceable against us.
              </td>
            </tr>
            <tr>
              <td className={td}>
                28. If we are more than one individual, all of us will be jointly and severally liable under this
                Security and all members from time to time thereof will be bound notwithstanding changes in the
                constitution or style thereof and whether this Security be held by one or all parties&apos; obligations.
              </td>
            </tr>
            <tr>
              <td className={td}>
                29. If and whenever this Security will be held by your office in relation to our and/or any third
                party&apos;s obligations towards you, then you shall be free without reference to us to deal and we hereby
                consent to your dealing with the principal debtor and with securities, obligations or terms as
                considered fit and in relation to our obligations.
              </td>
            </tr>
            <tr>
              <td className={td}>
                30. Any notice given by you under this agreement will be deemed to have been delivered to us, if
                delivered personally or if posted/couriered to the address registered with you, whether such address is
                then our actual address or not. Such notice, if posted/couriered, will be deemed to have been delivered
                to us at the time it would have been delivered in the ordinary course of post or courier whether it is
                actually received or not.
              </td>
            </tr>
            <tr>
              <td className={td}>
                31. Nothing herein contained will extinguish, derogate from curtail, prejudice, impair or otherwise
                affect all or any of your rights and remedies against us or as may be otherwise available by law.
              </td>
            </tr>
            <tr>
              <td className={td}>
                32. It is agreed that if any of your rights under this Security are vitiated in the event of breach or
                non-compliance by us of any of the terms and conditions hereunder, your inaction or omission to take
                action will not be treated as waiver and your rights remain enforceable.
              </td>
            </tr>
            <tr>
              <td className={td}>
                33. Without prejudice to your right to take proceedings against us in any other court of competent
                jurisdiction, we hereby agree to submit to the jurisdiction of the courts and tribunals in Bangladesh
                and agree that any judgment thereon shall be final and binding upon us. If this agreement is signed by
                or on behalf of more than one party, the obligation and liability of such parties shall be deemed to be
                joint and several unless expressly stated otherwise.
              </td>
            </tr>
            <tr>
              <td className={td}>
                IN WITNESS whereof we executed these presents on the day, month and year first hereinabove written.
              </td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-6">
                <div className="grid grid-cols-[160px_1fr_1fr] gap-8 text-[11px]">
                  <div className="font-semibold">Witness:</div>
                  <div className="text-center font-semibold">Authorized Signature</div>
                  <div className="text-center font-semibold">Authorized Signature</div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-20">
                  <div>
                    <div className="grid grid-cols-[30px_1fr] items-center gap-2">
                      <span className="text-right">1.</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[90px_1fr] items-center gap-2">
                      <span className="text-right font-semibold">Name:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[90px_1fr] items-center gap-2">
                      <span className="text-right font-semibold">Designation:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-[30px_1fr] items-center gap-2">
                      <span className="text-right">2.</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[90px_1fr] items-center gap-2">
                      <span className="text-right font-semibold">Name:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                    <div className="mt-2 grid grid-cols-[90px_1fr] items-center gap-2">
                      <span className="text-right font-semibold">Designation:</span>
                      <span className="inline-block border-b border-dotted border-black"></span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ChargeDocumentsLimitedCompany
