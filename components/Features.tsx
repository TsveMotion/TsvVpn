import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Lock, Smartphone, Wifi, Gamepad2, Tv } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Zero-Log Policy",
    description: "We strictly do not track, collect, or share your private data. Your business is yours.",
    icon: Shield
  },
  {
    title: "Ultra-Fast Gateways",
    description: "10Gbps servers in UK & EU ensure buffer-free streaming and low-latency browsing.",
    icon: Zap
  },
  {
    title: "Streaming Unlocked",
    description: "Access Netflix, Disney+, Hulu, and Prime Video libraries from anywhere in the world.",
    icon: Tv
  },
  {
    title: "AES-256 Encryption",
    description: "The same encryption standard used by security experts and government agencies.",
    icon: Lock
  },
  {
    title: "Gaming Optimized",
    description: "Dedicated routing paths to major game servers (LoL, COD, Valorant) to reduce ping.",
    icon: Gamepad2
  },
  {
    title: "Public WiFi Protection",
    description: "Stay safe from hackers and snoopers on unsecured airport and cafe networks.",
    icon: Wifi
  },
  {
    title: "All Devices",
    description: "One subscription covers your PC, Mac, Phone, Tablet, and Router.",
    icon: Smartphone
  },
  {
    title: "Anti-DDoS",
    description: "Built-in protection against DDoS attacks, perfect for competitive gamers.",
    icon: Globe
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Features that <span className="text-brand-400">Empower You</span></h2>
          <p className="text-gray-400 text-lg">
            Everything you need for a secure, unrestricted internet experience packed into one sleek app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-900/50 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:shadow-[0_0_15px_#0ea5e9] transition-all duration-300">
                <feature.icon className="w-6 h-6 text-brand-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;