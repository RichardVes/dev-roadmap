/* Desafio 06 — Controle de vendas
Uma loja precisa calcular o resultado de uma venda.
Dados:
    Produto: "Monitor"
    Preço unitário: 1200
    Quantidade vendida: 3
    Desconto: 150
    Frete: 80
O programa deve calcular e mostrar:
    Produto: ...
    Preço unitário: ...
    Quantidade: ...
    Subtotal: ...
    Desconto: ...
    Frete: ...
    Total da compra: ...*/

const produto = "Monitor";
const precoUnitario = 1200;
const quantidadeVendida = 3;
const desconto = 150;
const frete = 80;

console.log("Produto: ", produto);
console.log("Preço unitário: ", precoUnitario);
console.log("Quantidade: ", quantidadeVendida);
const subtotal = precoUnitario * quantidadeVendida;
console.log("Subtotal: ", subtotal);
console.log("Desconto: ", desconto);
console.log("Frete: ", frete);
const valorTotal = subtotal - desconto + frete;
console.log("Total da compra: ", valorTotal);
