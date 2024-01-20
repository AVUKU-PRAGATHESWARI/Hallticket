// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEntry from '../src/components/UserEntry/UserEntry';
import Hallticket from '../src/components/HallTicket/Hallticket';
import EntryContainer from './container/EntryContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserEntry />} />
        <Route path="/hallticket" element={<EntryContainer/>} />
      </Routes>
    </Router>
  );
}

export default App;
