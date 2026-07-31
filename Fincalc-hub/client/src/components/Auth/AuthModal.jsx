import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function AuthModal({ onClose }) {
  const { login } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    if (!email.trim()) return
    if (!isLogin && !name.trim()) return
    login(isLogin ? email.split('@')[0] : name, email)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 w-full max-w-md shadow-2xl border border-gray-100 dark:border-gray-800">

        <div className="text-center mb-6">
          <div className="text-4xl mb-2">💰</div>
          <h2 className="text-2xl font-black text-gray-800 dark:text-white">
            {isLogin ? 'Welcome back!' : 'Create account'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {isLogin ? 'Sign in to FinzyCalc' : 'Join FinzyCalc for free'}
          </p>
        </div>

        <div className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Aarish Samadder"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-900 text-gray-400">or</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          Continue without login →
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}