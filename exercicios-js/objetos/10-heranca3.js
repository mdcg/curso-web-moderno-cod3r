const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Por padrão, o 'keys' irá mostrar apenas as
// propriedades e métodos do objeto original (ele irá descartar
// qualquer coisa vinda do prototype pai).
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Já aqui será possível listar as propriedades e métodos
// do pai.
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}}`)
}
