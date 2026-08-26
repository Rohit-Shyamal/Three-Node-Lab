import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = ({ onOpenNav }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${hasScrolled ? 'bg-cms-warm-white/80 backdrop-blur-md border-b border-black/5 shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="font-sans font-bold tracking-tight text-xl uppercase text-cms-black">
          THREE NODE LAB
        </a>
        
        {/* Desktop Links (Optional, but user asked for a navbar so let's add a few minimal links + hamburger) */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">
          <a href="#" className="hover:text-cms-orange transition-colors">Projects</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Robotics</a>
          <a href="#" className="hover:text-cms-orange transition-colors">Business</a>
        </div>

        <button onClick={onOpenNav} className="p-2 bg-cms-light-grey rounded-full hover:bg-cms-black hover:text-white transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
