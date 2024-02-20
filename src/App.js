import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EntryContainer from './container/EntryContainer';
import Hallticket from './components/Hallticket'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryContainer />} />
        <Route path="/hallticket" element={<Hallticket />} />
      </Routes>
    </Router>
  );
}

export default App;


