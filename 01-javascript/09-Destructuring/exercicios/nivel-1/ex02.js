/*Uma universidade possui os dados de um aluno:
Extraia nome, curso e periodo utilizando destructuring de objetos.
Depois, exiba as informações no console.*/
const aluno = {
  nome: "Carlos",
  curso: "TADS",
  periodo: "Noturno",
};
const { nome, curso, periodo } = aluno;
console.log(nome);
console.log(curso);
console.log(periodo);
