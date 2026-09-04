/*Desafio 05 — Final de Funções
Este será o desafio final do módulo de Funções.
A ideia é juntar tudo o que você trabalhou até agora:
    parâmetros;
    retorno;
    funções auxiliares;
    validações;
    guard clauses;
    cálculos sequenciais;
    estado;
    responsabilidades;
    fluxo de dados.
Desta vez vou dar menos pistas arquiteturais.
🏢 Cenário: Sistema de Folha de Pagamento
    Você precisa criar um sistema simplificado para calcular o pagamento mensal de um funcionário.
    A função principal deve receber:
        nome
        salarioBase
        horasExtras
        faltas
        tipoContrato
    Você decide como organizar as funções.
    Regras
        1. Validação do salário
            O salário base deve ser maior que zero.
            Caso contrário:
                Funcionário inválido: salário inválido.
        2. Validação das horas extras
            As horas extras não podem ser negativas.
            Funcionário inválido: horas extras inválidas.
        3. Validação das faltas
            As faltas não podem ser negativas.
            Funcionário inválido: faltas inválidas.
        4. Tipo de contrato
            Existem três tipos:
                Tipo	Valor hora
                estagiario	salário / 160
                clt	salário / 220
                pj	salário / 160
            Qualquer outro contrato é inválido.
        5. Pagamento de horas extras
            As horas extras possuem multiplicadores diferentes.
                Contrato	Multiplicador
                estagiario	1.25
                clt	1.5
                pj	1.2
            Exemplo:
                Salário: 2200
                CLT
                Valor hora:
                2200 / 220 = 10
                10 horas extras:
                10 × 10 × 1.5 = 150
        6. Desconto por faltas
            Cada falta desconta:
                
            Exemplo:
                Valor hora: R$ 10
                2 faltas:
                10 × 8 × 2
                Desconto:
                R$ 160
        7. Bônus
            O funcionário recebe bônus dependendo das horas extras:
                Horas extras	Bônus
                Menos de 10	R$ 0
                Entre 10 e 20	R$ 100
                Acima de 20	R$ 250

            ⚠️ Pense cuidadosamente nos limites:
            9 horas
            10 horas
            20 horas
            21 horas
    8. Regra especial
        Se o funcionário tiver:
        mais de 5 faltas
        Ele perde qualquer bônus.
        Mesmo que tenha feito horas extras suficientes.
    9. Total final
        O cálculo final:
        salário base
        + pagamento horas extras
        + bônus
        - desconto faltas*/
function validaSalarioBase(salarioBase) {
  if (salarioBase <= 0) {
    return false;
  }
  return true;
}
function validaHorasExtras(horasExtras) {
  if (horasExtras < 0) {
    return false;
  }
  return true;
}
function validaFaltas(faltas) {
  if (faltas < 0) {
    return false;
  }
  return true;
}
function validaContrato(tipoContrato) {
  if (
    tipoContrato === "estagiario" ||
    tipoContrato === "clt" ||
    tipoContrato === "pj"
  ) {
    return true;
  }
  return false;
}
function valorHora(salarioBase, tipoContrato) {
  if (tipoContrato === "estagiario") {
    return salarioBase / 160;
  }
  if (tipoContrato === "clt") {
    return salarioBase / 220;
  }
  if (tipoContrato === "pj") {
    return salarioBase / 160;
  }
}
function validacoes(salarioBase, horasExtras, faltas, tipoContrato) {
  if (validaSalarioBase(salarioBase) === false) {
    return `Funcionário inválido: SALÁRIO inválido.`;
  }
  if (validaHorasExtras(horasExtras) === false) {
    return `Funcionário inválido: HORAS EXTRAS inválidas.`;
  }
  if (validaFaltas(faltas) === false) {
    return `Funcionário inválido: FALTAS inválidas.`;
  }
  if (validaContrato(tipoContrato) === false) {
    return `Funcionário inválido: CONTRATO inválido.`;
  }
  return true;
}
function multiplicadorHorasExtras(tipoContrato) {
  if (tipoContrato === "estagiario") {
    return 1.25;
  }
  if (tipoContrato === "clt") {
    return 1.5;
  }
  if (tipoContrato === "pj") {
    return 1.2;
  }
}
function descontoFalta(valorHora, faltas) {
  return valorHora * 8 * faltas;
}
function bonus(horasExtras, faltas) {
  if (faltas <= 5) {
    if (horasExtras < 10) {
      return 0;
    } else if (horasExtras <= 20) {
      return 100;
    } else {
      return 250;
    }
  }
  return 0;
}
function processarFuncionario(
  nome,
  salarioBase,
  horasExtras,
  faltas,
  tipoContrato,
) {
  const testeValidacao = validacoes(
    salarioBase,
    horasExtras,
    faltas,
    tipoContrato,
  );

  if (testeValidacao !== true) {
    return testeValidacao;
  }

  const valorDaHora = valorHora(salarioBase, tipoContrato);

  const valorTotalHorasExtras =
    multiplicadorHorasExtras(tipoContrato) * valorDaHora * horasExtras;

  const valorDescontoFalta = descontoFalta(valorDaHora, faltas);

  const valorBonus = bonus(horasExtras, faltas);

  const totalReceber =
    salarioBase + valorTotalHorasExtras + valorBonus - valorDescontoFalta;

  return `---FOLHA DE PAGAMENTO---
Funcionário: ${nome}
Contrato: ${tipoContrato}

Salário base: R$ ${salarioBase}
Valor hora: R$ ${valorDaHora}

Horas extras: ${horasExtras}
Pagamento horas extras: R$ ${valorTotalHorasExtras}

Faltas: ${faltas}
Desconto faltas: R$ ${valorDescontoFalta}

Bônus: R$ ${valorBonus}

-----------------------

TOTAL A RECEBER: R$ ${totalReceber}`;
}

// --- TESTES ---
console.log(`${processarFuncionario("Richard", 2200, 15, 2, "clt")}`);
console.log(`${processarFuncionario("Ana", 3000, 25, 6, "clt")}`);
console.log(`${processarFuncionario("João", 1600, 12, 1, "estagiario")}`);
console.log(`${processarFuncionario("Maria", 4000, 8, 0, "pj")}`);
