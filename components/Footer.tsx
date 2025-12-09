import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 pt-20 pb-10 border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white text-2xl font-bold mb-6">
              <Shield className="fill-brand-500 text-brand-500" /> TsvVpn
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Reclaiming your right to privacy. Fast, secure, and available everywhere.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-500 transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-500 transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-500 transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Download</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Server List</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Features</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Live Chat</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Setup Guides</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-brand-400 cursor-pointer transition-colors">Warrant Canary</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            &copy; {new Date().getFullYear()} TsvVpn.com. All rights reserved.
          </div>
          <div className="flex gap-4 items-center">
             <span className="px-2 py-1 bg-white/5 rounded border border-white/10">English (UK)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;