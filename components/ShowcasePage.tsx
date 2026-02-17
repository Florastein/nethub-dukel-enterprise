import React from 'react';
import logo from './logo.svg';
import { PROJECTS } from '../constants';

const ShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-900">
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
              <img src={logo} alt="Nethub Dukel Logo" className="w-6 h-6 object-contain filter brightness-0 invert" />
            </div>
            <span className="font-heading font-extrabold text-sm tracking-[0.3em] uppercase">Nethub Dukel</span>
          </a>

          <a
            href="/"
            className="text-[11px] font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all uppercase tracking-widest"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-20">
            <span className="tech-label text-blue-600 block mb-6">// COMPANY_SHOWCASE</span>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9] mb-10">
              Active <br />
              <span className="text-blue-600">Projects.</span>
            </h1>
            <p className="text-slate-500 text-xl font-light leading-relaxed border-l border-blue-600 pl-8">
              A live view of the systems we are building across industries, from analytics to critical cloud infrastructure.
            </p>
          </div>

          <section className="space-y-12">
            {PROJECTS.map((project, index) => (
              <article
                key={project.id}
                className="arch-card rounded-[3rem] overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-5 relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    PRJ_{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-between gap-10">
                  <div>
                    <div className="tech-label text-blue-600 mb-4">{project.category}</div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-slate-900">{project.title}</h2>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Active Deployment</span>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                      View Case
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShowcasePage;
