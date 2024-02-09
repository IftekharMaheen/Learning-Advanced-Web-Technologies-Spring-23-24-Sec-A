"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
var course = /** @class */ (function () {
    function course(courseId, courseName, facultyName) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.facultyName = facultyName;
    }
    course.prototype.showCourseDetails = function () {
        console.log("Course ID: ", this.courseId);
        console.log("Course Name: ", this.courseName);
        console.log("Faculty Name: ", this.facultyName);
    };
    return course;
}());
exports.course = course;
