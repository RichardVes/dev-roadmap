// array.splice(inicio, quantidade,valor);
// começa no índice  = inicio
// remove quantidade elementos
// adiciona "valor"

/*Exercício 1
Considere:
const tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios",
  "Estudar Git",
  "Estudar Docker",
  "Fazer projeto"
];
Usando somente splice():
  Remova "Estudar Git".
  Adicione "Estudar SQL" entre "Estudar Docker" e "Fazer projeto".
  Substitua "Fazer exercícios" por "Resolver desafios".*/
const tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios",
  "Estudar Git",
  "Estudar Docker",
  "Fazer projeto",
];
tarefas.splice(2, 1);
tarefas.splice(3, 0, "Estudar SQL");
tarefas.splice(1, 1, "Resolver desafios");
console.log(tarefas);
