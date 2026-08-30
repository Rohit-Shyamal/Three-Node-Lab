import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AddressPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/checkout/payment');
  };

  return (
    <div className="min-h-screen bg-cms-off-white py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border-thin shadow-xl p-8 md:p-12">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cms-light-grey -z-10"></div>
          <div className="flex flex-col items-center gap-2 bg-white px-2">
            <div className="w-8 h-8 rounded-full bg-cms-orange text-white flex items-center justify-center font-bold text-sm">1</div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cms-orange">Address</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white px-2">
            <div className="w-8 h-8 rounded-full bg-cms-light-grey text-cms-charcoal/50 flex items-center justify-center font-bold text-sm">2</div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/50">Payment</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold uppercase tracking-tighter text-cms-black mb-8">Shipping Address</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">First Name</label>
              <input required type="text" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="John" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Last Name</label>
              <input required type="text" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="Doe" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Email Address</label>
            <input required type="email" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="john@example.com" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Street Address</label>
            <input required type="text" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="123 Innovation Drive" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">City</label>
              <input required type="text" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="Techville" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">State / Province</label>
              <input required type="text" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="CA" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">ZIP / Postal Code</label>
              <input required type="text" className="w-full bg-cms-light-grey border-thin rounded-lg px-4 py-3 outline-none focus:border-cms-orange transition-colors" placeholder="90210" />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full bg-cms-black text-white rounded-full py-4 mt-8 font-bold uppercase tracking-widest hover:bg-cms-orange transition-colors"
          >
            Continue to Payment
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default AddressPage;
