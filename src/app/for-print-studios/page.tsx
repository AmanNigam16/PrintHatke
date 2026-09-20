import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Palette, Settings, Eye, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Print Studios',
  description: 'Provide a branded, professional print portal for your studio. Enhance quality control and customer experience.',
};

export default function ForPrintStudiosPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          A branded print portal <br className="hidden md:block"/> for your studio
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Elevate your professional image and maintain complete control over print quality and customer orders.
        </p>
      </section>

      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 glass-card p-8 min-h-[400px] flex flex-col justify-center items-center text-center border-emerald/30 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-soft via-emerald to-emerald-soft"></div>
            <div className="w-24 h-24 bg-surface rounded-2xl flex items-center justify-center mb-8 border border-border shadow-lg">
              <span className="text-2xl font-bold text-emerald">Logo</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Studio Portal Preview</h3>
            <p className="text-text-secondary max-w-sm">Customise your portal with your studio name, logo, brand colours, and specific print settings.</p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-text-primary mb-8">Maintain professional standards</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Palette className="w-8 h-8 text-emerald shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Branded Portal</h4>
                  <p className="text-text-secondary">Project a premium image with a custom-branded upload portal for your clients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Eye className="w-8 h-8 text-electric shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Review Before Printing</h4>
                  <p className="text-text-secondary">Review complex jobs on the desktop app before committing to expensive print runs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Settings className="w-8 h-8 text-violet shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Customisable Settings</h4>
                  <p className="text-text-secondary">Configure available paper sizes, finish types, and premium pricing options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-6">Build your studio's digital presence</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-electric text-midnight font-medium hover:bg-electric-soft transition-colors">
          Contact Sales
        </Link>
      </SectionWrapper>
    </>
  );
}
