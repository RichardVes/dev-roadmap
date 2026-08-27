/*Exercício 07 — switch + múltiplos casos

Um sistema recebe o nível de acesso de um usuário:

1 → Administrador
2 ou 3 → Usuário autorizado
4 → Visitante
Qualquer outro valor → Nível inválido

Utilize switch para implementar essa classificação.*/
const acesso = 2;
switch (acesso) {
  case 1:
    console.log("Administrador");
    break;
  case 2:
  case 3:
    console.log("Usuário autorizado");
    break;
  case 4:
    console.log("Visitante");
    break;
  default:
    console.log("Nível inválido");
    break;
}
