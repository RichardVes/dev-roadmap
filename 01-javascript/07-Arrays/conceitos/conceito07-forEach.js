/*Exercício 2 — forEach() + índice
O forEach() pode fornecer não apenas o elemento, mas também o índice:
jogos.forEach((jogo, indice) => {
    console.log(indice, jogo);
});
Resultado:
0 Minecraft
1 Zelda
2 Pokémon
3 Elden Ring
Agora faça você.
Use:
const jogos = ["Minecraft", "Zelda", "Pokémon", "Elden Ring"];
E faça um forEach() que produza algo parecido com:
Jogo 0: Minecraft
Jogo 1: Zelda
Jogo 2: Pokémon
Jogo 3: Elden Ring
Use arrow function e os dois parâmetros: elemento + índice.*/
const jogos = ["Minecraft", "Zelda", "Pokémon", "Elden Ring"];
jogos.forEach((jogo, indice) => {
  console.log(indice, jogo);
});
