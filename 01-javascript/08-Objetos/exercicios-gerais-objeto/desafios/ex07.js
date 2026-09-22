/*Você está desenvolvendo o inventário de um personagem de RPG.
Cada item possui:
    nome
    categoria
    preco
    quantidade
O inventário possui vários itens.
Regras de negócio
    O sistema deve armazenar todos os itens em um array de objetos.
    Itens com quantidade 0 são considerados esgotados.
    O sistema deve identificar somente os itens disponíveis.
    Entre os itens disponíveis, deve identificar quais pertencem à categoria "arma".
    O sistema deve calcular o valor total em estoque considerando:  preco × quantidade
    O sistema deve informar quantos itens diferentes estão disponíveis.
    O sistema deve utilizar conceitos que você já estudou.
*/
const inventario = [
  { nome: "Espada", categoria: "arma", preco: 120, quantidade: 2 },
  { nome: "Lança", categoria: "arma", preco: 150, quantidade: 3 },
  { nome: "Arco", categoria: "arma", preco: 200, quantidade: 0 },
  { nome: "Capacete", categoria: "armadura", preco: 50, quantidade: 1 },
  { nome: "Luva", categoria: "armadura", preco: 20, quantidade: 3 },
  { nome: "Bota", categoria: "armadura", preco: 25, quantidade: 5 },
  { nome: "Bota", categoria: "armadura", preco: 25, quantidade: 5 },
  { nome: "Calça", categoria: "armadura", preco: 30, quantidade: 0 },
];
function validaItens(tipo) {
  if (tipo === "comEstoque") {
    const itensValidos = inventario.filter((item) => item.quantidade > 0);
    return itensValidos;
  }
}
function itemArma(itens) {
  const armas = itens.filter((item) => item.categoria === "arma");
  return armas;
}
function totalDisponivel(itens) {
  const total = itens.reduce((acumulador, elemento) => {
    return acumulador + elemento.preco * elemento.quantidade;
  }, 0);
  return total;
}
function verificaDuplicidade(itens) {
  //   let existe = false;
  const itensUnicos = [];
  for (const item of itens) {
    let existe = false;
    for (const itemUnico of itensUnicos) {
      if (item.nome === itemUnico.nome) {
        existe = true;
      }
    }
    if (existe === false) {
      itensUnicos.push(item);
    }
  }
  return itensUnicos;
}
const disponiveis = validaItens("comEstoque");
console.log(itemArma(disponiveis));
const totalPreco = totalDisponivel(disponiveis);
console.log(totalPreco);
console.log(verificaDuplicidade(disponiveis));
