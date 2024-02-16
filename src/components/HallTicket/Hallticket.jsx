import './Hallticket.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';

const Hallticket = () => {

  const location = useLocation();
  const { state } = location;

  const pin = state ? state.pin : '';
  const semester = state ? state.semester : '';
  const branch = state ? state.branch : '';
  
    const [loader, setLoader] = useState(false);
    const year = 2;
    const examtype = "Regular";
    const acadamic_year = "2023-2024";
    const type_edu ="Whole Examination";
    const name = "Hi";
    const type_of_exam = "Hi";
    const subjects = ["hi","hi"];   

    const downloadPDF = () =>{
    const capture = document.querySelector('.hallticket');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('hallticket.pdf');
    })
  }

     

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
                            
                        {subjects && (subjects.length > 0)} &&({subjects.map((subject, index) => (
                                <li>
                                    {subject}
                                </li>
                                ))})
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
                </div>{/* receipt action */}
          <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
            </div>
          </div>
            </div>
        </div>
  )
}

export default Hallticket 