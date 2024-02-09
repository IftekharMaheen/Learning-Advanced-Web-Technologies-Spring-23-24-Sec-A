import { student } from "./student"
import { teacher } from "./teacher"

let student1 = new student("21-12345-1", "ABCD");
student1.showStudentDetails();

// Attempt to use one object but keeping all of them in one list

let teacher1 = new teacher("1801-12345", "Danny Jone");
teacher1.showTeacherDetails();

// Attempt to use one object but keeping all of them in one list

let course1 = teacher1.createCourse("CSC101", "IP");
course1.showCourseDetails();