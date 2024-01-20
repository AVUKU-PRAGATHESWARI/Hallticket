import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserEntry from './EntryContainer';
import Hallticket from '../HallTicket/Hallticket';

const EntryContainer = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  const handleUserEntrySubmit = (data) => {
    console.log('Form submitted:', data);
    setFormData(data);
    navigate('/hallticket');
  };

  return (
    <div>
      <UserEntry onSubmit={handleUserEntrySubmit} />
      {formData && (
        <Hallticket
          year="II"
          semester="III"
          examtype="Regular"
          acadamic_year="2012 - 2013"
          branch={formData.branch}
          type_edu="B.Tech"
          name="Avuku Pragatheswari"
          type_of_exam="Whole Examination"
          subjects={["MATHS", "SCIENCE", "CHEMISTRY", "MATHS", "SCIENCE", "CHEMISTRY", "MATHSSCIENCECHEMISTRY"]}
          photourl=""
          pin={formData.pin}
        />
      )}
    </div>
  );
};

export default EntryContainer;
