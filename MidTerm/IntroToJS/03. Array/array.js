// Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'two', { name : 'Alice' }, [7, 8, 9]];

// Accessing array elements
let firstNumber = numbers[0];
let secondFruit = fruits[1];
let thirdElement = mixedArray[2];

console.log(firstNumber);
console.log(secondFruit);
console.log(thirdElement);

// Array Methods
numbers.push(6);
console.log(numbers);

fruits.pop();
console.log(fruits);

fruits.unshift('pear');
console.log(fruits);

numbers.shift();
console.log(numbers);