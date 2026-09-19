import { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PrintCafe. Book a demo, ask questions, or learn how to upgrade your print counter.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
          Get in touch
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Have questions about PrintCafe or want to see a live demo? We'd love to hear from you.
        </p>
      </section>

      <SectionWrapper className="py-16 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-8">Reach Out Directly</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-text-secondary mb-1">For general inquiries and support.</p>
                  <a href="mailto:[PLACEHOLDER]" className="text-electric hover:underline">[PLACEHOLDER_EMAIL@EXAMPLE.COM]</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center shrink-0 border border-border">
                  <Phone className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-text-secondary mb-1">Available Mon-Fri, 9am - 6pm IST.</p>
                  <a href="tel:[PLACEHOLDER]" className="text-emerald hover:underline">[PLACEHOLDER_PHONE_NUMBER]</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center shrink-0 border border-border">
                  <MessageSquare className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-text-secondary mb-1">Message us directly for quick replies.</p>
                  <a href="https://wa.me/[PLACEHOLDER]" className="text-violet hover:underline" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 glass-card border-electric/30 bg-electric/5">
              <h3 className="font-semibold text-lg mb-2">Book a Demo</h3>
              <p className="text-text-secondary text-sm mb-4">Want to see how PrintCafe works in action? Schedule a tailored demo for your shop.</p>
              <p className="text-xs text-text-tertiary italic">[PLACEHOLDER: Demo booking mechanism - Calendly, Google Forms, or custom]</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 bg-surface-elevated/30">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
