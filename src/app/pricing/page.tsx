import { Metadata } from 'next';
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the right PrintCafe plan for your print shop. Transparent pricing designed to scale with your business.',
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://printcafe.example.com/" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://printcafe.example.com/pricing" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20">
        <Pricing />
        <Faq />
        <CtaSection />
      </div>
    </>
  );
}
