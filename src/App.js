// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PoetryGenerator from './components/PoetryGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/generate" element={<PoetryGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
