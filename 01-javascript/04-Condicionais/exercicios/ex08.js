/*Exercício 08 — Sistema de pagamento
Um sistema recebe:
    valor da compra;
    forma de pagamento.
As formas aceitas são:
    "pix" → 10% de desconto
    "debito" → 5% de desconto
    "credito" → sem desconto
    "boleto" → 3% de desconto
Caso a forma de pagamento seja inválida, o sistema deve informar "Forma de pagamento inválida".
O programa deve apresentar o valor final da compra.
Utilize switch para resolver.*/

//"pix" → 10% de desconto
//"debito" → 5% de desconto
//"credito" → sem desconto
//"boleto" → 3% de desconto

const formaPagamento = "boleto";
const valorCompra = 1000;
let valortotal = 0;
const descontPix = 0.1;
const descontDebito = 0.05;
const descontCredito = 0;
const descontBoleto = 0.03;
let desconto = 0;

switch (formaPagamento) {
  case "pix":
    desconto = valorCompra * descontPix;
    valortotal = valorCompra - desconto;
    console.log("Valor da compra: ", valorCompra);
    console.log("Valor do desconto: ", desconto);
    console.log("Valor final da compra com desconto: ", valortotal);
    break;

  case "debito":
    desconto = valorCompra * descontDebito;
    valortotal = valorCompra - desconto;
    console.log("Valor da compra: ", valorCompra);
    console.log("Valor do desconto: ", desconto);
    console.log("Valor final da compra com desconto: ", valortotal);
    break;

  case "credito":
    desconto = valorCompra * descontCredito;
    valortotal = valorCompra - desconto;
    console.log("Valor da compra: ", valorCompra);
    console.log("Valor do desconto: ", desconto);
    console.log("Valor final da compra com desconto: ", valortotal);
    break;

  case "boleto":
    desconto = valorCompra * descontBoleto;
    valortotal = valorCompra - desconto;
    console.log("Valor da compra: ", valorCompra);
    console.log("Valor do desconto: ", desconto);
    console.log("Valor final da compra com desconto: ", valortotal);
    break;
  default:
    console.log("Forma de pagamento inválida");
    break;
}
