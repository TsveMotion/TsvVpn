import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';
import Button from './ui/Button';

const plans: PricingPlan[] = [
  {
    name: "Monthly",
    price: "£9.99",
    period: "/mo",
    features: ["Unlimited Bandwidth", "5 Devices", "All Server Locations", "24/7 Support"],
  },
  {
    name: "Yearly",
    price: "£3.99",
    period: "/mo",
    features: ["Unlimited Bandwidth", "10 Devices", "Dedicated Gaming Nodes", "Anti-DDoS Protection", "Priority Support"],
    isPopular: true,
    highlight: "Save 60%"
  },
  {
    name: "Lifetime",
    price: "£199",
    period: "one-time",
    features: ["Unlimited Bandwidth", "Unlimited Devices", "Lifetime Updates", "VIP Servers", "Personal Account Manager"],
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing-plans" className="py-24 bg-black relative flex items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that fits your freedom.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.isPopular ? 'bg-brand-950/40 border-brand-500 shadow-[0_0_30px_rgba(14,165,233,0.15)] scale-105 z-10' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              {plan.highlight && !plan.isPopular && (
                 <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-white/10 text-xs text-white">
                    {plan.highlight}
                 </div>
              )}

              <h3 className="text-xl font-medium text-gray-300 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                fullWidth
                className={plan.isPopular ? 'shadow-lg shadow-brand-500/25' : ''}
              >
                Choose Plan
              </Button>
              
              {plan.name === 'Monthly' && (
                  <p className="text-center text-xs text-gray-500 mt-4">Billed monthly. Cancel anytime.</p>
              )}
               {plan.name === 'Yearly' && (
                  <p className="text-center text-xs text-gray-500 mt-4">Billed £47.88 yearly. 30-day guarantee.</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;