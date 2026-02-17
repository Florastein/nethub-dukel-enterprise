
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SERVICES, PROJECTS, PROCESS, TECH_STACK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Intelligence (Capabilities): Architectural Block System */}
      <section id="services" className="py-40 px-6 lg:px-12 bg-white/50 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
            <div className="lg:col-span-8">
              <span className="tech-label block mb-6">// SYSTEM_CAPABILITIES_MANIFEST</span>
              <h3 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter text-slate-900 leading-[0.9]">
                Architectural <br />
                <span className="text-blue-600">Depth.</span>
              </h3>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-slate-500 text-lg font-light leading-relaxed border-l border-blue-600 pl-8">
                We design digital infrastructure that scales beyond current business requirements, ensuring generational technical longevity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 gap-y-12 md:gap-y-1">
            {/* Primary Service Block (Asymmetric) */}
            <div className="md:col-span-7 arch-card rounded-tl-[4rem] rounded-br-[4rem] md:rounded-br-none p-16 md:p-24 flex flex-col justify-between group">
               <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-4xl">01</div>
               <div>
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-2xl mb-12 group-hover:bg-blue-600 transition-all duration-500">
                    <i className="fa-solid fa-microchip text-blue-600 group-hover:text-white text-2xl"></i>
                  </div>
                  <h4 className="text-4xl font-heading font-bold mb-8 text-slate-900 group-hover:text-blue-600 transition-colors">{SERVICES[0].title}</h4>
                  <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg mb-12">
                    {SERVICES[0].description}
                  </p>
               </div>
               <div className="flex items-center gap-6">
                 <div className="h-[1px] w-12 bg-slate-200"></div>
                 <span className="tech-label">CORE_INFRASTRUCTURE</span>
               </div>
            </div>

            {/* Support Blocks Stack */}
            <div className="md:col-span-5 flex flex-col gap-1">
               <div className="arch-card md:rounded-tr-[4rem] p-12 group flex-1">
                 <div className="absolute top-8 right-8 tech-label opacity-40">02 // DEFENSE</div>
                 <h5 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{SERVICES[1].title}</h5>
                 <p className="text-slate-500 text-sm leading-relaxed mb-8">{SERVICES[1].description}</p>
                 <i className="fa-solid fa-shield-halved text-slate-100 absolute -bottom-4 -right-4 text-8xl group-hover:text-blue-50/50 transition-colors"></i>
               </div>
               <div className="arch-card rounded-br-[4rem] p-12 group flex-1">
                 <div className="absolute top-8 right-8 tech-label opacity-40">03 // INTELLIGENCE</div>
                 <h5 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{SERVICES[2].title}</h5>
                 <p className="text-slate-500 text-sm leading-relaxed mb-8">{SERVICES[2].description}</p>
                 <div className="flex gap-1 mt-auto">
                    {[1,2,3,4].map(i => <div key={i} className="h-1 w-8 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-all" style={{transitionDelay: `${i*100}ms`}}></div>)}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol (Process): System-Flow Layout */}
      <section id="process" className="py-40 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full border-l border-white/20 blueprint-bg" style={{backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mb-32">
            <span className="tech-label text-blue-400 block mb-6">// OPERATIONAL_PROTOCOL_V4</span>
            <h3 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter mb-12">Flow of <br />Logic.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {PROCESS.map((item, idx) => (
               <div key={item.step} className="p-10 border border-white/10 hover:border-blue-500 transition-all bg-white/5 backdrop-blur-sm group">
                  <span className="text-blue-500 font-mono text-sm block mb-8 opacity-40 group-hover:opacity-100">STP_{item.step}</span>
                  <h5 className="text-3xl font-heading font-bold mb-6">{item.title}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-12">{item.desc}</p>
                  <div className={`h-[1px] w-full bg-white/10 group-hover:bg-blue-500 transition-all relative ${idx === PROCESS.length - 1 ? 'hidden' : ''}`}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Showcase (Case Logs): Large Architectural Previews */}
      <section id="projects" className="py-40 px-6 lg:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-32 gap-12">
            <h3 className="text-5xl md:text-9xl font-heading font-extrabold tracking-tighter text-slate-900">Case Logs.</h3>
            <div className="flex flex-col items-end gap-4">
              <span className="tech-label">// DEPLOYED_ASSETS_COUNT: 002</span>
              <button className="px-12 py-5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/10">
                View Full Repository
              </button>
            </div>
          </div>

          <div className="space-y-40">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 group items-center`}>
                <div className="w-full lg:w-3/5 relative">
                  <div className="case-mask overflow-hidden arch-card border-none shadow-none">
                    <img src={project.image} className="w-full aspect-[16/10] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={project.title} />
                  </div>
                  <div className={`absolute -bottom-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} bg-white p-12 shadow-2xl border border-slate-100 hidden md:block`}>
                    <div className="tech-label mb-2 text-blue-600">ID: PROJECT_{project.id.toUpperCase()}</div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">{project.category}</div>
                  </div>
                </div>
                <div className="w-full lg:w-2/5">
                  <h4 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{project.title}</h4>
                  <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-6 group">
                     <div className="w-16 h-16 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                        <i className="fa-solid fa-arrow-right-long text-xl transition-transform group-hover:translate-x-1"></i>
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Inspect Logic Protocol</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section: Grid-Based Data */}
      <section className="py-40 px-6 lg:px-12 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 border-t border-slate-200 pt-20">
            <div className="lg:col-span-4">
               <span className="tech-label text-blue-600 block mb-6">// TECH_STACK_MATRIX</span>
               <h3 className="text-4xl font-heading font-bold text-slate-900 mb-8">Verified <br />Infrastructure.</h3>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
               {TECH_STACK.map(stack => (
                 <div key={stack.category}>
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10 border-b border-slate-100 pb-4">{stack.category}</h5>
                    <ul className="space-y-6">
                       {stack.items.map(item => (
                         <li key={item} className="text-sm font-medium text-slate-700 hover:text-blue-600 cursor-default transition-colors">{item}</li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact: Bold High Contrast block */}
      <section id="contact" className="py-40 bg-white px-6">
        <div className="container mx-auto">
          <div className="arch-card rounded-[4rem] p-12 md:p-32 overflow-hidden bg-slate-900 text-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
               <div className="w-full h-full blueprint-bg" style={{backgroundSize: '20px 20px'}}></div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-24 relative z-10 items-center">
               <div className="lg:col-span-6">
                  <h3 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter mb-12">Initiate <br /><span className="text-blue-400">Sync.</span></h3>
                  <div className="space-y-12">
                     <div className="flex gap-8 group">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <i className="fa-solid fa-satellite"></i>
                        </div>
                        <div>
                           <span className="tech-label text-slate-500 mb-2 block">Direct_Comms</span>
                           <p className="text-2xl font-medium">info@nethubdukel.com</p>
                        </div>
                     </div>
                     <div className="flex gap-8 group">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <i className="fa-solid fa-tower-broadcast"></i>
                        </div>
                        <div>
                           <span className="tech-label text-slate-500 mb-2 block">Signal_Hub</span>
                           <p className="text-2xl font-medium">+233 (0)553 260 098</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-6">
                  <form className="space-y-12 bg-white/5 p-12 rounded-[3rem] backdrop-blur-xl border border-white/10">
                     <input type="text" placeholder="IDENTITY / ORG" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-400 transition-all font-medium text-lg" />
                     <input type="email" placeholder="SECURE_ENDPOINT_EMAIL" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-400 transition-all font-medium text-lg" />
                     <textarea placeholder="MISSION_OBJECTIVE" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-400 transition-all font-medium text-lg h-32 resize-none"></textarea>
                     <button className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl">
                        Authorize Transmission
                     </button>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg">N</div>
              <span className="font-heading font-extrabold text-2xl tracking-tighter uppercase text-slate-900">Nethub Dukel</span>
            </div>
            
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
               <a href="#" className="hover:text-blue-600 transition-colors">Architecture</a>
               <a href="#" className="hover:text-blue-600 transition-colors">Operations</a>
               <a href="#" className="hover:text-blue-600 transition-colors">Governance</a>
            </div>

            <div className="tech-label text-slate-300">
              © {new Date().getFullYear()} ARCHITECTURAL_DIGITAL_SOLUTIONS_GH
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
