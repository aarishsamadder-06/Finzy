import PageHeader from '../components/Shared/PageHeader'
import EmergencyFund from '../components/EmergencyFund/EmergencyFund'

export default function EmergencyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        emoji="🛡️"
        title="Emergency Fund Calculator"
        description="Find out how much emergency fund you need and how close you are to your target"
      />
      <EmergencyFund />
    </div>
  )
}