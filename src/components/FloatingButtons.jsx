import React from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';

export const FloatingButtons = () => (
  <div className="floating-buttons">
    <a href="#hero" className="scroll-top"><FaArrowUp /></a>
    <a href="https://wa.me/254799575176" className="whatsapp-button" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
  </div>
);
