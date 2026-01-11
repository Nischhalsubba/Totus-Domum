
import React from 'react';
import { motion } from 'framer-motion';
import { LogoIcon } from './Logo';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[10001] bg-[#0F0F0F] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center w-full max-w-xs md:max-w-md">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-white mb-12"
        >
          <LogoIcon className="w-16 h-16 md:w-20 md:h-20 mb-6 text-brand-gold" fill="currentColor" />
          <span className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-center text-brand-alabaster">
            Totus Domum
          </span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          {/* Filling White Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-white"
          />
        </div>
        
        {/* Loading text (optional, extremely subtle) */}
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.3 }} 
            transition={{ delay: 0.5 }}
            className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white"
        >
            Loading Experience
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
