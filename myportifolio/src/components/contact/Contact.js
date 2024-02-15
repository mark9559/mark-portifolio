import React, { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import {
  Button,
  TextInput,
  Textarea,
} from 'flowbite-react'; // Import Flowbite components
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
      <h1 className="contact-get-in-touch text-purple-600 ">Get In Touch</h1>
      <p className="contact-description">
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
            <FaTwitter />
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <p className="contact-get-in-touch text-purple-600">Let's Connect!</p>
      <h2 className="contact-message">Send Me a Message</h2>

      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <div className="form-group">
          <label htmlFor="name"></label>
          <TextInput
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
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
            placeholder="Your Email"
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
            placeholder="Your Message"
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
