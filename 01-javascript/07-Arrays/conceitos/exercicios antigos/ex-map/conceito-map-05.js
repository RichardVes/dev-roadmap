/*map() com transformação de objetos
Considere:
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "Marina", nota: 9 },
  { nome: "João", nota: 5 },
];
Crie um novo array em que cada objeto contenha:
    nome
    nota
    status
O status deve ser "Aprovado" para notas maiores ou iguais a 7 e "Reprovado" para notas menores que 7.*/
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "Marina", nota: 9 },
  { nome: "João", nota: 5 },
];
const alunosMelhorado = alunos.map((aluno) => {
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    status: aluno.nota >= 7 ? "Aprovado" : "Reprovado",
  };
});
console.log(alunosMelhorado);
