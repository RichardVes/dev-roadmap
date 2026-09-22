//---exemplo---/
// const nomes = ["Carlos", "Ana", "Bruno", "Daniel"];
// nomes.sort();
// console.log(nomes);
// Decrescente
//nomes.sort((a, b) => b.localeCompare(a));
//--
// Ordenação numérica
// Para números, usamos uma função de comparação:
// const numeros = [10, 5, 100, 25, 2];
// numeros.sort((a, b) => a - b);
// console.log(numeros);
//--
// Crescente
// (a, b) => a - b
// Decrescente
// (a, b) => b - a
//
//OBJETOS
//Quando temos:
// { nome: "Notebook", preco: 3500 }
// a e b serão objetos inteiros. Portanto, precisamos acessar a propriedade que queremos comparar:
// produtos.sort((a, b) => a.preco - b.preco);
// Aqui:
// a.preco → preço do primeiro objeto
// b.preco → preço do segundo objeto
// E para nome:
// produtos.sort((a, b) => a.nome.localeCompare(b.nome));
//
//exercicio 01
/*Exercício 1 — sort() básico
Faça um programa que:
const numeros = [45, 12, 78, 3, 56, 21, 89, 7];
Ordene os números em ordem crescente.
Exiba o resultado.
Depois ordene o mesmo array em ordem decrescente.
Exiba novamente.*/
// const numeros = [45, 12, 78, 3, 56, 21, 89, 7];
// numeros.sort((a, b) => a - b);
// console.log(numeros);
// numeros.sort((a, b) => b - a);
// console.log(numeros);

//---- exercicio 2
/*Exercício 2 — Ordenação de strings
const produtos = [
  "Notebook",
  "Mouse",
  "Monitor",
  "Teclado",
  "Headset",
  "Webcam",
  "SSD",
];
Faça:
Ordenação alfabética crescente.
Exiba o resultado.
Ordenação alfabética decrescente.
Exiba o resultado.*/
// const produtos = [
//   "Notebook",
//   "Mouse",
//   "Monitor",
//   "Teclado",
//   "Headset",
//   "Webcam",
//   "SSD",
// ];
// produtos.sort();
// console.log(produtos);
// produtos.sort((a, b) => b.localeCompare(a));
// console.log(produtos);

/*Exercício 3 — sort() com array de objetos
Agora vamos para um caso bem mais próximo do que você vai encontrar em código real.
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Teclado", preco: 250 },
  { nome: "Headset", preco: 180 },
];
Faça:
  Ordene os produtos pelo preço em ordem crescente.
  Exiba o resultado.
  Depois ordene pelo preço em ordem decrescente.
  Exiba novamente.
  Depois ordene os produtos pelo nome em ordem alfabética crescente.
Exiba novamente.*/
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Teclado", preco: 250 },
  { nome: "Headset", preco: 180 },
];
produtos.sort((a, b) => a.preco - b.preco);
console.log(produtos);
produtos.sort((a, b) => b.preco - a.preco);
console.log(produtos);
produtos.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(produtos);
