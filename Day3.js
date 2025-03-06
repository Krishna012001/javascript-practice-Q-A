// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let arr = [2, 3, 4, 5, 6, 7,]

let square = arr.map((el) => (el * el))
console.log(square)
let sum = square.reduce((res, el) => (res + el))
console.log(sum)

let average = sum / arr.length

console.log(average)

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let newArray = [1, 2, 3, 4, 5, 6, 6,]
let plus5 = newArray.map((el) => (el + 5))
console.log(plus5)

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
let str = ["raju", "sachin", "krishna", "rahul"]

let upper = str.map((string) => (string.toUpperCase()))
console.log(upper)

// Qs4. Write a function called doubleAndRueturn Args which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

const doubleAndRueturn = (arr, ...args) => [...arr, ...args.map((el) => (el * 2))]

console.log(doubleAndRueturn([1, 2, 3, 4], 2, 3,))

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

let margeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })


console.log(margeObjects({ a: 1, b: 2 }, { c: 6, d: 9 }))