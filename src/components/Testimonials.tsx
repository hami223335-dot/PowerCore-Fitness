import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Ethan Thorne',
    role: 'Venture Capital Partner',
    content: 'The executive locker rooms and Cryotherapy lanes have re-engineered my weekly recovery cycle. I can transition from heavy athletic performance compound lifts to key investment pitches in under 45 minutes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    achievement: 'Gained 8 lbs Muscle, Decreased Fat by 4%'
  },
  {
    id: 't2',
    name: 'Sarah Connor',
    role: 'Amateur Ironman Competitor',
    content: "The Woodway Skillrun treadmills and cardio telemetry sync allow me to analyze aerobic stamina thresholds down to the exact heart beat. There is simply no other gym in the country with this level of biological feedback.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    achievement: 'Boosted VO2 Max by 14% in 3 Months'
  },
  {
    id: 't3',
    name: 'Liam Sterling',
    role: 'Founding Tech CEO',
    content: "As a business owner, time is my most valued resource. PowerCore's 24/7 keyless biometric access, private work pods, and tailored nutrition shakes prepare me to sustain massive mental focus and raw physical stamina.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    achievement: 'Reduced Daily Stress Markers by 30%'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      
      {/* Background neon accents */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
            // UNBIASED FIELD REPORTS
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            TESTIMONIALS FROM <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">OUR ATHLETES</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
            Read verified feedback from tech executives, professional racers, and high performers who have integrated our biometric sanctuary.
          </p>
        </div>

        {/* Testimonials List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-zinc-950 p-8 border border-zinc-900 overflow-hidden shadow-2xl flex flex-col justify-between"
              id={`testimonial-card-${t.id}`}
            >
              {/* Thin accent ring */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-green/30 to-electric-blue/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Card Quote icon & Rating block */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-neon-green opacity-40 rotate-180" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-neon-green text-neon-green" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-8">
                  "{t.content}"
                </p>
              </div>

              {/* Bio / Footer Panel */}
              <div className="border-t border-zinc-900/80 pt-6 mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-zinc-800"
                  />
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest font-black text-white">
                      {t.name}
                    </h4>
                    <span className="font-sans text-[10px] text-zinc-500">
                      {t.role}
                    </span>
                  </div>
                </div>

                {/* Achieved metric tag */}
                <div className="flex items-center gap-2 bg-zinc-900/40 border border-zinc-900/80 px-3 py-2 rounded-xl">
                  <ShieldCheck className="w-3.5 h-3.5 text-neon-green flex-shrink-0" />
                  <span className="font-sans text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                    {t.achievement}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
