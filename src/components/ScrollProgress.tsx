import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Phone, MessageCircle, Flame } from 'lucide-react';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);

      // Show floating actions after scrolling 300px
      if (scrollTop > 300) {
        setShowWidgets(true);
      } else {
        setShowWidgets(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* 1. Slim Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-zinc-950/20 z-[999] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-neon-green via-electric-blue to-neon-green bg-[length:200%_auto] animate-gradient-spin shadow-[0_0_8px_#39ff14]"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* 2. Floating Action Widgets */}
      <AnimatePresence>
        {showWidgets && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            {/* WhatsApp Trigger */}
            <motion.a
              href="https://wa.me/15550199?text=Hello%20PowerCore%20Fitness!%20I%20would%20like%20to%20inquire%20about%20your%20premium%20membership%20plans."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-colors border border-green-400/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>

            {/* Phone Dial Trigger */}
            <motion.a
              href="tel:+15550199"
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-100 hover:text-white hover:bg-zinc-850 shadow-2xl transition-colors"
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </motion.a>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neon-green text-black font-bold shadow-[0_0_15px_#39ff14] hover:bg-[#46ff26] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ChevronUp className="w-6 h-6 stroke-[3px]" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Sticky Bottom CTA for Mobile */}
      <AnimatePresence>
        {showWidgets && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 px-6 py-4 flex items-center justify-between md:hidden"
          >
            <div>
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-neon-green" />
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">POWERCORE SPECIAL</span>
              </div>
              <p className="font-sans text-[10px] text-zinc-400">Join today with 0% enrollment fee</p>
            </div>
            <a
              href="#membership"
              className="bg-neon-green text-black hover:bg-[#46ff26] font-sans font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-[0_0_10px_rgba(57,255,20,0.3)]"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
