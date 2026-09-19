"use client";

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
