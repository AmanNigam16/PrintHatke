import { Hero } from "@/components/sections/hero";
import { PainVsSolution } from "@/components/sections/pain-vs-solution";
import { BusinessTypes } from "@/components/sections/business-types";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <PainVsSolution />
      <BusinessTypes />
      <Faq />
      <CtaSection />
    </>
  );
}
