/*Crie um objeto chamado produto que represente um produto de uma loja.
O objeto deve possuir:
    nome
    preco
    estoque
    categoria
Depois:
    Exiba o nome do produto.
    Exiba o preço.
    Altere o preço.
    Adicione uma propriedade chamada marca.
    Exiba o objeto completo.
Regra de negócio: o produto precisa continuar sendo representado por um único objeto.*/
const produto = {
  nome: "Liliana do Veu",
  preco: 52.25,
  estoque: 2,
  categoria: "Card MTG",
};

console.log(produto.nome);
console.log(produto.preco);
produto.preco = 50;
console.log(produto.preco);
produto.marca = "Wizards the Coast";
console.log(produto);
