# 03 — Closure

Ini bagian paling penting untuk latihan kita.

## Tujuan

Memahami bagaimana sebuah function dapat mempertahankan akses terhadap variable dari scope luarnya.

## Tugas

Buat:

```js
createExpenseTracker();
```

Di dalam function tersebut buat:

```js
let transactions = [];
```

Function harus mengembalikan object:

```js
{
  (addIncome, addExpense, getTransactions);
}
```

`addIncome()`

Contoh:

```js
tracker.addIncome('Gaji', 5000000);
```

Menambahkan:

```js
{
type: "income",
description: "Gaji",
amount: 5000000
}
```

ke `transactions`.

`addExpense()`

Contoh:

```js
tracker.addExpense('Makan', 50000);
```

Menambahkan:

```js
{
type: "expense",
description: "Makan",
amount: 50000
}
```

`getTransactions()`

Mengembalikan seluruh transaksi.

## Test

Kode berikut harus bekerja:

```js
const tracker = createExpenseTracker();

tracker.addIncome('Gaji', 5000000);
tracker.addExpense('Makan', 50000);
tracker.addExpense('Transport', 20000);

console.log(tracker.getTransactions());
```

Expected:

```js
[
  {
    type: 'income',
    description: 'Gaji',
    amount: 5000000,
  },
  {
    type: 'expense',
    description: 'Makan',
    amount: 50000,
  },
  {
    type: 'expense',
    description: 'Transport',
    amount: 20000,
  },
];
```

⚠️ Constraint

Tidak boleh:

```js
let transactions = [];
```

di luar `createExpenseTracker()`.

Harus:

```js
function createExpenseTracker() {
  let transactions = [];

  // ...
}
```

Tujuannya supaya kamu terpaksa menggunakan closure.
