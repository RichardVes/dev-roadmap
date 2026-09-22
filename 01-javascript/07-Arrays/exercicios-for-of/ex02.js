/*Você está criando uma função para verificar quais personagens de um grupo estão aptos para participar de uma missão.
Regra de negócio
    Para participar da missão, o personagem precisa:
Ter nível 10 ou superior
Ter vida acima de 50
A função deve retornar um novo array contendo somente os personagens aptos.*/
const personagens = [
  { nome: "Arthas", nivel: 12, vida: 80 },
  { nome: "Lyra", nivel: 8, vida: 100 },
  { nome: "Gorn", nivel: 15, vida: 35 },
  { nome: "Selene", nivel: 10, vida: 75 },
  { nome: "Tharok", nivel: 6, vida: 90 },
];
function podeParticipar() {
  const podem = [];
  for (const personagem of personagens) {
    if (personagem.nivel >= 10 && personagem.vida > 50) {
      podem.push(personagem);
    }
  }
  return podem;
}
console.log(podeParticipar());
