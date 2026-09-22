/*Exercício — Contando produtos
Regras
Usando somente forEach():
conte quantos produtos custam mais de R$ 500;
ao final, mostre a quantidade encontrada.
*/
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Cadeira", preco: 900 },
];
let total = 0;
produtos.forEach((produto) => {
  if (produto.preco > 500) {
    total++;
  }
});
console.log(total);
