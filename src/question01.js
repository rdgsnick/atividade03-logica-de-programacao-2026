// Uma empresa deseja analisar o desempenho de seus vendedores durante um determinado período.

// Desenvolva um algoritmo que solicite ao usuário a quantidade de vendedores que serão analisados.

// Para cada vendedor, o programa deverá solicitar o valor total de vendas realizadas.

// Ao final, o algoritmo deverá apresentar:

// * A quantidade de vendedores que venderam mais de R$ 5.000,00.
// * A quantidade de vendedores que venderam R$ 5.000,00 ou menos.
// * O valor total vendido por todos os vendedores.
// * A média de vendas dos vendedores.
import leia from 'readline-sync'
var qntvendedores = leia.questionInt('quantos vendedores ha na loja? ')
var contador = 1
var qntmais5= 0
var qntmenos5 = 0
var valortotal = 0
while(qntvendedores >= 1){
    var totalvendasvend = leia.questionFloat(`qual o valor total das vendas que o ${contador} vendedor fez?`)
    if (totalvendasvend > 5000){
        qntmais5++
    }else if (totalvendasvend <= 5000){
        qntmenos5++
    }
    valortotal += totalvendasvend
    qntvendedores--
    contador++
}
var media = valortotal / contador

  console.log(`${qntmais5} vendedores venderam mais de R$5000
${qntmenos5} venderam R$5000 ou menos    
e seu total de vendas foram de R$${valortotal}
e sua media de vendas foi de R$${media}
    `)