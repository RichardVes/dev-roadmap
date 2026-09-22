reduce()

Serve para reduzir um array a um único resultado.

Exemplo clássico: somar números.

const numeros = [10, 20, 30, 40];

const total = numeros.reduce((acumulador, numero) => {
return acumulador + numero;
}, 0);

console.log(total);

Resultado:

100

A ideia principal:

array → reduce() → um resultado
