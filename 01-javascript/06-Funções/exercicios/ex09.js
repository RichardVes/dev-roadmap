/*Exercicio 09 - função dentro de função?
Agora quero subir um degrau.
Crie uma função:
    calcularMedia(nota1, nota2, nota3)
Ela deve:
    Receber três notas.
    Calcular a média.
    Retornar a média.

Depois:

const media = calcularMedia(7, 8, 9);

E, usando outra função, crie:

verificarAprovacao(media)

Ela deve retornar:

"Aprovado" se a média for >= 6;
"Reprovado" caso contrário.

No final, faça algo como:

Média: 8
Resultado: Aprovado

Desafio: tente fazer as duas funções sem eu fornecer a estrutura delas.
Aqui quero ver se você consegue fazer uma função receber o resultado produzido por outra função.*/
const calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
const media = calcularMedia(7, 8, 9);
const verificarAprovacao = (media) => {
  if (media < 0 || media > 10) {
    return "Media Invalida";
  }
  if (media >= 6) {
    return "Aprovado";
  }
  return "Reprovado";
};
console.log(`Média: ${media} \nResultado: ${verificarAprovacao(media)}`);
