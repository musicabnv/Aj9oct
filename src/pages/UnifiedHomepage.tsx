import React from 'react';
import HeroSection from './Home';
import CallToActionMobile from '../components/CallToActionMobile';
import CallToActionSection from '../components/CallToActionSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import SectionDivider from '../components/SectionDivider';

const UnifiedHomepage = () => {
  return (
    <div className="min-h-screen bg-luxury-ivory noise-texture overflow-x-hidden w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Mobile Hero Heading */}
      <div className="md:hidden">
        <CallToActionMobile />
      </div>

      {/* Call to Action Section */}
      <div className="bg-white overflow-x-hidden w-full">
        <CallToActionSection />
      </div>

      {/* What We Do Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <WhatWeDoSection />
      </div>

      <SectionDivider />

      {/* Why Us Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <WhyUsSection />
      </div>

      <SectionDivider />

      {/* Services Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <ServicesSection />
      </div>

      <SectionDivider />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      <SectionDivider />

      {/* Testimonials Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <TestimonialsSection />
      </div>

      <SectionDivider />

      {/* Contact Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default UnifiedHomepage;
