// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000

// Assignment Operators
let x = 5;
x += 2; // same as x = x + 2
console.log("x after += 2:", x);        // 7

x *= 3; // same as x = x * 3
console.log("x after *= 3:", x);        // 21

// Comparison Operators
let age = 18;

console.log("Is age equal to 18?", age == 18);      // true
console.log("Strict equal (===):", age === "18");   // false
console.log("Not equal (!=):", age != 21);          // true
console.log("Greater than:", age > 16);             // true
console.log("Less than or equal to:", age <= 18);   // true

// Logical Operators
let isMember = true;
let hasCoupon = false;

console.log("Can get discount?", isMember || hasCoupon); // true
console.log("Both true?", isMember && hasCoupon);        // false
console.log("Not a member?", !isMember);                 // false


//Answers from quiz from notes.txt
//No 1
const length = 20
const width = 30
const area = length * width
console.log(area);

//No 2
const user_age = 20

if (user_age <= 18){
    console.log("You are a minor");
} else if (user_age > 18){
    console.log("You are an adult");
}

//No 3

const num = 10
const strings = "10"
console.log(num === strings);  //false
console.log(num != strings); //false

