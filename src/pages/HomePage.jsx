import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../cms-components/Hero';
import FeaturedProducts from '../cms-components/FeaturedProducts';
import StorytellingSection from '../cms-components/StorytellingSection';
import CombinedIdeaSection from '../cms-components/CombinedIdeaSection';
import FinalCTA from '../cms-components/FinalCTA';

const HomePage = () => {
  const { setIsContactOpen } = useOutletContext();
  return (
    <>
      <Hero />
      <StorytellingSection />
      <FeaturedProducts />
      <CombinedIdeaSection onStartProject={() => setIsContactOpen(true)} />
      <FinalCTA onStartProject={() => setIsContactOpen(true)} />
    </>
  );
};

export default HomePage;
