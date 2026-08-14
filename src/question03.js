// um posto de combustível deseja analisar os abastecimentos realizados durante um determinado período.
// Desenvolva um algoritmo que inicialmente solicite ao usuário a quantidade de abastecimentos que serão registrados.
// Para cada abastecimento, o programa deverá solicitar:
// * Tipo de combustível:
//   * `1 - Gasolina`
//   * `2 - Etanol`
//   * `3 - Diesel`
// * Quantidade de litros abastecidos.
// Considere os seguintes valores por litro:
// * Gasolina - R$ 6,20
// * Etanol - R$ 4,30
// * Diesel - R$ 5,90
// Para cada abastecimento, o algoritmo deverá calcular e apresentar o valor a ser pago.
// Ao final, o programa deverá apresentar:
// * Quantidade de abastecimentos com gasolina.
// * Quantidade de abastecimentos com etanol.
// * Quantidade de abastecimentos com diesel.
// * Quantidade total de litros vendidos.
// * Valor total arrecadado pelo posto.
// * Qual combustível teve a maior quantidade de abastecimentos.
// Caso seja informado um tipo de combustível inválido, o abastecimento não deverá ser contabilizado e o usuário deverá informar os dados novamente.
import leia from 'readline-sync'
var gasolina =6.20
var etanol = 4.30
var diesel = 5.90
var contadorgasolina =0
var contadordiesel =0
var contadoretanol =0
var quantidadelitrosgas= 0
var quantidadelitroseta= 0
var quantidadelitrosdie= 0
var qntabastecimentos = leia.questionInt('quantas vezes voce abasteceu?')
while(qntabastecimentos >= 1){
var abastecido = leia.keyInSelect([ "1 - GASOLINA - R$ 6,20",  "2 - ETANOL - R$ 4,30", "3 - DIESEL - R$ 5,90"], "COM QUAL COMBUSTIVEL VOCE ABASTECEU")
   if (abastecido ==1){
    quantidadelitrosgas = leia.questionInt("quantos litros de gasolina voce colocou? ")

    contadorgasolina++
}else if (abastecido ==2){
    quantidadelitroseta = leia.questionInt("quantos litros de etanol voce colocou? ")
    
    contadoretanol++
}else if (abastecido == 3){
    quantidadelitrosdie = leia.questionInt("quantos litros de diesel voce colocou? ")
    
    contadordiesel++
   }

    qntabastecimentos--
}
console.log(`voce abasteceu com gasolina ${contadorgasolina} vezes, com etanol ${contadoretanol} vezes, e com diesel${contadordiesel} vezes`)
