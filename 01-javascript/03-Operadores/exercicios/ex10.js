/*Exercício 10 — Misturando tudo
Agora um exercício mais próximo de uma aplicação real.
Uma conta bancária começa com:
let saldo = 2500;
Faça:
depósito de 800
saque de 350
saque de 120
depósito de 500
Utilize os operadores de atribuição adequados.
Depois crie:
let saldoMinimo = 3000;
e uma variável:
let saldoAdequado = ...
que seja true quando o saldo for maior ou igual a saldoMinimo.
Por fim, utilizando ternário, produza:
"Saldo adequado"
ou:
"Saldo abaixo do mínimo"*/
let saldo = 2500;

saldo += 800;
saldo -= 350;
saldo -= 120;
saldo += 500;
let saldoMinimo = 3000;
let saldoAdequado =
  saldo >= saldoMinimo ? "Saldo adequado" : "Saldo abaixo do mínimo";
console.log(saldoAdequado);
