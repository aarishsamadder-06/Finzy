import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import SIPPage from './pages/SIPPage'
import EMIPage from './pages/EMIPage'
import SavingsPage from './pages/SavingsPage'
import BudgetPage from './pages/BudgetPage'
import EmergencyPage from './pages/EmergencyPage'
import { useTheme } from './utils/useTheme'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <Navbar dark={dark} toggle={toggle} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sip" element={<SIPPage />} />
            <Route path="/emi" element={<EMIPage />} />
            <Route path="/savings" element={<SavingsPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}