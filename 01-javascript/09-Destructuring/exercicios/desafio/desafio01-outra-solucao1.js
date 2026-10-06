/*Análise de desempenho acadêmico
Uma instituição precisa gerar um resumo do desempenho dos alunos em diferentes disciplinas.
Regras do sistema
Para cada aluno:
    Mostrar o nome e o curso.
    Considerar somente as disciplinas em que o aluno foi aprovado para : 
        Calcular a média de cada disciplina aprovada.
    Ao final, calcular a média geral considerando somente as disciplinas aprovadas.
    Mostrar também quantas disciplinas foram aprovadas.
    Um aluno pode possuir quantidades diferentes de disciplinas.
    Uma disciplina possui três notas, mas seu código não deve depender de valores específicos.
    Os dados originais não podem ser alterados.*/
const alunos = [
  {
    nome: "Marina",
    curso: "TADS",
    disciplinas: [
      { nome: "JavaScript", notas: [8, 7, 9], situacao: "aprovado" },
      { nome: "Banco de Dados", notas: [6, 7, 5], situacao: "aprovado" },
      {
        nome: "Engenharia de Software",
        notas: [4, 5, 3],
        situacao: "reprovado",
      },
    ],
  },
  {
    nome: "Carlos",
    curso: "TADS",
    disciplinas: [
      { nome: "JavaScript", notas: [9, 8, 10], situacao: "aprovado" },
      { nome: "Banco de Dados", notas: [7, 8, 9], situacao: "aprovado" },
    ],
  },
  {
    nome: "Beatriz",
    curso: "TADS",
    disciplinas: [
      { nome: "JavaScript", notas: [5, 6, 5], situacao: "reprovado" },
      { nome: "Banco de Dados", notas: [8, 9, 8], situacao: "reprovado" },
      {
        nome: "Engenharia de Software",
        notas: [0, 0, 0],
        situacao: "reprovado",
      },
    ],
  },
];
function resumo({ nome, curso, disciplinas }) {
  console.log(`O aluno(a): ${nome}, está cursando: ${curso} `);
  console.log("Disciplinas Aprovadas: ");
  let mediaTotal = 0;
  let acumuladorNotas = 0;
  let quantidadeDisciplinasAprovadas = 0;
  disciplinas.forEach((disciplina) => {
    const { nome, notas, situacao } = disciplina;
    if (situacao === "aprovado") {
      let mediaParcial = notas.reduce(
        (acumulador, nota) => acumulador + nota,
        0,
      );
      mediaParcial = mediaParcial / notas.length;
      console.log(`Nome: ${nome}, Media: ${mediaParcial.toFixed(2)}`);
      acumuladorNotas += mediaParcial;
      quantidadeDisciplinasAprovadas += 1;
    }
  });
  if (quantidadeDisciplinasAprovadas === 0) {
    mediaTotal = 0;
  } else {
    mediaTotal = acumuladorNotas / quantidadeDisciplinasAprovadas;
  }
  console.log(`Media total da disciplia: ${mediaTotal.toFixed(2)}`);
  console.log("\n");
}

alunos.forEach(resumo);
