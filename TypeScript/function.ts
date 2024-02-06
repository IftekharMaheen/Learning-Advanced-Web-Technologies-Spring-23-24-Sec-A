// Functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(10, 20));

// Arrow Functions
let addNumbersThroughArrowFunc = (a: number, b: number): number => a + b;
console.log(addNumbersThroughArrowFunc(50, 40));

// Optional Parameters
function addThreeNum(a: number, b: number, c?:number): number {
    return a + b + (c ?? 0);
}
console.log(addThreeNum(20, 40));

// Default Params
function addThreeNumDef(a: number, b: number, c: number = 0): number {
    return a + b + c;
}
console.log(addThreeNumDef(30, 40));

// Rest Params
function addNumbersRestParams(...nums: number[]): number {
    let sum: number = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

// Function Overloading
function addNumbers4(a: number, b: number): number;
function addNumbers4(a: string, b: string): string;
function addNumbers4(a: any, b: any): any {
    return a + b;
}
console.log(addNumbers4(10, 20));