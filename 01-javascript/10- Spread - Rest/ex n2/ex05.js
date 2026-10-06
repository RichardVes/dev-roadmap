/*Exercício 5 — Gerenciamento de jogadores
Considere:
Crie uma função chamada adicionarJogadores.
Regras de negócio
    A função deve receber uma quantidade variável de jogadores utilizando Rest.
    A função deve criar um novo array utilizando Spread.
    O array original jogadores não pode ser alterado.
    A função deve retornar o novo array.
    Cada jogador deve manter todas as suas propriedades.
    Utilize Destructuring em algum momento para acessar as informações dos jogadores.
Não utilize push().
Não utilize concat().*/
const jogadores = [
  {
    nome: "Aragorn",
    nivel: 20,
    classe: "Guerreiro",
  },
  {
    nome: "Gandalf",
    nivel: 25,
    classe: "Mago",
  },
  {
    nome: "Legolas",
    nivel: 22,
    classe: "Arqueiro",
  },
];
const novosJogadores = [
  {
    nome: "Bulba",
    nivel: 20,
    classe: "planta",
  },
  {
    nome: "Jolteon",
    nivel: 25,
    classe: "Mago de raio",
  },
  {
    nome: "Joao",
    nivel: 22,
    classe: "Arqueiro",
  },
];
function adicionarJogadores(...novaLista) {
  return [...jogadores, ...novaLista];
}
function trocarClasse(...todosJogadores) {
  return todosJogadores.map((jogador) => {
    if (jogador.classe === "Arqueiro") {
      return {
        ...jogador,
        classe: "Patrulheiro",
      };
    }

    return jogador;
  });
}
console.log(adicionarJogadores(...trocarClasse(...novosJogadores)));
//console.log(trocarClasse(...novosJogadores));
