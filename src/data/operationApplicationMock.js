/** Static sample payload for Operation Application Details until a backend exists. */
export const operationApplicationMock = {
  trackingId: '26030058023',
  returnReason: 'CHECKKK',
  specialQuery: '',
  documentComplyNote: 'Ok',
  cifIds: {
    guarantors: '01137292, 01965772,',
    owners: '01118173,',
    borrower: '01055310',
  },
  borrowerCompare: [
    {
      left: { p: 'CRM Tracking No.', elap: '26030058023', cbs: '' },
      right: { p: 'Borrower CIF ID', elap: '01055310', cbs: '' },
    },
    {
      left: { p: 'Legal Entity', elap: 'Proprietorship', cbs: 'CUG02' },
      right: { p: 'BBL Operative A/C No.', elap: '1512201055310001', cbs: '' },
    },
    {
      left: { p: 'Business Name', elap: 'ABC Trading', cbs: 'NAHAR FASHION', cbsHighlight: true },
      right: { p: 'Previous Loan A/C No.', elap: '1512601055310005', cbs: '' },
    },
    {
      left: { p: 'Nature of Business', elap: 'Wholesale', cbs: '' },
      right: {
        p: 'Contact Number',
        elap:
          '01897777851 - COMMP IN009 - N\n01718019888 - COMMPHN007 - N\n01965772888 - COMMPHN008 - N',
        cbs:
          '01897777851 - COMMP IN009 - N\n01718019888 - COMMPHN007 - N\n01965772888 - COMMPHN008 - N',
      },
    },
    {
      left: { p: 'E-Mail Address', elap: '', cbs: '' },
      right: { p: 'BIN No.', elap: '2365427', cbs: '' },
    },
    {
      left: {
        p: 'Business Address (Trade License)',
        elap: '18/1, EAST RAMPURA M, Line2 I, line 3 I, Dhaka City (North), Dhaka - 1245',
        cbs: '18/1, EAST RAMPURA M, Line2 I, line 3 I, -, - - 1245',
      },
      right: {
        p: 'Business Address (Actual)',
        elap: '18/1, EAST RAMPURA M, Line2 I, line 3 I, Dhaka City (North), Dhaka - 1245',
        cbs: 'NAHAR FASHION, 17/2, EAST RAMPURA, ALI TOWER,, 4TH AND 5TH FLOOR M, line 3 I, -, - - 1245',
      },
    },
    {
      left: {
        p: 'Business Address (RJSC)',
        elap: 'scfdjhb, wfjgb, wjsfgb, Dhaka City (South), Dhaka - 6545',
        cbs: 'sefdjhb, wfjgb, wjsfgb, -, - - 6545',
      },
      right: {
        p: 'Business Address (Factory / Others)',
        elap: 'wsefjdhb, wfhvbj, wfjcb, -, Khulna - 0',
        cbs: 'wsefjdhb, wfhvbj, wfjcb, -, - - 7645',
      },
    },
  ],
  owner1Compare: [
    { left: { p: 'First Name', elap: 'NAZMUL', cbs: 'NAZMUL' }, right: { p: 'Owner CIF', elap: '01118173', cbs: '' } },
    { left: { p: 'Middle Name', elap: 'M', cbs: 'M' }, right: { p: 'Last Name', elap: 'HASAN', cbs: 'HASAN' } },
    { left: { p: 'Owner Name', elap: 'NAZMUL M M HASAN M', cbs: 'NAZMUL M M HASAN M' }, right: { p: 'Gender', elap: 'M', cbs: '-' } },
    { left: { p: 'Employment Type', elap: 'OTHER', cbs: '' }, right: { p: "Father's Name", elap: 'LATE X', cbs: 'LATE X' } },
    { left: { p: 'NID No.', elap: '1979269322435345', cbs: '1979269322435345' }, right: { p: "Mother's Name", elap: 'LATE Y', cbs: 'LATE Y' } },
    { left: { p: 'Smart NID No.', elap: '4545454545', cbs: '4545454545' }, right: { p: 'Marital Status', elap: 'Married', cbs: 'Married', cbsHighlight: true } },
    { left: { p: 'Date of Birth', elap: '02-Sep-1979', cbs: '02-Sep-1979' }, right: { p: 'Spouse Name', elap: 'NAZMUL SPOUSE', cbs: 'NAZMUL SPOUSE' } },
    { left: { p: 'NID Issue Date', elap: '02-Feb-2008', cbs: '02-Feb-2008' }, right: { p: 'Phone Numbers', elap: '01718019888 - COMMPHN007 - N', cbs: '01718019888 - COMMPHN007 - N' } },
  ],
  guarantor1Compare: [
    { left: { p: 'First Name', elap: 'SHAMIMA M', cbs: 'SHAMIMA M' }, right: { p: 'Guarantor CIF: 01137292', elap: 'Relationship: GUARANTOR', cbs: '' } },
    { left: { p: 'Last Name', elap: 'HASAN M', cbs: 'HASAN M' }, right: { p: 'Middle Name', elap: 'I', cbs: 'I' } },
    { left: { p: 'Guarantor Name', elap: 'SHAMIMA M I HASAN M', cbs: 'SHAMIMA M I HASAN M' }, right: { p: 'Gender', elap: 'F', cbs: '-' } },
    { left: { p: 'Employment Type', elap: 'OTHER', cbs: '⚠' }, right: { p: "Father's Name", elap: 'LATE ZIAUL HAQUE M', cbs: 'LATE ZIAUL HAQUE M' } },
    { left: { p: 'NID No.', elap: '1979269322435345', cbs: '1979269322435345' }, right: { p: "Mother's Name", elap: 'LATE RAZIYA KHATUN M', cbs: 'LATE RAZIYA KHATUN M' } },
    { left: { p: 'Smart NID No.', elap: '4545454545', cbs: '4545454545' }, right: { p: 'Marital Status', elap: 'Married', cbs: 'Married', cbsHighlight: true } },
    { left: { p: 'Date of Birth', elap: '02-Sep-1979', cbs: '02-Sep-1979' }, right: { p: 'Spouse Name', elap: 'NAZMUL HASAN M', cbs: 'NAZMUL HASAN M' } },
    { left: { p: 'NID Issue Date', elap: '02-Feb-2008', cbs: '02-Feb-2008' }, right: { p: '', elap: '', cbs: '' } },
  ],
  loanDetails: {
    branchSol: '1501',
    facility: {
      facilityType: 'Term Loan',
      tenor: '36',
      interestRate: '15.5',
      facilityLimit: '৳ 5,500,000',
      mode: 'Repeat',
      purpose: 'RETAIL TRADING',
      formalTakeover: '-',
      specialFile: 'Anonno - up to 10 Lac - Scorecard Loan...',
      cbsInstallment: '-',
      elapInstallment: '৳ 192,009',
    },
    fdr: {
      fdrType: 'New',
      fdrAmount: '-',
      fdrAccountNo: '-',
      fdrLien: '-',
      fdrAvailable: '-',
      securityDeposit: '৳ 110,000',
    },
    summary: {
      proposed: '৳ 5,500,000',
      approved: '1. Term Loan Limit ৳ 5,500,000',
      inWords: 'Taka Fifty Five Lakh only',
    },
    approvalInfo: [
      ['Tracking ID', '26030058023', 'Loan Product', 'Anonno (-)'],
      ['Proposal Type (captured by business)', 'New', 'Relationship with BBL', 'Repeat Customer'],
    ],
  },
  disbursement: {
    approvalRows: [
      ['Tracking ID', '26030058023', 'Loan Product', 'Anonno (-)'],
      ['Proposal Type (captured by business)', 'New', 'Relationship with BBL', 'Repeat Customer'],
      ['Nature of Advance', 'Wholesale', 'Cost Center Code', 'Elephant Road (99029209)'],
      ['Sector Code', '00903050', 'Cluster Financing Information & Code', '- , -'],
      ['Security Code', '76,', 'Credit Approval Date', '01-Apr-2026'],
      ['Economic Purpose Code', '00008001,', 'Credit Analyst PIN', '13424, -'],
    ],
    ownersBlock: {
      owners: 'Owners:\nNAZMUL M M HASAN M\n---\nGuarantors:\nSHAMIMA M I HASAN M, MD M M SALAUDDIN M',
      loanAppDate: 'Loan Application Date: 25-Mar-2026',
      creditApprovalPin: 'Credit Approval PIN\nHussain Md. Yasin - 29818 (Regional Credit Head (RCH))',
    },
    psoRow: ['PSO PIN (RO PIN)', 'Shishir Das 26886', 'Interest Compounding Frequency', 'Monthly'],
    specialCovenantsCode: '',
    covenantsInLetter:
      'Security deposit for Facility 1 BDT 110,000, in the form of Fixed Deposit (Prachurjo, for 60 days tenor from the date of opening which will be auto renewed with Interest & Principal at the prevailing interest rate) will be kept under lien as \'Cash Collateral\' against the loan until full settlement which will be duly deposited by the customer before disbursement.',
    covenantsNotInLetter: '-',
    fees: [
      ['Document Handling Fee', '৳ 700'],
      ['Stamp Charge', '৳ 1,900'],
      ['CIB Charge', '৳ 0'],
      ['Processing Fee', '৳ 8,000'],
      ['VAT', '-'],
      ['Fire Insurance Amount 1st Year', '৳ 7,029'],
      ['Fire Insurance Amount 2nd Year', '-'],
      ['Life Insurance Amount', '৳ 0'],
      ['Livestock Insurance Amount', '৳ 0'],
    ],
  },
  additional: {
    otherInfo: [
      ['Proposal Name', 'ABC Trading', 'Majority Ownership Status', 'Male', 'PSO', 'Shishir Das 26666'],
      ['Key Person', 'NAZMUL M M HASAN M', 'Business Type', 'Trading', 'Credit Analyst', '13424 Md. Tauhidul Islam'],
      ['Legal Status', 'Proprietorship', 'Business Product', 'GARMENTS ACCESSORIES SUPPLIER BUSINESS', 'Credit Approval', 'Hussain Md. Yasin - 29818 (Regional Credit Head (RCH))'],
      ['Proposal Type', 'Repeat Customer', 'Business Contact No.', '-', 'Loan Application Date', '25-Mar-2026'],
      ['Total Requested Loan Amount', '৳ 1,850,000', 'Owner Contact No.', '01718019888', 'Approval Date', '01-Apr-2026'],
      ['Total Proposed Limit', '৳ 5,500,000', 'Segmentation Code', '91822939', 'Fire Insurance Class', '-', true],
      ['Total Approved Limit/s', '1. Term Loan Limit ৳ 5,500,000', 'Sub-segment Details', 'Garments Accessories (garments machinery, accessories, packaging, zipper, button)', 'Fire Insurance Company', 'BGIC - BD Gen. Ins.', true],
    ],
    roles: [
      ['Operation Manager', 'Sharmin Ferdous', '3169', '01713375809'],
      ['Risk Manager', 'Md. Tauhidul Islam', '13424', '01713481610'],
      ['Credit MIS', 'Md Sumsuddin', '27053', '01711296185'],
      ['BDM', 'Md. Faisal Kabir', '29543', '01847431761'],
      ['MC', 'Md. Shirajul Islam', '10339', '01714084640'],
      ['Relationship Officer (RO)', 'Shishir Das', '26666', '01709819634'],
    ],
    digitalRemarks: [
      ['Shishir Das [ 26666 ]', 'Relationship Officer (RO)', '25-Mar-2026', 'ok', ''],
      ['Md. Faisal Kabir [ 29543 ]', 'BDM', '25-Mar-2026', 'ok', 'Recommend'],
      ['Md. Tauhidul Islam [ 13424 ]', 'Risk Manager', '25-Mar-2026', 'ok', 'Received'],
      ['Md. Tauhidul Islam [ 13424 ]', 'Risk Manager', '01-Apr-2026', 'OKAY', 'Recommend'],
      ['Md. Faisal Kabir [ 29543 ]', 'BDM', '01-Apr-2026', 'OKAY', 'Loan Amount Confirmed'],
    ],
  },
  sbsCompare: [
    {
      left: { p: 'SME Code', elap: '32', cbs: '22' },
      right: { p: 'Security Code', elap: '76,', cbs: '-' },
    },
    {
      left: { p: 'BB Sector Code', elap: '00903050', cbs: '903050' },
      right: { p: 'BBL Customer Segmentation Code', elap: '91822939', cbs: '91824952' },
    },
    {
      left: { p: 'No. of Employee', elap: '6', cbs: '65', cbsHighlight: true },
      right: { p: 'Sales Turnover', elap: '৳ 2,000,000', cbs: '-' },
    },
    {
      left: { p: 'Fixed Asset Exc. Land Building', elap: '৳ 200,000', cbs: '৳ 3,000,000', cbsHighlight: true },
      right: { p: '', elap: '', cbs: '' },
    },
  ],
  generalDetails: [
    ['Cluster Financing Information', '-', 'Code', '-', 'Business Location: Street Address', '18/1, EAST RAMPURA M.Line 2, line 3 I, Dhaka City (North), DHAKA, 1245, 149, 1'],
  ],
  cibReport: {
    row: ['Borrower', '0', '24 Mar 2028', 'NIL', '', '', '', '', '', '0'],
    note: 'ok',
    totalSearches: '0',
  },
  insuranceTop: {
    life: '৳ 0',
    livestock: '৳ 0',
    company: 'BGIC - BD Gen. Ins.',
    classVal: '-',
    fire1: '৳ 7,029',
    fire2: '-',
  },
}
