/*Desafio 02 — Sistema de aprovação

Uma universidade possui o seguinte sistema:

let nota1 = 7.5;
let nota2 = 6.0;
let frequencia = 82;

O aluno será aprovado somente se:

a média das duas notas for maior ou igual a 7
E a frequência for maior ou igual a 75%

Caso contrário, deverá ser considerado reprovado.

Além disso, utilize o operador ternário para produzir a situação.

O programa deve exibir:

Média: ...
Frequência: ...%
Situação: ...

Requisitos obrigatórios
Use:
    operador aritmético para calcular a média;
    operador de comparação;
    &&;
    operador ternário.*/

let nota1 = 7.5;
let nota2 = 6.0;
let frequencia = 82;
const media = (nota1 + nota2) / 2;

const situacao = media >= 7 && frequencia >= 75 ? "Aprovado" : "Reprovado";
console.log("Média: ", media);
console.log("Frequência: ", frequencia + " %");
console.log("Situação: ", situacao);
