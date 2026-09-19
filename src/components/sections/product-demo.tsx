"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Play, Pause, QrCode, Upload, Settings, Calculator, CreditCard, Monitor, Printer, CheckCircle } from "lucide-react";
import { DEMO_STEPS } from "@/lib/constants";
import { demoStepVariants } from "@/lib/animations";
import { useTabHidden } from "@/lib/use-tab-visibility";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

const ICONS = {
  scan: QrCode, upload: Upload, options: Settings, quote: Calculator,
  payment: CreditCard, queue: Monitor, print: Printer, done: CheckCircle
};

export function ProductDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const prefersReduced = useReducedMotion();
  const isHidden = useTabHidden();

  useEffect(() => {
    if (!isPlaying || prefersReduced || isHidden) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, prefersReduced, isHidden]);

  const StepIcon = ICONS[DEMO_STEPS[currentStep].id as keyof typeof ICONS];

  return (
    <SectionWrapper id="demo" className="py-24 text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">See the complete workflow</h2>
        <p className="text-text-secondary text-lg">From QR scan to collected print — every step, flawlessly connected.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="glow-emerald top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        
        <div className="glass-card w-full h-[400px] md:h-[500px] relative overflow-hidden flex items-center justify-center p-4 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={prefersReduced ? {} : demoStepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-md flex flex-col items-center gap-8"
            >
              <div className="w-24 h-24 rounded-full bg-electric-soft flex items-center justify-center border border-electric/30 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <StepIcon className="w-10 h-10 text-electric" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <div className="inline-block text-xs font-bold text-electric tracking-widest uppercase mb-3 bg-electric-soft px-3 py-1 rounded-full">
                  Step {currentStep + 1} of {DEMO_STEPS.length}
                </div>
                <h3 className="font-display text-3xl font-bold mb-3">{DEMO_STEPS[currentStep].label}</h3>
                <p className="text-text-secondary text-lg">{DEMO_STEPS[currentStep].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 glass-nav rounded-full px-6 py-4 mx-auto max-w-max border border-border">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-surface-elevated hover:bg-border transition flex items-center justify-center text-text-primary"
            aria-label={isPlaying ? "Pause demo" : "Play demo"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
          </button>
          
          <div className="flex gap-2.5">
            {DEMO_STEPS.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => { setCurrentStep(idx); setIsPlaying(false); }}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  idx === currentStep ? "w-8 bg-electric" : "w-2.5 bg-border hover:bg-text-tertiary"
                )}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="text-sm font-semibold text-text-tertiary min-w-[100px] text-center md:text-left hidden md:block">
            {DEMO_STEPS[currentStep].label}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
