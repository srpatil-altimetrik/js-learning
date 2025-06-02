// Numbers and Math in JavaScript

console.log("Numbers and Math in JavaScript\n");

// Working with Numbers
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
let str = "123.45";
let convertedNum = Number(str); // Convert string to number

console.log("Converted string to number:", convertedNum); // Output: 123.45

// Checking if a value is NaN
let invalidNum = 0 / 0;
console.log("Is invalidNum NaN?", Number.isNaN(invalidNum)); // true

// Checking if a number is finite
console.log("Is 42 finite?", Number.isFinite(num1)); // true
console.log("Is Infinity finite?", Number.isFinite(Infinity)); // false

// Math methods
let randomNum = Math.random(); // Generate random number between 0 and 1
console.log("Random Number:", randomNum);

let maxNumber = Math.max(1, 100, 35, 57);
console.log("Maximum number:", maxNumber); // Output: 100

let sqrtResult = Math.sqrt(16);
console.log("Square root of 16:", sqrtResult); // Output: 4

let powerResult = Math.pow(2, 3); // 2^3
console.log("2 raised to the power of 3:", powerResult); // Output: 8

let roundedNumber = Math.round(3.6);
console.log("Rounded 3.6:", roundedNumber); // Output: 4

let absValue = Math.abs(-5);
console.log("Absolute value of -5:", absValue); // Output: 5

let ceilValue = Math.ceil(3.2);
console.log("Ceil of 3.2:", ceilValue); // Output: 4

let floorValue = Math.floor(3.8);
console.log("Floor of 3.8:", floorValue); // Output: 3

// Working with Dates
console.log("\nWorking with Dates in JavaScript\n");

// Current Date and Time
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Specific Date (January 1, 1990)
let birthday = new Date(1990, 0, 1); // Note: Months are 0-based
console.log("Birthday:", birthday);

// Get Date Components
console.log("Current Year:", currentDate.getFullYear());
console.log("Current Month (0-11):", currentDate.getMonth()); // 0 = January, 11 = December
console.log("Current Date (1-31):", currentDate.getDate());
console.log("Current Hours (0-23):", currentDate.getHours());
console.log("Current Minutes (0-59):", currentDate.getMinutes());
console.log("Current Day of the Week (0=Sun, 6=Sat):", currentDate.getDay());

// Modify Date (Change Year)
currentDate.setFullYear(2025);
console.log("Updated Year:", currentDate);

// Date in Locale Format (US & GB)
console.log("Date in US format:", currentDate.toLocaleDateString('en-US'));
console.log("Date in UK format:", currentDate.toLocaleDateString('en-GB'));

// Convert Date to ISO String
console.log("Date in ISO format:", currentDate.toISOString());

// Convert Date to UTC String
console.log("Date in UTC format:", currentDate.toUTCString());

// Comparing Dates
let futureDate = new Date(2026, 5, 2);
console.log("Is the future date later?", futureDate > currentDate); // Output: true

// Date from Timestamp (milliseconds since Jan 1, 1970)
let timestamp = new Date(1609459200000); // January 1, 2021
console.log("Date from timestamp:", timestamp);

// More Math Operations
let logBase10 = Math.log10(1000); // Log base 10 of 1000
console.log("Log base 10 of 1000:", logBase10); // Output: 3

let eToPowerX = Math.exp(2); // Euler's number raised to the power of 2
console.log("e^2:", eToPowerX); // Output: 7.389

let sineOfPi = Math.sin(Math.PI / 2); // Sine of 90 degrees (PI/2 radians)
console.log("Sine of PI/2:", sineOfPi); // Output: 1

// Additional Date Methods
let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
console.log("Days in current month:", daysInMonth); // Output: 31 (if the current month has 31 days)
