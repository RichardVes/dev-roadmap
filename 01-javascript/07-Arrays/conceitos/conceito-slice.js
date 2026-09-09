// --- exemplo ----
// const numeros = [10, 20, 30, 40, 50];
// const resultado = numeros.slice(1, 4);
// console.log(resultado);

//---exercicio 1
/*Exercício 1
Considere:
const alunos = [
  "Ana",
  "Bruno",
  "Carlos",
  "Daniela",
  "Eduardo",
  "Fernanda"
];
Crie:
  Um array contendo apenas os três primeiros alunos.
  Um array contendo os alunos a partir de "Carlos".
  Um array contendo apenas "Bruno", "Carlos" e "Daniela".*/
// const alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda"];
// const primeirosTres = alunos.slice(0, 3);
// const alunosMeio = alunos.slice(2);
// const alunosEspeciais = alunos.slice(1, 4);
// console.log(`${primeirosTres}\n ${alunosMeio}\n ${alunosEspeciais}`);

// ----- Exercicio 02
/*slice() em cenário mais real
Considere:
const vendas = [
  { id: 1, produto: "Notebook", valor: 3500 },
  { id: 2, produto: "Mouse", valor: 80 },
  { id: 3, produto: "Monitor", valor: 1200 },
  { id: 4, produto: "Teclado", valor: 250 },
  { id: 5, produto: "Headset", valor: 400 },
  { id: 6, produto: "Webcam", valor: 350 },
  { id: 7, produto: "SSD", valor: 600 },
  { id: 8, produto: "Memória RAM", valor: 500 }
];
Imagine que essas vendas precisam ser exibidas em páginas.
Crie:
pagina1 contendo os 3 primeiros registros.
pagina2 contendo os próximos 3 registros.
pagina3 contendo os registros restantes.
Depois exiba os três arrays.*/
// const vendas = [
//   { id: 1, produto: "Notebook", valor: 3500 },
//   { id: 2, produto: "Mouse", valor: 80 },
//   { id: 3, produto: "Monitor", valor: 1200 },
//   { id: 4, produto: "Teclado", valor: 250 },
//   { id: 5, produto: "Headset", valor: 400 },
//   { id: 6, produto: "Webcam", valor: 350 },
//   { id: 7, produto: "SSD", valor: 600 },
//   { id: 8, produto: "Memória RAM", valor: 500 },
// ];
// const pagina1 = vendas.slice(0, 3);
// const pagina2 = vendas.slice(3, 6);
// const pagina3 = vendas.slice(6);
// console.log({
//   pagina1,
//   pagina2,
//   pagina3,
// });

// ---- exercicio 3
/*Paginação dinâmica
Agora sim, vamos para um caso onde não queremos escrever os índices manualmente.
const produtos = [
  "Notebook",
  "Mouse",
  "Monitor",
  "Teclado",
  "Headset",
  "Webcam",
  "SSD",
  "Memória RAM",
  "Placa de Vídeo",
  "Fonte"
];
const tamanhoPagina = 4;
const paginaAtual = 2;
Crie as variáveis:
const inicio = ...
const fim = ...
Depois:
const pagina = produtos.slice(inicio, fim);
Objetivo: se eu mudar:
const paginaAtual = 1;
ou:
const tamanhoPagina = 3;
o código deve continuar funcionando sem alterar manualmente os índices.*/
const produtos = [
  "Notebook",
  "Mouse",
  "Monitor",
  "Teclado",
  "Headset",
  "Webcam",
  "SSD",
  "Memória RAM",
  "Placa de Vídeo",
  "Fonte",
];

const tamanhoPagina = 4;
const paginaAtual = 2;

const inicio = (paginaAtual - 1) * tamanhoPagina;
const fim = inicio + tamanhoPagina;

const pagina = produtos.slice(inicio, fim);

console.log(pagina);
