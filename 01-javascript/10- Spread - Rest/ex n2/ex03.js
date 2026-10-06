/*Exercicio 3 - rest + reduce
Crie uma função chamada calcularTotal.
Ela deverá receber uma quantidade variável de valores e retornar a soma de todos eles.
Regras de negócio
    A função deve aceitar qualquer quantidade de números.
    Os números devem ser recebidos através de Rest.
    A função deve retornar a soma dos valores.
    Não defina uma quantidade fixa de parâmetros.
    Utilize reduce() para realizar a soma.
    Não utilize for, while ou forEach().
Exemplos de chamadas
    Você pode testar com diferentes quantidades de valores:
        calcularTotal(10, 20, 30);
        calcularTotal(5, 15);
        calcularTotal(10, 20, 30, 40, 50);*/
function calcularTotal(...valores) {
  return valores.reduce((acumulador, elemento) => acumulador + elemento, 0);
}
console.log(calcularTotal(10, 20, 30, 40));
