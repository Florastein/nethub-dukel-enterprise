
import { Service, Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Intelligence', href: '#services' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Protocol', href: '#process' },
  { label: 'Governance', href: '/governance' },
];

export const SERVICES: Service[] = [
  {
    id: 'system-arch',
    title: 'System Architecture',
    description: 'Engineering the backbone of enterprise logic. High-availability distributed systems designed for global scale.',
    icon: 'fa-microchip',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'cyber-ops',
    title: 'Cybersecurity Ops',
    description: 'Defense-in-depth infrastructure. L7 threat mitigation, zero-trust protocols, and advanced forensic auditing.',
    icon: 'fa-shield-halved',
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'ai-pipelines',
    title: 'AI Data Pipelines',
    description: 'Transitioning from data to intelligence. Automated inference engines and predictive modeling for business logic.',
    icon: 'fa-brain',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'interface-eng',
    title: 'Interface Engineering',
    description: 'High-fidelity digital frontends. Pixel-perfect rendering with focus on performance, accessibility, and sub-second latency.',
    icon: 'fa-terminal',
    color: 'from-emerald-500 to-teal-600'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'Mechanic',
    title: 'Nine Inventories',
    category: 'Quantitative Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'Real-time transactional processing engine with sub-10ms visual reporting latency.'
  },
  {
    id: 'med-core',
    title: 'MedCore Infrastructure',
    category: 'Cloud Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    description: 'Distributed hospital management system across 12 nodes with biometric auth integration.'
  }
];

export const PROCESS = [
  { step: '01', title: 'Audit', desc: 'Comprehensive technical debt assessment and landscape analysis.' },
  { step: '02', title: 'Architect', desc: 'Bespoke infrastructure design utilizing modern distributed patterns.' },
  { step: '03', title: 'Execute', desc: 'Agile sprints with CI/CD rigor and automated regression testing.' },
  { step: '04', title: 'Optimize', desc: 'Post-launch tuning, load balancing, and performance monitoring.' }
];

export const TECH_STACK = [
  { category: 'Frontend', items: ['React/Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'Flutter', 'JavaFx'] },
  { category: 'Backend', items: ['Node.js', 'Python',] },
  { category: 'Database', items: ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase', 'Firebase'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Docker', 'Kubernetes'] }
];
