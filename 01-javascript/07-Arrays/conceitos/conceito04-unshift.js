/*Exercício
const jogos = ["Zelda", "Pokémon", "Elden Ring"];

Faça:

Adicione "Minecraft" no início usando unshift().
Mostre o array.
Adicione "Dark Souls" também no início.
Mostre novamente o array.
Mostre length.*/

const jogos = ["Zelda", "Pokémon", "Elden Ring"];
jogos.unshift("Minecraft");
console.log(jogos);
jogos.unshift("Dark Souls");
console.log(jogos);
console.log(jogos.length);
