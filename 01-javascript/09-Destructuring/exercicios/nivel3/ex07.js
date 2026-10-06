/*Uma guilda possui vários personagens. Cada personagem possui informações básicas e uma lista de equipamentos.
Regras
Para cada personagem:
    Mostrar o nome e a classe.
    Considerar somente os equipamentos que estão equipados.
    Calcular o valor total dos equipamentos equipados.
    Mostrar o nome do personagem apenas uma vez.
O código deve funcionar mesmo que cada personagem possua uma quantidade diferente de equipamentos.
Não altere os dados originais.*/

const personagens = [
  {
    nome: "Anubiz",
    classe: "Guerreiro",
    equipamentos: [
      { nome: "Espada Lunar", tipo: "arma", equipado: true, valor: 1200 },
      { nome: "Escudo Real", tipo: "defesa", equipado: true, valor: 900 },
      { nome: "Anel Sombrio", tipo: "acessorio", equipado: false, valor: 500 },
    ],
  },
  {
    nome: "Lyria",
    classe: "Maga",
    equipamentos: [
      { nome: "Cajado Arcano", tipo: "arma", equipado: true, valor: 1500 },
      { nome: "Manto Místico", tipo: "defesa", equipado: false, valor: 1000 },
      { nome: "Amuleto Lunar", tipo: "acessorio", equipado: true, valor: 700 },
    ],
  },
  {
    nome: "Kael",
    classe: "Arqueiro",
    equipamentos: [
      { nome: "Arco Élfico", tipo: "arma", equipado: true, valor: 1300 },
      { nome: "Botas do Vento", tipo: "defesa", equipado: true, valor: 600 },
    ],
  },
];

function informacoes({ nome, classe, equipamentos }) {
  console.log(nome);
  console.log(classe);
  let valor = 0;
  equipamentos.forEach((item) => {
    if (item.equipado === true) {
      valor += item.valor;
    }
  });
  console.log(valor);
}

personagens.forEach(informacoes);
