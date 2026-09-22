/*map().
const pedidos = [
  { cliente: "Ana", quantidade: 2, precoUnitario: 50 },
  { cliente: "Carlos", quantidade: 5, precoUnitario: 20 },
  { cliente: "Marina", quantidade: 3, precoUnitario: 80 },
  { cliente: "João", quantidade: 10, precoUnitario: 15 },
];
Crie um novo array em que cada objeto contenha:
    cliente
    quantidade
    precoUnitario
    total
O campo total deve representar o valor total daquele pedido.
Resultado esperado:
    [
    { cliente: "Ana", quantidade: 2, precoUnitario: 50, total: 100 },
    { cliente: "Carlos", quantidade: 5, precoUnitario: 20, total: 100 },
    { cliente: "Marina", quantidade: 3, precoUnitario: 80, total: 240 },
    { cliente: "João", quantidade: 10, precoUnitario: 15, total: 150 }
    ]
Use map() e não altere pedidos.*/
const pedidos = [
  { cliente: "Ana", quantidade: 2, precoUnitario: 50 },
  { cliente: "Carlos", quantidade: 5, precoUnitario: 20 },
  { cliente: "Marina", quantidade: 3, precoUnitario: 80 },
  { cliente: "João", quantidade: 10, precoUnitario: 15 },
];
const novoPedidos = pedidos.map((pedido) => {
  return {
    cliente: pedido.cliente,
    quantidade: pedido.quantidade,
    precoUnitario: pedido.precoUnitario,
    total: pedido.quantidade * pedido.precoUnitario,
  };
});
console.log(novoPedidos);
