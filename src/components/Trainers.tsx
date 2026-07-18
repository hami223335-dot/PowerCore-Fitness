import { motion } from 'motion/react';
import { Star, MessageSquare, Award, ArrowUpRight } from 'lucide-react';
import { Trainer } from '../types';

const trainersData: Trainer[] = [
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: 'Head of Human Performance',
    certifications: ['M.S. Kinesiology', 'CSCS *D', 'USAW Olympic Coach'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600',
    rating: 5,
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    },
    quote: "Our programming respects physiological adaptations. We don't train harder, we train smarter."
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'VO2 Max & Cardio Metabolic Specialist',
    certifications: ['B.S. Exercise Science', 'NASM-PES', 'FMS Level 2'],
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    rating: 5,
    socials: {
      instagram: '#',
      twitter: '#'
    },
    quote: "Metabolic rate is a configurable variable. Re-engineer your lipids, transform your endurance."
  },
  {
    id: 'christian',
    name: 'Christian Blake',
    role: 'Apex Hypertrophy & Strength Lead',
    certifications: ['Certified Strength Specialist', 'CSPS', 'IKFF Kettlebell Master'],
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    socials: {
      instagram: '#',
      linkedin: '#'
    },
    quote: "Mechanical tension is the driver of structural change. Let's sculpt raw power safely."
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
            // MASTER SCIENTIFIC COACHING STAFF
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            ELITE LEVEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">PERSONAL TRAINERS</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
            Our trainers are certified exercise physiologists, kinesiology graduates, and Olympic movement practitioners dedicated to optimization.
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-zinc-950 border border-zinc-900/85 overflow-hidden shadow-2xl flex flex-col justify-between"
              id={`trainer-card-${t.id}`}
            >
              {/* Card Header Media Block */}
              <div className="relative h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Rating overlay block */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-zinc-800">
                  <Star className="w-3.5 h-3.5 fill-neon-green text-neon-green" />
                  <span className="font-sans text-[10px] font-black text-white">{t.rating}</span>
                </div>
              </div>

              {/* Card Metadata / Body Panel */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block mb-1">
                    {t.role}
                  </span>
                  <h3 className="font-sans text-lg font-black uppercase text-white tracking-tight mb-4 group-hover:text-neon-green transition-colors">
                    {t.name}
                  </h3>
                  
                  {/* Quote bubble block */}
                  <p className="font-sans text-xs text-zinc-400 italic leading-relaxed font-light mb-6 border-l-2 border-zinc-800 pl-3">
                    "{t.quote}"
                  </p>
                </div>

                {/* Certifications and social trigger block */}
                <div className="border-t border-zinc-900/80 pt-5 mt-auto flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {t.certifications.map((cert, index) => (
                      <span key={index} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-850 font-sans text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Aesthetic social trigger arrow */}
                  <a
                    href="#contact"
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-neon-green transition-all text-zinc-400 hover:text-neon-green cursor-pointer"
                    title={`Book consultation with ${t.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
