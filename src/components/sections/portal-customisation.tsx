"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp } from "@/lib/animations";
import { UploadCloud } from "lucide-react";

export function PortalCustomisation() {
  return (
    <SectionWrapper className="py-32">
      <div className="text-center mb-16">
        <span className="inline-block border border-electric/30 bg-electric-soft text-electric px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          Founder-Confirmed Capability
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Your print counter, your brand</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Customise exactly what your customers see. Every detail, under your control.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
        {/* Settings Panel Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="space-y-4"
        >
          <div className="glass-card p-5 border-l-4 border-l-electric shadow-lg shadow-electric/5">
            <div className="text-sm font-bold mb-2">1. Shop display name</div>
            <div className="text-sm text-text-primary bg-midnight px-4 py-3 rounded-lg border border-border">Sharma Xerox & Studio</div>
          </div>
          
          <div className="glass-card p-5">
            <div className="text-sm font-bold mb-2 text-text-secondary">2. Location / landmark</div>
            <div className="text-sm text-text-primary bg-midnight px-4 py-3 rounded-lg border border-border">MG Road, Pune</div>
          </div>
          
          <div className="glass-card p-5">
            <div className="text-sm font-bold mb-2 text-text-secondary">3. Customer order link</div>
            <div className="text-sm text-electric bg-electric-soft px-4 py-3 rounded-lg border border-electric/20 font-medium tracking-wide">
              printcafe.in/s/sharma-xerox
            </div>
          </div>
          
          <div className="glass-card p-5">
            <div className="text-sm font-bold mb-3 text-text-secondary">4 & 5. Brand accent & badge</div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-electric ring-2 ring-white ring-offset-2 ring-offset-midnight shadow-md"></div>
              <div className="w-8 h-8 rounded-full bg-violet"></div>
              <div className="w-8 h-8 rounded-full bg-emerald"></div>
              <div className="w-8 h-8 rounded-full bg-amber"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Phone Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="glow-blue w-[300px] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 z-0"></div>
          
          <div className="bg-black rounded-[2.5rem] border-[6px] border-surface-elevated h-[550px] w-[270px] p-2 relative z-10 shadow-2xl shadow-electric/20">
            <div className="bg-surface w-full h-full rounded-[2rem] border border-border overflow-hidden flex flex-col">
              
              {/* Phone Header */}
              <div className="bg-electric-soft p-5 border-b border-electric/20 flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-electric text-white text-sm font-bold flex items-center justify-center shadow-md">SX</div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-electric">Sharma Xerox</div>
                  <div className="text-[10px] text-text-secondary mt-0.5">MG Road, Pune</div>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-center gap-6">
                <div className="text-center">
                  <h3 className="font-display font-bold text-lg mb-1 text-text-primary">Upload document</h3>
                  <p className="text-[11px] text-text-secondary">Select a file to begin printing.</p>
                </div>
                
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center bg-midnight/30 hover:border-electric/40 transition-colors">
                  <div className="w-10 h-10 bg-electric/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <UploadCloud className="w-5 h-5 text-electric" />
                  </div>
                  <div className="text-xs font-semibold text-text-primary">Tap to browse files</div>
                </div>
              </div>
              
              <div className="p-4 text-center border-t border-border bg-midnight/50">
                <p className="text-[9px] text-text-tertiary font-medium">Powered by <span className="text-text-secondary font-bold">PrintCafe</span></p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max text-xs font-semibold text-text-secondary tracking-widest uppercase">
            Live Owner Preview
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
