import React, { useEffect } from 'react';
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import myImage from '../../assets/markk.jpg';
import CVFile from '../../assets/Mark CV.pdf';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="home-container bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="content max-w-5xl mx-auto p-8 sm:p-12 flex flex-col items-center">
        <div className="image-content mb-8" data-aos="fade-in">
          <img
            src={myImage}
            alt="My Image"
            className="my-image rounded-full shadow-md w-64 h-64 object-cover"
          />
        </div>
        <div className="text-content text-center" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-4xl text-purple-600 sm:text-5xl font-bold mb-4">Mark Mwangi</h1>
          <h2 className="text-lg sm:text-xl font-bold mb-6">
            I am{' '}
            <Typed
              strings={['a Full-Stack Software Developer', 'a Business Development Consultant']}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h2>
          <p className="text-gray-300 mb-8">
            Welcome to my portfolio! I am a passionate and dedicated individual in the field of
            technology and business development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href={CVFile} download="Mark CV.pdf">
              <Button color="purple" pill>
                Download CV
              </Button>
            </a>
            <Link to="/contact">
              <Button color="purple" pill>
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
