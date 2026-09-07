/*Desafio de map()
const vendas = [
  { produto: "Notebook", quantidade: 2, preco: 3500, desconto: 10 },
  { produto: "Mouse", quantidade: 5, preco: 80, desconto: 0 },
  { produto: "Monitor", quantidade: 3, preco: 1200, desconto: 15 },
  { produto: "Teclado", quantidade: 4, preco: 250, desconto: 5 },
];
Crie um novo array chamado vendasProcessadas.
Cada objeto deve possuir:
    produto
    quantidade
    preco
    desconto
    subtotal
    valorDesconto
    total
Regras:
    subtotal = quantidade × preço
    valorDesconto = percentual de desconto aplicado sobre o subtotal
    total = subtotal − valorDesconto
    O array original vendas não pode ser alterado.
    Utilize map().
Não precisa arredondar os valores.*/
const vendas = [
  { produto: "Notebook", quantidade: 2, preco: 3500, desconto: 10 },
  { produto: "Mouse", quantidade: 5, preco: 80, desconto: 0 },
  { produto: "Monitor", quantidade: 3, preco: 1200, desconto: 15 },
  { produto: "Teclado", quantidade: 4, preco: 250, desconto: 5 },
];
// const vendasProcessadas = vendas.map((venda) => {
//   return {
//     produto: venda.produto,
//     quantidade: venda.quantidade,
//     preco: venda.preco,
//     desconto: venda.desconto,
//     subtotal: venda.quantidade * venda.preco,
//     valorDesconto: (venda.desconto / 100) * venda.quantidade * venda.preco,
//     total:
//       venda.quantidade * venda.preco -
//       (venda.desconto / 100) * venda.quantidade * venda.preco,
//   };
// });

const vendasProcessadas = vendas.map((venda) => {
  const subtotal = venda.quantidade * venda.preco;
  const valorDesconto = (venda.desconto / 100) * subtotal;
  const total = subtotal - valorDesconto;

  return {
    produto: venda.produto,
    quantidade: venda.quantidade,
    preco: venda.preco,
    desconto: venda.desconto,
    subtotal,
    valorDesconto,
    total,
  };
});

console.log(vendasProcessadas);
