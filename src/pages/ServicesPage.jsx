import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CombinedIdeaSection from '../cms-components/CombinedIdeaSection';
import SchoolsSection from '../cms-components/SchoolsSection';
import StorytellingSection from '../cms-components/StorytellingSection';

const ServicesPage = () => {
  const { setIsContactOpen } = useOutletContext();
  return (
    <>
      <CombinedIdeaSection onStartProject={() => setIsContactOpen(true)} />
      <SchoolsSection />
      <StorytellingSection />
    </>
  );
};

export default ServicesPage;
