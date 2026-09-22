/*Crie um objeto produto com:
    nome
    preco
O objeto deve possuir um método chamado aplicarDesconto.
O método deve receber um percentual de desconto e atualizar o preço do próprio produto.
Regra de negócio: o desconto deve ser aplicado sobre o preço atual.
Exemplo de uso esperado:
    produto.aplicarDesconto(10);*/
const produto = {
  nome: "Celular",
  preco: 900,

  aplicarDesconto(desconto) {
    desconto /= 100;
    this.preco = (1 - desconto) * this.preco;
  },
  saida() {
    console.log(this);
  },
};
produto.saida();
produto.aplicarDesconto(10);
produto.saida();
