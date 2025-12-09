import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServerLocation } from '../types';

const locations: ServerLocation[] = [
  { id: 'uk', name: 'London, UK', top: '23%', left: '49%' },
  { id: 'us-e', name: 'New York, USA', top: '28%', left: '29%' },
  { id: 'us-w', name: 'Los Angeles, USA', top: '32%', left: '15%' },
  { id: 'de', name: 'Frankfurt, DE', top: '25%', left: '52%' },
  { id: 'jp', name: 'Tokyo, JP', top: '30%', left: '85%' },
  { id: 'sg', name: 'Singapore', top: '55%', left: '76%' },
  { id: 'au', name: 'Sydney, AU', top: '75%', left: '88%' },
  { id: 'br', name: 'São Paulo, BR', top: '65%', left: '33%' },
];

const ServerMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section id="servers" className="py-24 bg-black relative overflow-hidden flex-grow flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Global Network</h2>
          <p className="text-gray-400">6,000+ Servers in 90 Countries. Always nearby.</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[1.8/1] bg-[#0a0a0a] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group">
            {/* Map background - Using a reliable Wikimedia SVG with better opacity/fallback */}
            <div className="absolute inset-0 bg-brand-950/20" /> {/* Fallback color */}
            <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center transition-opacity duration-1000"
                style={{
                    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                    filter: 'invert(1) grayscale(1) contrast(1.2)'
                }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            {/* Server Nodes */}
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="absolute w-4 h-4 -ml-2 -mt-2 cursor-pointer z-10"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-500 border-2 border-black" />
                
                <AnimatePresence>
                  {activeLocation === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-white rounded-lg shadow-lg text-black text-xs font-bold whitespace-nowrap z-20"
                    >
                      {loc.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Connection Lines (Cosmetic) */}
            <svg className="absolute inset-0 pointer-events-none opacity-20">
               <path d="M 500 200 Q 300 100 180 280" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
               <path d="M 500 200 Q 800 150 900 300" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5,5" className="animate-[dash_25s_linear_infinite]" />
            </svg>
        </div>
      </div>
    </section>
  );
};

export default ServerMap;