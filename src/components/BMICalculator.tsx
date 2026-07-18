import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, Activity, HelpCircle, Info } from 'lucide-react';

type UnitType = 'metric' | 'imperial';

export default function BMICalculator() {
  const [unit, setUnit] = useState<UnitType>('metric');
  
  // Metric States
  const [weightKg, setWeightKg] = useState<string>('75');
  const [heightCm, setHeightCm] = useState<string>('180');

  // Imperial States
  const [weightLbs, setWeightLbs] = useState<string>('165');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('10');

  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    let bmi = 0;

    if (unit === 'metric') {
      const w = parseFloat(weightKg);
      const h = parseFloat(heightCm) / 100;
      if (w > 0 && h > 0) {
        bmi = w / (h * h);
      }
    } else {
      const w = parseFloat(weightLbs);
      const ft = parseFloat(heightFt);
      const inch = parseFloat(heightIn);
      const totalInches = ft * 12 + inch;
      if (w > 0 && totalInches > 0) {
        bmi = (w / (totalInches * totalInches)) * 703;
      }
    }

    if (bmi > 0) {
      const roundedBmi = parseFloat(bmi.toFixed(1));
      setBmiResult(roundedBmi);
      
      // Determine category and custom dynamic suggestion
      if (roundedBmi < 18.5) {
        setBmiCategory('Underweight');
        setSuggestion('Our APEX STRENGTH program is perfect for you. Focus on lean muscle hypertrophy, optimized caloric intake, and compound strength lifts to gain functional mass.');
      } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        setBmiCategory('Normal Weight');
        setSuggestion('Superb condition! To maintain your metabolic efficiency and active endurance, we recommend joining our ATHLETIC HYBRID program to keep pushing your VO2 Max.');
      } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
        setBmiCategory('Overweight');
        setSuggestion('We recommend our METABOLIC RESET program. High fat-oxidization focus, continuous cardiovascular stimulation, and macro guidance at our organic Protein Bar will recompose your physique.');
      } else {
        setBmiCategory('Obese');
        setSuggestion('We recommend a balanced hybrid regimen. Focus on high-recomposition cardio blocks, joint-friendly mobility sessions like ZEN MOBILITY, and low-impact active movements to rebuild cellular health.');
      }
    }
  };

  const resetCalculator = () => {
    setBmiResult(null);
    setBmiCategory('');
    setSuggestion('');
  };

  return (
    <section id="bmi-calculator" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase mb-3 inline-block">
            // METABOLIC BIOMETRIC ANALYSIS
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
            CHECK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">HEALTH METRICS</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 tracking-wider font-light">
            Instantly calculate your Body Mass Index (BMI) and discover which custom-tailored PowerCore program matches your biological structure.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Input fields / left column */}
            <div className="md:col-span-6 p-6 sm:p-10 border-r border-zinc-900/80">
              <div className="flex items-center gap-2 mb-8">
                <Calculator className="w-5 h-5 text-neon-green" />
                <span className="font-sans text-xs font-black uppercase tracking-widest text-white">
                  BMI CONFIGURATION ENGINE
                </span>
              </div>

              {/* Unit Toggles */}
              <div className="grid grid-cols-2 gap-2 bg-zinc-900/50 p-1 rounded-xl border border-zinc-900 mb-6">
                <button
                  type="button"
                  onClick={() => { setUnit('metric'); resetCalculator(); }}
                  className={`py-2 rounded-lg font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                    unit === 'metric' ? 'bg-zinc-800 text-neon-green' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Metric (Kg/Cm)
                </button>
                <button
                  type="button"
                  onClick={() => { setUnit('imperial'); resetCalculator(); }}
                  className={`py-2 rounded-lg font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                    unit === 'imperial' ? 'bg-zinc-800 text-neon-green' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Imperial (Lbs/Ft)
                </button>
              </div>

              {/* Calculator Form */}
              <form onSubmit={calculateBMI} className="space-y-6">
                {unit === 'metric' ? (
                  <>
                    <div>
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                        HEIGHT (CM)
                      </label>
                      <input
                        type="number"
                        required
                        min="100"
                        max="250"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        placeholder="e.g. 180"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                        WEIGHT (KG)
                      </label>
                      <input
                        type="number"
                        required
                        min="30"
                        max="300"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        placeholder="e.g. 75"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                          HEIGHT (FT)
                        </label>
                        <input
                          type="number"
                          required
                          min="3"
                          max="8"
                          value={heightFt}
                          onChange={(e) => setHeightFt(e.target.value)}
                          placeholder="FT"
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                          HEIGHT (IN)
                        </label>
                        <input
                          type="number"
                          required
                          min="0"
                          max="11"
                          value={heightIn}
                          onChange={(e) => setHeightIn(e.target.value)}
                          placeholder="IN"
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black text-zinc-400 block mb-2">
                        WEIGHT (LBS)
                      </label>
                      <input
                        type="number"
                        required
                        min="50"
                        max="600"
                        value={weightLbs}
                        onChange={(e) => setWeightLbs(e.target.value)}
                        placeholder="e.g. 165"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-neon-green transition-colors"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest font-black text-black bg-neon-green hover:bg-[#46ff26] shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Analyze Biometrics <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Output results gauge / right column */}
            <div className="md:col-span-6 p-6 sm:p-10 bg-zinc-900/10 flex flex-col justify-center min-h-[350px]">
              <AnimatePresence mode="wait">
                {bmiResult === null ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-500 animate-pulse">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest font-black text-white mb-1">
                        AWAITING INPUTS
                      </h4>
                      <p className="font-sans text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed font-light">
                        Enter your metric or imperial biometrics on the left and click calculate to execute biomechanic analysis.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    {/* Computed score indicator */}
                    <div className="text-center">
                      <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase block mb-1">
                        YOUR COMPUTED BIO-MASS
                      </span>
                      <div className="font-sans text-6xl font-black text-white tracking-tighter">
                        {bmiResult}
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-sans font-black uppercase tracking-wider mt-2 shadow-2xl ${
                        bmiCategory === 'Normal Weight' ? 'bg-neon-green/10 text-neon-green border border-neon-green/30' :
                        bmiCategory === 'Underweight' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/30' :
                        bmiCategory === 'Overweight' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30' :
                        'bg-red-500/10 text-red-500 border border-red-500/30'
                      }`}>
                        {bmiCategory}
                      </span>
                    </div>

                    {/* Biometric Slider gauge */}
                    <div className="space-y-2 pt-2">
                      <div className="relative h-[6px] bg-zinc-900 rounded-full overflow-hidden flex">
                        <div className="w-[18.5%] bg-cyan-400 h-full" title="Underweight" />
                        <div className="w-[24.9%] bg-neon-green h-full" title="Normal" />
                        <div className="w-[29.9%] bg-amber-500 h-full" title="Overweight" />
                        <div className="w-[26.7%] bg-red-500 h-full" title="Obese" />
                        
                        {/* Needle Indicator */}
                        <div 
                          className="absolute top-0 bottom-0 w-[4px] bg-white shadow-[0_0_10px_#fff] transition-all duration-1000 ease-out"
                          style={{
                            left: `${Math.min(Math.max(((bmiResult - 10) / 30) * 100, 0), 98)}%`
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-zinc-600 tracking-wider">
                        <span>15.0</span>
                        <span>18.5</span>
                        <span>25.0</span>
                        <span>30.0</span>
                        <span>40.0+</span>
                      </div>
                    </div>

                    {/* Dynamic Program Suggestions card */}
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-zinc-700">
                        <Info className="w-4 h-4" />
                      </div>
                      <span className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest block mb-1">
                        PRESCRIPTION FEEDBACK
                      </span>
                      <p className="font-sans text-[11px] text-zinc-300 leading-relaxed font-light">
                        {suggestion}
                      </p>
                    </div>

                    {/* Re-calculate triggers */}
                    <div className="text-center pt-2">
                      <button
                        onClick={resetCalculator}
                        type="button"
                        className="font-sans text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest underline decoration-dotted transition-colors cursor-pointer"
                      >
                        Reset Calculator
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
