"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
var course_1 = require("./course");
var teacher = /** @class */ (function () {
    function teacher(teacherId, teacherName) {
        this.teacherId = teacherId;
        this.teacherName = teacherName;
    }
    teacher.prototype.showTeacherDetails = function () {
        console.log("Teacher ID: ", this.teacherId);
        console.log("Teacher Name: ", this.teacherName);
    };
    teacher.prototype.createCourse = function (courseId, courseName) {
        var newCourseObj = new course_1.course(courseId, courseName, this.teacherName);
        return newCourseObj;
    };
    return teacher;
}());
exports.teacher = teacher;
