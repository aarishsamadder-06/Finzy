// src/components/EMICalculator/EMICalculator.jsx
import { useState } from "react";
import { calculateEMI } from "../../utils/emiFormula";
import EMIChart from "./EMIChart";

function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);

  const result = calculateEMI(principal, rate, tenure);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1.5rem" }}>
      <h2>EMI Calculator</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Loan Amount (₹): {principal.toLocaleString()}</label>
        <input
          type="range"
          min="10000"
          max="10000000"
          step="10000"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Interest Rate (% per year): {rate}</label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label>Loan Tenure (years): {tenure}</label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1.5rem",
        }}
      >
        <p><strong>Monthly EMI:</strong> ₹{result.emi.toLocaleString()}</p>
        <p><strong>Total Interest:</strong> ₹{result.totalInterest.toLocaleString()}</p>
        <p><strong>Total Payment:</strong> ₹{result.totalPayment.toLocaleString()}</p>
      </div>

      <EMIChart principal={result.principal} interest={result.totalInterest} />
    </div>
  );
}

export default EMICalculator;
