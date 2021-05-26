console.log(typeof Object) // função
console.log(typeof new Object) // object - Você pode usar também new Object()

const Client = function() {}
console.log(typeof Client) // função
console.log(typeof new Client) // object

class Produto {} // ES2015 (ES6) - Syntax Sugar
console.log(typeof Produto) // função
console.log(typeof new Produto()) // objeto