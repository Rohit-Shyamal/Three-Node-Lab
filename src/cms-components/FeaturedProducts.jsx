import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

import projectImg from '../assets/projects_smarthome.jpg';
import arduinoImg from '../assets/mini_robot.jpg';
import roboticsImg from '../assets/robotics_arm.jpg';

const featured = [
  {
    id: 1,
    title: 'Smart Home Kit',
    category: 'STEM Kits',
    price: '$99.00',
    img: projectImg,
  },
  {
    id: 2,
    title: 'Mini Robot Kit',
    category: 'Robotics',
    price: '$49.99',
    img: arduinoImg,
  },
  {
    id: 3,
    title: 'Robotics Arm Kit',
    category: 'Robotics',
    price: '$149.00',
    img: roboticsImg,
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  return (
    <section className="bg-cms-off-white py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-[5rem] leading-[0.9] font-bold uppercase tracking-tighter text-cms-black">
              Featured<br/>Kits.
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-cms-charcoal/60 mt-4 max-w-sm">
              Our top-selling project kits, ready to build right out of the box.
            </p>
          </div>
          <Link to="/store" className="flex items-center gap-4 px-8 py-4 rounded-full border border-cms-black text-cms-black hover:bg-cms-black hover:text-white transition-colors">
            <span className="font-mono text-xs uppercase tracking-widest">View All Products</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl border-thin shadow-sm overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Image Area */}
              <div className="w-full aspect-[4/3] bg-cms-light-grey relative overflow-hidden flex items-center justify-center p-8">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 bg-cms-warm-white">
                <p className="font-mono text-[10px] uppercase tracking-widest text-cms-charcoal/50 mb-2">{product.category}</p>
                <h3 className="text-xl font-bold uppercase mb-4 flex-1">{product.title}</h3>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-cms-orange font-mono">{product.price}</span>
                  <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="w-12 h-12 rounded-full bg-cms-black text-white flex items-center justify-center hover:bg-cms-orange transition-colors">
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

export default FeaturedProducts;
