import React, { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ onOpenNav, onOpenCart }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

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
        <Link to="/" className="font-sans font-bold tracking-tight text-xl uppercase text-cms-black">
          THREE NODE LAB
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">
          <Link to="/store" className="hover:text-cms-orange transition-colors">Shop Projects</Link>
          <Link to="/store" className="hover:text-cms-orange transition-colors">Kits</Link>
          <Link to="/services" className="hover:text-cms-orange transition-colors">Hire Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-cms-charcoal hover:text-cms-orange transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-cms-orange text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={onOpenNav} className="p-2 bg-cms-light-grey rounded-full hover:bg-cms-black hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
