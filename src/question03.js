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

var qntabastecimentos = leia.question('quantas vezes voce abasteceu?')