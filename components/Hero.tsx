
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F5F2EB]">
      
      {/* Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full"
        >
             {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
                alt="Luxury Maltese Interior" 
                className="w-full h-full object-cover"
            />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container mx-auto px-6 md:px-24 pt-20">
        <div className="max-w-4xl">
            
            {/* Tagline */}
            <div className="overflow-hidden mb-8">
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4"
                >
                    <span className="h-px w-12 bg-brand-alabaster"></span>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-brand-alabaster drop-shadow-md">
                        Bespoke Concierge
                    </span>
                </motion.div>
            </div>

            {/* Large Typography */}
            <div className="relative">
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-7xl md:text-[8vw] leading-[0.9] text-brand-alabaster mix-blend-overlay"
                    >
                        THE ART OF
                    </motion.h1>
                </div>
                
                <div className="overflow-hidden pl-12 md:pl-[10vw] -mt-2 md:-mt-[1vw]">
                     <motion.div
                        initial={{ y: "120%", rotate: 2 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="font-cursive text-7xl md:text-[9vw] text-brand-gold drop-shadow-lg"
                     >
                        Seamless Living
                     </motion.div>
                </div>
            </div>

            {/* Description & CTA */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                className="mt-16 md:mt-24 max-w-lg ml-auto md:mr-20"
            >
                <p className="font-sans text-lg text-brand-alabaster/90 font-light leading-relaxed mb-10 text-shadow-sm">
                    Discrete bespoke services for estates in Zurich, Paris, and Malta. We operate with empathy and sound business judgment.
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                     <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-alabaster transition-all hover:text-brand-gold">
                        Inquire Now
                        <span className="w-12 h-px bg-brand-alabaster group-hover:bg-brand-gold transition-colors"></span>
                     </button>
                </div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-24 text-brand-alabaster/60 z-20"
      >
          <div className="h-16 w-px bg-gradient-to-b from-brand-alabaster to-transparent"></div>
          <span className="block mt-4 text-[10px] uppercase tracking-widest writing-vertical-rl rotate-180">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Hero;
