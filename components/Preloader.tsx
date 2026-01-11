
import React from 'react';
import { motion } from 'framer-motion';
import { LogoIcon } from './Logo';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10001] bg-brand-dark flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-white mb-10"
        >
          <LogoIcon className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-90" fill="currentColor" />
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] uppercase text-center opacity-90">
            Totus Domum
          </span>
          <span className="mt-2 font-sans text-[0.6rem] tracking-[0.3em] uppercase opacity-50 text-brand-gold">
            Bespoke Concierge
          </span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 md:w-80 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
