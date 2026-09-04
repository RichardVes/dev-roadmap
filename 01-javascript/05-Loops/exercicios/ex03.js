/*Exercício 03 — for...of

Considere:

const linguagens = ["JavaScript", "Python", "Java", "C++", "C#"];

Use for...of para mostrar cada linguagem no console.

Depois, modifique o código para mostrar:

Eu estudo JavaScript
Eu estudo Python
...*/
const linguagens = ["JavaScript", "Python", "Java", "C++", "C#"];
for (const linguagem of linguagens) {
  console.log(linguagem);
}
