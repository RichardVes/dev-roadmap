/*Exercício 01 — Fundamentos de Arrays
Crie um array chamado jogos contendo pelo menos 5 jogos que você gosta.
Exiba:
    O primeiro jogo.
    O terceiro jogo.
    O último jogo.
Altere um dos jogos do array.
Exiba:
    O array completo.
    A quantidade de jogos.
Regra
    Tente resolver utilizando apenas o que vimos até agora:
        []
        array[indice]
        array.length
        console.log()
Não use ainda push, pop, loops ou métodos de array.*/
const jogos = [
  "Crinson Desert",
  "Pokemon",
  "Magic",
  "BF6",
  "Boberman",
  "Helldiver",
];
console.log(`Primeiro jogo = ${jogos[0]}
    Terceiro jogo = ${jogos[2]}
    Ultimo jogo = ${jogos[5]}`);
jogos[2] = "Cs";
console.log(jogos);
console.log(jogos.length);
jogos.push("Elden Ring");
jogos.push("Baldur's Gate 3");
console.log(jogos);
console.log(jogos.length);
