interface Props{
    schoolName: string;
    schoolDegree: string;
    schoolGraduationYear: string;
    schoolGPA: string;
}

function EducationInfo ({schoolName, schoolDegree, schoolGraduationYear, schoolGPA}: Props){
    return(
        <div>
            <h3>Institute: {schoolName}</h3>
            <h4>Degree: {schoolDegree}</h4>
            <p>Graduation Year: {schoolGraduationYear}</p>
            <p>GPA: {schoolGPA}</p>
        </div>
    )
}

export default EducationInfo;