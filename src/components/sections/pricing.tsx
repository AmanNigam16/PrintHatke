'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Check, ChevronDown } from 'lucide-react';

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      desc: "QR portal for a small single-printer shop.",
      price: "99",
      features: [
        "25 orders/day",
        "300 orders/month",
        "1 printer",
        "1 dashboard user",
        "Manual print release",
        "QR order intake",
      ]
    },
    {
      name: "Growth",
      desc: "Automation for growing shops.",
      price: "199",
      badge: "MOST POPULAR",
      features: [
        "100 orders/day",
        "1,500 orders/month",
        "2 printers",
        "2 dashboard users",
        "90 days analytics",
        "Auto-print functionality",
        "QR order intake",
        "CSV export",
      ]
    },
    {
      name: "Pro",
      desc: "Full automatic printing with multiple printers and staff.",
      price: "499",
      features: [
        "300 orders/day",
        "6,000 orders/month",
        "5 printers",
        "5 dashboard users",
        "365 days analytics",
        "All-document auto print",
        "QR order intake",
        "CSV export",
      ]
    },
    {
      name: "Scale",
      desc: "High-volume automation for busy shops and branches.",
      price: "899",
      features: [
        "2,500 orders/day",
        "50,000 orders/month",
        "10 printers",
        "10 dashboard users",
        "730 days analytics",
        "All-document auto print",
        "QR order intake",
        "CSV export",
      ]
    }
  ];

  return (
    <SectionWrapper className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-electric tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
          Plans built for profitable printing
        </h2>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
          Choose your PrintCafe plan
        </h1>
        <p className="text-lg text-text-secondary">
          No hidden fees. Just transparent pricing designed to scale with your print counter.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
        <div className="flex items-center bg-surface-elevated border border-border p-1.5 rounded-full">
          <button 
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${billing === 'monthly' ? 'bg-electric text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBilling('yearly')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${billing === 'yearly' ? 'bg-electric text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Yearly · save
          </button>
        </div>
        
        <div className="flex items-center gap-3 bg-surface-elevated border border-border rounded-lg px-4 py-2">
          <span className="text-xs font-semibold text-text-secondary">Billing currency</span>
          <div className="flex items-center gap-1 text-sm font-bold text-text-primary cursor-pointer">
            INR — Indian Rupee <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={plan.name}
            className={`glass-card relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.badge ? 'border-electric shadow-[0_0_25px_rgba(37,99,235,0.15)] ring-1 ring-electric/50 z-10' : 'border-border'}`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full shadow-lg">
                {plan.badge}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
              <p className="text-xs text-text-secondary h-8">{plan.desc}</p>
            </div>
            
            {plan.name === 'Growth' && (
              <div className="bg-emerald/10 border border-emerald/20 text-emerald text-xs font-bold py-1.5 px-3 rounded-md w-max mb-4">
                7-day free trial available
              </div>
            )}
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-extrabold text-text-primary">₹{plan.price}</span>
                <span className="text-sm font-medium text-text-secondary">/month</span>
              </div>
            </div>
            
            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="/register" className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.badge ? 'bg-electric text-white hover:bg-electric-soft shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-surface-elevated text-electric border border-electric/30 hover:border-electric/60 hover:bg-electric/5'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Get started
            </a>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/register" className="bg-electric text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center">
            Register as a merchant
          </a>
          <button className="glass-card text-text-primary px-8 py-3.5 rounded-full font-bold border border-border hover:bg-surface-elevated transition-colors">
            Merchant sign in
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
