/*Uma plataforma de RPG mantém uma lista de personagens:
Crie uma função chamada exibirPersonagem que receba um personagem e apresente suas informações:
    Nome
    Classe
    Nível
Depois, utilize o array personagens para chamar a função para cada personagem.
Regras de negócio
    A função deve receber o personagem utilizando destructuring no parâmetro.
    O acesso aos personagens deve ser feito percorrendo o array.
    Não utilize personagens[0], personagens[1] e personagens[2] individualmente.
    Não altere os objetos originais.
    A função deve ser responsável somente por apresentar as informações.
    Utilize apenas conceitos que você já estudou.*/

const personagens = [
  {
    nome: "Anubiz",
    classe: "Guerreiro",
    nivel: 12,
  },
  {
    nome: "Lyria",
    classe: "Arqueira",
    nivel: 8,
  },
  {
    nome: "Kael",
    classe: "Mago",
    nivel: 15,
  },
];

function exibirPersonagem({ nome, classe, nivel }) {
  console.log(nome);
  console.log(classe);
  console.log(nivel);
}
personagens.forEach(exibirPersonagem);
