método: map()

Agora entramos em um conceito que costuma confundir iniciantes porque parece semelhante ao forEach().

Observe:

forEach()
↓
Executa uma ação para cada elemento
↓
Não cria um novo array automaticamente

map()
↓
Transforma cada elemento
↓
Cria um novo array

Exemplo simples:

const numeros = [1, 2, 3, 4];

const dobro = numeros.map((numero) => {
return numero \* 2;
});

console.log(dobro);

Resultado:

[2, 4, 6, 8]

Visualmente:

[1, 2, 3, 4]
↓ ↓ ↓ ↓
x2 x2 x2 x2
↓ ↓ ↓ ↓
[2, 4, 6, 8]
A diferença fundamental

Com forEach():

const numeros = [1, 2, 3];

numeros.forEach((numero) => {
console.log(numero \* 2);
});

Ele apenas executa algo.

Com map():

const numeros = [1, 2, 3];

const dobrados = numeros.map((numero) => {
return numero \* 2;
});

Ele gera um novo array.

numeros → [1, 2, 3]

dobrados → [2, 4, 6]

O array original continua intacto.

map() — transformando objetos

Até agora fizemos:

const nomes = pedidos.map((pedido) => {
return pedido.cliente;
});

Isso transforma:

{ cliente: "Ana", valor: 150 }

em:

"Ana"

Mas o map() não precisa necessariamente transformar um objeto em uma string. Podemos transformar um objeto em outro objeto.

Exemplo

Temos:

const pedidos = [
{ cliente: "Ana", valor: 150 },
{ cliente: "Carlos", valor: 80 },
{ cliente: "Marina", valor: 220 }
];

Podemos criar um novo array contendo apenas:

[
{ cliente: "Ana", valor: 150 },
{ cliente: "Carlos", valor: 80 },
{ cliente: "Marina", valor: 220 }
]

Mas acrescentando uma nova informação calculada:

const pedidosComDesconto = pedidos.map((pedido) => {
return {
cliente: pedido.cliente,
valor: pedido.valor,
desconto: pedido.valor \* 0.10
};
});

console.log(pedidosComDesconto);

Resultado:

[
{ cliente: "Ana", valor: 150, desconto: 15 },
{ cliente: "Carlos", valor: 80, desconto: 8 },
{ cliente: "Marina", valor: 220, desconto: 22 }
]
O ponto importante

O map() não altera o objeto original.

Ele cria um novo array com os valores retornados:

Array original
↓
map()
↓
Novo array

E o que cada posição terá depende do return.

Por exemplo:

return pedido.cliente;

→ retorna uma string.

return pedido.valor \* 2;

→ retorna um number.

return {
cliente: pedido.cliente,
valor: pedido.valor
};

→ retorna um object.

Essa é uma das ideias mais importantes do map().
map() e cálculo durante a transformação

Podemos usar os dados do objeto para calcular um novo valor.

Exemplo:

const produtos = [
{ nome: "Teclado", preco: 100 },
{ nome: "Mouse", preco: 50 },
{ nome: "Monitor", preco: 800 }
];

const produtosComAumento = produtos.map((produto) => {
return {
nome: produto.nome,
preco: produto.preco \* 1.10
};
});

console.log(produtosComAumento);

Resultado:

[
{ nome: "Teclado", preco: 110 },
{ nome: "Mouse", preco: 55 },
{ nome: "Monitor", preco: 880 }
]

Aqui temos uma transformação mais interessante:

objeto original
↓
map()
↓
novo objeto
↓
valor calculado

O ponto fundamental é:

Cada elemento do array original gera exatamente um elemento no novo array.

Se temos 3 produtos, o resultado do map() terá 3 elementos.

Isso diferencia map() de métodos que veremos depois, como filter(), que pode produzir um array com menos elementos.

Conceito de map() está quase fechado. O próximo passo será fazer uma última aplicação conceitual um pouco mais próxima de código real e, depois, entramos oficialmente nos exercícios.

ok

Ótimo. Agora vamos para uma última aplicação conceitual de map(), mais próxima do que você vai encontrar em código real.

Considere:

const usuarios = [
{ nome: "Ana", idade: 25 },
{ nome: "Carlos", idade: 32 },
{ nome: "Marina", idade: 28 }
];

Podemos transformar os dados para gerar uma informação derivada:

const usuariosFormatados = usuarios.map((usuario) => {
return {
nome: usuario.nome,
maiorDeIdade: usuario.idade >= 18
};
});

console.log(usuariosFormatados);

Resultado:

[
{ nome: "Ana", maiorDeIdade: true },
{ nome: "Carlos", maiorDeIdade: true },
{ nome: "Marina", maiorDeIdade: true }
]

Aqui o map() está fazendo uma transformação completa:

Objeto original
↓
map()
↓
Novo objeto
↓
Propriedades originais + informação calculada
Fechamos o conceito de map()
