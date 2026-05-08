import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Unlock, 
  BookOpen, 
  RotateCcw, 
  X,
  Clock,
  Trophy,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { curriculumData, Discipline } from '../data/curriculum';

interface CurriculumMatrixProps {
  onClose: () => void;
}

export const CurriculumMatrix: React.FC<CurriculumMatrixProps> = ({ onClose }) => {
  const [approvedIds, setApprovedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('curriculum_approved');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('curriculum_approved', JSON.stringify(approvedIds));
  }, [approvedIds]);

  const totalHours = useMemo(() => {
    return curriculumData
      .filter(d => approvedIds.includes(d.id))
      .reduce((sum, d) => sum + d.hours, 0);
  }, [approvedIds]);

  const toggleDiscipline = (id: string, isAvailable: boolean) => {
    if (approvedIds.includes(id)) {
      setApprovedIds(prev => prev.filter(i => i !== id));
    } else if (isAvailable) {
      setApprovedIds(prev => [...prev, id]);
    }
  };

  const togglePhase = (phase: number) => {
    const phaseDisciplines = curriculumData.filter(d => d.phase === phase);
    const phaseIds = phaseDisciplines.map(d => d.id);
    const allApproved = phaseIds.every(id => approvedIds.includes(id));

    if (allApproved) {
      // Remove all disciplines of this phase
      setApprovedIds(prev => prev.filter(id => !phaseIds.includes(id)));
    } else {
      // Add all available disciplines of this phase
      // Note: In reality, some might have prerequisites not met, 
      // but usually if a user says "I passed this phase", we assume they met prerequisites.
      // However, to keep logic sound, we should probably only add those that would be available
      // or just force add them all if the user is bulk-approving.
      setApprovedIds(prev => {
        const uniqueIds = new Set([...prev, ...phaseIds]);
        return Array.from(uniqueIds);
      });
    }
  };

  const resetProgress = () => {
    if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
      setApprovedIds([]);
    }
  };

  const checkAvailability = (discipline: Discipline) => {
    if (approvedIds.includes(discipline.id)) return true;

    // Check prerequisites
    for (const pre of discipline.prerequisites) {
      if (pre.endsWith('h')) {
        const requiredHours = parseInt(pre.replace('h', ''));
        if (totalHours < requiredHours) return false;
      } else {
        if (!approvedIds.includes(pre)) return false;
      }
    }

    return true;
  };

  const phases = [1, 2, 3, 4, 5, 6];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-2 md:p-4"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-full max-w-[98vw] h-full max-h-[96vh] rounded-[24px] shadow-2xl flex flex-col overflow-hidden border border-slate-200"
      >
        {/* Header - More Compact */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-none">Matriz Curricular Interativa</h2>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">Técnico em Sistemas de Energia • IFSC</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <p className="text-sm font-bold text-slate-900">{totalHours}h <span className="text-[10px] font-medium text-slate-400">/ 2400h</span></p>
            </div>

            <button 
              onClick={resetProgress}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              title="Resetar Progresso"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Legend - Inline with Content at Top */}
        <div className="px-6 py-2 bg-white border-b border-slate-100 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-100 border border-emerald-400" />
            <span className="text-[9px] font-bold text-slate-500 uppercase">Aprovada</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[9px] font-bold text-slate-500 uppercase">Disponível</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="text-[9px] font-bold text-slate-500 uppercase">Trancada</span>
          </div>
          <p className="ml-auto text-[9px] font-medium text-slate-400 italic">Dica: Clique no título da fase para aprovar tudo.</p>
        </div>

        {/* Matrix Content - Responsive Grid */}
        <div className="flex-1 p-2 md:p-4 overflow-y-auto lg:overflow-hidden bg-slate-50/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 h-full">
            {phases.map(phase => {
              const phaseDisciplines = curriculumData.filter(d => d.phase === phase);
              const allApproved = phaseDisciplines.every(d => approvedIds.includes(d.id));
              
              return (
                <div key={phase} className="flex flex-col h-full min-w-0 bg-white/40 p-2 rounded-2xl border border-slate-100/50">
                  <button 
                    onClick={() => togglePhase(phase)}
                    className={`mb-3 py-1.5 px-3 rounded-lg border transition-all text-center group relative flex-shrink-0 ${
                      allApproved 
                        ? 'bg-emerald-100 border-emerald-200 text-emerald-800' 
                        : 'bg-white border-slate-200 text-slate-500 hover:border-blue-400 shadow-sm'
                    }`}
                  >
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] block">Fase {phase}</span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-emerald-500/10 rounded-lg transition-opacity">
                       <CheckCircle2 className={`w-3 h-3 ${allApproved ? 'text-emerald-700' : 'text-emerald-500'}`} />
                    </div>
                  </button>
                  
                  <div className="flex flex-col gap-1.5 lg:overflow-y-auto pr-1 pb-2">
                    {phaseDisciplines.map(discipline => {
                      const isApproved = approvedIds.includes(discipline.id);
                      const isAvailable = checkAvailability(discipline);
                      
                      return (
                        <DisciplineCard 
                          key={discipline.id}
                          discipline={discipline}
                          isApproved={isApproved}
                          isAvailable={isAvailable}
                          onClick={() => toggleDiscipline(discipline.id, isAvailable)}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Scrollbar CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #cbd5e1;
          }
        `}} />
      </motion.div>
    </motion.div>
  );
};

const DisciplineCard: React.FC<{
  discipline: Discipline;
  isApproved: boolean;
  isAvailable: boolean;
  onClick: () => void;
}> = ({ discipline, isApproved, isAvailable, onClick }) => {
  const getStatusColor = () => {
    if (isApproved) return 'bg-emerald-100 text-emerald-900 border-emerald-300 shadow-emerald-50/50';
    if (isAvailable) return 'bg-white text-slate-700 border-blue-400 shadow-blue-50/50';
    return 'bg-slate-50 text-slate-400 border-slate-100 opacity-60';
  };

  return (
    <motion.div 
      whileHover={isAvailable || isApproved ? { scale: 1.02, zIndex: 10 } : {}}
      whileTap={isAvailable || isApproved ? { scale: 0.98 } : {}}
      className={`relative p-2 rounded-xl border transition-all duration-200 flex flex-col gap-1 group shadow-sm ${getStatusColor()} ${isAvailable || isApproved ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className={`text-[8px] font-bold px-1 py-0.5 rounded ${isApproved ? 'bg-emerald-200/50 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
          {discipline.id}
        </span>
        {isApproved && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />}
      </div>

      <h4 className={`text-[9px] font-bold leading-tight line-clamp-2 ${isApproved ? 'text-emerald-900' : 'text-slate-800'}`}>
        {discipline.name}
      </h4>

      <div className="mt-auto pt-1 flex flex-col gap-1">
        <div className={`flex items-center justify-between ${isApproved ? 'opacity-80' : 'opacity-60'}`}>
          <div className="flex items-center gap-1">
            <Clock className="w-2 h-2" />
            <span className="text-[8px] font-bold">{discipline.hours}h</span>
          </div>
          {!isApproved && !isAvailable && discipline.prerequisites.length > 0 && (
            <div className="flex items-center gap-0.5 text-red-500">
              <Lock className="w-1.5 h-1.5" />
              <span className="text-[7px] font-extrabold uppercase">Trancada</span>
            </div>
          )}
          {isAvailable && !isApproved && (
             <span className="text-[7px] font-extrabold text-blue-500 uppercase tracking-tighter">Disponível</span>
          )}
        </div>

        {!isAvailable && !isApproved && discipline.prerequisites.length > 0 && (
          <div className="px-1.5 py-1 bg-slate-200/30 rounded-md border border-slate-200/50 mt-0.5">
            <p className="text-[7px] font-bold text-slate-500 leading-none mb-0.5 uppercase opacity-70">Exige:</p>
            <p className="text-[8px] font-black text-slate-600 leading-tight">
              {discipline.prerequisites.join(', ')}
            </p>
          </div>
        )}
      </div>

      {isAvailable && !isApproved && (
        <div className="absolute inset-0 bg-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </motion.div>
  );
};
