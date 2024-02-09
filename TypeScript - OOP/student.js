"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
var student = /** @class */ (function () {
    function student(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }
    student.prototype.showStudentDetails = function () {
        console.log("Student ID: ", this.studentId);
        console.log("Student Name: ", this.studentName);
    };
    return student;
}());
exports.student = student;
