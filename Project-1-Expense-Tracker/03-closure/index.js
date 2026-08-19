const createExpenseTracker = function () {
  let transactions = [];
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
  };
};

// const tracker = createExpenseTracker();
// tracker.addIncome('Gaji', 5000000);
// tracker.addExpense('Makan', 500000);
// tracker.addExpense('Transport', 200000);

// console.log(tracker.getTransactions());

const tracker1 = createExpenseTracker();
const tracker2 = createExpenseTracker();

tracker1.addIncome('Gaji', 5000000);
tracker2.addIncome('Gaji', 10000000);

console.log(tracker1.getTransactions());
console.log(tracker2.getTransactions());
