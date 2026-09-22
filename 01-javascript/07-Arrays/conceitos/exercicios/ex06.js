/*Exercício 6 — Ranking automático de vendedores
Vamos manter os mesmos dados:
Regras de negócio
    A empresa quer gerar o ranking automaticamente, sem informar os nomes dos vendedores manualmente.
    O sistema deve:
        1- Identificar todos os vendedores existentes nas vendas.
          Cada vendedor deve aparecer uma única vez.
        2- Para cada vendedor, gerar:
          vendedor
          totalVendas
            totalVendas representa a quantidade de vendas realizadas pelo vendedor.
          quantidadeItens
            quantidadeItens representa a soma das quantidades vendidas.
          faturamento
            faturamento representa a soma de quantidade × preco.
        Ordenar o ranking pelo faturamento, do maior para o menor.
        O código deve continuar funcionando se eu adicionar outro vendedor às vendas.
    O array original vendas não pode ser alterado.*/
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
// map()
// filter()
// reduce()
// sort()

// Cria um array com os vendedores
function filtraVendedores() {
  const vendedorUnico = [];
  const filtroVendedores = vendas.map((vendedores) => {
    let existe = false;
    if (vendedorUnico.includes(vendedores.vendedor)) {
      existe = true;
    }
    if (existe === false) {
      vendedorUnico.push(vendedores.vendedor);
    }
  });
  return vendedorUnico;
}
// Filtra vendas por vendedor
function filtroVendaPorVendedor(saidaFiltraVendedores) {
  const vendaDosVendedores = saidaFiltraVendedores.map((vendedor) => {
    const vendaPorVendedor = vendas.filter(
      (venda) => venda.vendedor === vendedor,
    );

    return vendaPorVendedor;
  });
  return vendaDosVendedores;
}

// Calcula o total de vendas por vendedor
function totalVendas(saidaFiltroVendaPorVendedor) {
  const vendaDosVendedores = saidaFiltroVendaPorVendedor.map((vendedor) => {
    const numeroVendas = vendedor.reduce((acumulador) => {
      return acumulador + 1;
    }, 0);
    return numeroVendas;
  });
  return vendaDosVendedores;
}
// Soma a quantidade de itens vendidos
function totalQuantidadeItensVendidos(saidaFiltroVendaPorVendedor) {
  const vendaDosVendedores = saidaFiltroVendaPorVendedor.map((vendedor) => {
    const numeroVendas = vendedor.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantidade;
    }, 0);
    return numeroVendas;
  });
  return vendaDosVendedores;
}
// Soma o total gasto (preço * quantidade) nas vendas filtradas
function totalfaturamento(saidaFiltroVendaPorVendedor) {
  const vendaDosVendedores = saidaFiltroVendaPorVendedor.map((vendedor) => {
    const numeroVendas = vendedor.reduce((acumulador, elemento) => {
      return acumulador + elemento.preco * elemento.quantidade;
    }, 0);
    return numeroVendas;
  });
  return vendaDosVendedores;
}
// Cria array de ranking e o ordena
function ranking(
  saidaFiltraVendedores,
  saidaTotalVendas,
  saidatotalfaturamento,
  saidatotalQuantidadeItensVendidos,
) {
  const saidavendedor = saidaFiltraVendedores.map((vendedor, indice) => {
    return {
      vendedor,
      totalVendas: saidaTotalVendas[indice],
      faturamento: saidatotalfaturamento[indice],
      quantidadeItens: saidatotalQuantidadeItensVendidos[indice],
    };
  });

  return saidavendedor;
}
// Ordenando em ordem decrescente
function ordenandoDecrescente(saidaranking) {
  saidaranking.sort((a, b) => b.faturamento - a.faturamento);
  return saidaranking;
}

//função principal
function main() {
  const saidaFiltraVendedores = filtraVendedores();
  const saidaFiltroVendaPorVendedor = filtroVendaPorVendedor(
    saidaFiltraVendedores,
  );
  const saidaTotalVendas = totalVendas(saidaFiltroVendaPorVendedor);
  const saidatotalfaturamento = totalfaturamento(saidaFiltroVendaPorVendedor);
  const saidatotalQuantidadeItensVendidos = totalQuantidadeItensVendidos(
    saidaFiltroVendaPorVendedor,
  );
  const saidaranking = ranking(
    saidaFiltraVendedores,
    saidaTotalVendas,
    saidatotalfaturamento,
    saidatotalQuantidadeItensVendidos,
  );
  const saidaOrdenandoDecrescente = ordenandoDecrescente(saidaranking);
  console.log(saidaOrdenandoDecrescente);
}
main();
