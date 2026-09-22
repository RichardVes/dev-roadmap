/*Exercício 4 — próximo nível
Agora vamos trabalhar com uma transformação um pouco mais completa.
const funcionarios = [
  { nome: "Ana", salario: 3000 },
  { nome: "Carlos", salario: 4500 },
  { nome: "Marina", salario: 5200 },
  { nome: "João", salario: 2800 },
];
Crie um novo array contendo objetos com:
    nome
    salario
    salarioAnual
    nivel
Regras:
    salarioAnual deve representar o salário mensal multiplicado por 12.
    nivel deve ser "Junior" para salários menores que 3500.
    nivel deve ser "Pleno" para salários entre 3500 e 4999.
    nivel deve ser "Senior" para salários maiores ou iguais a 5000.
O array original não deve ser alterado.*/
const funcionarios = [
  { nome: "Ana", salario: 3000 },
  { nome: "Carlos", salario: 4500 },
  { nome: "Marina", salario: 5200 },
  { nome: "João", salario: 2800 },
];
const funcionariosNovo = funcionarios.map((funcionario) => {
  return {
    nome: funcionario.nome,
    salario: funcionario.salario,
    salarioAnual: funcionario.salario * 12,
    nivel:
      funcionario.salario < 3500
        ? "Junior"
        : funcionario.salario <= 4999
          ? "Pleno"
          : "Senior",
  };
});
console.log(funcionariosNovo);
