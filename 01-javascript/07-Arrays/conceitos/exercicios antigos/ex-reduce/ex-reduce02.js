/*reduce() com regra de negócio
Agora vamos sair da simples soma e colocar uma situação mais próxima de um sistema real:
Regra de negócio
O sistema precisa calcular o faturamento total da loja.
Para cada venda:
    faturamento da venda = quantidade × preco
    Depois, todos os faturamentos devem ser acumulados em um único resultado.*/
const vendas = [
  { produto: "Notebook", quantidade: 2, preco: 3500 },
  { produto: "Mouse", quantidade: 5, preco: 80 },
  { produto: "Teclado", quantidade: 3, preco: 150 },
  { produto: "Monitor", quantidade: 2, preco: 1200 },
  { produto: "Headset", quantidade: 4, preco: 300 },
];
const precoQuantidade = vendas.reduce((acumulador, produto) => {
  return acumulador + produto.quantidade * produto.preco;
}, 0);

console.log(precoQuantidade);
/*Regra de negócio
O sistema precisa calcular o faturamento somente das vendas cujo valor 
individual seja superior a R$ 500.
O valor individual da venda é:
quantidade × preço*/
const vendasAcima500 = vendas.reduce((acumulador, produto) => {
  let faturamento = produto.quantidade * produto.preco;
  if (faturamento > 500) {
    //console.log(acumulador + produto.quantidade * produto.preco);
    return acumulador + faturamento;
  }
  return acumulador;
}, 0);
console.log(vendasAcima500);
