// 1. Creating Arrays
let fruits = ['apple', 'banana', 'cherry']; // Using array literal
let numbers = new Array(1, 2, 3, 4);         // Using Array constructor

console.log(fruits);  // ['apple', 'banana', 'cherry']
console.log(numbers); // [1, 2, 3, 4]

// 2. Accessing Array Elements
console.log(fruits[0]);  // 'apple'
console.log(fruits[1]);  // 'banana'
console.log(fruits[2]);  // 'cherry'

// 3. Array Methods
// push()
fruits.push('date');
console.log(fruits);  // ['apple', 'banana', 'cherry', 'date']

// pop()
fruits.pop();
console.log(fruits);  // ['apple', 'banana', 'cherry']

// shift()
fruits.shift();
console.log(fruits);  // ['banana', 'cherry']

// unshift()
fruits.unshift('apricot');
console.log(fruits);  // ['apricot', 'banana', 'cherry']

// splice()
fruits.splice(1, 1, 'blackberry');
console.log(fruits);  // ['apricot', 'blackberry', 'cherry']

// slice()
let sliced = fruits.slice(1, 3);
console.log(sliced);  // ['blackberry', 'cherry']

// forEach()
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// apricot
// blackberry
// cherry

// map()
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);  // ['APRICOT', 'BLACKBERRY', 'CHERRY']

// filter()
let longFruits = fruits.filter(fruit => fruit.length > 6);
console.log(longFruits);  // ['blackberry']

// 4. Array Length
console.log(fruits.length);  // 3

// 5. Iterating Over Arrays
// Using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// 6. Multidimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]);  // 6 (second row, third column)

// 7. Array Destructuring
let [first, second, third] = fruits;
console.log(first);  // 'apricot'
console.log(second); // 'blackberry'

// 8. Array Iteration with reduce()
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // 10

// 9. Joining Arrays
let fruitsString = fruits.join(', ');
console.log(fruitsString);  // 'apricot, blackberry, cherry'


// 1. Using concat() Method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedConcat = array1.concat(array2);
console.log('concat() result:', combinedConcat);

// 2. Using Spread Operator (...)
let combinedSpread = [...array1, ...array2];
console.log('Spread Operator result:', combinedSpread);

// 3. Using push() with Spread Operator
array1.push(...array2);
console.log('push() with Spread result (modified array1):', array1);

// Reset array1 for next demonstration
array1 = [1, 2, 3];

// 4. Using Array.prototype.push.apply()
Array.prototype.push.apply(array1, array2);
console.log('push.apply() result (modified array1):', array1);

// Reset array1 for next demonstration
array1 = [1, 2, 3];

// 5. Using for Loop
let combinedForLoop = [];
for (let item of array1) {
  combinedForLoop.push(item);
}
for (let item of array2) {
  combinedForLoop.push(item);
}
console.log('for loop result:', combinedForLoop);

// 6. Using reduce() Method
let combinedReduce = [array1, array2].reduce((acc, curr) => acc.concat(curr), []);
console.log('reduce() result:', combinedReduce);

// 7. Using Array.of()
let combinedArrayOf = Array.of(...array1, ...array2);
console.log('Array.of() result:', combinedArrayOf);

// 8. Using Object.assign()
let combinedObjectAssign = Object.assign([], array1, array2);
console.log('Object.assign() result:', combinedObjectAssign);

// Summary of All Results
console.log('Original Array1:', [1, 2, 3]);
console.log('Original Array2:', [4, 5, 6]);
