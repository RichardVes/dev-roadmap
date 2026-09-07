## adicionar e remover elementos

    push()
    pop()
    shift()
    unshift()

Esses quatro métodos formam a base da manipulação de arrays.

### push()

    Adiciona um elemento no final do array:

        ```js
        const frutas = ["Maçã", "Banana"];

        frutas.push("Uva");

        console.log(frutas);

        //Resultado:

        ["Maçã", "Banana", "Uva"];
        ```

    Visualmente:

    Antes:

        [ Maçã ][ Banana ]
            0        1

                ↓ push("Uva")

    Depois:

        [ Maçã ][ Banana ][ Uva ]
            0        1        2

    Um detalhe importante: push() modifica o próprio array.

## pop()

    Se push() adiciona no final, pop() faz o contrário:

```js
const jogos = ["Minecraft", "Zelda", "Pokémon"];

jogos.pop();

console.log(jogos);

///Resultado:

["Minecraft", "Zelda"];
```

    O pop() remove o último elemento do array.

    Além disso, ele retorna o elemento removido:

    const removido = jogos.pop();

    console.log(removido);

    Resultado:

    Pokémon

## shift()

    Agora vamos para o início do array.

    push() → adiciona no final
    pop() → remove do final
    shift() → remove do início

    Exemplo:

    const jogos = ["Minecraft", "Zelda", "Pokémon"];

    const removido = jogos.shift();

    console.log(removido);
    console.log(jogos);

    Saída:

    Minecraft
    ["Zelda", "Pokémon"]

## unshift()

    É o oposto de shift():

    const jogos = ["Zelda", "Pokémon"];

    jogos.unshift("Minecraft");

    console.log(jogos);

    Resultado:

    ["Minecraft", "Zelda", "Pokémon"]

    unshift() adiciona um elemento no início do array.
