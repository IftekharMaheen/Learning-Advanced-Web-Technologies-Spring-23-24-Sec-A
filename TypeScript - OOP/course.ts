export class course {
    private courseId: String;
    private courseName: String;
    private facultyName: String;

    constructor(courseId: String, courseName: String, facultyName: String) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.facultyName = facultyName;
    }

    showCourseDetails() : void {
        console.log("Course ID: ", this.courseId);
        console.log("Course Name: ", this.courseName);
        console.log("Faculty Name: ", this.facultyName);
    }
}