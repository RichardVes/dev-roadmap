/*Desafio 03 — Compra parcelada
Uma loja vende um computador por R$ 4.500.
O cliente possui:
    Dinheiro disponível: R$ 2.000
Ele recebe:
    Desconto à vista: R$ 300
Se pagar à vista, o desconto é aplicado.
Se optar pelo parcelamento, o preço permanece R$ 4.500 e será dividido em 5 parcelas iguais.
Seu programa deve calcular e mostrar:
    Preço original: ...
    Dinheiro disponível: ...
    Desconto à vista: ...
    Preço à vista: ...
    Valor restante para pagar à vista: ...
    Preço parcelado: ...
    Quantidade de parcelas: ...
    Valor de cada parcela: ...
Regras
    Use apenas:
        const
        let
        +
        -
        *
        /
        console.log()*/

const preco_computador = 4500;
const desconto_avista = 300;
const dinheiro_cliente = 2000;
console.log("Preço original: ", preco_computador);
console.log("Dinheiro disponível: ", dinheiro_cliente);
console.log("Desconto à vista: ", desconto_avista);
const preco_avista = preco_computador - desconto_avista;
console.log("Preço à vista: ", preco_avista);
const valor_restante = preco_avista - dinheiro_cliente;
console.log("Valor restante para pagar à vista: ", valor_restante);
const quantidade_parcelas = 5;
const preco_parcelado = preco_computador;
console.log("Preço parcelado: ", preco_parcelado);
console.log("Quantidade de parcelas: ", quantidade_parcelas);
const valor_parcela = preco_parcelado / quantidade_parcelas;
console.log("Valor de cada parcela: ", valor_parcela);
