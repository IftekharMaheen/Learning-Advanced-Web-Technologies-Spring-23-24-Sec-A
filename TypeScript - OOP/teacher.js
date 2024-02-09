"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
var teacher = /** @class */ (function () {
    function teacher(teacherId, teacherName) {
        this.teacherId = teacherId;
        this.teacherName = teacherName;
    }
    teacher.prototype.showTeacherDetails = function () {
        console.log("Teacher ID: ", this.teacherId);
        console.log("Teacher Name: ", this.teacherName);
    };
    return teacher;
}());
exports.teacher = teacher;
