/*Exercício 05 — escolha livre

Crie um programa que percorra:

const numeros = [10, 5, 8, 20, 3, 15];

e descubra qual é o maior número.

Aqui você pode escolher o loop que considerar mais adequado.*/
const numeros = [10, 5, 8, 20, 3, 15];
let numMaior = 0;
for (let numero of numeros) {
  //  console.log(numero);
  if (numero > numMaior) {
    numMaior = numero;
  }
}
console.log("maior Numero da lista é: ", numMaior);
