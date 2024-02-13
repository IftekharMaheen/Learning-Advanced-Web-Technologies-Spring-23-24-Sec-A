import { course } from "./course";

export class student{
    private studentId: String;
    private studentName: String;
    private registeredCourses: course[];

    constructor(studentId:String, studentName:String, ...registeredCourses:course[]){
        this.studentId = studentId;
        this.studentName = studentName;
        this.registeredCourses = [];
    }

    showStudentDetails() : void {
        console.log("Student ID: ", this.studentId);
        console.log("Student Name: ", this.studentName);
        console.log("Registered Courses: ");
        for (let course of this.registeredCourses){
            
        }
    }


}