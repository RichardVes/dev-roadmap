/*Exercício 6 — Arrow Function
Transforme esta função tradicional:
    function calcularQuadrado(numero) {
    return numero * numero;
    }
em uma arrow function.
Depois execute:
    console.log(calcularQuadrado(5));
Resultado esperado:
    25
Objetivo
    Quero ver se você entendeu as duas formas:
    function nome() {}
    versus:
    const nome = () => {}
    Pode fazer primeiro da forma completa, com {} e return.*/

const calcularQuadrado = (numero) => numero * numero;
console.log(calcularQuadrado(5));
