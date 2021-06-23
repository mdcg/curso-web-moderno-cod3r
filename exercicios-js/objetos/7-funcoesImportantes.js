const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoas))
console.log(Object.values(pessoas))
console.log(Object.entries(pessoas))

Object.entries(pessoas).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Visibilidade, mutabilidade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

// Object.assign (ES6) -> Concatena propriedades de objetos
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
