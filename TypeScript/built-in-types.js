// any type
var data;
data = 'Something';
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);
// enum Type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Red;
console.log(color); // This will return
// the index of the
// color from the Color
// Index
// Tuple Type
var employee;
employee = [1, "Steve"];
console.log(employee);
