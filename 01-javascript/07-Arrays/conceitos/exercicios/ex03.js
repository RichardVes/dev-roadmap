/*Processamento de pedidos
Uma loja possui os seguintes pedidos:
const pedidos = [
  { id: 101, cliente: "Carlos", valor: 450, pago: true },
  { id: 102, cliente: "Ana", valor: 1200, pago: false },
  { id: 103, cliente: "Bruno", valor: 800, pago: true },
  { id: 104, cliente: "Daniela", valor: 300, pago: true },
  { id: 105, cliente: "Eduardo", valor: 1500, pago: false },
  { id: 106, cliente: "Fernanda", valor: 950, pago: true },
];
Regras de negócio
O sistema precisa gerar uma lista para o setor financeiro contendo somente os pedidos pagos.
Para cada pedido pago, a nova lista deve possuir:
    id
    cliente
    valor
    categoria
A categoria deve ser definida pelo valor:
    valor menor que 500 → "baixo"
    valor de 500 até 999 → "medio"
    valor 1000 ou maior → "alto"
Depois:
    Ordene a lista pelo valor, do maior para o menor.
    O array pedidos original não pode ser alterado.
    Não inclua pedidos não pagos.
    A lista final deve ser uma nova estrutura, sem modificar os objetos originais.*/
const pedidos = [
  { id: 101, cliente: "Carlos", valor: 450, pago: true },
  { id: 102, cliente: "Ana", valor: 1200, pago: false },
  { id: 103, cliente: "Bruno", valor: 800, pago: true },
  { id: 104, cliente: "Daniela", valor: 300, pago: true },
  { id: 105, cliente: "Eduardo", valor: 1500, pago: false },
  { id: 106, cliente: "Fernanda", valor: 950, pago: true },
];
const pedidosPagos = pedidos.filter((pedido) => pedido.pago === true);
//const pedidosPagos = pedidos.filter((pedido) => pedido.pago);
// const pedidosPagos = pedidos.filter((pedido) => {
//   if (pedido.pago === true) {
//     return pedido.pago;
//   }
// });

const pedidosProcessados = pedidosPagos.map((pedido) => {
  return {
    id: pedido.id,
    cliente: pedido.cliente,
    valor: pedido.valor,
    categoria:
      pedido.valor < 500 ? "baixo" : pedido.valor < 1000 ? "medio" : "alto",
  };
});
pedidosProcessados.sort((a, b) => b.valor - a.valor);
console.log(pedidosProcessados);
