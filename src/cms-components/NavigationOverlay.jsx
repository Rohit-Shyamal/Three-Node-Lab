import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
  { num: '01', label: 'Home', path: '/' },
  { num: '02', label: 'Store (Kits & Books)', path: '/store' },
  { num: '03', label: 'Services (Hire Us)', path: '/services' },
];

const NavigationOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-cms-warm-white flex flex-col p-8 md:p-12"
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            <h2 className="font-sans font-bold tracking-tight text-xl uppercase">THREE NODE LAB</h2>
            <button onClick={onClose} className="p-4 bg-cms-light-grey rounded-full hover:bg-black hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex items-center justify-center">
            <nav className="flex flex-col gap-2 md:gap-4 w-full max-w-5xl">
              {links.map((link, i) => (
                <Link to={link.path} onClick={onClose} key={link.num}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, ease: "easeOut" }}
                    className="flex items-baseline gap-8 group cursor-pointer"
                  >
                    <span className="text-sm md:text-lg font-mono text-cms-charcoal/40 group-hover:text-cms-orange transition-colors">
                      {link.num}
                    </span>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-cms-charcoal group-hover:translate-x-4 transition-transform duration-300">
                      {link.label}
                    </h1>
                  </motion.div>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationOverlay;
