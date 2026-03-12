import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Scale, Sparkles, Home, Star, Users, Target, CheckCircle, Rocket, Leaf, BookOpen, Feather } from 'lucide-react';

const OurStudioPage = () => {
  return (
    <div className="min-h-screen bg-luxury-ivory noise-texture overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-luxury-ivory overflow-x-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-luxury-charcoal mb-6">
            Our Studio
          </h1>
          <motion.p 
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="font-poppins">Where Design Meets Intention.</span>
          </motion.p>
        </motion.div>
      </section>

      {/* Full-width Image */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-0 pb-[50%] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Studio/1758214998272%20(1).webp" 
              alt="Modern architectural studio interior with clean lines and soft lighting" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <p className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              At Ajooni Jasleen Architects, we compose experiences, not just spaces. 
              <br/>
              <br/>We believe good design tells your unique story, shaped by purpose, emotion, and place. 
              <br/>It should feel right, breathe life, inspire, and truly belong.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Philosophy Section */}
      <motion.section 
        className="py-20 bg-luxury-ivory"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-8 text-center">
            Our Philosophy
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Ear className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Deep Listening :</strong> We listen to you, the site, and natural elements to reveal each project's unique soul.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Scale className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Balanced Process :</strong> Our approach blends intuition with precision, and creativity with context.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Sparkles className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Timeless Design :</strong> We craft modern expressions that transcend fleeting trends.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* What We Create Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-8 text-center">
            What We Create
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Home className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Diverse Projects :</strong> From private villas to commercial and hospitality spaces.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Star className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Core Pillars :</strong> Every design is founded on sustainability, craftsmanship, and emotion.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Target className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Purposeful Spaces :</strong> We design with restraint, allowing architecture to breathe and inspire.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section 
        className="py-20 bg-luxury-ivory"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-8 text-center">
            How We Work
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Users className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Collaborative Approach :</strong> Partnering with clients, craftsmen, and the environment.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <CheckCircle className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Aligned Vision :</strong> Great spaces emerge from shared understanding and goals.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Rocket className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Precise Execution :</strong> We deliver with clarity, open communication, and meticulous precision.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Leaf className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Evolving Spaces :</strong> Our designs are crafted to mature gracefully over time.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Our Belief Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-8 text-center">
            Our Core Belief
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <BookOpen className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Design as Meaning :</strong> We see design not as a product, but as a process of creating profound meaning.
            </li>
            <li className="font-poppins text-lg text-luxury-charcoal leading-relaxed">
              <Feather className="w-6 h-6 text-luxury-gold mr-3 inline-block" />
              <strong className="text-luxury-gold">Crafting Stories :</strong> Each space is a unique story, meticulously crafted one at a time.
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default OurStudioPage;