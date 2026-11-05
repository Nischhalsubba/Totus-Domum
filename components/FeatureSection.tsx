
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FeatureSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-brand-dark">
        {/* Parallax Background */}
        <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0 opacity-60"
        >
            <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2560&auto=format&fit=crop" 
                alt="Luxury Doorway" 
                className="w-full h-[120%] object-cover brightness-[0.6]"
            />
        </motion.div>

        {/* Content Box */}
        <div className="relative z-10 container mx-auto px-6 flex justify-start md:justify-end">
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/95 backdrop-blur-md p-12 md:p-20 max-w-xl shadow-2xl border-l-4 border-brand-gold"
            >
                <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Custom Tailored</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
                    Your Home, <br/>
                    <span className="italic text-brand-gold">Managed Your Way</span>
                </h2>
                <p className="text-gray-600 mb-10 font-light leading-relaxed">
                    We know every home is different. That is why we customize our service to give you exactly what you need, ensuring you have reliable support 365 days a year.
                </p>
                <motion.button 
                    whileHover={{ x: 10 }}
                    className="text-[11px] uppercase tracking-[0.25em] font-bold text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-all"
                >
                    Get in Touch
                </motion.button>
            </motion.div>
        </div>
    </section>
  );
};

export default FeatureSection;
