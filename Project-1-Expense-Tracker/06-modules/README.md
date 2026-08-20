# 06 — Modules

Pisahkan logic.

Contoh:

```
06-modules/


expenseTracker.js
index.js
```

`expenseTracker.js`

- Pindahkan `createExpenseTracker()` ke file ini.
- Export createExpenseTracker.

`index.js`

- Import createExpenseTracker.
- Buat instance tracker.
- Jalankan dan test semua method.

```js
console.log(tracker.getIncome());
console.log(tracker.getExpense());
console.log(tracker.getBalance());
```

expected

```
5000000
50000
4950000
```

Gunakan:

```
export
import
```

Tujuan level ini:

Memahami bagaimana function/data dapat digunakan antar-file tanpa menggunakan global variable.
