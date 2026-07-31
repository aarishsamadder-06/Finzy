import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const calculators = [
  {
    path: '/sip',
    emoji: '📈',
    title: 'SIP Calculator',
    desc: 'Watch your money multiply with the magic of compounding',
    gradient: 'from-violet-600 to-indigo-600',
    glow: 'hover:shadow-violet-300 dark:hover:shadow-violet-900',
    tag: '🔥 Most Popular',
    tagBg: 'bg-violet-100 text-violet-700',
    preview: '₹5K/mo → ₹23.2L in 15 yrs',
  },
  {
    path: '/emi',
    emoji: '🏠',
    title: 'EMI Calculator',
    desc: 'Plan your home, car or personal loan repayments instantly',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'hover:shadow-blue-300 dark:hover:shadow-blue-900',
    tag: '🏦 Loan Planning',
    tagBg: 'bg-blue-100 text-blue-700',
    preview: '₹10L loan → ₹10,643/mo EMI',
  },
  {
    path: '/savings',
    emoji: '🎯',
    title: 'Savings Goal',
    desc: 'Set a dream, find the fastest path to reach it',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'hover:shadow-emerald-300 dark:hover:shadow-emerald-900',
    tag: '🎯 Goal Based',
    tagBg: 'bg-emerald-100 text-emerald-700',
    preview: 'iPhone in 8 months saving ₹5K/mo',
  },
  {
    path: '/budget',
    emoji: '💡',
    title: '50-30-20 Planner',
    desc: 'The world\'s most popular budgeting rule, simplified',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'hover:shadow-amber-300 dark:hover:shadow-amber-900',
    tag: '💰 Smart Budget',
    tagBg: 'bg-amber-100 text-amber-700',
    preview: '₹50K salary → ₹10K saved monthly',
  },
  {
    path: '/emergency',
    emoji: '🛡️',
    title: 'Emergency Fund',
    desc: 'Know exactly how prepared you are for life\'s surprises',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'hover:shadow-rose-300 dark:hover:shadow-rose-900',
    tag: '🛡️ Safety Net',
    tagBg: 'bg-rose-100 text-rose-700',
    preview: 'Need ₹1.8L for 6 months coverage',
  },
]

const stats = [
  { value: '5', label: 'Calculators', emoji: '🧮', color: 'text-violet-600' },
  { value: '100%', label: 'Free', emoji: '🎁', color: 'text-emerald-600' },
  { value: 'Live', label: 'Results', emoji: '⚡', color: 'text-amber-600' },
  { value: '0', label: 'Login Needed', emoji: '🔓', color: 'text-blue-600' },
]

const steps = [
  { step: '01', title: 'Pick a Tool', desc: 'Choose from 5 powerful calculators', emoji: '🧮', color: 'bg-violet-100 dark:bg-violet-900/40 text-violet-600' },
  { step: '02', title: 'Enter Numbers', desc: 'Use sliders or type your values', emoji: '🎚️', color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600' },
  { step: '03', title: 'See Results', desc: 'Instant charts and insights appear', emoji: '📊', color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">

      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white">

        {/* Background blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-violet-600 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-600 rounded-full opacity-10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 py-24 text-center">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 backdrop-blur rounded-3xl border border-white/20 shadow-2xl">
              <Logo size={64} />
            </div>
          </div>

          <div className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
            🚀 Built for Students & Young Professionals
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Finzy
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Calc
            </span>
          </h1>

          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            5 powerful financial calculators in one place.
            Make smarter money decisions — <span className="text-yellow-400 font-semibold">instantly and for free.</span>
          </p>

          {/* Feature pills */}
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            {['✨ No Signup', '⚡ Instant Results', '📱 Mobile Friendly', '🔒 100% Private', '🆓 Always Free'].map(f => (
              <span key={f} className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all">
                {f}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/sip"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-black px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-all duration-200 shadow-lg shadow-yellow-400/30"
            >
              Start Calculating →
            </Link>
            <Link
              to="/budget"
              className="bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              Plan My Budget
            </Link>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {stats.map(stat => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-all">
                <div className="text-3xl mb-1">{stat.emoji}</div>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-indigo-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            className="fill-white dark:fill-gray-950" />
        </svg>
      </div>

      {/* ===== CALCULATOR CARDS ===== */}
      <div className="bg-white dark:bg-gray-950 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Our Tools
            </span>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mt-2">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                master money
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Each calculator is designed to give you instant, accurate results with beautiful visualizations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.path}
                to={calc.path}
                className={`group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 ${calc.glow}`}
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${calc.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute -right-4 -top-4 text-8xl opacity-20 group-hover:opacity-30 transition-all">
                    {calc.emoji}
                  </div>
                  <span className="text-4xl relative z-10">{calc.emoji}</span>
                  <h3 className="text-xl font-bold mt-3 relative z-10">{calc.title}</h3>
                  <div className="mt-2 inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    {calc.tag}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {calc.desc}
                  </p>
                  <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                      Example:
                    </p>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mt-0.5">
                      {calc.preview}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center font-semibold text-sm text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                    <span>Calculate now</span>
                    <span className="ml-1 group-hover:ml-2 transition-all duration-200">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mt-2">
              How it works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-2/3 w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent dark:from-indigo-700" />
                )}
                <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-sm`}>
                  {s.emoji}
                </div>
                <div className="text-xs font-black text-indigo-400 dark:text-indigo-500 mb-1 tracking-widest">
                  STEP {s.step}
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-xl">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== BOTTOM CTA ===== */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 px-4 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-4xl font-black mb-3">
            Ready to take control?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Start with any calculator — completely free, no account needed
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {calculators.map(calc => (
              <Link
                key={calc.path}
                to={calc.path}
                className="px-5 py-2.5 bg-white/15 backdrop-blur rounded-xl font-medium hover:bg-white/25 transition-all border border-white/20 text-sm hover:scale-105"
              >
                {calc.emoji} {calc.title}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-indigo-300 text-sm">
            Built with ❤️ for Jain University Finance Hackathon 2026
          </p>
        </div>
      </div>

    </div>
  )
}