import { greetings } from "./module1.js";
import farewell from "./module1.js";

function greet(tuneOfDay){
    console.log(greetings[timeOfDay]);
}

console.log(farewell);

export function sayGoodbye() {
    console.log(farewell);
}