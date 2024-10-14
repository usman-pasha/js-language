// Stack and Heap Memory

// Stack: [Primitive Types]
// ---------------------------------------
// Primitives are stored in the stack. This is because they are fixed in size and quick to access.
// Examples of primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt

// Example of primitives
let age = 25;  // Number (primitive) - stored in Stack
let name = 'John';  // String (primitive) - stored in Stack
let isStudent = true;  // Boolean (primitive) - stored in Stack

// When we assign primitives to another variable, they are copied by value.
let ageCopy = age;
ageCopy = 30;

console.log(age);      // Output: 25 (original value)
console.log(ageCopy);  // Output: 30 (new value)


// Heap: [Non-Primitive Types]
// ---------------------------------------
// Non-primitive types (like Objects, Arrays, and Functions) are stored in the heap.
// The stack will hold a reference (address) to the location of the object in the heap.

// Example of non-primitive types
let person = { name: 'John', age: 25 };  // Object (non-primitive) - stored in Heap
let hobbies = ['Reading', 'Sports'];  // Array (non-primitive) - stored in Heap

// When we assign non-primitives to another variable, they are copied by reference (not value).
let anotherPerson = person;
anotherPerson.age = true;  // Changing age property in the copy

console.log(person.age);  // Output: 30 (because the reference is shared)
console.log(anotherPerson.age);  // Output: 30 (same reference)
