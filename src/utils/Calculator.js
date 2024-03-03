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
    simpleInterestResults.push({
      year: year, // Directly use the loop variable
      amount: simpleInterestResult.finalAmount,
    });

    // Corrected to calculate compound interest up to the specified year
    const compoundInterestResult = calculateCompoundInterest(
      amount,
      interestRate,
      year
    );
    // Ensure each year's result is captured correctly
    compoundInterestResults.push({
      year: compoundInterestResult[compoundInterestResult.length - 1].year,
      amount: compoundInterestResult[compoundInterestResult.length - 1].amount,
    });
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
