/*Exercício 09 — Condicionais aninhadas

Uma empresa precisa determinar o nível de acesso de um usuário.

Regras:

Se o usuário não estiver ativo → Usuário inativo
Se estiver ativo e for administrador → Acesso administrativo
Se estiver ativo e não for administrador, mas possuir permissão → Acesso autorizado
Se estiver ativo, não for administrador e não possuir permissão → Acesso negado

Considere três informações:

usuário ativo;
administrador;
possui permissão.

Utilize if/else para resolver.

Não use switch.*/

const usuarioAtivo = true;
const administrador = true;
const possuiPermissao = true;

if (!usuarioAtivo) {
  console.log("Usuário inativo");
} else if (administrador) {
  console.log("Acesso administrativo");
} else if (!administrador && possuiPermissao) {
  console.log("Acesso autorizado");
} else if (!possuiPermissao) {
  console.log("Acesso negado");
} else {
  console.log("Entrada invalida");
}
