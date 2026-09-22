/*Você recebeu um sistema que precisa processar inscrições de alunos em uma disciplina.
Regras de negócio
Um aluno pode ser inscrito se:
    estiver ativo;
    tiver frequência maior ou igual a 75%;
    tiver nota maior ou igual a 7.
Porém, existe uma regra adicional:
    A turma precisa ter pelo menos um aluno de TADS e pelo menos um aluno de Engenharia.
Se uma das áreas não estiver representada entre os alunos elegíveis, o sistema deve tentar completar a turma procurando outro aluno daquele curso.
*/
const alunos = [
  {
    nome: "Ana",
    curso: "TADS",
    semestre: 4,
    frequencia: 85,
    nota: 8.5,
    ativo: true,
  },
  {
    nome: "Bruno",
    curso: "Engenharia",
    semestre: 2,
    frequencia: 92,
    nota: 6.5,
    ativo: true,
  },
  {
    nome: "Carlos",
    curso: "TADS",
    semestre: 3,
    frequencia: 70,
    nota: 9.0,
    ativo: true,
  },
  {
    nome: "Daniela",
    curso: "TADS",
    semestre: 5,
    frequencia: 95,
    nota: 7.0,
    ativo: false,
  },
  {
    nome: "Eduardo",
    curso: "Engenharia",
    semestre: 6,
    frequencia: 88,
    nota: 8.0,
    ativo: true,
  },
  {
    nome: "Fernanda",
    curso: "TADS",
    semestre: 2,
    frequencia: 91,
    nota: 9.5,
    ativo: true,
  },
  {
    nome: "Gabriel",
    curso: "TADS",
    semestre: 6,
    frequencia: 60,
    nota: 10.0,
    ativo: true,
  },
];
// cria turma
// verifica tads e ja adiciona na ausencia
// verifica eng e ja adiciona na ausencia
// mostra turma
function inscricaoDisciplina() {
  const inscrito = [];
  for (const aluno of alunos) {
    if (aluno.ativo === true && aluno.frequencia >= 75 && aluno.nota >= 7) {
      inscrito.push(aluno);
    }
  }
  return inscrito;
}
function verificaTADS(turma) {
  for (const aluno of turma) {
    if (aluno.curso === "TADS") {
      return turma;
    }
  }

  const novoAluno = adicionaTads(turma);
  turma.push(novoAluno);
  return turma;
}
function adicionaTads() {
  for (const aluno of alunos) {
    if (aluno.curso === "TADS") {
      return aluno;
    }
  }
}
function verificaEngenharia(turma) {
  for (const aluno of turma) {
    if (aluno.curso === "Engenharia") {
      return turma;
    }
  }
  const novoAluno = adicionaEngenharia(turma);
  turma.push(novoAluno);
  return turma;
}
function adicionaEngenharia() {
  for (const aluno of alunos) {
    if (aluno.curso === "Engenharia") {
      return aluno;
    }
  }
}

function verificaCursos(turma) {
  let novaTurma = verificaTADS(turma);
  novaTurma = verificaEngenharia(novaTurma);
  return novaTurma;
}

const inscritosDisciplina = inscricaoDisciplina();
const disciplina = verificaCursos(inscritosDisciplina);

console.log(disciplina);
