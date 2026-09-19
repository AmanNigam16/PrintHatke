"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { QrCode, UploadCloud, CreditCard, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16">
      {/* Ambient Glows */}
      <div className="glow-blue top-0 left-0 opacity-80" />
      <div className="glow-violet bottom-0 right-0 opacity-60" />

      <SectionWrapper className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-8 text-center lg:text-left"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block border border-electric/30 bg-electric-soft text-electric px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
              For cybercafés, print shops & studios
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tighter leading-[1.05]"
          >
            Your <span className="bg-clip-text text-transparent bg-gradient-to-br from-electric to-violet">branded online</span><br/>print counter
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Customers scan your QR, upload documents, choose options, get a clear price, and pay — while you manage everything from a powerful desktop terminal.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="/register" className="bg-electric hover:opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-electric/25 hover:shadow-electric/40 transform hover:-translate-y-0.5 inline-flex justify-center items-center gap-2">
              Start automating your shop <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="/how-it-works" className="glass-card hover:border-border-glow px-8 py-4 rounded-full font-semibold transition-all inline-flex justify-center items-center">
              See how it works
            </a>
          </motion.div>
        </motion.div>

        {/* Spatial Floating Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="flex-1 w-full max-w-sm hidden lg:block perspective-1000 relative"
        >
          {/* Decorative Elements behind the mockup */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-electric/20 to-violet/20 blur-2xl rounded-[3rem] -z-10"></div>
          
          <div className="glass-card p-3 rounded-[2.5rem] shadow-2xl shadow-electric/20 border-border-glow/40 transform-style-3d hover:rotate-y-[-5deg] transition-transform duration-700 ease-out group">
            <div className="bg-midnight rounded-[2rem] border-[6px] border-surface-elevated h-[600px] w-full p-2 relative overflow-hidden flex flex-col">
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full z-20"></div>

              {/* Phone Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-4 mb-2 relative z-10">
                <div className="text-[10px] font-medium text-text-primary">9:41</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-text-primary/80"></div>
                  <div className="w-3 h-3 rounded-full bg-text-primary/80"></div>
                </div>
              </div>
              
              {/* App UI */}
              <div className="bg-surface w-full flex-1 rounded-[1.5rem] border border-border overflow-hidden flex flex-col relative z-10">
                <div className="bg-electric-soft p-4 border-b border-electric/20 flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-xl bg-electric text-white font-display font-bold flex items-center justify-center shadow-md">PC</div>
                  <div>
                    <div className="text-sm font-bold text-electric">PrintCafe Studio</div>
                    <div className="text-[10px] text-text-secondary">MG Road, Station</div>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col gap-4">
                  <div className="text-xs font-bold text-electric tracking-wider uppercase">Step 1</div>
                  <h2 className="font-display font-bold text-xl leading-tight text-text-primary">Upload your<br/>document</h2>
                  
                  <div className="flex-1 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-3 bg-midnight/30 hover:border-electric/50 transition-colors cursor-pointer">
                    <UploadCloud className="w-10 h-10 text-electric opacity-80" />
                    <div className="text-center">
                      <div className="text-sm font-bold text-text-primary">Tap to browse files</div>
                      <div className="text-[11px] text-text-secondary mt-1">PDF, JPG, PNG</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-border bg-midnight/50">
                  <button className="w-full bg-electric text-white py-3.5 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
