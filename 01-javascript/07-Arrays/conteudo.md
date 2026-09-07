# 07 — Arrays

## Objetivo do módulo

Aprender a trabalhar com coleções de dados em JavaScript, percorrendo, transformando, filtrando, buscando, ordenando e agregando informações.

---

## O que é um Array?

```js
const nome = "Richard";
const idade = 30;
const cidade = "Três Lagoas";
```

Isso funciona bem para poucos dados.

Mas imagine que precisamos armazenar 100 nomes:

```js
const nome1 = "Ana";
const nome2 = "João";
const nome3 = "Maria";
const nome4 = "Carlos";
```

Um **array** é uma estrutura que permite armazenar vários valores em uma única variável.

```js
const nomes = ["Ana", "João", "Maria", "Carlos"];
```

### Visualmente

```text
nomes

┌───────┬────────┬─────────┬──────────┐
│ Ana   │ João   │ Maria   │ Carlos   │
└───────┴────────┴─────────┴──────────┘
    0       1        2          3
```

Cada posição possui um número chamado **índice**.

Em JavaScript, os índices começam em `0`.

---

## Criando Arrays

### Array vazio

```js
const lista = [];
```

### Array com strings

```js
const frutas = ["Maçã", "Banana", "Laranja"];
```

### Array com números

```js
const numeros = [10, 20, 30, 40, 50];
```

### Array com booleanos

```js
const respostas = [true, false, true];
```

### Array misto

JavaScript permite diferentes tipos:

```js
const dados = ["Richard", 30, true, null];
```

Embora seja possível, em aplicações reais normalmente tentamos manter arrays com dados do mesmo tipo ou mesma estrutura.

---

## Acessando elementos

Utilizamos colchetes `[]` com o índice.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]);
```

### Resultado

```text
Maçã
```

### Mais exemplos

```js
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Laranja
```

---

## Atenção ao índice

Um erro comum:

```js
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[3]);
```

### Resultado

```text
undefined
```

Porque o array possui apenas:

```text
Índice 0 → Maçã
Índice 1 → Banana
Índice 2 → Laranja
```

Não existe índice `3`.

---

## Alterando um elemento

Arrays declarados com `const` ainda podem ter seus elementos alterados.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas[1] = "Uva";

console.log(frutas);
```

### Resultado

```text
["Maçã", "Uva", "Laranja"]
```

### Isso é importante

```js
const frutas = ["Maçã", "Banana"];
```

Você **não pode** fazer:

```js
frutas = ["Uva", "Manga"];
```

Mas pode alterar o conteúdo interno:

```js
frutas[0] = "Uva";
```

Mais para frente vamos aprofundar esse comportamento quando estudarmos referências e mutabilidade.

---

## A propriedade `length`

Arrays possuem uma propriedade chamada `length`.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas.length);
```

### Resultado

```text
3
```

Ela informa quantos elementos existem no array.

```js
const numeros = [10, 20, 30, 40, 50];

console.log(numeros.length);
```

### Resultado

```text
5
```
