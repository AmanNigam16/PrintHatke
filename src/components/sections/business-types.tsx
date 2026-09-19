"use client";

import { motion } from "motion/react";
import { Monitor, Copy, Palette, FileText, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const TYPES = [
  { icon: Monitor, title: "Cybercafés", desc: "Replace the WhatsApp-and-USB chaos with a clean digital queue. Customers upload from their phones while you focus on printing.", link: "/for-cybercafes" },
  { icon: Copy, title: "Photocopy Shops", desc: "Transparent per-page pricing, online payments, and automatic job tracking. No more counter disputes over copy costs.", link: "/for-photocopy-shops" },
  { icon: Palette, title: "Print Studios", desc: "Handle high-quality print jobs with your own branded portal. Professional workflow for professional output.", link: "/for-print-studios" },
  { icon: FileText, title: "Document Counters", desc: "Stationery shops and document counters: digitise your print intake seamlessly without changing your existing setup.", link: "/for-cybercafes" }, // Fallback link
];

export function BusinessTypes() {
  return (
    <SectionWrapper id="use-cases" className="py-24 border-t border-border bg-midnight">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Built for every print business</h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {TYPES.map((type, i) => (
          <motion.div key={i} variants={fadeInUp} className="glass-card glass-card-hover p-8 flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mb-6 group-hover:border-electric/40 group-hover:bg-electric-soft transition-colors">
              <type.icon className="w-6 h-6 text-text-primary group-hover:text-electric transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3">{type.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">{type.desc}</p>
            <Link href={type.link} className="inline-flex items-center gap-2 text-sm font-bold text-electric group/link">
              Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
