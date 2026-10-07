# 11 — JSON

- [ ] Teoria
- [ ] Exercícios
- [ ] Desafios
- [ ] Conceito dominado

---

# Teoria

## 1. O que é JSON?

JSON significa **JavaScript Object Notation**.

É um formato usado para **representar dados em texto**.

Ele é muito utilizado para comunicação entre sistemas, principalmente em **APIs**.

Exemplo:

```
{
    "nome": "Aragorn",
    "classe": "Guerreiro",
    "nivel": 20
}
```

Visualmente, parece um objeto JavaScript.

Mas existe uma diferença importante:

**Objeto JavaScript**

```
const personagem = {
    nome: "Aragorn",
    classe: "Guerreiro",
    nivel: 20
};
```

**JSON**

```
{
    "nome": "Aragorn",
    "classe": "Guerreiro",
    "nivel": 20
}
```

O objeto é uma estrutura que o JavaScript consegue manipular.

O JSON é **texto** que representa essa estrutura.

---

# 2. Por que precisamos de JSON?

Imagine que um frontend precisa receber informações de um servidor.

O servidor pode enviar:

```
{
    "nome": "Aragorn",
    "classe": "Guerreiro",
    "nivel": 20
}
```

Esse conteúdo chega como **dados em formato textual**.

O JavaScript pode então transformar esse texto em um objeto e trabalhar normalmente com ele.

Fluxo comum:

```
Servidor
   ↓
JSON
   ↓
JavaScript
   ↓
Objeto
```

Por isso JSON aparece constantemente quando trabalhamos com **APIs e sistemas web**.

---

# 3. JSON.stringify()

`JSON.stringify()` transforma um valor JavaScript em uma **string JSON**.

Exemplo:

```
const personagem = {
    nome: "Aragorn",
    classe: "Guerreiro",
    nivel: 20
};

const json = JSON.stringify(personagem);

console.log(json);
```

Resultado:

```
{"nome":"Aragorn","classe":"Guerreiro","nivel":20}
```

Agora podemos verificar o tipo:

```
console.log(typeof personagem);
console.log(typeof json);
```

Resultado:

```
object
string
```

Ou seja:

```
objeto
   ↓
JSON.stringify()
   ↓
string
```

## Regra

**stringify = transformar em texto**

---

# 4. JSON.parse()

`JSON.parse()` faz o caminho contrário.

Ele transforma uma **string JSON em um valor JavaScript**.

Exemplo:

```
const json = '{"nome":"Aragorn","classe":"Guerreiro","nivel":20}';

const personagem = JSON.parse(json);
```

Agora podemos acessar as propriedades:

```
console.log(personagem.nome);
console.log(personagem.classe);
console.log(personagem.nivel);
```

Resultado:

```
Aragorn
Guerreiro
20
```

Fluxo:

```
string JSON
   ↓
JSON.parse()
   ↓
objeto
```

## Regra

**parse = transformar texto JSON em estrutura JavaScript**

---

# 5. stringify × parse

Essa é a parte mais importante para memorizar.

### JSON.stringify()

```
objeto → string
```

### JSON.parse()

```
string → objeto
```

Podemos visualizar assim:

```
OBJETO
   │
   │ JSON.stringify()
   ▼
STRING JSON
   │
   │ JSON.parse()
   ▼
OBJETO
```

---

# 6. JSON e objetos não são a mesma coisa

Observe:

```
const personagem = {
    nome: "Aragorn"
};
```

Aqui temos um **objeto**.

Agora:

```
const personagem = '{"nome":"Aragorn"}';
```

Aqui temos uma **string**.

Mesmo que o conteúdo pareça um objeto, o JavaScript está trabalhando com uma string.

Podemos verificar:

```
console.log(typeof personagem);
```

Resultado:

```
string
```

Para transformar essa string em objeto:

```
const objeto = JSON.parse(personagem);
```

Agora:

```
console.log(typeof objeto);
```

Resultado:

```
object
```

---

# 7. Acessando dados depois do parse

Depois de usar `JSON.parse()`, podemos utilizar as ferramentas que já aprendemos.

Exemplo:

```
const json = '{"nome":"Legolas","classe":"Arqueiro","nivel":25}';

const personagem = JSON.parse(json);

console.log(personagem.nome);
```

Resultado:

```
Legolas
```

Podemos também alterar os dados:

```
personagem.nivel++;

console.log(personagem.nivel);
```

Resultado:

```
26
```

Ou usar destructuring:

```
const { nome, classe } = personagem;

console.log(nome);
console.log(classe);
```

JSON não substitui os objetos JavaScript.

Ele é uma forma de **representar e transportar os dados**.

---

# 8. JSON com arrays

JSON também pode representar arrays.

Exemplo:

```
const jogos = [
    "Crimson Desert",
    "Magic Arena",
    "Total War"
];
```

Podemos transformar o array em JSON:

```
const json = JSON.stringify(jogos);
```

Resultado:

```
["Crimson Desert","Magic Arena","Total War"]
```

E depois recuperar o array:

```
const novosJogos = JSON.parse(json);
```

Agora podemos usar métodos de array:

