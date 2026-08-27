/*Exercício 04 — Condicional composta

Uma loja possui três categorias de cliente:

"comum" → sem desconto
"vip" → 10% de desconto
"premium" → 20% de desconto

O programa deve receber a categoria e o valor da compra e informar o valor final da compra após o desconto.

Caso a categoria informada não exista, informe "Categoria inválida".*/

//"comum" → sem desconto
//"vip" → 10% de desconto
//"premium" → 20% de desconto

const categoria = "comum";
const descontoComum = 0;
const descontoVip = 0.1;
const descontoPremium = 0.2;

let valorCompra = 1000;

if (categoria == "comum") {
  valorCompra = valorCompra - valorCompra * descontoComum;
  console.log("Valor da compra com desconto: ", valorCompra);
} else if (categoria == "vip") {
  valorCompra = valorCompra - valorCompra * descontoVip;
  console.log("Valor da compra com desconto: ", valorCompra);
} else if (categoria == "premium") {
  valorCompra = valorCompra - valorCompra * descontoPremium;
  console.log("Valor da compra com desconto: ", valorCompra);
} else {
  console.log("Categoria invalida");
}
