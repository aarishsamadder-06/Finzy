// Budget Splitter Formula

export const calculateBudget = (
  income,
  needsPercent,
  wantsPercent,
  savingsPercent
) => {
  income = Number(income);
  needsPercent = Number(needsPercent);
  wantsPercent = Number(wantsPercent);
  savingsPercent = Number(savingsPercent);

  const totalPercentage =
    needsPercent + wantsPercent + savingsPercent;

  const needsAmount = (income * needsPercent) / 100;
  const wantsAmount = (income * wantsPercent) / 100;
  const savingsAmount = (income * savingsPercent) / 100;

  return {
    income,
    totalPercentage,

    needsPercent,
    wantsPercent,
    savingsPercent,

    needsAmount,
    wantsAmount,
    savingsAmount,

    remaining:
      income -
      (needsAmount + wantsAmount + savingsAmount),

    isValid: totalPercentage === 100,
  };
};

// Currency Formatter

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

// Percentage Formatter

export const formatPercentage = (value) => {
  return `${value}%`;
};