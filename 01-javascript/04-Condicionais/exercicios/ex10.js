/*Exercício 10 — Desafio

Um sistema de estacionamento calcula o valor a pagar conforme o tempo de permanência:

Até 1 hora → R$ 5
Mais de 1 até 3 horas → R$ 10
Mais de 3 até 6 horas → R$ 15
Mais de 6 horas → R$ 20

Regras adicionais:

Tempo igual a 0 ou negativo → Tempo inválido
O tempo será informado em horas.
O sistema deve informar o valor a pagar.

Resolva utilizando if/else.*/

const tempoGasto = -1;
const valorAte1 = 5;
const valorAte3 = 10;
const valorAte6 = 15;
const valorMais6 = 20;

if (tempoGasto <= 0) {
  console.log("Tempo inválido");
} else if (tempoGasto <= 1) {
  console.log("Valor a pagar: ", valorAte1);
} else if (tempoGasto <= 3) {
  console.log("Valor a pagar: ", valorAte3);
} else if (tempoGasto <= 6) {
  console.log("Valor a pagar: ", valorAte6);
} else if (tempoGasto > 6) {
  console.log("Valor a pagar: ", valorMais6);
}
