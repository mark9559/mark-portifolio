import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemePicker from '../themepicker/ThemePicker';
import './navbar.css'
import { BsFillPaletteFill } from 'react-icons/bs'; // Import an icon from React Icons


const Navbar = () => {
  const [showThemePicker, setShowThemePicker] = useState(false);

  const toggleThemePicker = () => {
    setShowThemePicker(!showThemePicker);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">MARK T</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className='theme-btn' onClick={toggleThemePicker}><BsFillPaletteFill /></button>
        </li>
      </ul>
      {showThemePicker && <ThemePicker />}
    </nav>
  );
};

export default Navbar;
