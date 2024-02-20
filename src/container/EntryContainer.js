import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserEntry from "../components/UserEntry";
import { subjects } from "../Constants/Global";
import Hallticket from "../components/Hallticket";

const EntryContainer = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
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
      console.error("Please fill out all fields.");
      return;
    }

    const selectedSemester = semester;
    const selectedBranch = branch;

    if (
      subjects[selectedSemester] &&
      subjects[selectedSemester][selectedBranch]
    ) {
      const selectedSubjects = subjects[selectedSemester][selectedBranch];
      console.log(
        `Subjects for ${selectedSemester} - ${selectedBranch}:`,
        selectedSubjects
      );
    } else {
      console.log("Invalid semester or branch");
    }

    console.log("Form submitted:", { pin, semester, branch });
    setFormSubmitted(true);

    navigate("/hallticket", { state: { pin, semester, branch } });
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
        <Hallticket pin={pin} semester={semester} branch={branch} />
      )}
    </div>
  );
};

export default EntryContainer;
