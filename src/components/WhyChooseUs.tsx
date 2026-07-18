import { motion } from 'motion/react';
import { Eye, ShieldCheck, Flame, Compass, HeartPulse, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: '24/7 Biometric Entry',
    desc: 'Uncapped access via encrypted retina or hand scanners. Step inside your private athletic temple whenever motivation strikes.',
    accent: 'neon-green'
  },
  {
    icon: HeartPulse,
    title: 'Biometric Smart Gym',
    desc: 'Equipment automatically adjusts heights, seat-backs, weight stacks, and resistances using cloud-stored body measurements.',
    accent: 'electric-blue'
  },
  {
    icon: RefreshCw,
    title: 'NASA-Grade Cryotherapy',
    desc: 'Drastically reduce post-workout systemic soreness and inflammation. Recover at sub-zero temperatures under clinical protocols.',
    accent: 'electric-blue'
  },
  {
    icon: ShieldCheck,
    title: 'Medical Sports Science',
    desc: 'Benefit from physiological oversight. Regular DNA fitness reviews, body fat scanners, and hormone optimization profiles.',
    accent: 'neon-green'
  },
  {
    icon: Flame,
    title: 'Macro Protein Bar',
    desc: 'Post-workout fuel prepared individually based on your smartwatch workout statistics. Fresh organic components, 0% chemicals.',
    accent: 'neon-green'
  },
  {
    icon: Compass,
    title: 'Private Recovery Suites',
    desc: 'Decompress inside state-of-the-art infrared saunas, cryo tubs, zero-gravity massage capsules, and high-oxygen chambers.',
    accent: 'electric-blue'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-[#050505] overflow-hidden border-t border-b border-zinc-950">
      
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-neon-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-electric-blue tracking-[0.3em] uppercase mb-3 inline-block">
            // UNCOMPROMISING STANDARDS
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            WHY THE ELITE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-green">CHOOSE POWERCORE</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
            We operate on a standard far superior to commercial gyms. No queues, no crowded floors, no outdated machinery. Pure performance optimization.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const isGreen = f.accent === 'neon-green';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-zinc-950 p-8 border border-zinc-900 overflow-hidden shadow-2xl transition-all duration-300 cursor-default"
                id={`feature-card-${idx}`}
              >
                {/* Neon Glow Hover Border Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-10 pointer-events-none ${
                    isGreen ? 'from-neon-green to-transparent' : 'from-electric-blue to-transparent'
                  }`}
                />
                
                {/* Thin glow bottom line */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left ${
                    isGreen ? 'bg-neon-green shadow-[0_0_10px_#39ff14]' : 'bg-electric-blue shadow-[0_0_10px_#00e5ff]'
                  }`}
                />

                {/* Card Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:scale-110 mb-6 ${
                  isGreen 
                    ? 'text-neon-green group-hover:border-neon-green/30 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]' 
                    : 'text-electric-blue group-hover:border-electric-blue/30 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Card Title */}
                <h3 className="font-sans text-xs sm:text-sm font-black uppercase text-white tracking-widest mb-3">
                  {f.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                  {f.desc}
                </p>

                {/* Subtle bottom details */}
                <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                    SYSTEM_ACTIVE
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-neon-green' : 'bg-electric-blue'}`} />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
