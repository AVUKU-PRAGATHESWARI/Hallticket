import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserEntry from '../components/UserEntry/UserEntry';
import Hallticket from '../components/HallTicket/Hallticket';

const EntryContainer = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleUserEntrySubmit = async (e) => {
    e.preventDefault();

    if (!pin || !semester || !branch) {
      console.error('Please fill out all fields.');
      return;
    }

    console.log('Form submitted:', { pin, semester, branch });

    // Perform asynchronous operations if needed

    // Update the state to indicate that the form has been submitted
    setFormSubmitted(true);

    navigate('/hallticket');
  };

  return (
    <div>
      <UserEntry
        onSubmit={handleUserEntrySubmit}
        pin={pin}
        semester={semester}
        branch={branch}
        onBranchChange={handleBranchChange}
        onPinChange={handlePinChange}
        onSemesterChange={handleSemesterChange}
      />

      {formSubmitted && (
        <Hallticket
          year="II"
          semester={semester}
          examtype="Regular"
          acadamic_year="2012 - 2013"
          branch={branch}
          type_edu="B.Tech"
          name="Avuku Pragatheswari"
          type_of_exam="Whole Examination"
          photourl=""
          pin={pin}
        />)}      
    </div>
  );
};

export default EntryContainer;
