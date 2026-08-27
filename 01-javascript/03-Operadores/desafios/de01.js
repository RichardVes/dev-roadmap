/*Desafio 01 — Sistema de conta bancária
Crie um programa que comece com:
    let saldo = 2500;
    let limite = 1000;
Faça exatamente estas operações:
    Depósito de 800
    Saque de 350
    Saque de 120
    Depósito de 500
Depois, determine se a conta está em uma situação "Conta saudável" ou "Conta em atenção".
A conta será considerada saudável somente se:
    o saldo for maior ou igual a 3000 E
    o saldo estiver dentro do limite permitido.
Considere que o limite permitido é:
    saldo >= -limite
Use obrigatoriamente:
    += e -=
    &&
    comparação
    operador ternário
No final, mostre no console:
    Saldo final: ...
    Situação: ...*/

let saldo = 2500;
let limite = 1000;
saldo += 800;
saldo -= 350;
saldo -= 120;
saldo += 500;
const situacao =
  saldo >= 3000 && saldo >= -limite ? "Conta saudável" : "Conta em atenção";
console.log("Saldo final: ", saldo);
console.log("Situação: ", situacao);
