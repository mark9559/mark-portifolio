// components/Contact/Contact.js

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email functionality (you'll need backend logic for this)
    console.log('Sending email...', formData);
    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" data-aos="fade-up">
      <h2>Get In Touch</h2>
      <p className="contact-description">
        Thank you for visiting! Please feel free to get in touch via email or social media.
      </p>
      <h2>Socials</h2>

      <div className="contact-icons" data-aos="fade-up">
        <a href="mailto:mwangimark57@gmail.com">
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/mark-mwangi-188b70249/">
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
        <a href="https://github.com/mark9559">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="https://twitter.com/mwangimarkt">
          <FaTwitter />
          <span>Twitter</span>
        </a>
      </div>
      <p className="contact-get-in-touch">Let's Connect!</p>
      <h2>Send Me a Message</h2>

      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
