let valor // não inicializada
console.log(valor) // undefined
// console.log(valor2) // ReferenceError
valor = null // Variável não está apontando para nenhum lugar específico da memória.
console.log(valor) // null
// console.log(valor.toString()) //Error
const produto = {}
console.log(produto.preco) // undefined

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite isso, não é interessante
// Uma maneira para 'excluir' o atributo do objeto, é usar o delete
console.log(produto)

produto.preco = null // sem preço
console.log(produto)