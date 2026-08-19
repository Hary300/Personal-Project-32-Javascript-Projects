# 02 — Scope

## Tujuan

Memahami:

- Global scope
- Function scope
- Block scope
- Local variable

##Tugas

Buat:

```js
createTransaction();
```

di dalamnya terdapat variable:

```js
const id = 1;
const description = 'Gaji';
const amount = 5000000;
const type = 'income';
```

Pastikan variable tersebut tidak dapat diakses dari luar function.

Kemudian coba:

```js
console.log(id);
```

dan amati error yang terjadi.

Tantangan

Jelaskan di README:

Kenapa variable tersebut tidak bisa diakses dari luar function?

Error yang muncul adalah:

```
ReferenceError: id is not defined
```

Karena:

createTransaction()
┌─────────────────┐
│ id │
│ description │
│ amount │
│ type │
└─────────────────┘

Semua variable itu hanya hidup di dalam function.
