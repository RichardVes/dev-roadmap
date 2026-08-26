/*Desafio 04 — Estoque
Uma loja possui um estoque de um produto.
Dados iniciais:
    Produto: Teclado
    Estoque inicial: 50 unidades
Durante o dia aconteceram:
    Venda: 12 unidades
    Reposição: 20 unidades
    Venda: 8 unidades
    Venda: 15 unidades
    Reposição: 10 unidades
Seu programa deve mostrar:
    Produto: ...
    Estoque inicial: ...
    Após venda 1: ...
    Após reposição 1: ...
    Após venda 2: ...
    Após venda 3: ...
    Após reposição 2: ...
    Estoque final: ...
Regras
    Use somente o que já estudamos:
        const
        let
        +
        -
        *
        /
        +=
        -=
        console.log()*/
const produto = "teclado";
let estoque_produto = 50;
console.log("Produto: ", produto);
console.log("Estoque: ", estoque_produto);
estoque_produto -= 12;
console.log("Após venda 1: ", estoque_produto);
estoque_produto += 20;
console.log("Após reposição 1: ", estoque_produto);
estoque_produto -= 8;
console.log("Após venda 2: ", estoque_produto);
estoque_produto -= 15;
console.log("Após venda 3: ", estoque_produto);
estoque_produto += 10;
console.log("Após reposição 2: ", estoque_produto);
console.log("Estoque final: ", estoque_produto);
