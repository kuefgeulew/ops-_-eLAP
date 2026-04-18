/**
 * Institutional account opening form, part one — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function AccountOpeningForm() {
  const { get, formatBDT, profile } = useCaseData()
  void formatBDT
  void profile
  const topFieldWrap = 'relative w-full min-h-[54px]'
  const topLine = 'absolute left-0 right-0 bottom-[8px] border-b border-dotted border-[#1b8ccc]'
  const topValue = 'absolute right-0 bottom-[3px] pl-2 text-[16px] leading-none text-[#1f2a37]'
  const topLabel = 'mb-[6px] text-[30px] font-semibold leading-none text-[#0070b8]'
  const topSubLabel = 'mt-[3px] text-[12px] font-normal leading-none text-[#0070b8]'

  return (
    <div className="min-h-screen bg-white px-4 py-3 text-black">
      <div className="mx-auto w-full max-w-[1700px] font-['Times_New_Roman']">
        <div className="flex justify-end">
          <button
            type="button"
            className="border border-[#555] px-2 py-[1px] text-[12px] leading-none text-[#111]"
          >
            Print
          </button>
        </div>

        <h1 className="mt-1 text-right text-[78px] font-bold leading-[0.9] text-[#0070b8]">
          <span className="block">Institutional Account</span>
          <span className="block">Opening Form</span>
        </h1>

        <div className="mt-[200px] ml-auto w-[940px] space-y-4">
          <div className={topFieldWrap}>
            <div className={topLabel}>Account Opening Date:</div>
            <span className={topLine}></span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>
              <div>Account Name</div>
              <div className={topSubLabel}>in English [Block Letter]</div>
            </div>
            <span className={topLine}></span>
            <span className={topValue}>{get('businessName')}</span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>একাউন্টের নাম (বাংলায়)</div>
            <span className={topLine}></span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Application No.</div>
            <span className={topLine}></span>
            <span className={topValue}>25120002606</span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Account CIF</div>
            <span className={topLine}></span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>
              <div>Account Number</div>
              <div className={topSubLabel}>(for Bank use only)</div>
            </div>
            <span className={topLine}></span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Preferred Branch Name</div>
            <span className={topLine}></span>
            <span className={topValue}>{get('territory')} (1503)</span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Scheme Code</div>
            <span className={topLine}></span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Source Code (PSO)</div>
            <span className={topLine}></span>
            <span className={topValue}>.</span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Monitoring PSO</div>
            <span className={topLine}></span>
            <span className={topValue}>.</span>
          </div>
        </div>

        <div className="mt-14 ml-auto w-[940px] space-y-4">
          <div className={topFieldWrap}>
            <div className={topLabel}>Reference PSO</div>
            <span className={topLine}></span>
            <span className={topValue}>.</span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Source Name &amp; PIN</div>
            <span className={topLine}></span>
          </div>

          <div className="pt-8">
            <div className={topFieldWrap}>
              <div className={topLabel}>Sector Code</div>
              <span className={topLine}></span>
            </div>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Deposit Code</div>
            <span className={topLine}></span>
          </div>

          <div className={topFieldWrap}>
            <div className={topLabel}>Cost Center</div>
            <span className={topLine}></span>
            <span className={topValue}>99029209</span>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1750px] border-t border-transparent pt-2 font-['Arial'] text-[11px] leading-tight text-black [&_table]:text-[11px] [&_table]:leading-tight [&_input[type='checkbox']]:h-[13px] [&_input[type='checkbox']]:w-[13px] [&_input[type='checkbox']]:align-middle">
          <h2 className="text-center text-[30px] font-semibold leading-none">Institutional Account Opening Form</h2>

          <p className="mt-2">
            Please complete all details in CAPITAL letter and strike out [X] the fields/boxes which are not
            applicable.
          </p>
          <div className="mt-1 flex justify-between">
            <span>Manager</span>
            <span>Date:</span>
          </div>
          <p className="mt-1">{get('territory')} Branch</p>
          <p>Dear Sir,</p>
          <p>I/we are applying to open the following account in your branch. My/our detailed information are given below.</p>

          <h3 className="mt-2 text-center text-[20px] font-semibold">Section 1: Account-Related Information</h3>

          <div className="mt-2 grid grid-cols-[40px_310px_1fr] gap-x-2 gap-y-1">
            <div>1.</div>
            <div>Account Title:</div>
            <div className="border-b border-dotted border-black">{get('businessName')}</div>

            <div></div>
            <div>বাংলা নাম:</div>
            <div className="border-b border-dotted border-black"></div>

            <div>2.</div>
            <div>Type of Account:</div>
            <div className="border-b border-dotted border-black">Current Account</div>

            <div>3.</div>
            <div>Product:</div>
            <div className="border-b border-dotted border-black"></div>

            <div>4.</div>
            <div>Currency:</div>
            <div className="border-b border-dotted border-black">Taka</div>

            <div>5.</div>
            <div>Mode of Operation:</div>
            <div className="border-b border-dotted border-black">-</div>
          </div>

          <div className="mt-2 flex items-end justify-between">
            <div className="grid grid-cols-[40px_310px_150px_1fr] gap-x-2">
              <div>6.</div>
              <div>Initial Deposit:</div>
              <div>0</div>
              <div>In words:</div>
            </div>
            <div className="space-x-3">
              <label>
                <input type="checkbox" className="mr-1 align-middle" />
                Cash
              </label>
              <label>
                <input type="checkbox" className="mr-1 align-middle" />
                Cheque
              </label>
            </div>
          </div>

          <h3 className="mt-2 text-center text-[20px] font-semibold">Section 2: Business Related Information</h3>

          <div className="mt-2 grid grid-cols-[40px_310px_1fr_240px] gap-x-2 gap-y-1">
            <div>1.</div>
            <div>Type of Concern</div>
            <div>{get('legalStatus').toUpperCase()}</div>
            <div></div>

            <div>2.</div>
            <div>Trade License Number:</div>
            <div>08326033699</div>
            <div className="text-right">Expiry Date: 30-Jun-2026</div>

            <div></div>
            <div>Issuing Authority:</div>
            <div>DNCC MANSIB</div>
            <div></div>

            <div>3.</div>
            <div>Registration Number:</div>
            <div>-</div>
            <div className="text-right">Date: 0</div>
          </div>

          <div className="mt-1 grid grid-cols-[40px_310px_1fr] gap-x-2 gap-y-1">
            <div></div>
            <div>Registration Authority Country:</div>
            <div>Bangladesh</div>
          </div>

          <div className="mt-2 border border-black">
            <div className="grid grid-cols-[220px_1fr_1fr_1fr_1fr] border-b border-black text-[11px] font-semibold">
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Preferred Address
              </div>
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Registered Address
              </div>
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Business/Office Address
              </div>
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Factory Address
              </div>
              <div className="px-1"></div>
            </div>

            <div className="grid grid-cols-[220px_1fr_1fr_1fr_1fr] text-[11px]">
              <div className="border-r border-b border-black px-1">a. Flat/House/Road/Block/Area/Village</div>
              <div className="border-r border-b border-black px-1">KA-244, JAMUNA FUTURE PARK SHOP-L2, MANSI B3, {get('city')} (South), {get('city')}, {get('city')} 3369, 150,1</div>
              <div className="border-r border-b border-black px-1">4, MANSI B07 D B2, VATARA, KURIL, MANSIB</div>
              <div className="border-r border-b border-black px-1">OFFICE ADDRESS MANSI L3, OFFICE ADDRESS MANSI L2, OFFICE ADDRESS MANSI B3, {get('city')} (South), {get('city')}, {get('city')}, 1206, 150,1</div>
              <div className="border-b border-black px-1">{get('city')} (South), {get('city')}, {get('city')}, 1206</div>

              <div className="border-r border-b border-black px-1">b. Upozila/Thana</div>
              <div className="border-r border-b border-black px-1">{get('city')}</div>
              <div className="border-r border-b border-black px-1">{get('city')}</div>
              <div className="border-r border-b border-black px-1">{get('city')}</div>
              <div className="border-b border-black px-1">{get('city')}</div>

              <div className="border-r border-b border-black px-1">c. City/District</div>
              <div className="border-r border-b border-black px-1">{get('city')} (South)</div>
              <div className="border-r border-b border-black px-1">{get('city')} (South)</div>
              <div className="border-r border-b border-black px-1">{get('city')} (South)</div>
              <div className="border-b border-black px-1">{get('city')} (South)</div>

              <div className="border-r border-b border-black px-1">d. Division</div>
              <div className="border-r border-b border-black px-1">{get('city').toUpperCase()}</div>
              <div className="border-r border-b border-black px-1">{get('city').toUpperCase()}</div>
              <div className="border-r border-b border-black px-1">{get('city').toUpperCase()}</div>
              <div className="border-b border-black px-1">{get('city').toUpperCase()}</div>

              <div className="border-r border-b border-black px-1">e. Post Code</div>
              <div className="border-r border-b border-black px-1">3369</div>
              <div className="border-r border-b border-black px-1">1206</div>
              <div className="border-r border-b border-black px-1">1206</div>
              <div className="border-b border-black px-1">1206</div>

              <div className="border-r border-black px-1">f. Country</div>
              <div className="border-r border-black px-1">Bangladesh</div>
              <div className="border-r border-black px-1">Bangladesh</div>
              <div className="border-r border-black px-1">Bangladesh</div>
              <div className="px-1">Bangladesh</div>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-[24px_250px_1fr_90px_1fr_130px_1fr] items-center gap-x-1 gap-y-1">
            <div>g</div>
            <div>Mobile 1 -</div>
            <div className="border-b border-dotted border-black"></div>
            <div>Mobile 2 -</div>
            <div className="border-b border-dotted border-black"></div>
            <label className="text-right">
              <input type="checkbox" className="mr-1 align-middle" />
              Mobile Preferred
            </label>
            <div>Phone No:</div>

            <div>h</div>
            <div>E-mail 1 -</div>
            <div className="border-b border-dotted border-black"></div>
            <div>E-mail 2 -</div>
            <div className="border-b border-dotted border-black"></div>
            <label className="text-right">
              <input type="checkbox" className="mr-1 align-middle" />
              E-mail Preferred
            </label>
            <div>E-mail</div>
          </div>

          <div className="mt-2 grid grid-cols-[40px_310px_1fr_220px] gap-x-2 gap-y-1">
            <div>5.</div>
            <div>VAT Registration Number/BIN -</div>
            <div></div>
            <div></div>

            <div>6.</div>
            <div>TIN/TIN No:</div>
            <div>79528133689</div>
            <div></div>

            <div>7.</div>
            <div>Business Ownership: Majority Male</div>
            <div></div>
            <div></div>

            <div>8.</div>
            <div>Nature of Business: Trading</div>
            <div></div>
            <div></div>

            <div>9.</div>
            <div>Product/Service Type (Details): MOBILE SHOWROOM</div>
            <div></div>
            <div className="text-right">Annual Turnover: ৳ 111,111,111</div>
          </div>

          <h3 className="mt-2 text-center text-[20px] font-semibold">
            Section 3: Debit Card, Cheque Book &amp; Alternative Banking Facilities
          </h3>

          <div className="mt-2 grid grid-cols-[40px_230px_120px_120px_220px_120px_120px_1fr] items-center gap-y-1">
            <div>1.</div>
            <div>Cheque Book</div>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              Yes
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              No
            </label>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div>2.</div>
            <div>SMS Banking</div>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              Yes
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              No
            </label>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div>5.</div>
            <div>VISA Debit Card Facility</div>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              Yes
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              No
            </label>
            <div>
              <input type="checkbox" className="mr-1 align-middle" />
              TARA Debit Card (for females only)
            </div>
            <div></div>
            <div></div>
            <div></div>

            <div>3.</div>
            <div>E-Statement</div>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              Yes
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              No
            </label>
            <div className="col-span-4">Name to be printed on the card (within 21 character including blank spaces)</div>

            <div>4.</div>
            <div>Internet Banking</div>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              Yes
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              No
            </label>
            <div className="col-span-4 border-b border-dashed border-black"></div>
          </div>

          <div className="mt-10 grid grid-cols-2 text-center">
            <div className="mx-8 border-t border-dashed border-black pt-1">Account Opened By</div>
            <div className="mx-8 border-t border-dashed border-black pt-1">Approved by</div>
          </div>

          <h3 className="mt-8 text-center text-[20px] font-semibold">Section 4: Applicant&apos;s Personal Information</h3>

          <div className="mt-2 grid grid-cols-[1fr_380px] gap-3">
            <div className="grid grid-cols-[40px_320px_1fr_280px] gap-x-2 gap-y-1">
              <div>1.</div>
              <div>Accountholder&apos;s Name* Mr/Mrs./Ms.</div>
              <div>SABINA SARMIN</div>
              <div></div>

              <div></div>
              <div>বাংলা নাম:</div>
              <div className="border-b border-dotted border-black"></div>
              <div></div>

              <div>3.</div>
              <div>Gender:</div>
              <div></div>
              <div>Date of Birth: 25-May-1977</div>

              <div>4.</div>
              <div>Marital Status: MST01</div>
              <div></div>
              <div></div>

              <div>5.</div>
              <div>Father&apos;s Name: MD SHAFIQUL ISLAM KHAN</div>
              <div></div>
              <div></div>

              <div>6.</div>
              <div>Mother&apos;s Name: SHALEKHA KHANAM</div>
              <div></div>
              <div></div>

              <div>7.</div>
              <div>Spouse Name: SK SHUVO RAHMAN</div>
              <div></div>
              <div></div>

              <div>8.</div>
              <div>Nationality: Bangladesh</div>
              <div></div>
              <div></div>

              <div>10.</div>
              <div>TIN-(TIN No): 16384691938</div>
              <div></div>
              <div>9. National ID No: 2694B13881192</div>

              <div>11.</div>
              <div>Passport No (if any):</div>
              <div></div>
              <div>(a) Issue Date:</div>

              <div></div>
              <div>(b) Expiry date:</div>
              <div></div>
              <div>(c) Issue Place:</div>

              <div>12.</div>
              <div>Other ID No:</div>
              <div></div>
              <div></div>

              <div></div>
              <div className="text-[10px]">(In case NID or Passport is not available)</div>
              <div></div>
              <div></div>

              <div>14.</div>
              <div>Occupation Details: Businessman</div>
              <div></div>
              <div>15. Relation with Institution Managing Director</div>

              <div>16.</div>
              <div>Contact Details:</div>
              <div></div>
              <div></div>
            </div>

            <div className="flex items-start justify-end">
              <div className="h-[150px] w-[300px] border border-black"></div>
            </div>
          </div>

          <div className="mt-2 border border-black">
            <div className="grid grid-cols-[220px_1fr_1fr_1fr] border-b border-black text-[11px] font-semibold">
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Prefered Address
              </div>
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Present Address
              </div>
              <div className="border-r border-black px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Permanent Address
              </div>
              <div className="px-1">
                <input type="checkbox" className="mr-1 align-middle" />
                Work Address
              </div>
            </div>

            <div className="grid grid-cols-[220px_1fr_1fr_1fr] text-[11px]">
              <div className="border-r border-b border-black px-1">a. Flat / House / Road / Block / Area / Village</div>
              <div className="border-r border-b border-black px-1">AFFINITY FLAT F5, 461 SOUTH MONIPUR, MIRPUR, Mirpur, Tangail, {get('city').toUpperCase()}, 1216, 237,1</div>
              <div className="border-r border-b border-black px-1">365, SOUTH MONIPUR, Lalmonirhat Sadar, Lalmonirhat, RANGPUR, 1216, 437,7</div>
              <div className="border-b border-black px-1">KA 214, JAMUNA FUTURE PARK SHOP 4C, MANSIB 001 B2, VATARA, KURIL, MANSIB L3, {get('city')} (South), {get('city')}, {get('city')}, 3369, 150,1</div>

              <div className="border-r border-b border-black px-1">b. Upazila/Thana</div>
              <div className="border-r border-b border-black px-1">Mirpur</div>
              <div className="border-r border-b border-black px-1">Lalmonirhat Sadar</div>
              <div className="border-b border-black px-1">{get('city')}</div>

              <div className="border-r border-b border-black px-1">c. City/District</div>
              <div className="border-r border-b border-black px-1">Tangail</div>
              <div className="border-r border-b border-black px-1">Lalmonirhat</div>
              <div className="border-b border-black px-1">{get('city')} (South)</div>

              <div className="border-r border-b border-black px-1">d. Division</div>
              <div className="border-r border-b border-black px-1">{get('city').toUpperCase()}</div>
              <div className="border-r border-b border-black px-1">RANGPUR</div>
              <div className="border-b border-black px-1">{get('city').toUpperCase()}</div>

              <div className="border-r border-b border-black px-1">e. Post Code</div>
              <div className="border-r border-b border-black px-1">1216</div>
              <div className="border-r border-b border-black px-1">1216</div>
              <div className="border-b border-black px-1">3369</div>

              <div className="border-r border-black px-1">f. country</div>
              <div className="border-r border-black px-1">Bangladesh</div>
              <div className="border-r border-black px-1">Bangladesh</div>
              <div className="px-1">Bangladesh</div>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-[24px_250px_1fr_90px_1fr_170px_1fr_170px_1fr] items-center gap-x-1 gap-y-1">
            <div>g.</div>
            <div>Mobile 1: 01730097942</div>
            <div></div>
            <div>Mobile 2:</div>
            <div></div>
            <div>Preferred Phone No:</div>
            <div></div>
            <label className="text-right">
              <input type="checkbox" className="mr-1 align-middle" />
              Mobile 1
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              Mobile 2
            </label>

            <div>h.</div>
            <div>E-mail 1:</div>
            <div></div>
            <div>Email 2:</div>
            <div></div>
            <div>Preferred E-mail:</div>
            <div></div>
            <label className="text-right">
              <input type="checkbox" className="mr-1 align-middle" />
              E-mail 1
            </label>
            <label>
              <input type="checkbox" className="mr-1 align-middle" />
              E-mail 2
            </label>
          </div>

          <div className="mt-10 grid grid-cols-2 text-center">
            <div className="mx-8 border-t border-dashed border-black pt-1">Account Opened By</div>
            <div className="mx-8 border-t border-dashed border-black pt-1">Approved by</div>
          </div>

          <h3 className="mt-8 text-center text-[20px] font-semibold">Declaration &amp; Signature</h3>
          <p className="mt-2 text-[11px]">
            I/We hereby declare that the above mentioned information are all correct and shall provide any further
            information/document which are required.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 border border-black text-[11px]">
            <div className="border-r border-black p-2">
              <div className="border-b border-black pb-1 text-center font-semibold">1. First Applicant</div>
              <div className="m-3 h-[140px] border border-black text-center leading-[140px]">
                Please attach photograph here (First Applicant)
              </div>
              <div className="border-y border-black py-1 text-center font-semibold">Signature (First Applicant)</div>
              <div className="mt-2 h-[36px] border-b border-dashed border-black"></div>
              <div className="mt-2">Name: SABINA SARMIN</div>
              <div className="mt-2 flex items-center gap-2">
                <span>Date:</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
              </div>
            </div>

            <div className="border-r border-black p-2">
              <div className="border-b border-black pb-1 text-center font-semibold">2. Second Applicant</div>
              <div className="m-3 h-[140px] border border-black text-center leading-[140px]">
                Please attach photograph here (Second Applicant)
              </div>
              <div className="border-y border-black py-1 text-center font-semibold">Signature (Second Applicant)</div>
              <div className="mt-2 h-[36px] border-b border-dashed border-black"></div>
              <div className="mt-2">Name: -</div>
              <div className="mt-2 flex items-center gap-2">
                <span>Date:</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
              </div>
            </div>

            <div className="p-2">
              <div className="border-b border-black pb-1 text-center font-semibold">3. Third Joint Applicant</div>
              <div className="m-3 h-[140px] border border-black text-center leading-[140px]">
                Please attach photograph here (Third Applicant)
              </div>
              <div className="border-y border-black py-1 text-center font-semibold">Signature (Third Applicant)</div>
              <div className="mt-2 h-[36px] border-b border-dashed border-black"></div>
              <div className="mt-2">Name: -</div>
              <div className="mt-2 flex items-center gap-2">
                <span>Date:</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 text-center">
            <div className="mx-8 border-t border-dashed border-black pt-1">Account Opened By</div>
            <div className="mx-8 border-t border-dashed border-black pt-1">Approved by</div>
          </div>

          <h3 className="mt-8 text-center text-[20px] font-semibold">Customer Declaration (Bank&apos;s copy)</h3>
          <p className="mt-2 text-[11px]">
            Dear Customer, please read and sign this form to confirm that all relevant information regarding your
            bank account have been provided to you at the time of account opening.
          </p>
          <div className="mt-1 text-[11px]">
            <p className="font-semibold">Accountholder&apos;s Declaration: I confirm that I have understood and agreed with all the following points:</p>
            <p>1. I/We hereby declare that the information I/we have provided in the account opening form are all correct. I/We shall provide any further information if needed.</p>
            <p>2. I/We have provided all the required documents to open the account and the information in those documents are correct to the best of my/our knowledge.</p>
            <p>3. I/We hereby also acknowledge that I/we have read, understood and agreed to the Terms &amp; Conditions governing customer account(s) and all other products.</p>
            <p>4. I/We confirm that the bank representative has explained all features and obligations of this account.</p>
            <p>5. I/We also declare that I am aware of all the fees and charges related to this account and the related services to receive interest.</p>
            <p>6. I/We understand that Debit Card (where applicable) is mandatory for my/our account and will be delivered at branch due to security reasons.</p>
            <p>7. I/We also understand that SMS Banking (where applicable) is mandatory for my/our account and any inactive account may be made dormant.</p>
            <p>8. If no transaction (deposit or withdrawal) takes place for 2 years in case of Savings Account and 1 year in case of Current Account then the account will be marked as Dormant.</p>
            <p>9. I/We also declare that I/we have not given any cash or cheque to any bank representative to open the account without receiving any bank receipt.</p>
            <p>10. If 500 will be kept as minimum balance in my/our account to pay Government Excise Duty and 15% VAT applicable for all TCs and charges.</p>
            <p>11. I hereby consent for BRAC Bank Limited to treat my account as per the directives of FATCA by applicable law.</p>
            <p>12. The Bank reserves the right to amend the Schedule of Charges and interest rates at any time.</p>
          </div>

          <p className="mt-2 text-[11px]">
            For more details, please refer to Schedule of Charges available at all BRAC Bank branches/Website.
          </p>
          <p className="text-[11px]">
            Additional information provided in the following pages (FATCA, Nominee Details and Terms and Conditions) is
            hereby acknowledged.
          </p>

          <div className="mt-2 border border-black text-[11px]">
            <div className="grid grid-cols-2 border-b border-black text-center font-semibold">
              <div className="border-r border-black py-1">Acceptance Signature of Applicant</div>
              <div className="py-1">Bank Official (person who booked the Account)</div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="border-r border-black px-2 py-1">Name: {get('businessName')}</div>
              <div className="px-2 py-1">Name &amp; PIN:</div>
            </div>
            <div className="grid grid-cols-2 text-center">
              <div className="border-r border-black py-2">Seal/ Signature &amp; Date</div>
              <div className="py-2">Seal/ Signature &amp; Date</div>
            </div>
          </div>

          <h3 className="mt-6 text-center text-[20px] font-semibold">Customer Declaration (Customer copy)</h3>
          <p className="mt-2 text-[11px]">
            Dear Customer, please read and sign this form to confirm that all relevant information regarding your
            bank account have been provided to you at the time of account opening.
          </p>
          <div className="mt-1 text-[11px]">
            <p className="font-semibold">Accountholder&apos;s Declaration: I confirm that I have understood and agreed with all the following points:</p>
            <p>1. I/We hereby declare that the information I/we have provided in the account opening form are all correct. I/We shall provide any further information if needed.</p>
            <p>2. I/We have provided all the required documents to open the account and the information in those documents are correct to the best of my/our knowledge.</p>
            <p>3. I/We hereby also acknowledge that I/we have read, understood and agreed to the Terms &amp; Conditions governing customer account(s) and all other products.</p>
            <p>4. I/We confirm that the bank representative has explained all features and obligations of this account.</p>
            <p>5. I/We also declare that I am aware of all the fees and charges related to this account and the related services to receive interest.</p>
            <p>6. I/We understand that Debit Card (where applicable) is mandatory for my/our account and will be delivered at branch due to security reasons.</p>
            <p>7. I/We also understand that SMS Banking (where applicable) is mandatory for my/our account and any inactive account may be made dormant.</p>
            <p>8. If no transaction (deposit or withdrawal) takes place for 2 years in case of Savings Account and 1 year in case of Current Account then the account will be marked as Dormant.</p>
            <p>9. I/We also declare that I/we have not given any cash or cheque to any bank representative to open the account without receiving any bank receipt.</p>
            <p>10. If 500 will be kept as minimum balance in my/our account to pay Government Excise Duty and 15% VAT applicable for all TCs and charges.</p>
            <p>11. I hereby consent for BRAC Bank Limited to treat my account as per the directives of FATCA by applicable law.</p>
            <p>12. The Bank reserves the right to amend the Schedule of Charges and interest rates at any time.</p>
          </div>

          <p className="mt-2 text-[11px]">
            For more details, please refer to Schedule of Charges available at all BRAC Bank branches/Website.
          </p>
          <p className="text-[11px]">
            Additional information provided in the following pages (FATCA, Nominee Details and Terms and Conditions) is
            hereby acknowledged.
          </p>

          <div className="mt-2 border border-black text-[11px]">
            <div className="grid grid-cols-2 border-b border-black text-center font-semibold">
              <div className="border-r border-black py-1">Acceptance Signature of Applicant</div>
              <div className="py-1">Bank Official (person who booked the Account)</div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="border-r border-black px-2 py-1">Name: {get('businessName')}</div>
              <div className="px-2 py-1">Name &amp; PIN:</div>
            </div>
            <div className="grid grid-cols-2 text-center">
              <div className="border-r border-black py-2">Seal/ Signature &amp; Date</div>
              <div className="py-2">Seal/ Signature &amp; Date</div>
            </div>
          </div>

          <h3 className="mt-8 text-center text-[20px] font-semibold">গ্রাহকের ঘোষণাপত্র (ব্যাংক কপি)</h3>
          <div className="mt-2 text-[11px] leading-tight">
            <p>
              প্রিয় গ্রাহক, অনুগ্রহ করে এই ফর্মটি পড়ে, বুঝে এবং নির্দিষ্ট স্থানে স্বাক্ষর করুন। অ্যাকাউন্ট খোলার সময়
              সংশ্লিষ্ট তথ্যাবলি আপনাকে সরবরাহ করা হয়েছে।
            </p>
            <p className="font-semibold">অ্যাকাউন্টধারীর ঘোষণা: আমি/আমরা নিম্নোক্ত বিষয়ে অবগত ও সম্মত:</p>
            <p>১) অ্যাকাউন্ট খোলার ফর্মে প্রদত্ত তথ্য সঠিক; প্রয়োজনে অতিরিক্ত তথ্য/দলিল প্রদান করবো।</p>
            <p>২) প্রয়োজনীয় কাগজপত্র জমা দিয়েছি এবং প্রদত্ত তথ্য আমার/আমাদের জানা মতে যথার্থ।</p>
            <p>৩) অ্যাকাউন্ট ও অন্যান্য সেবার শর্তাবলি (Terms &amp; Conditions) পড়ে বুঝে সম্মতি দিচ্ছি।</p>
            <p>৪) ব্যাংক প্রতিনিধি পণ্যের বৈশিষ্ট্য, ফি/চার্জ ও দায়বদ্ধতা সম্পর্কে ব্যাখ্যা করেছেন।</p>
            <p>৫) প্রযোজ্য সকল ফি, চার্জ, এক্সসাইজ ডিউটি ও ভ্যাট সম্পর্কে অবগত আছি।</p>
            <p>৬) প্রযোজ্য ক্ষেত্রে ডেবিট কার্ড নিরাপত্তাজনিত কারণে শাখা থেকে সরবরাহ করা হবে।</p>
            <p>৭) এসএমএস ব্যাংকিং প্রযোজ্য ক্ষেত্রে বাধ্যতামূলক এবং নিষ্ক্রিয় হিসাব ডরম্যান্ট হতে পারে।</p>
            <p>৮) সেভিংস হিসাবে ২ বছর এবং কারেন্ট হিসাবে ১ বছর লেনদেন না হলে হিসাব ডরম্যান্ট হবে।</p>
            <p>৯) ব্যাংক রসিদ ছাড়া কোনো প্রতিনিধি/ব্যক্তিকে নগদ/চেক প্রদান করিনি।</p>
            <p>১০) FATCA ও প্রযোজ্য বিধান অনুযায়ী তথ্য যাচাই/শেয়ার সম্পর্কে সম্মতি প্রদান করছি।</p>
            <p>১১) কর, বিধিবিধান বা নিয়ন্ত্রক নির্দেশনা অনুযায়ী ব্যাংক তথ্য হালনাগাদ/প্রযোজ্য ব্যবস্থা নিতে পারবে।</p>
            <p>১২) ব্যাংক প্রয়োজনবোধে ফি/চার্জ/সুদের হার সংশোধন করতে পারবে।</p>
          </div>

          <p className="mt-2 text-[11px]">
            আরও তথ্যের জন্য শিডিউল অব চার্জেস (ব্যাংক শাখা/ওয়েবসাইট) দেখুন। FATCA, Nominee Details এবং Terms
            and Conditions সংক্রান্ত অতিরিক্ত তথ্যাবলি গ্রহণ করা হলো।
          </p>

          <div className="mt-2 border border-black text-[11px]">
            <div className="grid grid-cols-2 border-b border-black text-center font-semibold">
              <div className="border-r border-black py-1">আবেদনকারীর স্বাক্ষর/মোহর</div>
              <div className="py-1">ব্যাংক কর্মকর্তা (যে কর্মকর্তা অ্যাকাউন্টটি বুক করেছেন)</div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="border-r border-black px-2 py-1">নাম: {get('businessName')}</div>
              <div className="px-2 py-1">নাম ও পিন:</div>
            </div>
            <div className="grid grid-cols-2 text-center">
              <div className="border-r border-black py-2">সিল/স্বাক্ষর ও তারিখ</div>
              <div className="py-2">সিল/স্বাক্ষর ও তারিখ</div>
            </div>
          </div>

          <h3 className="mt-6 text-center text-[20px] font-semibold">গ্রাহকের ঘোষণাপত্র (গ্রাহক কপি)</h3>
          <div className="mt-2 text-[11px] leading-tight">
            <p>
              প্রিয় গ্রাহক, অনুগ্রহ করে এই ফর্মটি পড়ে, বুঝে এবং নির্দিষ্ট স্থানে স্বাক্ষর করুন। অ্যাকাউন্ট খোলার সময়
              সংশ্লিষ্ট তথ্যাবলি আপনাকে সরবরাহ করা হয়েছে।
            </p>
            <p className="font-semibold">অ্যাকাউন্টধারীর ঘোষণা: আমি/আমরা নিম্নোক্ত বিষয়ে অবগত ও সম্মত:</p>
            <p>১) অ্যাকাউন্ট খোলার ফর্মে প্রদত্ত তথ্য সঠিক; প্রয়োজনে অতিরিক্ত তথ্য/দলিল প্রদান করবো।</p>
            <p>২) প্রয়োজনীয় কাগজপত্র জমা দিয়েছি এবং প্রদত্ত তথ্য আমার/আমাদের জানা মতে যথার্থ।</p>
            <p>৩) অ্যাকাউন্ট ও অন্যান্য সেবার শর্তাবলি (Terms &amp; Conditions) পড়ে বুঝে সম্মতি দিচ্ছি।</p>
            <p>৪) ব্যাংক প্রতিনিধি পণ্যের বৈশিষ্ট্য, ফি/চার্জ ও দায়বদ্ধতা সম্পর্কে ব্যাখ্যা করেছেন।</p>
            <p>৫) প্রযোজ্য সকল ফি, চার্জ, এক্সসাইজ ডিউটি ও ভ্যাট সম্পর্কে অবগত আছি।</p>
            <p>৬) প্রযোজ্য ক্ষেত্রে ডেবিট কার্ড নিরাপত্তাজনিত কারণে শাখা থেকে সরবরাহ করা হবে।</p>
            <p>৭) এসএমএস ব্যাংকিং প্রযোজ্য ক্ষেত্রে বাধ্যতামূলক এবং নিষ্ক্রিয় হিসাব ডরম্যান্ট হতে পারে।</p>
            <p>৮) সেভিংস হিসাবে ২ বছর এবং কারেন্ট হিসাবে ১ বছর লেনদেন না হলে হিসাব ডরম্যান্ট হবে।</p>
            <p>৯) ব্যাংক রসিদ ছাড়া কোনো প্রতিনিধি/ব্যক্তিকে নগদ/চেক প্রদান করিনি।</p>
            <p>১০) FATCA ও প্রযোজ্য বিধান অনুযায়ী তথ্য যাচাই/শেয়ার সম্পর্কে সম্মতি প্রদান করছি।</p>
            <p>১১) কর, বিধিবিধান বা নিয়ন্ত্রক নির্দেশনা অনুযায়ী ব্যাংক তথ্য হালনাগাদ/প্রযোজ্য ব্যবস্থা নিতে পারবে।</p>
            <p>১২) ব্যাংক প্রয়োজনবোধে ফি/চার্জ/সুদের হার সংশোধন করতে পারবে।</p>
          </div>

          <p className="mt-2 text-[11px]">
            আরও তথ্যের জন্য শিডিউল অব চার্জেস (ব্যাংক শাখা/ওয়েবসাইট) দেখুন। FATCA, Nominee Details এবং Terms
            and Conditions সংক্রান্ত অতিরিক্ত তথ্যাবলি গ্রহণ করা হলো।
          </p>

          <div className="mt-2 border border-black text-[11px]">
            <div className="grid grid-cols-2 border-b border-black text-center font-semibold">
              <div className="border-r border-black py-1">আবেদনকারীর স্বাক্ষর/মোহর</div>
              <div className="py-1">ব্যাংক কর্মকর্তা (যে কর্মকর্তা অ্যাকাউন্টটি বুক করেছেন)</div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="border-r border-black px-2 py-1">নাম: {get('businessName')}</div>
              <div className="px-2 py-1">নাম ও পিন:</div>
            </div>
            <div className="grid grid-cols-2 text-center">
              <div className="border-r border-black py-2">সিল/স্বাক্ষর ও তারিখ</div>
              <div className="py-2">সিল/স্বাক্ষর ও তারিখ</div>
            </div>
          </div>

          <div className="mt-6 border border-black text-[11px]">
            <div className="grid grid-cols-2 border-b border-black text-center font-semibold">
              <div className="border-r border-black py-1">আবেদনকারীর স্বাক্ষর/মোহর</div>
              <div className="py-1">ব্যাংক কর্মকর্তা (যে কর্মকর্তা অ্যাকাউন্টটি বুক করেছেন)</div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="border-r border-black px-2 py-1">নাম: {get('businessName')}</div>
              <div className="px-2 py-1">নাম ও পিন:</div>
            </div>
            <div className="grid grid-cols-2 text-center">
              <div className="border-r border-black py-2">সিল/স্বাক্ষর ও তারিখ</div>
              <div className="py-2">সিল/স্বাক্ষর ও তারিখ</div>
            </div>
          </div>

          <h3 className="mt-6 text-center text-[18px] font-bold tracking-wide">TERMS AND CONDITIONS (Non-Individual including Proprietorship)</h3>

          <div className="mt-2 border border-black px-2 py-2 text-[10px] leading-tight">
            <p>
              This agreement between the accountholder(s) (the &quot;Customer&quot;) and BRAC Bank PLC (the
              &quot;Bank&quot;) governs use of the account and all related products/services including cheque book,
              debit card, internet banking, SMS banking and any other service offered by the Bank from time to time.
            </p>
            <p className="mt-1">1. Governing Law: The account and this agreement shall be governed by the laws, rules and regulations of Bangladesh and by circulars/instructions of Bangladesh Bank.</p>
            <p>2. Bank Account: By opening and operating this account, the Customer agrees to comply with all applicable terms, fees, charges and operational instructions.</p>
            <p>3. KYC and Due Diligence: The Bank may collect, verify, update and preserve customer information, supporting documents and transaction profile as required by law.</p>
            <p>4. Customer Information: The Customer confirms all information and documents submitted are true, complete and valid; any change must be informed to the Bank immediately.</p>
            <p>5. Account Operation: The Bank may decline, delay, reverse, suspend or restrict any transaction where required by law, regulation, court order, security concern or internal policy.</p>
            <p>6. Dormant/Inactive: If no customer-induced transaction occurs for the period prescribed by policy, the account may be marked inactive/dormant and service restrictions may apply.</p>
            <p>7. Fees and Charges: Account maintenance fee, debit card fee, statement fee, government excise duty, VAT and other charges shall be recovered from the account as per prevailing schedule.</p>
            <p>8. Cheque Book and Instruments: The Customer is responsible for safekeeping cheque leaves and promptly reporting loss, theft, forgery, unauthorized use or suspected fraud.</p>
            <p>9. Debit Card and PIN: The Customer must keep card/PIN/credentials confidential. The Bank shall not be liable for losses caused by disclosure, negligence, phishing or social engineering.</p>
            <p>10. SMS/Internet Banking: Electronic service availability may vary due to network/system conditions. The Customer accepts associated risks and security obligations.</p>
            <p>11. Statement and Confirmation: Account statements/advices are deemed correct unless written objection is received within the timeline specified by the Bank.</p>
            <p>12. Lien and Set-off: The Bank may exercise lien/set-off against any account balance towards dues, liabilities, obligations, costs or charges payable by the Customer.</p>
            <p>13. Compliance and Reporting: The Customer authorizes the Bank to share information with regulators, law-enforcement, credit bureau, tax authority and correspondent institutions where legally required.</p>
            <p>14. FATCA/CRS/AML: The Customer agrees to provide declarations and supporting information for FATCA/CRS/AML and acknowledges consequences of non-compliance under applicable laws.</p>
            <p>15. Limitation of Liability: The Bank is not liable for interruption, delay or failure due to circumstances beyond control including force majeure, system outage, civil unrest, war or natural calamity.</p>
            <p>16. Indemnity: The Customer shall indemnify the Bank against losses, claims, expenses or liabilities arising from breach of these terms or misuse of account/services.</p>
            <p>17. Amendment: The Bank may amend any term, process, service feature, fee or charge at any time by notice through branch, website, statement message or other communication channels.</p>
            <p>18. Closure/Suspension: The Bank may close, block or suspend the account due to regulatory requirement, suspicious activity, unsatisfactory conduct or breach of terms.</p>
            <p>19. Notices: Communication delivered to the registered address/email/mobile shall be deemed duly served. The Customer must keep contact details updated.</p>
            <p>20. Acceptance: By signing this form and/or operating the account, the Customer confirms reading, understanding and acceptance of all terms and conditions including future amendments.</p>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3 text-[10px]">
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s signature with Date
              <div className="mt-2 text-left">Name: SABINA SARMIN</div>
              <div className="text-left">Designation: Managing Director</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
          </div>

          <div className="mt-4 border border-black px-2 py-2 text-[10px] leading-tight">
            <p className="font-semibold">E. STATEMENT:</p>
            <p>1) Upon selection of e-statement, physical statement may not be generated for regular periodic delivery unless specifically requested.</p>
            <p>2) E-statement shall be sent to the registered e-mail address and/or made available through digital channels designated by the Bank.</p>
            <p>3) The Customer is responsible to maintain active e-mail and device accessibility. Non-receipt due to invalid/inactive e-mail shall not relieve obligations.</p>
            <p>4) Any discrepancy in statement must be reported in writing within the stipulated timeline, failing which the statement shall be treated as accepted.</p>

            <p className="mt-1 font-semibold">F. UNAUTHORIZED/FRAUDULENT ACTIVITIES:</p>
            <p>1) The Customer shall immediately notify the Bank if any loss/theft/misuse of cheque book, card, password, PIN, token, mobile, e-mail, or suspicious transaction is detected.</p>
            <p>2) Delay in reporting may increase potential loss and associated liability to the Customer as per applicable law and banking practice.</p>
            <p>3) The Bank may temporarily block transactions/services for security verification and due diligence.</p>

            <p className="mt-1 font-semibold">G. ACCOUNT MAINTENANCE &amp; OPERATIONAL RESTRICTIONS:</p>
            <p>1) The account holder shall maintain minimum balance/average balance where required by product feature or policy.</p>
            <p>2) The Bank may return cheque/instrument, reject standing instruction, or hold transaction where balance is insufficient or compliance status is incomplete.</p>
            <p>3) If account documentation is incomplete/expired, the Bank may suspend debit transaction until required update is completed.</p>

            <p className="mt-1 font-semibold">H. SMS BANKING:</p>
            <p>1) SMS alert is a channel convenience service and may be impacted by network/operator/system availability.</p>
            <p>2) Charges for SMS service may be changed from time to time and debited from account as applicable.</p>
            <p>3) The Customer authorizes the Bank to send transactional/security/notification messages to the registered mobile number.</p>

            <p className="mt-1 font-semibold">I. INTERNET BANKING / DIGITAL CHANNELS:</p>
            <p>1) Access credentials (ID, password, OTP, token) are confidential and must not be disclosed under any circumstance.</p>
            <p>2) Transactions initiated through authenticated credentials shall be deemed valid and binding on the Customer.</p>
            <p>3) The Customer shall ensure secure devices/networks and updated anti-malware protection while using digital banking services.</p>
            <p>4) The Bank may impose transaction limits, session controls, and additional verification measures for risk management.</p>

            <p className="mt-1 font-semibold">J. LIABILITY:</p>
            <p>1) The Bank shall not be liable for direct/indirect loss from telecom failure, power outage, internet disruption, system downtime or force majeure events.</p>
            <p>2) The Customer shall remain liable for all obligations, dues, fees, taxes and charges arising from account usage.</p>

            <p className="mt-1 font-semibold">K. TERMINATION / CLOSURE:</p>
            <p>1) The Customer may request account closure subject to settlement of all liabilities, return of unused instruments/cards and completion of formalities.</p>
            <p>2) The Bank may close/freeze account with notice where feasible, or without prior notice when required by law, regulator, court order or risk concern.</p>

            <p className="mt-1 font-semibold">L. CUSTOMER ACKNOWLEDGMENT:</p>
            <p>1) I/We acknowledge receiving and understanding key facts, schedule of charges and relevant terms for account/services applied for.</p>
            <p>2) I/We consent to contact by phone/SMS/e-mail for service communication, security alerts and regulatory communication.</p>
            <p>3) I/We confirm that all declarations and signatures provided in this form are voluntary and legally binding.</p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3 text-[10px]">
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name: SABINA SARMIN</div>
              <div className="text-left">Designation: Managing Director</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
          </div>

          <h3 className="mt-6 text-center text-[19px] font-semibold">Section 6: FATCA</h3>
          <table className="mt-2 w-full border-collapse border border-black text-[11px]">
            <thead>
              <tr>
                <th className="border border-black px-1 py-1 text-center">Sl. No</th>
                <th className="border border-black px-1 py-1 text-center">Indicia of U.S. Status</th>
                <th className="border border-black px-1 py-1 text-center">Yes</th>
                <th className="border border-black px-1 py-1 text-center">No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-1 text-center">1.</td>
                <td className="border border-black px-1">Is the Country of Formation/ Incorporation/ Registration United States?</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center">✓</td>
              </tr>
              <tr>
                <td className="border border-black px-1 text-center">2.</td>
                <td className="border border-black px-1">Is any Registration/Business/Office communication address in United States?</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center">✓</td>
              </tr>
              <tr>
                <td className="border border-black px-1 text-center">3.</td>
                <td className="border border-black px-1">Is Owner/Signatory/Director/Beneficial Owner (BO) a U.S. person?</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center">✓</td>
              </tr>
              <tr>
                <td className="border border-black px-1 text-center">4.</td>
                <td className="border border-black px-1">Is any of the Owner/Signatory/Director/BO U.S citizen or Green Card holder or resident of the US?</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center">✓</td>
              </tr>
              <tr>
                <td className="border border-black px-1 text-center">5.</td>
                <td className="border border-black px-1">Is any of the Owner/Signatory/Director/BO has a U.S address or U.S phone number or U.S e-mail address?</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center">✓</td>
              </tr>
              <tr>
                <td className="border border-black px-1 text-center">6.</td>
                <td className="border border-black px-1">Does the entity receive payments sourced from U.S? If yes, identify payment/service and any other fixed determinable annual periodic income.</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center">✓</td>
              </tr>
              <tr>
                <td className="border border-black px-1 text-center">7.</td>
                <td className="border border-black px-1">If any of the above questions are answered Yes, provide details and share W9 form.</td>
                <td className="border border-black px-1 text-center"></td>
                <td className="border border-black px-1 text-center"></td>
              </tr>
            </tbody>
          </table>

          <div className="mt-10 grid grid-cols-4 gap-3 text-[10px]">
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name: SABINA SARMIN</div>
              <div className="text-left">Designation: Managing Director</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
            <div className="border-t border-dashed border-black pt-1 text-center">
              Applicant&apos;s Signature with Date
              <div className="mt-2 text-left">Name:</div>
              <div className="text-left">Designation:</div>
            </div>
          </div>

          <h3 className="mt-6 text-center text-[19px] font-semibold">For Bank Use Only</h3>
          <div className="mt-2 text-[11px]">
            <div className="grid grid-cols-[260px_1fr] items-center gap-2">
              <div>Reviewed By</div>
              <div className="flex flex-wrap gap-3">
                <label><input type="checkbox" className="mr-1 align-middle" />Branch Manager</label>
                <label><input type="checkbox" className="mr-1 align-middle" />RM</label>
                <label><input type="checkbox" className="mr-1 align-middle" />ASM</label>
                <label><input type="checkbox" className="mr-1 align-middle" />ARM/RM</label>
                <span>Code .......</span>
              </div>
            </div>
            <div className="mt-1 grid grid-cols-[260px_1fr] items-center gap-2">
              <div>Customer Acquisition Channel</div>
              <div className="flex flex-wrap gap-3">
                <label><input type="checkbox" className="mr-1 align-middle" />Branch</label>
                <label><input type="checkbox" className="mr-1 align-middle" />Staff Campaign</label>
                <label><input type="checkbox" className="mr-1 align-middle" />Sales</label>
                <label><input type="checkbox" className="mr-1 align-middle" />Sales Referral</label>
                <label><input type="checkbox" className="mr-1 align-middle" />Walk in</label>
                <label><input type="checkbox" className="mr-1 align-middle" />System Generated</label>
              </div>
            </div>
          </div>

          <table className="mt-2 w-full border-collapse border border-black text-[11px]">
            <thead>
              <tr>
                <th className="border border-black px-1 py-1 text-center" colSpan={2}>Business</th>
                <th className="border border-black px-1 py-1 text-center" colSpan={2}>Operations</th>
              </tr>
              <tr>
                <th className="border border-black px-1 py-1 text-center">Account Opened By</th>
                <th className="border border-black px-1 py-1 text-center">Account Approved By</th>
                <th className="border border-black px-1 py-1 text-center">Data Entry By</th>
                <th className="border border-black px-1 py-1 text-center">Data Entry Verified By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-1 py-5 text-center">Seal/ Signature &amp; Date</td>
                <td className="border border-black px-1 py-5 text-center">Seal/ Signature &amp; Date</td>
                <td className="border border-black px-1 py-5 text-center">Seal/ Signature &amp; Date</td>
                <td className="border border-black px-1 py-5 text-center">Seal/ Signature &amp; Date</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-8 text-center text-[18px] font-semibold">Monthly Transaction Profile</h3>
          <div className="mt-1 text-[11px]">Monthly Turnover: ৳ 9,259,280</div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <table className="w-full border-collapse border border-black text-[10px]">
              <thead>
                <tr>
                  <th className="border border-black px-1 py-1 text-center" colSpan={4}>Deposit (monthly)</th>
                </tr>
                <tr>
                  <th className="border border-black px-1 py-1">Deposit Type</th>
                  <th className="border border-black px-1 py-1">No. of Transaction</th>
                  <th className="border border-black px-1 py-1">Highest Amount (for individual transaction)</th>
                  <th className="border border-black px-1 py-1">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black px-1">Cash Deposit (including online)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Deposit Transaction (Inward Transfer)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Foreign Remittance Deposit</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Farming from ATM Deposit</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">FDR BO account (Deposit/Transfer)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Others (if any)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1 font-semibold">Total Probable Deposit</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
              </tbody>
            </table>

            <table className="w-full border-collapse border border-black text-[10px]">
              <thead>
                <tr>
                  <th className="border border-black px-1 py-1 text-center" colSpan={4}>Withdrawal (monthly)</th>
                </tr>
                <tr>
                  <th className="border border-black px-1 py-1">Withdraw Type</th>
                  <th className="border border-black px-1 py-1">No. of Transaction</th>
                  <th className="border border-black px-1 py-1">Highest Amount (for individual transaction)</th>
                  <th className="border border-black px-1 py-1">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black px-1">Cash Withdrawal (including online, ATM)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Payment Transaction (Outward)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Foreign Remittance Withdrawal</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Expense through bKash</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">BO account (Deposit/Transfer)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1">Others (if any)</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
                <tr><td className="border border-black px-1 font-semibold">Total Probable Withdrawal</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td><td className="border border-black px-1">-</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-center text-[30px] font-semibold">KYC Profile Form for SME</h3>
          <div className="mt-2 border border-black text-[11px]">
            <div className="border-b border-black px-2 py-1 font-semibold">Bank Use Only</div>
            <div className="grid grid-cols-[180px_1fr_200px] items-center border-b border-black">
              <div className="border-r border-black px-2 py-1">Account Number :</div>
              <div className="px-2 py-1"></div>
              <div className="px-2 py-1 text-right">Branch: {get('territory')}</div>
            </div>
            <div className="grid grid-cols-[180px_1fr] items-center">
              <div className="border-r border-black px-2 py-1">CIF:</div>
              <div className="px-2 py-1"></div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-[40px_380px_1fr] gap-y-1 text-[11px]">
            <div>1.</div>
            <div>Account Name: {get('businessName')}</div>
            <div></div>

            <div>2.</div>
            <div>Type of Account: Current Account</div>
            <div></div>

            <div></div>
            <div>Please Specify the product:</div>
            <div></div>

            <div>3.</div>
            <div>Type of Concern: {get('legalStatus').toUpperCase()}</div>
            <div></div>

            <div>4.</div>
            <div>Net Worth of the Entity (Details):</div>
            <div className="border border-black px-2">-</div>

            <div>5.</div>
            <div>Source(s) of Fund (Details):</div>
            <div className="border border-black px-2">-</div>

            <div>6.</div>
            <div>Documents that have been obtained to ascertain source(s) of fund:</div>
            <div className="border border-black px-2">-</div>

            <div>7.</div>
            <div>Have the obtained documents been verified?</div>
            <div className="border border-black px-2">-</div>

            <div>8.</div>
            <div>How has/have the address(es) of the entity been verified? (Details)</div>
            <div className="border border-black px-2">-</div>
          </div>

          <div className="mt-4 text-[11px]">
            <p>
              9. Whether the Beneficial Owner(s) of the Account has/have been identified?: -
            </p>
            <p className="italic">
              If yes, information about each of the beneficial owner(s) of the account must be collected in
              prescribed KYC form of Circular 26 (Appendix 1). The information of the controlling shareholders and
              shareholders holding 20% or more shares of the company are to be obtained and preserved in individual
              KYC information and KYC to be completed.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_680px] gap-3 text-[11px]">
            <div>
              <p>10. Entity Registration No.:</p>
              <p>11. VAT Registration Number</p>
              <p>12. E-TIN ID</p>
              <p>13. Other documents:</p>
              <p className="mt-1">14. Purpose of Opening Account by foreign company/entity (if applicable)</p>
              <p className="pl-3">(a) Name of this Concerned Regulatory Authority</p>
              <p className="pl-3">(b) Information regarding authority</p>
            </div>

            <table className="w-full border-collapse border border-black text-[10px]">
              <thead>
                <tr>
                  <th className="border border-black px-1 py-1"></th>
                  <th className="border border-black px-1 py-1 text-center">Copy Obtained</th>
                  <th className="border border-black px-1 py-1 text-center">Verified</th>
                  <th className="border border-black px-1 py-1 text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black px-1 py-1">-</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
                <tr><td className="border border-black px-1 py-1">-</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
                <tr><td className="border border-black px-1 py-1">795381233699</td><td className="border border-black px-1 py-1 text-center">☑</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
                <tr><td className="border border-black px-1 py-1">-</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
                <tr><td className="border border-black px-1 py-1">-</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
                <tr><td className="border border-black px-1 py-1">-</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
                <tr><td className="border border-black px-1 py-1">-</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">☐</td><td className="border border-black px-1 py-1 text-center">If Applicable</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-[11px] leading-tight">
            <p>
              15. Is/are any Politically Exposed Person (PEP) / Influential Person (IP) chief or senior officials of
              an international organization and their family members or close associates involved with the client?
              (as per the definition in the circular issued by BFIU) No
            </p>
            <p className="mt-1">
              If yes, please provide the following details:
            </p>
            <div className="ml-3">
              <p>(a) Has approval been taken from the senior management? <span className="ml-8">☐ Yes</span> <span className="ml-8">☐ No</span></p>
              <p>(b) Has a face to face interview of the client been taken? <span className="ml-10">☐ Yes</span> <span className="ml-8">☐ No</span></p>
            </div>
            <p className="mt-1">
              16. While screening, in light of relevant acts, rules and circulars, whether the customer&apos;s name matched
              with the suspected individuals or entities as listed under various resolutions of the United Nations Security
              Council for terrorist activities, financing of terrorism and financing the proliferation of weapons of mass
              destruction and banned list of individuals or entities by the Government of People&apos;s Republic of Bangladesh:
              No
            </p>
            <p className="mt-1">(a) If yes, steps taken in this regard: -</p>
          </div>

          <div className="mt-6 text-[11px]">
            <p>17. Risk Rating:</p>
            <p>(a) What kind of business activities is the institution engaged in?</p>
            <table className="mt-1 w-full border-collapse border border-black text-[10px]">
              <thead>
                <tr>
                  <th className="border border-black px-1 py-1 text-center">Category</th>
                  <th className="border border-black px-1 py-1 text-center">Risk Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black px-1 py-1 text-center">Garments Business/Garments Accessories/Packaging/Buying House</td>
                  <td className="border border-black px-1 py-1 text-center">5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-3 text-[10px]">
            <div>
              <p className="mb-1">(b) Product/Service Type Risk</p>
              <table className="w-full border-collapse border border-black">
                <thead><tr><th className="border border-black px-1 py-1">Category</th><th className="border border-black px-1 py-1">Risk Score</th></tr></thead>
                <tbody><tr><td className="border border-black px-1 py-1 text-center">Current Account</td><td className="border border-black px-1 py-1 text-center">4</td></tr></tbody>
              </table>

              <p className="mb-1 mt-2">(d) Geographic Risk</p>
              <table className="w-full border-collapse border border-black">
                <thead><tr><th className="border border-black px-1 py-1">Category</th><th className="border border-black px-1 py-1">Risk Score</th></tr></thead>
                <tbody>
                  <tr><td className="border border-black px-1 py-1 text-center">Customer is Resident of Bangladesh</td><td className="border border-black px-1 py-1 text-center">1</td></tr>
                  <tr><td className="border border-black px-1 py-1 text-center">No</td><td className="border border-black px-1 py-1 text-center">1</td></tr>
                </tbody>
              </table>

              <p className="mb-1 mt-2">(f) Yearly Average Transaction</p>
              <table className="w-full border-collapse border border-black">
                <thead><tr><th className="border border-black px-1 py-1">Category</th><th className="border border-black px-1 py-1">Risk Score</th></tr></thead>
                <tbody><tr><td className="border border-black px-1 py-1 text-center">50 Lac to 5 Crore</td><td className="border border-black px-1 py-1 text-center">2</td></tr></tbody>
              </table>
            </div>

            <div>
              <p className="mb-1">(c) Customer Acquisition Channel</p>
              <table className="w-full border-collapse border border-black">
                <thead><tr><th className="border border-black px-1 py-1">Category</th><th className="border border-black px-1 py-1">Risk Score</th></tr></thead>
                <tbody><tr><td className="border border-black px-1 py-1 text-center">By Relationship Manager/By Branch</td><td className="border border-black px-1 py-1 text-center">2</td></tr></tbody>
              </table>

              <p className="mb-1 mt-2">(e) Relationship Risk</p>
              <table className="w-full border-collapse border border-black">
                <thead><tr><th className="border border-black px-1 py-1">Category</th><th className="border border-black px-1 py-1">Risk Score</th></tr></thead>
                <tbody>
                  <tr><td className="border border-black px-1 py-1 text-center">No</td><td className="border border-black px-1 py-1 text-center">0</td></tr>
                  <tr><td className="border border-black px-1 py-1 text-center">No</td><td className="border border-black px-1 py-1 text-center">0</td></tr>
                </tbody>
              </table>

              <p className="mb-1 mt-2">(g) Transparency Related Risk</p>
              <table className="w-full border-collapse border border-black">
                <thead><tr><th className="border border-black px-1 py-1">Category</th><th className="border border-black px-1 py-1">Risk Score</th></tr></thead>
                <tbody><tr><td className="border border-black px-1 py-1 text-center">Yes</td><td className="border border-black px-1 py-1 text-center">1</td></tr></tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 text-[11px]">
            <p>18. Overall Risk Rating Assessment (Sum of risk scores of serial no. (a) to (g) above)</p>
            <p>If Outcome is &gt;=15; &quot;High Risk&quot; and If Outcome is &lt; 15; &quot;Low Risk&quot;</p>
          </div>

          <table className="mt-2 w-full max-w-[1200px] border-collapse border border-black text-[11px]">
            <thead>
              <tr>
                <th className="border border-black px-1 py-1 text-center">Sum of Risk Score</th>
                <th className="border border-black px-1 py-1 text-center">Overall Risk Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-1 py-4"></td>
                <td className="border border-black px-1 py-4"></td>
              </tr>
            </tbody>
          </table>

          <p className="mt-3 text-[11px]">Comment:</p>
          <p className="mt-2 text-[11px]">
            (*Even if the risk rating is less than 15, taking the high risk of the beneficial owner into consideration,
            and stating the reason, a customer may be categorized as a high risk customer based on subjective judgment)
          </p>

          <div className="mt-8 grid grid-cols-2 gap-10 text-[11px]">
            <div>
              <p className="font-semibold">Prepared (Account Opening Officer/ Relationship Manager) by:</p>
              <p>Signature:</p>
              <p>(with seal)</p>
              <p>Name*</p>
              <p>Date:</p>
            </div>
            <div>
              <p className="font-semibold">Reviewed &amp; Confirmed (Branch Anti Money Laundering Compliance Officer) by:</p>
              <p>Signature:</p>
              <p>(with seal)</p>
              <p>Name :</p>
              <p>Date:</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-10 text-[11px]">
            <div>
              <div className="border-t border-dashed border-black pt-1">Signature, Seal (with name) &amp; date</div>
              <p>(Approving Senior Officials for PEP/IP/Senior Official of International Organizations)</p>
              <div className="mt-3 flex items-center gap-2">
                <span>Date of review and update:</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span>Next KYC review date:</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span className="inline-block w-7 border border-black text-center">D</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span className="inline-block w-7 border border-black text-center">M</span>
                <span>/</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
                <span className="inline-block w-7 border border-black text-center">Y</span>
              </div>
            </div>
            <div>
              <p className="font-semibold">Reviewed &amp; Updated by:</p>
              <p>Signature:</p>
              <p>(with seal)</p>
              <p>Name:</p>
              <p>Date:</p>
            </div>
          </div>

          <h3 className="mt-10 text-center text-[30px] font-semibold">SME Business Segmentation Form</h3>
          <table className="mt-2 w-full border-collapse border border-black text-[11px]">
            <thead>
              <tr>
                <th className="border border-black px-1 py-1 text-center">Division</th>
                <th className="border border-black px-1 py-1 text-center">Proposition</th>
                <th className="border border-black px-1 py-1 text-center">Segment</th>
                <th className="border border-black px-1 py-1 text-center">Sub Segment</th>
                <th className="border border-black px-1 py-1 text-center" colSpan={4}>Final Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-1 py-1 text-center">SME</td>
                <td className="border border-black px-1 py-1 text-center">Male</td>
                <td className="border border-black px-1 py-1 text-center">-</td>
                <td className="border border-black px-1 py-1 text-center">ACCESSORIES</td>
                <td className="border border-black px-1 py-1 text-center">9</td>
                <td className="border border-black px-1 py-1 text-center">18</td>
                <td className="border border-black px-1 py-1 text-center">22</td>
                <td className="border border-black px-1 py-1 text-center">939</td>
              </tr>
            </tbody>
          </table>

          <table className="mt-8 w-full border-collapse border border-black text-[11px]">
            <tbody>
              <tr>
                <td className="border border-black px-1 py-2 text-center font-semibold" colSpan={2}>
                  De-Dupe Search &amp; Sanction Search List
                </td>
              </tr>
              <tr>
                <td className="h-[210px] w-1/2 border border-black px-2 align-middle font-semibold">
                  De-Dupe Search Findings
                </td>
                <td className="h-[210px] w-1/2 border border-black px-2"></td>
              </tr>
              <tr>
                <td className="h-[170px] w-1/2 border border-black px-2 align-middle font-semibold">
                  Sanction Search Findings
                </td>
                <td className="h-[170px] w-1/2 border border-black px-2"></td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 grid grid-cols-2 gap-20 text-[10px] text-center">
            <div>
              <div className="mx-8 border-t border-dashed border-black pt-1">Seal &amp; Signature</div>
              <div>De-Dupe Search/Account Sourced By</div>
            </div>
            <div>
              <div className="mx-8 border-t border-dashed border-black pt-1">Seal &amp; Signature</div>
              <div>Supervisor of Account Source</div>
            </div>
          </div>

          <div className="mt-12 border border-black text-[11px]">
            <div className="border-b border-black py-2 text-center text-[24px] font-semibold">
              Proof of Address Confirmed by Physical Visit
            </div>

            <div className="space-y-2 px-3 py-3">
              <div className="grid grid-cols-[220px_1fr] items-center">
                <div className="font-semibold">Account Title:</div>
                <div className="border-b border-dashed border-black">{get('businessName')}</div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-center">
                <div className="font-semibold">Proprietor/Owner&apos;s Name:</div>
                <div className="border-b border-dashed border-black">SABINA SARMIN,</div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-center">
                <div className="font-semibold">Account/CIF No. (if available):</div>
                <div className="border-b border-dashed border-black"></div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-start">
                <div className="pt-1 font-semibold">Address Visited:</div>
                <div className="min-h-[60px] border-b border-dashed border-black pt-1">
                  SHOP-001 B2 LEVEL-04, BLOCK -C, MANSIB L1, JAMUNA FUTURE PARK, VATARA, MANSIB L2, MANSIB L3,
                  {get('city')} (South), {get('city')}, {get('city')}, 3369, 150,1
                </div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-start">
                <div className="pt-1 font-semibold">
                  Name/Names mentioned in Signboard
                  <br />
                  Reason, if Trade License Address/Signboard mismatches with Visited Address
                </div>
                <div className="min-h-[70px] border-b border-dashed border-black pt-1">{get('businessName')}</div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-start">
                <div className="pt-1 font-semibold">Document Attached as Proof of Address (Please Mark √)</div>
                <div className="space-y-1 pt-1">
                  <div className="flex flex-wrap items-center gap-6">
                    <label><input type="checkbox" className="mr-1 align-middle" />Trade License</label>
                    <label><input type="checkbox" className="mr-1 align-middle" />Utility Bill Copy</label>
                    <label><input type="checkbox" className="mr-1 align-middle" />Other Doc</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>If select Other Doc, mention Doc Name</span>
                    <span className="inline-block h-[1px] w-[220px] border-b border-black"></span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-center">
                <div className="font-semibold">Person Visited:</div>
                <div className="border-b border-dashed border-black"></div>
              </div>

              <div className="grid grid-cols-[220px_1fr] items-center">
                <div className="font-semibold">Other Comments:</div>
                <div className="border-b border-dashed border-black"></div>
              </div>

              <p className="pt-2">
                During my visit I found the company/organization in the respective address. Please note the account
                will be used primarily for SME loan disbursement &amp; repayment purpose
              </p>

              <div className="grid grid-cols-2 pt-3 text-center font-semibold">
                <div>Verified By:</div>
                <div>Visited By:</div>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-20 text-center text-[11px]">
                <div>
                  <div className="mx-8 border-t border-dashed border-black pt-1">Relationship Officer&apos;s</div>
                  <div>Seal, Signs &amp; Date</div>
                </div>
                <div>
                  <div className="mx-8 border-t border-dashed border-black pt-1">
                    Signature of AM/Risk Manager/RM/ARM
                  </div>
                  <div>PIN:</div>
                </div>
              </div>
            </div>
          </div>

          <table className="mt-10 w-full border-collapse border border-black text-[11px]">
            <tbody>
              <tr>
                <td className="border border-black px-2 py-2 text-center font-semibold" colSpan={2}>
                  Account Opening Error Checklist
                </td>
              </tr>
              <tr>
                <td className="w-[300px] border border-black px-2 py-2 font-semibold">Account Name</td>
                <td className="border border-black px-2 py-2">{get('businessName')}</td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 font-semibold">Account Number</td>
                <td className="border border-black px-2 py-2"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 font-semibold" colSpan={2}>
                  Mark √ the common errors of Account Opening Checklist as confirmation of checking
                </td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 align-top font-semibold">Customer Issues</td>
                <td className="border border-black px-2 py-2">
                  <div className="space-y-1">
                    <div><input type="checkbox" className="mr-2 align-middle" />Business name or address in AOF mismatch with Trade License / Visit Copy</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Mismatch in Customer&apos;s name / parent&apos;s name / spouse name / DOB with NID Card / Passport / Birth Certificate</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Customer Signature with Seal missing behind Nominee&apos;s Photo / Cutting Confirmation / AOF / All Photocopy Document</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Account Title/Business Seal mismatch with trade License.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />General Instruction (GI) required for any minor mismatch.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Signature Card required with Customer Signature and Seal.</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 align-top font-semibold">Documentation Issues</td>
                <td className="border border-black px-2 py-2">
                  <div className="space-y-1">
                    <div><input type="checkbox" className="mr-2 align-middle" />General Instruction (GI) required for any minor mismatch.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Signature Card required with Customer Signature and Seal</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Address mismatch with Utility Bill/ Visit Report</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Updated Trade License is required / Registered address mismatch with Trade License</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Entity FATCA Form required with Customer&apos;s Signature and Seal</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Inappropriate Resolution for Partnership account</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 align-top font-semibold">
                  KYC / TP Issues
                  <br />
                  (Internal)
                </td>
                <td className="border border-black px-2 py-2">
                  <div className="space-y-1">
                    <div><input type="checkbox" className="mr-2 align-middle" />Transaction profile mismatch with monthly turnover.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Monthly Sales Turnover not provided.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Nature of business needs to be mentioned clearly for KYC risk grading.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Monthly &amp; Annual turnover, properly filled TP in AOF.</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 align-top font-semibold">Internal Issues</td>
                <td className="border border-black px-2 py-2">
                  <div className="space-y-1">
                    <div><input type="checkbox" className="mr-2 align-middle" />All the information in AOF should be filled in Capital Letters</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Cost center should be properly attributed to the account.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />BAMLCO must sign in both Reviewed &amp; Confirmed By section of the KYC form &amp; Approved by in the AOF.</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Segmentation checklist missing</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Wrong sector code/Branch official signature missing on Photocopy Document &amp; Account Opening Form</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Dedup (customer) &amp; Sanction Screening (customer, nominee, signatories, directors, beneficiary owners)</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />Duplicate CIF</div>
                    <div><input type="checkbox" className="mr-2 align-middle" />500TK lien seal on AOF</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-2 font-semibold">Other Queries</td>
                <td className="border border-black px-2 py-2"></td>
              </tr>
            </tbody>
          </table>

          <div className="mt-12 grid grid-cols-2 gap-20 text-center text-[11px]">
            <div>
              <div className="mx-8 border-t border-dashed border-black pt-1">Seal &amp; Sign of Relationship Officer</div>
            </div>
            <div>
              <div className="mx-8 border-t border-dashed border-black pt-1">Seal &amp; Sign of BDM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountOpeningForm
