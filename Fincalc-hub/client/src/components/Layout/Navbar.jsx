import { Link, useLocation } from 'react-router-dom'

const links = [
  { path: '/', label: 'Home' },
  { path: '/sip', label: 'SIP' },
  { path: '/emi', label: 'EMI' },
  { path: '/savings', label: 'Savings Goal' },
  { path: '/budget', label: '50-30-20' },
  { path: '/emergency', label: 'Emergency Fund' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          💰 FinzyCalc
        </Link>
        <div className="flex gap-2 flex-wrap">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${pathname === link.path
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}