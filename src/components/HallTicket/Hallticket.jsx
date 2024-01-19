import React from 'react'
import './Hallticket.css'

const Hallticket = () => {

    const year = "II";
    const semester = "III";
    const examtype = "Regular";
    const acadamic_year = "2012 - 2013";
    const branch = "Computer Science and engineering";
    const type_edu = "B.Tech";
    const name = "Avuku Pragatheswari";
    const type_of_exam = "Whole Examination";
    const subjects = ["MATHS","SCIENCE","CHEMISTRY"];
    const photourl = "";

    return (
        <div className='for-hallticket-main'>
            <div className='hallticket'>
                <h2>SRI VENKATESWARA UNIVERSITY, TIRUPATHI</h2>
                <h2>HALL - TICKET</h2>
                <h3>Center: S V U COLLEGE OF ENGINEERING, TIRUPATI.</h3>
                <hr className='for-border'/>
                <h4>
                    <span className='for-underline'>{year}</span> {type_edu} (CBCS) {semester} Semester <br/>
                    ({examtype}) 
                    Examination of <span className='for-underline'>{examtype} </span> in the acadamic year {acadamic_year} 
                    <br/>Branch <span className='for-underline'>{branch} </span> 
                </h4>
                <div className='for-form'>
                    <div className='for-everyline'>
                        <span className='for-left-heading'>Name of the Candidate</span>
                        <span className='for-center-colon'>:</span>
                        <span className='for-right-side-answer'>{name}</span>
                    </div>
                    <div className='for-everyline'>
                        <span className='for-left-heading'>Whether appearing for whole Examination or for Subjects</span>
                        <span className='for-center-colon'>:</span>
                        <span className='for-right-side-answer'>{type_of_exam}</span>
                    </div>
                    <div className='for-everyline'>
                        <span className='for-left-heading'>Mention  all subjects now appearing including labs</span>
                        <span className='for-center-colon'>:</span>
                        <span className='for-right-side-answer'>
                            
                            {subjects.map((subject, index) => (
                                <li>
                                    {subject}
                                </li>
                                ))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hallticket