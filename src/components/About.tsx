import { motion } from 'motion/react';
import { Shield, Sparkles, Target, Zap, ChevronRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Biometric Integration',
    desc: 'Bespoke fitness tracking that adjusts resistance and pacing dynamically based on real-time cardiovascular output.',
  },
  {
    icon: Shield,
    title: 'Sanctuary Standard',
    desc: 'Medical-grade clean-air filtration systems, ultra-sterile training zones, and private executive change suites.',
  },
  {
    icon: Zap,
    title: 'Cryo-Recovery',
    desc: 'Integrated cryotherapy, hyperbaric oxygen chambers, and professional sports massage therapy on demand.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-neon-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with floating stats */}
          <div className="lg:col-span-5 relative group">
            {/* Background glowing frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-electric-blue rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative rounded-3xl bg-zinc-950 p-2 border border-zinc-900 overflow-hidden shadow-2xl">
              {/* High-contrast image */}
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
                alt="Elite Athlete Focus"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              
              {/* Glassmorphic overlay card 1 */}
              <div className="absolute top-6 right-6 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 shadow-2xl max-w-[180px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-lg bg-neon-green/10 text-neon-green">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="font-sans font-black text-xs text-white uppercase tracking-wider">BIO-ANALYSIS</span>
                </div>
                <p className="font-sans text-[10px] text-zinc-400">98% of users achieve positive physiological adaptations in 30 days.</p>
              </div>

              {/* Glassmorphic overlay card 2 */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-zinc-900/90 shadow-2xl max-w-[180px] hidden sm:block">
                <span className="font-mono text-3xl font-black text-neon-green tracking-tighter">0%</span>
                <div className="font-sans font-bold text-[10px] text-white uppercase tracking-widest mt-1">
                  COMPROMISE
                </div>
                <p className="font-sans text-[9px] text-zinc-500 mt-0.5">Engineered for elite performers.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed copy and value checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Tag */}
            <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
              // BIOMECHANICAL HEIRARCHY
            </span>
            
            {/* Header */}
            <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mb-6 leading-tight">
              RE-ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">HUMAN LIMITS</span>
            </h2>

            {/* Paragraphs */}
            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
              PowerCore Fitness is not just a gym; it is an ultra-premium athletic sanctuary built for individuals who refuse mediocrity. We combine groundbreaking biomechanical engineering with medical-grade sports science to deliver a highly optimized personal training system.
            </p>

            <p className="font-sans text-zinc-500 text-xs sm:text-sm leading-relaxed mb-10 font-light border-l-2 border-zinc-800 pl-4">
              Our bespoke philosophy ensures that every session, recovery protocol, and nutritional meal is tailored to your unique genetic blueprint, allowing you to sustain elite cognitive and physical performance.
            </p>

            {/* Features layout */}
            <div className="flex flex-col gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-900 text-neon-green group-hover:border-neon-green/40 transition-colors shadow-2xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-xs uppercase tracking-widest font-black text-white mb-1">
                        {v.title}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-xl font-light">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
