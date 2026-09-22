/*Você está desenvolvendo um sistema para montar uma equipe de aventura.
Regras da equipe
Um personagem pode ser selecionado se:
    estiver ativo;
    possuir nível 10 ou superior;
    possuir vida acima de 50.
Porém, existe uma regra adicional:
    A equipe precisa ter pelo menos um personagem da classe Maga.
Sua função
Crie uma função que processe os personagens e retorne os personagens que podem formar a equipe.
Além disso, a função deve garantir que a regra da classe Maga seja respeitada.*/
const personagens = [
  { nome: "Ayla", classe: "Maga", nivel: 15, vida: 80, ativo: true },
  { nome: "Brom", classe: "Guerreiro", nivel: 12, vida: 40, ativo: true },
  { nome: "Kael", classe: "Arqueiro", nivel: 18, vida: 90, ativo: false },
  { nome: "Luna", classe: "Maga", nivel: 10, vida: 70, ativo: true },
  { nome: "Doran", classe: "Guerreiro", nivel: 20, vida: 100, ativo: true },
  { nome: "Nira", classe: "Arqueira", nivel: 8, vida: 95, ativo: true },
];
// monta equipe
// verifica se mago
// adiciona mago se precisar
function montaEquipe() {
  const equipe = [];
  for (const personagem of personagens) {
    if (
      personagem.ativo === true &&
      personagem.nivel >= 10 &&
      personagem.vida > 50
    ) {
      equipe.push(personagem);
    }
  }
  return equipe;
}
function verificaMago(equipe) {
  for (const aventureiro of equipe) {
    if (aventureiro.classe === "Maga") {
      return true;
    }
  }
  return false;
}
function adicionaMago(equipe) {
  const maga = [];
  for (const personagem of personagens) {
    if (personagem.classe === "Maga") {
      maga.push(personagem);
    }
  }
  if (maga.length > 0) {
    equipe.push(maga[0]);
    return equipe;
  }
}
const equipe = montaEquipe();
console.log(`Equipe pre montada:`);
console.log(equipe);
//console.log(verificaMago(equipe) ? "Tem Mago" : "Não tem Mago");
if (verificaMago(equipe) === true) {
  console.log("Tem Maga");
} else {
  console.log("NÃO Tem Maga");
  adicionaMago(equipe);
}
console.log(`Equipe final:`);
console.log(equipe);
