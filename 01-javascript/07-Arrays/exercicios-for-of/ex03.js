/*Você está criando um sistema que identifica quais jogadores desbloquearam uma conquista.
Regra de negócio
Um jogador desbloqueia a conquista "Veterano do Reino" quando:
    possui nível 10 ou superior;
    completou pelo menos 10 missões;
    possui mais de 1000 moedas de ouro.
Sua função deve retornar um novo array contendo somente os jogadores que desbloquearam a conquista.*/
const jogadores = [
  { nome: "Arthas", nivel: 15, missoes: 12, ouro: 850 },
  { nome: "Lyra", nivel: 8, missoes: 20, ouro: 1200 },
  { nome: "Gorn", nivel: 18, missoes: 7, ouro: 500 },
  { nome: "Selene", nivel: 12, missoes: 15, ouro: 2000 },
  { nome: "Tharok", nivel: 20, missoes: 25, ouro: 3500 },
];
function conquistaDesbloqueadaVeteranoDoReino() {
  const desbloqueou = [];
  for (const jogador of jogadores) {
    if (jogador.nivel >= 10 && jogador.missoes >= 10 && jogador.ouro > 1000) {
      desbloqueou.push(jogador);
    }
  }
  return desbloqueou;
}
console.log(conquistaDesbloqueadaVeteranoDoReino());
