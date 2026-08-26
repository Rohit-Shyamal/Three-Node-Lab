import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import roboticsImg from '../assets/robotics_arm.jpg';

const RoboticsSection = () => {
  return (
    <section className="min-h-screen bg-cms-off-white py-24 px-4 md:px-8 flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-7xl relative flex flex-col md:flex-row items-center">
        
        {/* Huge Typography Background (Left Side) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10 mb-12 md:mb-0">
          <h2 className="text-[6rem] md:text-[10rem] leading-[0.8] font-bold tracking-tighter uppercase text-cms-black">
            Robots<br/>That<br/>Move.
          </h2>
          <div className="mt-12">
            <button className="flex items-center gap-4 px-8 py-4 rounded-full border border-cms-black text-cms-black hover:bg-cms-black hover:text-white transition-all">
              <span className="text-xs font-mono uppercase tracking-widest">Explore Robotics</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 3D Visual & Annotations (Right Side) */}
        <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center">
          
          {/* Main Robot Object */}
          <motion.div 
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-md aspect-square rounded-full border border-white/50 shadow-2xl flex items-center justify-center relative z-20 overflow-hidden"
          >
            <img src={roboticsImg} alt="Robotics Arm" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" decoding="async" />
          </motion.div>

          {/* Floating Annotations */}
          {[
            { label: 'DC Motors', top: '15%', left: '10%' },
            { label: 'Ultrasonic Sensor', top: '30%', right: '5%' },
            { label: 'Servo Motors', bottom: '25%', left: '5%' },
            { label: 'Motor Driver', bottom: '40%', right: '10%' },
            { label: 'Power System', bottom: '10%', left: '50%' },
          ].map((anno, i) => (
            <motion.div
              key={anno.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="absolute z-30 flex items-center gap-2"
              style={{ top: anno.top, left: anno.left, right: anno.right, bottom: anno.bottom }}
            >
              <div className="w-2 h-2 rounded-full bg-cms-orange"></div>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded border-thin font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">
                {anno.label}
              </span>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default RoboticsSection;
