/*Exercício 5 — Dois parâmetros e reutilização
Agora quero testar algo um pouco diferente.
Crie uma função chamada:
verificarMaior
Ela recebe dois números e retorna:
    "O primeiro número é maior"
    "O segundo número é maior"
    "Os números são iguais"
Exemplo:
    const resultado = verificarMaior(10, 5);
    console.log(resultado);
Resultado:
    O primeiro número é maior
    Regras
    Use function.
    Receba dois parâmetros.
    Use condicionais.
    Use return.
    Trate a situação em que os números são iguais.*/
function verificarMaior(num1, num2) {
  if (num1 > num2) {
    return `${num1} é MAIOR que ${num2}`;
  }
  if (num2 > num1) {
    return `${num2} é MAIOR que ${num1}`;
  }
  return `${num1} e ${num2} são iguais.`;
}
console.log(verificarMaior(1, 1));
