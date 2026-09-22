# Arrays — Manipulação básica

## Resumo rápido

| Método       | Ação(Para que serve)             | Retorno               |
| ------------ | -------------------------------- | --------------------- |
| `slice()`    | Copia parte                      | Não altera o original |
| `splice()`   | Adicionar, remover ou substituir | Elementos removidos   |
| `includes()` | Verificar se existe              | `true` ou `false`     |
| `indexOf()`  | Descobrir a posição              | Índice ou `-1`        |

## slice()

Cria uma **cópia de uma parte do array**, sem alterar o array original.

Sintaxe:

```js
array.slice(inicio, fim);
```

O índice `fim` **não é incluído**.

```js
const frutas = ["Maçã", "Banana", "Laranja", "Morango"];

const selecionadas = frutas.slice(1, 3);
```

Resultado:

```text
["Banana", "Laranja"]
```

O array original continua:

```text
["Maçã", "Banana", "Laranja", "Morango"]
```

### Regra rápida

```text
slice(inicio, fim)
           ↑
      fim não entra
```

---

## splice()

Adiciona, remove ou substitui elementos **diretamente no array original**.

Sintaxe:

```js
array.splice(inicio, quantidade, elementos);
```

### Remover elementos

```js
const frutas = ["Maçã", "Banana", "Laranja", "Morango"];

frutas.splice(1, 2);
```

Resultado:

```text
["Maçã", "Morango"]
```

Começa no índice `1` e remove `2` elementos.

### Adicionar elementos

```js
const frutas = ["Maçã", "Laranja"];

frutas.splice(1, 0, "Banana");
```

Resultado:

```text
["Maçã", "Banana", "Laranja"]
```

### Substituir elementos

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.splice(1, 1, "Morango");
```

Resultado:

```text
["Maçã", "Morango", "Laranja"]
```

---

## includes()

Verifica se um valor existe no array.

Retorna `true` ou `false`.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.includes("Banana");
```

Resultado:

```text
true
```

Quando o valor não existe:

```js
frutas.includes("Morango");
```

Resultado:

```text
false
```

### Resumo

```text
includes() → verifica se o valor existe
retorno    → true ou false
```

---

## indexOf()

Procura um valor no array e retorna o **índice da primeira ocorrência**.

```js
const frutas = ["Maçã", "Banana", "Laranja"];

frutas.indexOf("Banana");
```

Resultado:

```text
1
```

Quando o valor não existe, retorna `-1`.

```js
frutas.indexOf("Morango");
```

Resultado:

```text
-1
```

### Resumo

```text
indexOf() → procura um valor
retorno   → índice encontrado
           -1 se não encontrar
```

---
