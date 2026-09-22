# Arrays — Percorrendo arrays

## Resumo rápido

| Forma       | Percorre  | Acesso ao índice                  |
| ----------- | --------- | --------------------------------- |
| `for`       | Elementos | Sim                               |
| `for...of`  | Valores   | Não diretamente                   |
| `for...in`  | Índices   | Sim                               |
| `forEach()` | Elementos | Sim, através do segundo parâmetro |

### Decore

```text
for       → controle completo
for...of  → valores
for...in  → índices
forEach   → ação para cada elemento
```

## for

Usado para percorrer um array utilizando o **índice**.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

O `for` é útil quando precisamos controlar o índice ou a quantidade de repetições.

---

## for...of

Percorre diretamente os **valores** do array.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

Não precisamos trabalhar diretamente com índices.

---

## for...in

Percorre os **índices** do array.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

for (const indice in frutas) {
  console.log(indice);
}
```

Resultado:

```text
0
1
2
```

Para acessar o valor:

```js
for (const indice in frutas) {
  console.log(frutas[indice]);
}
```

> Para arrays, `for...of` geralmente é mais adequado quando queremos percorrer os valores.

---

## forEach()

Executa uma função para **cada elemento** do array.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach((fruta) => {
  console.log(fruta);
});
```

Também podemos receber o índice:

```js
frutas.forEach((fruta, indice) => {
  console.log(indice, fruta);
});
```

O `forEach()` é muito utilizado quando queremos executar uma ação para cada elemento.

---
