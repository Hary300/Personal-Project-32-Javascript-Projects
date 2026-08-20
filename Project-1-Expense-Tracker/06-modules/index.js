import createExpenseTracker from './expenseTracker.js';

const tracker = createExpenseTracker();
tracker.addIncome('Gaji', 5000000);
tracker.addExpense('Makan', 50000);

console.log(tracker.getIncome());
console.log(tracker.getExpense());
console.log(tracker.getBalance());
