/*Operações em sequência
Agora vamos juntar tudo que aprendemos.
Comece com:
const jogos = ["Minecraft", "Zelda", "Pokémon"];
    Execute as operações nesta ordem:
    Adicione "Elden Ring" no final.
    Adicione "Dark Souls" no início.
    Remova o último jogo e guarde o removido.
    Remova o primeiro jogo e guarde o removido.
    Mostre os dois jogos removidos.
    Mostre o array final.
Mostre a quantidade de elementos.*/
const jogos = ["Minecraft", "Zelda", "Pokémon"];
jogos.push("Elden Ring");
jogos.unshift("Dark Souls");
const removidoFim = jogos.pop();
const removidoComeco = jogos.shift();
console.log(`Jogos removidos = ${removidoComeco} e ${removidoFim}`);
console.log(jogos);
console.log(jogos.length);
