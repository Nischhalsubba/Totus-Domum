import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
            
            {/* Left Title Block */}
            <div className="md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">
                        Bespoke Private Client Services
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-brand-dark leading-tight">
                        Excellence in <br />
                        <span className="italic font-serif text-brand-gold">Every Detail</span>
                    </h2>
                </motion.div>
            </div>

            {/* Right Text Block */}
            <div className="md:w-1/2 md:pt-16">
                 <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative pl-8 border-l border-brand-gold/30"
                 >
                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                        We bridge the gap between <span className="text-brand-dark font-normal">complex demands</span> and <span className="font-cursive text-3xl text-brand-gold mx-1">seamless living.</span>
                    </p>
                    <p className="text-gray-500 font-light leading-relaxed">
                        From managing global property portfolios to coordinating executive schedules, we handle the arduous tasks with empathy and precision. We operate with the understanding that your time is the ultimate luxury.
                    </p>
                 </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;