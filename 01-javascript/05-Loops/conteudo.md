# Loops

O que é um loop?

Um loop é uma estrutura que permite executar um bloco de código várias vezes.

1. for
   O for é provavelmente o loop mais importante para começar.
   Estrutura:

```js
for (inicialização; condição; incremento) {
  // código repetido
}
//Exemplo:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

2. while
   O while também repete código, mas sua estrutura é diferente.

```js
while (condição) {
  // código
}
//Exemplo:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

3. for × while

   Essa é uma diferença importante.

   for

   Normalmente utilizado quando sabemos ou conseguimos controlar claramente a quantidade de repetições.

   while

   É interessante quando a repetição depende de uma condição que pode mudar durante a execução.
   Uma forma simples de pensar:

   for → "repita controlando um contador".

   while → "repita enquanto essa condição for verdadeira".

4. for...of

   Agora entramos em uma diferença muito importante.

   Suponha que tenhamos:

   const frutas = ["maçã", "banana", "laranja"];

   Podemos percorrer os valores usando:

   for (const fruta of frutas) {
   console.log(fruta);
   }

   Resultado:

   maçã
   banana
   laranja

   O for...of significa, na prática:

   "Para cada valor dentro desse conjunto..."

5. for...in

   Agora temos:

```js
const pessoa = {
  nome: "Richard",
  idade: 30,
  cidade: "Três Lagoas",
};
```

Podemos utilizar:

```js
for (const propriedade in pessoa) {
  console.log(propriedade);
}
```

Resultado:

nome
idade
cidade

O for...in percorre as propriedades/chaves.

6. for...of × for...in

   Essa diferença precisa ficar muito clara:
   const frutas = ["maçã", "banana", "laranja"];

   for (const fruta of frutas) {
   console.log(fruta);
   }

   → valores:

   maçã
   banana
   laranja

   Já:

   for (const indice in frutas) {
   console.log(indice);
   }

   → propriedades/índices:

   0
   1
   2
