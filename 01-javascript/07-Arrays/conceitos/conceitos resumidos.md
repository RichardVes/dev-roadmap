# Arrays

## Objetivo do módulo

Aprender a trabalhar com coleções de dados em JavaScript, percorrendo, transformando, filtrando, buscando, ordenando e agregando informações.

## O que é um Array?

Um array é uma estrutura que permite armazenar vários valores em uma única variável.

```js
const nomes = ["Ana", "João", "Maria", "Carlos"];
```

Cada elemento ocupa uma posição identificada por um índice.

- Os índices começam em 0.
- Índice 0 → primeiro elemento
- Índice 1 → segundo elemento
- Índice 2 → terceiro elemento

## Criando Arrays

### Array vazio

const lista = [];

### Array com strings

const frutas = ["Maçã", "Banana", "Laranja"];

### Array com números

const numeros = [10, 20, 30, 40];

### Array com booleanos

const respostas = [true, false, true];

### Array misto

JavaScript permite diferentes tipos de dados no mesmo array.

```js
const dados = ["Richard", 30, true, null];
```

Em aplicações reais, normalmente é melhor manter elementos do mesmo tipo ou estrutura.

### Acessando elementos

Utilizamos [] com o índice:

```js
frutas[0];
```

O índice começa em 0.

### Atenção ao índice

Se o índice não existir, o resultado será undefined.

```js
frutas[3]; // undefined
```

### Alterando elementos

Mesmo declarado com const, o conteúdo de um array pode ser alterado:

```js
frutas[1] = "Uva";
```

Porém, não é possível atribuir um novo array à mesma variável:

```js
const frutas = ["Maçã", "Banana"];

frutas = ["Uva", "Manga"]; // não permitido
```

Esse comportamento está relacionado aos conceitos de referência e mutabilidade.

### Propriedade length

A propriedade length informa a quantidade de elementos do array.

```js
const numeros = [10, 20, 30, 40];

numeros.length; // 4
```

## Percorrendo Arrays

### forEach();

Executa uma ação para cada elemento do array.

```js
jogos.forEach((jogo) => {
  console.log(jogo);
});
```

### Conceito

Para cada elemento do array, a função é executada.

O forEach() elimina a necessidade de controlar manualmente:

- índice;
- incremento;
- condição de parada.

### Ponto importante

forEach() não cria automaticamente um novo array.

### Adicionar e Remover Elementos

Os quatro métodos básicos são:

- push()
- pop()
- shift()
- unshift()

Esses métodos modificam o próprio array.

### push()

Adiciona elemento(s) no final do array.

```js
frutas.push("Uva");
```

Modifica o array original.

### pop()

Remove o último elemento do array.

```js
const removido = frutas.pop();
```

Além de modificar o array, retorna o elemento removido.

### shift()

Remove o primeiro elemento do array.

```js
const removido = frutas.shift();
```

### unshift()

Adiciona elemento(s) no início do array.

```js
frutas.unshift("Uva");
```

## Resumo dos quatro métodos

| Método    | Ação     | Posição |
| --------- | -------- | ------- |
| push()    | Adiciona | Final   |
| pop()     | Remove   | Final   |
| shift()   | Remove   | Início  |
| unshift() | Adiciona | Início  |

## splice()

Permite remover, adicionar ou substituir elementos em qualquer posição do array.

### Sintaxe

array.splice(inicio, quantidade);

### Remover

frutas.splice(1, 2);

Significa:

- começar no índice 1;
- remover 2 elementos.

### Adicionar

frutas.splice(2, 0, "Uva");

Significa:

- começar no índice 2;
- remover 0 elementos;
- adicionar "Uva".

### Substituir

frutas.splice(1, 1, "Uva");

Remove o elemento do índice 1 e coloca "Uva" no mesmo lugar.

### Conceito fundamental

splice() altera o array original.

## slice()

Extrai uma parte de um array e retorna um novo array.

### Sintaxe

array.slice(inicio, fim);

- inicio → índice inicial da extração.
- fim → índice final.
- O índice fim não é incluído.

### Diferença importante

- slice() → extrai uma parte → NÃO altera o original
- splice() → modifica o array → ALTERA o original

## find()

Usado para encontrar um único elemento que atende a uma condição.

const resultado = numeros.find(numero => numero > 25);

### Conceito

find() retorna o primeiro elemento que atende à condição.

Diferença para filter()

- find() → retorna um elemento.
- filter() → retorna um novo array com os elementos encontrados.

## map()

Usado para transformar os elementos de um array.

const dobro = numeros.map(numero => numero \* 2);

### Conceito principal

Array original
↓
map()
↓
Novo array

Cada elemento do array original gera exatamente um elemento no novo array.

Se o array possui 3 elementos, o resultado do map() terá 3 elementos.

### O return define a transformação

Pode retornar:

- string;
- number;
- object;
  qualquer outro valor.

Exemplo:

return pedido.cliente;

Transforma objetos em strings.

Também é possível transformar um objeto em outro:

```js
return {
  cliente: pedido.cliente,
  valor: pedido.valor,
};
```

### Cálculos durante a transformação

O map() pode gerar novas informações calculadas a partir dos dados existentes.

```js
return {
nome: produto.nome,
preco: produto.preco \* 1.10
};
```

### Ponto fundamental

map() cria um novo array e não altera o array original.

## reduce()

Usado para reduzir um array a um único resultado.

```js
Exemplo clássico: somar valores.

const total = numeros.reduce((acumulador, numero) => {
return acumulador + numero;
}, 0);
```

### Conceito principal

Array → reduce() → um único resultado

O acumulador mantém o resultado parcial enquanto o array é percorrido.

## filter()

Cria um novo array contendo apenas os elementos que atendem a uma condição.

```js
const pares = numeros.filter((numero) => numero % 2 === 0);
```

### Como funciona

A função deve retornar:

- true → elemento entra no novo array.
- false → elemento fica fora.

### Sintaxe

array.filter(elemento => condição);

### Com objetos

A condição pode utilizar propriedades dos objetos:

const caros = produtos.filter(produto => produto.preco > 200);

### Múltiplas condições

Podemos combinar condições:

const resultado = produtos.filter(produto =>
produto.preco > 100 &&
produto.estoque > 0
);

### Conceito fundamental

filter() pode produzir um array com menos elementos que o original.

## sort()

Usado para reorganizar os elementos de um array.

### **Strings**

nomes.sort();

Por padrão, strings são ordenadas lexicograficamente, em uma ordem semelhante à de um dicionário.

Conceito importante

sort() modifica o próprio array original.
