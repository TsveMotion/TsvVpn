import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Zap, ArrowRight, Download } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-brand-950">
        <div className="absolute inset-0 bg-hero-glow opacity-60" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* Floating Network Nodes Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-brand-400/20 rounded-full blur-xl"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                x: [null, (Math.random() - 0.5) * 50],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
              }}
            />
         ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 text-brand-300 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            New: v4.0 with Gaming Optimization
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Protection.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Speed.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Freedom.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Military-grade encryption, zero logs, global servers, and speed optimized for gaming & streaming. TsvVpn keeps you secure everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 w-5 h-5" />
              Download App
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-400" /> AES-256 Encryption
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-400" /> 90+ Countries
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-400" /> 10Gbps Servers
            </div>
          </div>
        </motion.div>

        {/* Visual Content - 3D Abstract Globe/Shield */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
            {/* Simulated 3D Element */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 rounded-full border border-brand-500/20 border-dashed"
                   />
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-4 rounded-full border border-brand-400/10"
                   />
                   
                   {/* Central Globe Core */}
                   <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-to-br from-brand-900 to-black shadow-[0_0_100px_rgba(14,165,233,0.3)] flex items-center justify-center border border-white/10 backdrop-blur-xl z-10">
                      <Shield className="w-24 h-24 text-brand-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                   </div>

                   {/* Orbiting Elements */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 z-20"
                   >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-brand-500 w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_0_20px_#0ea5e9]">
                       <span className="text-[10px] font-bold text-white">UK</span>
                     </div>
                   </motion.div>
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-12 z-20"
                   >
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-brand-400 w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_0_20px_#38bdf8]">
                        <span className="text-[10px] font-bold text-white">US</span>
                     </div>
                   </motion.div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;