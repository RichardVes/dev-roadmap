slice()

O método slice() é usado para extrair uma parte de um array, retornando um novo array.

Sintaxe
array.slice(inicio, fim);
inicio: índice onde começa a extração.
fim: índice onde termina.
O índice fim não é incluído.
Exemplo
const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.slice(1, 4);

console.log(resultado);

Resultado:

[20, 30, 40]

Visualmente:

Índices: 0 1 2 3 4
Valores: 10 20 30 40 50
↑ ↑
início fim (não entra)
