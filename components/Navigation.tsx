import React, { useState, useEffect } from 'react';
import { LogoFull } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-100/50' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-700 origin-left cursor-interactive`}>
             <LogoFull color={isScrolled ? 'text-brand-dark' : 'text-white'} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {['Home', 'Philosophy', 'Services', 'Contact'].map((item) => (
            <MagneticButton key={item} strength={10}>
                <a 
                href="#" 
                className="group relative text-[11px] uppercase tracking-[0.2em] font-bold py-2 block cursor-interactive"
                >
                <span className={`transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                    {item}
                </span>
                <span className={`absolute bottom-0 left-1/2 w-0 h-px transform -translate-x-1/2 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-brand-gold' : 'bg-white'}`}></span>
                </a>
            </MagneticButton>
          ))}
          
          <MagneticButton>
            <button className={`px-8 py-3 transition-colors duration-500 text-[10px] uppercase tracking-[0.2em] font-bold border ${
                isScrolled 
                    ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-brand-dark'
            }`}>
                Inquire
            </button>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? 'text-brand-dark' : 'text-white'}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
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
            className="fixed inset-0 z-40 bg-brand-dark text-white pt-24 px-6 md:hidden"
        >
           <div className="flex flex-col space-y-8 items-center justify-center h-full pb-24">
            {['Home', 'Philosophy', 'Services', 'Contact'].map((item) => (
                <a 
                key={item} 
                href="#" 
                className="text-3xl font-serif text-white/80 hover:text-brand-gold hover:italic transition-all"
                onClick={() => setIsMobileOpen(false)}
                >
                {item}
                </a>
            ))}
           </div>
        </motion.div>
      )}
     </AnimatePresence>
    </>
  );
};

export default Navigation;