import { useState } from "react";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";

function Portfolio(){
    const schoolList = [
        {
            schoolName: 'Dhaka Residential Model College', 
            schoolDegree: 'HSC', 
            schoolGraduationYear: '2020', 
            schoolGPA: '5.00'
        }, 
        {
            schoolName: 'American International University-Bangladesh', 
            schoolDegree: 'BSc CSE', 
            schoolGraduationYear: '2024', 
            schoolGPA: '3.75'
        }
    ];

    const [stars, setCount] = useState(0);
    function addStars(){
        setCount(stars+1);
    }

    return (
        <>
            <div className="personalInfo">
            <h1>Personal Info</h1>
            <PersonalInfo portfolioName="Iftekhar Uddin Mullick" portfolioDOB="06-Aug-2002" portfolioAddress="187, Paikpara, Mirpur 1, Dhaka" portfolioPhone="01711324809" portfolioEmail="21-44649-1@student.aiub.edu">    
            </PersonalInfo>
            </div>
            <hr></hr>
            <div className="educationInfo">
            <h1>Education Info</h1>
            {
                schoolList.map((item) => (
                    <EducationInfo 
                        schoolName={item.schoolName} 
                        schoolDegree={item.schoolDegree} 
                        schoolGraduationYear={item.schoolGraduationYear} 
                        schoolGPA={item.schoolGPA}>
                    </EducationInfo>
                ))
            }
            </div>
            <hr></hr>
            <div className="ratePortfolio">
                <h4>Encourage by Giving Stars to the Profile: </h4><h4>{stars}</h4><button onClick={addStars}> Give ⭐ </button>   
            </div>
        </>
    )
}

export default Portfolio;