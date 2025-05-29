function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Sum is:", result); // Output: Sum is: 8

//Function  declaration
function sayHi() {
  console.log("Hi!");
}

//function expression
const sayBye = function () {
  console.log("Bye!");
};

//Arrow Function (ES6+)
const multiply = (x, y) => x * y;


//🔹 Global Scope
let name = "Global";

function showName() {
  console.log(name); // Accessible
}
