/*Você está desenvolvendo o sistema de uma arena de RPG.
A arena possui vários personagens cadastrados e precisa identificar quais personagens estão aptos para participar de uma batalha.
Você recebeu os seguintes personagens:
    Anubiz — Espadachin Arcano — vida 100 — ataque 25 — defesa 10
    Edifir — Soldado — vida 80 — ataque 18 — defesa 15
    Lyra — Arqueira — vida 0 — ataque 30 — defesa 5
    Morgana — Maga — vida 60 — ataque 35 — defesa 3
    Thorin — Guerreiro — vida 0 — ataque 40 — defesa 20
Regras de negócio
Todos os personagens devem ser armazenados em uma estrutura de dados única.
Cada personagem deve possuir:
    nome
    classe
    vida
    ataque
    defesa
Um personagem só pode participar da batalha se sua vida for maior que zero.
O sistema deve percorrer todos os personagens cadastrados.
Para cada personagem apto, o sistema deve exibir:
    nome
    classe
    ataque
    defesa
Personagens derrotados não devem aparecer na lista de participantes.
O sistema deve informar quantos personagens estão aptos para a batalha.
A solução deve utilizar objetos + array + loop, aproveitando os conceitos que você já estudou.*/
const personagens = [
  { nome: "Anubiz", classe: "Espadachin", vida: 100, ataque: 25, defesa: 10 },
  { nome: "Edifir", classe: "Soldado", vida: 80, ataque: 18, defesa: 15 },
  { nome: "Lyra", classe: "Arqueira", vida: 0, ataque: 30, defesa: 5 },
  { nome: "Morgana", classe: "Maga", vida: 60, ataque: 35, defesa: 3 },
  { nome: "Thorin", classe: "Guerreiro", vida: 0, ataque: 40, defesa: 20 },
];
function podeBatalhar() {
  const listaPodeBatalhar = personagens.filter(
    (personagem) => personagem.vida > 0,
  );
  console.log(listaPodeBatalhar.length);
  listaPodeBatalhar.forEach((personagem) => {
    console.log(
      personagem.nome,
      personagem.classe,
      personagem.ataque,
      personagem.defesa,
    );
  });
}
podeBatalhar();
// console.log(podeBatalhar().length);
