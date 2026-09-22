# 08 — Objetos

# Resumo rápido

- **Objeto** → estrutura que agrupa dados e comportamentos
- **Propriedade** → característica ou dado do objeto
- **Método** → função pertencente ao objeto
- **Ponto** → forma comum de acessar propriedades e métodos
- **Colchetes** → permitem acesso dinâmico às propriedades
- **delete** → remove uma propriedade

## O que é

Objeto é uma estrutura de dados utilizada para representar uma entidade por meio de **propriedades** e **comportamentos**.

As propriedades representam características, enquanto os métodos representam ações que o objeto pode executar.

Exemplo:

```js
const produto = {
  nome: "Mouse",
  preco: 80,
  estoque: 15,
};
```

Nesse exemplo, `produto` é um objeto com três propriedades:

- `nome`
- `preco`
- `estoque`

---

## Para que serve

Objetos são utilizados para agrupar informações relacionadas em uma única estrutura.

Exemplos:

- Usuário
- Produto
- Cliente
- Pedido
- Funcionário
- Conta bancária
- Personagem
- Carro

Em aplicações reais, objetos são fundamentais para representar os dados manipulados pelo sistema.

---

## Conceitos importantes

### 1. Criando um objeto

Um objeto é criado utilizando `{}`.

```js
const aluno = {
  nome: "Richard",
  idade: 35,
  curso: "TADS",
};
```

Cada informação possui:

- **Chave:** nome da propriedade
- **Valor:** informação armazenada na propriedade

---

### 2. Propriedades

Propriedades representam as características ou dados de um objeto.

```js
const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10,
};
```

Nesse exemplo:

- `nome` representa o nome do produto
- `preco` representa o preço
- `estoque` representa a quantidade disponível

---

### 3. Acessando propriedades

Podemos acessar propriedades utilizando a **notação de ponto**.

```js
console.log(produto.nome);
console.log(produto.preco);
```

Também podemos utilizar a **notação de colchetes**.

```js
console.log(produto["nome"]);
console.log(produto["preco"]);
```

A notação de ponto é a forma mais comum quando sabemos qual propriedade queremos acessar.

A notação de colchetes é especialmente útil quando o nome da propriedade está armazenado em uma variável.

```js
const propriedade = "preco";

console.log(produto[propriedade]);
```

---

### 4. Alterando propriedades

Podemos alterar o valor de uma propriedade.

```js
produto.preco = 3200;
```

Também podemos alterar utilizando colchetes.

```js
produto["estoque"] = 8;
```

---

### 5. Adicionando propriedades

Podemos adicionar novas propriedades depois que o objeto foi criado.

```js
produto.categoria = "Informática";
```

O objeto passa a possuir também a propriedade `categoria`.

---

### 6. Removendo propriedades

Podemos remover uma propriedade utilizando `delete`.

```js
delete produto.estoque;
```

Depois dessa operação, a propriedade `estoque` não existe mais no objeto.

---
