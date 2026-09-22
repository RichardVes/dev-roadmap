# Arrays — Percorrendo arrays

## forEach()

Usado para percorrer **todos os elementos** de um array e executar uma ação para cada elemento.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach((fruta) => {
  console.log(fruta);
});
```

O `forEach()` recebe automaticamente cada elemento do array.

---

## forEach() com índice

Podemos acessar também o **índice** do elemento.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach((fruta, indice) => {
  console.log(indice, fruta);
});
```

O primeiro parâmetro representa o **valor** e o segundo representa o **índice**.

---

## forEach() com array

Também podemos acessar o **próprio array** durante a execução.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach((fruta, indice, array) => {
  console.log(fruta);
  console.log(indice);
  console.log(array);
});
```

Normalmente, usamos apenas o elemento ou o elemento junto com o índice.

---

## forEach() não retorna um novo array

O `forEach()` é utilizado para **executar uma ação** para cada elemento.

```js
const numeros = [1, 2, 3];

numeros.forEach((numero) => {
  console.log(numero * 2);
});
```

Ele não deve ser usado quando a intenção é criar um novo array a partir dos elementos.
