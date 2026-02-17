import React, { useMemo, useState } from 'react';
import logo from './logo.svg';

const PROFILE_PLACEHOLDER = 'https://placehold.co/600x600/e2e8f0/334155?text=Profile';

const LEADERSHIP_TEAM = [
  {
    name: 'Adzatsi Kelvin Selase',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
    focus: 'Corporate strategy, executive governance, and enterprise partnerships.',
    portfolio: 'Leads company-wide direction, strategic partnerships, and governance standards. Oversees long-range growth planning and executive accountability across business units.',
    highlights: ['Enterprise Strategy', 'Board Leadership', 'Partnership Development']
  },
  {
    name: 'Apeku Abel Dotse',
    role: 'Chief Operations Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
    focus: 'Operational systems, delivery governance, and quality assurance.',
    portfolio: 'Owns delivery systems, execution discipline, and process reliability. Coordinates cross-functional teams to maintain predictable, high-quality outcomes.',
    highlights: ['Operational Governance', 'Execution Frameworks', 'Quality Controls']
  },
  {
    name: 'Agnes Nyarko',
    role: 'Human Resources Officer',
    focus: 'Financial controls, risk management, and reporting integrity.',
    portfolio: 'Drives talent strategy, people operations, and leadership development. Supports organizational culture with clear policy, performance, and workforce planning systems.',
    highlights: ['People Strategy', 'Policy Management', 'Leadership Development']
  },
];

const EMPLOYEES = [
  { name: 'Bello  Mubarak', division: 'System Analysis', position: 'System Analyst' },
  { name: 'Michael Dordzavu', division: 'System Analysis', position: 'System Analyst' },
  { name: 'Onuorah Kingsley Ikenna', division: 'Graphics, UI/UX', position: 'UI/UX Designer' },
  { name: 'Hafiz Mohammed', division: 'Flutter Division', position: 'Frontend Developer' },
  { name: 'Elijah Kwame Vede Adatsie', division: 'Marketing', position: 'Marketing Specialist' },
  { name: 'Andrews Gyafah Amoah', division: 'Flutter', position: 'Backend Developer' },
  { name: 'Eliyah Agbenyegah', division: 'Operations', position: 'Operations Coordinator' },
  { name: 'Adzatsi Kelvin Selase', division: 'Security', position: 'Cybersecurity Specialist' },
  { name: 'Sunu Gerald', division: 'Telecommunication and Networking', position: 'Network Engineer' },
  { name: 'Afeti Isaac Kwaku', division: 'Telecommunication and Networking', position: 'Network Administrator' },
  { name: 'Emmanuel Sarpong', division: 'Finance', position: 'Finance Officer' },
  { name: 'Akosua Frimpong', division: 'Marketing', position: 'Digital Marketing Specialist' },
];

const GovernancePage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedLeader = useMemo(
    () => (selectedIndex === null ? null : LEADERSHIP_TEAM[selectedIndex]),
    [selectedIndex]
  );

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
            <span className="tech-label text-blue-600 block mb-6">// CORPORATE_GOVERNANCE</span>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9] mb-10">
              Leadership <br />
              <span className="text-blue-600">Council.</span>
            </h1>
            <p className="text-slate-500 text-xl font-light leading-relaxed border-l border-blue-600 pl-8">
              Our leadership team governs strategic direction, operational excellence, compliance, and long-term enterprise value.
            </p>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div
              className={`lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-700 ease-out ${selectedLeader ? 'lg:-translate-x-6' : 'translate-x-0'}`}
            >
              {LEADERSHIP_TEAM.map((leader, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={leader.name}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`arch-card rounded-3xl p-8 bg-white text-left transition-all duration-500 ${isActive ? 'border-blue-600 shadow-xl shadow-blue-100/70' : 'hover:border-slate-300'}`}
                  >
                    <div className="tech-label text-blue-600 mb-6">LDR_{String(index + 1).padStart(2, '0')}</div>
                    <h2 className="text-2xl font-heading font-bold mb-2">{leader.name}</h2>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">{leader.role}</h3>
                    <p className="text-slate-500 leading-relaxed">{leader.focus}</p>
                  </button>
                );
              })}
            </div>

            <aside
              className={`lg:col-span-5 arch-card rounded-3xl p-10 bg-white transition-all duration-700 ease-out ${selectedLeader ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 lg:pointer-events-none'}`}
            >
              {selectedLeader && (
                <div>
                  <span className="tech-label text-blue-600 block mb-5">// LEADERSHIP_PORTFOLIO</span>

                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-slate-100 bg-slate-100">
                    <img
                      src={selectedLeader.image ?? PROFILE_PLACEHOLDER}
                      alt={`${selectedLeader.name} portrait`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-4xl font-heading font-bold tracking-tight mb-2">{selectedLeader.name}</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">{selectedLeader.role}</p>

                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">{selectedLeader.portfolio}</p>

                  <div className="space-y-4">
                    {selectedLeader.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </section>

          <section className="mt-24">
            <div className="max-w-4xl mb-12">
              <span className="tech-label text-blue-600 block mb-4">// OUR_TEAMS_DIRECTORY</span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-6">
                Our <span className="text-blue-600">Teams.</span>
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Complete employee directory across divisions with role assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {EMPLOYEES.map((employee, index) => {
                const initials = employee.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join('');

                return (
                  <article
                    key={`${employee.name}-${employee.position}`}
                    className="arch-card rounded-[2.5rem] p-7 bg-gradient-to-br from-white via-white to-slate-50 border-l-4 border-blue-600/60"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-[0.2em]">
                          {initials}
                        </div>
                        <div>
                          <div className="tech-label text-blue-600">EMP_{String(index + 1).padStart(3, '0')}</div>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.3em]">Active Staff</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                        {employee.division}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{employee.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">{employee.position}</p>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold uppercase tracking-widest">Division</span>
                      <span className="font-bold text-slate-700">{employee.division}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GovernancePage;