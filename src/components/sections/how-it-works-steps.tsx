"use client";

import { motion } from "motion/react";
import { QrCode, UploadCloud, CreditCard, Printer } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STEPS = [
  { icon: QrCode, title: "Scan the QR", desc: "Customer scans the QR code at your counter to open your branded print portal." },
  { icon: UploadCloud, title: "Upload & configure", desc: "Upload a PDF, JPG, or PNG. Choose colour, copies, pages, and duplex." },
  { icon: CreditCard, title: "Get quote & pay", desc: "See a clear price quote. Pay online or choose pay-at-counter." },
  { icon: Printer, title: "Print & collect", desc: "The job appears on your desktop app. Print manually or use Auto-Print." },
];

export function HowItWorksSteps() {
  return (
    <SectionWrapper className="py-24 border-t border-border">
      <div className="text-center mb-16">
        <h3 className="text-electric font-bold tracking-widest uppercase text-sm mb-3">How it works</h3>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Four steps. Zero app installs.</h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto relative"
      >
        {/* Connecting line for desktop */}
        <div className="hidden xl:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 z-0"></div>

        {STEPS.map((step, i) => (
          <motion.div key={i} variants={fadeInUp} className="glass-card glass-card-hover p-8 relative z-10 bg-surface/80">
            <div className="text-6xl font-display font-black text-white/5 absolute top-4 right-4 leading-none select-none">
              0{i+1}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-electric-soft border border-electric/20 flex items-center justify-center mb-6 shadow-lg shadow-electric/10">
              <step.icon className="w-6 h-6 text-electric" />
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
