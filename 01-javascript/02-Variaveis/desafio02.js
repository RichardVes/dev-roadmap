/* Desafio 02
Uma pessoa possui uma conta bancária.
    Saldo inicial:
        R$ 3200
Movimentações, exatamente nesta ordem:
    Salário:    + R$ 2800
    Aluguel:    - R$ 1200
    Mercado:    - R$ 650
    Energia:    - R$ 180
    Freelance:  + R$ 900
Seu programa deve mostrar:
    Saldo inicial: ...
    Após salário: ...
    Após aluguel: ...
    Após mercado: ...
    Após energia: ...
    Após freelance: ...
    Saldo final: ...*/
const saldo_inicial = 3200;
const salario = 2800;
const aluguel = -1200;
const mercado = -650;
const energia = -180;
const freelance = 900;
console.log("Saldo inicial: ", saldo_inicial);
let saldo_parcial = saldo_inicial + salario;
console.log("Após salário: ", saldo_parcial);
saldo_parcial = saldo_parcial + aluguel;
console.log("Após aluguel: ", saldo_parcial);
saldo_parcial += mercado;
console.log("Após mercado: ", saldo_parcial);
saldo_parcial += energia;
console.log("Após energia: ", saldo_parcial);
saldo_parcial += freelance;
const saldo_final = saldo_parcial;
console.log("Após freelance: ", saldo_parcial);
console.log("Saldo final: ", saldo_final);
