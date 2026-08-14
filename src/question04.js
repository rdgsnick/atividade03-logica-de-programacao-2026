// Você precisa desenvolver um sistema simples para controlar os pedidos realizados em uma lanchonete.
// O programa deverá apresentar repetidamente o seguinte menu:
// `1 - Hambúrguer - R$ 20,00`
// `2 - Cachorro-quente - R$ 15,00`
// `3 - Refrigerante - R$ 7,00`
// `4 - Batata frita - R$ 12,00`
// `0 - Finalizar pedido`
// A cada escolha, o valor correspondente deverá ser adicionado ao total da compra.
// O menu deverá continuar sendo apresentado até que o usuário escolha a opção `0`.
// Ao finalizar, o algoritmo deverá apresentar:
// * Quantidade total de itens pedidos.
// * Valor total da compra.
// * Valor médio gasto por item.
// Caso seja informada uma opção diferente das disponíveis no menu, apresente uma mensagem informando que a opção é inválida e não contabilize nenhum item.
import leia from 'readline-sync'
var Hambúrguer =20
var Cachorroquente =15
var refri = 7
var batata = 12
var valor = 0
var opcao
var contadorbatata= 0
var contadorhamburguer= 0
var contadorcachorro= 0
var contadorrefri= 0
do {
    
    console.log("\n========== LANCHONETE ==========");
    console.log("1 - HAMBURGUER : R$20,00");
    console.log("2 - CACHORRO QUENTE : R$15,00");
    console.log("3 - REFRI : R$7,00");
    console.log("4 - BATATA FRITA : R$12,00");
    console.log("0 - Sair do Menu ");

    opcao = leia.questionInt("Informe uma opcao: ");

    if (opcao === 1) {

        valor+= Hambúrguer
        contadorhamburguer++
    } else if (opcao === 2) {
        
        valor+= Cachorroquente
        contadorcachorro++
    } else if (opcao === 3) {
        valor+= refri
        contadorrefri
        
    } else if (opcao === 4) {
        
        valor+= batata
        contadorbatata++    
    }

     else if (opcao === 0) {

        console.log("Sistema encerrado");

    } else {

        console.log("Opcao invalida");

    }
console.log(`\n total do pedido : ${valor}`)
} while (opcao !== 0);

console.log(`\n voce pediu ${contadorbatata} batatas ${contadorhamburguer} hamburgueres ${contadorrefri} refris, e ${contadorcachorro} cachorros quentes`)
console.log(`\n seu pedido saiu por : R$${valor}`)


console.log("====== SIGA PARA O CAIXA RETIRAR SEU PEDIDO NO CAIXA ======");

