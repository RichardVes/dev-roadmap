/*Desafio 04 — Sistema de Pedido com Regras de Negócio
Cenário
    Você está criando um sistema simplificado para processar pedidos de uma loja.
    Um pedido possui:
        valor dos produtos;
        quantidade de produtos;
        tipo de cliente;
        forma de pagamento.
    A função principal deve receber:
        valor dos produtos
        quantidade
        tipo de cliente
        forma de pagamento
    Você decide o nome e a arquitetura das funções.
Regras de negócio
    1. Quantidade válida
        A quantidade precisa ser maior que zero.
        Caso contrário:
            Pedido inválido: quantidade inválida.
    2. Tipo de cliente
        Existem três tipos:
            comum
            premium
            vip
            Qualquer outro tipo é inválido.
    3. Desconto por tipo de cliente
        Cliente	Desconto
            comum	0%
            premium	10%
            vip	20%
        O desconto é aplicado sobre o valor total dos produtos.
        Exemplo:
            Valor produto: 100
            Quantidade: 5
            Total bruto: 500
            Cliente premium:
                Desconto: 50
                Total parcial: 450
    4. Desconto por pagamento
        Após aplicar o desconto do cliente:
        Pagamento      	Regra
        pix	5%          adicional
        dinheiro	    5% adicional
        credito	        sem desconto
        debito	        sem desconto
        Qualquer outra forma de pagamento deve invalidar o pedido.
    5. Frete
        O frete depende do valor final do pedido.
        Valor final	Frete
            menor que R$ 100	R$ 20
            entre R$ 100 e R$ 300	R$ 10
            acima de R$ 300	Grátis
⚠️ Importante:
    O frete deve ser calculado depois de todos os descontos.
    Resultado esperado
        A função principal deve retornar algo semelhante a:
            RESUMO DO PEDIDO
            Valor bruto: R$ 500
            Desconto cliente: R$ 50
            Desconto pagamento: R$ 22.50
            Frete: R$ 0
            TOTAL FINAL: R$ 427.50
            A formatação exata fica por sua conta.*/

function produtoValor(valor) {
  //console.log("Função produtoValor()");
  if (valor <= 0) {
    return "Valor invalido";
  }
  return valor;
}
function produtoQuantidade(quantidade) {
  //console.log("Função produtoQuantidade()");
  console.log("\Quantidade do produto desejado.");
  if (quantidade <= 0) {
    return `Quantidade inválida`;
  }
  return quantidade;
}
function descontoPorTipoCliente(cliente) {
  //  console.log("Função tipoCliente()");
  if (cliente === "comum") {
    return 0;
  }
  if (cliente === "premium") {
    return 10 / 100;
  }
  if (cliente === "vip") {
    return 20 / 100;
  }
  return "Tipo de cliente inválido";
}
function valorBruto(valor, quantidade) {
  return valor * quantidade;
}
function valorComDesconto(valorSDesconto, descontoCliente) {
  if (descontoCliente === 0) {
    return valorSDesconto;
  }
  return valorSDesconto * (1 - descontoCliente);
}
function formaPagamento(tipo, valorComDescontoCliente) {
  //console.log("Função formaPagamento()");
  if (tipo === "pix") {
    return valorComDescontoCliente * (1 - 5 / 100);
  }
  if (tipo === "dinheiro") {
    return valorComDescontoCliente * (1 - 5 / 100);
  }
  if (tipo === "credito" || tipo === "debito") {
    return valorComDescontoCliente;
  }
  return `Pedido invalido`;
}

function valorFrete(valor) {
  if (valor < 100) {
    return 20;
  }
  if (valor < 300) {
    return 10;
  }
  if (valor >= 300) {
    return 0;
  }
  return `Pedido Invalido`;
}

function main(valor, quantidade, cliente, pagamento) {
  console.log("--Sistema de PEDIDOS --");
  const valorProduto = produtoValor(valor);
  if (valorProduto === "Valor invalido") {
    return "Pedido inválido: Valor Invalido ";
  }
  const quantidadeProduto = produtoQuantidade(quantidade);
  if (quantidadeProduto === "Quantidade inválida") {
    return "Pedido inválido: Quantidade inválida";
  }
  const descontoCliente = descontoPorTipoCliente(cliente);
  if (descontoCliente === "Tipo de cliente inválido") {
    return "Pedido inválido: Tipo de cliente inválido";
  }
  const valorSDesconto = valorBruto(valorProduto, quantidadeProduto);
  const valorComDescontoCliente = valorComDesconto(
    valorSDesconto,
    descontoCliente,
  );
  const tipoPagamento = formaPagamento(pagamento, valorComDescontoCliente);
  if (tipoPagamento === "Pedido invalido") {
    return "Pedido inválido: Tipo de pagamento invalido";
  }
  const valorDoFrete = valorFrete(tipoPagamento);
  const valorFinal = tipoPagamento + valorDoFrete;
  if (valorFinal === "Pedido invalido") {
    return "Pedido inválido: Frete Invalido";
  }

  return `\n\n--Resumo do Pedido ---
    Valor do produto: ${valorProduto}
    Quantidade do produto: ${quantidadeProduto}
    Valor bruto: ${valorSDesconto}
    Desconto$: ${descontoCliente * 100}%
    Valor com Desconto Parcial: ${valorComDescontoCliente}
    Valor com Desconto de Pagamento: ${tipoPagamento}
    Valor do frete: ${valorDoFrete}
    VALOR FINAL DE COMPRA: ${valorFinal}`;
}
console.log(`--- Pedido 1 ---
    ${main(100, 5, "comum", "credito")}`);
console.log(`--- Pedido 2 ---
    ${main(-10, -30, "vp", "px")}`);
