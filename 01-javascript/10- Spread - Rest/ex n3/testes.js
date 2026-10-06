// relembrando
//---spread---
//ex 1
// const frutas = ["maçã", "banana", "laranja"];
// const novasFrutas = [...frutas, "uva", "manga"];
// console.log(novasFrutas);
//ex2
// const frutas = ["maçã", "banana", "laranja"];
// const legumes = ["cenoura", "batata", "cebola"];
// const novasFrutas = [...frutas, ...legumes];
// console.log(novasFrutas);
//ex3
// const guerreiros = ["Aragorn", "Gimli", "Boromir"];
// const magos = ["Gandalf", "Saruman", "Radagast"];
// const aventureiros = [...guerreiros, ...magos, magos[0]];
// console.log(aventureiros);
//---rest---
//ex4
// function somar(...numeros) {
//   const resp = numeros.reduce((acumulador, elemento) => {
//     console.log(`acumulador ${acumulador}`);
//     console.log(`elemento ${elemento}`);
//     return acumulador + elemento;
//   }, 0);
//   return resp;
// }
// console.log(somar(10, 20, 30, 40));
//ex5
// function apresentar(...nomes) {
//   const todosNomes = nomes;
//   return todosNomes;
// }
// console.log(apresentar("nome1", "nome2", "nome3", "nome4", "nome5"));
//---spread + rest
//ex 6
// const guerreiros = ["Aragorn", "Gimli", "Boromir"];
// const magos = ["Gandalf", "Saruman", "Radagast"];
// function montarEquipe(lider, ...jogadores) {
//   const novaEquipe = [lider, ...jogadores];
//   return novaEquipe;
// }
// console.log(montarEquipe(guerreiros[0], ...magos));
//ex7
// const tanque = ["Aragorn", "Gimli"];
// const suporte = ["Gandalf", "Elrond"];
// function formarGrupo(principal, ...companheiros) {
//   return (novoGrupo = [principal, ...companheiros]);
// }
// console.log(formarGrupo(tanque[0], ...suporte));
//ex8
const guerreiros = ["Aragorn", "Gimli"];
const magos = ["Gandalf", "Saruman"];
const arqueiros = ["Legolas", "Haldir"];
function criarEquipe(nomeEquipe, lider, ...membros) {
  return { nome: nomeEquipe, lider: lider, membros: membros };
}
console.log(
  criarEquipe("Wolfs", magos[0], ...guerreiros, ...arqueiros, ...magos),
);
