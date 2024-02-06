// Functions
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20));
// Arrow Functions
var addNumbersThroughArrowFunc = function (a, b) { return a + b; };
console.log(addNumbersThroughArrowFunc(50, 40));
// Optional Parameters
function addThreeNum(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(addThreeNum(20, 40));
// Default Params
function addThreeNumDef(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(addThreeNumDef(30, 40));
// Rest Params
function addNumbersRestParams() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    console.log(sum);
    return sum;
}
