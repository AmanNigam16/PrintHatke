import { Metadata } from 'next';
import { ProductDemo } from "@/components/sections/product-demo";
import { HowItWorksSteps } from "@/components/sections/how-it-works-steps";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See the complete workflow of PrintHatke. From QR scan to collected print — every step seamlessly connected for your print counter.',
};

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://printhatke.example.com/" },
      { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://printhatke.example.com/how-it-works" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20">
        <ProductDemo />
        <HowItWorksSteps />
        <CtaSection />
      </div>
    </>
  );
}
