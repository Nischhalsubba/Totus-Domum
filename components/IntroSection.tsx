
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Parallax for side elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax values
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bigTextY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Background Decor - Massive Watermark Parallax */}
      <motion.div 
        style={{ y: bigTextY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none"
      >
        <span className="font-serif text-[25vw] leading-none text-brand-dark whitespace-nowrap">
            EXCELLENCE
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
            
            {/* Top Label with Vertical Line */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isInView ? { opacity: 1, height: "auto" } : {}}
                transition={{ duration: 1, delay: 0.1 }}
                className="mb-12 flex flex-col items-center gap-6"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                    The Standard
                </span>
                <motion.div 
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 64 } : {}}
                    transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                    className="w-px bg-brand-gold/40"
                ></motion.div>
            </motion.div>

            {/* Main Title - Huge & Elegant */}
            <div className="relative mb-20 md:mb-32">
                {/* 'Excellence in' - Split Masked Reveal */}
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} // Luxury ease
                        className="font-serif text-6xl md:text-8xl lg:text-9xl text-brand-dark leading-[0.9] tracking-tight"
                    >
                        Excellence in
                    </motion.h2>
                </div>

                {/* 'Every Detail' - Sophisticated Reveal */}
                <div className="relative mt-2 md:-mt-4">
                    <motion.div
                        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                        animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" } : {}}
                        transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block"
                    >
                        <h2 className="font-cursive text-7xl md:text-9xl lg:text-[11rem] text-brand-gold leading-none pr-8 py-4 drop-shadow-sm">
                            Every Detail
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Split Content with Parallax */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto text-left w-full items-start">
                {/* Left: Bold Statement */}
                <motion.div 
                    className="md:col-span-5 md:pl-8 relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                >
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/30 -translate-x-4 -translate-y-4"></div>
                    
                    <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-gray mb-8">
                        Our Promise
                    </h3>
                    <p className="font-serif text-3xl md:text-4xl text-brand-dark leading-tight">
                        We bridge the gap between <span className="block italic text-brand-gold/80 mt-1">complex demands</span> and seamless living.
                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div 
                    className="hidden md:block md:col-span-2 h-32 w-px bg-brand-dark/10 mx-auto mt-8"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Right: Detailed Paragraph */}
                <motion.div 
                    style={{ y: yParallax }}
                    className="md:col-span-5 md:pr-8 md:pt-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.3 }}
                >
                    <p className="text-brand-charcoal/70 font-light leading-relaxed text-base md:text-lg mb-8">
                        From managing global property portfolios to coordinating executive schedules, we handle the arduous tasks with empathy and precision. We operate with the understanding that your time is the ultimate luxury.
                    </p>
                    
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-all duration-300">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-dark group-hover:text-white transition-colors">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark group-hover:text-brand-gold transition-colors">
                            Our Philosophy
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
