forEach() — percorrendo um Array

Agora entramos em um conceito muito importante, porque aqui você vai começar a usar Arrays + Funções juntos.

Você já conhece o for:

const jogos = ["Minecraft", "Zelda", "Pokémon"];

for (let i = 0; i < jogos.length; i++) {
console.log(jogos[i]);
}

Isso percorre o array e imprime cada elemento.

O forEach() permite fazer isso de uma maneira mais direta.

Conceito
jogos.forEach(function(jogo) {
console.log(jogo);
});

Leia como:

"Para cada jogo dentro de jogos, execute essa função."

Resultado:

Minecraft
Zelda
Pokémon
Com arrow function

Como você já estudou funções e arrow functions, normalmente verá:

const jogos = ["Minecraft", "Zelda", "Pokémon"];

jogos.forEach((jogo) => {
console.log(jogo);
});

Ou, quando existe apenas uma instrução:

jogos.forEach((jogo) => console.log(jogo));
O ponto mais importante

Observe:

jogos.forEach((jogo) => {
console.log(jogo);
});

jogo representa cada elemento do array, um por vez.

["Minecraft", "Zelda", "Pokémon"]
↓
jogo = "Minecraft"
↓
jogo = "Zelda"
↓
jogo = "Pokémon"

Você não precisa controlar:

let i = 0
i++
i < jogos.length

O forEach() cuida dessa iteração para você.
