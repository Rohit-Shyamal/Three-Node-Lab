import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import NavigationOverlay from './NavigationOverlay';
import ProjectsSection from './ProjectsSection';
import ArduinoSection from './ArduinoSection';
import IoTSection from './IoTSection';
import RoboticsSection from './RoboticsSection';
import BooksSection from './BooksSection';
import BusinessSection from './BusinessSection';
import ContactOverlay from './ContactOverlay';
import SchoolsSection from './SchoolsSection';
import StorytellingSection from './StorytellingSection';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const CMSApp = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-cms-orange selection:text-white pt-20">
      <Navbar onOpenNav={() => setIsNavOpen(true)} />
      <Hero onOpenNav={() => setIsNavOpen(true)} />
      <NavigationOverlay isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <main>
        <ProjectsSection />
        <ArduinoSection />
        <IoTSection />
        <RoboticsSection />
        <BooksSection />
        <BusinessSection onStartProject={() => setIsContactOpen(true)} />
        <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <SchoolsSection />
        <StorytellingSection />
        <FinalCTA onStartProject={() => setIsContactOpen(true)} />
      </main>

      <Footer />
    </div>
  );
};

export default CMSApp;
