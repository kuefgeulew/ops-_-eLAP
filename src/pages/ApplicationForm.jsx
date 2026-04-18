/**
 * Application form — printable multi-section layout.
 */
import useCaseData from '../hooks/useCaseData'

function ApplicationForm() {
  const { get, formatBDT, profile } = useCaseData()
  const cell = 'border border-[#6e6e6e] px-2 py-[2px] align-top'
  const head = 'border border-[#6e6e6e] bg-[#f3f3f3] px-2 py-[2px] text-center font-semibold'

  return (
    <div className="min-h-screen bg-white px-3 py-2 text-[12px] text-[#262626]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 font-['Arial']">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-2 py-1 text-center text-[48px] leading-none text-transparent">
                <span className="text-[18px] font-bold text-[#1f2328]">
                  Cottage and Micro Business Enterprise
                </span>
                <br />
                <span className="text-[18px] font-bold text-[#1f2328]">Loan Application Form</span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <table className="mx-auto border-collapse text-[14px] font-semibold">
                  <tbody>
                    <tr>
                      <td className="px-2 py-[2px] text-right">Name of Loan Proposal</td>
                      <td className="px-2 py-[2px]">:</td>
                      <td className="px-2 py-[2px]">{get('businessName')}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-[2px] text-right">BBL SB/CD Account No. (if Any)</td>
                      <td className="px-2 py-[2px]">:</td>
                      <td className="px-2 py-[2px]">1507203425932001</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-[2px] text-right">Name of Linked BBL Branch</td>
                      <td className="px-2 py-[2px]">:</td>
                      <td className="px-2 py-[2px]">{get('crmCenter')}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-[2px] text-right">Branch SOL</td>
                      <td className="px-2 py-[2px]">:</td>
                      <td className="px-2 py-[2px]">1507</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-[2px] text-right">Loan Product</td>
                      <td className="px-2 py-[2px]">:</td>
                      <td className="px-2 py-[2px]">Druti</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-[2px] text-right">Loan Sourcing Pattern</td>
                      <td className="px-2 py-[2px]">:</td>
                      <td className="px-2 py-[2px]">Repeat Customer</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="text-center font-semibold">
                      <td className={head}>SME UNIT OFFICE</td>
                      <td className={head}>AREA</td>
                      <td className={head}>TERRITORY</td>
                      <td className={head}>REGION</td>
                      <td className={head}>WING</td>
                    </tr>
                    <tr className="text-center">
                      <td className={cell}>{get('territory')}</td>
                      <td className={cell}>{get('territory')}</td>
                      <td className={cell}>{get('territory')}</td>
                      <td className={cell}>{`${get('city')} OLD`}</td>
                      <td className={cell}>SB, Central</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="text-center font-semibold">
                      <td className={head}>ROLE</td>
                      <td className={head}>USER NAME</td>
                      <td className={head}>PIN</td>
                      <td className={head}>CONTACT NO</td>
                    </tr>
                    {[
                      ['HO SC', 'Mohammed Abdul Aziz', '25414', '01708123490'],
                      ['HO SB', 'S M Alamgir Hossain', '10085', '01711429506'],
                      ['Operation Officer', 'Wajkuruni', '30137', '01786718005'],
                      ['Regional Credit Head (RCH)', 'Hussain Md. Yasin', '29818', '01730374554'],
                      ['MC', get('riskManagerName'), get('riskManagerPins'), '01714084610'],
                      ['Risk Manager', 'Md. Ashraful Abedin', '27424', '0171335203'],
                      ['Risk Manager', get('riskManagerName'), get('riskManagerPins'), '01787678930'],
                      ['Regional Head (RH)', get('riskManagerName'), get('riskManagerPins'), '01714084760'],
                      ['TM', get('riskManagerName'), get('riskManagerPins'), '01713424974'],
                      ['BDM', get('riskManagerName'), get('riskManagerPins'), '01755892136'],
                      ['Credit MIS', 'Md. Moynul Islam', 'EZB1448', '01599164017'],
                      ['Relationship Officer (RO)', get('roId'), '-', '-'],
                    ].map((row) => (
                      <tr key={`${row[0]}-${row[2]}`} className="text-center">
                        <td className={cell}>{row[0]}</td>
                        <td className={cell}>{row[1]}</td>
                        <td className={cell}>{row[2]}</td>
                        <td className={cell}>{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-1 py-[2px] text-left font-semibold">বরাবর,</td>
              <td className="px-1 py-[2px] text-right">তারিখ: 22-Jun-2026</td>
            </tr>
            <tr>
              <td className="px-1 py-[2px]" colSpan={2}>
                এসএমই ব্যাংকিং
                <br />
                ব্র্যাক ব্যাংক পিএলসি
                <br />
                প্রধান কার্যালয়, ঢাকা
              </td>
            </tr>
            <tr>
              <td className="px-1 py-2 text-center font-semibold" colSpan={2}>
                ঋণ/ঋণ সুবিধা হিসেবে ঋণের আবেদন
              </td>
            </tr>
            <tr>
              <td className="px-1 py-[2px]" colSpan={2}>
                প্রিয় মহোদয়,
                <br />
                আমরা/আমি নিম্নে প্রদত্ত তথ্য অনুযায়ী ঋণ/ঋণ সুবিধা হিসেবে ঋণের আবেদন করছি।
                {get('territory')} শাখায়স্থিত থেকে আমরা/আমাদের প্রতিষ্ঠানের প্রয়োজন মেটার জন্য নিম্নরূপ ঋণের আবেদন করছি।
                {get('businessName')}
              </td>
            </tr>
            <tr>
              <td className="p-0" colSpan={2}>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="text-center font-semibold">
                      <td className={head}>নং</td>
                      <td className={head}>ঋণের নাম</td>
                      <td className={head}>আবেদনকৃত ঋণের পরিমাণ</td>
                      <td className={head}>সুদের হার</td>
                      <td className={head}>পরিশোধের সময়</td>
                      <td className={head}>মাসিক কিস্তির পরিমাণ</td>
                      <td className={head}>ঋণ গ্রহণের উদ্দেশ্য</td>
                    </tr>
                    <tr className="text-center">
                      <td className={cell}>১</td>
                      <td className={cell}>{get('loanType')}</td>
                      <td className={cell}>{formatBDT(profile?.loanAmount)}</td>
                      <td className={cell}>{get('interest')}</td>
                      <td className={cell}>{get('tenor')}</td>
                      <td className={cell}>{formatBDT(profile?.emiComfort)}</td>
                      <td className={cell}>{get('purpose')}</td>
                    </tr>
                    <tr className="text-center">
                      <td className={cell}>মোট</td>
                      <td className={cell}></td>
                      <td className={cell}>{formatBDT(profile?.loanAmount)}</td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                      <td className={cell}>{formatBDT(profile?.emiComfort)}</td>
                      <td className={cell}>{get('purpose')}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="px-1 py-[2px]" colSpan={2}>
                ঋণ আবেদন/আবেদনের বর্ণিত তথ্যসমূহ সম্পূর্ণ সত্য ও সঠিক। এ মর্মে আমি/আমরা অঙ্গীকার করছি।
                <br />
                ব্যাংক তা যাচাই করার জন্য (যদি প্রযোজ্য) : 1507203425932001
                <br />
                এছাড়াও ব্যাংক ঋণ আবেদন প্রক্রিয়ার সকল তথ্য সংগ্রহ এবং প্রয়োজনে ব্যবহার করতে অনুমতি দেয়া হলো।
              </td>
            </tr>
            <tr>
              <td className="p-0" colSpan={2}>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className={head} colSpan={4}>
                        ১/ ঋণ/বিনিয়োগ- ব্যবসার আবেদনকারীর প্রতিষ্ঠানের তথ্যাবলী (ENTERPRISE/BUSINESS INFORMATION)
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>১।</td>
                      <td className={cell}>প্রতিষ্ঠানের নাম {get('businessName')}</td>
                      <td className={cell}>ব্যবসার প্রকৃতি Agriculture</td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>২।</td>
                      <td className={cell}>আইনগত ধরন {get('legalStatus')}</td>
                      <td className={cell}>ব্যবসা শুরুর তারিখ 20-Jan-2016</td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৩।</td>
                      <td className={cell}>ব্যবসার ধরন/পণ্য/সেবা (পণ্য/সেবা/শপ 1)</td>
                      <td className={cell}>বিক্রয় ধরন Service</td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৪।</td>
                      <td className={cell}>ট্রেড লাইসেন্স নম্বর 4601</td>
                      <td className={cell}>ট্রেড লাইসেন্সের শুরুর সময় 10-Jan-2040</td>
                      <td className={cell}>টিআইএন নম্বর (যদি থাকে) 490617796802</td>
                    </tr>
                    <tr>
                      <td className={cell}>৫।</td>
                      <td className={cell}>ট্রেড লাইসেন্সের ধরন (পৌর/সিটি/কর্পোরেশন)</td>
                      <td className={cell}>ইস্যুকারী কর্তৃপক্ষ-</td>
                      <td className={cell}>রেজিস্ট্রেশনের তারিখ 0</td>
                    </tr>
                    <tr>
                      <td className={cell}>৬।</td>
                      <td className={cell}>ভ্যাট রেজিস্ট্রেশন নম্বর (বিধিসম্মত)</td>
                      <td className={cell}>ই-ট্রেড অবস্থা-</td>
                      <td className={cell}>মোবাইল ফোন নম্বর-</td>
                    </tr>
                    <tr>
                      <td className={cell}>৭।</td>
                      <td className={cell}>
                        ক) রেজিস্টার্ড ঠিকানা (ট্রেড লাইসেন্স অনুসারে) : 1206
                        <br />
                        উপজেলা : হাবিগঞ্জ
                        <br />
                        জেলা : {get('division')}
                        <br />
                        ব্যবসার মালিকানা ধরনের : Family Owned
                        <br />
                        ব্যবসায়ীর মালিকানা অভিজ্ঞতা হতে ঋণের সময়কাল :
                      </td>
                      <td className={cell}>
                        বিভাগ : {get('division')}
                        <br />
                        জেলা : {get('division')}
                        <br />
                        এর সাথে ব্যবসার সম্পর্ক : - year(s)
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={head} colSpan={2}>
                        দিন-শেষস্থিত আর্থিক অবস্থা
                      </td>
                      <td className={head} colSpan={2}>
                        ঋণ আবেদনকারীর বর্তমান আর্থিক অবস্থা
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        ক) মোট স্থায়ী স্থাবর সম্পদ
                        <br />
                        খ) মোট নগদ সম্পদ
                        <br />
                        গ) মোট ব্যবসায়িক পণ্য
                        <br />
                        ঘ) পারিবারিক ঋণ
                        <br />
                        ঙ) সঞ্চয় আমানত
                        <br />
                        চ) নিট আয়
                      </td>
                      <td className={cell} colSpan={2}>
                        ক) ক্যাশ ও ব্যাংক সম্পদ
                        <br />
                        খ) মজুদ পণ্য (চলতি সম্পদসহ)
                        <br />
                        গ) বিক্রয়/ক্রয় বাবদ পাওনা
                        <br />
                        ঘ) গ্রাহকের কাছ থেকে দেনা (অনিষ্পন্ন/অমীমাংসিত)
                        <br />
                        ঙ) মোট দায়বদ্ধতা
                        <br />
                        চ) স্বল্প মেয়াদি দেনা
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        ৳ 1,252,366
                        <br />
                        ৳ 1,064,512
                        <br />
                        ৳ 187,854
                        <br />
                        -
                        <br />
                        -
                        <br />
                        ৳ 187,854
                      </td>
                      <td className={cell} colSpan={2}>
                        -
                        <br />
                        ৳ 0
                        <br />
                        0
                        <br />
                        ৳ 1,097,261
                        <br />
                        0
                        <br />
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        ছ) ঋণ/অন্যান্য দায় (যদি থাকে)
                        <br />
                        জ) অন্যান্য দায় (শ্রমিক/বেতন/বকেয়া)
                        <br />
                        ঝ) বর্তমান মাসিক আয়
                        <br />
                        ঞ) প্রস্তাবিত/সংস্কার প্রস্তাব
                      </td>
                      <td className={cell} colSpan={2}>
                        ঋণ পরিশোধ ক্ষমতা
                        <br />
                        ঋণ পরিশোধের সক্ষমতা হার
                        <br />
                        ব্যবসার মোট ঝুঁকিমাত্রা
                        <br />
                        মোট ঝুঁকি বিশ্লেষণ
                      </td>
                    </tr>
                    <tr>
                      <td className={head} colSpan={4}>
                        বাজার / ক্রেতা / সরবরাহকারী সম্পর্কিত তথ্য
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>১১।</td>
                      <td className={cell}>আবেদনকারী কর্তৃক বর্তমান/বিভিন্ন বাজার</td>
                      <td className={cell}>সম্ভাব্য তথ্য যাচাই</td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>১২।</td>
                      <td className={cell}>ক) কাঁচামালের প্রতিষ্ঠানের ধরন</td>
                      <td className={cell}>SUPPLIERS</td>
                      <td className={cell}>মালিক/ব্যক্তির নাম OWNER | ফোন: 0989565776 | বকেয়া: ৳ 50,000</td>
                    </tr>
                    <tr>
                      <td className={cell}>১৩।</td>
                      <td className={cell}>খ) ক্রেতা/উপভোক্তার প্রকৃতি</td>
                      <td className={cell}>BUYER</td>
                      <td className={cell}>মালিক/ব্যক্তির নাম OWNER | ফোন: 0967874565 | বকেয়া: ৳ 40,000</td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        ঋণ আবেদনকারীর স্বাক্ষর
                        <br />
                        তারিখ 22-Jun-2026
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        (ঋণগ্রহীতা/আবেদনকারীর স্বাক্ষর)
                      </td>
                      <td className={cell}>
                        {get('riskManagerName')} {get('riskManagerPins')}
                        <br />
                        (ব্রাঞ্চ এর সুপারিশ)
                      </td>
                      <td className={cell}>
                        Business Name : {get('businessName')}
                      </td>
                    </tr>
                    <tr>
                      <td className={head} colSpan={4}>
                        ৩/ আবেদনকারীর তথ্য (BORROWER/OWNER&apos;S INFORMATION)
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>১।</td>
                      <td className={cell}>
                        আবেদনকারীর নাম (বাংলা)
                        <br />
                        IN ENGLISH (CAPITAL LETTER): {get('businessName')}
                      </td>
                      <td className={cell}>
                        জন্মস্থান
                        <br />
                        জাতীয়তা: Bangladeshi
                        <br />
                        ধর্ম: ইসলাম
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>২।</td>
                      <td className={cell}>
                        জন্ম তারিখ (D/M/Y) 13-Jan-1987
                        <br />
                        শিক্ষাগত যোগ্যতা Graduate
                        <br />
                        পেশার ধরণ Proprietor
                      </td>
                      <td className={cell}>
                        নিজ/পিতার নাম
                        <br />
                        সম্পর্কিত লোকজনের সংখ্যা 100%
                        <br />
                        এনআইডি নম্বর 490617786802
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৩।</td>
                      <td className={cell}>
                        মোবাইল নম্বর 51837753723
                        <br />
                        পিতার নাম MOHAMMADI ULLA
                        <br />
                        মাতার নাম MORSHEDA BEGUM
                      </td>
                      <td className={cell}>
                        স্বামীর নাম MST. SHARMIN AKTER
                        <br />
                        ই-মেইল -
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>১২।</td>
                      <td className={cell}>ব্যক্তিগত ব্যবসায়িক ঋণ/দায়</td>
                      <td className={cell}>ব্যক্তিগত ঋণ (মাসিক)</td>
                      <td className={cell}>0</td>
                    </tr>
                    <tr>
                      <td className={cell}>১৩।</td>
                      <td className={cell}>সম্ভাব্য মোট মাসিক আয়</td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>১৪।</td>
                      <td className={cell}>অন্যান্য আয় উৎসের বর্ণনা</td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>১৫।</td>
                      <td className={cell}>ব্যক্তিগত সম্পদের পরিমাণ</td>
                      <td className={cell}>ব্যক্তিগত দায়ের পরিমাণ</td>
                      <td className={cell}>৳ 346,456</td>
                    </tr>
                    <tr>
                      <td className={cell}></td>
                      <td className={cell}>নিট সম্পদের পরিমাণ ৳ 878,078</td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        ঘোষণাপত্র
                        <br />
                        আমি/আমরা এই মর্মে ঘোষণা করছি যে, উপর প্রদত্ত সকল তথ্যাদি ও ঋণ সম্পর্কিত তথ্যসমূহ আমার/আমাদের
                        জ্ঞান ও বিশ্বাস অনুযায়ী সত্য, সঠিক ও সম্পূর্ণ। ব্যাংক প্রয়োজনে তথ্য যাচাই এবং ঋণ
                        প্রক্রিয়াজাতকরণের জন্য ব্যবহার করতে পারবে। আবেদন প্রক্রিয়ার অংশ হিসেবে প্রয়োজনীয়
                        তথ্য/নথি সংগ্রহের ক্ষেত্রে আমরা সম্মতি প্রদান করছি।
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          আবেদনকারীর স্বাক্ষর ও তারিখ {`(${get('businessName')}'S)`}
                        </div>
                      </td>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          আবেদনকারীর টিপসই {`(${get('businessName')}'S)`}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        <b>প্রত্যয়নকারী</b> রিলেশনশিপ অফিসার
                        <br />
                        আমি এই মর্মে প্রত্যয়ন করছি যে, উপরোক্ত তথ্যাদি আমার জানা মতে সঠিক।
                        <br />
                        <b>নাম</b>
                        <br />
                        <b>পদবী</b>
                        <br />
                        <b>মোবাইল নম্বর</b>
                      </td>
                      <td className={cell} colSpan={2}>
                        <div className="mt-10 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          রিলেশনশিপ অফিসারের স্বাক্ষর
                        </div>
                        <div className="pt-3 text-right text-[24px] leading-none text-transparent">
                          <span className="text-[20px] font-semibold text-[#1f2328]">
                            Business Name: {get('businessName')}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        খ/ আবেদনকারীর স্বাক্ষর
                        <br />
                        ব্যবসা সম্পর্কে অন্যান্য তথ্য ও ঋণ আবেদনের স্বাক্ষর যাচাই (রিলেশনশিপ/ব্যবস্থাপক কর্তৃক)
                        <br />
                        উপরোক্ত তথ্যসমূহের আলোকে ঋণ প্রক্রিয়া, যাচাই এবং সুপারিশের তারিখ: 22-Jun-2026
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>
                        (রিলেশনশিপ অফিসারের স্বাক্ষর)
                      </td>
                      <td className={cell}>{get('riskManagerName')} {get('riskManagerPins')}<br />(নির্ধারিত স্বাক্ষর)</td>
                      <td className={cell}>
                        (রিলেশনশিপ ম্যানেজারের স্বাক্ষর)
                      </td>
                      <td className={cell}>
                        Business Name: {get('businessName')}
                      </td>
                    </tr>
                    <tr>
                      <td className={head} colSpan={4}>
                        ৩/ জামিনদারের তথ্য (GUARANTOR&apos;S INFORMATION)
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>১।</td>
                      <td className={cell}>
                        জামিনদারের নাম (বাংলা)
                        <br />
                        IN ENGLISH (CAPITAL LETTER): {get('businessName')}
                      </td>
                      <td className={cell}>
                        জন্মস্থান
                        <br />
                        জাতীয়তা: Bangladeshi
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>২।</td>
                      <td className={cell}>
                        জন্ম তারিখ (D/M/Y) 14-Apr-1995
                        <br />
                        লিঙ্গ M
                        <br />
                        আবেদনকারীর সাথে সম্পর্ক: ADMINISTRATOR
                      </td>
                      <td className={cell}>
                        বর্তমান পেশা: Self employed
                        <br />
                        পেশাগত দক্ষতা/অভিজ্ঞতা 6 বছর
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৩।</td>
                      <td className={cell}>
                        পিতার নাম -
                        <br />
                        জাতীয় পরিচয়পত্র নম্বর 19957518377006527
                        <br />
                        মাতার নাম MOHAMMAD ULLAH
                      </td>
                      <td className={cell}>
                        শিক্ষাগত যোগ্যতা Graduate
                        <br />
                        মাতার নাম MORSHEDA BEGUM
                        <br />
                        স্বামী/স্ত্রী -
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৪।</td>
                      <td className={cell}>
                        মোবাইল নম্বর 01845707216
                        <br />
                        বর্তমান ঠিকানা HOUSE#3/5 ROAD#7 BLOCK B SECTION 14, {get('division')} City, {get('division')}
                      </td>
                      <td className={cell}>
                        জেলা {get('division')}
                        <br />
                        বিভাগ {get('division')}
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৫।</td>
                      <td className={cell}>
                        পোস্ট কোড: 4357
                        <br />
                        স্থায়ী ঠিকানা Own Land
                      </td>
                      <td className={cell}>
                        অবস্থান/ভূমির ধরন -
                        <br />
                        বিভাগ {get('division')}
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৬।</td>
                      <td className={cell}>
                        গ্রাম/বাসা MIRZANAGAR TOXIT UDDIN HAZI BARI NATESHOR, KULI
                        <br />
                        উপজেলা {get('division')} Sadar
                      </td>
                      <td className={cell}>
                        জেলা {get('division')}
                        <br />
                        বিভাগ {get('division')}
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৭।</td>
                      <td className={cell}>ব্যক্তিগত ব্যবসায়িক ঋণ/দায় (মাসিক): ৳ 40,000</td>
                      <td className={cell}>মাসিক মোট আয়: ৳ 25,000</td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৮।</td>
                      <td className={cell}>ব্যক্তিগত সম্পদের পরিমাণ: ৳ 6,34,747</td>
                      <td className={cell}>ব্যক্তিগত দায়ের পরিমাণ: ৳ 56,457</td>
                      <td className={cell}>মোট সম্পদ মূল্য</td>
                    </tr>
                    <tr>
                      <td className={cell}>৯।</td>
                      <td className={cell}>নিট সম্পদ: ৳ 3,818,290</td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        ঘোষণাপত্র
                        <br />
                        আমি এই মর্মে ঘোষণা করছি, উপর প্রদত্ত সকল তথ্যাদি ও জামিন সংক্রান্ত বিবরণ আমার জ্ঞান
                        অনুযায়ী সঠিক ও সম্পূর্ণ। যদি কোনো তথ্য অসত্য প্রমাণিত হয় তবে তার সম্পূর্ণ দায়ভার
                        আমার উপর বর্তাবে। ব্যাংক প্রয়োজন অনুযায়ী তথ্য যাচাই, নথি সংগ্রহ, তৃতীয় পক্ষের
                        নিকট অনুসন্ধান এবং ঋণ মূল্যায়ন/প্রক্রিয়াকরণের কাজে ব্যবহার করতে পারবে।
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          জামিনদারের স্বাক্ষর ও তারিখ ({get('businessName')}&apos;S)
                        </div>
                      </td>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          জামিনদারের টিপসই ({get('businessName')}&apos;S)
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          আবেদনকারীর স্বাক্ষর ও তারিখ
                        </div>
                      </td>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          লোন অফিসার কর্তৃক আবেদন ও গ্রাহকের স্বাক্ষর যাচাই
                        </div>
                        <div className="pt-3 text-right text-[24px] leading-none text-transparent">
                          <span className="text-[20px] font-semibold text-[#1f2328]">
                            Business Name: {get('businessName')}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        খ/ আবেদনকারীর স্বাক্ষর
                        <br />
                        ব্যবসা সম্পর্কে অন্যান্য তথ্য ও ঋণ আবেদনের স্বাক্ষর যাচাই (রিলেশনশিপ/ব্যবস্থাপক কর্তৃক)
                        <br />
                        ঋণ গ্রহণে আবেদনকারীর অনুরোধ/সম্মতি। তারিখ: 22-Jun-2026
                      </td>
                    </tr>
                    <tr>
                      <td className={head} colSpan={4}>
                        ৩/ জামিনদারের তথ্য (GUARANTOR&apos;S INFORMATION)
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>১।</td>
                      <td className={cell}>
                        জামিনদারের নাম (বাংলা)
                        <br />
                        IN ENGLISH (CAPITAL LETTER): MD SAHIDUL ISLAM
                      </td>
                      <td className={cell}>
                        জন্মস্থান Cumilla
                        <br />
                        জাতীয়তা Bangladeshi
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>২।</td>
                      <td className={cell}>
                        জন্ম তারিখ (D/M/Y) 07-Apr-1988
                        <br />
                        লিঙ্গ M
                        <br />
                        আবেদনকারীর সাথে সম্পর্ক AUTHORISED SIGNATORY
                      </td>
                      <td className={cell}>
                        বর্তমান পেশা OTHER
                        <br />
                        পেশাগত অভিজ্ঞতা 10 বছর
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৩।</td>
                      <td className={cell}>
                        এনআইডি নম্বর 19742930010424197
                        <br />
                        পিতার নাম A MANNAN GAZI
                      </td>
                      <td className={cell}>
                        শিক্ষাগত যোগ্যতা Graduate
                        <br />
                        মাতার নাম MST ALKUMA BEGUM
                        <br />
                        স্বামী/স্ত্রী নাম MST RAHIMA BEGUM
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৪।</td>
                      <td className={cell}>
                        মোবাইল নম্বর
                        <br />
                        বর্তমান ঠিকানা 2 LANE-6, TINSHADE, MIRPUR-14, {`Companyganj (${get('division')})`}
                      </td>
                      <td className={cell}>
                        ই-মেইল -
                        <br />
                        জেলা {get('division')}
                        <br />
                        বিভাগ {get('division')}
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৫।</td>
                      <td className={cell}>
                        পোস্ট কোড 4574
                        <br />
                        স্থায়ী ঠিকানা Own Land
                      </td>
                      <td className={cell}>
                        অবস্থান/ ভূমির ধরণ
                        <br />
                        জেলা {get('division')}
                        <br />
                        বিভাগ {get('division')}
                      </td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৬।</td>
                      <td className={cell}>
                        গ্রাম/বাসা NORTH ECTLABAG BAZAR,SADAR,{get('division')} City,{get('division')}
                        <br />
                        উপজেলা City
                        <br />
                        পোস্ট 5758
                      </td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৭।</td>
                      <td className={cell}>ব্যক্তিগত ব্যবসায়িক ঋণ/দায় (মাসিক): ৳ 50,000</td>
                      <td className={cell}>ব্যক্তিগত মাসিক আয়/উপার্জন: ৳ 50,000</td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell}>৮।</td>
                      <td className={cell}>ব্যক্তিগত সম্পদের পরিমাণ: ৳ 4,758,679</td>
                      <td className={cell}>ব্যক্তিগত দায়ের পরিমাণ: ৳ 564,578</td>
                      <td className={cell}>মোট ঋণমান</td>
                    </tr>
                    <tr>
                      <td className={cell}>৯।</td>
                      <td className={cell}>নিট সম্পদ: ৳ 4,194,101</td>
                      <td className={cell}></td>
                      <td className={cell}></td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        ঘোষণাপত্র
                        <br />
                        আমি এই মর্মে ঘোষণা করছি, উপর বর্ণিত তথ্যাদি আমার জ্ঞানে ও বিশ্বাসে সঠিক এবং সম্পূর্ণ। ব্যাংক
                        প্রয়োজনে যাচাই করতে পারবে এবং ঋণ প্রক্রিয়ায় ব্যবহার করতে পারবে।
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          জামিনদারের স্বাক্ষর ও তারিখ (MD SAHIDUL ISLAM&apos;S)
                        </div>
                      </td>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          জামিনদারের টিপসই (MD SAHIDUL ISLAM&apos;S)
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          আবেদনকারীর স্বাক্ষর ও তারিখ
                        </div>
                      </td>
                      <td className={cell} colSpan={2}>
                        <div className="mt-6 border-t border-[#6e6e6e] pt-1 text-center font-semibold">
                          লোন অফিসার কর্তৃক আবেদনকারীর ও গ্রাহকের স্বাক্ষর যাচাই
                        </div>
                        <div className="pt-3 text-right text-[24px] leading-none text-transparent">
                          <span className="text-[20px] font-semibold text-[#1f2328]">
                            Business Name: {get('businessName')}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={cell} colSpan={4}>
                        খ/ আবেদনকারীর স্বাক্ষর
                        <br />
                        ব্যবসা সম্পর্কে অন্যান্য তথ্য ও ঋণ আবেদনের স্বাক্ষর যাচাই (রিলেশনশিপ/ব্যবস্থাপক কর্তৃক)
                        <br />
                        উপরোক্ত তথ্যসমূহের আলোকে স্বাক্ষরিত/প্রত্যয়ন তারিখ: 22-Jun-2026
                      </td>
                    </tr>
                    <tr>
                      <td className={cell}>
                        (রিলেশনশিপ অফিসারের স্বাক্ষর)
                      </td>
                      <td className={cell}>{get('riskManagerName')} {get('riskManagerPins')}<br />(নির্ধারিত স্বাক্ষর)</td>
                      <td className={cell}>
                        (রিলেশনশিপ ম্যানেজারের স্বাক্ষর)
                      </td>
                      <td className={cell}>
                        Business Name: {get('businessName')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApplicationForm
