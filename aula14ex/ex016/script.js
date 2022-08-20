function contagem() {
    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById("fim").value)
    var passo = Number(document.getElementById("passo").value)
    var res = document.querySelector("div#res")

    if (inicio == 0 || fim == 0){
        res.innerHTML = "Impossível contar."
    }
    else {
        if (passo == 0) {
        alert("Passo inválido! Considerando PASSO 1")
        passo = 1
        }
        res.innerHTML = "Contando: <br>"

        for(let i = inicio ; i <= fim ; i+= passo){
            res.innerHTML += `${i}👉`
        }
        res.innerHTML += `🏁`
    }
}