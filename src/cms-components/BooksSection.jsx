import React from 'react';
import { ArrowRight } from 'lucide-react';

const books = [
  {
    title: 'Mastering Arduino',
    level: 'Beginner to Advanced',
    desc: 'The complete guide to understanding microcontrollers, sensors, and practical electronics.',
    price: '$29.99',
    category: 'Arduino'
  },
  {
    title: 'Robotics From Scratch',
    level: 'Intermediate',
    desc: 'Build your first autonomous robots. Learn motor control, kinematics, and sensor fusion.',
    price: '$34.99',
    category: 'Robotics'
  },
  {
    title: 'IoT & The ESP32',
    level: 'Advanced',
    desc: 'Connect the physical world to the web. Master Wi-Fi, Bluetooth, and Cloud integrations.',
    price: '$39.99',
    category: 'IoT'
  }
];

const BooksSection = () => {
  return (
    <section className="min-h-screen bg-cms-warm-white py-24 pl-4 md:pl-8 border-t border-black/5 overflow-hidden">
      
      <div className="max-w-7xl mb-16 pr-4 md:pr-8">
        <h2 className="text-4xl md:text-[6rem] leading-[0.9] font-bold tracking-tighter uppercase mb-6">
          Learn The<br/>Technology.
        </h2>
        <p className="font-mono text-sm uppercase tracking-widest text-cms-charcoal/60">
          Premium editorial guides to master STEM concepts.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-12 pr-8 snap-x snap-mandatory">
        {books.map((book, i) => (
          <div key={i} className="min-w-[85vw] md:min-w-[600px] h-[600px] bg-cms-off-white rounded-4xl border-thin shadow-soft p-8 md:p-12 flex flex-col justify-between snap-center relative overflow-hidden group">
            
            {/* Top info */}
            <div className="flex justify-between items-start z-20">
              <span className="px-4 py-2 bg-white rounded-full border-thin font-mono text-[10px] uppercase tracking-widest">
                {book.category}
              </span>
              <span className="font-mono text-sm text-cms-charcoal/60">{book.level}</span>
            </div>

            {/* Book 3D Mockup (Placeholder) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-64 md:w-64 md:h-80 bg-white border-thin shadow-2xl rounded-r-xl rounded-l-sm rotate-y-12 transform-gpu group-hover:rotate-y-0 transition-transform duration-700 flex flex-col p-4 justify-between">
                 <div className="w-full h-2 bg-cms-orange/20 rounded"></div>
                 <div className="text-center font-bold text-lg leading-tight uppercase px-4">{book.title}</div>
                 <div className="w-full h-8 bg-cms-light-grey rounded"></div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="z-20 flex flex-col md:flex-row justify-between items-end gap-6 bg-white/50 backdrop-blur-md p-6 rounded-2xl border-thin">
              <div className="max-w-xs">
                <h3 className="text-2xl font-bold uppercase mb-2">{book.title}</h3>
                <p className="text-xs text-cms-charcoal/70 leading-relaxed">{book.desc}</p>
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto justify-between">
                <span className="text-xl font-mono">{book.price}</span>
                <button className="flex items-center gap-2 px-6 py-3 bg-cms-black text-white rounded-full hover:bg-cms-orange transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-widest">View Book</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default BooksSection;
