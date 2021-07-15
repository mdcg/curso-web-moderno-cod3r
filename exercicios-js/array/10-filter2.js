Array.prototype.filter2 = function(callback) {
    let filteredArr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArr.push(this[i])
        }
    }
    return filteredArr
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

let isCaro = e => e.preco >= 500
let isFragil = e => e.fragil

console.log(produtos.filter2(isCaro).filter2(isFragil))
