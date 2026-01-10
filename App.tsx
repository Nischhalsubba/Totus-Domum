import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WatermarkSection from './components/WatermarkSection';
import BrandSpecs from './components/BrandSpecs';
import Services from './components/Services';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

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
        {/* 1. Hero: The "Canva" typographic style */}
        <Hero />
        
        {/* 2. Intro: "Excellence in Every Detail" */}
        <IntroSection />

        {/* 3. Services: The 3 Cards (Residence, Lifestyle, Search) */}
        <Services />

        {/* 4. Feature: "Your Home, Managed Your Way" Parallax */}
        <FeatureSection />
        
        {/* 5. The Watermark Brand Moment */}
        <WatermarkSection />

        {/* 6. Contact: "Let's Start the Conversation" */}
        <ContactForm />

      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;