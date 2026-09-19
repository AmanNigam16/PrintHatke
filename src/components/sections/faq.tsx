"use client";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      
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
