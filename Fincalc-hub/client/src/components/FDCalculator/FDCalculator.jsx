import { useState } from 'react'
import InputSlider from '../Shared/InputSlider'
import ResultCard from '../Shared/ResultCard'
import FDChart from './FDChart'
import { calculateFD, getFDChartData } from '../../utils/fdFormula'

const FREQUENCIES = [
  { label: 'Monthly', value: 12 },
  { label: 'Quarterly', value: 4 },
  { label: 'Half-Yearly', value: 2 },
  { label: 'Yearly', value: 1 },
]

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(5)
  const [frequency, setFrequency] = useState(4)

  const result = calculateFD(principal, rate, years, frequency)
  const chartData = getFDChartData(principal, rate, years, frequency)
  const fmt = (n) => '₹' + n.toLocaleString('en-IN')
  const returns = ((result.interest / result.principal) * 100).toFixed(1)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">
          FD Details
        </h2>

        <InputSlider label="Principal Amount" value={principal}
          min={10000} max={5000000} step={10000} onChange={setPrincipal} />
        <InputSlider label="Annual Interest Rate" value={rate}
          min={4} max={9} step={0.1} onChange={setRate} prefix="" suffix="%" />
        <InputSlider label="Duration" value={years}
          min={1} max={10} step={1} onChange={setYears} prefix="" suffix=" yrs" />

        {/* Compounding Frequency */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Compounding Frequency
          </label>
          <div className="grid grid-cols-2 gap-2">
            {FREQUENCIES.map(f => (
              <button
                key={f.value}
                onClick={() => setFrequency(f.value)}
                className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                  frequency === f.value
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6">
          <ResultCard label="Principal" value={fmt(result.principal)} />
          <ResultCard label="Interest" value={fmt(result.interest)} />
          <ResultCard label="Maturity" value={fmt(result.maturity)} highlight />
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
          Total returns of <span className="font-bold text-indigo-600">{returns}%</span> over {years} years
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Growth Over Time
        </h2>
        <FDChart data={chartData} />
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-3">
          Your <span className="font-semibold text-indigo-600">{fmt(result.principal)}</span> grows to{' '}
          <span className="font-semibold text-indigo-600">{fmt(result.maturity)}</span>
        </p>
      </div>
    </div>
  )
}