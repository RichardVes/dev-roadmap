/*Exercício 3 — Parâmetros + retorno
Agora vamos aumentar um pouco.
Crie uma função chamada:
    calcularMedia
Ela deve receber três notas e retornar a média delas.
Por exemplo:
    const media = calcularMedia(8, 7, 9);
    console.log(media);
Resultado:
    8
Regras
    Use function.
    Receba três parâmetros.
    Use return.
    Não coloque o console.log() dentro da função.
    A função deve funcionar para quaisquer três notas.
Pense primeiro na fórmula:
    (nota1 + nota2 + nota3) / 3*/
const nota1 = 6;
const nota2 = 8;
const nota3 = 9.5;
const media = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
const resultado = media(nota1, nota2, nota3);
console.log(
  `Notas: ${nota1},${nota2},${nota3}\nMedia: ${resultado.toFixed(2)}`,
);
