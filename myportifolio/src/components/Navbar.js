// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    <h4>MARK T</h4>
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Add other links for additional routes */}
      </ul>
    </nav>
  );
};

export default Navbar;
