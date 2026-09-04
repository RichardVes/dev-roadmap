# Teoria — Funções

> [!info]
> **Trilha:** #frontend
> **Módulo:** JavaScript
> **Tema:** Funções
> **Status:** #revisar

---

## 1. O que é uma função?

Uma **função** é um bloco de código criado para executar uma determinada tarefa.

Por exemplo, imagine que você precise imprimir uma mensagem várias vezes.

Em vez de repetir o mesmo código várias vezes, podemos criar uma função e reutilizá-la.

```js
function saudacao() {
  console.log("Olá!");
}
```

Depois, podemos executar a função sempre que precisarmos:

```js
saudacao();
saudacao();
saudacao();
```

---

## 2. Função com parâmetros

Uma função pode receber informações para trabalhar.

```js
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
```

Agora podemos chamar a função passando diferentes valores:

```js
saudacao("Richard");
saudacao("Maria");
saudacao("João");
```

### Resultado

```text
Olá, Richard!
Olá, Maria!
Olá, João!
```

Nesse caso:

```js
function saudacao(nome)
```

`nome` é um **parâmetro**.

Quando fazemos:

```js
saudacao("Richard");
```

`"Richard"` é o **argumento** passado para a função.

### Parâmetro × Argumento

Uma forma simples de lembrar:

- **Parâmetro** → variável que a função recebe.
- **Argumento** → valor que você passa para ela.

---

## 3. Retorno de valores

Uma função também pode **produzir um resultado**.

```js
function somar(a, b) {
  return a + b;
}
```

Podemos guardar o resultado:

```js
const resultado = somar(10, 5);

console.log(resultado);
```

### Saída

```text
15
```

Aqui temos uma diferença muito importante.

### `console.log()`

Mostra algo no console:

```js
console.log(10 + 5);
```

### `return`

Entrega um valor para quem chamou a função:

```js
function somar(a, b) {
  return a + b;
}
```

Então podemos fazer:

```js
const resultado = somar(10, 5);
```

O `return` é fundamental porque permite **reutilizar o resultado**.

Por exemplo:

```js
const resultado = somar(10, 5);

console.log(resultado);
console.log(resultado * 2);
```

### Resultado

```text
15
30
```

---

## 4. Arrow Functions

JavaScript também possui uma sintaxe alternativa para funções:

```js
const somar = (a, b) => {
  return a + b;
};
```

Isso é uma **arrow function**.

A função tradicional:

```js
function somar(a, b) {
  return a + b;
}
```

Pode ser escrita como:

```js
const somar = (a, b) => {
  return a + b;
};
```

E existe uma forma ainda mais curta quando existe apenas uma expressão:

```js
const somar = (a, b) => a + b;
```

Por enquanto, não precisa decorar todas as variações.

O mais importante é entender **o que a função está fazendo**.

---

## 5. Escopo

Esse conceito será muito importante.

Uma variável criada dentro de uma função normalmente pertence ao **escopo daquela função**.

Por exemplo:

```js
function teste() {
  const mensagem = "Olá!";

  console.log(mensagem);
}

teste();
```

Funciona porque `mensagem` está sendo utilizada dentro do mesmo contexto em que foi criada.

Porém:

```js
function teste() {
  const mensagem = "Olá!";
}

console.log(mensagem);
```

Aqui teremos um erro, porque `mensagem` foi criada dentro da função e não está disponível fora dela.

Uma maneira simples de pensar:

> Variáveis declaradas dentro de uma função ficam disponíveis dentro daquele contexto.

---

## Resumo rápido

| Conceito            | Significado                                     |
| ------------------- | ----------------------------------------------- |
| **Função**          | Bloco de código criado para executar uma tarefa |
| **Parâmetro**       | Variável recebida pela função                   |
| **Argumento**       | Valor passado para o parâmetro                  |
| **`return`**        | Devolve um valor para quem chamou a função      |
| **`console.log()`** | Exibe uma informação no console                 |
| **Arrow function**  | Sintaxe alternativa para criar funções          |
| **Escopo**          | Define onde uma variável pode ser acessada      |

---

## Dúvidas

### Qual a diferença entre parâmetro e argumento?

**Parâmetro** é a variável definida na criação da função.

**Argumento** é o valor enviado quando a função é chamada.

```js
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
```

`nome` → parâmetro.

```js
saudacao("Richard");
```

`"Richard"` → argumento.

---

### Qual a diferença entre `console.log()` e `return`?

`console.log()` apenas exibe uma informação no console.

`return` devolve um valor que pode ser armazenado ou utilizado posteriormente.

```js
function somar(a, b) {
  return a + b;
}

const resultado = somar(10, 5);

console.log(resultado);
```

---

### Uma função precisa sempre ter `return`?

Não.

Uma função pode simplesmente executar uma tarefa:

```js
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
```

Ou pode produzir e retornar um valor:

```js
function somar(a, b) {
  return a + b;
}
```

---

## Relacionados

- [[JavaScript — Variáveis]]
- [[JavaScript — Tipos de dados]]
- [[JavaScript — Operadores]]
- [[JavaScript — Condicionais]]
- [[JavaScript — Escopo]]
- [[JavaScript — Arrow Functions]]
- [[JavaScript — Arrays]]
