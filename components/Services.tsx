import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {SERVICES.map((service, idx) => (
                    <motion.div 
                        key={idx} 
                        className="group relative h-[600px] overflow-hidden cursor-interactive"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{
                            opacity: hoveredIndex !== null && hoveredIndex !== idx ? 0.4 : 1,
                            scale: hoveredIndex === idx ? 1.02 : 1
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                        }}
                    >
                        {/* Image Container */}
                        <div className="absolute inset-0 bg-brand-dark overflow-hidden">
                             <motion.img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.2 }}
                                animate={{ scale: hoveredIndex === idx ? 1.1 : 1.2 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </div>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 text-white z-10 pb-20">
                            <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-6">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    0{idx + 1}
                                </span>
                                <h3 className="font-serif text-4xl mb-6 tracking-wide">{service.title}</h3>
                                
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: hoveredIndex === idx ? "auto" : 0, opacity: hoveredIndex === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="w-12 h-px bg-brand-gold mx-auto mb-6"></div>
                                    <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
                                        {service.description}
                                    </p>
                                </motion.div>
                            </div>
                            
                            <div className="absolute bottom-10 overflow-hidden">
                                <motion.div
                                    animate={{ y: hoveredIndex === idx ? 0 : 40, opacity: hoveredIndex === idx ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <span className="inline-flex items-center text-[10px] uppercase tracking-[0.25em] font-bold text-white border-b border-transparent hover:border-white transition-colors pb-1">
                                        Explore Service <ArrowRight className="ml-2 w-3 h-3"/>
                                    </span>
                                </motion.div>
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