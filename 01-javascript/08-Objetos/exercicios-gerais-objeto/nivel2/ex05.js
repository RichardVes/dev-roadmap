/*Você está desenvolvendo um sistema simples para um jogo RPG.
Cada personagem possui:
    nome
    classe
    vida
    ataque
    defesa
O personagem também deve possuir comportamentos para receber dano e atacar outro personagem.
Regras de negócio
    O ataque deve considerar o valor de ataque do personagem atacante.
    O dano causado deve ser reduzido pela defesa do personagem que está recebendo o ataque.
    A vida nunca pode ficar abaixo de zero.
    Um personagem com vida igual a zero está derrotado.
    Um personagem derrotado não pode realizar ataques.

    O método de ataque deve receber outro personagem como alvo.
    O método de receber dano deve alterar a vida do próprio personagem.
    Utilize this para trabalhar com os dados do próprio personagem.
Seu objetivo
    Crie os objetos e métodos necessários para representar esse sistema.
    Não vou indicar quais métodos você deve criar nem como organizar a solução.
    Aqui quero testar se você consegue pegar as regras de negócio e transformá-las em uma solução usando objetos, métodos e this.*/
const personagem = {
  nome: "Anubiz",
  classe: "Espadachin Arcano",
  vida: 12,
  ataque: 25,
  defesa: 2,

  danoRecebido(combatente) {
    let dano = combatente.ataque - this.defesa;
    if (dano < 0) {
      dano = 0;
    }
    this.vida -= dano;
    if (this.vida <= 0) {
      this.vida = 0;
      console.log("Você foi derrotado!");
    }
  },
  danoCausado(combatente) {
    let dano = this.ataque - combatente.defesa;
    if (dano < 0) {
      dano = 0;
    }
    combatente.vida -= dano;
    if (combatente.vida <= 0) {
      combatente.vida = 0;
      console.log("O inimigo foi derrotado!");
    }
  },
};
const inimigo = {
  nome: "Edifir",
  classe: "Soldado",
  vida: 20,
  ataque: 15,
  defesa: 0,

  danoRecebido(combatente) {
    let dano = combatente.ataque - this.defesa;
    if (dano < 0) {
      dano = 0;
    }
    this.vida -= dano;
    if (this.vida < 0) {
      this.vida = 0;
      console.log("O inimigo foi derrotado!");
    }
  },
  danoCausado(combatente) {
    let dano = this.ataque - combatente.defesa;
    if (dano < 0) {
      dano = 0;
    }
    combatente.vida -= dano;
    if (combatente.vida <= 0) {
      combatente.vida = 0;
      console.log("O inimigo derrotou Você");
    }
  },
};
console.log(personagem.nome, personagem.classe, personagem.vida);
personagem.danoRecebido(inimigo);
console.log(personagem.nome, personagem.vida);
console.log(inimigo.nome, inimigo.classe, inimigo.vida);
inimigo.danoRecebido(personagem);
console.log(inimigo.nome, inimigo.vida);
