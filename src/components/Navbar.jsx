import React from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaBriefcase, FaImages, FaPhone, FaQuoteLeft } from 'react-icons/fa';

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a href="#">DAVID MAINA</a>
      <div className="dropdown">
        <a href="#hero"><FaHome /> Home</a>
        <a href="#about"><FaInfoCircle /> About Me</a>
        <a href="#skills"><FaCogs /> Skills</a>
        <a href="#services"><FaBriefcase /> Services</a>
        <a href="#portfolio"><FaImages /> Portfolio</a>
        <a href="#contact"><FaPhone /> Contact</a>
      </div>
    </div>
  </nav>
);
