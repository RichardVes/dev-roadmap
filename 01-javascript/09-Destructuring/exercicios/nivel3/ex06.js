/*Um jogo possui uma lista de jogadores e suas missões concluídas:
Crie uma solução que apresente, para cada jogador, o total de ouro obtido com suas missões concluídas.
O resultado deve representar:
    Anubiz → 1300
    Lyria → 2500
    Kael → 700
Regras de negócio
    Somente missões concluídas entram no cálculo.
    As recompensas das missões concluídas devem ser somadas.
    Cada jogador deve aparecer apenas uma vez.
    Os dados originais não podem ser alterados.
    A solução deve continuar funcionando caso a quantidade de missões de cada jogador seja diferente.
    O cálculo não deve ser feito manualmente para cada jogador.*/
const jogadores = [
  {
    nome: "Anubiz",
    nivel: 15,
    missoes: [
      { titulo: "Floresta Sombria", recompensa: 500, concluida: true },
      { titulo: "Dragão do Norte", recompensa: 1200, concluida: false },
      { titulo: "Ruínas Antigas", recompensa: 800, concluida: true },
    ],
  },
  {
    nome: "Lyria",
    nivel: 20,
    missoes: [
      { titulo: "Templo Perdido", recompensa: 1000, concluida: true },
      { titulo: "Guardião das Montanhas", recompensa: 1500, concluida: true },
    ],
  },
  {
    nome: "Kael",
    nivel: 10,
    missoes: [
      { titulo: "Caverna Sombria", recompensa: 400, concluida: false },
      { titulo: "Vale Congelado", recompensa: 700, concluida: true },
    ],
  },
];
function calculaGold({ nome, missoes }) {
  console.log(nome);
  let valor = 0;
  missoes.forEach((elemento) => {
    if (elemento.concluida === true) {
      valor += elemento.recompensa;
    }
  });
  console.log(valor);
}

jogadores.forEach(calculaGold);
