function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
     nome: 'Notebook',
     preco: 4589,
     desc: 0.15,
     getPreco
}

console.log(getPreco()) // R$ NaN
console.log(produto.getPreco()) // R$ 3900.65

const carro = {
    preco: 49000,
    desc: 0.20,
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // Primeiro contexto depois parâmetros
console.log(getPreco.apply(carro, [0.17, '$'])) // Primeiro contexto depois parâmetros em um array
