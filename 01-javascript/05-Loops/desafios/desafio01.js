/*Desafio 1 — Contador seletivo
Crie um programa que percorra os números de 1 até 50 e mostre no console somente os números pares.
Exemplo do início da saída:
    2
    4
    6
    8
    10
    ...
    48
    50
Regras
    Use for.
    Não coloque os números manualmente.
    Use uma condição para descobrir se o número é par.
    Não use arrays.
Objetivo: quero ver se você consegue combinar for + if + operador % sem precisar de ajuda.*/
/*for (let contador = 2; contador <= 50; contador += 2) {
  console.log(contador);
}
*/
for (let contador = 1; contador <= 50; contador++) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
}
