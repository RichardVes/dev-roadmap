/*Exercícios
1. Positivos
const numeros = [-5, 10, -2, 20, 0, 15];

Filtre apenas os números positivos.

2. Maiores de idade
const idades = [15, 18, 22, 16, 30, 17];

Filtre apenas maiores ou iguais a 18.

3. Produtos com desconto
const vendas = [
  { produto: "Notebook", desconto: 10 },
  { produto: "Mouse", desconto: 0 },
  { produto: "Monitor", desconto: 15 },
  { produto: "Teclado", desconto: 5 }
];

Filtre apenas produtos que possuem desconto.*/

//--1--
const numeros = [-5, 10, -2, 20, 0, 15];
const numerosPares = numeros.filter((numero) => numero > 0);
//console.log(numerosPares);

//--2--
const idades = [15, 18, 22, 16, 30, 17];
const menor = idades.filter((idade) => idade >= 18);
//console.log(menor);

//--3--
const vendas = [
  { produto: "Notebook", desconto: 10 },
  { produto: "Mouse", desconto: 0 },
  { produto: "Monitor", desconto: 15 },
  { produto: "Teclado", desconto: 5 },
];
const produto = vendas.filter((venda) => venda.desconto > 0);
//console.log(produto);

//--4--
/*Exercício 4 — Duas condições
const produtos = [
  { nome: "Notebook", preco: 3500, estoque: 10 },
  { nome: "Mouse", preco: 80, estoque: 20 },
  { nome: "Monitor", preco: 1200, estoque: 0 },
  { nome: "Teclado", preco: 250, estoque: 5 },
  { nome: "Webcam", preco: 450, estoque: 8 }
];
Use filter() para retornar apenas produtos que:
custam mais de R$ 200
e possuem estoque maior que 0
*/
const produtos = [
  { nome: "Notebook", preco: 3500, estoque: 10 },
  { nome: "Mouse", preco: 80, estoque: 20 },
  { nome: "Monitor", preco: 1200, estoque: 0 },
  { nome: "Teclado", preco: 250, estoque: 5 },
  { nome: "Webcam", preco: 450, estoque: 8 },
];
const produtosNovos = produtos.filter((produto) => {
  return produto.preco > 200 && produto.estoque > 0;
});

console.log(produtosNovos);
