import { whyUs } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureCard } from "../ui/FeatureCard";

export function WhyUs() {
  return (
    <section id="why-us" className="py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label={whyUs.label} title={whyUs.heading} text={whyUs.text} />
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {whyUs.features.map((f) => <FeatureCard key={f.id} feature={f} />)}
        </div>
      </div>
    </section>
  );
}
