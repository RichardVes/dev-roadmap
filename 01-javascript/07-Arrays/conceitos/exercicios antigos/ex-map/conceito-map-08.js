/*() com condição + cálculo
Considere:
const produtos = [
  { nome: "Teclado", preco: 100, estoque: 10 },
  { nome: "Mouse", preco: 50, estoque: 0 },
  { nome: "Monitor", preco: 800, estoque: 5 },
  { nome: "Headset", preco: 200, estoque: 2 },
];
Crie um novo array em que cada objeto contenha:
    nome
    preco
    estoque
    precoFinal
    situacao
Regras:
    Se o estoque for maior que 0, situacao deve ser "Disponível".
    Se o estoque for 0, situacao deve ser "Esgotado".
    Se o preço for maior ou igual a 200, aplique 10% de desconto no precoFinal.
    Para preços menores que 200, o precoFinal deve permanecer igual ao preço original.
O array original não deve ser alterado.*/
const produtos = [
  { nome: "Teclado", preco: 100, estoque: 10 },
  { nome: "Mouse", preco: 50, estoque: 0 },
  { nome: "Monitor", preco: 800, estoque: 5 },
  { nome: "Headset", preco: 200, estoque: 2 },
];
const novoProdutos = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: produto.preco,
    estoque: produto.estoque,
    precoFinal:
      produto.preco >= 200
        ? produto.preco - produto.preco * 0.1
        : produto.preco,
    situacao:
      produto.estoque === 0
        ? "Esgotado"
        : produto.estoque > 0
          ? "Disponível"
          : "Estoque Invalido",
  };
});
console.log(novoProdutos);
