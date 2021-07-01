var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('images')
var data = new Date()
var hora = data.getHours()
msg.innerText = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    foto.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora < 18){
    foto.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
}else{
    foto.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}