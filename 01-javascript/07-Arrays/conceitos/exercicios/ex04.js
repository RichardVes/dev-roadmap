/*Relatório de vendas
Uma empresa possui o seguinte histórico:
    const vendas = [
    { vendedor: "Carlos", produto: "Notebook", quantidade: 2, preco: 3500 },
    { vendedor: "Ana", produto: "Mouse", quantidade: 5, preco: 80 },
    { vendedor: "Carlos", produto: "Monitor", quantidade: 3, preco: 1200 },
    { vendedor: "Bruno", produto: "Teclado", quantidade: 4, preco: 250 },
    { vendedor: "Ana", produto: "Notebook", quantidade: 1, preco: 3500 },
    { vendedor: "Bruno", produto: "Headset", quantidade: 6, preco: 180 },
    { vendedor: "Carlos", produto: "Mouse", quantidade: 10, preco: 80 },
    ];
Regras de negócio
O sistema precisa gerar um relatório com cada venda contendo:
    vendedor
    produto
    quantidade
    valorTotal → quantidade × preço
    classificacao
A classificação deve ser:
    valor total menor que 500 → "pequena"
    valor total de 500 até 1999 → "media"
    valor total 2000 ou maior → "grande"
Depois:
    Considere somente vendas cujo valorTotal seja maior ou igual a 500.
    Ordene o relatório pelo valorTotal, do maior para o menor.
    O array vendas original não pode ser alterado.
    Os objetos originais também não podem ser modificados.
    O relatório deve ser uma nova estrutura.*/
const vendas = [
  { vendedor: "Carlos", produto: "Notebook", quantidade: 2, preco: 3500 },
  { vendedor: "Ana", produto: "Mouse", quantidade: 5, preco: 80 },
  { vendedor: "Carlos", produto: "Monitor", quantidade: 3, preco: 1200 },
  { vendedor: "Bruno", produto: "Teclado", quantidade: 4, preco: 250 },
  { vendedor: "Ana", produto: "Notebook", quantidade: 1, preco: 3500 },
  { vendedor: "Bruno", produto: "Headset", quantidade: 6, preco: 180 },
  { vendedor: "Carlos", produto: "Mouse", quantidade: 10, preco: 80 },
];
const vendasProcessadas = vendas.map((venda) => {
  const valorParcial = venda.quantidade * venda.preco;
  return {
    vendedor: venda.vendedor,
    produto: venda.produto,
    quantidade: venda.quantidade,
    valorTotal: valorParcial,
    classificacao:
      valorParcial < 500 ? "pequena" : valorParcial < 2000 ? "media" : "grande",
  };
});
const vendasOrganizadas = vendasProcessadas.filter(
  (preco) => preco.valorTotal >= 500,
);
vendasOrganizadas.sort((a, b) => b.valorTotal - a.valorTotal);
console.log(vendasOrganizadas);
