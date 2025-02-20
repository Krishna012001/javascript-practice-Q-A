// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//   positive number].
//   For example: for array [7, 9, 0, -2] and n=3
//   Print, [7, 9, 0]

//Ans

let arr = [7, 9, 0, -2]
let n = 3
let ans = arr.slice(0, n)
console.log(ans)



//   Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//   positive number].
//   For example: for array [7, 9, 0, -2] and n=3
//   Print, [9, 0, -2]

//Ans
let num = [7, 9, 0, -2]
let x = 3
let res = arr.slice(num.length - x)
console.log(res)


//   Qs3. Write a JavaScript program to check whether a string is blank or not.\

//Ans

let str = prompt("enter the string")

if (str.length == 0) {
  console.log("string is blank")
}
else {
  console.log("string is not blank")
}

//   Qs4. Write a JavaScript program to test whether the character at the given (character)
//   index is lower case.

//ans

let strr = "KrishnaYadav"
let idx = 3
if (strr.length[idx] === strr.toLowerCase()) {
  console.log("character is lowerCase")
}
else {
  console.log('character is not lowercase')
}




//   Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.



let strrr = prompt("enter the string")
console.log(`orginal string= ${strrr}`)
console.log(`string withaut spaces=${strrr.trim()}`)



//   Qs6. Write a JavaScript program to check if an element exists in an array or not

//ans

let arrr = [1, 2, 3, 4, 5,]
let item = 4;
if (arrr.includes(item) == true) {
  console.log("element exists in array")
}
else {
  console.log("element  does not exist in  array")
}