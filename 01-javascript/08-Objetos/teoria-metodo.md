# Métodos

# Resumo rápido

- **this** → referência ao objeto que está executando o método
- **Array de objetos** → estrutura muito comum para representar coleções de dados

### 7. O que são métodos

Método é uma **função armazenada dentro de um objeto**.

As propriedades representam dados.

Os métodos representam comportamentos.

```js
const produto = {
  nome: "Mouse",
  preco: 80,

  aplicarDesconto() {
    this.preco = this.preco * 0.9;
  },
};
```

Nesse exemplo:

- `nome` é uma propriedade
- `preco` é uma propriedade
- `aplicarDesconto` é um método

---

### 8. Chamando um método

Um método é executado utilizando o objeto seguido do nome do método.

```js
produto.aplicarDesconto();
```

Depois da execução, o preço do produto será alterado.

---

# this

### 9. O que é this

`this` é uma referência ao **objeto que está executando o método**.

```js
const produto = {
  nome: "Mouse",
  preco: 80,

  mostrarPreco() {
    console.log(this.preco);
  },
};
```

Quando executamos:

```js
produto.mostrarPreco();
```

Nesse contexto, `this` representa o objeto `produto`.

Portanto:

```js
this.preco;
```

faz referência à propriedade `preco` do objeto que está executando o método.

---

### 10. Por que utilizar this

O `this` permite que um método acesse propriedades do próprio objeto.

```js
const conta = {
  saldo: 1000,

  depositar(valor) {
    this.saldo += valor;
  },
};
```

Ao executar:

```js
conta.depositar(500);
```

O método utiliza `this.saldo` para acessar o saldo da própria conta.

O saldo passa de `1000` para `1500`.

---

# Objetos com propriedades e métodos

Um objeto pode possuir dados e comportamentos relacionados.

```js
const conta = {
  titular: "Richard",
  saldo: 1000,

  depositar(valor) {
    this.saldo += valor;
  },

  consultarSaldo() {
    console.log(this.saldo);
  },
};
```

Nesse objeto:

### Propriedades

- `titular`
- `saldo`

### Métodos

- `depositar`
- `consultarSaldo`

Isso permite representar uma entidade de forma mais próxima do comportamento real.

---

# Objetos dentro de arrays

É muito comum trabalhar com arrays que possuem vários objetos.

```js
const produtos = [
  {
    nome: "Mouse",
    preco: 80,
  },
  {
    nome: "Teclado",
    preco: 150,
  },
  {
    nome: "Monitor",
    preco: 1200,
  },
];
```

Nesse caso:

- `produtos` é um array
- cada elemento do array é um objeto
- cada objeto possui suas próprias propriedades

Essa estrutura é muito utilizada no desenvolvimento de aplicações.

---

## Dúvidas

### Qual a diferença entre propriedade e método?

**Propriedade** armazena um dado ou característica.

**Método** executa uma ação ou comportamento.

```js
const usuario = {
  nome: "Richard",

  apresentar() {
    console.log("Olá!");
  },
};
```

Nesse exemplo:

- `nome` é uma propriedade
- `apresentar` é um método

### O que significa this?

`this` representa o objeto relacionado à execução do método.

```js
const produto = {
  preco: 100,

  mostrarPreco() {
    console.log(this.preco);
  },
};
```

Nesse caso, `this.preco` acessa o `preco` do objeto `produto`.

### Objeto pode ter outro objeto dentro dele?

Sim.

```js
const pedido = {
  numero: 1001,

  cliente: {
    nome: "Richard",
    cidade: "Três Lagoas",
  },
};
```

Nesse caso, `cliente` é uma propriedade que também possui um objeto como valor.
