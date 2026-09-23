# 09 — Destructuring

## O que é

Destructuring é uma forma de extrair valores de **arrays e objetos** diretamente para variáveis.

Ele facilita o acesso aos dados e deixa o código mais legível.

---

O destructuring é especialmente útil quando precisamos utilizar várias propriedades de um mesmo objeto.

---

## Resumo rápido

| Estrutura      | Sintaxe                                 |
| -------------- | --------------------------------------- |
| Objeto         | `const { nome } = objeto`               |
| Array          | `const [primeiro] = array`              |
| Renomear       | `const { nome: nomeUsuario } = usuario` |
| Valor padrão   | `const { idade = 18 } = usuario`        |
| Rest           | `const { nome, ...resto } = usuario`    |
| Parâmetro      | `function mostrar({ nome }) {}`         |
| Array + objeto | `const [{ nome }] = alunos`             |

---

## Conceito principal

Destructuring é uma forma de **extrair valores de arrays e objetos diretamente para variáveis**.

Ele não altera a estrutura original dos dados.

Seu principal objetivo é tornar o código mais **legível, direto e conveniente** ao trabalhar com dados que já estão em arrays e objetos.

---

## Destructuring de Objetos

Permite extrair propriedades de um objeto diretamente para variáveis.

```javascript
const usuario = {
  nome: "Richard",
  idade: 35,
};

const { nome, idade } = usuario;

console.log(nome);
console.log(idade);
```

Sem destructuring:

```javascript
console.log(usuario.nome);
console.log(usuario.idade);
```

Com destructuring:

```javascript
const { nome, idade } = usuario;
```

---

## Destructuring de Arrays

No array, a extração acontece pela **posição dos elementos**.

```javascript
const tecnologias = ["JavaScript", "Python", "Rust"];

const [primeira, segunda, terceira] = tecnologias;

console.log(primeira);
console.log(segunda);
console.log(terceira);
```

A relação é:

- `primeira` → índice `0`
- `segunda` → índice `1`
- `terceira` → índice `2`

---

## Ignorando elementos

Podemos ignorar posições usando vírgulas.

```javascript
const tecnologias = ["JavaScript", "Python", "Rust"];

const [primeira, , terceira] = tecnologias;

console.log(primeira);
console.log(terceira);
```

Resultado:

```text
JavaScript
Rust
```

---

## Renomeando propriedades

Podemos extrair uma propriedade e armazená-la em uma variável com outro nome.

```javascript
const usuario = {
  nome: "Richard",
  idade: 35,
};

const { nome: nomeUsuario, idade: idadeUsuario } = usuario;

console.log(nomeUsuario);
console.log(idadeUsuario);
```

A sintaxe:

```javascript
nome: nomeUsuario;
```

significa:

> Pegue a propriedade `nome` e armazene seu valor na variável `nomeUsuario`.

---

## Valores padrão

Podemos definir um valor padrão caso a propriedade não exista ou seja `undefined`.

```javascript
const usuario = {
  nome: "Richard",
};

const { nome, idade = 18 } = usuario;

console.log(nome);
console.log(idade);
```

Resultado:

```text
Richard
18
```

---

## Destructuring de objetos aninhados

Também podemos extrair propriedades de objetos dentro de outros objetos.

```javascript
const aluno = {
  nome: "Ana",
  curso: {
    nome: "TADS",
    periodo: "Noturno",
  },
};

const {
  nome,
  curso: { periodo },
} = aluno;

console.log(nome);
console.log(periodo);
```

---

## Destructuring em parâmetros de funções

Podemos utilizar destructuring diretamente nos parâmetros de uma função.

```javascript
function apresentarAluno({ nome, curso }) {
  console.log(`${nome} - ${curso}`);
}

const aluno = {
  nome: "Carlos",
  curso: "TADS",
};

apresentarAluno(aluno);
```

Sem destructuring:

```javascript
function apresentarAluno(aluno) {
  console.log(`${aluno.nome} - ${aluno.curso}`);
}
```

Com destructuring:

```javascript
function apresentarAluno({ nome, curso }) {
  console.log(`${nome} - ${curso}`);
}
```

---

## Arrays com Objetos

Destructuring também pode ser utilizado quando temos arrays contendo objetos.

```javascript
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "João", nota: 9 },
];

const [{ nome, nota }] = alunos;

console.log(nome);
console.log(nota);
```

Nesse caso:

1. O primeiro elemento do array é acessado.
2. Esse elemento é um objeto.
3. As propriedades `nome` e `nota` são extraídas.

---

## Destructuring com métodos de Array

Podemos utilizar destructuring nos parâmetros das funções usadas por métodos como `filter`, `map` e `find`.

```javascript
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "João", nota: 9 },
];

const aprovados = alunos.filter(({ nota }) => nota >= 7);

console.log(aprovados);
```

Sem destructuring:

```javascript
const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
```

Com destructuring:

```javascript
const aprovados = alunos.filter(({ nota }) => nota >= 7);
```

Nesse caso, extraímos apenas a propriedade necessária para realizar a regra.

---

## Rest no Destructuring

O operador `...` pode ser utilizado para capturar os valores restantes.

### Arrays

```javascript
const tecnologias = ["JavaScript", "Python", "Rust", "Java"];

const [primeira, ...outras] = tecnologias;

console.log(primeira);
console.log(outras);
```

Resultado:

```text
JavaScript
["Python", "Rust", "Java"]
```

### Objetos

```javascript
const usuario = {
  nome: "Richard",
  idade: 35,
  cidade: "Três Lagoas",
};

const { nome, ...outrasInformacoes } = usuario;

console.log(nome);
console.log(outrasInformacoes);
```

O `...outrasInformacoes` recebe as propriedades restantes.

---

## Destructuring × acesso tradicional

### Acesso tradicional

```javascript
const aluno = {
  nome: "Ana",
  idade: 22,
  curso: "TADS",
};

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
```

### Com Destructuring

```javascript
const { nome, idade, curso } = aluno;

console.log(nome);
console.log(idade);
console.log(curso);
```
