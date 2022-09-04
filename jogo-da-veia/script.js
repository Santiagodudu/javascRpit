// sorteio de 0 a 8 => Math.floor(Math.random() * 9)
let lista = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
let botao = document.getElementsByName("botao")
let sinal = "O"
let res = document.getElementById("res") 
let reset = document.createElement("input")
let win = 0


function jogo(n) {
    if (lista.indexOf(n) == -1) {
        alert("Jogue em uma casa que ainda nao foi jogada")
    }
    else {
        for (let cont = 0; cont < 2 ; cont++){
            if (sinal == "X") {
                sinal = "O"
                let O = maquinaSmart("O", "X")
                if (O) {
                    res.innerHTML += `<h2>O jogador ${sinal} ganhou</h2>`
                    disable(botao)
                }
                else {
                    let X = maquinaSmart("X", "O")
                    if (X) {
                        quemGanhou(sinal)
                    }
                    else {
                        maquinaDumb()
                    }
                }
            }
            else {
                sinal = "X"
                lista[n] = sinal
                botao[n].value = sinal
                win = quemGanhou(sinal)
                if(win){
                    break
                }
            }
        }
    }
}

function maquinaSmart(sinal, oposto) { //retorna se conseguiu efetuar ou não a jogada
    let c = 0
    for (let i = 0 ; i != 9 ; i += 3) {
        if (botao[i].value == sinal && botao[i + 1].value == sinal && botao[i + 2].value != oposto) {
            botao[i + 2].value = "O"
            lista[i + 2] = "O"
            return true
        }
        else if (botao[i + 1].value == sinal && botao[i + 2].value == sinal && botao[i].value != oposto) {
            botao[i].value = "O"
            lista[i] = "O"
            return true
        }
        else if (botao[i].value == sinal && botao[i + 2].value == sinal && botao[i + 1].value != oposto) {
            botao[i + 1].value = "O"
            lista[i + 1] = "O"
            return true
        } // end horizontal
        else if (botao[c].value == sinal && botao[c + 3].value == sinal && botao[c + 6].value != oposto) {
            botao[c + 6].value = "O"
            lista[c + 6] = "O"
            return true
        }
        else if (botao[c + 3].value == sinal && botao[c + 6].value == sinal && botao[c].value != oposto) {
            botao[c].value = "O"
            lista[c] = "O"
            return true
        }
        else if (botao[c].value == sinal && botao[c + 6].value == sinal && botao[c + 3].value != oposto) {
            botao[c + 3].value = "O"
            lista[c + 3] = "O"
            return true
        } // end vertical
        c += 1
    }

    if (botao[0].value == sinal && botao[4].value == sinal && botao[8].value != oposto) {
        botao[8].value = "O"
        lista[8] = "O"
        return true
    }
    else if (botao[0].value == sinal && botao[8].value == sinal && botao[4].value != oposto) {
        botao[4].value = "O"
        lista[4] = "O"
        return true
    }
    else if (botao[4].value == sinal && botao[8].value == sinal && botao[0].value != oposto) {
        botao[0].value = "O"
        lista[0] = "O"
        return true
    }
    else if (botao[2].value == sinal && botao[4].value == sinal && botao[6].value != oposto) {
        botao[6].value = "O"
        lista[6] = "O"
        return true
    }
    else if (botao[2].value == sinal && botao[6].value == sinal && botao[4].value != oposto) {
        botao[4].value = "O"
        lista[4] = "O"
        return true
    }
    else if (botao[4].value == sinal && botao[6].value == sinal && botao[2].value != oposto) {
        botao[2].value = "O"
        lista[2] = "O"
        return true
    }
    else {
        return false
    } 
}

function quemGanhou(sinal) {
    let c = 0
    for (let i = 0 ; i != 9 ; i+= 3) {
        if (botao[i].value == sinal && botao[i + 1].value == sinal && botao[i + 2].value == sinal){
            res.innerHTML += `<h2>O jogador ${sinal} ganhou</h2>`
            disable(botao)
            return true
        }
        else if (botao[c].value == sinal && botao[c + 3].value == sinal && botao[c + 6].value == sinal) {
            res.innerHTML += `<h2>O jogador ${sinal} ganhou</h2>`
            disable(botao)
            return true
        }
        c += 1
    }
    if (botao[0].value == sinal && botao[4].value == sinal && botao[8].value == sinal){
        res.innerHTML += `<h2>O jogador ${sinal} ganhou</h2>`
        disable(botao)
        return true
    }
    else if (botao[2].value == sinal && botao[4].value == sinal && botao[6].value == sinal){
        res.innerHTML += `<h2>O jogador ${sinal} ganhou</h2>`
        disable(botao)
        return true
    }

    let cont = 0 
    for (let i = 0 ; i < 9 ; i++) {
        if (botao[i].value == "X" || botao[i].value == "O") {
            cont += 1
        }
        else {
            cont = 0
            break
        }
        
    }
    if (cont == 9) {
        res.innerHTML += "<h2>Deu velha</h2>"
        disable(botao)
        return true
    }
    return false
}


function disable(botao){
    for (let i in botao) {
        botao[i].disabled = true
    }
}

function Reinicia() {
    for (let i = 0 ; i < 9 ; i++){ 
        sinal = "O"
        lista[i] = i
        botao[i].disabled = false
        botao[i].value = " "
    }
    res.innerHTML = " "
}

function maquinaDumb() {
    let random = Math.floor(Math.random() * 9)
    while (true) {
        if (lista.indexOf(random) != -1) {
            lista[random] = "O"
            botao[random].value = "O" 
            break
        }
        else {
            random = Math.floor(Math.random() * 9)
        }
    }
}