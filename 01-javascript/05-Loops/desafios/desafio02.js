/*Desafio 2 — Soma acumulada
Faça um programa que percorra os números de 1 até 100 e calcule a soma de todos eles.
No final, deve aparecer:
5050
Regras:
    Use for.
    Crie uma variável para armazenar/acumular a soma.
    Não use fórmula matemática (n * (n + 1) / 2).
    Não coloque os números manualmente.
Aqui quero ver se você entendeu uma ideia muito importante em loops: o acumulador.*/
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);
