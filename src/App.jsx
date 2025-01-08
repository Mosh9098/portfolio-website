import React from 'react';
import './App.css'; 

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CallToActionSection } from './components/CallToActionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { SkillsSection } from './components/SkillsSection';


const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <AboutMeSection />
    <SkillsSection />
    <ServicesSection />
    <PortfolioSection />
    <CallToActionSection />
    <ContactSection />
    {/* <Footer /> */}
    <FloatingButtons />
  </div>
);

export default App;
