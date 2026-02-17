
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 w-full z-50 flex justify-center px-6">
      <nav className={`transition-all duration-500 flex items-center p-2 rounded-full glass-nav border-black/5 ${isScrolled ? 'px-6 py-3 shadow-xl' : 'px-10 py-5 w-full max-w-7xl'}`}>
        <a href="#" className="flex items-center gap-3 mr-auto">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">N</div>
          {!isScrolled && (
            <span className="font-heading font-extrabold text-sm tracking-[0.3em] text-slate-900 uppercase opacity-90 hidden sm:inline-block">
              Nethub Dukel
            </span>
          )}
        </a>

        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="px-5 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <a href="#contact" className="hidden sm:block text-[11px] font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all uppercase tracking-widest">
            Protocol Inquiry
          </a>
          <button className="md:hidden w-10 h-10 flex items-center justify-center text-slate-900 bg-black/5 rounded-full">
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
