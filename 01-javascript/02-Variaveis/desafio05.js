/*Desafio 05 — Sistema de pagamento
Uma empresa precisa calcular o pagamento de um funcionário.
Dados:
    Salário base: R$ 3.200
    Horas extras: 10
    Valor da hora extra: R$ 25
    Desconto: R$ 450
O programa deve calcular:
    Salário base: ...
    Horas extras: ...
    Valor da hora extra: ...
    Valor total das horas extras: ...
    Desconto: ...
    Salário final: ...
Regras
Use apenas os conceitos que já estudamos.
    Você deverá decidir sozinho:
    quais valores devem ser const;
    qual valor precisa ser calculado;
    como calcular as horas extras;
    como chegar ao salário final.*/

const salarioBase = 3200;
const horasExtras = 10;
const valorHoraExtra = 25;
const desconto = 450;

console.log("Salário base: ", salarioBase);
console.log("Horas extras: ", horasExtras);
console.log("Valor da hora extra: ", valorHoraExtra);
const valorTotalHorasExtras = horasExtras * valorHoraExtra;
console.log("Valor total das horas extras: ", valorTotalHorasExtras);
console.log("Desconto: ", desconto);
const salarioFinal = salarioBase + valorTotalHorasExtras - desconto;
console.log("Salário final: ", salarioFinal);
