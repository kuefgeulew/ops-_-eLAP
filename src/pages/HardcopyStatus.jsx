/**
 * Hardcopy status — full-page detail when opened via direct URL.
 */
function HardcopyStatus() {
  return (
    <div className="min-h-screen bg-white p-0 text-[#2f343a]">
      <div className="w-full max-w-[640px] border border-[#d8dce2] bg-[#f4f5f6]">
        <div className="flex h-[68px] items-center justify-between border-b border-[#d8dce2] px-6">
          <h1 className="text-[35px] leading-none text-transparent">
            <span className="text-[17px] font-semibold text-[#21262d]">Detail Hardcopy Status</span>
          </h1>
          <button
            type="button"
            aria-label="Close"
            className="text-[48px] font-light leading-none text-[#7b8086]"
          >
            ×
          </button>
        </div>

        <div className="px-6 pb-10 pt-4">
          <div className="mb-8">
            <div className="text-[16px] font-semibold text-[#2d3137]">Hardcopy Status</div>
            <div className="mt-1 text-[16px] text-[#2d3137]">Not Received</div>
          </div>

          <div className="text-[16px] font-semibold text-[#2d3137]">Remark</div>
        </div>
      </div>
    </div>
  )
}

export default HardcopyStatus
