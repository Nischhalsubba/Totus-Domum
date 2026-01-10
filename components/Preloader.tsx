import React from 'react';
import { motion } from 'framer-motion';
import { LogoIcon } from './Logo';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center text-brand-gold"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <LogoIcon className="w-24 h-24 mb-6" fill="currentColor" />
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-3xl tracking-widest uppercase"
        >
            Totus Domum
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;