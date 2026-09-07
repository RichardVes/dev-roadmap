/*Exercício 3 — usando o índice
Agora quero que você use o forEach() para produzir uma saída mais amigável.
Dado:
    const jogos = ["Minecraft", "Zelda", "Pokémon", "Elden Ring"];
Faça aparecer:
    Jogo 1: Minecraft
    Jogo 2: Zelda
    Jogo 3: Pokémon
    Jogo 4: Elden Ring
*/
const jogos = ["Minecraft", "Zelda", "Pokémon", "Elden Ring"];
jogos.forEach((jogo, indice) => {
  console.log(`Jogo ${indice + 1}: ${jogo}`);
});
