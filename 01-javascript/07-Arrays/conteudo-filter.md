filter()
O que é?

filter() cria um novo array contendo apenas os elementos que atendem a uma condição.

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares);

Resultado:

[2, 4, 6]
Como funciona?

Para cada elemento, a função precisa retornar:

true

ou

false
true → elemento entra no novo array.
false → elemento fica fora.
Sintaxe
array.filter(elemento => condição);
Exemplo com números
const numeros = [10, 5, 20, 3, 15];

const maioresQueDez = numeros.filter(numero => numero > 10);

console.log(maioresQueDez);

Resultado:

[20, 15]
Exemplo com objetos
const produtos = [
{ nome: "Mouse", preco: 80 },
{ nome: "Monitor", preco: 1200 },
{ nome: "Teclado", preco: 250 }
];

const caros = produtos.filter(produto => produto.preco > 200);

console.log(caros);
Múltiplas condições
const produtos = [
{ nome: "Mouse", preco: 80, estoque: 10 },
{ nome: "Monitor", preco: 1200, estoque: 5 },
{ nome: "Teclado", preco: 250, estoque: 0 }
];

const resultado = produtos.filter(produto =>
produto.preco > 100 &&
produto.estoque > 0
);
