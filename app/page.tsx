import { HeroSection } from "@/components/home/hero-section";
import { InitiativesSection } from "@/components/home/initiatives-section";
import { QuoteSection } from "@/components/home/quote-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InitiativesSection />
      <QuoteSection />
      <TestimonialsSection />
    </>
  );
}