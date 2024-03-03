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

function calculateYearlyInvestmentResults(amount, interestRate, years) {
  const simpleInterestResults = [];
  const compoundInterestResults = [];

  for (let year = 1; year <= years; year++) {
    const simpleInterestResult = calculateSimpleInterest(
      amount,
      interestRate,
      year
    );
    const compoundInterestResult = calculateCompoundInterest(
      amount,
      interestRate,
      year
    );

    simpleInterestResults.push({
      year: simpleInterestResult.years,
      amount: simpleInterestResult.finalAmount,
    });
    compoundInterestResults.push(compoundInterestResult[year - 1].amount); // Access year-end amount for compound interest
  }

  return {
    simpleInterest: simpleInterestResults,
    compoundInterest: compoundInterestResults,
  };
}

export {
  calculateSimpleInterest,
  calculateCompoundInterest,
  calculateYearlyInvestmentResults,
};
