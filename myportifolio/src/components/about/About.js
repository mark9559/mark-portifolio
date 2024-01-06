// components/About/About.js

import React from 'react';
import './about.css';
import myImg from '../../assets/mark.jpg'
const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        {/* Your image goes here */}
        <img src={myImg} alt="My Image" />
      </div>
      <div className="about-description">
        <h2>About Me</h2>
        <p>
          My name is Mark Mwangi. I am from Nairobi, Kenya.

          As a Full Stack Developer, I specialize in crafting seamless web solutions that blend innovation with functionality. With a knack for front-end aesthetics and robust back-end architecture, I bring ideas to life by harnessing the power of various technologies. Simultaneously, as a Business Development Consultant, I leverage my technical expertise to drive strategic growth initiatives, identifying opportunities, and fostering lasting partnerships. My passion lies in bridging the gap between technology and business, delivering solutions that not only meet but exceed expectations.
        </p>
        <button className="cv-button">Download CV</button>
      </div>
    </div>
  );
};

export default About;
