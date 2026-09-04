/*Desafio 4 — for...in
Agora vamos testar justamente essa diferença.
Considere:
    const aluno = {
    nome: "Richard",
    curso: "TADS",
    periodo: 4,
    idade: 30
    };
Faça um programa que percorra o objeto e mostre a propriedade e o valor.
Resultado esperado:
nome: Richard
    curso: TADS
    periodo: 4
    idade: 30
Regras
    Use for...in.
    Não escreva cada propriedade manualmente.
    Use a variável da iteração para acessar o valor.
💡 Dica: lembre do exercício que você fez anteriormente com objetos.*/
const aluno = {
  nome: "Richard",
  curso: "TADS",
  periodo: 4,
  idade: 30,
};
//for (valor in aluno) {
//  console.log(valor, aluno[valor]);
//}

for (let valor in aluno) {
  console.log(`${valor}: ${aluno[valor]}`);
}
