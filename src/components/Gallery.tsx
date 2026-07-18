import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Eye, ShieldAlert } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'strength' | 'cardio' | 'mind' | 'recovery';
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    category: 'strength',
    title: 'Precision Heavy Olympic Lifting Platforms',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g2',
    category: 'cardio',
    title: 'High-Elevation VO2 Max Skillrun Treadmills',
    image: 'https://images.unsplash.com/photo-1538797563031-943d71e47ae5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g3',
    category: 'mind',
    title: 'Oak-Heated Zen Restorative Flow Sanctum',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g4',
    category: 'recovery',
    title: 'Cryotherapy Muscle Recovery Plunge Pools',
    image: 'https://images.unsplash.com/photo-1519824141121-997e5b99ad32?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g5',
    category: 'strength',
    title: 'Premium Hand-Knurled Chrome Dumbbells Stack',
    image: 'https://images.unsplash.com/photo-1623874514711-0f321305f318?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g6',
    category: 'strength',
    title: 'Biometric Compound Movement squat cages',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strength' | 'cardio' | 'mind' | 'recovery'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="relative py-24 bg-[#050505] overflow-hidden border-b border-zinc-950">
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-neon-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-electric-blue tracking-[0.3em] uppercase mb-3 inline-block">
              // ATMOSPHERIC MEDIA ARCHIVE
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
              VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-green">GALLERY</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
              Explore the luxurious architecture, premium workout areas, and high-tech recovery systems that define the PowerCore athletic experience.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-900/60 self-start md:self-end">
            {(['all', 'strength', 'cardio', 'mind', 'recovery'] as const).map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
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

        {/* Gallery grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item.image)}
                className="group relative rounded-2xl aspect-[4/3] bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl cursor-pointer"
                id={`gallery-item-${item.id}`}
              >
                {/* Image panel */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark Hover overlay panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-350 z-10 flex flex-col justify-end p-6" />

                {/* Action button details */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[8px] bg-neon-green text-black font-black px-2.5 py-1.5 rounded-md self-start tracking-widest uppercase">
                    {item.category}
                  </span>
                  <div>
                    <h3 className="font-sans text-xs sm:text-sm font-black text-white uppercase tracking-wider mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-neon-green text-[10px] font-sans font-bold uppercase tracking-widest">
                      <Eye className="w-4 h-4" /> Expand Media
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Full Screen Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-4 sm:p-8"
            id="gallery-lightbox-modal"
          >
            {/* Close button indicator */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-2xl cursor-pointer"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[80vh] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-1 shadow-2xl"
            >
              <img
                src={selectedImage}
                alt="Selected Lightbox Grid Preview"
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[78vh] object-contain rounded-xl bg-zinc-950"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
