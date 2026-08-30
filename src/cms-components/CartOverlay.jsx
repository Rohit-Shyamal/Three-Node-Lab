import React from 'react';
import { X, Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartOverlay = () => {
  const navigate = useNavigate();
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout/address');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Cart Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cms-off-white shadow-2xl border-l border-black/5 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-black/5 bg-white">
              <h2 className="font-sans font-bold tracking-tight text-2xl uppercase text-cms-black">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-3 bg-cms-light-grey rounded-full hover:bg-black hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-cms-charcoal/50 gap-4">
                  <ShoppingCart size={48} className="opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest">Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl border-thin shadow-sm relative">
                    <div className="w-24 h-24 bg-cms-light-grey rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                      {item.img ? (
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                      ) : (
                        <div className="font-bold text-cms-charcoal/30 text-xs">NO IMG</div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div>
                        <h3 className="font-bold uppercase text-sm leading-tight mb-1">{item.title}</h3>
                        <p className="font-mono text-cms-orange font-bold text-sm">{item.price}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 border-thin rounded-full px-3 py-1 bg-cms-off-white">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-cms-charcoal/50 hover:text-black">-</button>
                          <span className="font-mono text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-cms-charcoal/50 hover:text-black">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-cms-charcoal/40 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            <div className="p-8 bg-white border-t border-black/5">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-sm uppercase tracking-widest text-cms-charcoal/60">Subtotal</span>
                <span className="font-mono text-2xl font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout} 
                disabled={cart.length === 0}
                className={`w-full flex items-center justify-between p-6 text-white rounded-full transition-colors text-lg font-bold uppercase tracking-tight group ${cart.length === 0 ? 'bg-cms-light-grey text-cms-charcoal/50 cursor-not-allowed' : 'bg-cms-orange hover:bg-cms-amber'}`}
              >
                <span>Checkout</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${cart.length === 0 ? 'bg-transparent text-cms-charcoal/50' : 'bg-white text-cms-orange group-hover:scale-110'}`}>
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartOverlay;
