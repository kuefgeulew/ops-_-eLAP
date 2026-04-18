/**
 * Sanction letter, part one — printable layout.
 */
import useCaseData from '../hooks/useCaseData'

function SanctionLetter() {
  const { get, formatBDT, profile } = useCaseData()
  const c = 'border border-black px-1 py-[2px] align-top text-[10px] leading-tight'
  const head = 'border border-black px-1 py-[2px] text-center text-[10px] font-semibold'

  return (
    <div className="min-h-screen bg-white px-3 py-2 text-black">
      <div className="mx-auto w-full max-w-[1600px] font-['Arial']">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className={`${c} w-[68%] border-r-0`}>
                <div className="text-[10px]">তারিখ: -</div>
                <div className="mt-1 text-[10px]">
                  প্রাপক
                  <br />
                  {get('businessName')}
                </div>
              </td>
              <td className={`${c} w-[32%]`}>
                <div className="text-[10px] font-semibold">BRAC Bank PLC</div>
                <div className="text-[10px]">Tower, 220 Tejgaon Gulshan Link Road</div>
                <div className="text-[10px]">Tejgaon, {get('city')}-1208, Bangladesh</div>
              </td>
            </tr>
            <tr>
              <td className={`${head} text-[12px]`} colSpan={2}>
                মঞ্জুরি / অনুমোদন
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-1 border border-black px-1 py-[2px] text-[10px]">
          <div>
            হেড অফিস: HO Operation/SME Asset & ROC OPS/Sanction/Anonno/{get('crmCenter')}/26010002658
          </div>
          <div className="font-semibold">ঋণ প্রস্তাব: {get('businessName')}</div>
          <div>ব্যবসার ঠিকানা: {get('businessLocation')}</div>
          <div>আইনগত অবস্থা: {get('legalStatus')}</div>
        </div>

        <div className="mt-1 border border-black px-1 py-[2px] text-[10px]">
          প্রিয় গ্রাহক, আপনার ঋণ আবেদন গ্রহণ করে আমরা আনন্দের সাথে জানাচ্ছি যে, 23-Jun-2026 তারিখে
          অনুমোদনের ভিত্তিতে নিম্নোক্ত শর্তসাপেক্ষে ঋণ মঞ্জুর করা হলো।
        </div>

        <table className="mt-1 w-full border-collapse">
          <tbody>
            <tr>
              <td className={head} colSpan={8}>
                প্রস্তাবিত ঋণের সুবিধার বিবরণ
              </td>
            </tr>
            <tr>
              <td className={head}>নং</td>
              <td className={head}>ঋণের নাম</td>
              <td className={head}>আবেদনকৃত পরিমাণ</td>
              <td className={head}>সুদের হার</td>
              <td className={head}>সুদ গণনার পর্যায়</td>
              <td className={head}>মাসিক কিস্তি</td>
              <td className={head}>মেয়াদ (মাস)</td>
              <td className={head}>উদ্দেশ্য</td>
            </tr>
            <tr>
              <td className={`${c} text-center`}>১</td>
              <td className={c}>{get('loanType')}</td>
              <td className={c}>{formatBDT(profile?.loanAmount)}</td>
              <td className={c}>
                {get('interest')}%
              </td>
              <td className={c}>Quarterly</td>
              <td className={c}>{formatBDT(profile?.emiComfort)}</td>
              <td className={`${c} text-center`}>
                {get('tenor')} months
              </td>
              <td className={c}>{get('purpose')}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-1 border border-black px-1 py-[2px] text-[10px]">
          উল্লেখ্য যে, ঋণের চূড়ান্ত অনুমোদন এবং অর্থছাড় ব্যাংকের নীতিমালা, দলিলাদি ও সন্তোষজনক যাচাইয়ের
          ওপর নির্ভরশীল।
        </div>

        <table className="mt-1 w-full border-collapse">
          <tbody>
            <tr>
              <td className={head} colSpan={2}>
                শর্তাবলী/কার্যপরিকল্পনা
              </td>
            </tr>
            <tr>
              <td className={`${c} w-[70%]`}>
                ১) আবেদনকারী ও জামিনদারের সকল তথ্য/দলিল যথাযথভাবে যাচাই সাপেক্ষে গ্রহণযোগ্য হতে হবে।
                <br />
                ২) চার্জ সৃষ্টির দলিলাদি, পোস্ট ডেটেড চেক এবং প্রযোজ্য নিরাপত্তা কাগজপত্র ব্যাংকের সন্তুষ্টি
                অনুযায়ী সম্পন্ন করতে হবে।
                <br />
                ৩) ব্যাংক প্রয়োজন মনে করলে অতিরিক্ত কাগজপত্র/তথ্য চাইতে পারবে।
              </td>
              <td className={`${c} w-[30%]`}>
                <div className="font-semibold">সংযুক্তি:</div>
                <div>☑ আবেদনপত্র</div>
                <div>☑ জাতীয় পরিচয়পত্র</div>
                <div>☑ ট্রেড লাইসেন্স</div>
                <div>☐ অন্যান্য</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 grid grid-cols-3 gap-6 text-[10px]">
          <div className="border-t border-dashed border-black pt-1 text-center">অভ্যর্থনাকারী ব্যাংক কর্মকর্তার সিল ও স্বাক্ষর</div>
          <div className="border-t border-dashed border-black pt-1 text-center">গ্রাহক প্রাপ্তির সিল ও স্বাক্ষর</div>
          <div className="border-t border-dashed border-black pt-1 text-center">অনুমোদনকারী ব্যাংক কর্মকর্তার সিল ও স্বাক্ষর</div>
        </div>

        <div className="mt-2 border border-black px-1 py-[2px] text-[10px] leading-tight">
          <div className="border-b border-black pb-[2px] text-center font-semibold">আমাদের সুবিধাসমূহ</div>
          <div className="pt-[2px]">
            - কিস্তি এবং তফসিল আপনার সক্ষমতার সাথে সামঞ্জস্য রেখে নির্ধারণ করা হবে। - ঋণ/সুবিধা
            যথাযথভাবে ব্যবহার ও সময়মতো পরিশোধের মাধ্যমে ভবিষ্যতে আরও ভাল সেবা পাওয়া যাবে।
            - ব্যাংকের নীতিমালা ও প্রচলিত আইন অনুসারে যে কোনো সময় যাচাই, তথ্য সংগ্রহ, নিরাপত্তা
            সৃষ্টিকরণ এবং দলিল সংশোধনের অধিকার ব্যাংক সংরক্ষণ করে।
          </div>
        </div>

        <table className="mt-1 w-full border-collapse">
          <tbody>
            <tr>
              <td className={head} colSpan={2}>
                বিধিবদ্ধ শর্তে ঋণ অনুমোদনের সূচকাবলী
              </td>
            </tr>
            <tr>
              <td className={`${c} w-1/2`}>
                ১) গ্রাহকের সকল দাখিলকৃত দলিল, তথ্য, অনলাইন যাচাই এবং KYC/AML পরিপালন ব্যাংকের
                সন্তুষ্টি অনুযায়ী হতে হবে।
                <br />
                ২) গৃহীত নিরাপত্তা ও জামানত দলিলসমূহ যথাযথভাবে সম্পাদন, স্ট্যাম্পিং, নিবন্ধন এবং
                সংরক্ষণ করতে হবে।
                <br />
                ৩) সুদহার, ফি, চার্জ বা সময়সূচি ব্যাংকের নীতিমালা/বাংলাদেশ ব্যাংকের নির্দেশনা অনুযায়ী
                পরিবর্তনযোগ্য।
                <br />
                ৪) কিস্তি নির্ধারিত তারিখে পরিশোধ না হলে প্রযোজ্য বিলম্ব চার্জ/শাস্তিমূলক সুদ আরোপিত
                হতে পারে।
              </td>
              <td className={`${c} w-1/2`}>
                ১) ঋণের অর্থ নির্ধারিত উদ্দেশ্য ব্যতীত অন্য কোনো কাজে ব্যবহার করা যাবে না।
                <br />
                ২) ব্যবসায়িক লেনদেন যতটা সম্ভব ব্যাংকিং চ্যানেলের মাধ্যমে সম্পন্ন করতে হবে এবং ব্যাংকের
                কাছে চাহিবা মাত্র হিসাব/তথ্য প্রদান করতে হবে।
                <br />
                ৩) বীমা, লাইসেন্স, ট্রেড লাইসেন্স, ট্যাক্স, পরিবেশগত/স্থানীয় কর্তৃপক্ষের অনুমোদন
                (প্রযোজ্য ক্ষেত্রে) হালনাগাদ রাখতে হবে।
                <br />
                ৪) ব্যাংকের পূর্ব লিখিত অনুমতি ছাড়া প্রতিষ্ঠান/জামিনদার/ঠিকানা/ব্যবসার প্রকৃতিতে
                মৌলিক পরিবর্তন করা যাবে না।
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-1 border border-black px-1 py-[2px] text-[10px] leading-tight">
          <div className="border-b border-black pb-[2px] text-center font-semibold">
            মার্কেটিং ডিসক্লেইমার এবং পণ্য সম্পর্কে অবগতি
          </div>
          <div className="pt-[2px]">
            ব্যাংকের প্রতিনিধি কর্তৃক প্রস্তাবিত পণ্যসমূহের মৌলিক বৈশিষ্ট্য, সুদের ধরন, চার্জ, কিস্তি এবং
            ঝুঁকিসমূহ গ্রাহককে অবহিত করা হয়েছে। গ্রাহক স্বেচ্ছায় প্রস্তাব গ্রহণ করেছেন এবং সকল শর্ত
            পড়ে/বুঝে সম্মতি প্রদান করেছেন। ব্যাংক বা তার প্রতিনিধি কোনো অযৌক্তিক প্রতিশ্রুতি প্রদান করে
            না; চূড়ান্ত দলিল, অনুমোদন এবং বিতরণ সম্পূর্ণরূপে প্রযোজ্য নীতি ও যাচাই সাপেক্ষ।
          </div>
        </div>

        <table className="mt-1 w-full border-collapse">
          <tbody>
            <tr>
              <td className={head} colSpan={2}>
                সম্মতির ঘোষণা
              </td>
            </tr>
            <tr>
              <td className={`${c} w-[72%]`}>
                আমি/আমরা উপরোক্ত সকল শর্ত, ফি/চার্জ, সুদহার, কিস্তি, দায়দায়িত্ব এবং প্রযোজ্য নীতিমালা
                সম্পর্কে অবগত হয়েছি এবং তাতে সম্মতি প্রদান করছি।
              </td>
              <td className={`${c} w-[28%]`}>
                <div className="font-semibold">পণ্য/স্কিম:</div>
                <div>Anonno</div>
                <div className="mt-1">কোড: -</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-2 grid grid-cols-3 gap-6 text-[10px]">
          <div className="border-t border-dashed border-black pt-1 text-center">
            গ্রাহকের স্বাক্ষর/টিপসই ও তারিখ
          </div>
          <div className="border-t border-dashed border-black pt-1 text-center">
            সম্পর্ক ব্যবস্থাপক/কর্মকর্তার সিল ও স্বাক্ষর
          </div>
          <div className="border-t border-dashed border-black pt-1 text-center">
            শাখা অনুমোদনকারী কর্মকর্তার সিল ও স্বাক্ষর
          </div>
        </div>

        <div className="mt-2 border border-black px-1 py-[2px] text-[10px] leading-tight">
          <div className="border-b border-black pb-[2px] text-center font-semibold">
            ঋণের সাধারণ শর্তাবলী (শেষ অংশ)
          </div>
          <div className="pt-[2px]">
            ১) ঋণ/সুবিধা গ্রহণকারী ও জামিনদার ঘোষণা করছেন যে, প্রদানকৃত সব তথ্য সত্য, নির্ভুল ও সম্পূর্ণ;
            ভুল তথ্য প্রদান প্রমাণিত হলে ব্যাংক প্রয়োজনীয় আইনগত ব্যবস্থা নিতে পারবে।
            <br />
            ২) ঋণের অর্থ নির্ধারিত ব্যবসায়িক উদ্দেশ্যে ব্যতীত অন্য কোনো কাজে ব্যবহার করা যাবে না এবং
            ব্যাংক প্রয়োজন মনে করলে ব্যবহার যাচাইয়ের জন্য পরিদর্শন করতে পারবে।
            <br />
            ৩) নির্ধারিত সময়ে কিস্তি, সুদ, ফি ও অন্যান্য চার্জ পরিশোধ না হলে প্রযোজ্য অতিরিক্ত চার্জ,
            জরিমানা বা আইনগত ব্যয় গ্রাহক/জামিনদার বহন করবেন।
            <br />
            ৪) ব্যাংকের লিখিত অনুমতি ব্যতীত ব্যবসার মালিকানা, ঠিকানা, কার্যক্রমের প্রকৃতি বা মূলধনী
            কাঠামোতে মৌলিক পরিবর্তন করা যাবে না।
            <br />
            ৫) প্রযোজ্য ক্ষেত্রে বীমা, লাইসেন্স, ট্রেড লাইসেন্স, ট্যাক্স-সংক্রান্ত নথি হালনাগাদ রাখা এবং
            চাহিবামাত্র ব্যাংকে দাখিল করা বাধ্যতামূলক।
            <br />
            ৬) ব্যাংক যে কোনো সময় বাংলাদেশ ব্যাংক/প্রচলিত আইন/ব্যাংকের নীতিমালার আলোকে সুদহার, চার্জ,
            পরিশোধ সূচি বা অন্যান্য শর্ত পুনঃনির্ধারণ করতে পারবে এবং তা গ্রাহকের উপর বাধ্যতামূলক হবে।
            <br />
            ৭) ঋণ হিসাব অনিয়মিত হলে বা ঝুঁকিপূর্ণ আচরণ পরিলক্ষিত হলে ব্যাংক আংশিক বা পূর্ণ ঋণ
            তাত্ক্ষণিকভাবে দায়যোগ্য ঘোষণা করতে পারবে।
            <br />
            ৮) গ্রাহক ও জামিনদার সম্মতি দিচ্ছেন যে, ব্যাংক প্রয়োজনে ক্রেডিট ব্যুরো, নিয়ন্ত্রক সংস্থা,
            আইনানুগ কর্তৃপক্ষ বা অনুমোদিত তৃতীয় পক্ষের নিকট তথ্য যাচাই/শেয়ার করতে পারবে।
            <br />
            ৯) নিরাপত্তা দলিল, চার্জ ডকুমেন্ট, পোস্ট ডেটেড চেক, অঙ্গীকারনামা এবং অন্যান্য আনুষঙ্গিক কাগজপত্র
            ব্যাংকের নির্ধারিত ফরমে সম্পাদন করতে হবে।
            <br />
            ১০) ব্যাংকের সঙ্গে সম্পাদিত মূল ঋণ চুক্তি, স্যাংশন শর্তপত্র এবং সংশ্লিষ্ট দলিলাবলি মিলিয়ে
            ঋণসুবিধার পূর্ণাঙ্গ শর্ত প্রযোজ্য হবে।
            <br />
            ১১) গ্রাহক স্বীকার করছেন যে, তিনি/তারা শর্তাবলি পড়ে বুঝেছেন এবং কোনো প্রকার চাপ ব্যতিরেকে
            স্বেচ্ছায় সম্মতি প্রদান করছেন।
            <br />
            ১২) এই শর্তপত্রে উল্লিখিত যেকোনো ধারার ব্যাখ্যা/প্রয়োগ নিয়ে দ্বন্দ্ব দেখা দিলে ব্যাংকের রেকর্ড,
            প্রচলিত আইন এবং আদালতের এখতিয়ার অনুযায়ী নিষ্পত্তি হবে।
            <br />
            ১৩) প্রয়োজনে ব্যাংক অতিরিক্ত নিরাপত্তা বা জামিনদার চাইতে পারে এবং গ্রাহক তা প্রদানে বাধ্য থাকবেন।
            <br />
            ১৪) ব্যাংকের লিখিত অনুমতি ছাড়া ঋণ/সুবিধা বা সংশ্লিষ্ট অধিকার তৃতীয় পক্ষের নিকট হস্তান্তরযোগ্য
            নয়।
            <br />
            ১৫) উপরোক্ত শর্তাবলির যে কোনো লঙ্ঘন ঋণচুক্তির ভঙ্গ হিসেবে গণ্য হবে এবং ব্যাংক প্রযোজ্য
            আইনানুগ প্রতিকার গ্রহণ করতে পারবে।
            <br />
            ১৬) এই মর্মে আমি/আমরা ঘোষণা করছি যে, সকল শর্তাবলি বুঝে গ্রহণ করেছি এবং যথাসময়ে পরিশোধসহ
            চুক্তিগত বাধ্যবাধকতা পালনে অঙ্গীকারাবদ্ধ।
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-10 text-[10px]">
          <div className="border-t border-dashed border-black pt-1 text-left">
            গ্রাহকের স্বাক্ষর
            <br />
            <span className="font-semibold">নাম ও তারিখ:</span>
          </div>
          <div className="border-t border-dashed border-black pt-1 text-right">
            অনুমোদিত ব্যাংক কর্মকর্তার সিল ও স্বাক্ষর
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-10 text-[10px]">
          <div className="border-t border-dashed border-black pt-1 text-left">শাখা ব্যবস্থাপকের সিল ও স্বাক্ষর</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default SanctionLetter

