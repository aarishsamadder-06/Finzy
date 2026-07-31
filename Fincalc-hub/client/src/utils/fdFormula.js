export function calculateFD(principal, annualRate, years, frequency) {
  const n = frequency
  const r = annualRate / 100
  const t = years
  const maturity = principal * Math.pow(1 + r / n, n * t)
  const interest = maturity - principal
  return {
    maturity: Math.round(maturity),
    interest: Math.round(interest),
    principal: Math.round(principal),
  }
}

export function getFDChartData(principal, annualRate, years, frequency) {
  const data = []
  for (let y = 1; y <= years; y++) {
    const result = calculateFD(principal, annualRate, y, frequency)
    data.push({
      year: `Y${y}`,
      Principal: result.principal,
      Interest: result.interest,
    })
  }
  return data
}