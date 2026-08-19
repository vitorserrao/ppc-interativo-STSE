/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Users, 
  ChevronRight, 
  BookOpen, 
  Building2, 
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
  ExternalLink,
  Target,
  Wrench,
  BrainCircuit,
  Plus,
  Minus,
  Calculator,
  Gauge,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  User,
  MapPin,
  Globe
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { coursePhases, Phase } from './data';
import { CurriculumMatrix } from './components/CurriculumMatrix';

const IconMap: Record<string, any> = {
  Calculator,
  Zap,
  Wrench,
  Gauge,
  TrendingUp,
  GraduationCap,
  Briefcase
};

export default function App() {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // If a phase is expanded, we want to stay "anchored" to it while its content is in view
      if (expandedPhase !== null) {
        const expandedEl = document.getElementById(`fase-${expandedPhase}`);
        if (expandedEl) {
          const rect = expandedEl.getBoundingClientRect();
          // If the expanded card still occupies the central part of the view, lock navigation
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 3) {
            setActivePhase(expandedPhase);
            return;
          }
        }
      }

      // Default active phase detection based on scroll position
      const phaseElements = coursePhases.map(p => document.getElementById(`fase-${p.number}`));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = phaseElements.length - 1; i >= 0; i--) {
        const el = phaseElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActivePhase(coursePhases[i].number);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expandedPhase]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 scroll-smooth overflow-x-hidden">
      {/* Background Decorative Elements - Clean & Professional */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        {/* Soft Gradient Accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {coursePhases.map((phase) => (
          <a 
            key={phase.number} 
            href={`#fase-${phase.number}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span className={`transition-all text-[10px] font-semibold uppercase tracking-widest ${activePhase === phase.number ? 'opacity-100 text-blue-600 translate-x-0' : 'opacity-0 group-hover:opacity-100 text-slate-400 translate-x-2 group-hover:translate-x-0'}`}>
              Fase {phase.number}
            </span>
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activePhase === phase.number ? 'border-blue-600 bg-blue-600 scale-125' : 'border-slate-300 group-hover:border-blue-400 group-hover:bg-blue-50'}`} />
          </a>
        ))}
      </nav>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-white border border-slate-200 rounded-full shadow-2xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all group"
      >
        <ArrowDown className="w-6 h-6 rotate-180 group-hover:-translate-y-1 transition-transform" />
      </motion.button>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-5">
              {/* Símbolo IFSC em SVG - Versão Refinada */}
              <svg width="80" height="110" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-20 w-auto">
                <circle cx="12" cy="12" r="12" fill="#C8191E"/>
                <rect x="28" y="0" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="56" y="0" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="0" y="28" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="28" y="28" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="0" y="56" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="28" y="56" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="56" y="56" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="0" y="84" width="24" height="24" rx="2" fill="#32A041"/>
                <rect x="28" y="84" width="24" height="24" rx="2" fill="#32A041"/>
              </svg>
              
              {/* Texto Institucional - Alinhado com a Identidade Visual do IFSC */}
              <div className="text-left flex flex-col justify-center gap-0.5 font-logo">
                <h2 className="text-sm md:text-xl font-bold text-black leading-none tracking-tight uppercase">Instituto Federal</h2>
                <p className="text-[10px] md:text-base font-medium text-slate-700 leading-tight">Santa Catarina</p>
                <p className="text-[10px] md:text-base font-medium text-slate-700 leading-tight">Câmpus Florianópolis</p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] md:text-xs font-semibold mb-8 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" /> Superior de Tecnologia em Sistemas de Energia
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 px-2 tracking-tight">
            Do Cálculo ao <span className="text-blue-600">Mercado.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Uma jornada de 3 anos para formar o profissional híbrido que o setor elétrico exige: rigor técnico e visão estratégica de negócios.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
            <button 
              id="hero-explore-btn"
              onClick={() => document.getElementById('fase-1')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group text-sm"
            >
              Explorar Jornada <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              id="hero-matrix-btn"
              onClick={() => setShowMatrix(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl font-semibold hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              Abrir Matriz Curricular <BookOpen className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-300">
          <ArrowDown className="w-8 h-8" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 relative">
        {/* The Vertical Rail */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0 opacity-50" />

        <div className="space-y-0">
          {coursePhases.map((phase, index) => (
            <PhaseCard 
              key={phase.number} 
              phase={phase} 
              index={index} 
              isExpanded={expandedPhase === phase.number}
              onToggle={(expanded) => setExpandedPhase(expanded ? phase.number : null)}
            />
          ))}
        </div>
      </section>

      {/* Footer / Final CTA & Institutional Information */}
      <footer id="footer-cta" className="bg-slate-900 pt-20 pb-12 px-4 md:px-6 overflow-hidden relative text-left">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Headline & Student Card */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Energia mais eficiente começa com as pessoas certas.
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Formação de profissionais preparados para reduzir custos, otimizar consumo e transformar o setor elétrico.
            </p>
            
            <div className="flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/60 p-6 md:p-8 rounded-[24px] border border-slate-700/80 text-left w-full max-w-md shadow-xl"
              >
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  🎓 Formação Acadêmica e Profissional
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Conecte conhecimento acadêmico e competências técnicas com aplicação real por meio de um ensino público, gratuito e de excelência.
                </p>
                <a 
                  id="link-ingresso-ifsc"
                  href="https://www.ifsc.edu.br/en/editais-com-inscricoes-abertas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all text-center text-sm shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 group"
                >
                  Formas de Ingresso no IFSC
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Institutional Contact, Coordinator & Address Information */}
          <div className="border-t border-slate-800 pt-12 mt-12">
            <div className="flex items-center gap-2.5 mb-8">
              <Building2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">Contato</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Secretaria do Curso */}
              <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-800 flex flex-col gap-3">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Secretaria do Curso</p>
                <div className="space-y-2.5 text-sm text-slate-300">
                  <a 
                    href="mailto:sec.sistemasdeenergia.fln@ifsc.edu.br" 
                    className="flex items-start gap-2.5 hover:text-blue-400 transition-colors break-all group"
                  >
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>sec.sistemasdeenergia.fln@ifsc.edu.br</span>
                  </a>
                  <a 
                    href="tel:4832116070" 
                    className="flex items-center gap-2.5 hover:text-blue-400 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-400 flex-shrink-0" />
                    <span>(48) 3211-6070</span>
                  </a>
                </div>
              </div>

              {/* Coordenação do Curso */}
              <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-800 flex flex-col gap-3">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Coordenação do Curso</p>
                <div className="space-y-2.5 text-sm text-slate-300">
                  <div className="flex items-center gap-2.5 text-white font-semibold">
                    <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>Murilo Reolon Scuzziato</span>
                  </div>
                  <a 
                    href="mailto:sistemasdeenergia.cst.fln@ifsc.edu.br" 
                    className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors break-all group"
                  >
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>sistemasdeenergia.cst.fln@ifsc.edu.br</span>
                  </a>
                  <a 
                    href="tel:4832116120" 
                    className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 flex-shrink-0" />
                    <span>(48) 3211-6120</span>
                  </a>
                </div>
              </div>

              {/* Endereço Institucional */}
              <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-800 flex flex-col gap-3">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Endereço</p>
                <div className="space-y-2 text-xs md:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">IFSC Câmpus Florianópolis</p>
                      <p className="text-slate-400 text-xs mt-0.5">Av. Mauro Ramos, 950, Centro, Florianópolis – SC, CEP 88020-300</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pl-6">
                    <a href="tel:4832210500" className="hover:text-amber-300 transition-colors">Fone: (48) 3221-0500</a>
                    <span>•</span>
                    <span>FAX: (48) 3224-0727</span>
                  </div>
                  <div className="pt-1 pl-6">
                    <a 
                      href="https://www.ifsc.edu.br/en/web/campus-florianopolis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>www.ifsc.edu.br/campus-florianopolis</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-4 text-center sm:text-left">
            <p>
              IFSC Florianópolis • Superior de Tecnologia em Sistemas de Energia • 2026
            </p>
            <p className="text-[11px] text-slate-600">
              Projeto de Extensão I • Desenvolvido para visualização interativa do PPC
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showMatrix && (
          <CurriculumMatrix onClose={() => setShowMatrix(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function PhaseCard({ phase, index, isExpanded, onToggle }: { 
  phase: Phase, 
  index: number, 
  isExpanded: boolean, 
  onToggle: (expanded: boolean) => void,
  key?: number 
}) {
  const isEven = index % 2 === 0;
  const PhaseIcon = IconMap[phase.icon] || Zap;
  
  return (
    <div id={`fase-${phase.number}`} className={`relative ${isExpanded ? 'z-40' : ''} ${index > 0 ? 'md:-mt-24' : ''}`} style={{ zIndex: isExpanded ? 40 : 20 - index }}>
      {/* Phase Marker */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 ${isExpanded ? 'border-blue-500 scale-110 shadow-[0_0_30px_rgba(37,99,235,0.2)]' : 'border-slate-100'} flex items-center justify-center font-semibold text-xl md:text-2xl shadow-lg z-20 transition-all duration-500`}>
          <PhaseIcon className={`w-5 h-5 md:w-7 md:h-7 ${isExpanded ? 'text-blue-600' : 'text-slate-400'}`} />
        </div>
      </div>

      <div className={`flex flex-col md:flex-row gap-8 md:gap-12 md:items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -40 : 40, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-[46%] mt-16 md:mt-0 pl-11 md:pl-0 pr-0 md:pr-0"
        >
          <div className={`bg-white rounded-[28px] md:rounded-[36px] border ${isExpanded ? 'border-blue-400 shadow-2xl ring-4 md:ring-8 ring-blue-50/30' : 'border-slate-100 shadow-sm'} transition-all duration-500 group cursor-pointer`}
               onClick={() => onToggle(!isExpanded)}>
            {/* Header */}
            <div className={`p-6 md:p-7 bg-gradient-to-br ${getGradient(phase.color)} text-white relative rounded-t-[27px] md:rounded-t-[35px] overflow-hidden`}>
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <PhaseIcon className="w-14 h-14 md:w-16 md:h-16 rotate-12" />
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80 mb-1.5">Fase {phase.number}</p>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-tight">{phase.title}</h2>
                </div>
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                  {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 space-y-5">
              {/* Disciplines Summary */}
              <div>
                <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" /> Matriz Curricular
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(isExpanded ? phase.disciplines : phase.disciplines.slice(0, 3)).map(d => (
                    <DisciplineBadge key={d.name} discipline={d} />
                  ))}
                  {!isExpanded && phase.disciplines.length > 3 && (
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-lg border border-blue-100">
                      +{phase.disciplines.length - 3} mais
                    </span>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="space-y-6"
                  >
                    {/* Tech & Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <Wrench className="w-3.5 h-3.5 text-blue-500" /> Tecnologias
                        </h3>
                        <ul className="space-y-2">
                          {phase.technologies.map(t => (
                            <li key={t} className="text-xs font-semibold text-slate-700 flex items-center gap-3">
                              <div className="w-1 h-1 bg-blue-500 rounded-full" /> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <Target className="w-3.5 h-3.5 text-emerald-500" /> Habilidades
                        </h3>
                        <ul className="space-y-2">
                          {phase.skills.map(s => (
                            <li key={s} className="text-xs font-semibold text-slate-700 flex items-center gap-3">
                              <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Competencies */}
                    <div className="pt-5 border-t border-slate-100">
                      <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <BrainCircuit className="w-3.5 h-3.5" /> Competência Central
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {phase.competencies.map(c => (
                          <div key={c} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /> {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* THE SELL: Real Problems Solved */}
                    <div className="p-6 bg-slate-900 rounded-[28px] shadow-xl shadow-slate-200">
                      <h3 className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" /> Impacto no Mercado
                      </h3>
                      <div className="grid grid-cols-1 gap-2.5">
                        {phase.realProblems.map(p => (
                          <div key={p} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/item">
                            <div className="mt-0.5 p-1 rounded-lg bg-blue-500/20 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                              <Zap className="w-3 h-3" />
                            </div>
                            <p className="text-xs font-medium text-slate-300 leading-relaxed">
                              {p}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isExpanded ? (
                <div className="pt-2 flex items-center justify-center">
                  <button 
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-2xl border border-white/20 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 z-10 cursor-pointer text-[11px] font-semibold tracking-tight"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle(true);
                    }}
                  >
                    Explorar <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="pt-6 flex items-center justify-center border-t border-slate-50">
                  <button 
                    className="flex items-center gap-2 px-5 py-2 bg-slate-50 text-slate-500 rounded-2xl border border-slate-200 hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95 z-10 cursor-pointer text-[11px] font-semibold tracking-tight"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle(false);
                      // Scroll back to card head with precision
                      setTimeout(() => {
                        const el = document.getElementById(`fase-${phase.number}`);
                        if (el) {
                          const headerOffset = 100;
                          const elementPosition = el.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }, 400);
                    }}
                  >
                    Reduzir <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Empty side for spacing on desktop */}
        <div className="hidden md:block md:w-[45%]" />
      </div>
    </div>
  );
}

function DisciplineBadge({ discipline }: { discipline: { name: string, description: string }, key?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close tooltip on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (badgeRef.current && !badgeRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={badgeRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.stopPropagation(); // Prevent card from toggling
        setIsHovered(!isHovered);
      }}
    >
      <motion.span 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-slate-700 text-[10px] md:text-xs font-bold rounded-lg md:rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md hover:shadow-blue-100 transition-all cursor-help block"
      >
        {discipline.name}
      </motion.span>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 md:w-72 p-4 md:p-5 bg-slate-900/95 backdrop-blur-xl text-white rounded-[20px] md:rounded-[24px] shadow-2xl z-[60] pointer-events-none border border-white/10"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 md:w-3 md:h-3 bg-slate-900" />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <p className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest">Objetivo PPC</p>
            </div>
            <p className="text-[10px] md:text-xs font-medium leading-relaxed text-slate-200">
              {discipline.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getGradient(color: string) {
  switch(color) {
    case 'blue': return 'from-blue-600 via-blue-700 to-indigo-800';
    case 'emerald': return 'from-emerald-500 via-emerald-600 to-teal-700';
    case 'amber': return 'from-amber-400 via-amber-500 to-orange-600';
    case 'orange': return 'from-orange-500 via-orange-600 to-red-700';
    case 'red': return 'from-red-500 via-red-600 to-rose-800';
    case 'slate': return 'from-slate-600 via-slate-700 to-slate-900';
    default: return 'from-blue-600 to-indigo-700';
  }
}
