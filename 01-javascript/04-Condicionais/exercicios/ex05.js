/*Exercício 05 — Validação + if/else
Um sistema de acesso recebe:
    idade;
    se a pessoa possui ingresso.
A pessoa só pode entrar se:
    tiver 18 anos ou mais; e
    possuir ingresso.
Caso contrário, deve informar o motivo pelo qual o acesso foi negado.
Considere os possíveis resultados:
    Menor de idade
    Sem ingresso
    Acesso liberado
Resolva utilizando if/else.*/
const idade = 15;
const ingresso = false;
if (idade >= 0) {
  if (idade < 18) {
    console.log("Menor de idade");
  } else if (ingresso == false) {
    console.log("Sem ingresso");
  } else {
    console.log("Acesso liberado");
  }
} else {
  console.log("Idade Invalida");
}
