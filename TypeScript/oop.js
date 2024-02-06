var Employee = /** @class */ (function () {
    function Employee(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee.prototype.display = function () {
        console.log("ID = ".concat(this.id, ", Name = ").concat(this.name, ", Age = ").concat(this.age, ", IsOkay = ").concat(this.isOkay));
    };
    return Employee;
}());
var emp = new Employee(1, "Steve", 21, true);
emp.display();
