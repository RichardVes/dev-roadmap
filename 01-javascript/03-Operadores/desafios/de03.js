/* Desafio 03 — Acesso ao sistema
Agora vamos combinar os operadores lógicos de uma forma mais próxima de uma regra real de negócio.
Considere:
    let usuarioAtivo = true;
    let administrador = false;
    let pagamentoEmDia = true;
    let bloqueado = false;
O usuário poderá acessar o sistema se:
    estiver ativo
    E estiver com o pagamento em dia
    E NÃO estiver bloqueado
OU
    for administrador.
Em outras palavras:
    Um administrador pode acessar independentemente das outras condições.
    Um usuário comum precisa estar ativo, com pagamento em dia e não estar bloqueado.
Requisitos obrigatórios
Use:     &&    ||    !    operador ternário
O programa deve produzir:
    Acesso: Permitido
    ou
    Acesso: Negado */

let usuarioAtivo = true;
let administrador = false;
let pagamentoEmDia = true;
let bloqueado = false;

const acesso =
  (usuarioAtivo && pagamentoEmDia && !bloqueado) || administrador
    ? "Permitido"
    : "Negado";
console.log(acesso);
