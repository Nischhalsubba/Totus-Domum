
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-charcoal text-brand-alabaster">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            
            <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20 pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-4">Expertise</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white">Curated Services</h2>
            </div>

            <motion.div style={{ x }} className="flex gap-8 md:gap-24 px-6 md:px-24 items-center h-full pt-32">
                <div className="w-[80vw] md:w-[30vw] shrink-0" />

                {SERVICES.map((service, idx) => (
                    <div key={idx} className="w-[85vw] md:w-[600px] shrink-0 group cursor-pointer">
                        <div className="aspect-[4/3] md:aspect-[16/9] w-full relative overflow-hidden mb-8 bg-black">
                            <motion.img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 border border-white/10 group-hover:border-brand-gold/50 transition-colors duration-500 z-10"></div>
                        </div>

                        <div className="flex flex-col items-start border-t border-white/10 pt-8 group-hover:border-brand-gold/30 transition-colors duration-500">
                            <span className="text-brand-gold font-mono text-sm mb-4">0{idx + 1}</span>
                            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-white group-hover:text-brand-gold transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="font-sans text-brand-alabaster/60 font-light text-sm md:text-base max-w-md leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white group-hover:gap-4 transition-all duration-300">
                                Discover <ArrowRight className="w-3 h-3 text-brand-gold" />
                            </span>
                        </div>
                    </div>
                ))}
                
                <div className="w-[20vw] shrink-0" />
            </motion.div>
        </div>
    </section>
  );
};

export default Services;
