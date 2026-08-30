import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PaymentPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { cartTotal } = useCart();

  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRazorpayMock = () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    setIsProcessing(true);

    const options = {
      key: 'rzp_test_TYpo9', // Dummy generic key to open checkout (this will open the modal, but might fail if amount requires order_id on some test accounts, but it's a mock)
      // Standard generic Razorpay test key that usually works for opening the UI
      amount: Math.round(cartTotal * 100), // amount in paise
      currency: 'USD',
      name: 'Three Node Lab',
      description: 'STEM Kits & Robotics',
      image: 'https://cdn.razorpay.com/logos/FFXJ64W8bF9J2a_medium.png', // dummy logo
      handler: function (response) {
        setIsProcessing(false);
        setIsSuccess(true);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#E65100' // cms-orange roughly
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cms-off-white py-32 px-4 md:px-8 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white rounded-3xl border-thin shadow-xl p-12 text-center flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-cms-black mb-4">Payment Successful!</h2>
          <p className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60 mb-8 leading-relaxed">
            Thank you for your order. We are preparing your STEM kits for shipment.
          </p>
          <a href="/Three-Node-Lab/" className="px-8 py-4 bg-cms-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cms-orange transition-colors">
            Return to Store
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cms-off-white py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border-thin shadow-xl p-8 md:p-12">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cms-orange -z-10"></div>
          <div className="flex flex-col items-center gap-2 bg-white px-2">
            <div className="w-8 h-8 rounded-full bg-cms-orange text-white flex items-center justify-center font-bold text-sm">✓</div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cms-orange">Address</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white px-2">
            <div className="w-8 h-8 rounded-full bg-cms-orange text-white flex items-center justify-center font-bold text-sm">2</div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cms-orange">Payment</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold uppercase tracking-tighter text-cms-black mb-8">Checkout with Razorpay</h1>
        
        <div className="bg-cms-light-grey rounded-2xl p-8 mb-8 border border-black/5">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-sm uppercase text-cms-charcoal/60 tracking-widest">Order Total</span>
            <span className="text-3xl font-bold font-mono">${(cartTotal || 148.99).toFixed(2)}</span>
          </div>
          <div className="h-[1px] w-full bg-black/5 my-4"></div>
          <p className="font-mono text-xs text-cms-charcoal/50">
            You will be securely redirected to Razorpay to complete your purchase using UPI, Credit Card, or Netbanking.
          </p>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleRazorpayMock}
          disabled={isProcessing}
          className="w-full bg-[#3395FF] text-white rounded-full py-4 font-bold uppercase tracking-widest hover:bg-[#2075D1] transition-colors flex items-center justify-center gap-4 shadow-lg shadow-blue-500/30"
        >
          {isProcessing ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M227.1 190.8L211.7 289H179.3L194.7 190.8H227.1ZM338.2 190.8C349.5 190.8 357.6 198.8 357.6 210.1V289H325.2V218.4C325.2 214.3 321.8 210.9 317.7 210.9H291.9V289H259.5V190.8H338.2ZM152.8 190.8C164.2 190.8 172.3 198.8 172.3 210.1C172.3 216.5 169.3 222.1 164.6 225.8L178.6 289H145.4L133.7 236.4H103.5V289H71.1V190.8H152.8ZM138.8 211.9H103.5V218.4H138.8C140.6 218.4 142 216.9 142 215.1C142 213.3 140.6 211.9 138.8 211.9ZM435.5 190.8L403.4 233.1V190.8H371V289H403.4V257.6L437 289H480.9L437.9 249.2L477.5 190.8H435.5Z"/></svg>
              <span>Pay with Razorpay</span>
            </>
          )}
        </motion.button>
        
        <div className="flex justify-center mt-6 gap-4 opacity-50">
          <span className="text-xs font-mono font-bold">UPI</span>
          <span className="text-xs font-mono font-bold">•</span>
          <span className="text-xs font-mono font-bold">CARDS</span>
          <span className="text-xs font-mono font-bold">•</span>
          <span className="text-xs font-mono font-bold">NETBANKING</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
