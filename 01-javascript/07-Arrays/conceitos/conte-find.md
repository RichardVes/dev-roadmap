find()

Agora vamos para o próximo método.

Objetivo: encontrar um único elemento no array.

const numeros = [10, 20, 30, 40];

const resultado = numeros.find((numero) => numero > 25);

console.log(resultado);

Resultado:

30

👉 Diferente do filter(), que retorna um array, o find() retorna o primeiro elemento que atende à condição.
