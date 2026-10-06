# 10 — Spread / Rest

## Objetivo

Aprender a usar o operador `...` em dois contextos diferentes:

- **Spread** → espalhar valores
- **Rest** → reunir valores

A sintaxe é a mesma, mas a função é diferente.

---

## 1. Spread

O **Spread** pega os elementos de uma estrutura e os **espalha** em outro lugar.

### Arrays

```javascript
const frutas = ["maçã", "banana", "laranja"];

const novasFrutas = [...frutas, "uva"];

console.log(novasFrutas);
```

O `...frutas` espalha os elementos do array.

Resultado:

```text
["maçã", "banana", "laranja", "uva"]
```

---

## 2. Copiando arrays

Uma utilização muito importante do Spread é criar uma cópia de um array.

```javascript
const personagens = ["Link", "Zelda", "Ganondorf"];

const copia = [...personagens];
```

Agora temos dois arrays diferentes.

```javascript
copia.push("Epona");
```

O array original continua intacto.

Isso é diferente de:

```javascript
const copia = personagens;
```

Nesse caso, as duas variáveis apontam para o **mesmo array**.

---

## 3. Combinando arrays

O Spread também facilita a combinação de arrays.

```javascript
const guerreiros = ["Link", "Cloud"];
const magos = ["Gandalf", "Merlin"];

const personagens = [...guerreiros, ...magos];
```

Resultado:

```text
["Link", "Cloud", "Gandalf", "Merlin"]
```

Sem Spread, precisaríamos utilizar métodos como `concat()`.

---

## 4. Spread com objetos

Também podemos espalhar propriedades de objetos.

```javascript
const personagem = {
  nome: "Link",
  nivel: 10,
};

const personagemAtualizado = {
  ...personagem,
  nivel: 11,
};
```

Resultado:

```javascript
{
    nome: "Link",
    nivel: 11
}
```

Observe que `nivel: 11` aparece **depois** de `...personagem`.

Quando existem propriedades repetidas, a última sobrescreve a anterior.

---

## 5. Atualizando objetos sem alterar o original

Esse é um dos usos mais importantes do Spread.

```javascript
const aluno = {
  nome: "Carlos",
  nota: 7,
};

const alunoAtualizado = {
  ...aluno,
  nota: 8,
};
```

Temos:

```text
aluno
→ nota: 7

alunoAtualizado
→ nota: 8
```

O objeto original não foi alterado.

Isso será muito importante quando você começar a trabalhar com código mais próximo do mercado, principalmente em aplicações que trabalham com estado.

---

## 6. Rest

O **Rest** faz praticamente o contrário do Spread.

> Ele reúne vários valores em uma única variável.

Por exemplo:

```javascript
function somar(...numeros) {
  console.log(numeros);
}
```

Podemos chamar:

```javascript
somar(10, 20, 30, 40);
```

Dentro da função:

```javascript
numeros;
```

será:

```text
[10, 20, 30, 40]
```

Ou seja:

**Rest reúne os valores em um array.**

---

## 7. Rest com parâmetros

Um exemplo mais interessante:

```javascript
function calcularMedia(...notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);

  return soma / notas.length;
}
```

Podemos chamar:

```javascript
calcularMedia(7, 8, 9);
```

Ou:

```javascript
calcularMedia(6, 7, 8, 9, 10);
```

A função aceita uma quantidade variável de argumentos.

---

## 8. Rest com parâmetros normais

Podemos misturar parâmetros normais com Rest.

```javascript
function cadastrarAluno(nome, ...disciplinas) {
  console.log(nome);
  console.log(disciplinas);
}
```

Chamando:

```javascript
cadastrarAluno(
  "Marina",
  "JavaScript",
  "Banco de Dados",
  "Engenharia de Software",
);
```

Temos:

```text
nome
→ "Marina"

disciplinas
→ ["JavaScript", "Banco de Dados", "Engenharia de Software"]
```

O Rest precisa ficar **por último**.

❌ Isto não funciona:

```javascript
function cadastrarAluno(...disciplinas, nome) {
}
```

---

## 9. Spread × Rest

Essa é a distinção principal da aula:

| Operador | Função          |
| -------- | --------------- |
| Spread   | Espalha valores |
| Rest     | Reúne valores   |

### Spread

```javascript
const novoArray = [...array];
```

Espalha o conteúdo de `array`.

### Rest

```javascript
function exemplo(...valores) {}
```

Reúne os argumentos em `valores`.

Uma forma simples de lembrar:

```text
SPREAD
"Abra a caixa e espalhe o conteúdo."

REST
"Pegue o restante e coloque dentro da caixa."
```

---

## 10. Spread + Destructuring

Podemos combinar Spread/Rest com o conceito de **Destructuring** estudado anteriormente.

```javascript
const numeros = [10, 20, 30, 40, 50];

const [primeiro, segundo, ...restante] = numeros;
```

Agora:

```text
primeiro
→ 10

segundo
→ 20

restante
→ [30, 40, 50]
```

Aqui temos **Rest dentro do destructuring**.

---

## Regra importante

O `...` não significa automaticamente Spread.

É necessário observar o **contexto**.

### Spread em array

```javascript
const copia = [...numeros];
```

→ Spread

### Rest em função

```javascript
function somar(...numeros) {}
```

→ Rest

### Rest no destructuring

```javascript
const [primeiro, ...restante] = numeros;
```

→ Rest

### Spread em objeto

```javascript
const objetoNovo = { ...objeto };
```

→ Spread

---
