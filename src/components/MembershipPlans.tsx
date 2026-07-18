import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Award, Star, Gem } from 'lucide-react';
import { PricingPlan } from '../types';

const plansData: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential Athlete',
    priceMonthly: 120,
    priceAnnually: 95,
    period: 'mo',
    description: 'Perfect for dedicated self-directed athletes looking for world-class hardware access.',
    features: [
      { text: 'Full 24/7 Access to all 8 core facilities', included: true },
      { text: 'Biometric profile sync & locker keys', included: true },
      { text: 'Initial 3D body composition analysis', included: true },
      { text: 'State-of-the-art connected strength gear', included: true },
      { text: 'Complementary dry sauna access', included: true },
      { text: 'Elite master coach personal training sessions', included: false },
      { text: 'Unlimited cold-pressed macro protein bar shakes', included: false },
      { text: 'NASA-grade sub-zero cryotherapy access', included: false },
    ],
    isPopular: false,
    accentColor: 'slate',
  },
  {
    id: 'apex',
    name: 'Apex Premium',
    priceMonthly: 220,
    priceAnnually: 175,
    period: 'mo',
    description: 'Our signature tier. Incorporates medical sports science oversight and regular coaching guides.',
    features: [
      { text: 'Full 24/7 Access to all 8 core facilities', included: true },
      { text: 'Biometric profile sync & locker keys', included: true },
      { text: 'Bi-weekly 3D body composition reviews', included: true },
      { text: 'State-of-the-art connected strength gear', included: true },
      { text: 'Complementary dry sauna access', included: true },
      { text: '4x monthly elite coach custom training reviews', included: true },
      { text: '2x weekly cold-pressed macro protein bar shakes', included: true },
      { text: '5x monthly sub-zero cryotherapy access', included: true },
    ],
    isPopular: true,
    badge: 'POPULAR PROTOCOL',
    accentColor: 'neon-green',
  },
  {
    id: 'vip',
    name: 'VIP Black Card',
    priceMonthly: 450,
    priceAnnually: 360,
    period: 'mo',
    description: 'Fully comprehensive high-performance management for executives and elite competitors.',
    features: [
      { text: 'Full 24/7 Access to all 8 core facilities', included: true },
      { text: 'Biometric profile sync & locker keys', included: true },
      { text: 'Unlimited 3D body composition bio-reviews', included: true },
      { text: 'State-of-the-art connected strength gear', included: true },
      { text: 'Complementary dry sauna access', included: true },
      { text: 'Unlimited elite coach personal sessions', included: true },
      { text: 'Unlimited cold-pressed macro protein bar shakes', included: true },
      { text: 'Unlimited sub-zero cryotherapy access', included: true },
    ],
    isPopular: false,
    badge: 'ULTIMATE SANCTUARY',
    accentColor: 'electric-blue',
  },
];

export default function MembershipPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="membership" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-electric-blue/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
            // OPTIMIZED INVESTMENT PLANS
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-6">
            MEMBERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">SUBSCRIPTIONS</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light mb-8">
            Select the subscription level that matches your training frequency and commitment. Upgrade, downgrade, or cancel whenever required.
          </p>

          {/* Billing Toggle (incorporating 20% annual savings discount calculation) */}
          <div className="inline-flex items-center gap-4 bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-900/60">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs uppercase tracking-widest font-black transition-all duration-300 cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-350'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs uppercase tracking-widest font-black transition-all duration-300 cursor-pointer relative ${
                billingCycle === 'annually' ? 'bg-zinc-900 text-neon-green' : 'text-zinc-500 hover:text-zinc-350'
              }`}
            >
              Annual Billing
              <span className="absolute -top-3 -right-3 px-1.5 py-0.5 rounded-md bg-neon-green text-black font-mono text-[7px] font-black tracking-widest uppercase shadow-md">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnually;
            const isGreen = plan.accentColor === 'neon-green';
            const isBlue = plan.accentColor === 'electric-blue';

            return (
              <div
                key={plan.id}
                className={`group relative rounded-3xl p-8 bg-zinc-950 border overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                  plan.isPopular
                    ? 'border-neon-green/80 shadow-[0_0_30px_rgba(57,255,20,0.15)] bg-gradient-to-b from-zinc-950 via-zinc-950 to-neon-green/[0.01]'
                    : isBlue
                    ? 'border-electric-blue/50 hover:border-electric-blue/80'
                    : 'border-zinc-900 hover:border-zinc-800'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Glowing Popular Overlay Background */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 rounded-full blur-[40px] pointer-events-none" />
                )}

                {/* Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  {plan.badge ? (
                    <span className={`px-3 py-1 rounded-md font-mono text-[8px] font-black tracking-[0.2em] uppercase ${
                      isGreen ? 'bg-neon-green text-black' : 'bg-electric-blue text-black'
                    }`}>
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="w-1 h-1" />
                  )}
                  
                  {plan.isPopular ? (
                    <Award className="w-6 h-6 text-neon-green" />
                  ) : isBlue ? (
                    <Gem className="w-6 h-6 text-electric-blue" />
                  ) : (
                    <Star className="w-6 h-6 text-zinc-600" />
                  )}
                </div>

                {/* Plan Core Identity */}
                <div>
                  <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed font-light mb-8">
                    {plan.description}
                  </p>

                  {/* Pricing displays */}
                  <div className="flex items-baseline mb-8">
                    <span className="font-sans text-xs font-bold text-zinc-500 uppercase tracking-widest mr-1">
                      $
                    </span>
                    <span className="font-sans text-5xl sm:text-6xl font-black text-white tracking-tight">
                      {price}
                    </span>
                    <span className="font-sans text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Included features checklist */}
                  <div className="space-y-4 mb-8 border-t border-zinc-900/80 pt-6">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        {feat.included ? (
                          <Check className={`w-4.5 h-4.5 flex-shrink-0 mt-0.5 ${
                            isGreen ? 'text-neon-green' : isBlue ? 'text-electric-blue' : 'text-zinc-400'
                          }`} />
                        ) : (
                          <X className="w-4.5 h-4.5 text-zinc-700 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`font-sans text-xs font-light leading-snug ${
                          feat.included ? 'text-zinc-300' : 'text-zinc-600 line-through decoration-zinc-900'
                        }`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Action button */}
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-black text-center transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-neon-green text-black hover:bg-[#46ff26] shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]'
                      : isBlue
                      ? 'bg-zinc-900 border border-electric-blue/40 hover:border-electric-blue text-white hover:bg-zinc-850'
                      : 'bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white'
                  }`}
                >
                  Acquire Membership
                </a>

              </div>
            );
          })}
        </div>

        {/* Dynamic Guarantee disclaimer */}
        <div className="mt-12 flex items-center justify-center gap-3 max-w-xl mx-auto p-4 rounded-2xl bg-zinc-950 border border-zinc-900">
          <ShieldAlert className="w-5 h-5 text-zinc-500 flex-shrink-0" />
          <p className="font-sans text-[10px] text-zinc-500 leading-normal font-light">
            **Satisfaction Guarantee**: All memberships incorporate a 7-day risk-free full-refund grace period. Contract terms are fully flexible with zero exit fees on our subscription plans.
          </p>
        </div>

      </div>
    </section>
  );
}
