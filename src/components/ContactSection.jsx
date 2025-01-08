import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactSection = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <p>
      <FaEnvelope className="contact-icon" /> 
      Email: <a href="mailto:mosh9098@gmail.com" className="contact-link">mosh9098@gmail.com</a>
    </p>
    <p>
      <FaPhone className="contact-icon" /> 
      Phone: <a href="tel:+254799575176" className="contact-link">+254 799 575 176</a>
    </p>
    <div className="social-links">
      <a href="https://github.com/Mosh9098" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
      <a href="https://linkedin.com/in/david-maina-829117240" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
    </div>
    <p>&copy; 2024 David Maina. All Rights Reserved.</p>
  </section>
);
