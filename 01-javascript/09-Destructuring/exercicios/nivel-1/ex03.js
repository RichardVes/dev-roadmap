/*Um sistema de personagens de RPG possui a seguinte informação:
Crie uma função que receba um personagem e apresente uma mensagem contendo seu nome, classe e nível.
A função deve utilizar destructuring diretamente no parâmetro.*/
const personagem = {
  nome: "Anubiz",
  classe: "Guerreiro",
  nivel: 12,
};
function status({ nome, classe, nivel }) {
  console.log(nome);
  console.log(classe);
  console.log(nivel);
}
status(personagem);
