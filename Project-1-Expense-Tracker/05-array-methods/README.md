# 05 — Array Methods

## 🎯 Goal

Mengolah data transaksi menggunakan `reduce()` tanpa `filter()`.

## 📋 Tasks

Implementasikan:

- `getIncome()` → total semua `income`
- `getExpense()` → total semua `expense`
- `getBalance()` → `income - expense`

Gunakan `reduce()` untuk menghitung total.

## 💡 Example

```js
tracker.addIncome('Gaji', 5000000);
tracker.addExpense('Makan', 50000);
tracker.addExpense('Transport', 20000);

tracker.getIncome(); // 5000000
tracker.getExpense(); // 70000
tracker.getBalance(); // 4930000
```
