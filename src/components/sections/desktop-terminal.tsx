"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Monitor, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function DesktopTerminal() {
  return (
    <SectionWrapper className="py-24 overflow-hidden">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Your command centre</h2>
        <p className="text-text-secondary text-lg">A dedicated Windows desktop application to securely manage every print job in real-time.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        className="max-w-5xl mx-auto relative"
      >
        <div className="glow-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 z-0"></div>
        
        {/* Terminal Window Mockup / Image Placeholder */}
        <div className="glass-card overflow-hidden border-border-glow/40 shadow-2xl shadow-electric/10 relative z-10 flex flex-col h-[550px] group transition-all duration-700 hover:shadow-electric/30">
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full z-20"></div>

          {/* Title Bar */}
          <div className="bg-black/60 px-4 py-3 border-b border-border flex items-center gap-4 relative z-20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="text-xs font-semibold text-text-tertiary flex items-center gap-2">
              <Monitor className="w-3 h-3" />
              PrintHatke App
            </div>
          </div>
          
          <div className="flex flex-1 overflow-hidden relative z-10">
            {/* Sidebar */}
            <div className="w-48 lg:w-56 bg-midnight/80 border-r border-border p-3 space-y-1 hidden md:block">
              <div className="px-3 py-2 bg-surface-elevated rounded-md text-sm font-bold text-text-primary flex items-center gap-2 border border-border shadow-sm">
                <Clock className="w-4 h-4 text-electric" /> Live Queue
              </div>
              <div className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface/50 rounded-md transition flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Needs Attention
              </div>
              <div className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface/50 rounded-md transition flex items-center gap-2">
                <Printer className="w-4 h-4" /> Printers
              </div>
              <div className="my-2 border-t border-border/50"></div>
              <div className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface/50 rounded-md transition">Settings</div>
            </div>
            
            {/* Main Area */}
            <div className="flex-1 bg-surface p-6 overflow-hidden flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-b from-electric/5 to-transparent pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h3 className="text-xl font-bold text-text-primary">Active Jobs</h3>
                <div className="text-xs font-semibold px-3 py-1 bg-emerald-soft text-emerald rounded-full flex items-center gap-1.5 border border-emerald/20 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  Online
                </div>
              </div>
              
              <div className="space-y-3 flex-1 overflow-y-auto pr-2 relative z-10">
                {/* Job 1 */}
                <div className="bg-midnight/80 border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-border-glow transition shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border">
                      <FileText className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-text-primary">resume-final.pdf</div>
                      <div className="text-xs text-text-secondary mt-0.5">2 pages × 1 copy • B&W • Duplex</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-start sm:self-auto">
                    <div className="text-[10px] text-text-tertiary">Just now</div>
                    <span className="px-2.5 py-1 bg-amber-soft border border-amber/30 text-amber text-[10px] font-bold rounded uppercase tracking-wider min-w-[80px] text-center shadow-sm">
                      Printing
                    </span>
                  </div>
                </div>
                
                {/* Job 2 */}
                <div className="bg-midnight/90 border border-electric/40 shadow-[0_0_15px_rgba(37,99,235,0.15)] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-electric/20">
                      <FileText className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-text-primary">assignment-ch4.pdf</div>
                      <div className="text-xs text-text-secondary mt-0.5">12 pages × 1 copy • B&W</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-start sm:self-auto">
                    <div className="text-[10px] text-text-tertiary">2 mins ago</div>
                    <span className="px-2.5 py-1 bg-electric-soft border border-electric/30 text-electric text-[10px] font-bold rounded uppercase tracking-wider min-w-[80px] text-center shadow-sm">
                      Queued
                    </span>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="bg-midnight/30 border border-border/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 opacity-70">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface/50 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <div className="font-bold text-sm line-through decoration-text-tertiary">id-photos.jpg</div>
                      <div className="text-xs text-text-tertiary mt-0.5">1 page × 4 copies • Colour</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-start sm:self-auto">
                    <div className="text-[10px] text-text-tertiary">15 mins ago</div>
                    <span className="px-2.5 py-1 bg-surface-elevated text-text-secondary text-[10px] font-bold rounded uppercase tracking-wider min-w-[80px] text-center border border-border">
                      Completed
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-text-tertiary mt-6 font-medium">
          Connects securely to your cloud queue. Runs efficiently in the background.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
// Hack to fix missing Printer import above
import { Printer } from "lucide-react";
