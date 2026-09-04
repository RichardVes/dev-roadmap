/*Desafio 3 — Agora quero testar for...of
Você tem este array:
const numeros = [10, 25, 8, 42, 17, 30, 5];
Faça um programa que percorra o array e mostre somente os números maiores que 20.
Resultado esperado:
    25
    42
    30
Regras
    Use for...of.
    Use if.
    Não use for tradicional.
    Não altere o array.
Aqui quero ver se você realmente entendeu a diferença entre:
for
e
for...of*/
const numeros = [10, 25, 8, 42, 17, 30, 5];
for (let numero of numeros) {
  if (numero > 20) {
    console.log(numero);
  }
}
