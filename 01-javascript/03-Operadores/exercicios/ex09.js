/*Exercício 09 — Ternário

Temos:

let idade = 16;

Utilizando somente o operador ternário, crie:

let mensagem = ...

que produza:

"Maior de idade"

quando idade >= 18, e:

"Menor de idade"

caso contrário.

Depois teste com:

let idade = 25;*/

let idade = 25;
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem);
