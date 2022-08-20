function calc(){
    var n1 = Number(prompt("Digite o primeiro valor:"))
    var n2 = Number(prompt("Digite o segundo valor:"))
    var op = Number(prompt(`Valores informados: ${n1} e ${n2} \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    var res = document.getElementById("res")

    res.innerHTML = "<h3>Calculando...</h3>"

    switch (op){
        case 1:
            res.innerHTML += `${n1} + ${n2} = ${n1 + n2}`
            break
        case 2:
            res.innerHTML += `${n1} - ${n2} = ${n1 - n2}`
            break
        case 3:
            res.innerHTML += `${n1} * ${n2} = ${n1 * n2}`
            break
        case 4:
            res.innerHTML += `${n1} / ${n2} = ${n1 / n2}`
            break
        default:
            res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
            break

    }
}