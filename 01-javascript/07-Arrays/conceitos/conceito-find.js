/*ício
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Teclado", preco: 250 }
];

Use find() para encontrar o primeiro produto com preço maior que 1000.*/
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Teclado", preco: 250 },
];
const resultado = produtos.find((produto) => produto.preco > 1000);
const buscaProduto = produtos.find((produto) => produto.nome === "Monitor");
console.log(resultado);
console.log(buscaProduto);
