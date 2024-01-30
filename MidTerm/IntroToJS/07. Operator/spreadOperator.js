// Copy an array to another array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);

// Concatenating arrays
let arr3 = [4, 5, 6];
let combinedArray = [...arr1, ...arr3];

console.log(combinedArray);

//Adding elements to an array
let newArr = [0, ...arr1, 4];

console.log(newArr);

// Spreading function elements as function arguments
function sum(a, b, c){
    return a + b + c;
}

let number = [1, 2, 3];
let result = sum(...number);

console.log(result);

// Copying an object
let obj1 = { name: 'John', age: 25};
let obj2 = { ...obj1 };

console.log(obj2);

// Merging objects
let obj3 = { ...obj1, city: 'New York'};
console.log(obj3);