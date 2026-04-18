/**
 * Top bar: logo, title, notifications, and user menu slot.
 */
function IconBell() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#313131]">
      <path
        d="M12 3a5 5 0 0 0-5 5v2.82c0 .6-.2 1.18-.57 1.64L5 14.4h14l-1.43-1.94a2.8 2.8 0 0 1-.57-1.64V8a5 5 0 0 0-5-5Zm0 18a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 21Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#313131]">
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.6-.1L12 11.7l7.4-5.3H4.6Zm15 10.9v-9l-7.16 5.14a.75.75 0 0 1-.88 0L4.4 8.3v9h15.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#313131]">
      <path
        d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm7.8 9h-3.02a15.4 15.4 0 0 0-1.45-5.2A8.04 8.04 0 0 1 19.8 11ZM12 4.2c.95 1.02 2.16 3.47 2.72 6.8H9.28C9.84 7.67 11.05 5.22 12 4.2ZM8.67 5.8A15.4 15.4 0 0 0 7.22 11H4.2a8.04 8.04 0 0 1 4.47-5.2ZM4.2 13h3.02c.21 1.87.73 3.65 1.45 5.2A8.04 8.04 0 0 1 4.2 13Zm7.8 6.8c-.95-1.02-2.16-3.47-2.72-6.8h5.44c-.56 3.33-1.77 5.78-2.72 6.8Zm3.33-1.6c.72-1.55 1.24-3.33 1.45-5.2h3.02a8.04 8.04 0 0 1-4.47 5.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#313131]">
      <path
        d="M5 4h4v4H5V4Zm5 0h4v4h-4V4Zm5 0h4v4h-4V4ZM5 10h4v4H5v-4Zm5 0h4v4h-4v-4Zm5 0h4v4h-4v-4ZM5 16h4v4H5v-4Zm5 0h4v4h-4v-4Zm5 0h4v4h-4v-4Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Navbar() {
  return (
    <header className="flex h-[44px] items-center justify-between border-b border-[#e8ecef] bg-white px-2">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5 border-r border-[#edf0f3] pr-3">
          <img
            src="/favicon.svg"
            alt="Veefin"
            className="h-6 w-6 object-contain"
          />
          <div className="leading-none">
            <div className="text-[10px] font-semibold tracking-[1.8px] text-[#1f2328]">VEEFIN</div>
            <div className="text-[9px] tracking-[1px] text-[#5e6772]">LENDING</div>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-[13px] font-medium text-[#2f2f2f]">
          <button>Documentation</button>
          <button>Disbursement</button>
          <button>Special Cases</button>
          <button>Query Submitted</button>
        </nav>
      </div>

      <div className="flex items-center gap-3.5 pr-1">
        <IconBell />
        <IconMail />
        <IconGlobe />
        <IconGrid />
      </div>
    </header>
  )
}

export default Navbar
