function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab") 
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número")
    }
    else {
    num = Number(num.value)
    tab.innerHTML = ""
    for(let i = 0 ; i <= 10 ; i++) {
        let item = document.createElement("option")
        item.text = `${num} * ${i} = ${num * i}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }
    }
}
