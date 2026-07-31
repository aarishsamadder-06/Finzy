import { useState } from "react";
import BudgetChart from "./BudgetChart";

const NEEDS = 50;
const WANTS = 30;
const SAVINGS = 20;

const BudgetSplitter = () => {
  const [income, setIncome] = useState(50000);

  const needsAmount = Math.round(income * NEEDS / 100);
  const wantsAmount = Math.round(income * WANTS / 100);
  const savingsAmount = Math.round(income * SAVINGS / 100);

  const chartData = [
    { name: "Needs", value: needsAmount },
    { name: "Wants", value: wantsAmount },
    { name: "Savings", value: savingsAmount },
  ];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-white">
            Budget Splitter
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            Plan your monthly income using the famous
            <span className="text-cyan-400 font-semibold"> 50-30-20 Rule</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT — Income Input */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-white text-2xl font-bold mb-8">
              Enter Your Income
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-white font-semibold">
                  Monthly Income
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl bg-white/20 text-white p-4 outline-none border border-white/20 text-2xl font-bold"
                />
              </div>

              <div className="bg-white/10 rounded-2xl p-5 border border-white/20 space-y-3">
                <p className="text-cyan-400 font-bold text-lg">The 50-30-20 Rule</p>
                <div className="flex justify-between text-white">
                  <span>🏠 50% — Needs</span>
                  <span className="font-bold">{formatCurrency(needsAmount)}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>🎯 30% — Wants</span>
                  <span className="font-bold">{formatCurrency(wantsAmount)}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>💰 20% — Savings</span>
                  <span className="font-bold">{formatCurrency(savingsAmount)}</span>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-400 rounded-xl p-4 text-green-300 font-semibold text-center">
                ✅ Perfectly balanced allocation
              </div>
            </div>
          </div>

          {/* RIGHT — Result Cards */}
          <div className="space-y-6">
            <div className="grid gap-5">

              <div className="bg-blue-500 rounded-2xl p-6 text-white shadow-xl">
                <p className="text-lg">🏠 Needs (50%)</p>
                <h2 className="text-4xl font-bold mt-2">
                  {formatCurrency(needsAmount)}
                </h2>
                <p className="text-blue-100 text-sm mt-2">
                  Rent, groceries, utilities, transport
                </p>
                <div className="w-full h-3 bg-blue-300 rounded-full mt-4">
                  <div className="h-3 bg-white rounded-full w-1/2" />
                </div>
              </div>

              <div className="bg-emerald-500 rounded-2xl p-6 text-white shadow-xl">
                <p className="text-lg">🎯 Wants (30%)</p>
                <h2 className="text-4xl font-bold mt-2">
                  {formatCurrency(wantsAmount)}
                </h2>
                <p className="text-emerald-100 text-sm mt-2">
                  Dining out, entertainment, shopping
                </p>
                <div className="w-full h-3 bg-emerald-300 rounded-full mt-4">
                  <div className="h-3 bg-white rounded-full w-3/10" style={{ width: '30%' }} />
                </div>
              </div>

              <div className="bg-amber-500 rounded-2xl p-6 text-white shadow-xl">
                <p className="text-lg">💰 Savings (20%)</p>
                <h2 className="text-4xl font-bold mt-2">
                  {formatCurrency(savingsAmount)}
                </h2>
                <p className="text-amber-100 text-sm mt-2">
                  Emergency fund, investments, SIP
                </p>
                <div className="w-full h-3 bg-amber-300 rounded-full mt-4">
                  <div className="h-3 bg-white rounded-full" style={{ width: '20%' }} />
                </div>
              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6">
              <h3 className="text-gray-700 font-bold text-center mb-4">
                Budget Distribution
              </h3>
              <BudgetChart data={chartData} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSplitter;