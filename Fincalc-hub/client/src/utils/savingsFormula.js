export function calculateSavingsGoal(goalAmount, currentSavings, years, annualRate) {
  const monthlyRate = annualRate / 12 / 100
  const months = years * 12

  const futureValueOfSavings = currentSavings * Math.pow(1 + monthlyRate, months)
  const remainingGoal = goalAmount - futureValueOfSavings

  let requiredMonthly = 0
  if (remainingGoal > 0) {
    requiredMonthly = monthlyRate === 0
      ? remainingGoal / months
      : remainingGoal / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
  }

  const totalContribution = requiredMonthly * months
  const totalDeposited = currentSavings + totalContribution
  const totalInterest = Math.max(goalAmount - totalDeposited, 0)

  return {
    requiredMonthly: Math.round(requiredMonthly),
    totalContribution: Math.round(totalContribution),
    totalDeposited: Math.round(totalDeposited),
    totalInterest: Math.round(totalInterest),
    goalReached: remainingGoal <= 0,
  }
}

export function getSavingsChartData(goalAmount, currentSavings, years, annualRate) {
  const { requiredMonthly } = calculateSavingsGoal(goalAmount, currentSavings, years, annualRate)
  const monthlyRate = annualRate / 12 / 100

  const data = []
  for (let y = 1; y <= years; y++) {
    const months = y * 12
    const fvSavings = currentSavings * Math.pow(1 + monthlyRate, months)
    const fvContributions = monthlyRate === 0
      ? requiredMonthly * months
      : requiredMonthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
    data.push({
      year: `Y${y}`,
      Savings: Math.round(fvSavings + fvContributions),
    })
  }
  return data
}
