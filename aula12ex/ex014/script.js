function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12){
        // bom dia 
        img.src = "foto_manha.jpg"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora <= 18){
        // boa tarde
        img.src = "foto_tarde.jpg"
        document.body.style.background = "#b9846f"
    }
    else{
        //boa noite
        img.src = "foto_noite.jpg"
        document.body.style.background = "#515154"
    }
}

