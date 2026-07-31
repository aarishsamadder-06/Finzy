# 💰 FinzyCalc — Smart Financial Calculator Hub

<div align="center">

![FinzyCalc Banner](https://img.shields.io/badge/FinzyCalc-Financial%20Calculators-6366f1?style=for-the-badge&logo=react&logoColor=white)

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2.10-ff6384?style=flat-square)](https://recharts.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**6 powerful financial calculators in one place. Make every money decision with confidence.**

[🚀 Live Demo](https://finzy-indol.vercel.app/) · [📁 Repository](https://github.com/aarishsamadder-06/Finzy) · [🐛 Report Bug](https://github.com/aarishsamadder-06/Finzy/issues)

</div>

---

## 📖 About The Project

**FinzyCalc** is a modern, responsive financial calculator web application built for students and young professionals. It provides instant, accurate financial calculations with beautiful interactive charts and a clean UI — completely free, no login required.

Built as part of the **Jain University Finance Domain Hackathon 2026**, FinzyCalc solves a real problem: most financial apps are either too complex or require account creation. FinzyCalc gives you instant results in seconds.

### ✨ Key Highlights

- 🧮 **6 Smart Calculators** — SIP, EMI, Savings Goal, 50-30-20 Budget, Emergency Fund, FD
- 🌙 **Dark Mode** — Full dark/light theme toggle with localStorage persistence
- 📊 **Interactive Charts** — Real-time bar charts, pie charts, and line graphs using Recharts
- 🔐 **Optional Auth** — Sign in/sign up with "Continue without login" option
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop
- ⚡ **Instant Results** — All calculations happen in the browser, no backend needed
- 🆓 **100% Free** — No subscription, no hidden fees, no account required

---

## 🧮 Calculators

| Calculator | Description | Formula Used |
|-----------|-------------|-------------|
| 📈 **SIP Calculator** | Calculate how your monthly investments grow with compounding | `M = P × {[(1+r)^n - 1]/r} × (1+r)` |
| 🏠 **EMI Calculator** | Monthly loan repayment for home, car or personal loans | `EMI = P × r × (1+r)^n / [(1+r)^n - 1]` |
| 🎯 **Savings Goal** | Find out how long to reach your financial goal | Iterative compound interest |
| 💡 **50-30-20 Planner** | Split your income — Needs, Wants, Savings | Fixed 50/30/20 ratio |
| 🛡️ **Emergency Fund** | Calculate your ideal emergency fund size | `Target = Monthly Expenses × Months` |
| 🏦 **FD Calculator** | Fixed Deposit maturity amount and interest | `A = P × (1 + r/n)^(n×t)` |

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React.js** | Frontend framework | 18.2.0 |
| **Vite** | Build tool & dev server | 5.0.8 |
| **Tailwind CSS** | Utility-first styling | 3.4.19 |
| **Recharts** | Data visualization charts | 2.10.0 |
| **React Router DOM** | Client-side routing | 6.21.0 |

> **No backend. No database. No API keys.** Everything runs in the browser.

---

## 📁 Project Structure

```
Fincalc-hub/
└── client/
    ├── public/
    │   └── favicon.svg
    ├── src/
    │   ├── components/
    │   │   ├── Auth/
    │   │   │   └── AuthModal.jsx        # Sign in/sign up modal
    │   │   ├── FDCalculator/
    │   │   │   ├── FDCalculator.jsx
    │   │   │   └── FDChart.jsx
    │   │   ├── SIPCalculator/
    │   │   │   ├── SIPCalculator.jsx
    │   │   │   └── SIPChart.jsx
    │   │   ├── EMICalculator/
    │   │   │   ├── EMICalculator.jsx
    │   │   │   └── EMIChart.jsx
    │   │   ├── SavingsGoal/
    │   │   │   ├── SavingsGoal.jsx
    │   │   │   └── SavingsChart.jsx
    │   │   ├── BudgetSplitter/
    │   │   │   ├── BudgetSplitter.jsx
    │   │   │   └── BudgetChart.jsx
    │   │   ├── EmergencyFund/
    │   │   │   └── EmergencyFund.jsx
    │   │   ├── Layout/
    │   │   │   ├── Navbar.jsx
    │   │   │   └── Footer.jsx
    │   │   ├── Shared/
    │   │   │   ├── InputSlider.jsx      # Reusable slider component
    │   │   │   ├── ResultCard.jsx       # Reusable result display card
    │   │   │   └── PageHeader.jsx       # Reusable page header
    │   │   └── Logo.jsx
    │   ├── contexts/
    │   │   └── AuthContext.jsx          # Auth state management
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── SIPPage.jsx
    │   │   ├── EMIPage.jsx
    │   │   ├── SavingsPage.jsx
    │   │   ├── BudgetPage.jsx
    │   │   ├── EmergencyPage.jsx
    │   │   └── FDPage.jsx
    │   ├── utils/
    │   │   ├── sipFormula.js
    │   │   ├── emiFormula.js
    │   │   ├── savingsFormula.js
    │   │   ├── budgetFormula.js
    │   │   ├── emergencyFormula.js
    │   │   ├── fdFormula.js
    │   │   └── useTheme.js              # Dark mode hook
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aarishsamadder-06/Finzy.git

# Navigate to the project directory
cd Finzy/Fincalc-hub/client

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 👥 Team

| Name | Role | Contribution |
|------|------|-------------|
| **Aarish Samadder** | Frontend Lead | Project setup, SIP Calculator, FD Calculator, Home page, Dark mode, Auth system, GitHub management |
| **Karthika** | Frontend Developer | EMI Calculator |
| **Ashutosh** | Frontend Developer | Savings Goal Calculator |
| **Himanth** | Frontend Developer | 50-30-20 Budget Splitter |
| **Thiru** | Frontend Developer | Emergency Fund Calculator |

---

## 🌟 Features In Detail

### 🌙 Dark Mode
Full dark/light theme switching with smooth transitions. Theme preference is saved in localStorage so it persists across sessions.

### 📊 Interactive Charts
Every calculator comes with a relevant chart that updates in real time as you adjust the sliders:
- SIP → Stacked bar chart showing invested amount vs returns over years
- EMI → Pie chart showing principal vs interest breakdown
- Savings Goal → Line chart showing progress toward goal
- FD → Bar chart showing principal vs interest growth
- Budget → Pie chart showing 50/30/20 split
- Emergency Fund → Progress bar showing funding status

### 🔐 Auth System
Optional authentication using React Context API and localStorage. Users can:
- Sign up with name and email
- Sign in with email
- Continue without logging in (full access)

### 📱 Responsive Design
Built mobile-first with Tailwind CSS. All calculators and charts are fully responsive across all screen sizes.

---

## 📸 Screenshots

> Home Page — Dark Mode

![Dark Mode Home](https://via.placeholder.com/800x400/1a1a2e/6366f1?text=FinzyCalc+Dark+Mode)

> SIP Calculator with Chart

![SIP Calculator](https://via.placeholder.com/800x400/f8fafc/6366f1?text=SIP+Calculator)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

- Built for **Jain University Finance Domain Hackathon 2026**
- [React.js](https://reactjs.org/) — The UI library that powers it all
- [Tailwind CSS](https://tailwindcss.com/) — For the beautiful utility-first styling
- [Recharts](https://recharts.org/) — For the interactive data visualizations
- [Vite](https://vitejs.dev/) — For the blazing fast development experience

---

<div align="center">

**Made with ❤️ by Team FinzyCalc — Jain University 2026**

⭐ Star this repo if you found it helpful!

</div>