```
console.log(novosJogos[0]);
```

Resultado:

```
Crimson Desert
```

---

# 9. JSON aceita diferentes tipos de dados

JSON pode representar:

- String
- Number
- Boolean
- Null
- Array
- Object

Exemplo:

```
{
    "nome": "Aragorn",
    "nivel": 20,
    "ativo": true,
    "arma": null,
    "habilidades": ["Espada", "Liderança"]
}
```

---

# 10. Atenção às aspas

Em JSON, nomes das propriedades usam **aspas duplas**.

JSON válido:

```
{
    "nome": "Aragorn",
    "nivel": 20
}
```

Isso não é JSON válido:

```
{
    nome: "Aragorn",
    nivel: 20
}
```

Também não é a forma padrão de JSON:

```
{
    'nome': 'Aragorn'
}
```

No JavaScript podemos encontrar diferentes formas de escrever strings.

No JSON, usamos:

```
"texto"
```

---

# 11. JSON é texto

Uma das ideias mais importantes desta aula:

```
const personagem = {
    nome: "Aragorn"
};
```

`personagem` é um objeto.

Já:

```
const json = '{"nome":"Aragorn"}';
```

`json` é uma string.

Podemos confirmar:

```
console.log(typeof personagem);
console.log(typeof json);
```

Resultado:

```
object
string
```

Portanto:

**JSON é uma representação textual dos dados.**

---

# 12. Resumo

| Operação           | Entrada      | Saída        |
| ------------------ | ------------ | ------------ |
| `JSON.stringify()` | Objeto/Array | String JSON  |
| `JSON.parse()`     | String JSON  | Objeto/Array |

### Memorize

```
JSON.stringify()
objeto → texto

JSON.parse()
texto → objeto
```

---

# Exercícios

## Exercício 1 — stringify

Crie o seguinte objeto:

```
const personagem = {
    nome: "Gandalf",
    classe: "Mago",
    nivel: 30
};
```

Transforme o objeto em JSON usando `JSON.stringify()`.

Depois descubra o tipo do resultado usando `typeof`.

### Objetivo

Identificar que o resultado de `JSON.stringify()` é uma **string**.

---

## Exercício 2 — parse

Considere:

```
const dados = '{"nome":"Legolas","classe":"Arqueiro","nivel":25}';
```

Use `JSON.parse()` para transformar `dados` em um objeto.

Depois mostre:

```
nome
classe
nivel
```

---

## Exercício 3 — ida e volta

Crie:

```
const jogador = {
    nome: "Aragorn",
    classe: "Guerreiro",
    nivel: 20
};
```

Faça o seguinte:

```
jogador
   ↓
JSON.stringify()
   ↓
string
   ↓
JSON.parse()
   ↓
novo objeto
```

No final, mostre o nome, a classe e o nível do novo objeto.

---

## Exercício 4 — JSON com array

Crie:

```
const jogos = [
    "Crimson Desert",
    "Magic Arena",
    "Total War"
];
```

Faça:

1. Transforme o array em JSON.
2. Transforme o JSON novamente em array.
3. Mostre o primeiro jogo.
4. Mostre o tipo do resultado depois do `parse()`.

---

# Desafios

Depois dos exercícios, vamos combinar JSON com conteúdos anteriores:

- Objetos
- Arrays
- Destructuring
- Spread
- Rest
- Funções
- Métodos de array

## Desafio 1

Crie uma lista de personagens:

```
const personagens = [
    {
        nome: "Aragorn",
        classe: "Guerreiro"
    },
    {
        nome: "Gandalf",
        classe: "Mago"
    },
    {
        nome: "Legolas",
        classe: "Arqueiro"
    }
];
```

Transforme essa lista em JSON.

Depois transforme novamente em array.

Por fim, use `map()` para mostrar apenas os nomes.

---

## Desafio 2

Receba os dados como JSON:

```
const dados = '[{"nome":"Aragorn","nivel":20},{"nome":"Gandalf","nivel":30},{"nome":"Legolas","nivel":25}]';
```

Faça:

1. Transforme o JSON em array.
2. Use `map()` para obter os nomes.
3. Use `filter()` para encontrar personagens com nível maior que 20.
4. Transforme o resultado novamente em JSON.

---

# Conceito dominado

Antes de marcar como concluído, você deve conseguir explicar sem consultar:

- O que é JSON.
- Por que JSON é usado.
- A diferença entre JSON e objeto JavaScript.
- O que `JSON.stringify()` faz.
- O que `JSON.parse()` faz.
- A diferença entre `object` e `string` nesse contexto.
- Como transformar um objeto em JSON.
- Como transformar JSON novamente em objeto.
- Como trabalhar com arrays em JSON.

### Regra principal

```
JSON.stringify()
objeto → string

JSON.parse()
string → objeto
```

- [ ] Consigo explicar o que é JSON
- [ ] Consigo usar `JSON.stringify()`
- [ ] Consigo usar `JSON.parse()`
- [ ] Consigo diferenciar objeto de JSON
- [ ] Consigo trabalhar com arrays em JSON
- [ ] Consigo resolver os desafios sem consultar exemplos
- [ ] **Conceito dominado**
