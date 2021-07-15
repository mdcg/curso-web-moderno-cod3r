Array.prototype.map2 = function(callback) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

let getPreco = produto => produto.preco
let precos = carrinho.map2(JSON.parse).map2(getPreco)
console.log(precos)
