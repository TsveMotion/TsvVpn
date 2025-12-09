import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SpeedTest from './components/SpeedTest';
import Pricing from './components/Pricing';
import PricingPage from './components/PricingPage';
import Comparison from './components/Comparison';
import Devices from './components/Devices';
import ServerMap from './components/ServerMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [route, setRoute] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setRoute(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#/features':
        return (
          <PageWrapper key="features">
            <div className="pt-20">
              <Features />
              <Comparison />
              <Devices />
            </div>
          </PageWrapper>
        );
      case '#/pricing':
        return (
          <PageWrapper key="pricing">
            <PricingPage />
          </PageWrapper>
        );
      case '#/servers':
        return (
          <PageWrapper key="servers">
             <div className="pt-20 min-h-screen flex flex-col">
              <ServerMap />
              <div className="container mx-auto px-4 py-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Optimized for Speed & Security</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our servers run on RAM-only infrastructure, ensuring your data is wiped with every reboot. 
                  Strategically placed in high-demand zones for low-latency gaming and 4K streaming.
                </p>
              </div>
            </div>
          </PageWrapper>
        );
      case '#/help':
        return (
          <PageWrapper key="help">
            <div className="pt-20 min-h-screen">
              <FAQ />
              <section className="py-20 bg-brand-950 text-center">
                <div className="container mx-auto px-4">
                  <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                  <p className="text-gray-400 mb-8">Our support team is available 24/7 to assist you.</p>
                  <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors">
                    Contact Support
                  </button>
                </div>
              </section>
            </div>
          </PageWrapper>
        );
      case '#/':
      default:
        return (
          <PageWrapper key="home">
            <Hero />
            
            {/* Trust Indicators Strip */}
            <div className="py-12 bg-black flex justify-center border-b border-white/5">
                <div className="text-center w-full px-4">
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Trusted by 100,000+ Users & Developers</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale select-none">
                        <span className="text-xl md:text-2xl font-bold font-serif">TechRadar</span>
                        <span className="text-xl md:text-2xl font-bold font-mono">PCGamer</span>
                        <span className="text-xl md:text-2xl font-bold">WIRED</span>
                        <span className="text-xl md:text-2xl font-bold font-sans tracking-tighter">TheVerge</span>
                        <span className="text-xl md:text-2xl font-bold font-serif italic">Forbes</span>
                    </div>
                </div>
            </div>

            <Features />
            <SpeedTest />
            <Pricing />
            <Comparison />
            <Devices />
            <ServerMap />
            <FAQ />
          </PageWrapper>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default App;