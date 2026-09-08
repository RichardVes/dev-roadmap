/*Exercício 1
const numeros = [5, 10, 15, 20];
Use reduce() para calcular a soma de todos os números.*/
// const numeros = [5, 10, 15, 20];
// const soma = numeros.reduce((acumulador, numero) => {
//   return acumulador + numero;
// }, 0);
//console.log(soma);

// --------------------------
/*Exercício 2
Calcule o total das vendas:
const vendas = [100, 250, 50, 300, 150];*/
// const vendas = [100, 250, 50, 300, 150];
// const resultado = vendas.reduce((acumulador, numero) => {
//   return acumulador + numero;
// }, 0);
//console.log(resultado);

//--------------------------------
/*exercício 3 — reduce() com objetos
const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 80 },
  { produto: "Monitor", valor: 1200 },
];
Use reduce() para calcular o valor total das vendas.*/
// const vendas = [
//   { produto: "Notebook", valor: 3500 },
//   { produto: "Mouse", valor: 80 },
//   { produto: "Monitor", valor: 1200 },
// ];

// const totalVendas = vendas.reduce((acumulador, numero) => {
//   return acumulador + numero.valor;
// }, 0);
// console.log(totalVendas);

//---------///
/*exercício 4 - reduce() para média
const notas = [6, 8, 7, 9, 10];
Use reduce() para calcular a média das notas.*/
// const notas = [6, 8, 7, 9, 10];
// const soma = notas.reduce((acumulador, numero) => {
//   return acumulador + numero;
// }, 0);
// const media = soma / notas.length;
// console.log(media);

//-------------------------
/*Exercício 5 
Agora vamos fazer um reduce() um pouco mais interessante: contar quantos números são pares.
const numeros = [2, 5, 8, 10, 13, 17, 20];*/
// const numeros = [2, 5, 8, 10, 13, 17, 20];
// const pares = numeros.reduce((acumulador, numero) => {
//   if (numero % 2 === 0) {
//     acumulador += 1;
//   }
//   return acumulador;
// }, 0);
// console.log(pares);

//------------------------

/*Exercício final de reduce()
const vendas = [
  { produto: "Notebook", valor: 3500, pago: true },
  { produto: "Mouse", valor: 80, pago: false },
  { produto: "Monitor", valor: 1200, pago: true },
  { produto: "Teclado", valor: 250, pago: true },
];
Use reduce() para calcular somente o total das vendas pagas.*/
const vendas = [
  { produto: "Notebook", valor: 3500, pago: true },
  { produto: "Mouse", valor: 80, pago: false },
  { produto: "Monitor", valor: 1200, pago: true },
  { produto: "Teclado", valor: 250, pago: true },
];
const vendasPagas = vendas.reduce((acumulador, numero) => {
  if (numero.pago === true) {
    acumulador += numero.valor;
  }
  return acumulador;
}, 0);
console.log(vendasPagas);
