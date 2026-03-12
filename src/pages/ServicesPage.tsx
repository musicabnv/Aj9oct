import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, RefreshCw, Leaf, Hammer, Camera, Building } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    title: 'Architectural Design',
    description: 'We create architecture that feels inevitable — shaped by context, light, and intent. From private residences to commercial developments, our designs are timeless, functional, and deeply responsive to the way people live and interact.',
    icon: <Building className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Interior Design',
    description: 'Every space tells a story. We curate interiors that reflect identity — harmonizing materials, texture, and light to create environments that feel effortless, elegant, and complete.',
    icon: <Home className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Residential Architecture',
    description: 'Homes designed to breathe. Each residence balances comfort, clarity, and individuality — crafted not for trends, but for the lives lived within them.',
    icon: <Home className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Commercial & Hospitality Design',
    description: 'We design spaces that move people and elevate brands — from contemporary offices to boutique restaurants and hotels. Every project is an experience, where design meets function and emotion meets efficiency.',
    icon: <Briefcase className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Renovation & Adaptive Reuse',
    description: 'We reimagine existing spaces with sensitivity and restraint — preserving character while introducing new purpose. Our goal: renewal without compromise.',
    icon: <RefreshCw className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Landscape & Urban Design',
    description: 'Design extends beyond walls. We craft outdoor spaces and urban environments that nurture connection, calm, and sustainability — architecture in dialogue with nature.',
    icon: <Leaf className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: '3D Visualization & Virtual Walkthroughs',
    description: 'Experience your project before it\'s built. Our immersive 3D visualizations and virtual walkthroughs allow you to explore every space, every finish, and every detail in stunning detail, ensuring your vision comes to life exactly as imagined.',
    icon: <Camera className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Project Management & Execution',
    description: 'From sketch to completion, every phase is guided with precision. Our team ensures quality, timelines, and seamless delivery — turning vision into reality with quiet assurance.',
    icon: <Hammer className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  }
];

const ServicesPage = () => {
  const { elementRef: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: introRef, isIntersecting: isIntroVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-24">

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-luxury-charcoal mb-6 tracking-wide">
            OUR SERVICES
          </h1>
          <p className="font-poppins italic text-xl sm:text-2xl text-luxury-charcoal/70 font-light tracking-wide">
            Design That Connects. Craft That Endures.
          </p>
        </motion.div>

        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <p className="font-poppins text-lg sm:text-lg leading-relaxed text-luxury-charcoal/80 text-center">
            At Ajooni Jasleen Architects, we design spaces that go beyond beauty, places that feel personal, purposeful, and alive.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="max-w-4xl mx-auto group"
              >
                <div className="flex items-start">
                  {/* Icon Container */}
                  <motion.div
                    className="flex-shrink-0 mr-6 mt-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 ease-out">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Content Container */}
                  <div className="flex-1">
                    <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-4 tracking-wide group-hover:text-luxury-gold transition-colors duration-300 ease-out">
                      {service.title}
                    </h2>
                    <p className="font-poppins text-base sm:text-lg leading-relaxed text-luxury-charcoal/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-32 text-center space-y-8"
        >
          <div className="inline-flex gap-8">
            <Link
              to="/#projects"
              className="font-poppins inline-block px-10 py-4 text-base tracking-wide border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white transition-all duration-300 ease-out"
            >
              Explore Our Portfolio
            </Link>
            <Link
              to="/#contact"
              className="font-poppins inline-block px-10 py-4 text-base tracking-wide border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300 ease-out"
            >
              Begin Your Project
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicesPage;
