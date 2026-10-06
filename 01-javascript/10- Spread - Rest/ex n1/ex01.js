/*## Exercício 1 — Cópia de array
Crie um array chamado `jogos` contendo alguns jogos.
Crie uma segunda variável chamada `jogosCopia` utilizando Spread.
Depois adicione um novo jogo somente em `jogosCopia`.
### Regras de negócio
    - O array original deve continuar com os mesmos jogos.
    - A cópia deve conter os jogos originais.
    - A cópia deve receber um jogo adicional.
    - Não utilize `concat()`.
    - Não utilize `slice()` para fazer a cópia.---*/
const jogos = ["Pokemon", "Digimon", "DS3", "OnePiece"];
const jogosCopia = [...jogos, "Doraimon"];

console.log(jogosCopia);
