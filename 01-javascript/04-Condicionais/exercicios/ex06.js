/*Exercício 06 — if/else + operador lógico

Um sistema de acesso a uma área restrita deve verificar três informações:

    idade do usuário;
    se ele é funcionário;
    se ele possui autorização especial.

As regras são:

    Menores de 18 anos → Acesso negado
    Maiores ou iguais a 18 anos que sejam funcionários → Acesso liberado
    Maiores ou iguais a 18 anos que possuam autorização especial → Acesso liberado
    Demais situações → Acesso negado

Crie o programa utilizando if/else.
Sem switch.*/

const idade = 18;
const ehFuncionario = true;
const possuiAutorizacaoEspecial = false;

if (idade < 18) {
  console.log("Acesso negado");
} else if (ehFuncionario || possuiAutorizacaoEspecial) {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado");
}
