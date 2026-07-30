export function calculateSIP(monthlyAmount, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100
  const months = years * 12
  const futureValue = monthlyAmount *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate))
  const totalInvested = monthlyAmount * months
  const totalReturns = futureValue - totalInvested
  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(totalInvested),
    totalReturns: Math.round(totalReturns),
  }
}

export function getSIPChartData(monthlyAmount, annualRate, years) {
  const data = []
  for (let y = 1; y <= years; y++) {
    const result = calculateSIP(monthlyAmount, annualRate, y)
    data.push({
      year: `Y${y}`,
      Invested: result.totalInvested,
      Returns: result.totalReturns,
    })
  }
  return data
}