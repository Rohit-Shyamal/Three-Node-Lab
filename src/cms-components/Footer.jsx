import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cms-warm-white py-12 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="font-sans font-bold tracking-tight text-lg uppercase">
          THREE NODE LAB
        </div>

        <nav className="flex flex-wrap justify-center gap-6 font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/60">
          <a href="#" className="hover:text-cms-orange transition-colors">Projects</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Arduino</a>
          <a href="#" className="hover:text-cms-orange transition-colors">ESP32</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Robotics</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Books</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Business</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Schools</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Contact</a>
        </nav>

        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/60">
          <a href="#" className="hover:text-cms-orange transition-colors">Instagram</a>
          <a href="#" className="hover:text-cms-orange transition-colors">YouTube</a>
          <a href="#" className="hover:text-cms-orange transition-colors">LinkedIn</a>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-12 text-center font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/30">
        &copy; {new Date().getFullYear()} THREE NODE LAB. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
