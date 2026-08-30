import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

import projectImg from '../assets/projects_smarthome.jpg';
import arduinoImg from '../assets/mini_robot.jpg';
import roboticsImg from '../assets/robotics_arm.jpg';

const products = [
  {
    id: 1,
    title: 'Smart Home Automation Kit',
    category: 'STEM Kits',
    price: '$99.00',
    img: projectImg,
    badge: 'Best Seller'
  },
  {
    id: 2,
    title: 'Micro Circuit Mini Robot Kit',
    category: 'Robotics',
    price: '$49.99',
    img: arduinoImg,
    badge: 'New'
  },
  {
    id: 3,
    title: 'Robotics Arm Kit',
    category: 'Robotics',
    price: '$149.00',
    img: roboticsImg,
    badge: null
  },
  {
    id: 4,
    title: 'Mastering Arduino (Book)',
    category: 'Books',
    price: '$29.99',
    img: null,
    badge: null
  },
  {
    id: 5,
    title: 'Robotics From Scratch (Book)',
    category: 'Books',
    price: '$34.99',
    img: null,
    badge: null
  },
  {
    id: 6,
    title: 'IoT & The ESP32 (Book)',
    category: 'Books',
    price: '$39.99',
    img: null,
    badge: null
  }
];

const ShopGridSection = () => {
  const { addToCart } = useCart();
  
  return (
    <section className="min-h-screen bg-cms-off-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-5xl md:text-[6rem] leading-[0.9] font-bold uppercase tracking-tighter text-cms-black">
              Shop<br/>Our<br/>Products.
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-cms-charcoal/60 mt-6 max-w-md">
              Purchase ready-to-use STEM kits, robotics, and learning materials.
            </p>
          </div>
          
          {/* Filter Categories */}
          <div className="flex gap-4 flex-wrap">
            {['All', 'STEM Kits', 'Robotics', 'Books'].map((cat, i) => (
              <button key={i} className={`px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest border-thin transition-colors ${i === 0 ? 'bg-cms-black text-white' : 'bg-transparent text-cms-charcoal hover:bg-black/5'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl border-thin shadow-sm overflow-hidden flex flex-col group relative"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-cms-orange text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {product.badge}
                </div>
              )}
              
              {/* Image Area */}
              <div className="w-full aspect-square bg-cms-light-grey relative overflow-hidden flex items-center justify-center p-8">
                {product.img ? (
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-3/4 h-5/6 bg-white border-thin shadow-xl rounded-r-xl rounded-l-sm flex flex-col p-4 justify-between transform group-hover:-rotate-3 transition-transform duration-500">
                    <div className="w-full h-2 bg-cms-orange/20 rounded"></div>
                    <div className="text-center font-bold text-xl leading-tight uppercase px-4">{product.title.replace(' (Book)', '')}</div>
                    <div className="w-full h-8 bg-cms-light-grey rounded"></div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/50 mb-2">{product.category}</p>
                <h3 className="text-xl font-bold uppercase mb-4 flex-1">{product.title}</h3>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-cms-orange font-mono">{product.price}</span>
                  <button onClick={() => addToCart(product)} className="w-12 h-12 rounded-full bg-cms-black text-white flex items-center justify-center hover:bg-cms-orange transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopGridSection;
