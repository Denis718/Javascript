let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p){
        this.peso += p
    }
}

amigo.engordar(2)
console.log(amigo.peso)

let a = 'teste'

console.log(a.toUpperCase())

let num = 8
num **= 2

console.log(num)