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

      totalIncome = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((accumulator, current) => {
          return accumulator + current.amount;
        }, 0);
    },
    addExpense(description, amount) {
      transactions.push({
        type: 'expense',
        description,
        amount,
      });

      totalExpense = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((accumulator, current) => {
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

const tracker = createExpenseTracker();
tracker.addIncome('Gaji', 5000000);
tracker.addExpense('Makan', 50000);
tracker.addExpense('Transport', 20000);

console.log('total income: ', tracker.getIncome());
console.log('total expanse: ', tracker.getExpense());
console.log('total balance: ', tracker.getBalance());
console.log(tracker.getTransactions());

const tracker2 = createExpenseTracker();
tracker2.addIncome('uang saku', 250000);
console.log('total balance: ', tracker2.getBalance());
tracker2.addExpense('belanja', 10000);
console.log('total balance: ', tracker2.getBalance());
