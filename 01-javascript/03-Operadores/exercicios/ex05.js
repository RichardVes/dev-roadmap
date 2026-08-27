/*Exercício 05 — Lógica de acesso
Temos:
    let idade = 22;
    let possuiIngresso = true;
Uma pessoa pode entrar no evento somente se:
    tiver 18 anos ou mais
    E
    possuir ingresso.
Crie uma variável:
    let podeEntrar = ...
    usando &&.
O resultado deve ser:
    true
Depois teste mentalmente este cenário:
    let idade = 17;
    let possuiIngresso = true;
Qual será o resultado?*/

let idade = 22;
let possuiIngresso = true;

let podeEntrar = idade >= 18 && possuiIngresso;
console.log("Qual será o resultado?\n Saida: ", podeEntrar);
