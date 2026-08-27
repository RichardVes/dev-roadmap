/*Exercício 08 — Par ou ímpar
Crie um programa que tenha:
    let numero = 37;
Utilize % para descobrir se o número é par.
A expressão deverá produzir:
    false
Depois altere para:
    let numero = 42;
e deverá produzir:
    true
Não vale usar if ainda.*/
let numero = 37;
parOuImpar = numero % 2 ? "IMPAR" : "PAR";
//const ehPar = numero % 2 === 0;
propriedadeNumerica = numero % 2;
console.log("O Numero é par ? ", parOuImpar);
console.log("O Numero é par ? ", propriedadeNumerica == false);
