
import React, { useState, useEffect } from 'react';
import { LogoFull } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
            scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-white/5' : 'py-8 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="cursor-interactive">
             <LogoFull color="text-white" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <a href="#" className="nav-item text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors">Home</a>
          <a href="#" className="nav-item text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors">Philosophy</a>
          
          {/* Services Dropdown */}
          <div 
            className="relative group h-full flex items-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-item text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors flex items-center gap-1 py-4">
                Services <ChevronDown className="w-3 h-3 opacity-70 group-hover:text-brand-gold" />
            </button>
            
            <AnimatePresence>
                {dropdownOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-white/10 p-6 min-w-[260px] shadow-2xl"
                    >
                        <div className="flex flex-col gap-4">
                            <a href="#" className="block text-brand-alabaster hover:text-brand-gold text-xs uppercase tracking-[0.15em] transition-colors border-b border-white/5 pb-3">House Management</a>
                            <a href="#" className="block text-brand-alabaster hover:text-brand-gold text-xs uppercase tracking-[0.15em] transition-colors border-b border-white/5 pb-3">Property Search</a>
                            <a href="#" className="block text-brand-alabaster hover:text-brand-gold text-xs uppercase tracking-[0.15em] transition-colors">Concierge Services</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
          
          <a href="#" className="nav-item text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
            <button className="px-8 py-3 bg-white/10 hover:bg-brand-gold text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border border-white/20 hover:border-transparent">
                Private Access
            </button>
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
            className="fixed inset-0 z-40 bg-[#0A0A0A] text-white flex items-center justify-center md:hidden"
        >
           <div className="flex flex-col space-y-8 items-center text-center">
            {['Home', 'Philosophy', 'Services', 'Contact'].map((item, i) => (
                <motion.a 
                    key={item} 
                    href="#" 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-3xl font-serif text-white/90 hover:text-brand-gold hover:italic transition-all"
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
