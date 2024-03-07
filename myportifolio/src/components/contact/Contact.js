import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import {
  Button,
  TextInput,
  Textarea,
} from 'flowbite-react'; // Import Flowbite components
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const MySwal = withReactContent(Swal);

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        MySwal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: 'Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send email. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <div className="contact-container" data-aos="fade-up">
      <h1 className="contact-get-in-touch text-purple-600 ">Get In Touch</h1>
      <p className="contact-description ">
        Thank you for visiting! Please feel free to get in touch via email or social media.
      </p>
      <h2 className="contact-socials text-purple-600">Socials</h2>

      <div className="contact-icons" data-aos="fade-up">
        <div className="social-icon">
          <a href="mailto:mwangimark57@gmail.com">
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/mark-mwangi-188b70249/">
            <FaLinkedin />
            <span>Linkedin</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/mark9559">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://twitter.com/mwangimarkt">
            <FontAwesomeIcon icon={faXTwitter} />
            <span>X(Twitter)</span>
          </a>
        </div>

      </div>
      <p className="contact-get-in-touch ">Let's Connect!</p>
      <h2 className="contact-message">Send Me a Message</h2>

      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <div className="form-group">
          <label htmlFor="name"></label>
          <TextInput
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <TextInput
            type="email"
            id="email"
            name="email"
            placeholder="Subject"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button  gradientMonochrome="purple" type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;
