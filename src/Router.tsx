import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';

const AppRouter: React.FC = () => ( 
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/" element={<Homepage/>} />

    </Routes>
  </Router>
);

export default AppRouter;