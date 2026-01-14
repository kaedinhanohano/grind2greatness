import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { TrainingAreas } from "@/components/sections/TrainingAreas";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrainingAreas />
      <WhyChoose />
      <CTA />
    </>
  );
}
