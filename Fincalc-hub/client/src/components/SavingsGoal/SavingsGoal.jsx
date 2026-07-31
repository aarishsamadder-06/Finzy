import { useState } from 'react'
import InputSlider from '../Shared/InputSlider'
import ResultCard from '../Shared/ResultCard'
import SavingsChart from './SavingsChart'
import { calculateSavingsGoal, getSavingsChartData } from '../../utils/savingsFormula'

export default function SavingsGoal() {
  const [goalAmount, setGoalAmount] = useState(1000000)
  const [currentSavings, setCurrentSavings] = useState(50000)
  const [years, setYears] = useState(5)
  const [rate, setRate] = useState(7)

  const result = calculateSavingsGoal(goalAmount, currentSavings, years, rate)
  const chartData = getSavingsChartData(goalAmount, currentSavings, years, rate)
  const fmt = (n) => '₹' + n.toLocaleString('en-IN')

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* Left — Inputs */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Set Your Goal
        </h2>
        <InputSlider
          label="Goal Amount"
          value={goalAmount} min={50000} max={10000000} step={10000}
          onChange={setGoalAmount}
        />
        <InputSlider
          label="Current Savings"
          value={currentSavings} min={0} max={5000000} step={5000}
          onChange={setCurrentSavings}
        />
        <InputSlider
          label="Time to Reach Goal"
          value={years} min={1} max={30} step={1}
          onChange={setYears} prefix="" suffix=" yrs"
        />
        <InputSlider
          label="Expected Annual Returns"
          value={rate} min={0} max={20} step={0.5}
          onChange={setRate} prefix="" suffix="%"
        />

        {/* Results */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <ResultCard
            label="Monthly Savings Needed"
            value={fmt(result.requiredMonthly)}
            highlight
          />
          <ResultCard label="Total Interest Earned" value={fmt(result.totalInterest)} />
        </div>

        {/* Summary line */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          {result.goalReached
            ? `Your current savings alone will reach the goal in ${years} years`
            : `Save ${fmt(result.requiredMonthly)}/month for ${years} years at ${rate}% returns`}
        </p>
      </div>

      {/* Right — Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Path to Your Goal
        </h2>
        <SavingsChart data={chartData} goalAmount={goalAmount} />
        <p className="text-xs text-gray-400 text-center mt-3">
          Target:{' '}
          <span className="font-semibold text-indigo-600">{fmt(goalAmount)}</span>{' '}
          in {years} years
        </p>
      </div>
    </div>
  )
}
