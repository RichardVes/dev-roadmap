/*splice() com objetos
Considere:
const produtos = [
  { id: 1, nome: "Notebook", estoque: 10 },
  { id: 2, nome: "Mouse", estoque: 25 },
  { id: 3, nome: "Monitor", estoque: 8 },
  { id: 4, nome: "Teclado", estoque: 15 },
  { id: 5, nome: "Headset", estoque: 12 },
];
Faça as seguintes alterações diretamente no array produtos:
  Remova o produto Monitor.
  Insira Webcam, com id: 6 e estoque: 20, depois de Teclado.
  Substitua Mouse por Mouse Gamer, mantendo o id: 2 e alterando o estoque para 30.
  Exiba o array final no console.
Regra: não crie outro array para armazenar o resultado.*/
const produtos = [
  { id: 1, nome: "Notebook", estoque: 10 },
  { id: 2, nome: "Mouse", estoque: 25 },
  { id: 3, nome: "Monitor", estoque: 8 },
  { id: 4, nome: "Teclado", estoque: 15 },
  { id: 5, nome: "Headset", estoque: 12 },
];
produtos.splice(2, 1);
produtos.splice(3, 0, { id: 6, nome: "Webcam", estoque: 20 });
produtos.splice(1, 1, { id: 2, nome: "Mouse Gamer", estoque: 30 });
console.log(produtos);
