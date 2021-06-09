let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // true pq referencia com o módulo

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // O arrow function prevalece => FALSE
comparaComThisArrow(module.exports)