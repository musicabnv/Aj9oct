import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InteriorDesignProjectsPage = () => {
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: 'Interiors Contemporary', path: '/projects/interiors-contemporary', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/InteriorsContemporary/1760764315279_copy_6720x4480.jpg' }
  ];

  return (
    <div className="min-h-screen bg-luxury-ivory noise-texture overflow-x-hidden w-full">
      <section className="pt-20 pb-16 bg-luxury-ivory overflow-x-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-luxury-charcoal mb-6">
            Interior Design Projects
          </h1>
          <motion.p
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Every Space Tells a Story.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer break-inside-avoid mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1
                }}
                onClick={() => navigate(project.path)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:scale-[1.02]">
                  <div className="relative aspect-[4/5]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-cormorant text-2xl font-bold text-white mb-1">
                        {project.name}
                      </h3>
                      <p className="font-poppins text-sm text-white/90 uppercase tracking-wider">
                        Interior Design
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignProjectsPage;
