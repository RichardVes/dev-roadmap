// pedidos.forEach((pedido) => {
//     if (pedido.status === "enviado") {
//         console.log(`Pedido ${pedido.id} de ${pedido.cliente} foi enviado.`);
//     }
// });

/*Exercício — Lista de alunos
Você tem uma lista de alunos:
const alunos = [
    { nome: "Ana", idade: 20 },
    { nome: "Carlos", idade: 22 },
    { nome: "Mariana", idade: 19 },
    { nome: "João", idade: 21 }
];
Regras
Use somente forEach() para:
Percorrer todos os alunos.
Mostrar o nome de cada aluno.
Mostrar também a idade de cada aluno.*/
const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 22 },
  { nome: "Mariana", idade: 19 },
  { nome: "João", idade: 21 },
];
alunos.forEach((aluno) => {
  console.log(`O aluno(a) ${aluno.nome} tem ${aluno.idade} anos`);
});

/*exercício — um pequeno passo acima
Agora quero que você use forEach() para tomar uma decisão.
const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 1200 }
];
Regras
Percorra os produtos usando forEach().
Para cada produto:
Se o preço for maior que R$ 1.000, informe que é um produto caro.
Caso contrário, informe que é um produto barato.*/
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 1200 },
];
produtos.forEach((produto) => {
  if (produto.preco > 1000) {
    console.log(`O produto: ${produto.nome} é Caro`);
  } else {
    console.log(`O produto: ${produto.nome} é Barato`);
  }
});
