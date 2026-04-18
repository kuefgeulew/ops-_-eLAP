/**
 * Credit Guarantee Scheme — printable layout.
 */
function CreditGuaranteeScheme() {
  const th = 'border border-black px-1 py-[2px] text-[11px] font-semibold leading-none'
  const td = 'border border-black px-1 py-[2px] text-[11px] leading-none align-top'

  return (
    <div className="min-h-screen bg-white px-2 py-3 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="bg-[#0e2d4f] text-white">
              <td className="border border-black px-2 py-1 text-right text-[12px] font-bold">
                Annexure # 1
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1 text-center text-[20px] font-bold leading-none">
                Guarantee Application for Term Loan under
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1 text-[11px] leading-tight">
                A loan/investment facility has been approved subject to the issuance of a credit
                guarantee under the participation agreement between BRAC BANK PLC and the Credit
                Guarantee Department (CGD) of Bangladesh Bank, subject to the Terms and Conditions
                outlined in the Agreement dated __________.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="border-x border-b border-black px-2 py-1 text-[11px] leading-tight">
          <div>1. Loan Identification number (if any): 2601002662</div>
          <div className="mt-1">
            2. <span className="ml-2">Branch Address:</span>
          </div>
          <div className="mt-[2px] grid grid-cols-3 gap-3">
            <div>Branch Name: BARURA BRANCH</div>
            <div>Branch Code: 15 07</div>
            <div></div>
          </div>
          <div className="mt-[2px] grid grid-cols-3 gap-3">
            <div>Division:</div>
            <div>District:</div>
            <div>Upazilla:</div>
          </div>
          <div className="mt-1">3. Name of the Enterprise/Borrower: RAFI COSMETICS</div>
          <div className="mt-1">4. Business Address: , 1206</div>
          <div className="mt-[2px] grid grid-cols-3 gap-3">
            <div>Division: SYLHET</div>
            <div>District: Habiganj</div>
            <div>Upazilla: Madhabpur</div>
          </div>
          <div className="mt-1">5. Contact Number:</div>
          <div className="mt-1">6. Trade License Number: 4601</div>
          <div className="mt-1">7. Tax Identification Number (TIN): 49067576802</div>
          <div className="mt-1">7. Business Identification Number (BIN) of the Enterprise (if available):</div>
          <div className="mt-1">8. Information of Owner(s):</div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className={th}>Owner&apos;s Name</th>
              <th className={th}>Owners&apos; TIN</th>
              <th className={th}>Owner&apos;s NID</th>
              <th className={th}>Gender</th>
              <th className={th}>Educational Background</th>
              <th className={th}>Contact Number</th>
              <th className={th}>Residence Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
              <td className={td}>-</td>
            </tr>
          </tbody>
        </table>

        <div className="border-x border-b border-black px-2 py-1 text-[11px] leading-tight">
          <div>9. SME Category: 99</div>
          <div className="mt-1">10. Nature of the Business: Agriculture</div>
          <div className="mt-1">11. Business Start Date: 20 Jan 2016</div>
          <div className="mt-1">12. Years in Operation: 10</div>
          <div className="mt-1">13. Ownership Type: PROPRIETORSHIP</div>
          <div className="mt-1">14. Borrower Type:</div>
          <div className="mt-1">15. Purpose of the Loan:</div>
          <div className="mt-1">16. No. of Employees:</div>
          <div className="mt-[2px] grid grid-cols-3 gap-4">
            <div>a. Total: 8</div>
            <div>b. Male: 7</div>
            <div>c. Female: 1</div>
          </div>
          <div className="mt-1">17. Business Financials</div>
          <div className="mt-[2px] grid grid-cols-2 gap-4">
            <div>a. Total Sales: -</div>
            <div>b. Total Liabilty: -</div>
            <div>c. Owner&apos;s Equity: -</div>
            <div>d. Outside liabilities: -</div>
            <div>e. Annual Sales: 0</div>
            <div>f. Annual Income: -</div>
            <div>g. Net Income (previous year)</div>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-4">
            <div>18. a. Amount of the Loan: -</div>
            <div>b. Expected Guarantee Coverage (%):</div>
          </div>
          <div className="mt-1">19. Interest Rate: -</div>
          <div className="mt-1">20. Final Repayment Date:</div>
          <div className="mt-1">21. Loan Tenor: -</div>
          <div className="mt-1 grid grid-cols-3">
            <div>22. Personal Guarantee of the Owner(s):</div>
            <div className="text-center">Yes</div>
            <div className="text-center">No</div>
          </div>
          <div className="mt-1 grid grid-cols-3">
            <div>23. Third-Party Guarantee:</div>
            <div className="text-center">Yes</div>
            <div className="text-center">No</div>
          </div>
          <div className="mt-1">24. Other collateral (if any):</div>
          <div className="mt-1">25. Forced Sale Value of other collateral:</div>
          <div className="mt-2 text-center text-[18px] font-bold">Undertaking</div>
          <div className="mt-1">
            We, on behalf of BRAC Bank PLC, hereby, confirm that this application falls within the
            terms and conditions of the participation agreement. Proper due diligence and
            documentation have been made by following our CMSME Credit Policy as well as annexure
            2 of the Manual of Credit Guarantee Scheme. We will pay the guarantee fees against this
            application&apos;s registration as per the provision of CGD circular no. 2, dated ____ and its
            subsequent amendments. We also understand that in the event of any claim under the
            participation agreement, failure to provide documents and/or certifications as per the Manual
            of Credit Guarantee Scheme and relevant circulars of Bangladesh Bank, the claim against
            the guarantee may be rejected.
          </div>
        </div>

        <div className="border-x border-b border-black px-2 pb-2 pt-6 text-[11px]">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="mx-auto h-0 w-[85%] border-t border-black"></div>
              <div className="mt-2 font-bold">Seal and Signature of Initiator</div>
            </div>
            <div>
              <div className="mx-auto h-0 w-[85%] border-t border-black"></div>
              <div className="mt-2 font-bold">Authorized Signature</div>
            </div>
            <div>
              <div className="mx-auto h-0 w-[85%] border-t border-black"></div>
              <div className="mt-2 font-bold">Authorized Signature</div>
            </div>
          </div>
          <div className="mt-2">Name &amp; PIN: -(-)</div>
          <div className="mt-1">Cell No :</div>
        </div>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr className="bg-[#0e2d4f] text-white">
              <td className="border border-black px-2 py-1 text-center text-[12px] font-bold">
                Annexure 1.1 : BRAC Bank CGS Application form
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-2 text-[13px] leading-tight">
                <div>বরাবর,</div>
                <div>ব্রাক ব্যাংক পিএলসি</div>
                <br />
                <div>
                  বিষয়: বাংলাদেশ ব্যাংকের ক্রেডিট গ্যারান্টি স্কিম সুবিধা পাওয়ার জন্য আবেদন
                </div>
                <br />
                <div>প্রিয়,</div>
                <div>
                  আপনারদের এই ব্যাংকে ঋণ/বিনিয়োগের আবেদনটি ________________ এর
                  জন্য ক্রেডিট গ্যারান্টি স্কিমের সুবিধা পাওয়ার জন্য আবেদন করছি। আবেদন/এই
                  ক্রেডিট গ্যারান্টি স্কিম পেতে চাই যে, CGD সার্কুলার নং ২ তারিখ
                  ___________________ এর বিধান অনুসারে, ঋণের আবেদনটি নিম্নরূপ বিবরণীতে
                  বর্ণিত শর্তানুসারে ক্রেডিট গ্যারান্টির সুবিধা পেতে আবেদন করছি।
                </div>
                <div className="mt-2">
                  যদি এই ঋণ/বিনিয়োগ আবেদনটি এর আওতায় অন্তর্ভুক্ত করা হয়ে থাকে এবং পরবর্তীতে
                  ক্রেডিট গ্যারান্টি ফি ফেরত বা অন্য কোনো দাবি করে থাকি, এই মর্মে বলা যাচ্ছে যে,
                  সর্বসম্মতভাবে এবং স্বেচ্ছায় প্রতি আবেদনপত্র করতে যাই, এবং পরবর্তীতে কোনো
                  প্রকারে দাবি/ক্রেডিট গ্যারান্টির বিষয়ে আর আবেদন করব না।
                </div>
                <div className="mt-2">
                  আরও অঙ্গীকার করছি যে, ২ নং বিফলে এন্ট্রি (যদি থাকে) দিলে, কর্পোরাল ডিফল্ট
                  স্বীকৃত হিসেবে গণ্য হবে। অতএব বর্তমান ঋণ/বিনিয়োগ সকল তথ্য স্বচ্ছ ও
                  সঠিক। গ্যারান্টি ফিরুণ্ড নীতি অনুসরণ করে অন্য যেকোনো প্রাসঙ্গিক তথ্য ব্যাংকের
                  কাছে সংরক্ষণ এবং ব্যাংকের নিকট সব দায় ও দায়িত্ব হতে মুক্তি ঘোষণা করছি।
                </div>
                <br />
                <div>_________________________</div>
                <div>আবেদনকারীর স্বাক্ষর</div>
                <div>প্রোপ্রাইটর নাম : FAYSAL AHMMAD</div>
                <div>প্রতিষ্ঠান নাম : RAFI COSMETICS</div>
                <div>তারিখ: 22-Jan-2026</div>
                <div>NID: 7518377532733</div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-full border-collapse">
          <tbody>
            <tr className="bg-[#0e2d4f] text-white">
              <td className="border border-black px-2 py-1 text-center text-[12px] font-bold">
                Annexure # 2
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-[3px] text-[11px]">Name of the Enterprise/Borrower</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-[3px] text-[11px]">Customer ID</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-[3px] text-[11px]">Branch Name</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-[3px] text-[11px]">PFI Name</td>
            </tr>
          </tbody>
        </table>

        <div className="border-x border-b border-black px-2 py-1 text-[11px] leading-tight">
          <span className="font-bold">Due Diligence Checklist:</span> The following are the requirements
          for due diligence of a credit guarantee facilitated loan/investment and documents attesting to
          the same need to be on file and shall be made available to the CGD upon request:
        </div>

        <table className="w-full border-collapse">
          <tbody>
            {[
              ['1.', 'Loan Application according to the Manual of Credit Guarantee Scheme', 'YES'],
              ['2.', 'Application submitted solely for Term Loan under Tk 25,000 Crore Refinance Scheme', 'YES'],
              ['3.', 'The document that certifies the enterprise falls under CMSME Category', 'YES'],
              ['4.', 'On-site visit report', 'YES'],
              [
                '5.',
                'Financial statements (Balance Sheet/Income Statement, Cash Flow Statement) or any written statement(s) based on production/sales/turnover of the previous year (one/more) of CMSME',
                'YES',
              ],
              ['6.', 'Credit analysis report including', 'YES'],
              ['a)', 'Overall credit rating.', 'Not Rated'],
              ['b)', 'Discussion on industry/competitive environment,', 'YES'],
              ['c)', 'Projected income or cash flow statement,', 'YES'],
              ['d)', 'Assessment of management capacity/competency,', 'YES'],
              ['e)', 'Evaluation of previous business performance,', 'YES'],
              ['f)', "Supplier checks as to borrower's adherence to payment arrangements,", 'YES'],
              [
                'g)',
                'Comments on capital adequacy and composition of balance sheet including changes in inventory, account receivable and accounts payable,',
                'YES',
              ],
              ['h)', 'Trends in Sales, operating income, and net income', 'YES'],
              ['i)', 'Summary and recommendation/approval by authorized bank officers including all exposure to proposed borrower and group, if any', 'YES'],
              ['7.', "The borrower's regular on all credit facilities from Bank/FI", 'YES'],
              ['8.', 'Satisfactory CIB report of the Borrower', 'YES'],
              ['9.', 'Proposed facilities are not a rescheduling of existing facilities', 'YES'],
              ['10.', "Verification that borrower's premises or address are in place, and machinery (if any) are working in orderly", 'YES'],
              ['11.', 'The borrower is not subject to any court proceedings, and is not the subject of any legal actions either in process or pending and', 'YES'],
              ['12.', 'The borrower’s fixed assets are free from any liens or encumbrances.', 'YES'],
            ].map(([sl, req, val], idx) => (
              <tr key={`due-${idx}`}>
                <td className="w-[34px] border border-black px-1 py-[3px] text-[11px] align-top">{sl}</td>
                <td className="border border-black px-1 py-[3px] text-[11px] align-top">{req}</td>
                <td className="w-[60px] border border-black px-1 py-[3px] text-[11px] align-top">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-x border-b border-black px-2 py-1 text-[11px] leading-tight">
          <span className="font-bold">Documentary Checklist:</span> In addition to the requirements for due
          diligence stated above for each loan, the PFI needs to certify the following documents
          available in the concerned file, which may be verified by the CGD:
        </div>

        <table className="w-full border-collapse">
          <tbody>
            {[
              ['1.', 'Loan Application Form', 'YES'],
              ['2.', 'Trade License', 'YES'],
              ['3.', 'Partnership Deed (For Partnership business only)', 'N/A'],
              ['4.', 'Board Resolution (For Partnership business/Limited Company only)', 'N/A'],
              ['5.', 'Certificate of Incorporation (For Limited Company only)', 'N/A'],
              ['6.', 'Memorandum & Articles of Association (For Limited Company only)', 'N/A'],
              ['7.', 'Form XI/Schedule X (If applicable) (For Limited Company only)', 'N/A'],
              ['8.', 'T & T phone number of the residence/office', '0'],
              ['9.', 'Latest 12 months Business Account Statement', 'YES'],
              ['10.', 'Photograph of Proprietor/Key Partner/Managing Director', 'YES'],
              ['11.', 'Attested photocopy of TIN Certificate/Tax Return Receipt', 'YES'],
              ['12.', 'Utility Bill of business address', 'YES'],
              ['13.', 'Attested photocopy of Possession/Rental Deed/consecutive three months’ rent paid receipt', 'YES'],
              ['14.', 'Photocopy of Nationality Certificate/Passport/Certificate of SSC/Voter ID Card/ID Card of the loan/investment applicant', 'YES'],
              ['15.', 'Environment Policy compliances', 'YES'],
              ['16.', 'CIB report', 'YES'],
              ['17.', 'Acknowledgement of the borrower for guarantee application', 'YES'],
              ['18.', 'Personal guarantee form (Joint/Several Guarantee)', 'YES'],
              ['19.', 'A declaration of the CMSME owner(s), partner(s) and shareholder(s) on their non-involvement in eligible business activities and non-duplication of loan/investment under Credit Guarantee facilities', 'YES'],
              ['20.', 'Other (specify):', 'N/A'],
              ['', 'If yes:', 'N/A'],
            ].map(([sl, req, val], idx) => (
              <tr key={`doc-${idx}`}>
                <td className="w-[34px] border border-black px-1 py-[3px] text-[11px] align-top">{sl}</td>
                <td className="border border-black px-1 py-[3px] text-[11px] align-top">{req}</td>
                <td className="w-[60px] border border-black px-1 py-[3px] text-[11px] align-top">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-x border-b border-black px-2 pb-2 pt-8 text-[11px]">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="mx-auto h-0 w-[85%] border-t border-black"></div>
              <div className="mt-2 font-bold">Seal and Signature of Initiator</div>
            </div>
            <div>
              <div className="mx-auto h-0 w-[85%] border-t border-black"></div>
              <div className="mt-2 font-bold">Authorized Signature</div>
            </div>
            <div>
              <div className="mx-auto h-0 w-[85%] border-t border-black"></div>
              <div className="mt-2 font-bold">Authorized Signature</div>
            </div>
          </div>
          <div className="mt-2">Name &amp; PIN: -(-)</div>
          <div className="mt-1">Cell No :</div>
        </div>
      </div>
    </div>
  )
}

export default CreditGuaranteeScheme
