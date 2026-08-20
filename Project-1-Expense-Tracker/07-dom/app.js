import createExpenseTracker from './../06-modules/expenseTracker.js';

const tracker = createExpenseTracker();

const form = document.querySelector('form');

const description = document.querySelector('#description');
const amount = document.querySelector('#amount');
const type = document.querySelector('#type');

const balance = document.querySelector('.balance');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');

const transaction = document.querySelector('.transaction');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amountValue = Number(amount.value);
  console.log(description.value);
  console.log(amountValue);
  console.log(type.value);

  if (type.value === 'income')
    tracker.addIncome(description.value, amountValue);

  if (type.value === 'expense')
    tracker.addExpense(description.value, amountValue);
  console.log(tracker.getTransactions());

  balance.textContent = tracker.getBalance();
  income.textContent = tracker.getIncome();
  expense.textContent = tracker.getExpense();
  renderTransactions();
  form.reset();
});

function renderTransactions() {
  const allTransactions = tracker.getTransactions();

  transaction.textContent = '';

  allTransactions.forEach((t) => {
    const list = document.createElement('li');
    list.textContent = `${t.description} - ${t.amount}`;
    transaction.appendChild(list);
  });
}
