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
      image: '/src/images/ltcthumbnail.jpg', 
      images: [
        '/src/images/ltcthumbnail.jpg',
        '/src/images/ltc1.jpg',
        '/src/images/ltc2.jpg',
        '/src/images/ltc3.jpg',
        '/src/images/ltc4.jpg',
      ],
      github: 'https://github.com/Mosh9098/contruction-company-website',
    },
    {
      title: 'Hotel Menu Web App',
      description: 'A hotel management application for staff to handle menu items and orders.The admin can also add,delete items from the menu and see orders placed.',
      image: '/src/images/hmathumbnail.jpg', 
      images: [
        '/src/images/hmathumbnail.jpg', 
        '/src/images/hma1.jpg',
        '/src/images/hma2.jpg',
        '/src/images/hma3.jpg',
        '/src/images/hma4.jpg',
        '/src/images/hma5.jpg',
      ],
      github: 'https://github.com/Mosh9098/Hotel-Menu-App',
    },
    {
      title: 'Car Rental Website',
      description: 'A car rental platform allowing users to browse available cars, make reservations, and manage bookings.',
      image: '/src/images/carthumbnail.jpg', 
      images: [
        '/src/images/carthumbnail.jpg', 
        '/src/images/car1.jpg',
        '/src/images/car2.jpg',
        '/src/images/car3.jpg',
        '/src/images/car4.jpg',
      ],
      github: 'https://github.com/Mosh9098/car-rental-app',
    },
    {
      title: 'Real Estate Website',
      description: 'Built a real estate website using PHP where users can browse properties, filter by location and price, and contact agents.',
      image: '/src/images/rewthumbnail.jpg', 
      images: [
        '/src/images/rewthumbnail.jpg', 
        '/src/images/rew1.jpg',
        '/src/images/rew2.jpg',
        '/src/images/rew3.jpg',
        '/src/images/rew5.jpg',
        '/src/images/rew6.jpg',
        '/src/images/rew7.jpg',
        '/src/images/rew8.jpg',
      ],
      github: 'https://github.com/Mosh9098/real-estate-website',
    },
    {
      title: 'Pokémon Card Generator',
      description: 'A web application that generates Pokémon cards using data from an external API.',
      image: '/src/images/pcgthumbnail.jpg', 
      images: [
        '/src/images/pcgthumbnail.jpg', 
        '/src/images/pcg1.jpg',
        '/src/images/pcg2.jpg',
        '/src/images/pcg3.jpg',
      ],
      github: 'https://github.com/Mosh9098/Pokemon-Card-Generator',
    },
    {
      title: 'School Management System',
      description: 'Developed a comprehensive system for managing students, teachers, courses, and school operations.',
      image: '/src/images/smsthumbnail.jpg', 
      images: [
        '/src/images/smsthumbnail.jpg', 
        '/src/images/sms1.jpg',
        '/src/images/sms2.jpg',
        '/src/images/sms.jpg',
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
