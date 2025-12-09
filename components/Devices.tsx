import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Laptop, Chrome, Command } from 'lucide-react';

const Devices: React.FC = () => {
  const devices = [
    { name: "Windows", icon: Monitor },
    { name: "macOS", icon: Command },
    { name: "iOS", icon: Smartphone },
    { name: "Android", icon: Tablet },
    { name: "Linux", icon: Laptop },
    { name: "Chrome", icon: Chrome },
  ];

  return (
    <section className="py-20 bg-brand-950 border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">One Subscription. <span className="text-brand-400">Any Device.</span></h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-brand-500/20 group-hover:border-brand-500/50 transition-all duration-300">
                <device.icon className="w-8 h-8" />
              </div>
              <span className="font-medium">{device.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;