/*Exercício 1 — Produtos disponíveis

Você recebeu os dados de produtos de um sistema:

const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 5 },
    { nome: "Teclado", preco: 250, estoque: 3 },
    { nome: "Webcam", preco: 300, estoque: 0 }
];
Objetivo

Crie um novo array chamado produtosDisponiveis.

Esse array deve conter apenas os produtos que possuem estoque.

Além disso, cada produto do novo array deve possuir a seguinte estrutura:

{
    nome: "Notebook",
    preco: 3500,
    status: "Disponível"
}
Regras
O array produtos original não pode ser alterado.
Produtos com estoque igual a 0 não devem aparecer.
O novo array deve conter apenas nome, preco e status.
Resolva usando os conhecimentos que já estudamos.

Não vou indicar quais métodos usar. Você decide a estratégia. 😈*/

const produtos = [
  { nome: "Notebook", preco: 3500, estoque: 10 },

  { nome: "Mouse", preco: 80, estoque: 0 },

  { nome: "Monitor", preco: 1200, estoque: 5 },

  { nome: "Teclado", preco: 250, estoque: 3 },

  { nome: "Webcam", preco: 300, estoque: 0 },
];

const novosProdutos = produtos.filter((produto) => produto.estoque > 0);

const produtosDisponiveis = novosProdutos.map((produto) => {
  return {
    nome: produto.nome,

    preco: produto.preco,

    status: "Disponivel",
  };
});

console.log(produtosDisponiveis);
