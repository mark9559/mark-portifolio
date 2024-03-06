// App.js

import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Services from './components/services/Services.js';
import Layout from './layout/Layout.js';
// import WelcomePage from './components/welcomepage/WelcomePage.js';



function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/welcome" element={<WelcomePage />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route> 

        </Routes>


      </div>
    </BrowserRouter>
  );
};

export default App;
