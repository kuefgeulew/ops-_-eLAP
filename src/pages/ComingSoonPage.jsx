/**
 * Placeholder for routes that are not implemented yet; shows title and tracking id.
 */
import { useParams } from 'react-router-dom'

function ComingSoonPage({ title }) {
  const { trackingId } = useParams()
  return (
    <div className="min-h-screen bg-[#f5f7fa] p-6 text-[#1f2328]">
      <div className="mx-auto max-w-[960px] rounded border border-[#e1e6ec] bg-white p-6">
        <h1 className="text-[22px] font-semibold">{title}</h1>
        <p className="mt-2 text-[14px] text-[#5f6975]">Tracking ID: {trackingId}</p>
        <p className="mt-5 text-[16px]">Coming Soon</p>
      </div>
    </div>
  )
}

export default ComingSoonPage
