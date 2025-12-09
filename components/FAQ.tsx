import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  { question: "Do you really keep zero logs?", answer: "Absolutely. We operate from a privacy-friendly jurisdiction and our RAM-only server architecture means data is wiped upon every reboot. We physically cannot hand over data we don't have." },
  { question: "Will using a VPN slow down my gaming?", answer: "TsvVpn is specifically optimized for gaming. In many cases, our direct routing to game servers can actually lower your ping compared to your ISP's default routing." },
  { question: "Does it work with Netflix & Hulu?", answer: "Yes! We constantly update our residential IP pools to bypass geo-blocks on Netflix, Hulu, Disney+, BBC iPlayer, and Prime Video." },
  { question: "What is the refund policy?", answer: "We offer a 30-day money-back guarantee. If you're not 100% satisfied with the speed or service, you get a full refund. No questions asked." },
  { question: "Can I use it for torrenting/P2P?", answer: "Yes, P2P traffic is allowed on all our servers. We also offer specialized P2P servers for maximum download speeds." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="help" className="py-24 bg-black min-h-[70vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-white/20 transition-colors">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-200">{item.question}</span>
                {activeIndex === index ? <Minus className="text-brand-400" /> : <Plus className="text-gray-500" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;