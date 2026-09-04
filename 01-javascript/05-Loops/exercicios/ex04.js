/*Exercício 04 — for...in
Considere:
const aluno = {
    nome: "Richard",
    curso: "TADS",
    periodo: 4
};
Use for...in para mostrar as propriedades e seus respectivos valores.
Resultado esperado:
    nome: Richard
    curso: TADS
    periodo: 4*/
const aluno = {
  nome: "Richard",
  curso: "TADS",
  periodo: 4,
};
for (const propriedade in aluno) {
  console.log(propriedade);
  console.log(aluno[propriedade]);
}
