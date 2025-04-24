import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';  // Temporary HomePage
import EventDetail from '../EventDetailPage';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
