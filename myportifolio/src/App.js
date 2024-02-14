// App.js

import React from 'react';
import './App.css'; // Import the combined CSS file
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import ThemePicker from './components/themepicker/ThemePicker.js';
import Services from './components/services/Services.js';
// import './index.css'
import CustomFooter from './components/Footer.js';
import FlowbiteNavbar from './components/navbar/Navbar';
import FlowbiteFooter from './components/Footer.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FlowbiteNavbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


        <FlowbiteFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
