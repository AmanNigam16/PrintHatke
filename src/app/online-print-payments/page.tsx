import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { CreditCard, Smartphone, CheckCircle2, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Online Print Payments',
  description: 'Accept payments before you print. Flexible online payment options including UPI and card payments for your cybercafé.',
};

export default function OnlinePaymentsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          Accept payments <br className="hidden md:block"/> before you print
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Ensure you get paid for every job. Offer customers the convenience of online payment or the flexibility to pay at the counter.
        </p>
      </section>

      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Shield className="w-8 h-8 text-emerald/50" />
            </div>
            <h3 className="text-xl font-medium mb-6">Payment Flow</h3>
            <div className="space-y-6">
              <div className="bg-surface p-4 rounded-lg border border-border flex justify-between items-center">
                <span className="text-text-secondary">Print Quote</span>
                <span className="font-bold">₹24.00</span>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-electric text-midnight py-3 rounded-lg font-medium flex justify-center items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Pay via UPI
                </button>
                <button className="w-full bg-surface-elevated border border-border text-text-primary py-3 rounded-lg font-medium flex justify-center items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Card Payment
                </button>
                <button className="w-full bg-transparent border border-border/50 text-text-secondary py-3 rounded-lg font-medium">
                  Pay at Counter
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-8">How it works</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Instant Quote Generation</h4>
                  <p className="text-text-secondary">Based on the file and selected options, the customer sees a precise price instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Flexible Payment Methods</h4>
                  <p className="text-text-secondary">Customers can pay online securely (UPI/card) or opt to pay at the counter with cash.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Confirmed Before Printing</h4>
                  <p className="text-text-secondary">Jobs only enter the queue when payment intent is confirmed, eliminating abandoned prints.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-surface-elevated border border-electric/20 rounded-lg text-sm text-text-secondary">
              <strong className="text-text-primary block mb-1">Gateway Flexible</strong>
              PrintHatke is designed to work with different payment providers to ensure maximum compatibility and reliability for your business.
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-6">Stop losing money on abandoned prints</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-electric text-midnight font-medium hover:bg-electric-soft transition-colors">
          Get PrintHatke
        </Link>
      </SectionWrapper>
    </>
  );
}
