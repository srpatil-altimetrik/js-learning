"use strict"; // treat js code as newer version

// alert(3 + 4); // we are using node, not browser 

// 1. Number
let age = 30;
let price = 19.99;

// 2. String
let name = "Alice";
let greeting = `Hello, ${name}!`;

// 3. Boolean
let isAdult = true;
let isStudent = false;

// 4. Undefined
let notDefined;
console.log(notDefined); // undefined

// 5. Null
let user = null;

// 6. Symbol
let uniqueSymbol = Symbol('unique');

// 7. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// 8. Object
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};

// 9. Array
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits[0]; // "apple"

// 10. Function
function greet(name) {
    return `Hello, ${name}!`;
}
let greetingMessage = greet(name); // "Hello, Alice!"

// 11. Date
let currentDate = new Date();
console.log(currentDate); // Current date and time

// 12. RegExp
let regex = /hello/i; // Case-insensitive search for "hello"
let testString = "Hello world!";
let isMatch = regex.test(testString); // true

// Display everything
console.log({
    age,
    price,
    name,
    greeting,
    isAdult,
    isStudent,
    notDefined,
    user,
    uniqueSymbol,
    bigNumber,
    person,
    fruits,
    firstFruit,
    greetingMessage,
    currentDate,
    isMatch
});

