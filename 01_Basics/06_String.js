const name = "Samar"
const age = 16

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("Samar-V-15")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt([2]))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-6, 4)
console.log(anotherString)

const newStringOne = "     Samar    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://samar.com/samar%20verma"

console.log(url.replace('%20', '-'))

console.log(url.includes('summer'))

console.log(gameName.split('-'))