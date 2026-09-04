/*Desafio 03 — Sistema de Caixa Eletrônico
Você precisa criar uma simulação simplificada de um caixa eletrônico.
O sistema possui um saldo inicial e permite três operações:
    SAQUE
    DEPÓSITO
    CONSULTA
A função principal deve se chamar:
    operacaoConta(tipo, valor)
O saldo da conta deve existir fora da função.
Exemplo conceitual:
    let saldo = 1000;
Regras
    1. Consulta
        Se:
        operacaoConta("consulta")
        O sistema deve retornar o saldo atual.
    2. Depósito
        Se:
        operacaoConta("deposito", 500)
        O valor deve ser adicionado ao saldo.
        Mas existem regras:
            o valor precisa ser maior que zero;
            não pode depositar valor negativo;
            não pode depositar 0.
    3. Saque
        Se:
        operacaoConta("saque", 300)
        O valor deve ser removido do saldo.
        Regras:
            valor maior que zero;
            saldo suficiente;
            não permitir saldo negativo.
            Regra especial — limite diário
                O cliente possui um limite máximo de saque diário:
                    1000 reais
Exemplo:
    Saldo: 5000
    Saque 1: 600
    Saque 2: 500
    O segundo saque deve ser negado.
Você precisa controlar quanto já foi sacado no dia.
Operações inválidas
Se alguém chamar:
    operacaoConta("pix", 200)
O sistema deve retornar algo indicando operação inválida.*/
function operacaoConta(tipo, valor) {
  if (saldo < 0) {
    return `Erro no valor do SALDO`;
  }
  if (valor <= 0) {
    return `Valor insulficiente!`;
  }
  if (tipo === "consulta") {
    consulta();
    return `Valor atual: $ ${saldo}`;
  }
  if (tipo === "deposito") {
    deposito(valor);
    return `Valor de $${valor} Reais, DEPOSITADO com sucesso;\nSaldo atual: $${saldo} Reais`;
  }
  if (tipo === "saque") {
    if (saldo < valor) {
      return "Saldo invalido para ser Sacado";
    }
    // saqueLimiteDiario -= valor;
    if (saqueLimiteDiario - valor < 0) {
      return "Você atingiu o limite do saque diario, aguarde até amanha!";
    }
    saqueLimiteDiario -= valor;
    saque(valor);
    return `Valor de $${valor} Reais, SACADO com sucesso;\nSaldo atual: $${saldo} Reais`;
  }
  return `Operação ${tipo} invalida para nosso sistema!`;
}
function consulta() {
  return saldo;
}
function deposito(valor) {
  saldo = saldo + valor;
}

function saque(valor) {
  saldo = saldo - valor;
}
let saldo = 2000;
let saqueLimiteDiario = 1000;
console.log(operacaoConta("consulta", saldo));
console.log(operacaoConta("deposito", 20));
console.log(operacaoConta("saque", 600));
console.log(operacaoConta("saque", 600));
console.log(operacaoConta("pix", 600));
