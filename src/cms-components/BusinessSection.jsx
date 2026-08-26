import React from 'react';
import { ArrowRight } from 'lucide-react';

const BusinessSection = ({ onStartProject }) => {
  const services = [
    { num: '01', title: 'Website', desc: 'Business websites and e-commerce platforms.' },
    { num: '02', title: 'Software', desc: 'Custom web applications and internal dashboards.' },
    { num: '03', title: 'IoT', desc: 'Connected devices and smart hardware systems.' },
    { num: '04', title: 'Automation', desc: 'Technology-driven business automation workflows.' }
  ];

  return (
    <section className="bg-cms-charcoal text-white py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-mono text-cms-orange mb-4 uppercase tracking-widest">
            Have an idea?
          </h2>
          <h3 className="text-[4rem] md:text-[8rem] leading-[0.85] font-bold tracking-tighter uppercase mb-8">
            Let's<br/>Build It.
          </h3>
          <p className="text-lg md:text-xl text-cms-light-grey/70 max-w-2xl font-light">
            We build websites, applications, IoT systems, and technology solutions for businesses and startups looking to innovate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-4xl overflow-hidden mb-16">
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
        <div className="flex justify-center">
          <button 
            onClick={onStartProject}
            className="group flex items-center justify-between w-full max-w-md p-6 bg-cms-orange text-white rounded-full hover:bg-cms-amber transition-colors text-xl font-bold uppercase tracking-tight"
          >
            <span>Start A Project</span>
            <div className="w-12 h-12 bg-white text-cms-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={24} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
