// const resultado = produtos.filter((produto) => {
//     return produto.preco > 500;
// });

/*exercício — um pouco mais difícil
Agora vamos usar filter() com duas condições.
Regras
    Crie um novo array contendo somente produtos que:
    possuem estoque disponível E
    custam mais de R$ 500.
Use somente filter() para fazer a seleção.*/
const produtos = [
  { nome: "Notebook", preco: 3500, estoque: 5 },
  { nome: "Mouse", preco: 80, estoque: 20 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 1200, estoque: 3 },
  { nome: "Cadeira", preco: 900, estoque: 0 },
  { nome: "Headset", preco: 300, estoque: 8 },
];
const produtosFiltrados = produtos.filter((produto) => {
  return produto.estoque > 0 && produto.preco > 500;
});
console.log(produtosFiltrados);
