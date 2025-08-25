import React from 'react';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;