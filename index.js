// Practice Questions

// Qs1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.


let num = 25;
if (num % 10 == 0) {

  console.log("good")
}
else {
  console.log("bad")
}


// Qs2. Take the user's name & age as input using prompts.

// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]



let name = prompt("enter the name")
let age = prompt('enter the age')

alert(`${name} is ${age} year old`)



// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March

// Months in Quarter 2 : April, May, June

// Months in Quarter 3 : July, August, September


// Months in Quarter 4: October, November, December

// [Use the number as the case value in switch]


let Quarter = 1;

switch (Quarter) {

  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log(October, November, December)
    break;
  default:
    console.log("not a quarter")


}



// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
// length greater than 5.
// For a given string print if it is golden or not.

let str = "apple"

if (str[0] == "a" || str[0] == "A" && str.length > 5) {


  console.log("golden string")
}
else {
  console.log("not a golden string")
}




// Qs5. Write a program to find the largest of 3 numbers.

let a = 100
let b = 65
let c = 82

if (a >= b && a > c) {

  console.log("a is largest")
}
else if (b > a && b > c) {
  console.log("b is largest")

}
else {
  console.log("c is largest")
}


// Qs6 . Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2


let num1 = 32;
let num2 = 7652

if (num1 % 10 == num2 % 10) {

  console.log("number have the same last digit no which is ", (num1 % 10))
}
else {

  console.log("number don't same last digit number")
}