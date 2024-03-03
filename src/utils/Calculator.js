function calculateSimpleInterest(principal, interestRate, years) {
  const interestEarned = principal * interestRate * years;
  const finalAmount = principal + interestEarned;
  return { years, finalAmount };
}

function calculateCompoundInterest(principal, interestRate, years) {
  let amount = principal;
  const results = [];
  for (let year = 1; year <= years; year++) {
    const interestEarned = amount * interestRate;
    amount += interestEarned;
    results.push({ year, amount });
  }
  return results;
}

function formatYearAndAmount(year, amount) {
  const formattedYear = year.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const formattedAmount = `$${amount.toFixed(2)}`;
  return `${formattedYear}: ${formattedAmount}`;
}

export {
  calculateSimpleInterest,
  calculateCompoundInterest,
  formatYearAndAmount,
};
