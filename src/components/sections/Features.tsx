import { SectionHeading } from "../ui/SectionHeading";
import { FeatureCard } from "../ui/FeatureCard";
import { features } from "../../data/content";
import { Container } from "../ui/Container";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeading label="Featured" title="Bread the way it should be" text="No shortcuts. No machines doing the real work. Just hands, heat and patience." />
        </div>
        <div className="grid gap-6">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
