import React, { useState } from 'react';
import { Shield, Send, Check, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#020202] pt-20 pb-12 overflow-hidden border-t border-zinc-950" id="main-website-footer">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-green/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900/80">
          
          {/* Logo & Brand Pitch */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-2 group cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800">
                <Shield className="w-5 h-5 text-neon-green" />
              </div>
              <span className="font-sans text-xl font-black tracking-widest text-white uppercase">
                POWER<span className="text-neon-green">CORE</span>
              </span>
            </a>

            <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-sm font-light">
              Re-engineering the future of physiological conditioning. Experience an ultra-premium fitness sanctuary loaded with Connected Biometric Hardware, NASA-Grade Cryo-Saunas, and Olympian-Level coaching staffs.
            </p>

            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'YouTube', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="font-mono text-[9px] text-zinc-600 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-sans text-xs font-black uppercase text-white tracking-widest">
              NAVIGATION PORTALS
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Facilities', href: '#facilities' },
                { name: 'Programs', href: '#programs' },
                { name: 'Membership', href: '#membership' },
                { name: 'Trainers', href: '#trainers' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-zinc-500 hover:text-neon-green transition-colors font-light cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-sans text-xs font-black uppercase text-white tracking-widest">
              BIOMETRIC PROTOCOL UPDATES
            </h4>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed font-light">
              Subscribe to our monthly performance briefings, custom macronutrient blueprints, and early event invitations.
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isSubscribed ? "Successfully Subscribed!" : "Enter your email address"}
                disabled={isSubscribed}
                className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-4 pr-12 py-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-neon-green transition-colors disabled:opacity-75 disabled:border-neon-green/40 disabled:text-neon-green"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-neon-green cursor-pointer disabled:bg-transparent disabled:text-neon-green"
              >
                {isSubscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>

        </div>

        {/* Disclaimer & Legal Cluster */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Universal Demo Disclaimer */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-3 text-zinc-600">
              <Sparkles className="w-4 h-4 text-zinc-600" />
              <span className="font-sans font-bold text-[8px] uppercase tracking-widest leading-none">
                UNIVERSAL DEMONSTRATION PLATFORM
              </span>
            </div>
            <p className="font-sans text-[10px] text-zinc-600 leading-relaxed font-light">
              **Universal Template Disclaimer**: PowerCore Fitness is a fictional showcase fitness brand. This website is a universal layout constructed for demonstration purposes. All athlete quotes, coaching biographies, location addresses, telephone connections, and membership plans are simulated placeholder data. This demo can easily be configured for any gym by simply overriding these localized copy strings.
            </p>
          </div>

          {/* Copy specs */}
          <div className="md:col-span-4 md:text-right font-mono text-[9px] text-zinc-700 tracking-wider">
            © 2026 POWERCORE FITNESS. <br />
            MADE WITH INTENSE FOCUS. <br />
            ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
