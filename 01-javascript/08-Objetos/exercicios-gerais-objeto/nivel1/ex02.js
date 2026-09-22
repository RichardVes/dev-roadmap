/*Crie um objeto produto com:
    nome
    estoque
    preco
Depois crie um código que:
    Adicione 10 unidades ao estoque.
    Exiba o novo estoque.
    Reduza 3 unidades do estoque.
    Exiba novamente o estoque.
Regra de negócio: o estoque nunca pode ser alterado diretamente 
para um valor fixo. As alterações devem considerar o valor atual.*/
const produto = {
  nome: "Card",
  estoque: 10,
  preco: 30.99,
  adicionarEstoque(quantidade) {
    this.estoque += quantidade;
  },
  exibirEstoque() {
    console.log(this.estoque);
  },
  reduzirEstoque(quantidade) {
    this.estoque -= quantidade;
  },
};
produto.adicionarEstoque(10);
produto.exibirEstoque();
produto.reduzirEstoque(3);
produto.exibirEstoque();
