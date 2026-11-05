
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section ref={containerRef} className="py-32 md:py-56 bg-brand-alabaster relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.4em] text-brand-goldDark font-bold mb-6"
            >
                Our Philosophy
            </motion.span>
            
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif text-5xl md:text-7xl text-brand-dark leading-[1.1] max-w-4xl"
            >
                We bridge the gap between <br/> 
                <span className="italic text-brand-charcoal">complex demands</span> and <span className="text-brand-goldDark">seamless living.</span>
            </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="relative"
            >
                <div className="aspect-[4/5] overflow-hidden bg-brand-gray/10">
                    <img 
                        src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2670" 
                        alt="Architectural Detail" 
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                    />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r border-b border-brand-gold/40 hidden md:block"></div>
            </motion.div>

            <motion.div 
                style={{ y: yParallax }}
                className="flex flex-col gap-8"
            >
                <div>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-goldDark mb-4">The Standard</h3>
                    <p className="font-serif text-3xl md:text-4xl text-brand-dark leading-tight">
                        Precision in every detail, discretion in every action.
                    </p>
                </div>
                
                <p className="text-brand-gray font-light leading-relaxed text-lg">
                    True luxury is the absence of worry. From managing global property portfolios to coordinating executive schedules, we handle the arduous tasks with empathy and military precision. Your home is not just an asset, it is a sanctuary that requires silent, expert guardianship.
                </p>

                <div className="pt-8 border-t border-brand-dark/10">
                    <ul className="grid grid-cols-2 gap-y-4 font-sans text-xs uppercase tracking-widest font-medium text-brand-dark">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Unwavering Privacy
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Global Network
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Proactive Care
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Bespoke Solutions
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
