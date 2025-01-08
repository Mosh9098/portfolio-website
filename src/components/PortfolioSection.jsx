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
      image: '/public/images/ltcthumbnail.jpg', 
      images: [
        '/public/images/ltcthumbnail.jpg',
        '/public/images/ltc1.jpg',
        '/public/images/ltc2.jpg',
        '/public/images/ltc3.jpg',
        '/public/images/ltc4.jpg',
      ],
      github: 'https://github.com/Mosh9098/contruction-company-website',
    },
    {
      title: 'Hotel Menu Web App',
      description: 'A hotel management application for staff to handle menu items and orders.The admin can also add,delete items from the menu and see orders placed.',
      image: '/public/images/hmathumbnail.jpg', 
      images: [
        '/public/images/hmathumbnail.jpg', 
        '/public/images/hma1.jpg',
        '/public/images/hma2.jpg',
        '/public/images/hma3.jpg',
        '/public/images/hma4.jpg',
        '/public/images/hma5.jpg',
      ],
      github: 'https://github.com/Mosh9098/Hotel-Menu-App',
    },
    {
      title: 'Car Rental Website',
      description: 'A car rental platform allowing users to browse available cars, make reservations, and manage bookings.',
      image: '/public/images/carthumbnail.jpg', 
      images: [
        '/public/images/carthumbnail.jpg', 
        '/public/images/car1.jpg',
        '/public/images/car2.jpg',
        '/public/images/car3.jpg',
        '/public/images/car4.jpg',
      ],
      github: 'https://github.com/Mosh9098/car-rental-app',
    },
    {
      title: 'Real Estate Website',
      description: 'Built a real estate website using PHP where users can browse properties, filter by location and price, and contact agents.',
      image: '/public/images/rewthumbnail.jpg', 
      images: [
        '/public/images/rewthumbnail.jpg', 
        '/public/images/rew1.jpg',
        '/public/images/rew2.jpg',
        '/public/images/rew3.jpg',
        '/public/images/rew5.jpg',
        '/public/images/rew6.jpg',
        '/public/images/rew7.jpg',
        '/public/images/rew8.jpg',
      ],
      github: 'https://github.com/Mosh9098/real-estate-website',
    },
    {
      title: 'Pokémon Card Generator',
      description: 'A web application that generates Pokémon cards using data from an external API.',
      image: '/public/images/pcgthumbnail.jpg', 
      images: [
        '/public/images/pcgthumbnail.jpg', 
        '/public/images/pcg1.jpg',
        '/public/images/pcg2.jpg',
        '/public/images/pcg3.jpg',
      ],
      github: 'https://github.com/Mosh9098/Pokemon-Card-Generator',
    },
    {
      title: 'School Management System',
      description: 'Developed a comprehensive system for managing students, teachers, courses, and school operations.',
      image: '/public/images/smsthumbnail.jpg', 
      images: [
        '/public/images/smsthumbnail.jpg', 
        '/public/images/sms1.jpg',
        '/public/images/sms2.jpg',
        '/public/images/sms.jpg',
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
