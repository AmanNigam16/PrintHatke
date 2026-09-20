import { Metadata } from 'next';
import { BusinessTypes } from "@/components/sections/business-types";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'See how PrintHatke works for cybercafés, photocopy shops, print studios, and document counters.',
};

export default function UseCasesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://printhatke.example.com/" },
      { "@type": "ListItem", "position": 2, "name": "Use Cases", "item": "https://printhatke.example.com/use-cases" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20">
        <BusinessTypes />
        <CtaSection />
      </div>
    </>
  );
}
