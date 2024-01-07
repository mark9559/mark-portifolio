// components/Contact/Contact.js

import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
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
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-description">
        Thank you for visiting! Please feel free to get in touch via email or social media.
      </p>
      <div className="contact-icons">
        <a href="mailto:your-email@example.com">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/your-profile">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-profile">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-profile">
          <FaTwitter />
        </a>
      </div>
      <p className="contact-get-in-touch">Let's Connect!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
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
