const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const getBolsistaStatus = o => o.bolsista

const allIsBolsista = (el, ac) => el && ac

const anyIsBolsista = (el, ac) => el || ac

console.log(alunos.map(getBolsistaStatus).reduce(allIsBolsista))
console.log(alunos.map(getBolsistaStatus).reduce(anyIsBolsista))