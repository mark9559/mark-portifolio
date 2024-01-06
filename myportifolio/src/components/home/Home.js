import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import Typed from 'react-typed';
import myImage from '../../assets/markk.jpg'; // Import your image

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only run once on scroll
    });  
  }, []);

  return (
    <div className="home-container">
      <div className="content">
      <div className="image-content" data-aos="fade-in" >
        <img src={myImage} alt="My Image" className='my-image' />
      </div>
        <div className="text-content" data-aos="fade-up" data-aos-duration="1000">
          <h1>Mark Mwangi</h1>
          <h2>I am a:
          <Typed
            strings={["Full-Stack Software Developer", "Business Development Consultant"]}
            typeSpeed={200}
            backSpeed={150}
            loop
          />
          </h2>
          <p>
            Welcome to my portfolio! I am a passionate and dedicated individual in the field of technology and business development.
          </p>
          <div className="buttons">
            <button className="cv-button">Download CV</button>
            <button className="contact-button">Get in Touch</button>
          </div>
        </div>
        {/* Add more content as needed */}
      </div>
      
    </div>
  );
};

export default Home;
