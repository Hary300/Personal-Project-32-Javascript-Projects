# 01 — Basic Function

## Tujuan

Memastikan kamu benar-benar memahami:

- Function declaration
- Parameter
- Argument
- Return
- Function sebagai value

## Tugas 1

Buat function:

```js
createTransaction();
```

Function menerima:

```
description
amount
type
```

Contoh:

```js
createTransaction('Gaji', 5000000, 'income');
```

Function harus mengembalikan object:

```js
{
    description: "Gaji",
    amount: 5000000,
    type: "income"
}
```

Requirements

1. Jangan console.log() di dalam function.
2. Gunakan return.
3. Jangan menggunakan global variable.

## Test

```js
const transaction = createTransaction('Gaji', 5000000, 'income');

console.log(transaction);
```

Expected:

```js

{
    description: "Gaji",
    amount: 5000000,
    type: "income"
}
```
