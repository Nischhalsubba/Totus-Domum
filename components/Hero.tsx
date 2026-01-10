import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-white">
      
      {/* Background with Subtle Ken Burns Effect */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full"
        >
             {/* Using a high-key, bright interior image to match "Clean on white" request */}
            <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
                alt="Luxury Maltese Interior" 
                className="w-full h-full object-cover opacity-[0.15]"
            />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl">
            {/* Small Tagline */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-6 flex items-center gap-4"
            >
                <span className="h-px w-12 bg-brand-gold"></span>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-gold">
                    Discrete Bespoke Concierge
                </span>
            </motion.div>

            {/* Main Typography Mix */}
            <div className="relative">
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl text-brand-dark leading-[0.9] mb-2"
                    >
                        The Art of
                    </motion.h1>
                </div>
                
                <div className="overflow-visible pl-12 md:pl-32 -mt-2 md:-mt-6">
                     <motion.div
                        initial={{ opacity: 0, y: 40, skewY: 5 }}
                        animate={{ opacity: 1, y: 0, skewY: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
                        className="font-cursive text-7xl md:text-9xl text-brand-gold"
                     >
                        Seamless Living
                     </motion.div>
                </div>
            </div>

            {/* Editorial Description */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="mt-12 max-w-xl ml-auto mr-12"
            >
                <p className="font-sans text-lg text-gray-600 font-light leading-relaxed text-balance">
                    Whether in Zurich, Paris, or Malta, we manage your properties with empathy and sound business judgment. Ensuring your home is always ready for you, without you lifting a finger.
                </p>

                <div className="mt-10 flex gap-6">
                    <MagneticButton>
                        <button className="px-8 py-4 bg-brand-dark text-white text-[10px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-colors duration-500">
                            Explore Services
                        </button>
                    </MagneticButton>
                    <MagneticButton strength={10}>
                         <button className="px-8 py-4 bg-transparent border border-brand-dark/20 text-brand-dark text-[10px] uppercase tracking-[0.2em] hover:border-brand-dark transition-colors duration-500">
                            Read Philosophy
                        </button>
                    </MagneticButton>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;