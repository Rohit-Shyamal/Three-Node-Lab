import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = ({ onStartProject }) => {
  return (
    <section className="min-h-screen bg-cms-warm-white flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cms-orange/20 rounded-t-full blur-[120px] pointer-events-none" />

      <div className="text-center z-10">
        <h2 className="text-[6rem] md:text-[12rem] leading-[0.8] font-bold tracking-tighter uppercase text-cms-black flex flex-col mb-16">
          <motion.span initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>Your Idea.</motion.span>
          <motion.span initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>Your Project.</motion.span>
          <motion.span initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="text-cms-orange">Your Future.</motion.span>
        </h2>

        <p className="font-mono text-sm uppercase tracking-widest text-cms-charcoal/40 mb-12">
          THREE NODE LAB
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 rounded-full border border-cms-black text-cms-black hover:bg-cms-black hover:text-white transition-all font-mono text-xs uppercase tracking-widest w-full md:w-auto">
            Explore Projects
          </button>
          <button onClick={onStartProject} className="px-8 py-4 rounded-full bg-cms-black text-white hover:bg-cms-orange transition-all font-mono text-xs uppercase tracking-widest w-full md:w-auto">
            Build With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
