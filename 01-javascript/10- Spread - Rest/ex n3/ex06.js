/*Desafio 6 — Sistema de pedidos
Você recebeu uma lista de pedidos de uma loja:
Crie uma função:
adicionarItens(pedido, ...novosItens)
Regras de negócio
  A função deve receber um pedido e uma quantidade variável de novos itens.
  Os novos itens devem ser adicionados sem alterar o pedido original.
  O cliente deve continuar o mesmo.
  Todos os itens antigos devem continuar no pedido.
  Os novos itens devem ser adicionados ao final da lista.
  A função deve retornar um novo objeto de pedido.
Utilize Rest para receber os novos itens.
Utilize Spread para criar o novo pedido e a nova lista de itens.
Utilize Destructuring para acessar os dados do pedido.
Não use push().*/
const pedidos = [
  {
    cliente: "João",
    itens: [
      { produto: "Teclado", preco: 150 },
      { produto: "Mouse", preco: 80 },
    ],
  },
  {
    cliente: "Maria",
    itens: [
      { produto: "Monitor", preco: 900 },
      { produto: "Mouse", preco: 80 },
    ],
  },
];
const novosItens = [
  { produto: "figure", preco: 200 },
  { produto: "sound Bar", preco: 100 },
];
function adicionarItens(pedido, ...novosItens) {
  const { cliente, itens } = pedido;
  const todosItens = [...itens, ...novosItens];

  console.log(todosItens);
  console.log("-");
}

console.log(adicionarItens(pedidos[0], ...novosItens));
