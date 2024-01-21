// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEntry from './components/UserEntry/UserEntry';
import EntryContainer from './container/EntryContainer';
import Hallticket from './components/HallTicket/Hallticket'; // Make sure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryContainer />} />
        <Route
          path="/hallticket"
          element={
            <Hallticket
              year="II"
              semester=""
              examtype="Regular"
              academic_year="2012 - 2013"
              branch=""
              type_edu="B.Tech"
              name="Avuku Pragatheswari"
              type_of_exam="Whole Examination"
              photourl=""
              pin=""
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
