"use client";

import { motion } from "motion/react";
import { Hand, Zap, Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function PrintModeCompare() {
  return (
    <SectionWrapper className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-extrabold tracking-tight">Two ways to print</h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {/* Manual Print */}
        <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10 flex flex-col h-full bg-surface/40">
          <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mb-6">
            <Hand className="w-7 h-7 text-text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">Manual Print</h3>
          <p className="text-text-secondary mb-8">Review every job before it prints. Click to approve, click to print. Full control over every document.</p>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-4 h-4 text-emerald" /> Review files before printing</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-4 h-4 text-emerald" /> Approve or reject jobs</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-4 h-4 text-emerald" /> Choose specific printer trays</li>
          </ul>
          
          <div className="pt-6 border-t border-border">
            <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">Best for</span>
            <p className="text-sm font-medium mt-1">Shops handling sensitive documents or bespoke formatting.</p>
          </div>
        </motion.div>

        {/* Auto-Print */}
        <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10 flex flex-col h-full border-electric/30 shadow-[0_0_30px_rgba(37,99,235,0.08)] bg-gradient-to-b from-electric-soft/20 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="w-14 h-14 rounded-2xl bg-electric border border-electric-soft flex items-center justify-center mb-6 shadow-lg shadow-electric/20 relative z-10">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-display text-2xl font-bold mb-3 relative z-10">Auto-Print</h3>
          <p className="text-text-secondary mb-8 relative z-10">Jobs print automatically as they arrive. Hands-free efficiency for busy counters.</p>
          
          <ul className="space-y-4 mb-8 flex-1 relative z-10">
            <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-4 h-4 text-electric" /> Zero-touch operation</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-4 h-4 text-electric" /> Prints instantly upon payment</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check className="w-4 h-4 text-electric" /> Easily toggled on/off in terminal</li>
          </ul>
          
          <div className="pt-6 border-t border-border/50 relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-electric">Best for</span>
            <p className="text-sm font-medium mt-1">High-volume rush hours and standard A4 printing.</p>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
