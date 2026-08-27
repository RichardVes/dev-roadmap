/* Desafio 04 — Sistema de pagamento
Esse será o desafio final de domínio de Operadores.
Uma loja possui estas informações:
    let valorCompra = 850;
    let saldo = 1000;
    let clienteVip = true;
    let cupomDesconto = false;
A regra do sistema é:
1. Desconto
    O cliente recebe 10% de desconto se:
    for VIP    OU     possuir cupom de desconto.
    Caso contrário, não recebe desconto.
2. Pagamento
    Depois de aplicar o desconto, o cliente poderá realizar a compra se:
    o saldo for maior ou igual ao valor final da compra
    E o valor final for maior que 0.
3. Situação
    Utilize operador ternário para determinar:
    "Compra aprovada"
    ou
    "Compra recusada"
Requisitos obrigatórios 
    Seu código precisa utilizar:
    operadores aritméticos
    comparação
    &&
    ||
    !
    += ou -=
    operador ternário
E mostrar:
    Valor original: ...
    Desconto: ...
    Valor final: ...
    Saldo restante: ...
    Situação: ... */
let valorCompra = 850;
let saldo = 1000;
let clienteVip = true;
let cupomDesconto = false;
const desconto = clienteVip || cupomDesconto ? valorCompra * 0.1 : 0;
const valorFinal = valorCompra - desconto;
let compraBloqueada = false;
const situacao =
  saldo >= valorFinal && valorFinal > 0 && !compraBloqueada
    ? "Compra aprovada"
    : "Compra recusada";
saldo -= valorFinal;
console.log("Valor original:  ", valorCompra);
console.log("Desconto: ", desconto);
console.log("Valor final: ", valorFinal);
console.log("Saldo restante: ", saldo);
console.log("Situação: ", situacao);
