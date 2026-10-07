/*Desafio 1
Crie uma lista de personagens:
Transforme essa lista em JSON.
Depois transforme novamente em array.
Por fim, use map() para mostrar apenas os nomes.*/
const personagens = [
  {
    nome: "Aragorn",
    classe: "Guerreiro",
  },
  {
    nome: "Gandalf",
    classe: "Mago",
  },
  {
    nome: "Legolas",
    classe: "Arqueiro",
  },
];
const listaPersonagens = JSON.stringify(personagens);
const listaPersonagensObjeto = JSON.parse(listaPersonagens);
const nomes = listaPersonagensObjeto.map((personagem) => {
  return personagem.nome;
});
console.log(nomes);
