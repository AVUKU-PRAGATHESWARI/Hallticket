import React, { useState } from 'react';
import './UserEntry.css';

const branches = ["CSE", "ECE", "MEC", "EEE", "CHE"];
const Semesters = ["I", "II", "III", "IV", "V", "VI"];

const UserEntry = ({ onSubmit , pin,semester ,branch, onBranchChange,onPinChange ,onsemesterChange}) => {
  

  return (
    <div className='for-userEntry'>
      <form className='for-user-form' onSubmit={onSubmit}>
        <div className='for-everyline'>
          <label>Pin:</label>
          <input type='text' value={pin} onChange={onPinChange} />
        </div>

        <div className='for-everyline'>
          <label>Semester:</label>
          <select value={semester} onChange={onsemesterChange}>
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
          <select value={branch} onChange={onBranchChange}>
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
