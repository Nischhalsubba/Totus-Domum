import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import MagneticButton from './MagneticButton';

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                {SERVICES.map((service, idx) => (
                    <motion.div 
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="group relative bg-white h-[650px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                    >
                        {/* Image Area - Top 60% */}
                        <div className="h-[60%] overflow-hidden relative">
                             <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                             <motion.img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
                            />
                            
                            {/* Number Tag */}
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-3 py-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-dark">0{idx + 1}</span>
                            </div>
                        </div>

                        {/* Content Area - Bottom 40% */}
                        <div className="h-[40%] p-8 md:p-10 flex flex-col justify-between relative bg-white">
                            <div>
                                <h3 className="font-serif text-3xl text-brand-dark mb-4 group-hover:text-brand-gold transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">View Service</span>
                                <MagneticButton strength={5}>
                                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                        <ArrowUpRight className="w-4 h-4" />
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