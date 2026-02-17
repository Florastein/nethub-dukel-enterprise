
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden bg-[#fdfdfd]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: The Authority Statement */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-6 relative">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-10 opacity-0 animate-[fadeIn_0.8s_ease_forwards]">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.4em]">Operational Authority // v.2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-heading font-extrabold leading-[0.85] tracking-tighter text-slate-900 mb-12">
            <span className="block opacity-0 animate-[slideUp_0.8s_ease_0.2s_forwards]">Engineering</span>
            <span className="block italic text-slate-200 font-light translate-x-4 md:translate-x-12 opacity-0 animate-[slideUp_0.8s_ease_0.4s_forwards]">Intelligent</span>
            <span className="block text-blue-600 opacity-0 animate-[slideUp_0.8s_ease_0.6s_forwards]">Infrastructure.</span>
          </h1>
          
          <div className="max-w-lg mb-16 space-y-6 opacity-0 animate-[fadeIn_1s_ease_0.8s_forwards]">
            <p className="text-slate-500 text-xl font-light leading-relaxed">
              We architect high-fidelity digital systems for the next generation of global industry. Precision engineering from logic layer to final interface.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Security Protocols</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <span>AI Automation</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <span>Distributed Scale</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
            <a href="#projects" className="group relative px-12 py-6 bg-slate-900 text-white text-sm font-bold rounded-2xl transition-all hover:bg-blue-600 overflow-hidden shadow-2xl shadow-slate-900/10">
              <span className="relative z-10 flex items-center gap-3">
                Access Case Log <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a href="#contact" className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
              Initiate Sync Protocol
            </a>
          </div>
        </div>

        {/* Right Side: Non-Generic Technical Visualization */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-6 relative">
          <div className="relative w-full aspect-square flex items-center justify-center">
            
            {/* The "Core" Element */}
            <div className="relative w-72 h-72 rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] flex items-center justify-center animate-float overflow-hidden">
               <div className="scanline"></div>
               <div className="absolute inset-0 blueprint-bg opacity-20"></div>
               <div className="text-slate-900 text-6xl font-heading font-extrabold opacity-10">ND</div>
               
               {/* Orbital Lines */}
               <div className="absolute inset-4 border border-blue-600/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute inset-8 border border-indigo-600/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>

            {/* Floating Module: Data Analytics */}
            <div className="absolute top-0 right-0 w-56 p-8 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] shadow-2xl animate-float [animation-delay:1.5s]">
               <div className="flex justify-between items-center mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <i className="fa-solid fa-chart-line text-blue-600 text-xs"></i>
                  </div>
                  <span className="text-[8px] font-bold text-slate-300 uppercase">Real_Time_Latency</span>
               </div>
               <div className="space-y-2">
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-indigo-400 rounded-full"></div>
                  </div>
               </div>
            </div>

            {/* Floating Module: Cyber Status */}
            <div className="absolute bottom-10 -left-10 p-6 bg-slate-900 text-white rounded-[2rem] shadow-2xl animate-float [animation-delay:0.5s]">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                    <i className="fa-solid fa-fingerprint"></i>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Active_Shield</div>
                    <div className="text-[8px] text-slate-500 font-mono italic">THREAT_DETECTED: NULL</div>
                  </div>
               </div>
            </div>

            {/* Ambient Depth Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-600/5 to-transparent rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
