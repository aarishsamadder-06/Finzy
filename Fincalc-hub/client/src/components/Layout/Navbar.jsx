import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'

const links = [
  { path: '/', label: 'Home' },
  { path: '/sip', label: 'SIP' },
  { path: '/emi', label: 'EMI' },
  { path: '/savings', label: 'Savings Goal' },
  { path: '/budget', label: '50-30-20' },
  { path: '/emergency', label: 'Emergency Fund' },
]

export default function Navbar({ dark, toggle }) {
  const { pathname } = useLocation()
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo size={36} />
          <span className="text-xl font-black text-gray-800 dark:text-white">
            Finzy<span className="text-indigo-600">Calc</span>
          </span>
        </Link>
        <div className="flex items-center gap-1 flex-wrap">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                ${pathname === link.path
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 text-lg hover:scale-110"
            title="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}