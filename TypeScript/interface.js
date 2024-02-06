var EmployeeImp = /** @class */ (function () {
    function EmployeeImp(id, name) {
        this.id = id;
        this.name = name;
    }
    EmployeeImp.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name));
    };
    return EmployeeImp;
}());
var empImp = new EmployeeImp(1, "Stan");
empImp.display();
