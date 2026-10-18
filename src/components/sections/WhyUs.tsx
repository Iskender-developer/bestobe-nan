import { whyUs } from "../../data/content";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<string, string> = { Wheat: "🌾", Sunrise: "🌅", Leaf: "🍃", Heart: "❤️" };

export function WhyUs() {
  return (
    <section id="why-us" className="min-h-dvh snap-start py-20 md:py-28">
      <Container>
        <SectionHeading label={whyUs.label} title={whyUs.heading} text={whyUs.text} />
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whyUs.features.map((f) => (
            <GlassCard key={f.id} className="p-6">
              <span className="text-2xl mb-3 block">{icons[f.icon] ?? "⭐"}</span>
              <h3 className="font-serif text-xl font-semibold text-oat">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
