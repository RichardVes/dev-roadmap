/*Crie um objeto conta com:
    titular
    saldo
Crie dois métodos:
    depositar
    sacar
Regras:
    depositar recebe um valor e adiciona ao saldo.
    sacar recebe um valor e reduz o saldo.
    Não pode sacar um valor maior que o saldo disponível.
    Os métodos devem utilizar this.*/
const banco = {
  titular: "Richard",
  saldo: 2000,

  depositar(valor) {
    this.saldo += valor;
  },
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Valor isulficiente!");
    }
  },
  saida() {
    console.log(banco.titular);
    console.log(banco.saldo);
  },
};
banco.saida();
banco.depositar(500);
banco.saida();
banco.sacar(2000);
banco.saida();
