import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const FlowbiteNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="bg-gray-800 p-3  fixed top-0 w-full z-50 mt-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-indigo-500 text-xl lg:text-2xl font-bold">
          MARK
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button className="text-white focus:outline-none" onClick={toggleSidebar}>
            <FaBars className="theme-btn" />
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden lg:flex space-x-10">
          <Link
            to="/"
            className="text-indigo-500 font-bold hover:text-indigo-600 transform transition-transform duration-300 hover:translate-y-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-indigo-500 font-bold hover:text-indigo-600 transform transition-transform duration-300 hover:translate-y-1"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-indigo-500 font-bold hover:text-indigo-600 transform transition-transform duration-300 hover:translate-y-1"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-indigo-500 font-bold hover:text-indigo-600 transform transition-transform duration-300 hover:translate-y-1"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-indigo-500 font-bold hover:text-indigo-600 transform transition-transform duration-300 hover:translate-y-1"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {showSidebar && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col items-center">
          <button
            className="absolute bottom-4 left-4 text-white text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <div className="text-white text-2xl font-bold mt-12 space-y-2">
            <Link
              to="/"
              className="block py-2 hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 hover:text-gray-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block py-2 hover:text-gray-300 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FlowbiteNavbar;