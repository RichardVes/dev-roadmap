# 04 - Condicionais

    if
    else
    else if
    switch

## Teoria

1. if
   O if permite executar um bloco de código somente quando uma condição for verdadeira.

```js
let idade = 20;
if (idade >= 18) {
  console.log("Maior de idade");
}
```

2. else
   O else representa o caminho contrário.

```js
let idade = 16;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

3. else if
   Usamos quando existem mais de duas possibilidades.

```js
let nota = 7;
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}
```

4. switch
   O switch é útil quando queremos comparar um mesmo valor contra várias possibilidades.

```js
let dia = 2;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  default:
    console.log("Dia inválido");
}
```

O break interrompe o switch.

O default funciona como o else: é executado quando nenhum case corresponde.

# Regra prática

Use geralmente:

    if / else

    **quando estiver avaliando condições:**

    idade >= 18
    saldo < 0
    nota >= 7

E considere:

    switch

    **quando estiver comparando um valor específico:**

    opcao === 1
    dia === 2
    status === "ativo"
