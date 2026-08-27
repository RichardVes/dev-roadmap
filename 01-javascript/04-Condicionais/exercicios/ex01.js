/*Exercício 01 — Classificação de idade
Crie um programa que receba uma idade e classifique a pessoa em uma das seguintes categorias:
    Menor de idade: menos de 18 anos
    Adulto: de 18 a 59 anos
    Idoso: 60 anos ou mais
O programa deve exibir a categoria correspondente à idade informada.*/
const idade = 35;
if (idade < 18) {
  console.log("Menor de idade");
} else if (idade >= 18 && idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
