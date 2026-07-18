import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        // Accelerate near the end
        const increment = prev > 70 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -50,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Ambient Glowing Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon-green/10 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-electric-blue/10 blur-[100px]" />

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Pulsing Shield Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.9, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl mb-6 overflow-hidden"
            >
              {/* Spinning gradient border overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 via-transparent to-electric-blue/20 animate-pulse" />
              <Shield className="w-10 h-10 text-neon-green relative z-10" />
            </motion.div>

            {/* Brand Name with letter-spacing animation */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-3xl font-black tracking-[0.3em] uppercase text-white"
              >
                POWER<span className="text-neon-green">CORE</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-sans text-xs tracking-[0.5em] uppercase text-zinc-400 mb-8"
            >
              FUTURE OF FITNESS
            </motion.p>

            {/* Premium Progress Bar */}
            <div className="w-48 h-[2px] bg-zinc-900 rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-green to-electric-blue rounded-full shadow-[0_0_10px_#39ff14]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Live Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-sm font-semibold tracking-widest text-zinc-500"
            >
              {progress}%
            </motion.div>
          </div>

          {/* Aesthetic Micro-Text at Bottom */}
          <div className="absolute bottom-10 left-10 text-left font-mono text-[9px] text-zinc-700 tracking-[0.2em] hidden sm:block">
            SYSTEM_BOOT: TRUE<br />
            PRESET_LOADED: POWERCORE_CORE_V1<br />
            DISPLAY_MODE: ULTRA_PREMIUM
          </div>

          <div className="absolute bottom-10 right-10 text-right font-mono text-[9px] text-zinc-700 tracking-[0.2em] hidden sm:block">
            LOCALE_TIME: 2026_07<br />
            STATUS: READY_TO_TRAIN
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
