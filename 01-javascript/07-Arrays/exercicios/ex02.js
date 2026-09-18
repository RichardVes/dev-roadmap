/*Exercício 2 — Promoção de produtos
Agora vamos adicionar uma única ideia nova.
Uma loja quer criar uma lista de produtos em promoção.
Dados:
    const produtos = [
        { nome: "Notebook", preco: 3500, estoque: 10 },
        { nome: "Mouse", preco: 80, estoque: 15 },
        { nome: "Monitor", preco: 1200, estoque: 5 },
        { nome: "Teclado", preco: 250, estoque: 3 },
        { nome: "Webcam", preco: 300, estoque: 8 }
];
Regras
    A loja quer oferecer 10% de desconto apenas nos produtos que custam mais de R$ 500.
    Crie um novo array chamado:
    produtosPromocao
    Cada objeto deverá possuir:
        {
            nome: "Notebook",
            precoOriginal: 3500,
            precoFinal: 3150
        }
Importante
    Produtos com preço menor ou igual a R$ 500 não entram.
    O array original não pode ser alterado.
    precoFinal deve ser calculado com 10% de desconto.
    Você deverá combinar conhecimentos que já estudamos.
Aqui a novidade não é simplesmente "usar outro método".
A novidade é começar a pensar em dados derivados de outros dados.*/
const produtos = [
  { nome: "Notebook", preco: 3500, estoque: 10 },
  { nome: "Mouse", preco: 80, estoque: 15 },
  { nome: "Monitor", preco: 1200, estoque: 5 },
  { nome: "Teclado", preco: 250, estoque: 3 },
  { nome: "Webcam", preco: 300, estoque: 8 },
];
const desconto = 10 / 100;
const promocao = produtos.filter((produto) => produto.preco > 500);
const produtosPromocao = promocao.map((produto) => {
  return {
    nome: produto.nome,
    preo
    //preco: produto.preco - produto.preco * desconto,
    preco: produto.preco * (1 - desconto),
  };
});
console.log(produtosPromocao);
