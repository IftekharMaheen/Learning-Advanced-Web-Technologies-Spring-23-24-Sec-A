import { course } from "./course";

export class teacher {
    private teacherId: String;
    private teacherName: String;

    constructor(teacherId: String, teacherName: String) {
        this.teacherId = teacherId;
        this.teacherName = teacherName;
    }

    showTeacherDetails() : void {
        console.log("Teacher ID: ", this.teacherId);
        console.log("Teacher Name: ", this.teacherName);
    }

    createCourse(courseId: String, courseName: String) : course {
        let newCourseObj = new course(courseId, courseName, this.teacherName);
        return newCourseObj;
    }
}