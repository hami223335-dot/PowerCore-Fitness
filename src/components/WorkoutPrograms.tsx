import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Flame, Dumbbell, Award, FlameKindling, Zap } from 'lucide-react';
import { WorkoutProgram } from '../types';

const programsData: WorkoutProgram[] = [
  {
    id: 'athletic-hybrid',
    name: 'Athletic Hybrid',
    tagline: 'HIGH-INTENSITY METABOLIC STABILIZATION',
    description: 'Designed for deep muscular conditioning. Combines explosive Olympic compound lifts with short, high-velocity treadmill sprint intervals.',
    duration: '60 Mins',
    level: 'Advanced',
    caloriesBurn: '850 kcal',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800',
    intensity: 'Extreme'
  },
  {
    id: 'metabolic-reset',
    name: 'Metabolic Reset',
    tagline: 'OPTIMIZED FAT RECOMPOSITION & VO2 MAX',
    description: 'Focuses on elevating your base aerobic capacity and oxygen utilization. Perfect for rapid, sustainable cellular lipid oxidation.',
    duration: '45 Mins',
    level: 'All Levels',
    caloriesBurn: '650 kcal',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    intensity: 'High'
  },
  {
    id: 'apex-strength',
    name: 'Apex Strength',
    tagline: 'HYPERTROPHY & HYPER-TROPHIC TENSION',
    description: 'A pure resistance-focused crucible targeting myofibrillar hypertrophy. Track precise percentage loads on structural barbell sessions.',
    duration: '75 Mins',
    level: 'Intermediate',
    caloriesBurn: '500 kcal',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    intensity: 'Medium'
  },
  {
    id: 'zen-mobility',
    name: 'Zen Mobility & Bio-Flow',
    tagline: 'FASCIA REPAIR & MYOFASCIAL RELEASE',
    description: 'Decompress active nerve trunks, restore joints, and realign muscular chains. Combines slow restorative flow with static compression.',
    duration: '50 Mins',
    level: 'Beginner',
    caloriesBurn: '300 kcal',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    intensity: 'Medium'
  }
];

export default function WorkoutPrograms() {
  const [activeTab, setActiveTab] = useState<'All' | 'High Intensity' | 'Strength' | 'Mind & Body'>('All');

  const filteredPrograms = programsData.filter((program) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'High Intensity') return program.intensity === 'Extreme' || program.intensity === 'High';
    if (activeTab === 'Strength') return program.id === 'apex-strength' || program.id === 'athletic-hybrid';
    if (activeTab === 'Mind & Body') return program.id === 'zen-mobility';
    return true;
  });

  return (
    <section id="programs" className="relative py-24 bg-[#050505] overflow-hidden border-b border-zinc-950">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-electric-blue/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-electric-blue tracking-[0.3em] uppercase mb-3 inline-block">
              // CUSTOM ATHLETIC PROTOCOLS
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
              CHAMPIONSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-green">WORKOUT PROGRAMS</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
              Scientifically engineered programming structured to align with your personal physiological adaptation rates and wellness markers.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-900/60 self-start md:self-end">
            {(['All', 'High Intensity', 'Strength', 'Mind & Body'] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 text-neon-green border border-zinc-800'
                      : 'text-zinc-500 hover:text-white border border-transparent'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="interactive-card group relative rounded-3xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl flex flex-col sm:flex-row h-auto min-h-[280px]"
              >
                {/* Left Side: Program visual (grayscale hover colored) */}
                <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-l from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
                  <img
                    src={p.image}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Intensity Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-800">
                    <Zap className="w-3.5 h-3.5 text-neon-green" />
                    <span className="font-sans text-[9px] font-black uppercase text-white tracking-widest">
                      {p.intensity} INTENSITY
                    </span>
                  </div>
                </div>

                {/* Right Side: Details panel */}
                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase block mb-1">
                      {p.tagline}
                    </span>
                    <h3 className="font-sans text-lg font-black uppercase text-white tracking-tight mb-3 group-hover:text-neon-green transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-6">
                      {p.description}
                    </p>
                  </div>

                  {/* Program Biometrics metrics bar */}
                  <div className="grid grid-cols-3 gap-4 border-t border-zinc-900/80 pt-4 mt-auto">
                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-wider block uppercase mb-1">
                        DURATION
                      </span>
                      <div className="flex items-center gap-1 text-zinc-200">
                        <Clock className="w-3.5 h-3.5 text-neon-green" />
                        <span className="font-sans text-xs font-bold">{p.duration}</span>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-wider block uppercase mb-1">
                        LEVEL
                      </span>
                      <div className="flex items-center gap-1 text-zinc-200">
                        <Award className="w-3.5 h-3.5 text-electric-blue" />
                        <span className="font-sans text-xs font-bold">{p.level}</span>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-wider block uppercase mb-1">
                        EST BURN
                      </span>
                      <div className="flex items-center gap-1 text-zinc-200">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        <span className="font-sans text-xs font-bold">{p.caloriesBurn}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ambient glowing hover dot */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon-green scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
