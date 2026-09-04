/*Desafio 02 — Sistema de Avaliação
Agora vamos subir o nível.
Você precisa criar uma função chamada:
    avaliarAluno(nome, nota1, nota2, nota3)
Ela deve receber o nome do aluno e três notas e determinar a situação acadêmica dele.
Regras
    A média deve ser calculada considerando as três notas.
    Depois, a função deve analisar a situação:
    Média ≥ 7 → "Aprovado"
    Média ≥ 5 e < 7 → "Recuperação"
    Média < 5 → "Reprovado"
Mas existe uma regra adicional:
    Se alguma das três notas for menor que 3, o aluno será Reprovado automaticamente, independentemente da média.
O retorno
    A função deve retornar uma mensagem contendo:
        nome do aluno;
        média;
        situação.
Por exemplo, conceitualmente:
Richard - Média: 8 - Aprovado*/
function avaliarAluno(nome, nota1, nota2, nota3) {
  const notas = verificarNotasInvalidas(nota1, nota2, nota3);
  if (notas === false) {
    return "Notas Invalidas!";
  }
  const media = calcularMedia(nota1, nota2, nota3);
  const situacao = calcularSituacao(nota1, nota2, nota3, media);
  return `${nome}\n${media}\n${situacao}`;
}
function verificarNotasInvalidas(nota1, nota2, nota3) {
  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10
  ) {
    return false;
  }
}
const calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
function calcularSituacao(nota1, nota2, nota3, media) {
  //   if (media < 0 || media > 10) {
  //     return "Media invalida";
  //   }
  if (nota1 < 3 || nota2 < 3 || nota3 < 3 || media < 5) {
    return "Reprovado";
  } else if (media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(`${avaliarAluno("Richard", 10, 0, 9)}`);
