import React from 'react';
import { motion } from 'framer-motion';
import Pricing from './Pricing';
import Comparison from './Comparison';
import FAQ from './FAQ';
import { ShieldCheck, RefreshCw, CreditCard, Lock } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-brand-950 py-16 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plans & <span className="text-brand-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Get the world's fastest VPN at an unbeatable price. <br className="hidden md:block" />
              Secure your digital life today with our 30-day money-back guarantee.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Pricing Cards */}
      <Pricing />

      {/* Money-Back Guarantee Section */}
      <section className="py-20 bg-gradient-to-b from-black to-brand-900/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            {/* Background shimmer */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="shrink-0 p-6 rounded-full bg-brand-500/20 border border-brand-500/30 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
              <ShieldCheck className="w-16 h-16 text-brand-400" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
              <p className="text-gray-400 mb-6 text-lg">
                We're confident you'll love TsvVpn. If you're not completely satisfied within your first 30 days, we'll refund your money. No hassle, no questions asked.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-brand-400" /> Automated refund
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-brand-400" /> Secure payment
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand-400" /> Cancel anytime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <Comparison />
      
      {/* FAQ Section */}
      <div className="bg-brand-950">
          <FAQ />
      </div>
    </div>
  );
};

export default PricingPage;