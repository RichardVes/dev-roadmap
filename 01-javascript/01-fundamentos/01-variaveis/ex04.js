/* Exercício
Crie um programa que represente uma conta bancária.
Comece com:
    saldo = 2500
Depois faça exatamente estas operações:
    depósito de 800
    saque de 350
    saque de 120
    depósito de 500
No final, mostre:
    Saldo inicial: ...
    Depósito 1: ...
    Saque 1: ...
    Saque 2: ...
    Depósito 2: ...
    Saldo final: ... */

let saldo = 2500;
saldo +=800;
saldo -=350;
saldo -=120;
saldo +=500;
console.log(
    "Saldo inicia 2500 \n"+
    "Depósito 1: 800 \n"+
    "Saque 1: 350 \n"+
    "Saque 2: 120 \n"+
    "Depósito 2: 500 \n"+
    "Saldo final:",saldo
);