/*map() com objetos
Agora vamos sair do exemplo matemático e usar o mesmo tipo de dado que você acabou de trabalhar:
const pedidos = [
  { cliente: "Ana", valor: 150 },
  { cliente: "Carlos", valor: 80 },
  { cliente: "Marina", valor: 220 },
  { cliente: "João", valor: 50 },
  { cliente: "Pedro", valor: 300 },
];
Crie um novo array contendo apenas os nomes dos clientes.
Resultado esperado:
["Ana", "Carlos", "Marina", "João", "Pedro"]
Use map().
Sem forEach() e sem alterar o array pedidos.*/
const pedidos = [
  { cliente: "Ana", valor: 150 },
  { cliente: "Carlos", valor: 80 },
  { cliente: "Marina", valor: 220 },
  { cliente: "João", valor: 50 },
  { cliente: "Pedro", valor: 300 },
];
const nome = pedidos.map((pedido) => {
  return pedido.cliente;
});
console.log(nome);
