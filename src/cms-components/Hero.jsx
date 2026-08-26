import React from 'react';
import { Menu, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero_3d.jpg';

const Hero = ({ onOpenNav }) => {
  return (
    <section className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-cms-warm-white relative overflow-hidden">
      
      {/* Container matching 85-90% viewport */}
      <div className="w-full h-[90vh] max-w-7xl relative border-thin rounded-4xl md:rounded-5xl shadow-soft bg-cms-off-white overflow-hidden flex flex-col">
        
        {/* Glow emerging from bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cms-orange/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Content */}
        <div className="flex-1 w-full flex flex-col md:flex-row relative z-10 p-8">
          
          {/* Left Typography */}
          <div className="w-full md:w-2/5 flex flex-col justify-center relative z-20">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-[8rem] leading-[0.85] font-bold tracking-tighter uppercase text-cms-charcoal"
            >
              Turn<br />Ideas<br />Into<br />Real Projects
            </motion.h2>
          </div>

          {/* Central 3D Visual (Placeholder) */}
          <div className="w-full md:w-3/5 h-full relative flex items-center justify-center">
            
            {/* Background oversized text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 opacity-[0.03]">
              <h1 className="text-[15rem] leading-[0.8] font-bold tracking-tighter uppercase text-cms-black writing-vertical text-center break-words w-min">
                THREE NODE LAB
              </h1>
            </div>

            {/* Simulated Floating 3D Object */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full shadow-2xl border-thin flex items-center justify-center overflow-hidden"
            >
              <img src={heroImg} alt="Futuristic 3D Arduino" className="w-full h-full object-cover mix-blend-multiply" />
            </motion.div>
            
            {/* Floating Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 max-w-[220px] p-4 rounded-2xl bg-white/70 backdrop-blur-md border-thin z-20"
            >
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Learn By Building</h4>
              <p className="text-[10px] text-cms-charcoal/80 leading-relaxed font-mono">
                Hands-on Arduino, robotics and IoT projects designed for practical learning.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-12 right-0 md:right-12 max-w-[220px] p-4 rounded-2xl bg-white/70 backdrop-blur-md border-thin z-20"
            >
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Build With Us</h4>
              <p className="text-[10px] text-cms-charcoal/80 leading-relaxed font-mono">
                Websites, IoT systems, automation and custom technology solutions.
              </p>
            </motion.div>

          </div>
          
        </div>

        {/* Right Side Index */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[10px] font-mono uppercase tracking-widest text-cms-charcoal/40 z-20">
          <div className="flex items-center gap-4 text-cms-charcoal font-bold">
            <span className="w-4 h-[1px] bg-cms-charcoal"></span>
            01 — Projects
          </div>
          <div className="hover:text-cms-charcoal transition-colors cursor-pointer pl-8">02 — Robotics</div>
          <div className="hover:text-cms-charcoal transition-colors cursor-pointer pl-8">03 — IoT</div>
          <div className="hover:text-cms-charcoal transition-colors cursor-pointer pl-8">04 — Books</div>
          <div className="hover:text-cms-charcoal transition-colors cursor-pointer pl-8">05 — Business</div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <button className="w-12 h-12 rounded-2xl border-thin flex items-center justify-center hover:bg-cms-light-grey transition-colors bg-white/50 backdrop-blur-sm">
            <ArrowDown size={18} className="text-cms-charcoal" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
