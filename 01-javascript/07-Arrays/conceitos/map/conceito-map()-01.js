/*Exercício — primeiro contato com map()
Dado:
const numeros = [5, 10, 15, 20, 25];
Crie um novo array onde todos os números estejam multiplicados por 3.
Depois exiba:
O array original.
O novo array.
Não use forEach(). Use apenas map().*/

const numeros = [5, 10, 15, 20, 25];
// const triplo = numeros.map((numero) => {
//   return numero * 3;
// });
const triplo = numeros.map((numero) => numero * 3);

console.log(triplo);
