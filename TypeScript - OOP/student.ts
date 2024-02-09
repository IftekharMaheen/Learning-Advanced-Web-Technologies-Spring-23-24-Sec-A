export class student{
    private studentId: String;
    private studentName: String;

    constructor(studentId:String, studentName:String){
        this.studentId = studentId;
        this.studentName = studentName;
    }

    showStudentDetails() : void {
        console.log("Student ID: ", this.studentId);
        console.log("Student Name: ", this.studentName);
    }
}