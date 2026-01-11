
import React from 'react';
import { LogoFull } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-8 border-t border-gray-200">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                <div className="mb-12 md:mb-0">
                    <LogoFull color="text-brand-dark" />
                    <p className="mt-6 text-gray-600 font-normal text-sm max-w-xs leading-relaxed">
                        The premier lifestyle and property management service for Malta's most discerning residents.
                    </p>
                </div>
                
                <div className="flex gap-16 md:gap-24">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark mb-6">Menu</h4>
                        <ul className="space-y-4 text-xs tracking-widest text-gray-600 uppercase">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Philosophy</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark mb-6">Social</h4>
                        <ul className="space-y-4 text-xs tracking-widest text-gray-600 uppercase">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-[10px] uppercase tracking-widest text-gray-500">
                <p>&copy; {new Date().getFullYear()} Totus Domum. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-brand-dark">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-dark">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
