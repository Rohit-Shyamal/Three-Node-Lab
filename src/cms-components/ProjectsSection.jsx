import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section className="min-h-screen bg-cms-off-white py-24 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl md:text-[6rem] leading-[0.9] font-bold uppercase tracking-tighter">
            Build<br/>Something<br/>Real.
          </h2>
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-cms-charcoal/60 max-w-md">
            Projects designed to turn curiosity into working technology.
          </p>
        </div>

        {/* Featured Project Showcase */}
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-4xl md:rounded-5xl border-thin bg-cms-warm-white overflow-hidden group">
          
          {/* Main Visual */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-2xl aspect-video rounded-3xl border-thin shadow-2xl flex items-center justify-center relative z-10 overflow-hidden"
            >
               <img src="/assets/projects_smarthome.jpg" alt="Smart Home Automation" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Large Background Project Title */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
            <h3 className="text-[8rem] md:text-[12rem] font-bold tracking-tighter uppercase whitespace-nowrap">
              Smart Home
            </h3>
          </div>

          {/* Technical Labels */}
          <div className="absolute top-8 left-8 flex flex-wrap gap-2 z-20">
            {['Arduino', 'Sensors', 'Relay', 'IoT', 'Automation'].map(label => (
              <span key={label} className="px-4 py-2 rounded-full border-thin bg-white/50 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest">
                {label}
              </span>
            ))}
          </div>

          {/* Project Info & CTA */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
            <div>
              <p className="font-mono text-xs mb-2 text-cms-charcoal/60">01 / 06</p>
              <h4 className="text-2xl md:text-4xl font-bold uppercase">Smart Home Automation</h4>
            </div>
            
            <button className="flex items-center gap-4 bg-cms-black text-white px-6 py-4 rounded-full hover:bg-cms-orange transition-colors">
              <span className="text-xs font-mono uppercase tracking-widest">Explore Project</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
