/* Desafio 01 
Imagine: Uma loja possui um produto que custa R$ 80. O cliente comprou 3 unidades. A loja concede R$ 20 de desconto no total da compra.
Seu programa deve mostrar:
    Produto: ...
    Preço: ...
    Quantidade: ...
    Subtotal: ...
    Desconto: ...
    Total: ...*/

const produto = "Prego";
let preco = 80.0;
let qtd = 3;
let desconto = 20;
let subtotal = preco* qtd;
let total = subtotal - desconto;
console.log("O Valor final da compra do ",produto+" é ",total);