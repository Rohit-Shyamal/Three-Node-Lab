import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import arduinoImg from '../assets/arduino_board.jpg';

const ArduinoSection = () => {
  return (
    <section className="min-h-screen bg-cms-warm-white py-24 px-4 md:px-8 flex flex-col items-center border-t border-black/5">
      <div className="w-full max-w-7xl relative">
        
        {/* Editorial Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-[6rem] md:text-[10rem] leading-[0.8] font-bold tracking-tighter uppercase text-cms-black">
            Arduino
          </h2>
          <div className="max-w-xs text-right">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Start with a board.<br/>End with an idea.</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/50">
              The foundation of modern interactive electronics.
            </p>
          </div>
        </div>

        {/* Central Visual Area */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          {/* Main Arduino 3D Placeholder */}
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-64 h-80 md:w-96 md:h-[28rem] rounded-2xl shadow-2xl flex items-center justify-center relative z-10 overflow-hidden"
          >
            <img src={arduinoImg} alt="Arduino Board" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" decoding="async" />
          </motion.div>

          {/* Floating Technical Specs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <div className="absolute top-1/4 left-0 md:left-12 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-white px-3 py-1 rounded-full border-thin">Microcontroller</span>
              <div className="w-12 md:w-24 h-[1px] bg-black/20 hidden md:block"></div>
            </div>
            
            {/* Bottom Left */}
            <div className="absolute bottom-1/4 left-4 md:left-24 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-white px-3 py-1 rounded-full border-thin">Sensors & Modules</span>
              <div className="w-12 h-[1px] bg-black/20 hidden md:block"></div>
            </div>

            {/* Top Right */}
            <div className="absolute top-1/3 right-0 md:right-12 flex items-center gap-4">
              <div className="w-12 md:w-24 h-[1px] bg-black/20 hidden md:block"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-white px-3 py-1 rounded-full border-thin">C++ Programming</span>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-1/3 right-4 md:right-24 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-black/20 hidden md:block"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-white px-3 py-1 rounded-full border-thin">Motor Control</span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-4 px-8 py-4 rounded-full border border-cms-black text-cms-black hover:bg-cms-black hover:text-white transition-all">
            <span className="text-xs font-mono uppercase tracking-widest">Explore Arduino Projects</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ArduinoSection;
