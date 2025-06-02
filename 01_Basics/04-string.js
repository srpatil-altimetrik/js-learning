// strings-example.js

// 1. String Declaration
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateString = `Hello, World!`;

// 2. String Concatenation
let greeting = "Hello, " + "JavaScript!";
let name = "Alice";
let personalizedMessage = `Hello, ${name}! Welcome to the world of JavaScript!`;

// 3. String Methods

// Length of a string
console.log("Length of singleQuoteString:", singleQuoteString.length); // Output: 13

// Convert string to uppercase
console.log("Uppercase:", singleQuoteString.toUpperCase()); // Output: HELLO, WORLD!

// Convert string to lowercase
console.log("Lowercase:", doubleQuoteString.toLowerCase()); // Output: hello, world!

// Character at index
console.log("Character at index 4:", singleQuoteString.charAt(4)); // Output: o

// Index of a substring
console.log("Index of 'World':", singleQuoteString.indexOf("World")); // Output: 7

// Slice string
console.log("Slice from index 0 to 5:", singleQuoteString.slice(0, 5)); // Output: Hello

// Split string into an array
let fruitString = "apple,banana,orange";
let fruits = fruitString.split(",");
console.log("Fruits array:", fruits); // Output: ["apple", "banana", "orange"]

// Replace part of the string
let newGreeting = singleQuoteString.replace("World", "JavaScript");
console.log("Replaced string:", newGreeting); // Output: Hello, JavaScript!

// Trim whitespace
let paddedString = "  Hello, World!  ";
console.log("Trimmed string:", paddedString.trim()); // Output: Hello, World!

// 4. Escape Characters
let escapeExample = "This is a line break:\nAnd this is a tab:\t\tEnd";
console.log(escapeExample);

// 5. Template Literals with multi-line and interpolation
let multiLineString = `This is the first line
This is the second line
This is the third line`;
console.log("Multi-line string:\n", multiLineString);

let age = 30;
let introMessage = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Personalized Intro:", introMessage); // Output: Hello, my name is Alice and I am 30 years old.
