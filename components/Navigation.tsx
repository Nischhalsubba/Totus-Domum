
import React, { useState } from 'react';
import { LogoFull } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Navigation: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 py-8 mix-blend-difference text-white"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Scales subtly */}
        <div className="cursor-interactive">
             <LogoFull color="text-white" />
        </div>

        {/* Desktop Nav - Clean & Minimal */}
        <div className="hidden md:flex items-center space-x-12">
          {['Home', 'Philosophy', 'Services', 'Contact'].map((item) => (
            <MagneticButton key={item} strength={15}>
                <a 
                href="#" 
                className="group relative text-[11px] uppercase tracking-[0.2em] font-bold py-2 block cursor-interactive"
                >
                <span className="transition-opacity duration-300 opacity-80 group-hover:opacity-100">
                    {item}
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </MagneticButton>
          ))}
          
          <MagneticButton>
            <button className="px-6 py-3 border border-white/30 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500 rounded-sm">
                Inquire
            </button>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>

     {/* Mobile Menu Overlay */}
     <AnimatePresence>
      {isMobileOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#0F0F0F] text-white flex items-center justify-center md:hidden"
        >
           <div className="flex flex-col space-y-10 items-center text-center">
            {['Home', 'Philosophy', 'Services', 'Contact'].map((item, i) => (
                <motion.a 
                    key={item} 
                    href="#" 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-4xl font-serif text-white/90 hover:text-brand-gold hover:italic transition-all"
                    onClick={() => setIsMobileOpen(false)}
                >
                {item}
                </motion.a>
            ))}
           </div>
        </motion.div>
      )}
     </AnimatePresence>
    </>
  );
};

export default Navigation;
