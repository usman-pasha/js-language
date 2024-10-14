console.log(myVar); // Outputs: undefined
// console.log(myLet); // Uncommenting this will throw ReferenceError
// console.log(myConst); // Uncommenting this will throw ReferenceError

var myVar = "Hello"; // Variable declaration
let myLet = "World"; // Variable declaration with let
const myConst = "!";

function greet() {
    console.log("Hello, World!");
}

greet(); // Outputs: Hello, World!

// Function expressions are not hoisted
// greetExpression(); // Uncommenting this will throw TypeError
var greetExpression = function () {
    console.log("Hello from Expression!");
};

// Calling the function expression after its definition
greetExpression(); // Outputs: Hello from Expression!
