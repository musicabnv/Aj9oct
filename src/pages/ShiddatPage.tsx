import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Palette,
  Hammer,
  Music,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

const ShiddatPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0009T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0041T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0051T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0110T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0120T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0128T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0150T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0168T01%20(2).JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0168T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0179T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0206T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0236T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0254T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0325T01.JPG',
      title: 'Shiddat Event'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0364T01.JPG',
      title: 'Shiddat Event'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const slideTimer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideTimer);
    };
  }, []);

  const eventHighlights = [
    {
      title: 'Showcase',
      description: 'Artifacts by Local Artisans',
      icon: <Palette className="w-8 h-8 text-luxury-gold" />
    },
    {
      title: 'Workshop Pavilion',
      description: 'Interactive Live Demonstrations',
      icon: <Hammer className="w-8 h-8 text-luxury-gold" />
    },
    {
      title: 'Open-Air',
      description: 'Cultural & Literary Performance',
      icon: <Music className="w-8 h-8 text-luxury-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-ivory noise-texture overflow-x-hidden w-full">
      <section className="pt-32 pb-20 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Shiddat/Background/DSC_7357_copy_1512x1006.jpg)'}}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Heart className="w-8 h-8 text-luxury-gold mr-4" />
          </motion.div>

          <h1 className="font-cormorant italic text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-1">
            Shiddat
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl italic font-semibolt text-luxury-gold mb-6">
              Art <span className="font-cormorant font-semibold text-2xl not-italic">EXHIBIT</span>
            </h2>
          </motion.div>

          <motion.div
            className="inline-block bg-luxury-gold px-6 py-3 rounded-lg shadow-lg mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <p className="font-cormorant text-base sm:text-xl text-white font-normal drop-shadow-md">
              15<sup>th</sup>-16<sup>th</sup> MARCH 2025
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-luxury-ivory rounded-full flex items-center justify-center shadow-md">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-luxury-charcoal mb-2 uppercase">
                  {highlight.title}
                </h3>
                <p className="font-poppins text-luxury-charcoal/80 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details with Slideshow Section */}
      <section className="py-20 bg-luxury-ivory">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Event Details - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-luxury-charcoal mb-8">Event Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold text-luxury-charcoal mb-1">Timings</h3>
                    <p className="font-poppins text-luxury-charcoal/80">
                      <span className="text-luxury-gold font-semibold">11:00 am to 7:00 pm</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold text-luxury-charcoal mb-1">Venue</h3>
                    <p className="font-poppins text-luxury-charcoal/80">
                      Aadh Towers, E-37, Phase-B, Industrial Area, S.A.S Nagar, Mohali, Punjab, 160071
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold text-luxury-charcoal mb-1">Dates</h3>
                    <p className="font-poppins text-luxury-charcoal/80">
                      15th - 16th March 2025
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Photo Slideshow - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl touch-pan-y">
                {/* Loading indicator */}
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold"></div>
                  </div>
                )}

                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                ))}

                {/* Slide Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 p-2 touch-manipulation"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 p-2 touch-manipulation"
                  aria-label="Next slide"
                >
                  <ChevronRight size={32} className="sm:w-12 sm:h-12" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal">
              About Shiddat
            </h2>
          </div>

          <motion.p
            className="font-poppins font-light text-lg text-luxury-charcoal italic leading-relaxed max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Driven by a belief in the power of collaboration, Ar. Jasleen founded Shiddat in 2024. It is her personal initiative to create a dedicated platform for professionals from the architecture, construction, and art communities to connect, share knowledge, and inspire one another. Now an annual event, Shiddat reflects her commitment to strengthening the industry from within.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="bg-luxury-ivory p-6 rounded-lg shadow-md">
              <Calendar className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal mb-2">Annual Event</h3>
              <p className="font-poppins text-luxury-charcoal/80 text-sm">
                A yearly gathering that brings together creative professionals
              </p>
            </div>

            <div className="bg-luxury-ivory p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal mb-2">Community Focus</h3>
              <p className="font-poppins text-luxury-charcoal/80 text-sm">
                Connecting architecture, construction, and art professionals
              </p>
            </div>

            <div className="bg-luxury-ivory p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal mb-2">Industry Impact</h3>
              <p className="font-poppins text-luxury-charcoal/80 text-sm">
                Strengthening the creative industry through collaboration
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-luxury-ivory"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-8 text-center">
            SHIDDAT TIMELINE
          </h2>

          <div className="space-y-8">
            <motion.div
              className="flex items-start space-x-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="font-cormorant text-white font-normal text-lg">2024</span>
              </div>

              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-luxury-gold" />
                  <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal ml-3">
                    Shiddat 1.0
                  </h3>
                </div>
                <p className="font-poppins text-luxury-charcoal/80 leading-relaxed">
                  Launched as a flagship event for the creative community, bringing together professionals from architecture, construction, and art.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="font-cormorant text-white font-normal text-lg">2025</span>
              </div>

              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-luxury-gold" />
                  <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal ml-3">
                    Shiddat 2.0
                  </h3>
                </div>
                <p className="font-poppins text-luxury-charcoal/80 leading-relaxed">
                  The second successful edition, expanding the reach and impact while the firm embarked on its first township project.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="font-cormorant text-white font-normal text-lg">2026</span>
              </div>

              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Heart className="w-6 h-6 text-luxury-gold" />
                  <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal ml-3">
                    Shiddat 3.0 - An Art Exhibit
                  </h3>
                </div>
                <p className="font-poppins text-luxury-charcoal/80 leading-relaxed">
                  Continuing the commitment to industry building with an immersive art exhibit featuring architectural materials, interactive workshops, and cultural performances.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      <motion.section
        className="py-20 bg-luxury-ivory"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-luxury-charcoal/80 italic leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            "Building connections, celebrating craftsmanship, and strengthening the creative community —
            one event at a time."
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default ShiddatPage;
