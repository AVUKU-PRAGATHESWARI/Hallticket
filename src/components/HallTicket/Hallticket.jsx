import React, { useRef } from 'react';
import './Hallticket.css';
import axios from 'axios';


const Hallticket = () => {
    const hallticketRef = useRef(null);

    const downloadDocx = async () => {
        try {
          const htmlContent = hallticketRef.current.innerHTML;
          const response = await axios.post('http://localhost:5000/convertToDocx', { htmlContent }, { responseType: 'arraybuffer' });
    
          const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'Hallticket.docx';
          link.click();
        } catch (error) {
          console.error('Error downloading DOCX:', error);
        }
      };

      
    const year = "II";
    const semester = "III";
    const examtype = "Regular";
    const acadamic_year = "2012 - 2013";
    const branch = "Computer Science and engineering";
    const type_edu = "B.Tech";
    const name = "Avuku Pragatheswari";
    const type_of_exam = "Whole Examination";
    const subjects = ["MATHS","SCIENCE","CHEMISTRY","MATHS","SCIENCE","CHEMISTRY","MATHSSCIENCECHEMISTRY"];
    const photourl = "";
    const pin = 12106068;

    return (
        <div className='for-hallticket-main'>
            <div className='hallticket' ref={hallticketRef}>
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
                        <span className='for-left-heading'>PIN</span>
                        <span className='for-center-colon'>:</span>
                        <span className='for-right-side-answer'>{pin}</span>
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

                <div className='for-sign-head'>
                    <p>Signature of Candidate</p>
                    <p>Signature of Principal</p>
                </div>

                <hr className='for-border'/>
                
                <div className='for-bottom'>
                    <p>Note:  </p>
                    <p>Candidate must obtain this hall ticket from the Chief Superintend of the center three days before the Examination.  In no case the Hall- Ticket will be direct to the Candidates .The Candidate should bring his/her college identity card along with Hall-Ticket</p>
                </div>
                <div>
                    <button onClick={downloadDocx}>Download</button>
                </div>
            </div>
        </div>
  )
}

export default Hallticket