/*map() com objetos
Agora aumentamos um nível.
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 }
];
Crie um novo array contendo objetos com:
    nome
    preco
    precoComDesconto
O desconto deve ser de 15%.*/
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 800 },
  { nome: "Headset", preco: 200 },
];
const produtosComDesconto = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: produto.preco,
    precoComDesconto: produto.preco - produto.preco * 0.15,
  };
});
console.log(produtosComDesconto);
