/*## Exercício 2 — Atualização de personagem
Crie um novo objeto chamado `personagemAtualizado`.
### Regras de negócio
    - O personagem original não pode ser alterado.
    - O novo personagem deve possuir todas as informações do original.
    - O nível deve ser atualizado para `16`.
    - A classe deve permanecer a mesma.
    - Utilize Spread.
---*/
const personagem = {
  nome: "Aragorn",
  nivel: 15,
  classe: "Guerreiro",
};
const personagemAtualizado = {
  ...personagem,
  nivel: 16,
};

console.log(personagemAtualizado);
