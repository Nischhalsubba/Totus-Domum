import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WatermarkSection from './components/WatermarkSection';
import BrandSpecs from './components/BrandSpecs';
import Services from './components/Services';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
    </AnimatePresence>

    <div className="min-h-screen bg-white text-brand-text font-sans selection:bg-brand-gold selection:text-white overflow-hidden">
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Intro Text */}
        <section className="py-32 md:py-48 px-6 container mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold mb-8 block">
                    Bespoke Private Client Services
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-10 leading-tight">
                    We bridge the gap between <br/>
                    <span className="italic text-gray-400 font-light">complex demands</span> and <span className="font-cursive text-6xl md:text-7xl text-brand-dark">seamless living.</span>
                </h2>
                <div className="w-12 h-1 bg-brand-gold mx-auto mb-10"></div>
                <p className="text-gray-500 font-light text-xl leading-relaxed">
                    From managing global property portfolios to coordinating executive schedules, we handle the details so you can focus on what truly matters.
                </p>
            </motion.div>
        </section>

        {/* THE REQUESTED FEATURE */}
        <WatermarkSection />

        {/* Services Grid */}
        <Services />

        {/* Data for Email Request */}
        <BrandSpecs />

      </main>

      <footer className="bg-brand-dark text-white py-24 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
            <div className="mb-12 md:mb-0 max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                    <h4 className="font-serif text-4xl">Totus Domum</h4>
                </div>
                <p className="text-gray-400 text-sm tracking-wide font-light leading-relaxed mb-8">
                    The premier lifestyle and property management service for Malta's most discerning residents.
                </p>
                <button className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors">
                    Get in Touch →
                </button>
            </div>
            
            <div className="flex gap-16">
                 <div>
                    <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">Sitemap</h5>
                    <div className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-gray-300">
                        <a href="#" className="hover:text-brand-gold transition-colors">Home</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Philosophy</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Services</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
                    </div>
                 </div>
                 <div>
                    <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">Legal</h5>
                    <div className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-gray-300">
                        <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
                    </div>
                 </div>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
             <p>© {new Date().getFullYear()} Totus Domum. All Rights Reserved.</p>
             <p>Crafted for Excellence.</p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;