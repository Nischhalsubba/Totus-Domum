
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import MagneticButton from './MagneticButton';

const Services: React.FC = () => {
  const containerRef = useRef(null);
  // Add a slight scroll parallax to the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.div 
                style={{ y }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                {SERVICES.map((service, idx) => (
                    <motion.div 
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { 
                                opacity: 1, 
                                y: 0, 
                                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                            }
                        }}
                        whileHover={{ y: -15, transition: { duration: 0.5, ease: "easeOut" } }}
                        className="group relative bg-white h-[650px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-700"
                    >
                        {/* Image Area - Top 60% */}
                        <div className="h-[60%] overflow-hidden relative">
                             <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-700 z-10 mix-blend-multiply"></div>
                             
                             <motion.img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                            
                            {/* Number Tag */}
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-dark">0{idx + 1}</span>
                            </div>
                        </div>

                        {/* Content Area - Bottom 40% */}
                        <div className="h-[40%] p-8 md:p-10 flex flex-col justify-between relative bg-white z-20">
                            <div>
                                <h3 className="font-serif text-3xl text-brand-dark mb-4 group-hover:text-brand-gold transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-brand-dark transition-colors duration-300">View Service</span>
                                <MagneticButton strength={5}>
                                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                                    </div>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}

export default Services;
