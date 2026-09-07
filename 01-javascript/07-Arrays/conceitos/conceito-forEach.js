/*forEach() — aplicação real
Imagine um sistema que recebe uma lista de pedidos:
const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 80, pago: false },
    { cliente: "Marina", valor: 220, pago: true },
    { cliente: "João", valor: 50, pago: false },
    { cliente: "Pedro", valor: 300, pago: true }
];
Você precisa gerar um relatório financeiro.
🧪 Desafio
    Utilizando forEach(), faça um programa que:
    Calcule o valor total de todos os pedidos.
    Calcule o valor total somente dos pedidos pagos.
    Calcule o valor total somente dos pedidos não pagos.
    Conte quantos pedidos foram pagos.
    Conte quantos pedidos não foram pagos.
    Ao final, exiba todas essas informações.*/
const pedidos = [
  { cliente: "Ana", valor: 150, pago: true },
  { cliente: "Carlos", valor: 80, pago: false },
  { cliente: "Marina", valor: 220, pago: true },
  { cliente: "João", valor: 50, pago: false },
  { cliente: "Pedro", valor: 300, pago: true },
];
let valor = 0;
let contadorPago = 0;
let contadorNaoPago = 0;
let valorPago = 0;
let valorNaoPago = 0;
pedidos.forEach((pedido) => {
  valor = valor + pedido.valor;
  if (pedido.pago === true) {
    valorPago = valorPago + pedido.valor;
    contadorPago += 1;
  } else {
    valorNaoPago = valorNaoPago + pedido.valor;
    contadorNaoPago += 1;
  }
});
console.log(
  `---PEDIDOS---
  Total de pedidos ${contadorPago + contadorNaoPago}
  Valor total ${valor}
  Total de pedidos pagos ${contadorPago}
  Valo Pago total ${valorPago}
  Total de pedidos Não pagos ${contadorNaoPago}
  Valor Nao Pago ${valorNaoPago}`,
);
