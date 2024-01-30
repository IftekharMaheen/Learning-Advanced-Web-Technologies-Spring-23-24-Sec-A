function sum(...numbers){
    let total = 0;
    for (let number of numbers){
        total += number;
    }
    return total;
}

let result = sum (1, 2, 3, 4, 5);
console.log(result);

result = sum (10, 20);
console.log(result);