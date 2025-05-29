// 🧩 Functions and Scope Demo

// 1. Function Declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");  // Hello, Alice!

// 2. Function that returns a value
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log("Sum is:", result);  // Sum is: 8

// 3. Function Expression
const sayBye = function() {
  console.log("Bye!");
};
sayBye();  // Bye!

// 4. Arrow Function
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(4, 5));  // Multiply: 20

// 5. Scope examples

// Global variable
let globalVar = "I am global";

function checkScope() {
  // Local variable
  let localVar = "I am local";
  console.log(globalVar);  // Accessible inside function
  console.log(localVar);   // Accessible inside function
}

checkScope();

// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// Block scope example
if (true) {
  let blockVar = "I am block scoped";
  const blockConst = "I am also block scoped";
  console.log(blockVar);
  console.log(blockConst);
}

// console.log(blockVar);   // Uncaught ReferenceError: blockVar is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined
