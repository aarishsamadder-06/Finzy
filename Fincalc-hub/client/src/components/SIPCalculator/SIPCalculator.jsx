import { useState } from 'react'
import InputSlider from '../Shared/InputSlider'
import ResultCard from '../Shared/ResultCard'
import SIPChart from './SIPChart'
import { calculateSIP, getSIPChartData } from '../../utils/sipFormula'

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const result = calculateSIP(monthly, rate, years)
  const chartData = getSIPChartData(monthly, rate, years)
  const fmt = (n) => '₹' + n.toLocaleString('en-IN')

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Adjust Your Investment
        </h2>
        <InputSlider label="Monthly Investment" value={monthly}
          min={500} max={100000} step={500} onChange={setMonthly} />
        <InputSlider label="Expected Annual Returns" value={rate}
          min={1} max={30} step={0.5} onChange={setRate} prefix="" suffix="%" />
        <InputSlider label="Investment Period" value={years}
          min={1} max={40} step={1} onChange={setYears} prefix="" suffix=" yrs" />
        <div className="grid grid-cols-3 gap-3 mt-6">
          <ResultCard label="Invested" value={fmt(result.totalInvested)} />
          <ResultCard label="Returns" value={fmt(result.totalReturns)} />
          <ResultCard label="Total Value" value={fmt(result.futureValue)} highlight />
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
          ₹{monthly.toLocaleString('en-IN')}/month for {years} years at {rate}% returns
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Growth Over Time
        </h2>
        <SIPChart data={chartData} />
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-3">
          Your money grows from{' '}
          <span className="font-semibold text-indigo-600">{fmt(result.totalInvested)}</span>{' '}
          to{' '}
          <span className="font-semibold text-indigo-600">{fmt(result.futureValue)}</span>
        </p>
      </div>
    </div>
  )
}