/*Exercício 06 — OU
Uma loja oferece desconto se o cliente:
    tiver cupom OU
    for cliente VIP.
Temos:
    let possuiCupom = false;
    let clienteVip = true;
Crie:
    let temDesconto = ...
    usando ||.
Qual será o resultado?
Depois teste:
    let possuiCupom = false;
    let clienteVip = false;*/

let possuiCupom = false;
let clienteVip = true;

let temDesconto = possuiCupom || clienteVip;
console.log("Saida: ", temDesconto);
