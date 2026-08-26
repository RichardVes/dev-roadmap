# Variaveis primitivas

    var → pode ser reatribuído - padrão
    let → pode ser reatribuído - quando houver reatribuição
    const → não pode ser reatribuído - evitar, salvo situações específicas

let nome = valor;

    let tipo de variavel mutavel

const nome = valor;

    const tipo de variavel IMUTAVEL

var nome = valor;
Antes da chegada do let e const, o JavaScript utilizava principalmente var.

console.log();

    saida pra tela

| Variável    | Valor       | Tipo        |
| ----------- | ----------- | ----------- |
| `idade`     | `35`        | `number`    |
| `nome`      | `"Richard"` | `string`    |
| `professor` | `true`      | `boolean`   |
| `salario`   | `null`      | `null`      |
| `endereco`  | `undefined` | `undefined` |

undefined representa, de maneira simplificada:
Existe uma variável, mas ela ainda não recebeu um valor.

null é diferente de undefined
estamos dizendo explicitamente:
"Neste momento, essa variável não possui um valor."

## typeof

    const idade = 35;
    console.log(typeof idade);

    saida:
        number

### ⚠️ A pegadinha do null

Faça:

> console.log(typeof null);

Você verá:

> object

Isso é um comportamento histórico do JavaScript.
Não conclua que null é um objeto.
Para nosso estudo:
null → ausência intencional de valor
E considere typeof null === "object" uma peculiaridade da linguagem que você precisa conhecer.
