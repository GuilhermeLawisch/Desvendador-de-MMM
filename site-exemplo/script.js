let conj = []

let numb = document.getElementById('inicio')

function adicionar() {
    if (numb.value == 0) {
        window.alert('ERRO');
    } else {
        if (conj.length > 0) {
            conjunto.innerHTML += ','
        }
        let n = Number(numb.value);
        conj.push(n);
        conjunto.innerHTML += `${n}`;
    }
    numb.value = ''
    numb.focus()
}

function calculo() {

conj.sort(function(a, b) {
    return a - b;
})
let tamanho = conj.length


//MODA
let numeroDaModa = []
let repeticoesModa = 1
let repeticoes = 1
let repeticoesFinal = -1
let numeroModa = -1
let numero = -1
let numeroFinal = -1


    for (let posicao1 in conj) {
    
        repeticoesModa = 0
        for (let posicao2 in conj) {
            
            if (conj[posicao1] == conj[posicao2]) {
                repeticoesModa++;
                numeroModa = conj[posicao1];
            }
        }
        if (repeticoesModa > repeticoes) {
            repeticoes = repeticoesModa
            numero = numeroModa
            
        }
        verificar(repeticoes, numero)
    }
    function verificar(vezesRepeticoes, vezesNumero) {
        if (Number(vezesRepeticoes) > 1 || Number(vezesNumero) != -1) {
            repeticoesFinal = vezesRepeticoes
            numeroFinal = vezesNumero
            numeroDaModa.push(vezesNumero)
            moda.innerHTML = `A moda é ${numeroFinal} e se repetiu ${repeticoesFinal} vezes.`
            console.log(repeticoesFinal)
        } else if (Number(vezesRepeticoes) == Number(repeticoesFinal) && Number(vezesNumero) != Number(numeroFinal)) {    
            console.log('opcao2')
            numeroDaModa.push(vezesNumero)
            moda.innerHTML = `A moda tem os valores ${numeroDaModa} e se repetiram ${repeticoes} vezes.`
        } else if (Number(vezesRepeticoes) == 1 || Number(vezesNumero) != -1) {
            console.log('opcao3')
            moda.innerHTML = `Nenhum número se repete.`
        } 
    }


/*
if (testeRepeticao(numeroModa)) {
            numeroDaModa.push(numeroModa)
        }

if (repeticoesModa > repeticoes) {
numeroDaModa.push(numeroModa, repeticoesModa)
*/

//MÉDIA
let soma = 0
    for (let numero in conj) {
        soma += conj[numero]
    }
    let resMedia = soma/tamanho
    media.innerHTML = `A média dos valores é ${resMedia}.`


//MEDIANA
    if (tamanho%2 == 0) {       // se número for par, tem que somar os dois e dividir
        let valorMediana1 = tamanho/2 
        let valorMediana2 = tamanho/2 -1
        mediana.innerHTML = `O conjunto é par, e a mediana é ${(conj[valorMediana1]+conj[valorMediana2])/2}.`
    } else {                    // se for impar, tem que somente pegar o valor do meio
        let valorMediana = tamanho/2 -.5
        mediana.innerHTML = `O conjunto é ímpar, e a mediana é ${conj[valorMediana]}.`
    }

}

function testeRepeticao(numero) {
    let teste = numeroDaModa.indexOf(numero)
    if (teste == -1) {
        return false;
    } else {
        return true;
    }
}
