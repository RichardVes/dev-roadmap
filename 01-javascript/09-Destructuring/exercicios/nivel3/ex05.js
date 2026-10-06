/*Um jogo possui uma lista de missões disponíveis:
Crie uma função que analise as missões e apresente somente as missões que o personagem pode realizar e ainda não concluiu.
Regras de negócio
Uma missão pode ser apresentada quando:
    O nível do personagem é maior ou igual ao nível mínimo da missão.
    A missão ainda não foi concluída.
Para cada missão válida, apresente:
    Nome da missão
    Recompensa*/

const missoes = [
  {
    titulo: "A Floresta Sombria",
    nivelMinimo: 10,
    recompensa: 500,
    concluida: true,
  },
  {
    titulo: "O Dragão do Norte",
    nivelMinimo: 20,
    recompensa: 1200,
    concluida: false,
  },
  {
    titulo: "Ruínas Antigas",
    nivelMinimo: 15,
    recompensa: 800,
    concluida: true,
  },
  {
    titulo: "O Guardião Perdido",
    nivelMinimo: 8,
    recompensa: 300,
    concluida: false,
  },
];

const personagem = {
  nome: "Anubiz",
  nivel: 15,
};
function missaoValida({ titulo, nivelMinimo, recompensa, concluida }) {
  const { nivel } = personagem;
  if (nivel >= nivelMinimo && concluida === false) {
    console.log(titulo);
    console.log(recompensa);
  }
}
missoes.forEach(missaoValida);
