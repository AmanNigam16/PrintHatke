"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CONTACT_INFO } from "@/lib/constants";

export function CtaSection() {
  return (
    <SectionWrapper className="py-24 pb-32 relative">
      <div className="glow-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="glass-card max-w-4xl mx-auto text-center px-8 py-16 md:py-20 relative z-10 shadow-2xl shadow-electric/10 border-electric/30 bg-gradient-to-b from-surface to-midnight"
      >
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to digitise your print counter?</h2>
        <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
          Join the shops that are replacing WhatsApp chaos with a professional, branded print workflow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register" className="bg-electric hover:bg-electric/90 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-electric/25 flex items-center justify-center gap-2">
            Register as a merchant
          </a>
          <a href="/contact" className="bg-surface hover:bg-surface-elevated border border-border-glow text-text-primary px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
            Talk to Us
          </a>
        </div>
        
        <p className="text-text-tertiary text-xs mt-8 font-medium">
          {CONTACT_INFO.email}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
