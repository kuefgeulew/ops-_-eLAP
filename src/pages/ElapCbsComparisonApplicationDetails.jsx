/**
 * Side-by-side eLAP and CBS application fields — printable comparison layout.
 */
function ElapCbsComparisonApplicationDetails() {
  const th = 'border border-black px-2 py-[4px] text-center text-[11px] font-semibold leading-none'
  const td = 'border border-black px-2 py-[4px] text-center text-[11px] leading-none'

  return (
    <div className="min-h-screen bg-white px-2 py-2 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <div className="mb-1 flex justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="border border-black px-2 py-[1px] text-[11px] leading-none"
          >
            Print
          </button>
        </div>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black py-[14px] text-center text-[52px] font-bold leading-none text-[#0066b3]">
                eLAP and CBS Comparision Application Details
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mt-6 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#efefef] px-2 py-[4px] text-left text-[11px] leading-none">
                Application Details &nbsp; Repeat, Repeat Customer, 22-Jan-2026
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-black px-2 py-[4px] text-center text-[30px] font-semibold leading-none text-white">
                CIF IDs
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Guarantors&apos; CIF</th>
              <th className={th}>Owner&apos;s CIF</th>
              <th className={th}>Borrower CIF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>03954951, 05270245,</td>
              <td className={td}>03425937,</td>
              <td className={td}>03425932</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black px-2 py-[6px] text-center text-[44px] font-semibold leading-none text-[#6b3fb0]">
                CIF DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[11px] font-semibold leading-none">
                DEDUPE
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} w-[15%] text-left`}>Borrower Information</td>
              <td className={`${td} w-[85%] text-left`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td
                className="border border-black bg-[#1d1d1d] px-2 py-[3px] text-center text-[26px] font-semibold leading-none text-white"
                colSpan={8}
              >
                Borrower Information
              </td>
            </tr>
            <tr>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
              <td className={th}>Particulars</td>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
              <td className={th}>Particulars</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>CRM Tracking No.</td>
              <td className={`${td} text-left`}>26010002662</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Borrower CIF ID</td>
              <td className={`${td} text-left`}>Borrower CIF ID</td>
              <td className={`${td} text-left`}>03425932</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Legal Entity</td>
              <td className={`${td} text-left`}>PROPRIETORSHIP</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>BBL Operative A/C No.</td>
              <td className={`${td} text-left`}>BBL Operative A/C No.</td>
              <td className={`${td} text-left`}>1507203425932001</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Business Name</td>
              <td className={`${td} text-left`}>RAFI COSMETICS</td>
              <td className={`${td} text-left`}>RAFI COSMETICS</td>
              <td className={`${td} text-left`}>Previous Loan A/C No.</td>
              <td className={`${td} text-left`}>Previous Loan A/C No.</td>
              <td className={`${td} text-left`}>6034259320005</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Nature of Business</td>
              <td className={`${td} text-left`}>Service</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Contact Number</td>
              <td className={`${td} text-left`}>Contact Number</td>
              <td className={`${td} text-left`}>01733523102</td>
              <td className={`${td} text-left`}>01733523102</td>
              <td className={`${td} text-left`}>01733523102</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>E-Mail Address</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>BIN No.</td>
              <td className={`${td} text-left`}>BIN No.</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Business Address (Trade License)</td>
              <td className={`${td} text-left`}>SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14, Madhabpur</td>
              <td className={`${td} text-left`}>SHOP 33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14</td>
              <td className={`${td} text-left`}>Business Address (Actual)</td>
              <td className={`${td} text-left`}>Business Address (Actual)</td>
              <td className={`${td} text-left`}>SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14</td>
              <td className={`${td} text-left`}>SHOP-33, SAIKOT PLAZA, NAVY MARKET, MIRPUR-14</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Business Address (RJSC)</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Business Address (Factory / Others)</td>
              <td className={`${td} text-left`}>Business Address (Factory / Others)</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN No.</td>
              <td className={`${td} text-left`}>490675786802</td>
              <td className={`${td} text-left`}>490675786802</td>
              <td className={`${td} text-left`}>Business Start Date</td>
              <td className={`${td} text-left`}>Business Start Date</td>
              <td className={`${td} text-left`}>20-Jan-2016</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Tax Return Register No. (TRR)</td>
              <td className={`${td} text-left`}>4EFTFG4</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Trade License Issuing Authority</td>
              <td className={`${td} text-left`}>Trade License Issuing Authority</td>
              <td className={`${td} text-left`}>DFCGG</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>RJSC Registration Number</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Trade License No.</td>
              <td className={`${td} text-left`}>Trade License No.</td>
              <td className={`${td} text-left`}>4601</td>
              <td className={`${td} text-left`}>4601</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Joint Stock Registration Authority</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Trade License Issue Date</td>
              <td className={`${td} text-left`}>Trade License Issue Date</td>
              <td className={`${td} text-left`}>19-Sep-2021</td>
              <td className={`${td} text-left`}>19-Sep-2021</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>ICRR Issue Date</td>
              <td className={`${td} text-left`}>0</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Trade License Expiry Date</td>
              <td className={`${td} text-left`}>Trade License Expiry Date</td>
              <td className={`${td} text-left`}>10-Jan-2040</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>ICRR Rating Code</td>
              <td className={`${td} text-left`}>0</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Credit Lines Issue Date</td>
              <td className={`${td} text-left`}>Credit Lines Issue Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>ICRR Rating Grade</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Credit Rating Expiry Date</td>
              <td className={`${td} text-left`}>Credit Rating Expiry Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>BB Short Code</td>
              <td className={`${td} text-left`}>00901001</td>
              <td className={`${td} text-left`}>901003</td>
              <td className={`${td} text-left`}>Customer Segmentation Code</td>
              <td className={`${td} text-left`}>Customer Segmentation Code</td>
              <td className={`${td} text-left`}>91826921</td>
              <td className={`${td} text-left`}>91826921</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>No. of Employee</td>
              <td className={`${td} text-left`}>8</td>
              <td className={`${td} text-left`}>8</td>
              <td className={`${td} text-left`}>SME Code</td>
              <td className={`${td} text-left`}>SME Code</td>
              <td className={`${td} text-left`}>99</td>
              <td className={`${td} text-left`}>99</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Fixed Assets Exc. Land Building</td>
              <td className={`${td} text-left`}>৳ 0</td>
              <td className={`${td} text-left`}>৳ 0</td>
              <td className={`${td} text-left`}>Sales Turnover</td>
              <td className={`${td} text-left`}>Sales Turnover</td>
              <td className={`${td} text-left`}>৳ 1,252,366</td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#1d1d1d] px-2 py-[3px] text-center text-[26px] font-semibold leading-none text-white">
                Owner Information
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={6}>
                Owner 1
              </td>
            </tr>
            <tr>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>First Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Owner CIF</td>
              <td className={`${td} text-left`}>03425937</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Middle Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Last Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Owner Name</td>
              <td className={`${td} text-left`}>FAYSAL AHMMAD</td>
              <td className={`${td} text-left`}>FAYSAL AHMMAD</td>
              <td className={`${td} text-left`}>Gender</td>
              <td className={`${td} text-left`}>M</td>
              <td className={`${td} text-left`}>M</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Employment Type</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Self employed</td>
              <td className={`${td} text-left`}>Father&apos;s Name</td>
              <td className={`${td} text-left`}>MOHAMMAD ULLA</td>
              <td className={`${td} text-left`}>MOHAMMAD ULLA</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID No.</td>
              <td className={`${td} text-left`}>7518377532733</td>
              <td className={`${td} text-left`}>7518377532733</td>
              <td className={`${td} text-left`}>Mother&apos;s Name</td>
              <td className={`${td} text-left`}>MORSHEDA BEGUM</td>
              <td className={`${td} text-left`}>MORSHEDA BEGUM</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Smart NID No.</td>
              <td className={`${td} text-left`}>6425127609</td>
              <td className={`${td} text-left`}>6425127609</td>
              <td className={`${td} text-left`}>Marital Status</td>
              <td className={`${td} text-left`}>Married</td>
              <td className={`${td} text-left`}>Married</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Date of Birth</td>
              <td className={`${td} text-left`}>13-Jan-1987</td>
              <td className={`${td} text-left`}>13-Jan-1987</td>
              <td className={`${td} text-left`}>Spouse Name</td>
              <td className={`${td} text-left`}>MST. SHARMIN AKTER</td>
              <td className={`${td} text-left`}>MST. SHARMIN AKTER</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID Issue Date</td>
              <td className={`${td} text-left`}>20-Jan-2016</td>
              <td className={`${td} text-left`}>20-Jan-2016</td>
              <td className={`${td} text-left`}>Phone Numbers</td>
              <td className={`${td} text-left`}>01733523102</td>
              <td className={`${td} text-left`}>01733523102</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID Place of Issue</td>
              <td className={`${td} text-left`}>Natore</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>NID Place of Issue Code</td>
              <td className={`${td} text-left`}>45</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN No.</td>
              <td className={`${td} text-left`}>490675786802</td>
              <td className={`${td} text-left`}>490675786802</td>
              <td className={`${td} text-left`}>E-Mail Address</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN Place of Issue</td>
              <td className={`${td} text-left`}>Natore, as per NID</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Present Address</td>
              <td className={`${td} text-left`}>PLOT-A/3, MAIN ROAD, SEC-14, MIRPUR</td>
              <td className={`${td} text-left`}>PLOT-A/3, MAIN ROAD, SEC-14, MIRPUR</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN Issue Date</td>
              <td className={`${td} text-left`}>20-Jan-2016, as per NID</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>City, District</td>
              <td className={`${td} text-left`}>Sylhet Sadar, Sylhet</td>
              <td className={`${td} text-left`}>63, 6</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Tax Return Register No. (TRR)</td>
              <td className={`${td} text-left`}>4F5GTY</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Post Code</td>
              <td className={`${td} text-left`}>4564</td>
              <td className={`${td} text-left`}>4564</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport No</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Division</td>
              <td className={`${td} text-left`}>SYLHET</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Issue Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Permanent Address</td>
              <td className={`${td} text-left`}>VILL MIRZANAGAR, PO-NATERSHOP, PS-SONAIMURI</td>
              <td className={`${td} text-left`}>VILL MIRZANAGAR, PO-NATERSHOP, PS-SONAIMURI</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Expiry Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>City, District</td>
              <td className={`${td} text-left`}>Sylhet Sadar, Sylhet</td>
              <td className={`${td} text-left`}>63, 6</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Place of Issue</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Post Code</td>
              <td className={`${td} text-left`}>6457</td>
              <td className={`${td} text-left`}>6457</td>
            </tr>
            <tr>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Division</td>
              <td className={`${td} text-left`}>SYLHET</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>Majority of Ownership:</td>
              <td className={`${td} text-left`}>Male</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[11px] font-semibold leading-none">
                DEDUPE
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} w-[15%] text-left`}>Guarantor Information</td>
              <td className={`${td} w-[85%] text-left`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td
                className="border border-black bg-[#1d1d1d] px-2 py-[3px] text-center text-[26px] font-semibold leading-none text-white"
                colSpan={6}
              >
                Guarantor Information
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={6}>
                GUARANTOR 1
              </td>
            </tr>
            <tr>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Guarantor CIF</td>
              <td className={`${td} text-left`}>03954951</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Relationship</td>
              <td className={`${td} text-left`}>ADMINISTRATOR</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>First Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Middle Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Last Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Gender</td>
              <td className={`${td} text-left`}>M</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Guarantor Name</td>
              <td className={`${td} text-left`}>FORHAD HOSSAIN</td>
              <td className={`${td} text-left`}>FORHAD HOSSAIN</td>
              <td className={`${td} text-left`}>Father&apos;s Name</td>
              <td className={`${td} text-left`}>MOHAMMAD ULLAH</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Employment Type</td>
              <td className={`${td} text-left`}>Self employed</td>
              <td className={`${td} text-left`}>Self employed</td>
              <td className={`${td} text-left`}>Mother&apos;s Name</td>
              <td className={`${td} text-left`}>MORSHEDA BEGUM</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID No.</td>
              <td className={`${td} text-left`}>19957518377000527</td>
              <td className={`${td} text-left`}>19957518377000527</td>
              <td className={`${td} text-left`}>Marital Status</td>
              <td className={`${td} text-left`}>Unmarried</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Smart NID No.</td>
              <td className={`${td} text-left`}>5557421178</td>
              <td className={`${td} text-left`}>5557421178</td>
              <td className={`${td} text-left`}>Spouse Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Date of Birth</td>
              <td className={`${td} text-left`}>14-Apr-1995</td>
              <td className={`${td} text-left`}>14-Apr-1995</td>
              <td className={`${td} text-left`}>Phone Numbers</td>
              <td className={`${td} text-left`}>01845707266 - COMMPH1 - Y01845707266 - CELLPH - N</td>
              <td className={`${td} text-left`}>01845707266 - COMMPH1 - Y01845707266 - CELLPH - N</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID Issue Date</td>
              <td className={`${td} text-left`}>02-Oct-2018</td>
              <td className={`${td} text-left`}>02-Oct-2018</td>
              <td className={`${td} text-left`}>NID Place of Issuing Code</td>
              <td className={`${td} text-left`}>14</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID Place of Issuing</td>
              <td className={`${td} text-left`}>Coxsbazar</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>E-Mail Address</td>
              <td className={`${td} text-left`}>-- COMMPH1 - Y -- CELLPH - N</td>
              <td className={`${td} text-left`}>-- COMMPH1 - Y -- CELLPH - N</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN No.</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Present Address</td>
              <td className={`${td} text-left`}>
                HOUSE#3/5 ROAD#7 BLOCK B, SECTION 14, Sylhet City, Sylhet - 4357
              </td>
              <td className={`${td} text-left`}>
                HOUSE#3/5 ROAD#7 BLOCK B, SECTION 14, -, - - 4357
              </td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN Place of Issue</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>City, District</td>
              <td className={`${td} text-left`}>Sylhet City, Sylhet</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN Issue Date</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Post Code</td>
              <td className={`${td} text-left`}>4357</td>
              <td className={`${td} text-left`}>4357</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Tax Circle No.</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>State/ Division</td>
              <td className={`${td} text-left`}>SYLHET</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Tax Return Register No. (TRR)</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Permanent Address</td>
              <td className={`${td} text-left`}>
                MIRZANAGAR, TOMIZ UDDIN HAZI BARI, NATESHOR, KUMILLA, Sylhet Sadar, Sylhet - 3821
              </td>
              <td className={`${td} text-left`}>
                MIRZANAGAR, TOMIZ UDDIN HAZI BARI, NATESHOR, KUMILLA, -, - - 3821
              </td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport No</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>City, District</td>
              <td className={`${td} text-left`}>Sylhet Sadar, Sylhet</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Issue Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Post Code</td>
              <td className={`${td} text-left`}>3821</td>
              <td className={`${td} text-left`}>3821</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Expiry Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none" colSpan={6}>
                GUARANTOR 2
              </td>
            </tr>
            <tr>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
              <td className={th}>Particulars</td>
              <td className={th}>eLAP</td>
              <td className={th}>CBS</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>First Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Middle Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Last Name</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>Guarantor CIF</td>
              <td className={`${td} text-left`}>05270245</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Guarantor Name</td>
              <td className={`${td} text-left`}>MD SAHIDUL ISLAM</td>
              <td className={`${td} text-left`}>MD SAHIDUL ISLAM</td>
              <td className={`${td} text-left`}>Relationship</td>
              <td className={`${td} text-left`}>AUTHORISED SIGNATORY</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Employment Type</td>
              <td className={`${td} text-left`}>OTHER</td>
              <td className={`${td} bg-[#fff59d] text-left`}>Other</td>
              <td className={`${td} text-left`}>Gender</td>
              <td className={`${td} text-left`}>M</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID No.</td>
              <td className={`${td} text-left`}>19742693004024197</td>
              <td className={`${td} text-left`}>19742693004024197</td>
              <td className={`${td} text-left`}>Father&apos;s Name</td>
              <td className={`${td} text-left`}>A MANNAN GAZI</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Smart NID No.</td>
              <td className={`${td} text-left`}>5505442029</td>
              <td className={`${td} text-left`}>5505442029</td>
              <td className={`${td} text-left`}>Mother&apos;s Name</td>
              <td className={`${td} text-left`}>MST ALKUMA BEGUM</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Date of Birth</td>
              <td className={`${td} text-left`}>07-Apr-1988</td>
              <td className={`${td} text-left`}>07-Apr-1988</td>
              <td className={`${td} text-left`}>Marital Status</td>
              <td className={`${td} text-left`}>Married</td>
              <td className={`${td} text-left`}>Married</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID Issue Date</td>
              <td className={`${td} text-left`}>31-Jul-2022</td>
              <td className={`${td} text-left`}>31-Jul-2022</td>
              <td className={`${td} text-left`}>Spouse Name</td>
              <td className={`${td} text-left`}>MST RAHIMA BEGUM</td>
              <td className={`${td} text-left`}>MST RAHIMA BEGUM</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>NID Place of Issuing</td>
              <td className={`${td} text-left`}>Cumilla</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Phone Numbers</td>
              <td className={`${td} text-left`}>01673169123 - CELLPH - Y</td>
              <td className={`${td} bg-[#fff59d] text-left`}>01673169123 - CELLPH - Y</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN No.</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>NID Place of Issuing Code</td>
              <td className={`${td} text-left`}>13</td>
              <td className={td}></td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN Place of Issue</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>E-Mail Address</td>
              <td className={`${td} text-left`}>-- CELLPH - Y</td>
              <td className={`${td} bg-[#fff59d] text-left`}>-- CELLPH - Y</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>TIN Issue Date</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Present Address</td>
              <td className={`${td} text-left`}>
                H-2, LANE-6, TINSHADE, MIRPUR-14, Companiganj (Syl), Sylhet - 4574
              </td>
              <td className={`${td} text-left`}>H-2, LANE-6, TINSHADE, MIRPUR-14, -, -- 4574</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Tax Circle No.</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>City, District</td>
              <td className={`${td} text-left`}>Companiganj (Syl), Sylhet</td>
              <td className={`${td} text-left`}>-, -</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Tax Return Register No. (TRR)</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Post Code</td>
              <td className={`${td} text-left`}>4574</td>
              <td className={`${td} text-left`}>4574</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport No</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>State/ Division</td>
              <td className={`${td} text-left`}>SYLHET</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Issue Date</td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Permanent Address</td>
              <td className={`${td} text-left`}>
                NORTH ECLI, BAGA BAZAR, SADAR, Sylhet City, Sylhet - 5758
              </td>
              <td className={`${td} text-left`}>NORTH ECLI, BAGA BAZAR, SADAR, -, -- 5758</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Expiry Date</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>City, District</td>
              <td className={`${td} text-left`}>Sylhet City, Sylhet</td>
              <td className={`${td} text-left`}>-, -</td>
            </tr>
            <tr>
              <td className={`${td} text-left`}>Passport Place of Issue</td>
              <td className={`${td} text-left`}>-</td>
              <td className={td}></td>
              <td className={`${td} text-left`}>Post Code</td>
              <td className={`${td} text-left`}>5758</td>
              <td className={`${td} text-left`}>5758</td>
            </tr>
            <tr>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={`${td} text-left`}>State/ Division</td>
              <td className={`${td} text-left`}>SYLHET</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-2 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[11px] font-semibold leading-none">
                DEDUPE_ALL
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} w-[15%] text-left`}>Borrower Information</td>
              <td className={`${td} w-[85%] text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>Guarantor Information</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ElapCbsComparisonApplicationDetails
