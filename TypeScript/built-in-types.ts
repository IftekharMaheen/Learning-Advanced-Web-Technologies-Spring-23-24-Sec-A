// any type

let data: any;
data = 'Something';
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);

// enum Type

enum Color { Red, Green, Blue };
let color: Color = Color.Red;
console.log(color); // This will return
                    // the index of the
                    // color from the Color
                    // Index

// Tuple Type
let employee: [number, string];
employee = [1, "Steve"];
console.log(employee);
