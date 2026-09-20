import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Smartphone, Zap, IndianRupee, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Cybercafés',
  description: 'Replace WhatsApp and USB chaos with a streamlined digital print counter designed specifically for Indian cybercafés.',
};

export default function ForCybercafesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://printhatke.example.com/" },
      { "@type": "ListItem", "position": 2, "name": "For Cybercafés", "item": "https://printhatke.example.com/for-cybercafes" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          Digitise your cybercafé print counter
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Say goodbye to infected USB drives, endless WhatsApp messages, and confusing queues. Upgrade to a professional, automated workflow.
        </p>
      </section>

      {/* Pain Points vs Solutions */}
      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-8">The old way is holding you back</h2>
            <ul className="space-y-6">
              {[
                { title: "USB Drives", desc: "Risk of viruses and slow file transfer.", solution: "Direct web upload." },
                { title: "WhatsApp Clutter", desc: "Mixing personal messages with customer prints.", solution: "Dedicated portal." },
                { title: "Queue Confusion", desc: "Customers arguing over who is next.", solution: "Digital token system." },
                { title: "Cash Hassles", desc: "Fumbling for change during rush hours.", solution: "Online payments." }
              ].map((item, i) => (
                <li key={i} className="glass-card p-4 border-l-4 border-l-amber">
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm mt-1">{item.desc}</p>
                  <p className="text-emerald-soft text-sm mt-2 font-medium">↳ Solution: {item.solution}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-elevated rounded-3xl p-8 border border-border h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">The PrintHatke Way</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-electric/10 text-electric flex items-center justify-center border border-electric/20"><Smartphone /></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-lg">Scan & Upload</h4>
                  <p className="text-text-secondary">Customers scan a QR code and upload directly from their phones. No apps needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-violet/10 text-violet flex items-center justify-center border border-violet/20"><IndianRupee /></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-lg">Instant Pricing</h4>
                  <p className="text-text-secondary">Automated price calculation ends haggling. Accept online payments effortlessly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald/10 text-emerald flex items-center justify-center border border-emerald/20"><Zap /></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-lg">Automatic Queue</h4>
                  <p className="text-text-secondary">Jobs arrive ready-to-print. Choose manual review or hands-free auto-print.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-6">Ready to modernise your cybercafé?</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-electric text-midnight font-medium hover:bg-electric-soft transition-colors">
          Contact Us
        </Link>
      </SectionWrapper>
    </>
  );
}
