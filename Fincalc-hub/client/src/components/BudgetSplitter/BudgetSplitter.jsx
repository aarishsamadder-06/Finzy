import { useState, useMemo } from "react";
import BudgetChart from "./BudgetChart";
import { calculateBudget } from "../../utils/budgetFormula";

const BudgetSplitter = () => {
  const [income, setIncome] = useState(50000);
  const [needs, setNeeds] = useState(50);
  const [wants, setWants] = useState(30);
  const [savings, setSavings] = useState(20);

  const total = Number(needs) + Number(wants) + Number(savings);

  const result = useMemo(() => {
    return calculateBudget(
      Number(income),
      Number(needs),
      Number(wants),
      Number(savings)
    );
  }, [income, needs, wants, savings]);

  const chartData = [
    { name: "Needs", value: result.needsAmount },
    { name: "Wants", value: result.wantsAmount },
    { name: "Savings", value: result.savingsAmount },
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
            <span className="text-cyan-400 font-semibold">
              {" "}50-30-20 Rule
            </span>
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">

            <h2 className="text-white text-2xl font-bold mb-8">
              Enter Details
            </h2>

            <div className="space-y-8">

              <div>

                <label className="text-white font-semibold">
                  Monthly Income
                </label>

                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="mt-2 w-full rounded-xl bg-white/20 text-white p-4 outline-none border border-white/20"
                />

              </div>

              {/* Needs */}

              <div>

                <div className="flex justify-between text-white mb-2">
                  <span>Needs</span>
                  <span>{needs}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={needs}
                  onChange={(e) => setNeeds(e.target.value)}
                  className="w-full"
                />

              </div>

              {/* Wants */}

              <div>

                <div className="flex justify-between text-white mb-2">
                  <span>Wants</span>
                  <span>{wants}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={wants}
                  onChange={(e) => setWants(e.target.value)}
                  className="w-full"
                />

              </div>

              {/* Savings */}

              <div>

                <div className="flex justify-between text-white mb-2">
                  <span>Savings</span>
                  <span>{savings}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={savings}
                  onChange={(e) => setSavings(e.target.value)}
                  className="w-full"
                />

              </div>

              {total === 100 ? (
                <div className="bg-green-500/20 border border-green-400 rounded-xl p-4 text-green-300 font-semibold text-center">
                  ✓ Perfect Allocation (100%)
                </div>
              ) : (
                <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 text-red-300 font-semibold text-center">
                  Percentages must equal 100%
                </div>
              )}

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <div className="grid gap-5">

              <div className="bg-blue-500 rounded-2xl p-6 text-white shadow-xl">

                <p className="text-lg">Needs</p>

                <h2 className="text-4xl font-bold mt-2">
                  {formatCurrency(result.needsAmount)}
                </h2>

                <div className="w-full h-3 bg-blue-300 rounded-full mt-5">
                  <div
                    className="h-3 bg-white rounded-full"
                    style={{ width: `${needs}%` }}
                  />
                </div>

              </div>

              <div className="bg-emerald-500 rounded-2xl p-6 text-white shadow-xl">

                <p className="text-lg">Wants</p>

                <h2 className="text-4xl font-bold mt-2">
                  {formatCurrency(result.wantsAmount)}
                </h2>

                <div className="w-full h-3 bg-emerald-300 rounded-full mt-5">
                  <div
                    className="h-3 bg-white rounded-full"
                    style={{ width: `${wants}%` }}
                  />
                </div>

              </div>

              <div className="bg-amber-500 rounded-2xl p-6 text-white shadow-xl">

                <p className="text-lg">Savings</p>

                <h2 className="text-4xl font-bold mt-2">
                  {formatCurrency(result.savingsAmount)}
                </h2>

                <div className="w-full h-3 bg-amber-300 rounded-full mt-5">
                  <div
                    className="h-3 bg-white rounded-full"
                    style={{ width: `${savings}%` }}
                  />
                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6">

              <BudgetChart data={chartData} />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BudgetSplitter;