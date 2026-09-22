# Arrays — adicionar e remover itens

## Resumo rápido

| Método      | Ação     | Posição |
| ----------- | -------- | ------- |
| `push()`    | Adiciona | Final   |
| `pop()`     | Remove   | Final   |
| `shift()`   | Remove   | Início  |
| `unshift()` | Adiciona | Início  |

## push()

Adiciona um ou mais elementos **no final** do array.

```js
const frutas = ["Maçã", "Banana"];

frutas.push("Laranja");
```

Resultado:

```js
["Maçã", "Banana", "Laranja"];
```

---

## pop()

Remove o **último elemento** do array.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.pop();
```

Resultado:

```js
["Maçã", "Banana"];
```

Retorna o elemento removido.

---

## shift()

Remove o **primeiro elemento** do array.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.shift();
```

Resultado:

```js
["Banana", "Laranja"];
```

Retorna o elemento removido.

---

## unshift()

Adiciona um ou mais elementos **no início** do array.

```js
const frutas = ["Banana", "Laranja"];

frutas.unshift("Maçã");
```

Resultado:

```js
["Maçã", "Banana", "Laranja"];
```

Retorna a nova quantidade de elementos do array.

---
