let arnum = []
var res = document.getElementById('res')
var tabval = document.getElementById('tabval')

function adicionar(num){
    let cont = 0
    if(num > 0 && num <= 100 && arnum.indexOf(num) < 0){
        arnum.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${arnum[arnum.length - 1]} adicionado`
        item.value = `${arnum.length}`
        tabval.appendChild(item)
    }else{
        alert('Número inválido ou já encontrado na lista!')
    }
    res.innerHTML = ''
}

function finalizar(){
    let menor
    let maior
    let soma = 0
    
    if(arnum.length >= 1){
        menor = arnum[0]
        maior = arnum[0]
        for(var pos in arnum){
            menor = menor > arnum[pos]? arnum[pos]: menor
            maior = maior < arnum[pos]? arnum[pos]: maior
            soma += arnum[pos]
        }
        res.innerHTML = `<p>Ao todo, temos ${arnum.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${soma/arnum.length}</p>`
    }else{
        alert('Adicione valores antes de finalizar!')
    }
}