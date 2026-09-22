# Arrays — Fundamentos

## O que é

Um **array** é uma estrutura usada para armazenar vários valores dentro de uma única variável.

Os valores ficam organizados em posições, chamadas de **índices**.

```js
const frutas = ["Maçã", "Banana", "Laranja"];
```

---

## Criação de arrays

```js
const dados = ["Richard", 35, true];
```

---

## Índices e posições

Os índices dos arrays começam em **0**.

```js
const frutas = ["Maçã", "Banana", "Laranja"];
```

Portanto:

- Primeiro elemento → índice `0`
- Segundo elemento → índice `1`
- Terceiro elemento → índice `2`

---

## Acessando elementos

Para acessar um elemento, usamos seu índice entre colchetes.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]);
```

Resultado:

```text
Maçã
```

---

## Alterando elementos

Os elementos de um array podem ser alterados utilizando seu índice.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas[1] = "Morango";
```

Agora o array é:

```js
["Maçã", "Morango", "Laranja"];
```

---

## Propriedade length

A propriedade `length` informa a quantidade de elementos existentes no array.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas.length);
```

Resultado:

```text
3
```

### Acessando o último elemento

Podemos usar `length - 1` para acessar o último elemento.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[frutas.length - 1]);
```

Resultado:

```text
Laranja
```

---
