"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var teacher_1 = require("./teacher");
//import { course } from "./course"
var student1 = new student_1.student("21-12345-1", "ABCD");
student1.showStudentDetails();
// Attempt to use one object but keeping all of them in one list
var teacher1 = new teacher_1.teacher("1801-12345", "Danny Jone");
teacher1.showTeacherDetails();
// Attempt to use one object but keeping all of them in one list
var course1 = teacher1.createCourse("CSC101", "IP");
course1.showCourseDetails();
