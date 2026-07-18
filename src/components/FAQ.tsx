import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 'f1',
    question: 'Can I cancel or freeze my subscription at any time?',
    answer: 'Absolutely. We believe in complete contract transparency. You can suspend or freeze your plan for up to 90 days annually with a single click inside your biometric portal, or cancel with a 30-day notice period. No hidden fees.',
    category: 'Membership'
  },
  {
    id: 'f2',
    question: 'Are guest passes allowed on standard subscription tiers?',
    answer: 'Yes! Essential Athletes receive 1 guest pass monthly. Apex Premium receives 3, and VIP Black Card members have unlimited guest passes (one unique visitor per session). All guests must check-in with a valid ID.',
    category: 'Membership'
  },
  {
    id: 'f3',
    question: 'What are the operating hours of the facilities?',
    answer: 'All biometric zones, strength sectors, and locker rooms are accessible 24 hours a day, 365 days a year. Our certified coaching staff and Protein Bar are available Mon-Fri: 5:00 AM - 11:00 PM, and Sat-Sun: 6:00 AM - 10:00 PM.',
    category: 'Facilities'
  },
  {
    id: 'f4',
    question: 'How do I book a private body fat scanner assessment?',
    answer: 'Biometric assessments, VO2 max test blocks, and 3D body fat composition reviews can be scheduled seamlessly using our mobile application or directly at the concierge front desk. All sessions take place in our private diagnostic room.',
    category: 'Training'
  },
  {
    id: 'f5',
    question: 'Is NASA-grade Cryotherapy included in all plans?',
    answer: 'Essential Athletes can purchase individual Cryotherapy sessions for $30 each. It is bundled natively into our higher tiers: Apex Premium members receive 5 monthly credits, while VIP Black Card members enjoy uncapped access.',
    category: 'Facilities'
  },
  {
    id: 'f6',
    question: 'Are personal training sessions mandatory?',
    answer: 'Not at all. You are fully welcome to train self-directed. However, every member receives an initial 60-minute biomechanics and barbell assessment with an elite coach to map out safety guidelines and joint mobility factors.',
    category: 'Training'
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Membership' | 'Training' | 'Facilities'>('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaq = faqData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050505] overflow-hidden border-b border-zinc-950">
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-neon-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-electric-blue tracking-[0.3em] uppercase mb-3 inline-block">
            // CRITICAL DISCLOSURES
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-green">QUESTIONS</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light mb-8">
            Clear, transparent answers about our premium subscriptions, state-of-the-art facilities, and training methods.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-900/60 justify-center">
            {(['All', 'Membership', 'Training', 'Facilities'] as const).map((tab) => {
              const isActive = activeCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveCategory(tab); setOpenId(null); }}
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

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-zinc-950 border transition-all duration-300 ${
                  isOpen ? 'border-neon-green/40 shadow-[0_0_15px_rgba(57,255,20,0.05)]' : 'border-zinc-900 hover:border-zinc-850'
                }`}
                id={`faq-item-${item.id}`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans text-xs sm:text-sm uppercase tracking-wider font-black text-white hover:text-neon-green transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                    {item.question}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 group-hover:text-white transition-colors flex-shrink-0`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanding panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-light border-t border-zinc-900/40 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
