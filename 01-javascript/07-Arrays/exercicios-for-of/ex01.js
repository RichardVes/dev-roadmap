/*Você recebeu uma lista de produtos e precisa verificar quais estão disponíveis para venda.
Regra de negócio
Percorra o array utilizando for...of e mostre apenas o nome dos produtos que possuem estoque maior que zero.*/
const produtos = [
  { nome: "Notebook", estoque: 5 },
  { nome: "Mouse", estoque: 0 },
  { nome: "Teclado", estoque: 3 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Headset", estoque: 8 },
];
function comEstoque() {
  const disponiveis = [];
  for (const produto of produtos) {
    if (produto.estoque > 0) {
      disponiveis.push(produto);
    }
  }
  return disponiveis;
}
console.log(comEstoque());
