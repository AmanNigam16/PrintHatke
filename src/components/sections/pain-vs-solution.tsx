"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PAINS = [
  "Customers send files over WhatsApp — lost in chat",
  "Pricing disputes at the counter",
  "Cash-only limits your customers",
  "No order tracking — \"Is my print ready?\" calls",
  "Manual job management in notebooks"
];

const SOLUTIONS = [
  "Customers upload directly through your branded portal",
  "Transparent, real-time price quotes",
  "Online payment + pay-at-counter flexibility",
  "Live status tracking for every order",
  "Automatic digital queue on your desktop app"
];

export function PainVsSolution() {
  return (
    <SectionWrapper className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">The old way vs. PrintHatke</h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
      >
        {/* Pain Points */}
        <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10 border-red-500/20 bg-gradient-to-b from-red-950/10 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <h3 className="text-2xl font-display font-bold text-red-400 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <X className="w-5 h-5 text-red-400" />
            </div>
            Without PrintHatke
          </h3>
          <ul className="space-y-6">
            {PAINS.map((pain, i) => (
              <li key={i} className="flex items-start gap-4 text-text-secondary text-lg leading-snug">
                <X className="w-5 h-5 text-red-500/70 shrink-0 mt-0.5" />
                {pain}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10 border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-transparent relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h3 className="text-2xl font-display font-bold text-emerald-400 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            With PrintHatke
          </h3>
          <ul className="space-y-6">
            {SOLUTIONS.map((solution, i) => (
              <li key={i} className="flex items-start gap-4 text-text-primary text-lg font-medium leading-snug">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                {solution}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
