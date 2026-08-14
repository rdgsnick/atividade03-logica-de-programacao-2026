// Um jogador deseja analisar seu desempenho em várias partidas.

// O algoritmo deverá solicitar quantas partidas serão analisadas.

// Para cada partida, informe a quantidade de gols marcados.

// Considere que cada gol vale `50 pontos`.

// Ao final, o programa deverá apresentar:

// * A quantidade total de gols.
// * A pontuação total do jogador.
// * A média de gols por partida.
// * Quantas partidas o jogador marcou 2 gols ou mais.
import leia from 'readline-sync'
var gol = 50
var somagols= 0
var partidas = leia.questionInt('quantas partidas serao analisadas ? ')
var contador =1
var contador2 = partidas
var quantidadegols =0
while(partidas >= 1){
    var quantidadedegols= leia.questionInt(`quantos gols foi feito na ${contador} partida? : ` )
    somagols += quantidadedegols
    contador++
    partidas--
}
quantidadegols = somagols
var mediagols = contador2 /quantidadegols
somagols *= gol
console.log(`o jogador fez ${quantidadegols} gols em ${contador2} jogos, com um total de ${somagols} pontos`)

console.log(`o jogador tem uma media de ${mediagols.toFixed(2)} gol por partida`)

