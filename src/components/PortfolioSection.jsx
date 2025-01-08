import React, { useState } from 'react';
import { FaGithub, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

export const PortfolioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const openCarousel = (images) => {
    setCarouselImages(images);
    setShowCarousel(true);
  };

  const projects = [
    {
      title: 'Construction Company Website',
      description: 'Built a construction company website that advertises the company’s services.',
      image: '/public/ltcthumbnail.jpg', 
      images: [
        '/public/ltcthumbnail.jpg',
        '/public/ltc1.jpg',
        '/public/ltc2.jpg',
        '/public/ltc3.jpg',
        '/public/ltc4.jpg',
      ],
      github: 'https://github.com/Mosh9098/contruction-company-website',
    },
    {
      title: 'Hotel Menu Web App',
      description: 'A hotel management application for staff to handle menu items and orders.The admin can also add,delete items from the menu and see orders placed.',
      image: '/public/hmathumbnail.jpg', 
      images: [
        '/public/hmathumbnail.jpg', 
        '/public/hma1.jpg',
        '/public/hma2.jpg',
        '/public/hma3.jpg',
        '/public/hma4.jpg',
        '/public/hma5.jpg',
      ],
      github: 'https://github.com/Mosh9098/Hotel-Menu-App',
    },
    {
      title: 'Car Rental Website',
      description: 'A car rental platform allowing users to browse available cars, make reservations, and manage bookings.',
      image: '/public/carthumbnail.jpg', 
      images: [
        '/public/carthumbnail.jpg', 
        '/public/car1.jpg',
        '/public/car2.jpg',
        '/public/car3.jpg',
        '/public/car4.jpg',
      ],
      github: 'https://github.com/Mosh9098/car-rental-app',
    },
    {
      title: 'Real Estate Website',
      description: 'Built a real estate website using PHP where users can browse properties, filter by location and price, and contact agents.',
      image: '/public/rewthumbnail.jpg', 
      images: [
        '/public/rewthumbnail.jpg', 
        '/public/rew1.jpg',
        '/public/rew2.jpg',
        '/public/rew3.jpg',
        '/public/rew5.jpg',
        '/public/rew6.jpg',
        '/public/rew7.jpg',
        '/public/rew8.jpg',
      ],
      github: 'https://github.com/Mosh9098/real-estate-website',
    },
    {
      title: 'Pokémon Card Generator',
      description: 'A web application that generates Pokémon cards using data from an external API.',
      image: '/public/pcgthumbnail.jpg', 
      images: [
        '/public/pcgthumbnail.jpg', 
        '/public/pcg1.jpg',
        '/public/pcg2.jpg',
        '/public/pcg3.jpg',
      ],
      github: 'https://github.com/Mosh9098/Pokemon-Card-Generator',
    },
    {
      title: 'School Management System',
      description: 'Developed a comprehensive system for managing students, teachers, courses, and school operations.',
      image: '/public/smsthumbnail.jpg', 
      images: [
        '/public/smsthumbnail.jpg', 
        '/public/sms1.jpg',
        '/public/sms2.jpg',
        '/public/sms.jpg',
      ],
      github: 'https://github.com/Mosh9098/School-Management-System',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.github} className="button github-button" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
              <button onClick={() => openCarousel(project.images)} className="button demo-button">Live Demo</button>
            </div>
          </div>
        ))}
      </div>

      {showCarousel && (
        <div className="carousel">
          <button onClick={handlePrevImage} className="carousel-arrow prev-arrow"><FaArrowLeft /></button>
          <img src={carouselImages[currentImageIndex]} alt="Project" className="carousel-image" />
          <button onClick={handleNextImage} className="carousel-arrow next-arrow"><FaArrowRight /></button>
          <button onClick={() => setShowCarousel(false)} className="close-carousel"><FaTimes /> Close</button>
        </div>
      )}
    </section>
  );
};
