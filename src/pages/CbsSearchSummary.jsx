/**
 * CBS search summary — printable layout.
 */
function CbsSearchSummary() {
  const th = 'border border-black px-2 py-[4px] text-center text-[11px] font-semibold leading-none'
  const td = 'border border-black px-2 py-[5px] text-center text-[11px] leading-none'

  const rows = [
    ['1507203425932001', 'RAFI COSMETICS', '878754.28 Credit', 'CAA', 'CABIZ', 'A', 'M', 'N'],
    ['1507603425932001', 'RAFI COSMETICS', '0 Debit', 'LAA', 'TSANE', 'A', 'M', 'Y'],
    ['1556803425932001', 'RAFI COSMETICS', '0 Debit', 'LAA', 'TSANO', 'A', 'M', 'Y'],
    ['1507603425932001', 'RAFI COSMETICS', '0 Debit', 'LAA', 'TSANO', 'A', 'M', 'Y'],
    ['1507603425932002', 'RAFI COSMETICS', '0 Debit', 'LAA', 'TSANO', 'A', 'M', 'Y'],
    ['6034259320005', 'RAFI COSMETICS', '0 Debit', 'LAA', 'TSANO', 'A', 'M', 'Y'],
    ['6034259320006', 'RAFI COSMETICS', '0 Debit', 'LAA', 'TSTRE', 'A', 'M', 'N'],
    ['6034259320007', 'RAFI COSMETICS', '100000 Debit', 'LAA', 'TSTRE', 'A', 'M', 'N'],
    ['1507303425932001', 'RAFI COSMETICS', '0 Debit', 'TDA', 'FFRLX', 'A', 'M', 'Y'],
    ['1507303425932002', 'RAFI COSMETICS', '0 Debit', 'TDA', 'FSSNC', 'A', 'M', 'Y'],
    ['1507303425932003', 'RAFI COSMETICS', '0 Debit', 'TDA', 'FSSNC', 'A', 'M', 'Y'],
    ['303425930004', 'RAFI COSMETICS', '18000 Credit', 'TDA', 'FSPRA', 'A', 'M', 'N'],
    ['303425930005', 'RAFI COSMETICS', '20000 Credit', 'TDA', 'FSPRA', 'A', 'M', 'N'],
  ]

  return (
    <div className="min-h-screen bg-white px-2 py-2 text-black">
      <div className="mx-auto w-full max-w-[2048px] font-['Arial']">
        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#0b4f8a] px-2 py-[4px] text-center text-[22px] font-bold leading-none text-white">
                CBS SEARCH SUMMARY
              </td>
            </tr>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                26010002662: BUSINESS DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border-x border-black">
          <tbody>
            <tr>
              <td className={`${th} w-[18%] text-left`}>CBS Name:</td>
              <td className={`${td} w-[32%] text-left`}>RAFI COSMETICS</td>
              <td className={`${th} w-[18%] text-left`}>eLAP Name:</td>
              <td className={`${td} w-[32%] text-left`}>RAFI COSMETICS</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>CIF NUMBER:</td>
              <td className={`${td} text-left`}>03425932</td>
              <td className={`${th} text-left`}>CASA NUMBER:</td>
              <td className={`${td} text-left`}>1507203425932001</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                CORPORATE CIF INQUIRY
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Account No.</th>
              <th className={th}>Account Name</th>
              <th className={th}>Account Balance</th>
              <th className={th}>Scheme Type</th>
              <th className={th}>Scheme Code</th>
              <th className={th}>Status</th>
              <th className={th}>Relationship</th>
              <th className={th}>CLOSURE INDICATOR</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row[0]}-${index}`}>
                {row.map((value) => (
                  <td key={`${row[0]}-${value}-${index}`} className={td}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                RELATED PARTIES
              </td>
            </tr>
            <tr>
              <td className="border border-black bg-[#f9f9f9] px-2 py-[3px] text-center text-[11px] font-semibold leading-none">
                BORROWER CIF LEVEL
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>CIF ID</th>
              <th className={th}>CIF Name</th>
              <th className={th}>Owner CIF</th>
              <th className={th}>Owner CIF Name</th>
              <th className={th}>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>03425932</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>03425937</td>
              <td className={td}>FAYSAL AHMAD</td>
              <td className={td}>PROP</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                CASA INQUIRY
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>A/C Name</th>
              <th className={th}>Scheme Type</th>
              <th className={th}>Scheme Code</th>
              <th className={th}>SOL ID</th>
              <th className={th}>A/C Status</th>
              <th className={th}>A/C OPEN DATE</th>
              <th className={th}>A/C CLOSE DATE</th>
              <th className={th}>A/C Balance</th>
              <th className={th}>Effective Available Balance</th>
              <th className={th}>Closure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>CAA</td>
              <td className={td}>CABIZ</td>
              <td className={td}>1507</td>
              <td className={td}>Active</td>
              <td className={td}>2016-01-20</td>
              <td className={td}>-</td>
              <td className={td}>878754.28</td>
              <td className={td}>878754.28</td>
              <td className={td}>N</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                LIEN DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Lien Type</th>
              <th className={th}>Lien Amount</th>
              <th className={th}>Lien Effective Date</th>
              <th className={th}>Lien Expiry Date</th>
              <th className={th}>Lien Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                CASA RELATED PARTIES
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Name</th>
              <th className={th}>CIF</th>
              <th className={th}>Relationship</th>
              <th className={th}>Designation</th>
              <th className={th}>CIF Status</th>
              <th className={th}>CIF Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>03425932</td>
              <td className={td}>M</td>
              <td className={td}>-</td>
              <td className={td}>Active</td>
              <td className={td}>R-Retail</td>
            </tr>
            <tr>
              <td className={td}>FAYSAL AHMMAD</td>
              <td className={td}>03425937</td>
              <td className={td}>A</td>
              <td className={td}>PROP</td>
              <td className={td}>Active</td>
              <td className={td}>R-Retail</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                OWNER 1 DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border-x border-black border-b">
          <tbody>
            <tr>
              <td className={`${th} w-[18%] text-left`}>CBS NAME:</td>
              <td className={`${td} w-[32%] text-left`}>FAYSAL AHMMAD</td>
              <td className={`${th} w-[18%] text-left`}>ELAP NAME:</td>
              <td className={`${td} w-[32%] text-left`}>FAYSAL AHMMAD</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>CIF NUMBER:</td>
              <td className={`${td} text-left`}>03425937</td>
              <td className={`${th} text-left`}>CASA NUMBER:</td>
              <td className={`${td} text-left`}>1507203425932001</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                RETAIL CIF INQUIRY
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Account No.</th>
              <th className={th}>Account Name</th>
              <th className={th}>Account Balance</th>
              <th className={th}>Scheme Type</th>
              <th className={th}>Scheme Code</th>
              <th className={th}>Status</th>
              <th className={th}>Relationship</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>1507203425932001</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>878754.28 Credit</td>
              <td className={td}>CAA</td>
              <td className={td}>CABIZ</td>
              <td className={td}>A</td>
              <td className={td}>A</td>
            </tr>
            <tr>
              <td className={td}>6505711800001</td>
              <td className={td}>CITY PHARMACY</td>
              <td className={td}>1098226.03 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSANO</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                NID CIF VERIFICATION
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>CIF ID</th>
              <th className={th}>Name</th>
              <th className={th}>NID Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>03425937</td>
              <td className={td}>FAYSAL AHMMAD</td>
              <td className={td}>7518377532733</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                LOAN ACCOUNT DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT NUMBER:</td>
              <td className={`${td} text-left`}>6034259320006</td>
              <td className={`${th} text-left`}>ACCOUNT NAME:</td>
              <td className={`${td} text-left`}>RAFI COSMETICS</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>SCHEME TYPE:</td>
              <td className={`${td} text-left`}>LAA</td>
              <td className={`${th} text-left`}>SCHEME CODE:</td>
              <td className={`${td} text-left`}>TSTRE</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT STATUS:</td>
              <td className={`${td} text-left`}>N</td>
              <td className={`${th} text-left`}>CLOSURE INDICATOR:</td>
              <td className={`${td} text-left`}>N</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>LOAN AMOUNT:</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${th} text-left`}>INT. RATE:</td>
              <td className={`${td} text-left`}>13.75</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>LOAN TENURE:</td>
              <td className={`${td} text-left`}>28</td>
              <td className={`${th} text-left`}>REMAINING TENURE:</td>
              <td className={`${td} text-left`}>28</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>REPAYMENT A/C:</td>
              <td className={`${td} text-left`}>1507203425932001</td>
              <td className={`${th} text-left`}>DISBURSEMENT DATE:</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>NEXT DEMAND DATE:</td>
              <td className={`${td} text-left`}>2026-02-02T00:00:00</td>
              <td className={`${th} text-left`}>INSTALMENT AMOUNT:</td>
              <td className={`${td} text-left`}>97757</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>INSTALMENT FREQUENCY:</td>
              <td className={`${td} text-left`}>M</td>
              <td className={`${th} text-left`}>CLASSIFICATION STATUS:</td>
              <td className={`${td} text-left`}>001-001</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>LOAN OUTSTANDING:</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${th} text-left`}>LOAN FILE REF:</td>
              <td className={`${td} text-left`}>26010002646</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>CREDIT FILE NO.:</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${th} text-left`}>NO. OF DEMAND RAISED:</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>DPD (DAYS):</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${th} text-left`}>EXPIRY DATE:</td>
              <td className={`${td} text-left`}>2028-05-02T00:00:00</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>MAX DPD:</td>
              <td className={`${td} text-left`}>0</td>
              <td className={th}></td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                COLLATERAL LOOK UP
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>SOL</th>
              <th className={th}>Collateral Code</th>
              <th className={th}>Del. Flag</th>
              <th className={th}>Apportioned Value</th>
              <th className={th}>Collateral Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>1304</td>
              <td className={td}>C060</td>
              <td className={td}>N</td>
              <td className={td}>18000</td>
              <td className={td}>18000</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                RELATED PARTIES
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Entity Name</th>
              <th className={th}>CIF</th>
              <th className={th}>Relationship</th>
              <th className={th}>Designation</th>
              <th className={th}>CIF Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>03425932</td>
              <td className={td}>M</td>
              <td className={td}>-</td>
              <td className={td}>S-SME</td>
            </tr>
            <tr>
              <td className={td}>FORHAD HOSSAIN</td>
              <td className={td}>03954951</td>
              <td className={td}>G</td>
              <td className={td}>GURNT</td>
              <td className={td}>S-SME</td>
            </tr>
            <tr>
              <td className={td}>MD SAHIDUL ISLAM</td>
              <td className={td}>05270245</td>
              <td className={td}>G</td>
              <td className={td}>GURNT</td>
              <td className={td}>S-SME</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                LOAN ACCOUNT DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT NUMBER:</td>
              <td className={`${td} text-left`}>6034259320007</td>
              <td className={`${th} text-left`}>ACCOUNT NAME:</td>
              <td className={`${td} text-left`}>RAFI COSMETICS</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>SCHEME TYPE:</td>
              <td className={`${td} text-left`}>LAA</td>
              <td className={`${th} text-left`}>SCHEME CODE:</td>
              <td className={`${td} text-left`}>TSTRE</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT STATUS:</td>
              <td className={`${td} text-left`}>N</td>
              <td className={`${th} text-left`}>CLOSURE INDICATOR:</td>
              <td className={`${td} text-left`}>N</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>LOAN AMOUNT:</td>
              <td className={`${td} text-left`}>100000</td>
              <td className={`${th} text-left`}>INT. RATE:</td>
              <td className={`${td} text-left`}>13.75</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>LOAN TENURE:</td>
              <td className={`${td} text-left`}>18</td>
              <td className={`${th} text-left`}>REMAINING TENURE:</td>
              <td className={`${td} text-left`}>18</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>REPAYMENT A/C:</td>
              <td className={`${td} text-left`}>1507203425932001</td>
              <td className={`${th} text-left`}>DISBURSEMENT DATE:</td>
              <td className={`${td} text-left`}>2026-01-20T00:00:00</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>NEXT DEMAND DATE:</td>
              <td className={`${td} text-left`}>2026-02-09T00:00:00</td>
              <td className={`${th} text-left`}>INSTALMENT AMOUNT:</td>
              <td className={`${td} text-left`}>6799</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>INSTALMENT FREQUENCY:</td>
              <td className={`${td} text-left`}>M</td>
              <td className={`${th} text-left`}>CLASSIFICATION STATUS:</td>
              <td className={`${td} text-left`}>001-001</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>LOAN OUTSTANDING:</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${th} text-left`}>LOAN FILE REF:</td>
              <td className={`${td} text-left`}>26010002647</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>CREDIT FILE NO.:</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${th} text-left`}>NO. OF DEMAND RAISED:</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>DPD (DAYS):</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${th} text-left`}>EXPIRY DATE:</td>
              <td className={`${td} text-left`}>2027-07-07T00:00:00</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>MAX DPD:</td>
              <td className={`${td} text-left`}>0</td>
              <td className={th}></td>
              <td className={td}></td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                COLLATERAL LOOK UP
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>SOL</th>
              <th className={th}>Collateral Code</th>
              <th className={th}>Del. Flag</th>
              <th className={th}>Apportioned Value</th>
              <th className={th}>Collateral Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>1507</td>
              <td className={td}>0060</td>
              <td className={td}>N</td>
              <td className={td}>20000</td>
              <td className={td}>20000</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                RELATED PARTIES
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Entity Name</th>
              <th className={th}>CIF</th>
              <th className={th}>Relationship</th>
              <th className={th}>Designation</th>
              <th className={th}>CIF Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>03425932</td>
              <td className={td}>M</td>
              <td className={td}>-</td>
              <td className={td}>S-SME</td>
            </tr>
            <tr>
              <td className={td}>FORHAD HOSSAIN</td>
              <td className={td}>03954951</td>
              <td className={td}>G</td>
              <td className={td}>GURNT</td>
              <td className={td}>S-SME</td>
            </tr>
            <tr>
              <td className={td}>MD SAHIDUL ISLAM</td>
              <td className={td}>05270245</td>
              <td className={td}>G</td>
              <td className={td}>GURNT</td>
              <td className={td}>S-SME</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                TD ACCOUNT DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT NUMBER:</td>
              <td className={`${td} text-left`}>3034259320004</td>
              <td className={`${th} text-left`}>ACCOUNT NAME:</td>
              <td className={`${td} text-left`}>RAFI COSMETICS</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>SCHEME TYPE:</td>
              <td className={`${td} text-left`}>TDA</td>
              <td className={`${th} text-left`}>SCHEME CODE:</td>
              <td className={`${td} text-left`}>FSPRA</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT STATUS:</td>
              <td className={`${td} text-left`}>LIVE</td>
              <td className={`${th} text-left`}>CLOSURE INDICATOR:</td>
              <td className={`${td} text-left`}>N</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>AUTO RENEWAL:</td>
              <td className={`${td} text-left`}>-</td>
              <td className={`${th} text-left`}>RENEWAL OPTION:</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT OPEN DATE:</td>
              <td className={`${td} text-left`}>2026-01-19T00:00:00</td>
              <td className={`${th} text-left`}>MATURITY DATE:</td>
              <td className={`${td} text-left`}>2026-03-20T00:00:00</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>COLLATERAL ID</th>
              <th className={th}>ACCOUNT BALANCE</th>
              <th className={th}>INT. RATE</th>
              <th className={th}>TENURE</th>
              <th className={th}>LIEN AMOUNT</th>
              <th className={th}>EFFECTIVE AVAILABLE BALANCE</th>
              <th className={th}>MATURITY VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>18000</td>
              <td className={`${td} text-left`}>2</td>
              <td className={`${td} text-left`}>2</td>
              <td className={`${td} text-left`}>18000</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${td} text-left`}>18060</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                TD ACCOUNT DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT NUMBER:</td>
              <td className={`${td} text-left`}>3034259320005</td>
              <td className={`${th} text-left`}>ACCOUNT NAME:</td>
              <td className={`${td} text-left`}>RAFI COSMETICS</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>SCHEME TYPE:</td>
              <td className={`${td} text-left`}>TDA</td>
              <td className={`${th} text-left`}>SCHEME CODE:</td>
              <td className={`${td} text-left`}>FSPRA</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT STATUS:</td>
              <td className={`${td} text-left`}>LIVE</td>
              <td className={`${th} text-left`}>CLOSURE INDICATOR:</td>
              <td className={`${td} text-left`}>N</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>AUTO RENEWAL:</td>
              <td className={`${td} text-left`}>U</td>
              <td className={`${th} text-left`}>RENEWAL OPTION:</td>
              <td className={`${td} text-left`}>-</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>ACCOUNT OPEN DATE:</td>
              <td className={`${td} text-left`}>2026-01-20T00:00:00</td>
              <td className={`${th} text-left`}>MATURITY DATE:</td>
              <td className={`${td} text-left`}>2026-03-21T00:00:00</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>COLLATERAL ID</th>
              <th className={th}>ACCOUNT BALANCE</th>
              <th className={th}>INT. RATE</th>
              <th className={th}>TENURE</th>
              <th className={th}>LIEN AMOUNT</th>
              <th className={th}>EFFECTIVE AVAILABLE BALANCE</th>
              <th className={th}>MATURITY VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${td} text-left`}>-</td>
              <td className={`${td} text-left`}>20000</td>
              <td className={`${td} text-left`}>2</td>
              <td className={`${td} text-left`}>2</td>
              <td className={`${td} text-left`}>20000</td>
              <td className={`${td} text-left`}>0</td>
              <td className={`${td} text-left`}>20066.67</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                GUARANTOR 1 DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border-x border-black border-b">
          <tbody>
            <tr>
              <td className={`${th} w-[18%] text-left`}>CBS NAME:</td>
              <td className={`${td} w-[32%] text-left`}>FORHAD HOSSAIN</td>
              <td className={`${th} w-[18%] text-left`}>ELAP NAME:</td>
              <td className={`${td} w-[32%] text-left`}>FORHAD HOSSAIN</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>CIF NUMBER:</td>
              <td className={`${td} text-left`}>03954951</td>
              <td className={`${th} text-left`}>CASA NUMBER:</td>
              <td className={`${td} text-left`}>1507203425932001</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                RETAIL CIF INQUIRY
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Account No.</th>
              <th className={th}>Account Name</th>
              <th className={th}>Account Balance</th>
              <th className={th}>Scheme Type</th>
              <th className={th}>Scheme Code</th>
              <th className={th}>Status</th>
              <th className={th}>Relationship</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>8888205057118001</td>
              <td className={td}>CITY PHARMACY</td>
              <td className={td}>165218 Credit</td>
              <td className={td}>CAA</td>
              <td className={td}>ABSDN</td>
              <td className={td}>A</td>
              <td className={td}>A</td>
            </tr>
            <tr>
              <td className={td}>1507603425932001</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>0 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSANO</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
            <tr>
              <td className={td}>1507603425932002</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>0 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSANO</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
            <tr>
              <td className={td}>6034259320005</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>0 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSANO</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
            <tr>
              <td className={td}>6034259320006</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>0 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSTRE</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
            <tr>
              <td className={td}>6034259320007</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>100000 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSTRE</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                NID CIF VERIFICATION
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>CIF ID</th>
              <th className={th}>Name</th>
              <th className={th}>NID Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>03954951</td>
              <td className={td}>FORHAD HOSSAIN</td>
              <td className={td}>19957518377000527</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-3 w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#ececec] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                GUARANTOR 2 DETAILS
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border-x border-black border-b">
          <tbody>
            <tr>
              <td className={`${th} w-[18%] text-left`}>CBS NAME:</td>
              <td className={`${td} w-[32%] text-left`}>MD SAHIDUL ISLAM</td>
              <td className={`${th} w-[18%] text-left`}>ELAP NAME:</td>
              <td className={`${td} w-[32%] text-left`}>MD SAHIDUL ISLAM</td>
            </tr>
            <tr>
              <td className={`${th} text-left`}>CIF NUMBER:</td>
              <td className={`${td} text-left`}>05270245</td>
              <td className={`${th} text-left`}>CASA NUMBER:</td>
              <td className={`${td} text-left`}>1507203425932001</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                RETAIL CIF INQUIRY
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>Account No.</th>
              <th className={th}>Account Name</th>
              <th className={th}>Account Balance</th>
              <th className={th}>Scheme Type</th>
              <th className={th}>Scheme Code</th>
              <th className={th}>Status</th>
              <th className={th}>Relationship</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>6034259320005</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>0 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSANO</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
            <tr>
              <td className={td}>6034259320006</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>0 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSTRE</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
            <tr>
              <td className={td}>6034259320007</td>
              <td className={td}>RAFI COSMETICS</td>
              <td className={td}>100000 Debit</td>
              <td className={td}>LAA</td>
              <td className={td}>TSTRE</td>
              <td className={td}>A</td>
              <td className={td}>G</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-black">
          <tbody>
            <tr>
              <td className="border border-black bg-[#f4e0d4] px-2 py-[3px] text-center text-[12px] font-semibold leading-none">
                NID CIF VERIFICATION
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mb-4 w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className={th}>CIF ID</th>
              <th className={th}>Name</th>
              <th className={th}>NID Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>05270245</td>
              <td className={td}>MD SAHIDUL ISLAM</td>
              <td className={td}>19742693004024197</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CbsSearchSummary
