let x = ['a', 'b', 'c', 'd', 'e'];

// For Loop
for (let i = 0; i < 3; i++){
    console.log(x[i]);
}

// While Loop
let i = 0;
while (i < 4){
    console.log(x[i]);
    i++;
}

// Do While Loop
let j = 0;
do {
    console.log(x[j]);
    j++
} while (j < 2);

// for...in Loop
for (let i in x){
    console.log(x[i]);
}

// for...of Loop
for (let i of x) {
    console.log(i);
}