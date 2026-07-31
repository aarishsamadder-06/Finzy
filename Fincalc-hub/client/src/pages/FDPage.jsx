import PageHeader from '../components/Shared/PageHeader'
import FDCalculator from '../components/FDCalculator/FDCalculator'

export default function FDPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        emoji="🏦"
        title="FD Calculator"
        description="Calculate your Fixed Deposit maturity amount and interest earned over time"
      />
      <FDCalculator />
    </div>
  )
}