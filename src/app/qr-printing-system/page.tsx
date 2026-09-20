import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { QrCode, ScanLine, Palette, Store } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Printing System',
  description: 'One scan for instant access to your print portal. Learn about PrintHatke\'s QR-based upload system.',
};

export default function QrPrintingSystemPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          One scan. <br/> Instant access to your print portal.
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          No apps to download. Customers simply scan your shop's unique QR code to start printing.
        </p>
      </section>

      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-8">How it works</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center shrink-0 border border-border">1</div>
                <div>
                  <h4 className="font-semibold text-lg">Shop-Specific QR</h4>
                  <p className="text-text-secondary">Place your unique QR card on the counter.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center shrink-0 border border-border">2</div>
                <div>
                  <h4 className="font-semibold text-lg">Instant Browser Access</h4>
                  <p className="text-text-secondary">Scanning opens the portal directly in the user's mobile browser.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center shrink-0 border border-border">3</div>
                <div>
                  <h4 className="font-semibold text-lg">Owner-Branded Experience</h4>
                  <p className="text-text-secondary">The portal features your shop name, location, and accent colour.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center">
            {/* Counter Display Card Mockup */}
            <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-surface-elevated transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-electric p-6 text-center text-midnight">
                <h3 className="font-bold text-2xl uppercase tracking-wider">Print Here</h3>
                <p className="text-sm opacity-80 mt-1 font-medium">Scan to upload files</p>
              </div>
              <div className="p-8 bg-white flex justify-center">
                <QrCode className="w-40 h-40 text-black" />
              </div>
              <div className="bg-gray-100 p-4 text-center">
                <p className="text-gray-800 font-bold">Fast • Easy • Secure</p>
                <p className="text-xs text-gray-500 mt-1">Powered by PrintHatke</p>
              </div>
            </div>
            
            {/* Abstract decorative elements */}
            <ScanLine className="absolute -bottom-8 -left-8 w-24 h-24 text-electric/20" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-16 bg-surface-elevated/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Owner Controls</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <Store className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-semibold text-lg mb-2">Shop Details</h3>
              <p className="text-text-secondary text-sm">Update your shop's name and location dynamically.</p>
            </div>
            <div className="glass-card p-6">
              <Palette className="w-8 h-8 text-violet mb-4" />
              <h3 className="font-semibold text-lg mb-2">Custom Themes</h3>
              <p className="text-text-secondary text-sm">Choose accent colours that match your brand identity.</p>
            </div>
            <div className="glass-card p-6">
              <QrCode className="w-8 h-8 text-emerald mb-4" />
              <h3 className="font-semibold text-lg mb-2">Dynamic Badges</h3>
              <p className="text-text-secondary text-sm">Show real-time 'Open' or 'Closed' status to customers scanning the code.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-6">Get your shop's QR code today</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-electric text-midnight font-medium hover:bg-electric-soft transition-colors">
          Contact Us
        </Link>
      </SectionWrapper>
    </>
  );
}
