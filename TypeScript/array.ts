let numbers: number[] = [1, 2, 3, 4, 5];

let firstElement: number = numbers[0];

console.log(firstElement);

// Array Length
let arrayLength: number = numbers.length;
console.log(arrayLength);

// Adding Elements
numbers.push(6);
console.log(numbers);

// Iterating through elements
for (let num of numbers) {
    console.log(num);
}

// Array Methods
let doubledArray: number[] = numbers.map((num: number) => num * 2);
console.log(doubledArray);

let evenNumbers: number[] = numbers.filter((num: number) => num % 2 == 0);
console.log(evenNumbers);

let sum: number = numbers.reduce((prev: number, next: number) => prev + next);
console.log(sum);