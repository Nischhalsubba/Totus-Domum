import React from 'react';

const ColorCard: React.FC<{ name: string; hex: string; rgb: string; cmyk: string }> = ({ name, hex, rgb, cmyk }) => (
  <div className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full mb-4 shadow-inner" style={{ backgroundColor: hex }}></div>
    <h3 className="font-serif text-xl text-brand-dark mb-1">{name}</h3>
    <p className="font-sans text-brand-gold font-bold mb-4">{hex}</p>
    
    <div className="text-xs text-gray-500 space-y-1 font-mono">
      <p>RGB: {rgb}</p>
      <p>CMYK: {cmyk}</p>
    </div>
  </div>
);

const BrandSpecs: React.FC = () => {
  return (
    <div className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brand-dark mb-4">Logo Brand Identity</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Per your request for the trademark registration, here are the precise color values used in the logo composition.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ColorCard 
                name="Totus Gold" 
                hex="#B08D55" 
                rgb="176, 141, 85" 
                cmyk="30, 40, 75, 5" 
            />
            <ColorCard 
                name="Charcoal Black" 
                hex="#1A1A1A" 
                rgb="26, 26, 26" 
                cmyk="0, 0, 0, 90" 
            />
             <ColorCard 
                name="Stone White" 
                hex="#F9F9F9" 
                rgb="249, 249, 249" 
                cmyk="0, 0, 0, 2" 
            />
        </div>
      </div>
    </div>
  );
};

export default BrandSpecs;