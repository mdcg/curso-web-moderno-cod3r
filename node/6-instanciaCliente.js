const contadorA = require('./6-instanciaUnica')
const contadorB = require('./6-instanciaUnica')

const contadorC = require('./6-instanciaNova')
const contadorD = require('./6-instanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD)