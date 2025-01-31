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
      title: 'School Management System',
      description: 'Developed a comprehensive system for managing students, teachers, courses, and school operations.',
      image: '/smsthumbnail.jpg', 
      images: [
        '/smsthumbnail.jpg',
        '/sms1.jpg',
        '/sms2.jpg',
        '/sms3.jpg',
        '/sms4.jpg',
        '/sms5.jpg',
        '/sms6.jpg',
        '/sms7.jpg',
        '/sms8.jpg',
        '/sms9.jpg',
        '/sm1.jpg',
      ],
      github: 'https://github.com/Mosh9098/School-Management-System',
      liveSite: 'https://study-sphere-dun-three.vercel.app/'
    },
    {
      title: 'Hotel Menu Web App',
      description: 'A hotel management application for staff to handle menu items and orders.The admin can also add,delete items from the menu and see orders placed.',
      image: '/hmathumbnail.jpg', 
      images: [
        '/hmathumbnail.jpg',
        '/hma1.jpg',
        '/hma2.jpg',
        '/hma3.jpg',
        '/hma4.jpg',
        '/hma5.jpg',
        '/hma6.jpg',
      ],
      github: 'https://github.com/Mosh9098/Hotel-Menu-App',
      liveSite: 'https://hotel-web-menu.vercel.app/'
    },
    {
      title: 'Car Rental Website',
      description: 'A car rental platform allowing users to browse available cars, make reservations, and manage bookings.',
      image: '/carthumbnail.jpg', 
      images: [
        '/carthumbnail.jpg',
        '/car1.jpg',
        '/car2.jpg',
        '/car3.jpg',
        '/car4.jpg',
      ],
      github: 'https://github.com/Mosh9098/car-rental-app',
      liveSite: 'https://davidmainacarrental.netlify.app/'
    },
    {
      title: 'Construction Company Website',
      description: 'Built a construction company website that advertises the company’s services.',
      image: '/ltcthumbnail.jpg', 
      images: [
        '/ltcthumbnail.jpg',
        '/ltc1.jpg',
        '/ltc2.jpg',
        '/ltc3.jpg',
        '/ltc4.jpg',
      ],
      github: 'https://github.com/Mosh9098/contruction-company-website',
      liveSite: 'https://contruction-company-website-woad.vercel.app/'
    },
    {
      title: 'Real Estate Website',
      description: 'Built a real estate website using PHP where users can browse properties, filter by location and price, and contact agents.',
      image: '/rewthumbnail.jpg', 
      images: [
        '/rewthumbnail.jpg',
        '/rew1.jpg',
        '/rew2.jpg',
        '/rew3.jpg',
        '/rew5.jpg',
        '/rew6.jpg',
        '/rew7.jpg',
        '/rew8.jpg',
      ],
      github: 'https://github.com/Mosh9098/real-estate-website',
      liveSite: 'https://real-estate-website.example.com'
    },
    {
      title: 'Pokémon Card Generator',
      description: 'A web application that generates Pokémon cards using data from an external API.',
      image: '/pcgthumbnail.jpg', 
      images: [
        '/pcgthumbnail.jpg',
        '/pcg1.jpg',
        '/pcg2.jpg',
        '/pcg3.jpg',
      ],
      github: 'https://github.com/Mosh9098/Pokemon-Card-Generator',
      liveSite: 'https://pokemon-card-generator.example.com'
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
              <a href={project.liveSite} className="button live-site-button" target="_blank" rel="noopener noreferrer">Live Site</a>
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
