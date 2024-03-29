// components/About/About.js

import React,{ useEffect } from 'react';
import './about.css';
import myImg from '../../assets/illustration.png'
import CVFile from '../../assets/Mark CV.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'flowbite-react';


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      <div className="about-image" data-aos="fade-in">
        {/* Your image goes here */}
        <img src={myImg} alt="My Profile" />
      </div>
      <div className="about-description" data-aos="fade-up">
        <h2 className='font-bold' data-aos="fade-up">About Me</h2>
        <p>
          My name is Mark Mwangi. I am from Nairobi, Kenya.

          As a Full Stack Developer, I specialize in crafting seamless web solutions that blend innovation with functionality. With a knack for front-end aesthetics and robust back-end architecture, I bring ideas to life by harnessing the power of various technologies. Simultaneously, as a Business Development Consultant, I leverage my technical expertise to drive strategic growth initiatives, identifying opportunities, and fostering lasting partnerships. My passion lies in bridging the gap between technology and business, delivering solutions that not only meet but exceed expectations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up">
          <a href={CVFile} download="Mark CV.pdf">
              <Button color="purple" pill>
                Download CV
              </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
