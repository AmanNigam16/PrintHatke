import { Metadata } from 'next';
import { CapabilityCards } from "@/components/sections/capability-cards";
import { PortalCustomisation } from "@/components/sections/portal-customisation";
import { DesktopTerminal } from "@/components/sections/desktop-terminal";
import { PrintModeCompare } from "@/components/sections/print-mode-compare";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: 'Product',
  description: 'Explore the powerful features of PrintCafe. Build your branded print portal, manage jobs with our desktop terminal, and automate your workflow.',
};

export default function ProductPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://printcafe.example.com/" },
      { "@type": "ListItem", "position": 2, "name": "Product", "item": "https://printcafe.example.com/product" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20">
        <CapabilityCards />
        <PortalCustomisation />
        <DesktopTerminal />
        <PrintModeCompare />
        <CtaSection />
      </div>
    </>
  );
}
