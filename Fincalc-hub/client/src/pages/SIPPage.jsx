import PageHeader from '../components/Shared/PageHeader'
import SIPCalculator from '../components/SIPCalculator/SIPCalculator'

export default function SIPPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        emoji="📈"
        title="SIP Calculator"
        description="Calculate how your monthly SIP investments grow with the power of compounding"
      />
      <SIPCalculator />
    </div>
  )
}