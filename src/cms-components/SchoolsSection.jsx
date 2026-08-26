import React from 'react';
import { ArrowRight } from 'lucide-react';
import schoolsImg from '../assets/schools_lab.jpg';

const SchoolsSection = () => {
  return (
    <section className="bg-cms-warm-white py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-[4rem] md:text-[7rem] leading-[0.85] font-bold tracking-tighter uppercase mb-8 text-cms-black">
            Bring STEM<br/>To Your<br/>School.
          </h2>
          
          <div className="flex flex-col gap-4 mb-12">
            {['STEM Labs', 'Robotics Workshops', 'Arduino Programs', 'IoT Programs', 'AI & Coding', 'Student Projects'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-xl font-mono uppercase tracking-widest text-cms-charcoal/80">
                <div className="w-2 h-2 bg-cms-orange rounded-full"></div>
                {item}
              </div>
            ))}
          </div>

          <button className="flex items-center gap-4 px-8 py-4 rounded-full border border-cms-black text-cms-black hover:bg-cms-black hover:text-white transition-all">
            <span className="text-xs font-mono uppercase tracking-widest">Partner With Us</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <div className="aspect-square bg-cms-light-grey rounded-4xl border-thin shadow-2xl relative overflow-hidden flex items-center justify-center">
            {/* Image Placeholder */}
            <img src={schoolsImg} alt="STEM Robotics Lab" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SchoolsSection;
