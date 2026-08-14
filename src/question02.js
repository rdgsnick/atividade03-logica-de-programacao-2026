// Você está desenvolvendo um sistema para controlar as tentativas de acesso a uma área restrita. A senha correta do sistema é `4321`.
// O algoritmo deverá solicitar uma senha ao usuário.

// Enquanto a senha digitada estiver incorreta, o programa deverá informar:

// `Senha incorreta! Tente novamente.`

// O usuário poderá realizar no máximo **3 tentativas**.

// Caso informe a senha correta, o programa deverá apresentar:

// `Acesso permitido.`

// Caso utilize todas as tentativas sem acertar a senha, deverá apresentar:

// `Acesso bloqueado.`

// Ao final, informe também quantas tentativas foram utilizadas.
import leia from 'readline-sync'
var tentativas = 0
var qnttentativas = 3

var senha = 4321

    while(digitesenha !== senha && qnttentativas>= 0){

    var digitesenha=leia.questionInt("digite a senha ")
    
    --qnttentativas
    tentativas++
    if(digitesenha ===senha){

        console.log('acesso liberado')

        
    }else if(qnttentativas == 0){
        
        console.log('voce nao tem mais tentativas, acesso bloqueado')
        break;

    }else if (digitesenha !== senha){
        console.log('senha incorreta, tente novamente')
    }

}
