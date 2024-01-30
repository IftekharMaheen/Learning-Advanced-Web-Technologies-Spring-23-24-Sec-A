// Global Scope
const globalVariable = "I am global";

function exampleFunction() {
    console.log(globalVariable);
}

exampleFunction();

// Local Scope
function exampleFunction2() {
    const localVariable = "I am local";
    console.log(localVariable);
}

exampleFunction2();

// Closure
function createCounter() {  // Outer function
    let count = 0;  // Local variable

    return function() {  // Inner function
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();