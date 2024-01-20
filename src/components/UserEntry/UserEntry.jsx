import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserEntry.css';

const UserEntry = () => {
  const branches = ["CSE", "ECE", "MEC", "EEE", "CHE"];
  const Semesters = ["I", "II", "III", "IV", "V", "VI"];

  const [pin, setPin] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { pin, semester, branch });

    // Navigate to another component or route
    navigate('/result'); // Replace '/result' with the path to your result component
  };

  return (
    <div className='for-userEntry'>
      <form className='for-user-form' onSubmit={handleSubmit}>
        <div className='for-everyline'>
          <label>Pin:</label>
          <input type='text' value={pin} onChange={(e) => setPin(e.target.value)} />
        </div>

        <div className='for-everyline'>
          <label>Semester:</label>
          <select value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">Select Semester</option>
            {Semesters.map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        <div className='for-everyline'>
          <label>Branch:</label>
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserEntry;
