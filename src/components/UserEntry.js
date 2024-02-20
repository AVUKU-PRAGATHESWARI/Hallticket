import React from "react";
import "./UserEntry.css";

const branches = ["CSE","ECE","EEE","MEC","CHE","CIV"];
const semesters = ["semester1", "semester2", "semester3","semester4", "semester5", "semester6","semester7"];

const UserEntry = ({
  onSubmit,
  pin,
  semester,
  branch,
  onBranchChange,
  onPinChange,
  onSemesterChange,
}) => {
  return (

    <div className="user-entry-container">
      <form className="user-form" onSubmit={onSubmit}>
        <div className="form-line">
          <label htmlFor="pin">Pin:</label>
          <input type="text" id="pin" value={pin} onChange={onPinChange} />
        </div>

        <div className="form-line">
          <label htmlFor="semester">Semester:</label>
          <select id="semester" value={semester} onChange={onSemesterChange}>
            <option value="">Select Semester</option>
            {semesters.map((semester, index) => (
              <option key={index} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-line">
          <label htmlFor="branch">Branch:</label>
          <select id="branch" value={branch} onChange={onBranchChange}>
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default UserEntry;
