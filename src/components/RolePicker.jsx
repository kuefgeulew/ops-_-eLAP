const ROLES = [
  {
    role: 'Operations',
    label: 'Operations',
    description: 'Reviews documents and raises queries',
    className:
      'border-[#0077c8] text-[#0077c8] hover:bg-[#e8f3fc]',
  },
  {
    role: 'RO/RE',
    label: 'RO/RE',
    description: 'Responds to queries and updates fields',
    className:
      'border-[#16a34a] text-[#16a34a] hover:bg-[#f0fdf4]',
  },
  {
    role: 'CRM',
    label: 'CRM',
    description: 'Credit manager review and approval',
    className:
      'border-[#7c3aed] text-[#7c3aed] hover:bg-[#f5f3ff]',
  },
]

export default function RolePicker({ onRoleSelected }) {
  const handleSelect = (role) => {
    sessionStorage.setItem('elap_current_role', role)
    onRoleSelected(role)
  }

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40">
      <div className="w-[420px] rounded-xl bg-white p-8">
        <h1 className="text-xl font-semibold text-gray-900">Select Your Role</h1>
        <p className="mt-2 text-sm text-gray-600">
          This identifies your replies in query threads.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {ROLES.map(({ role, label, description, className }) => (
            <button
              key={role}
              type="button"
              className={`w-full rounded-lg border-2 px-4 py-3 text-left transition-colors ${className}`}
              onClick={() => handleSelect(role)}
            >
              <span className="block font-semibold">{label}</span>
              <span className="mt-1 block text-sm opacity-90">{description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
