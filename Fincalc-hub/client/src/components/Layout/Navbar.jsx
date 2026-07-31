import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'
import AuthModal from '../Auth/AuthModal'
import { useAuth } from '../../contexts/AuthContext'

const links = [
  { path: '/', label: 'Home' },
  { path: '/sip', label: 'SIP' },
  { path: '/emi', label: 'EMI' },
  { path: '/savings', label: 'Savings Goal' },
  { path: '/budget', label: '50-30-20' },
  { path: '/emergency', label: 'Emergency Fund' },
  { path: '/fd', label: 'FD' },
]

export default function Navbar({ dark, toggle }) {
  const { pathname } = useLocation()
  const { user, logout } = useAuth()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
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
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggle}
              className="ml-2 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 text-lg hover:scale-110"
            >
              {dark ? '☀️' : '🌙'}
            </button>

            {user ? (
              <div className="flex items-center gap-2 ml-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  👋 {user.name}
                </span>
                <button
                  onClick={logout}
                  className="px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="ml-2 px-4 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  )
}