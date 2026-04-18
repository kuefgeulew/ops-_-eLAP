export const DOCUMENT_FIELDS = {
  'trade-licence': [
    { key: 'registrarNo', label: 'রেজিস্টার নম্বর', type: 'text' },
    { key: 'issueSerialNo', label: 'ইস্যুর ক্রমিক নম্বর', type: 'text' },
    { key: 'issueDate', label: 'ইস্যুর তারিখ', type: 'date' },
    { key: 'licenceNo', label: 'ট্রেড লাইসেন্স নম্বর', type: 'text' },
    { key: 'validUntil', label: 'মেয়াদ', type: 'date' },
    { key: 'ownerName', label: 'ব্যবসা প্রতিষ্ঠানের মালিকের নাম', type: 'text' },
    { key: 'fatherSpouseName', label: 'পিতা/স্বামীর নাম', type: 'text' },
    { key: 'motherName', label: 'মাতার নাম', type: 'text' },
    { key: 'ownerAddress', label: 'মালিক/করদাতার ঠিকানা', type: 'text' },
    { key: 'presentVillage', label: 'বর্তমান গ্রাম/রোড', type: 'text' },
    { key: 'presentPost', label: 'বর্তমান পোস্ট', type: 'text' },
    { key: 'presentThana', label: 'বর্তমান থানা', type: 'text' },
    { key: 'presentDistrict', label: 'বর্তমান জেলা', type: 'text' },
    { key: 'permanentVillage', label: 'স্থায়ী গ্রাম/রোড', type: 'text' },
    { key: 'permanentPost', label: 'স্থায়ী পোস্ট', type: 'text' },
    { key: 'permanentThana', label: 'স্থায়ী থানা', type: 'text' },
    { key: 'permanentDistrict', label: 'স্থায়ী জেলা', type: 'text' },
    { key: 'businessName', label: 'ব্যবসা প্রতিষ্ঠানের নাম', type: 'text' },
    { key: 'businessCapital', label: 'পরিশোধিত মূলধন (টাকা)', type: 'text' },
    { key: 'businessAddress', label: 'ব্যবসা প্রতিষ্ঠানের ঠিকানা', type: 'text' },
    { key: 'businessNature', label: 'ব্যবসার ধরন', type: 'text' },
    { key: 'licenceFee', label: 'ট্রেড লাইসেন্স ফি (বার্ষিক)', type: 'text' },
    { key: 'receiptNo', label: 'ট্রেড লাইসেন্স ফি আদায়ের রশিদ নম্বর', type: 'text' },
    { key: 'receiptDate', label: 'রশিদের তারিখ', type: 'date' },
    { key: 'licenceFrom', label: 'ট্রেড লাইসেন্সের মেয়াদ থেকে', type: 'date' },
    { key: 'licenceTo', label: 'ট্রেড লাইসেন্সের মেয়াদ পর্যন্ত', type: 'date' },
  ],

  nid: [
    { key: 'nidNo', label: 'NID Number', type: 'text' },
    { key: 'fullName', label: 'Full Name', type: 'text' },
    { key: 'fatherName', label: "Father's Name", type: 'text' },
    { key: 'motherName', label: "Mother's Name", type: 'text' },
    { key: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
    { key: 'address', label: 'Permanent Address', type: 'text' },
    { key: 'issueDate', label: 'Issue Date', type: 'date' },
  ],

  passport: [
    { key: 'passportNo', label: 'Passport Number', type: 'text' },
    { key: 'fullName', label: 'Full Name', type: 'text' },
    { key: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
    { key: 'issueDate', label: 'Issue Date', type: 'date' },
    { key: 'expiryDate', label: 'Expiry Date', type: 'date' },
    { key: 'issuePlace', label: 'Place of Issue', type: 'text' },
    { key: 'nationality', label: 'Nationality', type: 'text' },
  ],

  tin: [
    { key: 'tinNo', label: 'TIN Number', type: 'text' },
    { key: 'taxpayerName', label: 'Taxpayer Name', type: 'text' },
    { key: 'circle', label: 'Circle', type: 'text' },
    { key: 'zone', label: 'Zone', type: 'text' },
    { key: 'issueDate', label: 'Issue Date', type: 'date' },
  ],

  'bank-statement': [
    { key: 'accountNo', label: 'Account Number', type: 'text' },
    { key: 'accountName', label: 'Account Name', type: 'text' },
    { key: 'bankName', label: 'Bank Name', type: 'text' },
    { key: 'branchName', label: 'Branch Name', type: 'text' },
    { key: 'statementFrom', label: 'Statement From', type: 'date' },
    { key: 'statementTo', label: 'Statement To', type: 'date' },
    { key: 'closingBalance', label: 'Closing Balance (৳)', type: 'text' },
  ],

  default: [
    { key: 'documentNo', label: 'Document Number', type: 'text' },
    { key: 'issueDate', label: 'Issue Date', type: 'date' },
    { key: 'issuedBy', label: 'Issued By', type: 'text' },
    { key: 'remarks', label: 'Remarks', type: 'text' },
  ],
}

export const DOCUMENT_FIELD_DEFAULTS = {
  'trade-licence': {
    registrarNo: '04',
    issueSerialNo: '২৫৭২',
    issueDate: '2022-03-14',
    licenceNo: '৬১/২০২১-২০২২',
    validUntil: '2022-06-30',
    ownerName: 'মাহিরুমার হাসান',
    fatherSpouseName: 'হাসান হামাম',
    motherName: 'কাল হামান',
    ownerAddress: '১১২/২, মনিপুরীপাড়া, তেজগাঁও, ঢাকা-১২১৫',
    presentVillage: '১১২/২, মনিপুরীপাড়া',
    presentPost: 'তেজগাঁও',
    presentThana: 'তেজগাঁও',
    presentDistrict: 'ঢাকা',
    permanentVillage: '-',
    permanentPost: '-',
    permanentThana: '-',
    permanentDistrict: 'নিলফামারী',
    businessName: 'নলপারাগঞ্জ আইচর নিমার্ণ',
    businessCapital: '৳ ২০০০০০',
    businessAddress: 'মাইজভান্ডার, ঢাকা-১২০১, ০১৭২৫-২৮২৭২৮',
    businessNature: 'আইচর তামানি গদাম এবক্রমণকেনা মার্কেট ই-রুমস ও স্মার্টস',
    licenceFee: '৳ ৫০,০০০',
    receiptNo: '২৮২৫/৩৬',
    receiptDate: '2022-04-18',
    licenceFrom: '2022-01-07',
    licenceTo: '2022-06-30',
  },

  nid: {
    nidNo: '1991234567890',
    fullName: 'Md. Rafiqul Islam',
    fatherName: 'Md. Abul Hossain',
    motherName: 'Fatema Begum',
    dateOfBirth: '1985-06-15',
    address: 'Village: Uttar Badda, Post: Badda, Thana: Badda, District: Dhaka',
    issueDate: '2015-03-20',
  },

  passport: {
    passportNo: 'BK0123456',
    fullName: 'Md. Rafiqul Islam',
    dateOfBirth: '1985-06-15',
    issueDate: '2020-01-10',
    expiryDate: '2030-01-09',
    issuePlace: 'Dhaka',
    nationality: 'Bangladeshi',
  },

  tin: {
    tinNo: '123456789012',
    taxpayerName: 'Jorina Poultry House',
    circle: 'Circle-7',
    zone: 'Zone-4, Dhaka',
    issueDate: '2018-07-01',
  },

  'bank-statement': {
    accountNo: '2001234567890',
    accountName: 'Jorina Poultry House',
    bankName: 'BRAC Bank Limited',
    branchName: 'Habiganj Branch',
    statementFrom: '2025-01-01',
    statementTo: '2025-12-31',
    closingBalance: '৳ 8,45,320',
  },

  default: {
    documentNo: 'DOC-2025-001',
    issueDate: '2025-01-01',
    issuedBy: 'Authorized Authority',
    remarks: '',
  },
}

export const DOCUMENT_CHECKLISTS = {
  'trade-licence': [
    { key: 'nameMatch', label: 'Business name matches application' },
    { key: 'dateValid', label: 'Licence is not expired' },
    { key: 'sealVisible', label: 'Official seal clearly visible' },
    { key: 'signaturePresent', label: 'Authorized signature present' },
    { key: 'licenceNoMatch', label: 'Licence number readable' },
    { key: 'photoAttached', label: 'Owner photo attached' },
    { key: 'addressMatch', label: 'Address matches CRM records' },
  ],
  nid: [
    { key: 'nameMatch', label: 'Name matches application' },
    { key: 'photoMatch', label: 'Photo matches applicant' },
    { key: 'nidNoReadable', label: 'NID number clearly readable' },
    { key: 'dobMatch', label: 'Date of birth consistent' },
    { key: 'notExpired', label: 'NID is valid (not expired)' },
    { key: 'bothSides', label: 'Both front and back uploaded' },
  ],
  passport: [
    { key: 'nameMatch', label: 'Name matches application' },
    { key: 'photoMatch', label: 'Photo matches applicant' },
    { key: 'notExpired', label: 'Passport not expired' },
    { key: 'mrZoneReadable', label: 'MRZ zone readable' },
    { key: 'visaPages', label: 'Relevant visa pages included' },
  ],
  tin: [
    { key: 'nameMatch', label: 'Taxpayer name matches' },
    { key: 'tinReadable', label: 'TIN number clearly readable' },
    { key: 'circleZone', label: 'Circle and zone noted' },
  ],
  'bank-statement': [
    { key: 'accountNoMatch', label: 'Account number matches' },
    { key: 'nameMatch', label: 'Account name matches' },
    { key: 'periodCovered', label: 'Required period fully covered' },
    { key: 'bankSeal', label: 'Bank seal/stamp present' },
    { key: 'certified', label: 'Certified/attested copy' },
    { key: 'noAlterations', label: 'No visible alterations' },
  ],
  default: [
    { key: 'documentReadable', label: 'Document clearly readable' },
    { key: 'signaturePresent', label: 'Signature present' },
    { key: 'dateValid', label: 'Date is valid' },
    { key: 'noAlterations', label: 'No alterations visible' },
  ],
}

export function getDocumentFields(docType) {
  const key = String(docType || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
  return DOCUMENT_FIELDS[key] || DOCUMENT_FIELDS.default
}

export function getDocumentDefaults(docType) {
  const key = String(docType || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
  return DOCUMENT_FIELD_DEFAULTS[key] || DOCUMENT_FIELD_DEFAULTS['default']
}

export function getDocumentChecklist(docType) {
  const key = String(docType || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
  return DOCUMENT_CHECKLISTS[key] || DOCUMENT_CHECKLISTS['default']
}
