// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEntry from '../src/components/UserEntry/UserEntry';
import Result from '../src/components/HallTicket/Hallticket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserEntry />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
