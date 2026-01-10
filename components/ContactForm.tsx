import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
            
            {/* Left Info */}
            <div className="md:w-1/3">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl text-brand-dark mb-8"
                >
                    Let's Start the <br/>
                    <span className="font-cursive text-5xl md:text-6xl text-brand-gold">Conversation</span>
                </motion.h2>

                <p className="text-gray-500 font-light mb-12 leading-relaxed">
                    Whether you have a specific request or just want to explore how we can support you, I am here to listen.
                </p>

                <div className="space-y-8">
                    <div>
                        <h4 className="font-serif text-lg text-brand-dark mb-2">Email</h4>
                        <a href="mailto:info@totusdomum.com" className="text-brand-gold hover:text-brand-dark transition-colors border-b border-brand-gold/30 pb-1">info@totusdomum.com</a>
                    </div>
                    <div>
                        <h4 className="font-serif text-lg text-brand-dark mb-2">Phone</h4>
                        <p className="text-gray-600">+356 99 99 1972</p>
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div className="md:w-2/3 bg-white p-10 md:p-16 shadow-sm border border-gray-100">
                <form className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative">
                            <input 
                                type="text" 
                                id="firstName" 
                                className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-gold focus:outline-none bg-transparent placeholder-transparent transition-colors"
                                placeholder="First Name" 
                            />
                            <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-gold">
                                First Name <span className="text-brand-gold">*</span>
                            </label>
                        </div>
                        
                        <div className="relative">
                             <select id="service" className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-gold focus:outline-none bg-transparent">
                                <option value="">Select Service</option>
                                <option value="residence">Residence Management</option>
                                <option value="lifestyle">Lifestyle Support</option>
                                <option value="property">Property Search</option>
                             </select>
                             <label htmlFor="service" className="absolute left-0 -top-3.5 text-xs text-gray-400">
                                Select
                             </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-gold focus:outline-none bg-transparent placeholder-transparent"
                                placeholder="Email Address" 
                            />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-gold">
                                Email Address <span className="text-brand-gold">*</span>
                            </label>
                        </div>
                        <div className="relative">
                            <input 
                                type="tel" 
                                id="phone" 
                                className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-gold focus:outline-none bg-transparent placeholder-transparent"
                                placeholder="Phone Number" 
                            />
                            <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-gold">
                                Phone Number
                            </label>
                        </div>
                    </div>

                    <div className="relative">
                        <textarea 
                            id="message" 
                            rows={4}
                            className="peer w-full border border-gray-200 p-4 text-brand-dark focus:border-brand-gold focus:outline-none bg-transparent placeholder-transparent resize-none"
                            placeholder="Message" 
                        ></textarea>
                        <label htmlFor="message" className="absolute left-0 -top-6 text-xs text-gray-400">
                            Message
                        </label>
                        <div className="text-right mt-1 text-xs text-gray-300">0 / 180</div>
                    </div>

                    <button type="button" className="group flex items-center gap-4 bg-brand-gold text-white px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-brand-dark transition-colors duration-300">
                        Submit
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;