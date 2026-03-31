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
  Info,
  Calculator,
  Gauge,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { coursePhases, Phase } from './data';

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Determine active phase based on scroll position
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 scroll-smooth">
      {/* Background Decorative Elements - Clean & Professional */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
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
            <span className={`transition-all text-[10px] font-black uppercase tracking-widest ${activePhase === phase.number ? 'opacity-100 text-blue-600 translate-x-0' : 'opacity-0 group-hover:opacity-100 text-slate-400 translate-x-2 group-hover:translate-x-0'}`}>
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
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-5">
              {/* Símbolo IFSC em SVG - Versão Refinada */}
              <svg width="80" height="110" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-14 md:h-24 w-auto">
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
                <h2 className="text-lg md:text-2xl font-extrabold text-black leading-none tracking-tight uppercase">Instituto Federal</h2>
                <p className="text-sm md:text-lg font-semibold text-slate-700 leading-tight">Santa Catarina</p>
                <p className="text-sm md:text-lg font-semibold text-slate-700 leading-tight">Câmpus Florianópolis</p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-8 uppercase tracking-widest">
            <Zap className="w-4 h-4" /> Superior de Tecnologia em Sistemas de Energia
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight mb-6 px-2">
            Do Cálculo ao <span className="text-blue-600">Mercado.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Uma jornada de 3 anos para formar o profissional híbrido que o setor elétrico exige: rigor técnico e visão estratégica de negócios.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
            <button 
              onClick={() => document.getElementById('fase-1')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
            >
              Explorar Jornada <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('footer-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Contratar um Talento <Users className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-300">
          <ArrowDown className="w-8 h-8" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-6 py-8 relative">
        {/* The Vertical Rail */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 z-0 shadow-[0_0_15px_rgba(226,232,240,0.8)]" />

        <div className="space-y-0">
          {coursePhases.map((phase, index) => (
            <PhaseCard key={phase.number} phase={phase} index={index} />
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section id="footer-cta" className="bg-slate-900 py-24 px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Energia mais eficiente começa com as pessoas certas.</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Formamos profissionais preparados para reduzir custos, otimizar consumo e transformar o setor elétrico — da sala de aula para o mercado.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-700 text-left flex-1 min-w-[280px] md:min-w-[300px]"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🎓 Para Alunos
              </h3>
              <p className="text-slate-400 text-sm mb-6">Construa uma carreira valorizada, com aplicação real desde o início.</p>
              <a 
                href="https://www.ifsc.edu.br/en/editais-com-inscricoes-abertas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors text-center"
              >
                Ver Processo Seletivo
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-700 text-left flex-1 min-w-[280px] md:min-w-[300px]"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🏢 Para Empresas
              </h3>
              <p className="text-slate-400 text-sm mb-6">Encontre talentos capazes de gerar eficiência energética e impacto direto nos seus resultados.</p>
              <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors">Acessar Banco de Talentos</button>
            </motion.div>
          </div>
          <p className="mt-16 text-slate-500 text-xs uppercase tracking-widest font-bold">
            IFSC Florianópolis • Tecnologia em Sistemas de Energia • 2026
          </p>
        </div>
      </section>
    </div>
  );
}

function PhaseCard({ phase, index }: { phase: Phase, index: number, key?: number }) {
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);
  const PhaseIcon = IconMap[phase.icon] || Zap;
  
  return (
    <div id={`fase-${phase.number}`} className={`relative z-10 ${index > 0 ? 'md:-mt-24' : ''}`}>
      {/* Phase Marker */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className={`w-16 h-16 rounded-full bg-white border-4 ${isExpanded ? 'border-blue-500 scale-110 shadow-[0_0_30px_rgba(37,99,235,0.3)]' : 'border-slate-200'} flex items-center justify-center font-black text-2xl shadow-xl z-20 transition-all duration-500`}>
          <PhaseIcon className={`w-8 h-8 ${isExpanded ? 'text-blue-600' : 'text-slate-400'}`} />
        </div>
      </div>

      <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-[45%] mt-24 md:mt-0 pl-20 md:pl-0 pr-4 md:pr-0"
        >
          <div className={`bg-white rounded-[32px] md:rounded-[40px] border-2 ${isExpanded ? 'border-blue-500 shadow-2xl ring-4 md:ring-8 ring-blue-50/50' : 'border-slate-100 shadow-sm'} transition-all duration-500 group cursor-pointer`}
               onClick={() => setIsExpanded(!isExpanded)}>
            {/* Header */}
            <div className={`p-6 md:p-8 bg-gradient-to-br ${getGradient(phase.color)} text-white relative rounded-t-[30px] md:rounded-t-[38px] overflow-hidden`}>
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <PhaseIcon className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Fase {phase.number}</p>
                  <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">{phase.title}</h2>
                </div>
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                  {isExpanded ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 space-y-6">
              {/* Disciplines Summary */}
              <div>
                <h3 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" /> Matriz Curricular
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(isExpanded ? phase.disciplines : phase.disciplines.slice(0, 3)).map(d => (
                    <DisciplineBadge key={d.name} discipline={d} />
                  ))}
                  {!isExpanded && phase.disciplines.length > 3 && (
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg border border-blue-100">
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
                    className="space-y-6 md:space-y-8"
                  >
                    {/* Tech & Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-2">
                      <div className="p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                        <h3 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <Wrench className="w-3.5 h-3.5 text-blue-500" /> Tecnologias
                        </h3>
                        <ul className="space-y-2.5">
                          {phase.technologies.map(t => (
                            <li key={t} className="text-xs md:text-sm font-bold text-slate-700 flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                        <h3 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <Target className="w-3.5 h-3.5 text-emerald-500" /> Habilidades
                        </h3>
                        <ul className="space-y-2.5">
                          {phase.skills.map(s => (
                            <li key={s} className="text-xs md:text-sm font-bold text-slate-700 flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Competencies */}
                    <div className="pt-6 md:pt-8 border-t border-slate-100">
                      <h3 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <BrainCircuit className="w-3.5 h-3.5" /> Competência Central
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {phase.competencies.map(c => (
                          <div key={c} className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl md:rounded-2xl border border-slate-200 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" /> {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* THE SELL: Real Problems Solved */}
                    <div className="p-6 md:p-8 bg-slate-900 rounded-[30px] md:rounded-[40px] shadow-2xl shadow-slate-200">
                      <h3 className="text-[10px] md:text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" /> Impacto no Mercado
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {phase.realProblems.map(p => (
                          <div key={p} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/item">
                            <div className="mt-0.5 p-1.5 rounded-lg bg-blue-500/20 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                              <Zap className="w-3.5 h-3.5" />
                            </div>
                            <p className="text-xs md:text-sm font-bold text-slate-200 leading-relaxed">
                              {p}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isExpanded && (
                <div className="pt-4 md:pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-blue-600 font-bold text-[10px] md:text-xs">
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full w-fit">
                    <Info className="w-3.5 h-3.5" /> Toque para ver o Impacto no Mercado
                  </span>
                  <div className="flex items-center gap-1 group-hover:translate-x-2 transition-transform self-end sm:self-auto">
                    Explorar <ChevronRight className="w-4 h-4" />
                  </div>
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
              <p className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-widest">Objetivo PPC</p>
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
