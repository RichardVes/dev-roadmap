/* Exercício 4 — Função que decide
Agora vamos combinar função + retorno + condição.
Crie uma função:
verificarAprovacao
Ela deve receber uma nota e retornar:
"Aprovado"
se a nota for >= 6, ou:
"Reprovado"
se for menor que 6.
Por exemplo:
const resultado = verificarAprovacao(7);
console.log(resultado);
Deve produzir:
    Aprovado
Regras
    Use function tradicional.
    Receba uma nota como parâmetro.
    Use if/else.
    Use return.
    Não coloque console.log() dentro da função.

Aqui quero ver se você entendeu uma coisa fundamental:
    função
    ↓
    recebe informação
    ↓
    processa
    ↓
    retorna resultado
    ↓
    outra parte do programa usa o resultado*/
function verificarAprovacao(nota) {
  if (nota < 0 || nota > 10) {
    return "Nota invalida";
  } else if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log(verificarAprovacao(7));
