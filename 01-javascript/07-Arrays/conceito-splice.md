splice()

Aqui temos uma diferença fundamental em relação ao slice():

slice() → extrai uma parte → NÃO altera o original
splice() → modifica o array → ALTERA o original
Sintaxe
array.splice(inicio, quantidade);

Exemplo:

const frutas = ["Maçã", "Banana", "Uva", "Manga"];

frutas.splice(1, 2);

console.log(frutas);

Resultado:

["Maçã", "Manga"]

Começamos no índice 1:

Índice: 0 1 2 3
Maçã Banana Uva Manga
↑ ↑
remove 2 elementos

Ou seja:

splice(1, 2)

significa:

Comece no índice 1 e remova 2 elementos.

splice() também pode adicionar elementos
const frutas = ["Maçã", "Banana", "Manga"];

frutas.splice(2, 0, "Uva");

console.log(frutas);

Resultado:

["Maçã", "Banana", "Uva", "Manga"]

Aqui:

splice(2, 0, "Uva")

significa:

começa no índice 2
remove 0 elementos
adiciona "Uva"
E pode substituir
const frutas = ["Maçã", "Banana", "Manga"];

frutas.splice(1, 1, "Uva");

console.log(frutas);

Resultado:

["Maçã", "Uva", "Manga"]

Removeu "Banana" e colocou "Uva" no mesmo lugar.
