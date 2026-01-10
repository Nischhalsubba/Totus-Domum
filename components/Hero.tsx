import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      {/* Background Image with Slow Zoom & Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
              src="https://picsum.photos/id/1031/1920/1080" 
              alt="Luxury Architecture" 
              className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-10">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2 // Wait for preloader
                }
              }
            }}
        >
            <div className="overflow-hidden mb-2">
                <motion.h1 
                    variants={{
                        hidden: { y: 100 },
                        visible: { y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
                    }}
                    className="font-serif text-6xl md:text-8xl text-white drop-shadow-lg leading-tight tracking-tight"
                >
                    The Art of
                </motion.h1>
            </div>

            <div className="mb-8">
                 {/* Cursive Wipe Effect */}
                 <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1.8 }}
                    className="overflow-hidden mx-auto max-w-fit"
                 >
                    <span className="font-cursive text-7xl md:text-[9rem] text-brand-gold font-light block drop-shadow-none whitespace-nowrap pb-4 md:pb-8 px-4">
                        Seamless Living
                    </span>
                 </motion.div>
            </div>

            <motion.div 
               variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
            >
              <p className="font-sans text-lg md:text-2xl text-white/80 mb-12 max-w-xl mx-auto font-light tracking-wide text-balance leading-relaxed">
                Discrete, bespoke concierge services for the ultra high net worth individual.
              </p>
            </motion.div>

            <motion.div 
               variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1 } }
              }}
              className="flex flex-col md:flex-row justify-center gap-8 items-center"
            >
              <MagneticButton>
                  <button className="group relative px-10 py-4 bg-transparent border border-white/30 text-white overflow-hidden transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                      <span className="relative z-10 text-xs uppercase tracking-[0.25em] font-bold">Discover More</span>
                  </button>
              </MagneticButton>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;