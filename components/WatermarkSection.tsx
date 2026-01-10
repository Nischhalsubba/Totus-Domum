import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LogoIcon } from './Logo';

/**
 * The Watermark reveal effect, refined for a UHNW aesthetic.
 */
const WatermarkSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 0.08, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <div ref={containerRef} className="relative w-full py-40 md:py-64 bg-brand-light overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          style={{ scale, opacity, y, rotate }}
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] text-brand-dark"
        >
          <LogoIcon className="w-full h-full" fill="currentColor" />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
            viewport={{ once: true, margin: "-20%" }}
            className="max-w-5xl mx-auto"
        >
          <span className="block text-brand-gold font-sans uppercase tracking-[0.3em] text-[10px] mb-8 font-bold">
            Heritage & Trust
          </span>
          
          <h2 className="text-4xl md:text-7xl font-serif text-brand-dark mb-10 leading-[1.1]">
            A wealth of expertise <br/> 
            <span className="font-cursive text-5xl md:text-8xl text-brand-gold mt-4 block">spanning over 35 years</span>
          </h2>

          <div className="flex justify-center mb-12">
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-px bg-brand-gold/50"
            ></motion.div>
          </div>
          
          <p className="text-xl md:text-2xl text-brand-text/70 font-serif leading-relaxed md:px-20 text-balance">
            We operate with the profound understanding that your home is not merely an asset to be managed, but a <span className="text-brand-dark italic">legacy to be preserved.</span>
          </p>
          
        </motion.div>
      </div>
    </div>
  );
};

export default WatermarkSection;