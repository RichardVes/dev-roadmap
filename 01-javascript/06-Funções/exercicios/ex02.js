/*Exercício 2 — Função + retorno
Crie uma função chamada:
    calcularDobro
Ela deve:
    receber um número;
    calcular o dobro;
    retornar o resultado.
Depois, faça:
    const resultado = calcularDobro(10);
    console.log(resultado);
A saída esperada é:
    20
⚠️ Atenção
Dessa vez não quero console.log() dentro da função.
Quero que você pratique a diferença entre:
console.log()
e
return
*/
function calcularDobro(num) {
  return num * 2;
}
const num = 2;
const dobro = calcularDobro(num);
console.log(`O dobro de ${num} é ${dobro}`);
