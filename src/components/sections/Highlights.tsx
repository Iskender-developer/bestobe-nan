import { GlassCard } from "../ui/GlassCard";
import { highlights } from "../../data/content";
import { Container } from "../ui/Container";

export function Highlights() {
  return (
    <section id="highlights" className="py-20 md:py-28">
      <Container>
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <GlassCard key={h.id} className="p-6">
              <p className="text-xs uppercase tracking-widest text-amber mb-2">{h.eyebrow}</p>
              <h3 className="font-serif text-xl font-semibold text-oat">{h.title}</h3>
              <p className="mt-2 text-sm text-mist">{h.text}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
