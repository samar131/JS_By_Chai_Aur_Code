// array

const heroes = ['batman', 'spiderman']
const myArr = [1, 2, 3, 4,]

const newArr = new Array(0, 1, 2, 3, 4, 5)

// console.log(newArr[1]);

// array methods

// newArr.push(6);
// newArr.push(7);
// newArr.pop()

// newArr.unshift(9)
// newArr.shift()

// console.log(newArr.includes(9))
// console.log(newArr.indexOf(3))

// const array = newArr.join()

// console.log(newArr);
// console.log(array);


// slice and splice
console.log("A ", newArr)

const my1 = newArr.slice(1, 3)

console.log(my1)
console.log("B ", newArr)



const my2 = newArr.splice(1, 3)
console.log("C ", newArr)
console.log(my2)