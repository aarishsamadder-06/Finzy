import { useState } from "react";
import InputSlider from "../Shared/InputSlider";
import ResultCard from "../Shared/ResultCard";
import { calculateEmergencyFund } from "../../utils/emergencyFormula";

export default function EmergencyFund() {
  const [monthlyExpense, setMonthlyExpense] = useState(30000);
  const [months, setMonths] = useState(6);
  const [currentSavings, setCurrentSavings] = useState(50000);

  const result = calculateEmergencyFund(
    monthlyExpense,
    months,
    currentSavings
  );

  const fmt = (n) => "₹" + n.toLocaleString("en-IN");

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-700 mb-6">
        Plan Your Emergency Fund
      </h2>

      {/* Monthly Expenses */}
      <InputSlider
        label="Monthly Expenses"
        value={monthlyExpense}
        min={5000}
        max={100000}
        step={500}
        onChange={setMonthlyExpense}
      />

      {/* Emergency Coverage */}
      <InputSlider
        label="Emergency Coverage"
        value={months}
        min={3}
        max={12}
        step={1}
        onChange={setMonths}
        prefix=""
        suffix=" months"
      />

      {/* Current Savings */}
      <InputSlider
        label="Current Savings"
        value={currentSavings}
        min={0}
        max={1000000}
        step={1000}
        onChange={setCurrentSavings}
      />

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 font-medium">
            Emergency Fund Progress
          </span>
          <span className="font-semibold text-green-600">
            {Math.round(result.progress)}%
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${result.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <ResultCard
          label="Recommended Fund"
          value={fmt(result.recommendedFund)}
        />

        <ResultCard
          label="Current Savings"
          value={fmt(result.currentSavings)}
          highlight={result.amountNeeded === 0}
        />

        <ResultCard
          label="Still Needed"
          value={fmt(result.amountNeeded)}
          highlight={result.amountNeeded > 0}
        />
      </div>

      {/* Summary */}
      <p className="text-xs text-gray-400 mt-5 text-center">
        Based on monthly expenses of{" "}
        <span className="font-semibold">
          {fmt(monthlyExpense)}
        </span>{" "}
        and{" "}
        <span className="font-semibold">
          {months} months
        </span>{" "}
        of emergency coverage.
      </p>

      <p className="text-xs text-gray-400 text-center mt-2">
        Experts generally recommend keeping an emergency fund worth
        3–12 months of essential living expenses.
      </p>
    </div>
  );
}