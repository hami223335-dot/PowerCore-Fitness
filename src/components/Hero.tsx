import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldAlert, Flame, Play, ArrowRight } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

// Custom Animated Counter hook/component for the stats
function Counter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black py-20 lg:py-0"
    >
      {/* 1. Base Generated Atmospheric Gym Image Background with high-contrast vignette */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-[10s] scale-105 select-none pointer-events-none"
        style={{
          backgroundImage: `url('/src/assets/images/luxury_gym_hero_bg_1784376223614.jpg')`,
        }}
      />

      {/* Dark overlays to create rich high-contrast space */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/90 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* 2. Interactive Three.js Scene: Floating 3D dumbbells, lighting & particle field */}
      <ThreeCanvas />

      {/* Floating ambient orb accents */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[150px] z-10 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 40}px, 0)`,
          top: '15%',
          left: '10%'
        }}
      />
      <div 
        className="absolute w-[450px] h-[440px] rounded-full bg-electric-blue/5 blur-[130px] z-10 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0)`,
          bottom: '15%',
          right: '10%'
        }}
      />

      {/* 3. Hero Content Panel */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center text-center mt-8 lg:mt-16">
        
        {/* Subtle top pill alert */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-2xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-neon-green animate-ping" />
            <span className="font-sans text-[10px] sm:text-xs font-bold text-zinc-300 uppercase tracking-[0.25em]">
              THE NEW ERA OF ATHLETICISM
            </span>
          </motion.div>
        </div>

        {/* Display Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `translate3d(${mousePosition.x * 12}px, ${mousePosition.y * 12}px, 0)`,
            }}
            className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] uppercase text-white tracking-tighter"
          >
            UNLEASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-[#a3ff14] to-electric-blue drop-shadow-[0_0_30px_rgba(57,255,20,0.2)]">STRENGTH</span>
          </motion.h1>
        </div>

        {/* Cinematic Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-sm sm:text-lg md:text-xl text-zinc-400 tracking-[0.15em] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Train Smarter. Get Stronger. Live Better. Experience the ultimate futuristic luxury fitness sanctuary.
        </motion.p>

        {/* Premium CTA Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 relative z-30"
        >
          {/* Main Join Button with glowing shadow */}
          <a
            href="#membership"
            className="w-full sm:w-auto px-8 py-4.5 rounded-2xl font-sans text-xs uppercase tracking-[0.2em] font-black text-black bg-neon-green hover:bg-[#46ff26] shadow-[0_0_25px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.7)] hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Join Today <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
          </a>

          {/* Membership Secondary Button with border hover glow */}
          <a
            href="#membership"
            className="w-full sm:w-auto px-8 py-4.5 rounded-2xl font-sans text-xs uppercase tracking-[0.2em] font-bold text-white bg-zinc-950/40 hover:bg-zinc-900 border border-zinc-800 hover:border-electric-blue shadow-2xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            Membership Plans
          </a>

          {/* Free Day Pass Trial Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4.5 rounded-2xl font-sans text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white bg-transparent border border-zinc-900 hover:border-zinc-850 hover:bg-zinc-950/25 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Claim Free Pass
          </a>
        </motion.div>

        {/* 4. Animated Counters Section (Aesthetic Stats Showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 rounded-3xl bg-zinc-950/55 border border-zinc-900/60 backdrop-blur-md max-w-5xl mx-auto w-full shadow-2xl relative"
        >
          <div className="flex flex-col items-center justify-center border-r border-zinc-900/80 last:border-0 md:border-r">
            <div className="flex items-center gap-1.5">
              <Counter value={5000} suffix="+" />
            </div>
            <span className="font-mono text-[9px] sm:text-xs text-zinc-500 tracking-[0.2em] uppercase mt-1">
              Active Members
            </span>
          </div>

          <div className="flex flex-col items-center justify-center md:border-r border-zinc-900/80 last:border-0">
            <div className="flex items-center gap-1.5">
              <Counter value={24} suffix="+" />
            </div>
            <span className="font-mono text-[9px] sm:text-xs text-zinc-500 tracking-[0.2em] uppercase mt-1">
              Elite Coaches
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-zinc-900/80 last:border-0 md:border-r">
            <div className="flex items-center gap-1.5">
              <Counter value={15} suffix="K" />
            </div>
            <span className="font-mono text-[9px] sm:text-xs text-zinc-500 tracking-[0.2em] uppercase mt-1">
              Sq Ft Sanctuary
            </span>
          </div>

          <div className="flex flex-col items-center justify-center last:border-0">
            <div className="flex items-center gap-1.5">
              <Counter value={99} suffix="%" />
            </div>
            <span className="font-mono text-[9px] sm:text-xs text-zinc-500 tracking-[0.2em] uppercase mt-1">
              Goal Achievement
            </span>
          </div>
        </motion.div>
      </div>

      {/* 5. Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 hidden md:flex">
        <span className="font-mono text-[8px] text-zinc-600 tracking-[0.3em] uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-zinc-800 flex items-start justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_8px_#39ff14]"
          />
        </div>
      </div>
    </section>
  );
}
