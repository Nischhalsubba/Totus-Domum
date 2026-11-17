
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WatermarkSection from './components/WatermarkSection';
import Services from './components/Services';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

// Mock Lenis for React context (since script is in HTML, we just rely on CSS html { scroll-behavior... })
// Ideally we would initialize Lenis here, but let's stick to standard scroll for reliability in this preview
// or assume the HTML script handles global smooth scroll.

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the 2.5s progress bar + buffer
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
    </AnimatePresence>

    {/* Main Content - Only visible after loading or behind preloader */}
    <div className={`min-h-screen bg-[#F5F2EB] text-brand-dark font-sans selection:bg-brand-gold selection:text-white ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <CustomCursor />
      <Navigation />
      
      <main id="home">
        <Hero />
        <div id="philosophy" className="scroll-mt-24"><IntroSection /></div>
        <div id="services" className="scroll-mt-24"><Services /></div>
        <FeatureSection />
        <WatermarkSection />
        <div id="contact" className="scroll-mt-24"><ContactForm /></div>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
