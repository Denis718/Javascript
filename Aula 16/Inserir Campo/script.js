function adicionar(){
    var campo = document.getElementById('teste')
    let texto = document.createElement('input')
    texto.setAttribute('type', 'text')

    campo.appendChild(texto)
}