// Array Destructuring
let number = [1, 2, 3];
let [a, b, c] = number;

console.log(a, b, c);

// Object Destructuring
let person = { name: "John", age: 20 };
let { name, age } = person;

console.log(name, age);

// Function Parameters Destructuring
function printPersonData({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonData(person);