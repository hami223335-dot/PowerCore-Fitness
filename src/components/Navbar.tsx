import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Award } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Programs', href: '#programs' },
  { name: 'Membership', href: '#membership' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background threshold
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-black/60 backdrop-blur-md border-b border-zinc-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        id="main-navigation-bar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:border-neon-green/50 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <Shield className="w-5 h-5 text-neon-green transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-neon-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-sans text-xl font-black tracking-widest text-white uppercase">
              POWER<span className="text-neon-green transition-all duration-300 group-hover:text-electric-blue">CORE</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/40 p-1.5 rounded-full border border-zinc-900/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-neon-green font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-zinc-900 border border-zinc-850 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Join Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#membership"
              className="relative px-5 py-2.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold text-black bg-neon-green hover:bg-[#46ff26] shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all duration-300"
            >
              Join Today
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center px-8"
          >
            {/* Glowing accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-neon-green/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-electric-blue/5 blur-[100px] pointer-events-none" />

            {/* Menu Items */}
            <div className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-lg font-black uppercase tracking-[0.2em] transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-neon-green'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="#membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 px-8 py-4 w-56 rounded-xl font-sans text-sm uppercase tracking-widest font-black text-black bg-neon-green hover:bg-[#46ff26] shadow-[0_0_20px_rgba(57,255,20,0.4)] text-center transition-all"
              >
                Join Today
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
