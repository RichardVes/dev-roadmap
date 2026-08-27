/*Exercício 02 — Situação do aluno
Um sistema acadêmico precisa classificar um aluno de acordo com sua média final:
    Média maior ou igual a 7 → Aprovado
    Média entre 5 e 6,9 → Recuperação
    Média menor que 5 → Reprovado
Crie um programa que faça essa classificação a partir de uma média armazenada em uma variável.*/
const media = -7;
if (media >= 0 && media <= 10) {
  if (media < 5) {
    console.log("Reprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Aprovado");
  }
} else {
  console.log("Media INVALIDA");
}
