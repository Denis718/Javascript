function contar(){
    var i = document.getElementById('txtinicio')
    var f = document.getElementById('txtfim')
    var p = document.getElementById('txtpasso')
    var res = document.querySelector("div#res") 
    var result = ''
    
    if(i.value !='' && f.value !='' && p.value !=''){
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        res.innerHTML = 'Contando: </br>'

        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            while(i <= f){
                result += `${i}👉`
                i += p
            }
        }else{
            for(let c = i; c >= f; c -= p){
                result += `${c}👉`
            }
        }
        res.innerHTML += `${result}🏁 `
    }else{
        res.innerHTML = `Impossível contar!`
    }
}