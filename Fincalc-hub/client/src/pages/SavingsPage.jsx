import PageHeader from '../components/Shared/PageHeader'
import SavingsGoal from '../components/SavingsGoal/SavingsGoal'

export default function SavingsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        emoji="🎯"
        title="Savings Goal Calculator"
        description="Find out how much you need to save each month to reach your financial goal"
      />
      <SavingsGoal />
    </div>
  )
}