import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-cms-warm-white/95 backdrop-blur-xl flex flex-col p-4 md:p-8 overflow-y-auto"
        >
          {/* Close Button */}
          <div className="flex justify-end w-full max-w-7xl mx-auto mb-8 sticky top-4 z-10">
            <button onClick={onClose} className="p-4 bg-white border-thin shadow-soft rounded-full hover:bg-cms-black hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
            <h2 className="text-[4rem] md:text-[6rem] leading-[0.85] font-bold tracking-tighter uppercase text-cms-black mb-12">
              What Are You<br/>Building?
            </h2>

            <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-cms-orange transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Company</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-cms-orange transition-colors" placeholder="Your Company" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-cms-orange transition-colors" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-cms-orange transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60 mb-2">Project Type</label>
                <div className="flex flex-wrap gap-4">
                  {['Website', 'E-commerce', 'Web Application', 'IoT', 'Automation', 'Education Platform', 'Other'].map(type => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="projectType" className="peer sr-only" value={type} />
                      <div className="px-6 py-3 rounded-full border-thin peer-checked:bg-cms-black peer-checked:text-white peer-checked:border-cms-black transition-colors font-mono text-xs uppercase tracking-widest bg-white">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Budget (Optional)</label>
                <select className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-cms-orange transition-colors appearance-none">
                  <option value="">Select a range...</option>
                  <option value="5k">&lt; $5,000</option>
                  <option value="10k">$5,000 - $10,000</option>
                  <option value="25k">$10,000 - $25,000</option>
                  <option value="50k">$25,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-cms-charcoal/60">Project Description</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-cms-orange transition-colors resize-none" placeholder="Tell us about what you want to build..."></textarea>
              </div>

              <div className="mt-8 pb-12">
                <button type="submit" className="flex items-center justify-between w-full md:w-auto md:min-w-[400px] p-4 pl-8 bg-cms-black text-white rounded-full hover:bg-cms-orange transition-colors text-lg font-bold uppercase tracking-tight group">
                  <span>Send Project Request</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-cms-orange transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactOverlay;
