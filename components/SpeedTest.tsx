import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { ArrowDown, ArrowUp, Zap } from 'lucide-react';
import Button from './ui/Button';

const SpeedTest: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [data, setData] = useState<{ value: number }[]>([]);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isTesting) {
      let interval: any;
      let counter = 0;
      
      // Reset
      setData(Array(20).fill({ value: 0 }));
      setDownloadSpeed(0);
      setUploadSpeed(0);
      setPing(45);

      interval = setInterval(() => {
        counter++;
        
        // Simulate Ping Drop
        setPing(prev => Math.max(12, prev - 1));

        // Simulate Speed Ramp
        if (counter < 40) {
            const newSpeed = Math.floor(Math.random() * 100) + (counter * 20);
            const clampedSpeed = Math.min(newSpeed, 850 + Math.random() * 100);
            
            setDownloadSpeed(clampedSpeed);
            setUploadSpeed(Math.floor(clampedSpeed * 0.8));
            
            setData(prev => {
                const newData = [...prev.slice(1), { value: clampedSpeed }];
                return newData;
            });
        } else {
            setIsTesting(false);
            clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isTesting]);

  const startTest = () => {
    setIsTesting(true);
  };

  return (
    <section className="py-24 bg-brand-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-semibold mb-4 border border-brand-500/20"
                >
                    <Zap className="w-4 h-4" /> Lighting Fast Protocol
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Don't compromise speed for security.
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                    Our proprietary WireGuard® implementation ensures you get maximum throughput. 
                    Whether you're downloading 4K content or gaming competitively, TsvVpn keeps up.
                </p>
                <ul className="space-y-4 mb-8">
                    {["Unlimited Bandwidth", "No ISP Throttling", "Latency Optimized Routing"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-brand-400" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
                <Button onClick={startTest} disabled={isTesting}>
                   {isTesting ? 'Running Test...' : 'Run Live Speed Test'}
                </Button>
            </div>

            {/* Speed Gauge UI */}
            <div className="relative">
                <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full" />
                <motion.div 
                    className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <div className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                                <ArrowDown className="w-4 h-4 text-brand-400" /> DOWNLOAD
                            </div>
                            <div className="text-5xl font-mono font-bold text-white tabular-nums">
                                {Math.floor(downloadSpeed)} <span className="text-xl text-gray-500 font-sans font-normal">Mbps</span>
                            </div>
                        </div>
                        <div className="text-right">
                             <div className="text-gray-400 text-sm mb-1 flex items-center justify-end gap-2">
                                <ArrowUp className="w-4 h-4 text-purple-400" /> UPLOAD
                            </div>
                            <div className="text-3xl font-mono font-bold text-gray-300 tabular-nums">
                                {Math.floor(uploadSpeed)} <span className="text-sm text-gray-500 font-sans font-normal">Mbps</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-48 w-full">
                        {mounted && (
                            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <YAxis hide domain={[0, 1000]} />
                                    <Area 
                                        type="monotone" 
                                        dataKey="value" 
                                        stroke="#38bdf8" 
                                        strokeWidth={3}
                                        fillOpacity={1} 
                                        fill="url(#colorSpeed)" 
                                        isAnimationActive={false}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${isTesting ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                            <span className="text-sm text-gray-400">
                                {isTesting ? 'Connected: London - UK South' : 'Server: London - UK South'}
                            </span>
                        </div>
                        <div className="text-sm font-mono text-brand-300">
                            PING: {ping}ms
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedTest;