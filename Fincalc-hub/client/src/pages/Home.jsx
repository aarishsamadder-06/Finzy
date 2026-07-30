import { Link } from 'react-router-dom'

const calculators = [
  {
    path: '/sip',
    emoji: '📈',
    title: 'SIP Calculator',
    desc: 'See how your monthly investments grow over time with compounding',
    color: 'hover:border-indigo-400',
    bg: 'hover:bg-indigo-50',
  },
  {
    path: '/emi',
    emoji: '🏠',
    title: 'EMI Calculator',
    desc: 'Calculate your monthly loan repayment for home, car or personal loans',
    color: 'hover:border-blue-400',
    bg: 'hover:bg-blue-50',
  },
  {
    path: '/savings',
    emoji: '🎯',
    title: 'Savings Goal',
    desc: 'Find out exactly how long it takes to reach your financial goal',
    color: 'hover:border-green-400',
    bg: 'hover:bg-green-50',
  },
  {
    path: '/budget',
    emoji: '💡',
    title: '50-30-20 Planner',
    desc: 'Split your income the smart way — needs, wants and savings',
    color: 'hover:border-yellow-400',
    bg: 'hover:bg-yellow-50',
  },
  {
    path: '/emergency',
    emoji: '🛡️',
    title: 'Emergency Fund',
    desc: 'Calculate your ideal emergency fund and track how close you are',
    color: 'hover:border-red-400',
    bg: 'hover:bg-red-50',
  },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <div className="text-center mb-14">
        <div className="text-6xl mb-4">💰</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Finzy<span className="text-indigo-600">Calc</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto">
          5 smart financial calculators. Make every money decision with confidence.
        </p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Free to use
          </span>
          <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            No login required
          </span>
          <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
            Instant results
          </span>
        </div>
      </div>

      {/* Calculator Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map(calc => (
          <Link
            key={calc.path}
            to={calc.path}
            className={`bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm
              transition-all duration-200 hover:shadow-md hover:-translate-y-1
              ${calc.color} ${calc.bg}`}
          >
            <span className="text-4xl">{calc.emoji}</span>
            <h2 className="text-lg font-bold text-gray-800 mt-3">{calc.title}</h2>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{calc.desc}</p>
            <div className="mt-4 text-indigo-600 text-sm font-semibold flex items-center gap-1">
              Calculate now <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="text-center mt-14">
        <p className="text-gray-400 text-sm">
          Built for students and individuals who want to take control of their finances 🎓
        </p>
      </div>

    </div>
  )
}