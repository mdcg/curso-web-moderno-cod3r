// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 10, 4, 5, 6, 7) // Só vai pegar os dois primeiros parâmetros
imprimirSoma() // NaN também

// Função com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(1, 2))
console.log(soma(2)) // Como b por padrão é 0, então retornará 2
console.log(soma()) // NaN, o primeiro parâmetro não tem valor padrão
