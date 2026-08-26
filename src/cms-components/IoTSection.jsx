import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi } from 'lucide-react';

const IoTSection = () => {
  return (
    <section className="min-h-screen bg-cms-charcoal text-white py-24 px-4 md:px-8 flex flex-col items-center relative overflow-hidden">
      
      {/* Background Animated Connection Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M 100 100 C 300 100, 200 500, 500 500 S 700 100, 1000 300" 
              fill="transparent" 
              stroke="#ff5a00" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
             <motion.path 
              d="M 200 800 C 400 800, 500 300, 800 400 S 1000 600, 1200 200" 
              fill="transparent" 
              stroke="#00e5ff" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
            />
         </svg>
      </div>

      <div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[5rem] md:text-[8rem] leading-[0.85] font-bold tracking-tighter uppercase mb-6">
            Connected<br/>Ideas.
          </h2>
          <p className="font-mono text-sm uppercase tracking-widest text-cms-light-grey/60 max-w-lg mx-auto">
            Build smart devices that communicate, sense, and respond in real-time.
          </p>
        </div>

        {/* Central Visual */}
        <div className="relative w-full max-w-3xl aspect-square md:aspect-video mb-16">
          {/* Main Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cms-charcoal border border-cms-orange shadow-glow-orange rounded-3xl flex items-center justify-center z-20">
            <div className="text-center">
              <Wifi size={32} className="text-cms-orange mx-auto mb-2" />
              <span className="font-mono text-xs uppercase tracking-widest text-cms-orange">ESP32 Core</span>
            </div>
          </div>

          {/* Floating Satellites / Sensors */}
          {[
            { label: 'Wi-Fi', x: '10%', y: '20%' },
            { label: 'Bluetooth', x: '80%', y: '15%' },
            { label: 'Sensors', x: '15%', y: '80%' },
            { label: 'Cloud DB', x: '85%', y: '75%' },
            { label: 'Automation', x: '50%', y: '10%' },
          ].map((node, i) => (
            <motion.div 
              key={node.label}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              className="absolute px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full"
              style={{ left: node.x, top: node.y }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">{node.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-cms-orange text-white hover:bg-cms-amber transition-colors">
          <span className="text-xs font-mono uppercase tracking-widest">Explore IoT Projects</span>
          <ArrowRight size={16} />
        </button>

      </div>
    </section>
  );
};

export default IoTSection;
