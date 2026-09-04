/*Desafio 5 — Sistema de notas
Você recebeu este objeto:
    const alunos = {
    Ana: 8,
    Carlos: 5,
    João: 7,
    Maria: 4,
    Pedro: 9
    };
Percorra o objeto e mostre:
    o nome do aluno;
    a nota;
    se ele está Aprovado ou Reprovado.
Considere:
    nota >= 6 → Aprovado
    nota < 6  → Reprovado
A saída deve ficar aproximadamente assim:
    Ana: 8 - Aprovado
    Carlos: 5 - Reprovado
    João: 7 - Aprovado
    Maria: 4 - Reprovado
    Pedro: 9 - Aprovado
Regras
    Use for...in.
    Use if/else.
    Use template literal para montar a saída.
    Não altere o objeto.*/
const alunos = {
  Ana: 8,
  Carlos: 5,
  João: 7,
  Maria: 4,
  Pedro: 9,
};
for (let aluno in alunos) {
  if (alunos[aluno] >= 6) {
    console.log(`${aluno}: ${alunos[aluno]} - Aprovado`);
  } else {
    console.log(`${aluno}: ${alunos[aluno]} - Reprovado`);
  }
}
