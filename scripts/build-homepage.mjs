import fs from 'fs';
import path from 'path';

const sectionsDir = path.join(process.cwd(), 'src', 'components', 'sections');
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

const files = {
  'hero.tsx': `"use client";

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
            <button className="bg-electric hover:opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-electric/25 hover:shadow-electric/40 transform hover:-translate-y-0.5">
              Book a Demo
            </button>
            <button className="glass-card hover:border-border-glow px-8 py-4 rounded-full font-semibold transition-all">
              See How It Works
            </button>
          </motion.div>
        </motion.div>

        {/* Spatial Floating Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="flex-1 w-full max-w-sm hidden lg:block perspective-1000"
        >
          <div className="glass-card p-3 rounded-[2.5rem] shadow-2xl shadow-electric/20 border-border-glow/40 transform-style-3d hover:rotate-y-[-5deg] transition-transform duration-700 ease-out">
            <div className="bg-midnight rounded-[2rem] border-[6px] border-surface-elevated h-[600px] w-full p-2 relative overflow-hidden flex flex-col">
              {/* Phone Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-4 mb-2">
                <div className="text-[10px] font-medium text-text-primary">9:41</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-text-primary/80"></div>
                  <div className="w-3 h-3 rounded-full bg-text-primary/80"></div>
                </div>
              </div>
              
              {/* App UI */}
              <div className="bg-surface w-full flex-1 rounded-[1.5rem] border border-border overflow-hidden flex flex-col">
                <div className="bg-electric-soft p-4 border-b border-electric/20 flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-xl bg-electric text-white font-display font-bold flex items-center justify-center shadow-md">PC</div>
                  <div>
                    <div className="text-sm font-bold text-electric">PrintCafe Studio</div>
                    <div className="text-[10px] text-text-secondary">MG Road, Station</div>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col gap-4">
                  <div className="text-xs font-bold text-electric tracking-wider uppercase">Step 1</div>
                  <h2 className="font-display font-bold text-xl leading-tight">Upload your<br/>document</h2>
                  
                  <div className="flex-1 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-3 bg-midnight/30">
                    <UploadCloud className="w-10 h-10 text-electric opacity-80" />
                    <div className="text-center">
                      <div className="text-sm font-bold">Tap to browse files</div>
                      <div className="text-[11px] text-text-secondary mt-1">PDF, JPG, PNG</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-border bg-midnight/50">
                  <button className="w-full bg-electric text-white py-3.5 rounded-xl font-bold text-sm shadow-md">
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
`,
  'product-demo.tsx': `"use client";

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
                aria-label={\`Go to step \${idx + 1}\`}
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
`,
  'pain-vs-solution.tsx': `"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PAINS = [
  "Customers send files over WhatsApp — lost in chat",
  "Pricing disputes at the counter",
  "Cash-only limits your customers",
  "No order tracking — \\"Is my print ready?\\" calls",
  "Manual job management in notebooks"
];

const SOLUTIONS = [
  "Customers upload directly through your branded portal",
  "Transparent, real-time price quotes",
  "Online payment + pay-at-counter flexibility",
  "Live status tracking for every order",
  "Automatic digital queue on your desktop terminal"
];

export function PainVsSolution() {
  return (
    <SectionWrapper className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">The old way vs. PrintCafe</h2>
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
            Without PrintCafe
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
            With PrintCafe
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
`,
  'how-it-works-steps.tsx': `"use client";

import { motion } from "motion/react";
import { QrCode, UploadCloud, CreditCard, Printer } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STEPS = [
  { icon: QrCode, title: "Scan the QR", desc: "Customer scans the QR code at your counter to open your branded print portal." },
  { icon: UploadCloud, title: "Upload & configure", desc: "Upload a PDF, JPG, or PNG. Choose colour, copies, pages, and duplex." },
  { icon: CreditCard, title: "Get quote & pay", desc: "See a clear price quote. Pay online or choose pay-at-counter." },
  { icon: Printer, title: "Print & collect", desc: "The job appears on your desktop terminal. Print manually or use Auto-Print." },
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
`,
  'capability-cards.tsx': `"use client";

import { motion } from "motion/react";
import { Store, QrCode, Calculator, CreditCard, Monitor, Zap, Eye, Palette, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CAPABILITIES = [
  { icon: Store, title: "Branded online print counter", desc: "Your shop's own digital storefront. Customers order through your portal, with your name and branding." },
  { icon: QrCode, title: "Shop-specific QR code", desc: "A QR code that opens your owner-branded customer portal. No app install needed." },
  { icon: Calculator, title: "Real-time price quotes", desc: "Customers see exact pricing before they pay. No surprises at the counter." },
  { icon: CreditCard, title: "Online payment", desc: "Accept UPI and card payments. Or let customers pay at the counter. Gateway-flexible." },
  { icon: Monitor, title: "Desktop print terminal", desc: "A dedicated Windows application to manage your print queue, review jobs, and control printing." },
  { icon: Zap, title: "Manual & Auto-Print", desc: "Review every job before printing, or enable Auto-Print for hands-free operation." },
  { icon: Eye, title: "Live order tracking", desc: "Customers track their print status in real-time. No more 'is it ready?' calls." },
  { icon: Palette, title: "Owner-customisable portal", desc: "Set your shop name, location, brand colour, and dynamic badge. Preview exactly what customers see." },
  { icon: Clock, title: "Configurable retention", desc: "Set how long documents are kept after printing. You control your shop's data policy." },
];

export function CapabilityCards() {
  return (
    <SectionWrapper className="py-24 bg-surface/30">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Built for real print shops</h2>
        <p className="text-text-secondary text-lg">Every feature is designed to eliminate counter friction and give you total control over your workflow.</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {CAPABILITIES.map((cap, i) => (
          <motion.div key={i} variants={fadeInUp} className="glass-card glass-card-hover p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-electric-soft border border-electric/10 flex items-center justify-center mb-5">
              <cap.icon className="w-5 h-5 text-electric" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-text-primary">{cap.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed flex-1">{cap.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
`,
  'portal-customisation.tsx': `"use client";

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
                  <h3 className="font-display font-bold text-lg mb-1">Upload document</h3>
                  <p className="text-[11px] text-text-secondary">Select a file to begin printing.</p>
                </div>
                
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center bg-midnight/30">
                  <div className="w-10 h-10 bg-electric/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <UploadCloud className="w-5 h-5 text-electric" />
                  </div>
                  <div className="text-xs font-semibold">Tap to browse files</div>
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
`,
  'desktop-terminal.tsx': `"use client";

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
        
        {/* Terminal Window Mockup */}
        <div className="glass-card overflow-hidden border-border-glow/40 shadow-2xl shadow-electric/10 relative z-10 flex flex-col h-[550px]">
          {/* Title Bar */}
          <div className="bg-black/60 px-4 py-3 border-b border-border flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="text-xs font-semibold text-text-tertiary flex items-center gap-2">
              <Monitor className="w-3 h-3" />
              PrintCafe Terminal
            </div>
          </div>
          
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-48 lg:w-56 bg-midnight/80 border-r border-border p-3 space-y-1 hidden md:block">
              <div className="px-3 py-2 bg-surface-elevated rounded-md text-sm font-bold text-text-primary flex items-center gap-2 border border-border">
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
            <div className="flex-1 bg-surface p-6 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Active Jobs</h3>
                <div className="text-xs font-semibold px-3 py-1 bg-emerald-soft text-emerald rounded-full flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald animate-pulse"></div>
                  Online
                </div>
              </div>
              
              <div className="space-y-3 flex-1 overflow-y-auto pr-2">
                {/* Job 1 */}
                <div className="bg-midnight/60 border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-border-glow transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                      <FileText className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">resume-final.pdf</div>
                      <div className="text-xs text-text-secondary mt-0.5">2 pages × 1 copy • B&W • Duplex</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-start sm:self-auto">
                    <div className="text-[10px] text-text-tertiary">Just now</div>
                    <span className="px-2.5 py-1 bg-amber-soft border border-amber/20 text-amber text-[10px] font-bold rounded uppercase tracking-wider min-w-[80px] text-center">
                      Printing
                    </span>
                  </div>
                </div>
                
                {/* Job 2 */}
                <div className="bg-midnight/60 border border-electric/30 shadow-[0_0_15px_rgba(37,99,235,0.05)] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                      <FileText className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">assignment-ch4.pdf</div>
                      <div className="text-xs text-text-secondary mt-0.5">12 pages × 1 copy • B&W</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-start sm:self-auto">
                    <div className="text-[10px] text-text-tertiary">2 mins ago</div>
                    <span className="px-2.5 py-1 bg-electric-soft border border-electric/20 text-electric text-[10px] font-bold rounded uppercase tracking-wider min-w-[80px] text-center">
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
`,
  'print-mode-compare.tsx': `"use client";

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
`,
  'business-types.tsx': `"use client";

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
`,
  'faq.tsx': `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

const FAQS = [
  { q: "What is PrintCafe?", a: "PrintCafe is a branded online print counter for cybercafés, photocopy shops, and print studios. It digitises your print intake: customers scan a QR code, upload documents, choose print options, see a clear price, and pay — while you manage everything from a desktop terminal." },
  { q: "How does the QR ordering work?", a: "You display a shop-specific QR code at your counter. When a customer scans it, it opens your branded print portal in their phone browser. No app install is needed. They upload a document, choose options, and submit their order." },
  { q: "What payment methods are supported?", a: "PrintCafe supports online payment including UPI and card payments through the configured payment provider. Customers can also choose to pay at the counter. The payment integration is designed to be provider-flexible." },
  { q: "Do my customers need to create an account?", a: "No. There is no customer login or account creation. Customers simply scan the QR, upload, pay, and collect. The entire flow is designed for walk-in convenience." },
  { q: "How does Auto-Print work?", a: "Auto-Print is an optional mode in the desktop terminal. When enabled, paid jobs are automatically sent to your connected printer as they arrive. You can switch between Auto-Print and Manual Print at any time from the terminal settings." },
  { q: "What file formats are supported?", a: "Customers can upload PDF, JPG, and PNG files. Images are automatically converted to print-ready format. The maximum file size is configured by the shop owner." },
  { q: "How do I get started?", a: "[PLACEHOLDER: Contact us to schedule a demo and get set up. We currently onboard shops individually to ensure everything works perfectly with your setup.]" }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Generate JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <SectionWrapper className="py-24 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\\\u003c') }} />
      
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">Frequently asked questions</h2>
      </div>

      <div className="glass-card divide-y divide-border overflow-hidden">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-border">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-surface/50 transition-colors focus:outline-none focus-visible:bg-surface"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-text-primary pr-8">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 text-text-tertiary transition-transform duration-300 shrink-0", isOpen && "rotate-180 text-electric")} />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
`,
  'cta-section.tsx': `"use client";

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
          <button className="bg-electric hover:bg-electric/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-electric/25">
            Book a Demo
          </button>
          <button className="bg-surface hover:bg-surface-elevated border border-border-glow text-text-primary px-8 py-4 rounded-full font-semibold transition-all">
            Talk to Us
          </button>
        </div>
        
        <p className="text-text-tertiary text-xs mt-8 font-medium">
          {CONTACT_INFO.email}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(sectionsDir, filename), content);
}
console.log("Successfully created 10 section components.");
