import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { FileStack, Calculator, Clock, CheckSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Photocopy Shops',
  description: 'Professional print management for photocopy shops. Transparent pricing, automatic queues, and hassle-free payments.',
};

export default function ForPhotocopyShopsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          Professional print management <br className="hidden md:block"/> for photocopy shops
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Handle high volumes of print jobs without the counter congestion, pricing disputes, or manual tracking.
        </p>
      </section>

      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-6">Solve counter congestion</h2>
            <p className="text-text-secondary mb-8">
              Photocopy shops often deal with high footfall and complex pricing requirements. 
              PrintCafe streamlines the intake process so you can focus on running the machines.
            </p>
            <div className="space-y-4">
              {[
                "Transparent, automated pricing based on your rates",
                "Digital queue to replace shouting names across the counter",
                "Online payment or counter pay options",
                "Branded portal that builds trust with customers"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-text-primary">
                  <CheckSquare className="w-5 h-5 text-emerald" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
              <Calculator className="w-10 h-10 text-violet mb-4" />
              <h3 className="font-semibold mb-2">No Disputes</h3>
              <p className="text-sm text-text-secondary">Prices calculated upfront.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center mt-8">
              <FileStack className="w-10 h-10 text-electric mb-4" />
              <h3 className="font-semibold mb-2">High Volume</h3>
              <p className="text-sm text-text-secondary">Queue handles multiple files with ease.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center -mt-8">
              <Clock className="w-10 h-10 text-emerald mb-4" />
              <h3 className="font-semibold mb-2">Save Time</h3>
              <p className="text-sm text-text-secondary">Automated print routing.</p>
            </div>
            <div className="bg-surface-elevated border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-3/4 h-2 bg-surface rounded-full mb-3 overflow-hidden">
                <div className="w-full h-full bg-electric animate-pulse"></div>
              </div>
              <h3 className="font-semibold text-sm">Status Tracking</h3>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-6">Upgrade your photocopy shop</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-electric text-midnight font-medium hover:bg-electric-soft transition-colors">
          Get Started
        </Link>
      </SectionWrapper>
    </>
  );
}
