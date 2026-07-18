import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle, Ticket, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'apex',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium reservation ticket code generation
    const randomCode = 'PWR-' + Math.floor(Math.random() * 90000 + 10000);
    setTicketId(randomCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', plan: 'apex', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
            // CONCIERGE SCHEDULING SECTOR
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            ACQUIRE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">GUEST PASS</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
            Fill out your credentials below to reserve an elite full-access guest day pass or schedule a biometric body scan consultation.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Premium Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950 border border-zinc-900 p-6 sm:p-10 shadow-2xl relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Mercer"
                          className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@example.com"
                          className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. (555) 0199"
                          className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                          PREFERRED SUBSCRIPTION
                        </label>
                        <select
                          value={formData.plan}
                          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                          className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors appearance-none cursor-pointer"
                        >
                          <option value="essential">Essential Athlete ($120/mo)</option>
                          <option value="apex">Apex Premium ($220/mo)</option>
                          <option value="vip">VIP Black Card ($450/mo)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                        SPECIAL PROTOCOLS / HEALTH INQUIRIES
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your active targets or relevant health constraints..."
                        className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest font-black text-black bg-neon-green hover:bg-[#46ff26] shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      Reserve Active Pass <Ticket className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="ticket"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/40 flex items-center justify-center text-neon-green mb-2 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide mb-2">
                      PASS RESERVED SUCCESSFULLY
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed font-light">
                      Your entry token has been compiled. Show the barcode below to the front desk concierge to activate your pass.
                    </p>
                  </div>

                  {/* 100% realistic luxury pass card */}
                  <div className="w-full max-w-sm border border-zinc-800 bg-zinc-950 p-6 rounded-2xl relative shadow-2xl">
                    {/* Visual notches on sides */}
                    <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-r border-zinc-900" />
                    <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-l border-zinc-900" />

                    <div className="flex justify-between border-b border-zinc-900 pb-4 mb-4">
                      <span className="font-sans text-xs font-black uppercase text-white tracking-widest">
                        POWERCORE PASS
                      </span>
                      <span className="font-mono text-[10px] text-neon-green font-bold tracking-widest">
                        {ticketId}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-left mb-6">
                      <div>
                        <span className="font-mono text-[8px] text-zinc-500 tracking-wider block">ATHLETE</span>
                        <span className="font-sans text-xs font-bold text-white uppercase truncate block">
                          {formData.name}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-zinc-500 tracking-wider block">TIER LEVEL</span>
                        <span className="font-sans text-xs font-bold text-neon-green uppercase block">
                          {formData.plan} ACTIVE
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-zinc-500 tracking-wider block">ISSUE DATE</span>
                        <span className="font-sans text-xs font-bold text-white block">
                          2026-07-18
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-zinc-500 tracking-wider block">EXPIRES</span>
                        <span className="font-sans text-xs font-bold text-white block">
                          24 HOURS
                        </span>
                      </div>
                    </div>

                    {/* Fictional barcode lines */}
                    <div className="bg-white p-3.5 rounded-lg flex flex-col items-center justify-center">
                      <div className="h-10 w-full flex gap-[1px] items-stretch mb-1">
                        {[1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1].map((width, idx) => (
                          <div 
                            key={idx} 
                            className="bg-black flex-grow" 
                            style={{ flexGrow: width }} 
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[8px] text-zinc-900 tracking-[0.4em] uppercase font-bold">
                        * {ticketId} *
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    type="button"
                    className="font-sans text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest underline decoration-dotted transition-colors cursor-pointer"
                  >
                    Register Another Pass
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Physical Location Specs Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Location Specs Details */}
            <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8 shadow-2xl flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide mb-6 pb-2 border-b border-zinc-900">
                  OUR CONCIERGE HUB
                </h3>

                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 text-neon-green shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-widest block uppercase">
                        STREET LOCATION
                      </span>
                      <span className="font-sans text-xs text-zinc-300 font-light leading-normal">
                        100 Premium Boulevard, Elite Heights Sector
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 text-neon-green shadow-md">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-widest block uppercase">
                        GUEST COMMUNICATIONS
                      </span>
                      <a href="tel:+15550199" className="font-sans text-xs text-zinc-300 hover:text-neon-green transition-colors block">
                        +1 (555) 0199
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 text-neon-green shadow-md">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-widest block uppercase">
                        SUPPORT CHANNELS
                      </span>
                      <a href="mailto:concierge@powercore-fitness.com" className="font-sans text-xs text-zinc-300 hover:text-neon-green transition-colors block">
                        concierge@powercore-fitness.com
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 text-neon-green shadow-md">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-zinc-500 tracking-widest block uppercase">
                        CONCIERGE DESK HOURS
                      </span>
                      <span className="font-sans text-xs text-zinc-300 font-light block leading-normal">
                        Mon-Fri: 5:00 AM - 11:00 PM <br />
                        Sat-Sun: 6:00 AM - 10:00 PM <br />
                        <span className="text-neon-green font-medium font-mono text-[9px] tracking-wider block mt-1 uppercase">
                          * ALL ZONES 24/7 ENCRYPTED BIOMETRIC ACCESS
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-zinc-900/80 pt-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-zinc-600" />
                <span className="font-sans text-[9px] text-zinc-600 tracking-widest uppercase">
                  VERIFIED BIOMETRIC SECURE ZONE
                </span>
              </div>
            </div>

            {/* Static high-end conceptual visual block */}
            <div className="relative h-[160px] rounded-3xl overflow-hidden border border-zinc-900 group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
                alt="Gym Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-750 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-6 z-20">
                <span className="font-sans text-xs font-black text-white uppercase tracking-widest">
                  JOIN THE POWERCORE FAMILY
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
