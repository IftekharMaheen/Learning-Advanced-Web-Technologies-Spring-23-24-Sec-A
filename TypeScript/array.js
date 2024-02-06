var numbers = [1, 2, 3, 4, 5];
var firstElement = numbers[0];
console.log(firstElement);
// Array Length
var arrayLength = numbers.length;
console.log(arrayLength);
// Adding Elements
numbers.push(6);
console.log(numbers);
// Iterating through elements
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
// Array Methods
var doubledArray = numbers.map(function (num) { return num * 2; });
console.log(doubledArray);
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evenNumbers);
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(sum);
