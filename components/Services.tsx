
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within the tall container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform horizontal scroll based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  
  // Fade out intro text as you scroll
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-dark text-brand-alabaster">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            
            {/* Intro Header - Fades out */}
            <motion.div 
                style={{ opacity: introOpacity }}
                className="absolute top-32 left-6 md:left-24 z-20 pointer-events-none"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-4">What We Do</span>
                <h2 className="text-5xl md:text-7xl font-serif">Curated Services</h2>
                <div className="mt-4 flex items-center gap-2">
                    <span className="w-12 h-px bg-white/30"></span>
                    <span className="text-xs uppercase tracking-widest text-white/50">Scroll Down</span>
                </div>
            </motion.div>

            {/* Horizontal Track */}
            <motion.div style={{ x }} className="flex gap-12 md:gap-32 px-6 md:px-24 items-center">
                
                {/* Spacer for intro */}
                <div className="w-[80vw] md:w-[30vw] shrink-0" />

                {SERVICES.map((service, idx) => (
                    <div 
                        key={idx} 
                        className="w-[85vw] md:w-[600px] h-[60vh] md:h-[70vh] shrink-0 relative flex flex-col group"
                    >
                        {/* Image Container */}
                        <div className="w-full h-full relative overflow-hidden bg-gray-900 border border-white/5">
                            <motion.img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                            <div className="overflow-hidden mb-4">
                                <span className="block text-brand-gold font-mono text-sm">0{idx + 1}</span>
                            </div>
                            <h3 className="font-serif text-3xl md:text-5xl mb-6 text-white leading-tight">
                                {service.title}
                            </h3>
                            <p className="font-sans text-brand-alabaster/70 font-light text-base md:text-lg max-w-sm leading-relaxed border-l border-brand-gold/50 pl-6">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
                
                {/* End Spacer */}
                <div className="w-[20vw] shrink-0" />
            </motion.div>
        </div>
    </section>
  );
};

export default Services;
