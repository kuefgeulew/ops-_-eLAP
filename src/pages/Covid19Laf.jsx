/**
 * COVID-19 LAF, part one — printable layout.
 */
function Covid19Laf() {
  const th = 'border border-black px-1 py-[3px] text-center text-[10px] font-semibold'
  const td = 'border border-black px-1 py-[3px] text-center text-[10px] leading-tight'

  return (
    <div className="min-h-screen bg-white px-2 py-2 text-black">
      <div className="mx-auto w-full max-w-[1750px] font-['Arial']">
        <div className="border border-black p-2">
          <h1 className="mt-2 text-center text-[48px] font-bold leading-[0.95]">
            <span className="block">Small &amp; Medium Enterprise</span>
            <span className="block">COVID-19 Stimulus Package Loan Application Form</span>
          </h1>

          <div className="mx-auto mt-4 grid w-[820px] grid-cols-[360px_24px_1fr] gap-y-1 text-[40px] font-bold leading-none">
            <div className="text-right">Name of Loan Proposal</div>
            <div className="text-center">:</div>
            <div>RAFI COSMETICS</div>

            <div className="text-right">BBL SB/CD Account No. (If Any)</div>
            <div className="text-center">:</div>
            <div>1507203425932001</div>

            <div className="text-right">Name of Linked BBL Branch</div>
            <div className="text-center">:</div>
            <div>BARURA BRANCH</div>

            <div className="text-right">Branch SOL</div>
            <div className="text-center">:</div>
            <div>1507</div>

            <div className="text-right">Loan Product</div>
            <div className="text-center">:</div>
            <div></div>

            <div className="text-right">Loan Sourcing Pattern</div>
            <div className="text-center">:</div>
            <div>Repeat Customer</div>
          </div>

          <table className="mx-auto mt-5 w-[1500px] border-collapse">
            <thead>
              <tr>
                <th className={th}>SME UNIT OFFICE</th>
                <th className={th}>AREA</th>
                <th className={th}>TERRITORY</th>
                <th className={th}>REGION</th>
                <th className={th}>WING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Elphant Road (99029209)</td>
                <td className={td}>Elephant Road</td>
                <td className={td}>Elphant Road</td>
                <td className={td}>Dhaka Old</td>
                <td className={td}>SB, Central</td>
              </tr>
            </tbody>
          </table>

          <table className="mx-auto mt-8 w-[1500px] border-collapse">
            <thead>
              <tr>
                <th className={th}>ROLE</th>
                <th className={th}>USER NAME</th>
                <th className={th}>PIN</th>
                <th className={th}>CONTACT NO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>HO SC</td>
                <td className={td}>Mohammed Abdul Aziz</td>
                <td className={td}>25414</td>
                <td className={td}>01708123490</td>
              </tr>
              <tr>
                <td className={td}>HO SB</td>
                <td className={td}>S M Alomgir Hossain</td>
                <td className={td}>10085</td>
                <td className={td}>01711429506</td>
              </tr>
              <tr>
                <td className={td}>Operation Officer</td>
                <td className={td}>Wakurun</td>
                <td className={td}>30137</td>
                <td className={td}>01768741805</td>
              </tr>
              <tr>
                <td className={td}>Regional Credit Head (RCH)</td>
                <td className={td}>Hussain Md. Yasin</td>
                <td className={td}>29818</td>
                <td className={td}>01730374554</td>
              </tr>
              <tr>
                <td className={td}>MC</td>
                <td className={td}>Shirajul Islam</td>
                <td className={td}>10339</td>
                <td className={td}>01714084640</td>
              </tr>
              <tr>
                <td className={td}>Risk Manager</td>
                <td className={td}>Md. Ashraful Abedin</td>
                <td className={td}>27242</td>
                <td className={td}>01713562043</td>
              </tr>
              <tr>
                <td className={td}>Risk Manager</td>
                <td className={td}>Soumitra Sarkar</td>
                <td className={td}>21736</td>
                <td className={td}>01787678930</td>
              </tr>
              <tr>
                <td className={td}>Regional Head (RH)</td>
                <td className={td}>Hedayet Kabir</td>
                <td className={td}>14300</td>
                <td className={td}>01714084760</td>
              </tr>
              <tr>
                <td className={td}>TM</td>
                <td className={td}>Ali Mustafa</td>
                <td className={td}>13813</td>
                <td className={td}>01713424974</td>
              </tr>
              <tr>
                <td className={td}>BDM</td>
                <td className={td}>Md. Jahidul Islam</td>
                <td className={td}>22200</td>
                <td className={td}>01755692136</td>
              </tr>
              <tr>
                <td className={td}>Credit MIS</td>
                <td className={td}>Md. Moynul Islam</td>
                <td className={td}>EZB148</td>
                <td className={td}>01959916407</td>
              </tr>
              <tr>
                <td className={td}>Relationship Officer (RO)</td>
                <td className={td}>Shishir Das</td>
                <td className={td}>26666</td>
                <td className={td}>01709819634</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-3 flex justify-end">
            <div className="h-[72px] w-[170px] border border-[#cfcfcf]"></div>
          </div>

          <div className="mt-10 text-[11px] leading-tight">
            <div className="flex justify-between">
              <div className="font-semibold">প্রধান,</div>
              <div>
                <span className="font-semibold">তারিখ</span> 22-Jan-2026
              </div>
            </div>
            <p>এসএমই ব্যাংকিং</p>
            <p>ব্র্যাক ব্যাংক লিমিটেড</p>
            <p>প্রধান কার্যালয়, ঢাকা</p>

            <p className="mt-2 text-center font-semibold">
              এসএমই উদ্যোক্তা হিসেবে ঋণের আবেদন (কোভিড -১৯ এর প্রভাব ক্ষতিগ্রস্ত)
            </p>

            <p className="mt-2">
              প্রিয় মহোদয়,
            </p>
            <p>
              আমরা/আমাদের প্রতিষ্ঠানে কোভিড -১৯ এর কারণে ব্যবসায়িক ক্ষতির সম্মুখীন হওয়ার পর প্রেক্ষিতে নতুন
              বিনিয়োগের পরামর্শ ও উপদেশ প্রদানের জন্য ব্যাংক লিমিটেড এর নিকট হইতে ঋণের জন্য আবেদন করছি।
            </p>
          </div>

          <table className="mt-2 w-full border-collapse">
            <thead>
              <tr>
                <th className={th}>ক্রঃ</th>
                <th className={th}>ঋণের ধরন</th>
                <th className={th}>ঋণের পরিমাণ (আবেদনকৃত)</th>
                <th className={th}>সুদের হার</th>
                <th className={th}>কিস্তির সংখ্যা</th>
                <th className={th}>মাসিক কিস্তির পরিমাণ</th>
                <th className={th}>ঋণ গ্রহণের উদ্দেশ্য</th>
                <th className={th}>বিদ্যমান/প্রস্তাবিত ঋণের হিসাব</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>1</td>
                <td className={td}>Term Loan</td>
                <td className={td}>৳ 2,00,000</td>
                <td className={td}>13.75</td>
                <td className={td}>24</td>
                <td className={td}>৳ 58,000</td>
                <td className={td}>BUSINESS EXPANSION</td>
                <td className={td}>-</td>
              </tr>
              <tr>
                <td className={td}>মোট</td>
                <td className={td}></td>
                <td className={td}>৳ 2,00,000</td>
                <td className={td}></td>
                <td className={td}>-</td>
                <td className={td}>৳ 95,790</td>
                <td className={td}>Business Expansion</td>
                <td className={td}>-</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-2 text-[11px] leading-tight">
            <p>
              নোট: উপরোক্ত তথ্য সঠিক/যাচাইকৃত। এসএমই ব্যাংকিং এর প্রস্তাবিত ঋণের তথ্যাবলী অনুগ্রহ করে গ্রহণ করার
              জন্য বিনীত অনুরোধ করছি।
            </p>
            <p>
              ব্র্যাক ব্যাংক একাউন্টিং নম্বর (যদি থাকে) <span className="border-b border-black px-1">1507203425932001</span>
            </p>
            <p>
              (ব্র্যাক ব্যাংক উক্ত তথ্যাবলীর মাধ্যমে সর্বত্র তথ্য সঠিক হচ্ছে এবং আবেদনকারীর দায়ভার বহন করবে।)
            </p>
          </div>

          <table className="mt-3 w-full border-collapse">
            <tbody>
              <tr>
                <td className={`${th} text-left`} colSpan={8}>
                  ১) ঋণ বিবরণঃ প্রস্তাবিত আবেদনকারীর পুঙ্খানুপুঙ্খ তথ্য (ENTERPRISE/BUSINESS INFORMATION)
                </td>
              </tr>
              <tr>
                <td className={td}>১।</td>
                <td className={`${td} text-left`}>
                  প্রতিষ্ঠানের নাম <span className="font-semibold">RAFI COSMETICS</span>
                </td>
                <td className={`${td} text-left`}> </td>
                <td className={`${td} text-left`}> </td>
                <td className={`${td} text-left`}>
                  প্রারম্ভিক বিনিয়োগকৃত মূলধন
                </td>
                <td className={td}>৳ 150,000</td>
                <td className={`${td} text-left`}>ব্যবসা শুরুর তারিখঃ</td>
                <td className={td}>20-Jan-2016</td>
              </tr>
              <tr>
                <td className={td}>২।</td>
                <td className={`${td} text-left`}>আইনগত ধরন</td>
                <td className={td}>PROPRIETORSHIP</td>
                <td className={`${td} text-left`}>ব্যবসার প্রকৃতি Agriculture</td>
                <td className={`${td} text-left`}>প্রতিষ্ঠান গঠনের ধরনঃ (একক), (যুগ্ম), (শাখা)</td>
                <td className={td}>1</td>
                <td className={`${td} text-left`}>ব্যবসার ধরনঃ</td>
                <td className={td}>SERVICE</td>
              </tr>
              <tr>
                <td className={td}>৩।</td>
                <td className={`${td} text-left`}>ব্যবসায়ের ধরণ</td>
                <td className={td}>COSMETICS AND GIFT ITEMS</td>
                <td className={`${td} text-left`}>প্রতিষ্ঠানের ঠিকানা নম্বরঃ</td>
                <td className={td}>DVCGG</td>
                <td className={td}></td>
                <td className={`${td} text-left`}>টিন নম্বর/এনআইডি</td>
                <td className={td}>49057768602</td>
              </tr>
              <tr>
                <td className={td}>৪।</td>
                <td className={`${td} text-left`}>ট্রেড লাইসেন্স নং</td>
                <td className={td}>4601</td>
                <td className={`${td} text-left`}>ইউনিয়ন/পৌরসভার এলাকা</td>
                <td className={td}>-</td>
                <td className={`${td} text-left`}>মোবাইল/টেলিফোন</td>
                <td className={td}>-</td>
                <td className={td}>0</td>
              </tr>
              <tr>
                <td className={td}>৫।</td>
                <td className={`${td} text-left`}>ব্যবসা প্রতিষ্ঠানের ধরন (স্বত্বাধিকার)</td>
                <td className={td}></td>
                <td className={`${td} text-left`}>ই-মেইল</td>
                <td className={td}>দয়া করে উল্লেখ করুন</td>
                <td className={`${td} text-left`}>ইনভয়েস</td>
                <td className={td}>-</td>
                <td className={td}>-</td>
              </tr>
              <tr>
                <td className={td}>৬।</td>
                <td className={`${td} text-left`}>প্রতিষ্ঠানের ঠিকানা</td>
                <td className={`${td} text-left`} colSpan={2}>রোডের ঠিকানা (ট্রেড লাইসেন্স অনুসারে): 1206</td>
                <td className={`${td} text-left`}>জেলা</td>
                <td className={td}>Habiganj</td>
                <td className={`${td} text-left`}>বিভাগ</td>
                <td className={td}>SYLHET</td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={2}>স্থায়ী ঠিকানা (ট্রেড লাইসেন্স অনুযায়ী): 1206</td>
                <td className={`${td} text-left`}></td>
                <td className={`${td} text-left`}>জেলা</td>
                <td className={td}>Sylhet</td>
                <td className={`${td} text-left`}>বিভাগ</td>
                <td className={td}>SYLHET</td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={3}>ব্যবসায়/ব্যবসার অভিজ্ঞতা</td>
                <td className={`${td} text-left`} colSpan={4}>৬২ যাহাদের ব্যবসার সময়কাল month(s)</td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={7}>
                  সঞ্চয় (যদি থাকে) গত বছর এর গড়ঃ RAFI COSMETICS
                </td>
              </tr>
            </tbody>
          </table>

          <table className="mt-2 w-full border-collapse">
            <tbody>
              <tr>
                <td className={`${th} text-center`} colSpan={4}>
                  রিলেশনশিপ অফিসার এর সংক্ষার
                </td>
                <td className={`${th} text-center`} colSpan={4}>
                  ঋণ আবেদনকারীর সংক্ষার
                </td>
              </tr>
              <tr>
                <td className={td}>ক।</td>
                <td className={`${td} text-left`}>প্রতিষ্ঠানের বার্ষিক আয়ের পরিমাণ</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>অ।</td>
                <td className={`${td} text-left`}>মোট নীট বিক্রয় আয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>খ।</td>
                <td className={`${td} text-left`}>মোট ব্যয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>আ।</td>
                <td className={`${td} text-left`}>মাসিক গড় সঞ্চয়ের পরিমাণ</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>গ।</td>
                <td className={`${td} text-left`}>মোট পরিবার ব্যয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>ই।</td>
                <td className={`${td} text-left`}>নীট-নীট আয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>ঘ।</td>
                <td className={`${td} text-left`}>অন্যান্য উৎস থেকে আয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>ঈ।</td>
                <td className={`${td} text-left`}>বাণিজ্যিক-বাসা খরচ (জমি-ঘর/বাড়ি ভাড়া)</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>ঙ।</td>
                <td className={`${td} text-left`}>গড় নীট আয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>উ।</td>
                <td className={`${td} text-left`}>ব্যাংক হিসাবের সংখ্যা</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>চ।</td>
                <td className={`${td} text-left`}>সঞ্চয় বিনিয়োগ</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>ঊ।</td>
                <td className={`${td} text-left`}>পরিশোধযোগ্য ঋণ (Payables)</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>ছ।</td>
                <td className={`${td} text-left`}>নিরেট আয়</td>
                <td className={td}>0</td>
                <td className={td}></td>
                <td className={td}>ঋ।</td>
                <td className={`${td} text-left`}>মোট সম্পত্তি (অনুমান)</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={3}></td>
                <td className={td}>এ।</td>
                <td className={`${td} text-left`}>মূলধন ও পুনঃবিনিয়োগ</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
            </tbody>
          </table>

          <table className="mt-2 w-full border-collapse">
            <tbody>
              <tr>
                <td className={`${td} text-left`} colSpan={4}>
                  খরচ (বেতন/খাদ্য/চিকিৎসা/শিক্ষা) সংক্রান্ত তথ্য (প্রযোজ্য ক্ষেত্রে)
                </td>
                <td className={`${td} text-left`} colSpan={4}>
                  বর্তমানে / বাড়ি ভাড়া/ গ্যাস/বিদ্যুৎ/পানি সংখ্যা: 0
                </td>
              </tr>
              <tr>
                <td className={td}>১।</td>
                <td className={`${td} text-left`} colSpan={3}>সহকারী কর্মী সংখ্যা/মাসিক বেতন সংখ্যা: 0</td>
                <td className={`${td} text-left`} colSpan={4}>বর্তমান পারিবারিক ব্যয়: 0</td>
              </tr>
              <tr>
                <td className={td}>২।</td>
                <td className={`${td} text-left`} colSpan={3}>গড় মাসিক বাসা ভাড়া/খাবার খরচ: 0</td>
                <td className={`${td} text-left`} colSpan={4}>মূলধন বিনিয়োগের প্রয়োজন: 0</td>
              </tr>
              <tr>
                <td className={td}>৩।</td>
                <td className={`${td} text-left`} colSpan={3}>বৎসরব্যাপী উদ্যোক্তা ব্যয়ের গড় মান (যদি থাকে): 0</td>
                <td className={`${td} text-left`} colSpan={4}>নিম্ন বর্ণিত/তফসিল: 0</td>
              </tr>
              <tr>
                <td className={td}>৪।</td>
                <td className={`${td} text-left`} colSpan={3}>নির্ধারিত ঋণের মাসিক পরিশোধের কিস্তি (সংখ্যা): 0</td>
                <td className={`${td} text-left`} colSpan={4}>নিজস্ব/মাসিক ব্যয় ধরন: 0</td>
              </tr>
              <tr>
                <td className={td}>৫।</td>
                <td className={`${td} text-left`} colSpan={3}>মাসিক পরিশোধিত সেবা খরচের পরিমাণ (টাকা): 0</td>
                <td className={`${td} text-left`} colSpan={4}></td>
              </tr>
              <tr>
                <td className={td}>৬।</td>
                <td className={`${td} text-left`} colSpan={3}>অন্যান্য (যদি থাকে) / মোট মাসিক ব্যয় (টাকা): 0</td>
                <td className={`${td} text-left`} colSpan={4}></td>
              </tr>
              <tr>
                <td className={td}>৭।</td>
                <td className={`${td} text-left`} colSpan={3}>সর্বমোট ব্যয় (টাকা) = মোট নিট আয়</td>
                <td className={td}>টাকা</td>
                <td className={td}>-</td>
                <td className={td}>টাকা</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}>৮।</td>
                <td className={`${td} text-left`} colSpan={3}>ঘর সংক্রান্ত জামানত</td>
                <td className={`${td} text-left`} colSpan={2}>বর্তমান মোট সম্পত্তি</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={3}>বর্তমান সম্পত্তি</td>
                <td className={`${td} text-left`} colSpan={2}>মোট মাসিক কিস্তিভার</td>
                <td className={td}>0</td>
                <td className={td}></td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={3}>ঋণ প্রস্তাবনা ধারক/প্রতিষ্ঠানের নামঃ</td>
                <td className={`${td} text-left`} colSpan={4}>-</td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left`} colSpan={3}>মন্তব্য/সুপারিশ</td>
                <td className={`${td} text-left`} colSpan={4}></td>
              </tr>
            </tbody>
          </table>

          <table className="mt-1 w-full border-collapse">
            <tbody>
              <tr>
                <td className={td}>১২।</td>
                <td className={`${td} text-left`} colSpan={7}>
                  <span className="font-semibold">মেমোরান্ডাম</span>
                  <br />
                  আমি/আমরা এই মর্মে প্রত্যয়ন করছি যে, আমরা/আমাদের প্রতিষ্ঠান RAFI COSMETICS এর ব্যবসা এবং ঋণের
                  প্রয়োজনীয়তা দেখে ঋণ অনুমোদন করার সুপারিশ/সাক্ষাৎকার গ্রহণ করেছি। আবেদনকৃত তথ্য ও কাগজপত্র
                  যাচাই করে সঠিক পেয়েছি। ব্যাংকের নিয়ম অনুযায়ী ঋণ পরিচালনা ও পরিশোধের সক্ষমতা রয়েছে এবং
                  ঋণপ্রস্তাবটি ব্যবসার প্রয়োজনে গ্রহণযোগ্য। উপরোক্ত তথ্যাবলির আলোকে ঋণ অনুমোদনের জন্য বিনীতভাবে
                  সুপারিশ করা হলো।
                </td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left font-semibold`} colSpan={7}>
                  ঋণ আবেদনকারীর স্বাক্ষর
                </td>
              </tr>
              <tr>
                <td className={td}></td>
                <td className={`${td} text-left font-semibold`} colSpan={7}>
                  ব্যবসা সম্পর্কে অভ্যন্তরীণ তথ্য ও ঋণ আবেদনকারীর আচরণ যাচাই (রিজিওন/টিএম/কর্মকর্তা হেড)
                </td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4 text-[11px]">
            নতুন ঋণ আবেদনপত্র/কেস রিভিউ টিম এর পক্ষে পরিদর্শন তারিখঃ 22-Jan-2026
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center text-[11px]">
            <div className="border-t border-[#666] pt-1">রিলেশনশিপ অফিসার এর স্বাক্ষর</div>
            <div className="border-t border-[#666] pt-1">বিডিএম এর স্বাক্ষর</div>
            <div className="border-t border-[#666] pt-1">
              টিম/অফিসার ম্যানেজার এর স্বাক্ষর (যাচাই করে)
              <div className="mt-1 font-semibold">Business Name : RAFI COSMETICS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Covid19Laf
