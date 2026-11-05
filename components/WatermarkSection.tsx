
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import { LogoIcon } from './Logo';

/**
 * The Watermark reveal effect, refined for a UHNW aesthetic with masked reveals.
 */
const WatermarkSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Extremely subtle parallax for the background logo
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.03, 0]); // Max opacity 0.03 (Very subtle)

  // Premium "Masked Reveal" Variants
  const maskRevealVariants: Variants = {
    hidden: { y: "110%" },
    visible: { 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-56 bg-white overflow-hidden flex items-center justify-center">
      
      {/* Background Watermark - Almost invisible texture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          style={{ y: bgY, rotate: bgRotate, opacity: bgOpacity }}
          className="w-[90%] max-w-[800px] aspect-square text-brand-dark blur-[2px]"
        >
          <LogoIcon className="w-full h-full" fill="currentColor" />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Subtitle with reveal */}
          <div className="overflow-hidden mb-8">
            <motion.span 
              variants={maskRevealVariants}
              className="block text-brand-gold font-sans uppercase tracking-[0.35em] text-[10px] font-bold"
            >
              Heritage & Trust
            </motion.span>
          </div>
          
          {/* Main Heading - Split for individual line animation */}
          <div className="relative mb-8">
            <div className="overflow-hidden">
                <motion.h2 
                    variants={maskRevealVariants}
                    className="text-4xl md:text-7xl font-serif text-brand-dark leading-[1.1]"
                >
                    A wealth of expertise
                </motion.h2>
            </div>
            
            {/* Cursive Text */}
            <div className="mt-2 md:mt-4 relative">
                <div className="overflow-visible px-4 py-2">
                    <motion.div 
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { 
                                y: 0, 
                                opacity: 1, 
                                transition: { duration: 1.5, ease: "easeOut" } 
                            }
                        }}
                        className="font-cursive text-5xl md:text-8xl text-brand-gold drop-shadow-sm"
                    >
                        spanning over 35 years
                    </motion.div>
                </div>
            </div>
          </div>

          {/* Vertical Line Divider - Draws Downwards */}
          <div className="h-24 overflow-hidden mb-10">
            <motion.div 
                variants={{
                    hidden: { y: "-100%" },
                    visible: { y: 0, transition: { duration: 1.2, ease: "easeInOut" } }
                }}
                className="w-px bg-brand-dark/20 h-full mx-auto"
            ></motion.div>
          </div>
          
          {/* Description Text */}
          <div className="max-w-3xl mx-auto">
             <div className="overflow-hidden">
                 <motion.p 
                    variants={maskRevealVariants}
                    className="text-xl md:text-2xl text-brand-charcoal/80 font-serif leading-relaxed text-balance"
                 >
                    We operate with the profound understanding that your home is not merely an asset to be managed, but a 
                 </motion.p>
             </div>
             
             {/* Highlighted text */}
             <div className="inline-block relative mt-2 overflow-visible">
                <div className="overflow-hidden">
                    <motion.span 
                        variants={maskRevealVariants}
                        className="text-brand-dark italic text-2xl md:text-3xl block"
                    >
                        legacy to be preserved.
                    </motion.span>
                </div>
                <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-brand-gold origin-left"
                />
             </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default WatermarkSection;
