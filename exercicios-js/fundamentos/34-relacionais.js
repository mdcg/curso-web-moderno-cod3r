console.log('01)', '1' == 1) // true
console.log('01)', '1' === 1) // true
console.log('03)', '3' != 3) // false
console.log('04)', '3' !== 3) // true

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // Como é referência de memória, será false
console.log('10)', d1 == d2) // também
console.log('11)', d1.getTime() == d2.getTime())
console.log('12)', undefined == null) // true!
console.log('13)', undefined === null) // false!