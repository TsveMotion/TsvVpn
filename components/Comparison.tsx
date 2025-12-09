import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why TsvVpn Stands Out</h2>
          <p className="text-gray-400">See how we stack up against the competition.</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] max-w-5xl mx-auto bg-white/5 rounded-3xl border border-white/10 p-8">
            <div className="grid grid-cols-4 gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center font-bold text-xl text-brand-400">TsvVpn</div>
              <div className="col-span-1 text-center font-semibold text-gray-400">ExpressVPN</div>
              <div className="col-span-1 text-center font-semibold text-gray-400">NordVPN</div>
            </div>

            {[
              { label: "Price per month (Yearly)", tsv: "£3.99", express: "£5.32", nord: "£4.50" },
              { label: "Gaming Optimized Routes", tsv: true, express: false, nord: false },
              { label: "Simultaneous Devices", tsv: "10", express: "8", nord: "6" },
              { label: "Anti-DDoS Included", tsv: true, express: false, nord: false },
              { label: "Lifetime Plan Option", tsv: true, express: false, nord: false },
              { label: "UK-Based 10Gbps Nodes", tsv: true, express: true, nord: true },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 py-4 items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2">
                <div className="col-span-1 text-gray-300 font-medium">{row.label}</div>
                <div className="col-span-1 flex justify-center text-white font-bold text-lg">
                  {typeof row.tsv === 'boolean' ? (row.tsv ? <Check className="text-brand-400" /> : <X className="text-red-500"/>) : row.tsv}
                </div>
                <div className="col-span-1 flex justify-center text-gray-500">
                   {typeof row.express === 'boolean' ? (row.express ? <Check className="text-white" /> : <Minus className="text-gray-600"/>) : row.express}
                </div>
                <div className="col-span-1 flex justify-center text-gray-500">
                    {typeof row.nord === 'boolean' ? (row.nord ? <Check className="text-white" /> : <Minus className="text-gray-600"/>) : row.nord}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;