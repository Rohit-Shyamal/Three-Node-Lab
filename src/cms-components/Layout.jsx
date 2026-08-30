import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import NavigationOverlay from './NavigationOverlay';
import ContactOverlay from './ContactOverlay';
import CartOverlay from './CartOverlay';
import Footer from './Footer';

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans selection:bg-cms-orange selection:text-white pt-20">
      <Navbar onOpenNav={() => setIsNavOpen(true)} />
      <NavigationOverlay isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <main>
        <Outlet context={{ setIsContactOpen }} />
      </main>

      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CartOverlay />
      <Footer />
    </div>
  );
};

export default Layout;
