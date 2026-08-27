/* Exercício 01 — Operações básicas
Crie um programa que tenha:
    let a = 20;
    let b = 6;
Calcule e mostre:
    soma
    subtração
    multiplicação
    divisão
    resto da divisão
    a elevado a b
Resultado esperado:
    Soma: 26
    Subtração: 14
    Multiplicação: 120
    Divisão: 3.3333333333333335
    Resto: 2
    Potência: 64000000 */

let a = 20;
let b = 6;
const soma = a + b;
const subtracao = a - b;
const multiplicação = a * b;
const divisao = a / b;
const resto = a % b;
const potencia = a ** b;

console.log("Soma: ", soma);
console.log("Subtração: ", subtracao);
console.log("Multiplicação: ", multiplicação);
console.log("Divisão: ", divisao);
console.log("Resto: ", resto);
console.log("Potência: ", potencia);
