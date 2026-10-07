// exercicios iniciais
/*Exercício 1 — stringify
Crie o seguinte objeto:
const personagem = {
    nome: "Gandalf",
    classe: "Mago",
    nivel: 30
};
Transforme o objeto em JSON usando JSON.stringify().
Depois descubra o tipo do resultado usando typeof.
Objetivo
Identificar que o resultado de JSON.stringify() é uma string.*/
// const personagem = {
//   nome: "Gandalf",
//   classe: "Mago",
//   nivel: 30,
// };
// const json = JSON.stringify(personagem);
// console.log(json);

//Exercício 2 — parse
/*Considere:
const dados = '{"nome":"Legolas","classe":"Arqueiro","nivel":25}';
Use JSON.parse() para transformar dados em um objeto.
Depois mostre:
nome
classe
nivel*/
// const dados = '{"nome":"Legolas","classe":"Arqueiro","nivel":25}';
// const dadosObjeto = JSON.parse(dados);
// console.log(dadosObjeto.nome);
// console.log(dadosObjeto.classe);
// console.log(dadosObjeto.nivel);
/*Exercício 3 — ida e volta
Crie:
const jogador = {
    nome: "Aragorn",
    classe: "Guerreiro",
    nivel: 20
};
Faça o seguinte:
jogador
   ↓
JSON.stringify()
   ↓
string
   ↓
JSON.parse()
   ↓
novo objeto
No final, mostre o nome, a classe e o nível do novo objeto.*/
// const jogador = {
//   nome: "Aragorn",
//   classe: "Guerreiro",
//   nivel: 20,
// };
// console.log(jogador);
// const jogadorString = JSON.stringify(jogador);
// console.log(jogadorString);
// const jogadorObjeto = JSON.parse(jogadorString);
// console.log(jogadorObjeto);
