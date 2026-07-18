import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShieldCheck, Heart, Award } from 'lucide-react';
import { Facility } from '../types';

const facilitiesData: Facility[] = [
  {
    id: 'cardio',
    name: 'Cardio Zone',
    description: 'Equipped with custom integrated Woodway treadmills, Technogym Skillruns, and immersive virtual terrain screens. Access real-time metric sharing with your fitness wearable.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200',
    features: ['Woodway curved slatted treadmills', 'Technogym Skillrun metrics integration', 'Oxy-rich air conditioning supply', 'Individual multimedia immersive pods']
  },
  {
    id: 'weights',
    name: 'Free Weights',
    description: 'A pure power enclave featuring Eleiko competition-grade plates, custom matte black Eleiko bars, solid iron dumbbells up to 150 lbs, and dual-axis cable stations.',
    image: 'https://images.unsplash.com/photo-1623874514711-0f321305f318?auto=format&fit=crop&q=80&w=1200',
    features: ['Eleiko IWF certified plates & bars', 'Custom hand-knurled iron dumbbells', 'Heavy-duty steel squat cages', 'Pressure-absorbent double rubber flooring']
  },
  {
    id: 'functional',
    name: 'Functional Training',
    description: 'Designed for athletic movement. A dedicated 30-meter indoor turf sprinting track, bespoke kettlebell trees, battle ropes, and resistance band systems.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200',
    features: ['Premium indoor sprinting turf', 'Rogue Fitness kettlebell systems', 'Adjustable height medicine ball targets', 'Olympic speed sled sleds']
  },
  {
    id: 'crossfit',
    name: 'CrossFit',
    description: 'An industrial strength crucible with multi-station rig frames, climbing ropes, heavy gym rings, plyoboxes, concept-2 rowers, and premium AirBikes.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=1200',
    features: ['Rigid multi-grip ceiling pull-up rigs', 'Concept2 Ergometer Rowers & SkiErgs', 'Chalk stations & lifting platforms', 'Heavy sandbags & strongman logs']
  },
  {
    id: 'yoga',
    name: 'Yoga Studio',
    description: 'A serene soundproof enclave with solid oak heated floor elements, custom bamboo-scented air humidifiers, ambient starry ceilings, and luxury alignment mats.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200',
    features: ['Individually controlled infrared heaters', 'Bamboo and lavender aromatherapy mist', 'Lululemon alignment mats & straps', 'Full soundproof acoustical barriers']
  },
  {
    id: 'locker',
    name: 'Locker Rooms',
    description: 'Indulge in spa-level privacy. Features encrypted digital keyless security codes, marble monsoon rain showers, organic Dyson hair bars, and fresh dry-saunas.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    features: ['Monsoon rain-forest high pressure showers', 'Dyson Airwrap styling counters', 'Keyless biometric lockers', 'Complimentary fresh eucalyptus towels']
  },
  {
    id: 'bar',
    name: 'Protein Bar',
    description: 'Recharge your systems with certified biological proteins. Our nutrition experts serve cold-pressed protein blends customized with vitamins, adaptogens, and amino acids.',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1200',
    features: ['Cold-pressed organic superfood juices', 'Whey, vegan pea, and collagen bases', 'Curated cognitive adaptogen add-ons', 'Pre-workout iced nitrogen espresso']
  },
  {
    id: 'recovery',
    name: 'Recovery Area',
    description: 'A premium therapeutic room containing high-pressure ice plunge baths, zero-gravity massage lounges, and full-spectrum infrared saunas designed to optimize cellular repair.',
    image: 'https://images.unsplash.com/photo-1519824141121-997e5b99ad32?auto=format&fit=crop&q=80&w=1200',
    features: ['Cryotherapy cold-plunge (39°F / 4°C)', 'Full-spectrum medical infrared saunas', 'Theragun percussive therapy zones', 'Normatec dynamic air compression legs']
  }
];

export default function Facilities() {
  const [selectedId, setSelectedId] = useState(facilitiesData[0].id);

  const activeFacility = facilitiesData.find((f) => f.id === selectedId) || facilitiesData[0];

  return (
    <section id="facilities" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      
      {/* Background neon accents */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
            // ELITE LEVEL EQUIPMENT
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            OUR PRESET <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">FACILITIES</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
            Every millimeter of PowerCore is designed with premium materials, state-of-the-art equipment, and professional sports recovery facilities.
          </p>
        </div>

        {/* Interactive Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Facility Menu Buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none scroll-smooth">
            {facilitiesData.map((f) => {
              const isActive = f.id === selectedId;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedId(f.id)}
                  className={`w-full text-left px-6 py-4.5 rounded-xl border font-sans text-xs uppercase tracking-widest font-black flex items-center justify-between transition-all duration-300 min-w-[200px] cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_15px_rgba(57,255,20,0.15)]'
                      : 'bg-zinc-950/40 border-zinc-900/60 text-zinc-500 hover:text-zinc-300 hover:border-zinc-850'
                  }`}
                  id={`facility-btn-${f.id}`}
                >
                  <span>{f.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="facilityIndicator"
                      className="w-1.5 h-1.5 rounded-full bg-neon-green"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: High Fidelity Details Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative rounded-3xl bg-zinc-950 border border-zinc-900/80 p-6 sm:p-8 overflow-hidden shadow-2xl"
              >
                {/* Large responsive graphic preview */}
                <div className="relative h-[250px] sm:h-[380px] rounded-2xl overflow-hidden mb-8 group shadow-2xl">
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/10 to-transparent z-10 pointer-events-none" />
                  <img
                    src={activeFacility.image}
                    alt={activeFacility.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Small tag */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-zinc-800">
                    <ShieldCheck className="w-4 h-4 text-neon-green" />
                    <span className="font-sans text-[10px] font-bold text-white uppercase tracking-widest">
                      ACTIVE FACILITY ZONE
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Column: Description */}
                  <div className="md:col-span-7">
                    <h3 className="font-sans text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-4">
                      {activeFacility.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                      {activeFacility.description}
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                        <span>CERTIFIED AREA</span>
                      </div>
                      <div className="w-[1px] h-3.5 bg-zinc-800" />
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                        <span>CAPACITY: ENHANCED</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specs Bullet list */}
                  <div className="md:col-span-5 bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl">
                    <span className="font-sans font-bold text-[10px] text-white uppercase tracking-widest block mb-4 border-b border-zinc-800 pb-2">
                      SPECIFICATIONS & HARDWARE
                    </span>
                    <ul className="flex flex-col gap-3">
                      {activeFacility.features.map((feature, index) => (
                        <li key={index} className="flex gap-2.5 items-start">
                          <Check className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-zinc-300 font-light leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
