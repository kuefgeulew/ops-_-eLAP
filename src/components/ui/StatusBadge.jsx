/**
 * Small label whose color depends on application status string.
 */
const statusStyles = {
  'Query Submitted': 'text-[#222222]',
  'Disbursement Verification Required':
    'bg-[#f5f7fa] border border-[#edf0f4] rounded-md px-2 py-[3px] text-[#212121]',
  'Inactive Application':
    'bg-[#f5f7fa] border border-[#edf0f4] rounded-md px-2 py-[3px] text-[#212121]',
  'Approval Requested':
    'bg-[#f5f7fa] border border-[#edf0f4] rounded-md px-2 py-[3px] text-[#212121]',
  'Application In Progress':
    'bg-[#f5f7fa] border border-[#edf0f4] rounded-md px-2 py-[3px] text-[#212121]',
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center justify-center text-[12px] leading-[14px] font-semibold ${statusStyles[status] ?? ''}`}
    >
      {status}
    </span>
  )
}

export default StatusBadge

