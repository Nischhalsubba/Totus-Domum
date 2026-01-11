
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
      
      {/* Background Image with Enhanced Contrast Overlay */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
        
        <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2592&auto=format&fit=crop" 
            alt="Minimalist Luxury Interior" 
            className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container mx-auto px-6 md:px-24">
        <div className="max-w-5xl">
            
            {/* Top Label */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
            >
                <div className="h-[1px] w-16 bg-brand-gold"></div>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-gold">
                    Est. 1989
                </span>
            </motion.div>

            {/* Headline */}
            <div className="relative">
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-brand-alabaster mb-4"
                >
                    The Invisible <br/>
                    <span className="italic font-light">Art of Living</span>
                </motion.h1>
            </div>

            {/* Subtext & CTA */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-12 mt-12">
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="font-sans text-base md:text-lg text-white/80 font-light leading-relaxed max-w-lg"
                >
                    Totus Domum curates the exceptional for Malta’s most discerning residents. 
                    From private estate management to off-market acquisitions, we exist to give you back your time.
                </motion.p>
                
                <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="group flex items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-brand-gold transition-colors"
                >
                    Explore Services
                    <span className="w-12 h-[1px] bg-white/50 group-hover:w-20 group-hover:bg-brand-gold transition-all duration-300"></span>
                </motion.button>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-24 z-20 flex flex-col items-center gap-4"
      >
          <span className="text-[9px] uppercase tracking-widest text-white/50 writing-vertical-rl">Scroll</span>
          <div className="h-12 w-[1px] bg-white/20">
            <motion.div 
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-brand-gold origin-top" 
            />
          </div>
      </motion.div>
    </div>
  );
};

export default Hero;
