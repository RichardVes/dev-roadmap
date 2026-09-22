// const resultado = array.reduce((acumulador, elemento) => {
//     processamento
//     return acumulador;
// }, valorInicial);

/*Primeiro desafio com reduce()
Vamos começar no seu nível atual, sem complicar.
Regra de negócio
    O sistema precisa calcular o faturamento total das vendas.
    Crie uma variável que receba o resultado do reduce().*/
const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 80 },
  { produto: "Teclado", valor: 150 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Headset", valor: 300 },
];
const resultado = vendas.reduce((acumulador, elemento) => {
  return acumulador + elemento.valor;
}, 0);

console.log(resultado);
