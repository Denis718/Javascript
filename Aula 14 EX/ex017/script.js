function tabuada(){
    var num = document.getElementById('ok')
    var combotab = document.getElementById('cbotab');
    var res = 0

    if(num.value.length != 0){
        num = Number(num.value)
        combotab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${i} X ${num} = ${i * num}`
            item.value = `tab${i}`
            combotab.appendChild(item)
        }
    }else{
        alert("Por favor digite um número!")
    }
}