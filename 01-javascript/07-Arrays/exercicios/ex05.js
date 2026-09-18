/*5 — Fechamento de vendas por vendedor
const vendas = [
  { vendedor: "Carlos", produto: "Notebook", quantidade: 2, preco: 3500 },
  { vendedor: "Ana", produto: "Mouse", quantidade: 5, preco: 80 },
  { vendedor: "Carlos", produto: "Monitor", quantidade: 3, preco: 1200 },
  { vendedor: "Bruno", produto: "Teclado", quantidade: 4, preco: 250 },
  { vendedor: "Ana", produto: "Notebook", quantidade: 1, preco: 3500 },
  { vendedor: "Bruno", produto: "Headset", quantidade: 6, preco: 180 },
  { vendedor: "Carlos", produto: "Mouse", quantidade: 10, preco: 80 },
  { vendedor: "Ana", produto: "Monitor", quantidade: 2, preco: 1200 },
];
Regras de negócio
A empresa precisa de um ranking de vendedores.
Para cada vendedor, o relatório deve apresentar:
    vendedor
    totalVendas → quantidade de vendas realizadas
    quantidadeItens → total de produtos vendidos
    faturamento → soma do valor de todas as vendas

Depois:
    Cada vendedor deve aparecer uma única vez.
    O faturamento deve considerar quantidade × preco de cada venda.
    totalVendas conta quantas vendas diferentes o vendedor realizou.
    quantidadeItens soma as quantidades vendidas.
    Ordene os vendedores pelo faturamento, do maior para o menor.
    O array original vendas não pode ser alterado.
    Não coloque informações que não fazem parte do relatório.
    O resultado deve ser uma nova estrutura.*/
const vendas = [
  { vendedor: "Carlos", produto: "Notebook", quantidade: 2, preco: 3500 },
  { vendedor: "Ana", produto: "Mouse", quantidade: 5, preco: 80 },
  { vendedor: "Carlos", produto: "Monitor", quantidade: 3, preco: 1200 },
  { vendedor: "Bruno", produto: "Teclado", quantidade: 4, preco: 250 },
  { vendedor: "Ana", produto: "Notebook", quantidade: 1, preco: 3500 },
  { vendedor: "Bruno", produto: "Headset", quantidade: 6, preco: 180 },
  { vendedor: "Carlos", produto: "Mouse", quantidade: 10, preco: 80 },
  { vendedor: "Ana", produto: "Monitor", quantidade: 2, preco: 1200 },
];
function filtrarVendedor(nome) {
  const vendedores = vendas.filter((venda) => venda.vendedor === nome);
  return vendedores;
}
function produtosVendidos(vendedores) {
  const totalVenda = vendedores.reduce((acumulador, venda) => {
    return acumulador + venda.quantidade;
  }, 0);
  return totalVenda;
}
function quantidadesVendas(vendedores) {
  const totalVenda = vendedores.reduce((acumulador, venda) => {
    acumulador += 1;
    return acumulador;
  }, 0);
  return totalVenda;
}

function somaTodasVendas(vendedores) {
  const totalVendas = vendedores.reduce((acumulador, numero) => {
    return acumulador + numero.preco * numero.quantidade;
  }, 0);
  return totalVendas;
}

function relatorio(nome) {
  const vendedores = filtrarVendedor(nome);
  const pVendidos = produtosVendidos(vendedores);
  const qVendas = quantidadesVendas(vendedores);
  const sVendas = somaTodasVendas(vendedores);
  return {
    vendedor: vendedores[0].vendedor,
    totalVendas: qVendas,
    quantidadeItens: pVendidos,
    faturamento: sVendas,
  };
}
function ranking(vendedor1, vendedor2, vendedor3) {
  const rankingParcial = [vendedor1, vendedor2, vendedor3];
  rankingParcial.sort((a, b) => b.faturamento - a.faturamento);
  return rankingParcial;
}

ana = relatorio("Ana");
bruno = relatorio("Bruno");
carlos = relatorio("Carlos");
console.log(ranking(ana, bruno, carlos));
