import React from 'react';

export const ServicesSection = () => (
  <section id="services" className="services-section">
    <h2>My Services</h2>
    <p>These are the services I offer to deliver high-quality projects:</p>

    <div className="service-card">
      <h3>Web Development</h3>
      <p>
        I specialize in building scalable, responsive, and interactive websites. I use modern tools and frameworks to create fast and reliable web applications tailored to meet business needs.
      </p>
    </div>

    <div className="service-card">
      <h3>Front-End Development</h3>
      <p>
        As a front-end developer, I focus on creating visually appealing and highly functional user interfaces. I ensure seamless user experiences through clean code, pixel-perfect designs, and animations.
      </p>
    </div>

    <div className="service-card">
      <h3>Web Design</h3>
      <p>
        I design modern and engaging layouts using Figma, focusing on user-friendly designs and responsiveness. My designs prioritize usability and aesthetics to create visually stunning interfaces.
      </p>
    </div>

    <div className="service-card">
      <h3>Back-End Development</h3>
      <p>
        I develop secure and robust back-end systems to handle data and server-side logic. My expertise includes database management, API integration, and server configuration to ensure smooth application performance.
      </p>
    </div>
  </section>
);
