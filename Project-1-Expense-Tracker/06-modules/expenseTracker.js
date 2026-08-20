const createExpenseTracker = function () {
  const transactions = [];
  let totalIncome = 0;
  let totalExpense = 0;

  return {
    addIncome(description, amount) {
      transactions.push({
        type: 'income',
        description,
        amount,
      });

      totalIncome = transactions.reduce((accumulator, current) => {
        if (current.type !== 'income') return accumulator;
        return accumulator + current.amount;
      }, 0);
    },
    addExpense(description, amount) {
      transactions.push({
        type: 'expense',
        description,
        amount,
      });

      totalExpense = transactions.reduce((accumulator, current) => {
        if (current.type !== 'expense') return accumulator;
        return accumulator + current.amount;
      }, 0);
    },
    getTransactions() {
      return transactions;
    },
    getIncome() {
      return totalIncome;
    },
    getExpense() {
      return totalExpense;
    },
    getBalance() {
      return totalIncome - totalExpense;
    },
  };
};

export default createExpenseTracker;
