/*Exercício 4 — Rest + Destructuring
Considere uma lista de notas:
const notas = [8, 7, 9, 6, 10];
Crie uma função chamada analisarNotas.
Regras de negócio
    A função deve receber as notas utilizando Rest.
    A primeira nota deve ser separada das demais utilizando Destructuring.
    As demais notas devem ficar agrupadas em uma variável utilizando Rest.
    A função deve retornar um objeto contendo:
    a primeira nota;
    as demais notas;
    a quantidade de notas restantes.
    Utilize apenas conceitos que você já estudou.*/

const notas = [8, 7, 9, 6, 10];
function analisarNotas(conjuntoNotas) {
  const [primeira, ...restantes] = conjuntoNotas;
  const tamanho = restantes.length;
  const objetoNotas = {
    primeira,
    restantes,
    tamanho,
  };
  return objetoNotas;
}
console.log(analisarNotas(notas));
