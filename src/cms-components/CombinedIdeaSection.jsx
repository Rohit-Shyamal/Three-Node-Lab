import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react';

const CombinedIdeaSection = ({ onStartProject }) => {
  const services = [
    { num: '01', title: 'Website', desc: 'Business websites and e-commerce platforms.', x: '10%', y: '10%', delay: 0 },
    { num: '02', title: 'Software', desc: 'Custom web applications and internal dashboards.', x: '70%', y: '20%', delay: 0.5 },
    { num: '03', title: 'IoT', desc: 'Connected devices and smart hardware systems.', x: '15%', y: '70%', delay: 1 },
    { num: '04', title: 'Automation', desc: 'Technology-driven business automation workflows.', x: '65%', y: '80%', delay: 1.5 }
  ];

  return (
    <section className="bg-cms-charcoal text-white py-32 px-4 md:px-8 relative overflow-hidden">
      
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-mono text-cms-orange mb-4 uppercase tracking-widest">
            Need a Custom Solution?
          </h2>
          <h3 className="text-[4rem] md:text-[8rem] leading-[0.85] font-bold tracking-tighter uppercase mb-8">
            Hire Us to<br/>Build It.
          </h3>
          <p className="text-lg md:text-xl text-cms-light-grey/70 max-w-2xl mx-auto font-light">
            We build websites, applications, IoT systems, and technology solutions for businesses and startups looking to innovate.
          </p>
        </div>

        {/* Central Visual Area */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1] mb-24 hidden md:block">
          {/* Main Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cms-charcoal border border-cms-orange shadow-glow-orange rounded-3xl flex items-center justify-center z-20">
            <div className="text-center">
              <Cpu size={40} className="text-cms-orange mx-auto mb-2" />
              <span className="font-mono text-xs uppercase tracking-widest text-cms-orange">Innovation Core</span>
            </div>
          </div>

          {/* Floating Service Satellites */}
          {services.map((service) => (
            <motion.div 
              key={service.num}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: service.delay, ease: "easeInOut" }}
              className="absolute p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl max-w-[200px]"
              style={{ left: service.x, top: service.y }}
            >
              <div className="font-mono text-cms-orange text-sm mb-2">{service.num}</div>
              <h4 className="text-lg font-bold uppercase mb-1">{service.title}</h4>
            </motion.div>
          ))}
        </div>

        {/* Services Grid (Mobile & Desktop Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-4xl overflow-hidden mb-16 relative z-20">
          {services.map((service) => (
            <div key={service.num} className="bg-cms-charcoal p-12 hover:bg-white/5 transition-colors group">
              <div className="font-mono text-cms-orange text-xl mb-12">{service.num}</div>
              <h4 className="text-3xl md:text-4xl font-bold uppercase mb-4">{service.title}</h4>
              <p className="text-cms-light-grey/60 font-mono text-sm leading-relaxed max-w-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center relative z-20">
          <button 
            onClick={onStartProject}
            className="group flex items-center justify-between w-full max-w-md p-6 bg-cms-orange text-white rounded-full hover:bg-cms-amber transition-colors text-xl font-bold uppercase tracking-tight"
          >
            <span>Hire Us Now</span>
            <div className="w-12 h-12 bg-white text-cms-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={24} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CombinedIdeaSection;
