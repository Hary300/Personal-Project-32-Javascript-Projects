const createTransaction = function (description, amount, type) {
  return {
    description,
    amount,
    type,
  };
};

const transaction = createTransaction('Gaji', 5000000, 'income');

console.log(transaction);
