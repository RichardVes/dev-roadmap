/*Considere:
const precos = [100, 250, 80, 320, 150];
Crie um novo array contendo os preços com 20% de desconto.*/
const precos = [100, 250, 80, 320, 150];
const precosComDesconto = precos.map((preco) => {
  return preco - preco * 0.2;
});
console.log(precosComDesconto);
