function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log('Final') // Esse bloco sempre será executado
}

teste1(6)
teste1(8)

function teste2(num) {
    // Esse exemplo estranho sempre será executado
    // por conta do ; finalizando o bloco do if
    if (num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)