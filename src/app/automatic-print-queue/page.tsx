import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Settings, Play, RefreshCw, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automatic Print Queue Management',
  description: 'Manage your prints automatically. Learn about PrintCafe\'s desktop terminal, auto-print capabilities, and job lifecycles.',
};

export default function AutomaticQueuePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          Your prints, <br className="hidden md:block"/> managed automatically
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          The PrintCafe Desktop Terminal handles file processing, queueing, and printing so you don't have to.
        </p>
      </section>

      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-8">Manual vs Auto-Print</h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6 border-l-4 border-l-violet">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-violet" />
                  <h3 className="text-xl font-semibold">Manual Print Mode</h3>
                </div>
                <p className="text-text-secondary">
                  Perfect for shops that want to verify files before printing. Jobs arrive in the 'Queued' tab. You click 'Print' when you're ready, and the terminal fetches the file and sends it to the selected printer.
                </p>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-electric">
                <div className="flex items-center gap-3 mb-3">
                  <Play className="w-6 h-6 text-electric" />
                  <h3 className="text-xl font-semibold">Auto-Print Mode</h3>
                </div>
                <p className="text-text-secondary">
                  Ideal for self-service or high-volume hours. Paid jobs are automatically downloaded and routed to the correct printer based on settings (B&W vs Colour). Zero human interaction required.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-2 md:p-4 bg-surface-elevated/50 border border-border rounded-xl">
            {/* Simple Terminal Mockup */}
            <div className="bg-midnight rounded-lg overflow-hidden border border-border shadow-2xl">
              <div className="bg-surface border-b border-border p-3 flex gap-4 text-sm">
                <span className="text-electric font-medium border-b-2 border-electric pb-2 -mb-3">Active Jobs</span>
                <span className="text-text-secondary">Completed</span>
                <span className="text-text-secondary ml-auto flex items-center gap-1"><Settings className="w-4 h-4"/> Settings</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between bg-surface-elevated p-3 rounded border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-text-secondary" />
                    <div>
                      <p className="text-sm font-medium">project_report.pdf</p>
                      <p className="text-xs text-text-tertiary">20 pages • B&W • Double-sided</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-amber/10 text-amber text-xs rounded font-medium">PRINTING</span>
                </div>
                <div className="flex items-center justify-between bg-surface-elevated p-3 rounded border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-text-secondary" />
                    <div>
                      <p className="text-sm font-medium">id_card.jpg</p>
                      <p className="text-xs text-text-tertiary">1 copy • Colour</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded font-medium">COMPLETED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The Job Lifecycle</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -z-10 transform -translate-y-1/2"></div>
          
          {[
            { status: "Queued", desc: "Customer places order", color: "text-text-secondary" },
            { status: "Claimed", desc: "Terminal locks job", color: "text-violet" },
            { status: "Downloading", desc: "Fetching file securely", color: "text-amber" },
            { status: "Printing", desc: "Sent to printer spooler", color: "text-electric" },
            { status: "Completed", desc: "Ready for pickup", color: "text-emerald" }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center bg-midnight p-4 rounded-xl text-center w-full md:w-40 border border-surface-elevated shadow-sm">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 bg-surface-elevated ${step.color}`}>
                {i + 1}
              </div>
              <h4 className="font-semibold text-text-primary text-sm mb-1">{step.status}</h4>
              <p className="text-xs text-text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-6">Automate your print queue</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-electric text-midnight font-medium hover:bg-electric-soft transition-colors">
          Contact Us
        </Link>
      </SectionWrapper>
    </>
  );
}
