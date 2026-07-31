export function calculateEmergencyFund(
  monthlyExpense,
  months,
  currentSavings
) {
  const recommendedFund = monthlyExpense * months;

  const amountNeeded = Math.max(
    recommendedFund - currentSavings,
    0
  );

  const progress =
    recommendedFund === 0
      ? 0
      : Math.min(
          (currentSavings / recommendedFund) * 100,
          100
        );

  return {
    recommendedFund,
    currentSavings,
    amountNeeded,
    progress,
  };
}