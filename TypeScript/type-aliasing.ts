//Type Alias

type Person = { id: number, name: string};
let p: Person = { id: 1, name: "John"};

console.log(p);

// Type Union
 let y: number | string;
 y = 10;
 console.log(y);
 y = "Test";
 console.log(y);

 // Literal Types
 let z: "Red" | "Green" | "Blue";
 z = "Red";
 console.log(z);