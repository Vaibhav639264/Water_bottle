import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;