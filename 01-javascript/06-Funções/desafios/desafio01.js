/*Desafio 01 — Analisador de Compra
Você está desenvolvendo uma função para um sistema de caixa.
Crie uma função chamada analisarCompra que receba três parâmetros:
    preco
    quantidade
    dinheiro
A função deve calcular o valor total da compra e determinar a situação do cliente.
Regras
    Calcule o total da compra:
        preço × quantidade
    Se o dinheiro disponível for menor que o total, a função deve informar:
        "Dinheiro insuficiente"
    Se o dinheiro for suficiente:
        calcule o troco;
    se o troco for 0, informe "Compra exata";
        caso contrário, informe o valor do troco.
A função não deve apenas imprimir os resultados.
Ela deve retornar alguma informação para quem chamou a função.*/
function analisarCompra(preco, quantidade, dinheiro) {
  const totalcompra = preco * quantidade;
  if (dinheiro < totalcompra) {
    return "Dinheiro insuficiente";
  }
  const troco = dinheiro - totalcompra;
  if (troco === 0) {
    return "Compra exata";
  } else {
    return troco;
  }
}
console.log(analisarCompra(100, 2, 300));
