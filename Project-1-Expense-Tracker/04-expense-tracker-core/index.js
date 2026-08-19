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
    },
    addExpense(description, amount) {
      transactions.push({
        type: 'expense',
        description,
        amount,
      });
    },
    getTransactions() {
      return transactions;
    },
    getIncome() {
      totalIncome = transactions
        .filter((transaction) => transaction.type === 'income')
        .map((a) => a.amount)
        .reduce((a, b) => a + b, 0);
      return totalIncome;
    },
    getExpense() {
      totalExpense = transactions
        .filter((transaction) => transaction.type === 'expense')
        .map((a) => a.amount)
        .reduce((a, b) => a + b, 0);
      return totalExpense;
    },
    getBalance() {
      return totalIncome - totalExpense;
    },
  };
};
const tracker = createExpenseTracker();
tracker.addIncome('Gaji', 5000000);
tracker.addExpense('Makan', 50000);
tracker.addExpense('Transport', 20000);

console.log(tracker.getIncome());
console.log(tracker.getExpense());
console.log(tracker.getBalance());
console.log(tracker.getTransactions());
