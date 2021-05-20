const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Isso não gera erro!
console.log(escola.charCodeAt(3)) // Valor na tabela ASCII
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // Cod - Não inclusivo

console.log('Escola '.concat(escola.concat("!"))) // Dá pra usar tanto '' quanto ""
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))