import { FloatingBadge } from "../ui/FloatingBadge";
import { hero } from "../../data/content";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ArchScene } from "../ui/ArchScene";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="grid items-center gap-12 py-12 md:grid-cols-[1.15fr_1fr] md:py-24 lg:gap-24">
        <div className="glass rounded-3xl p-8 md:p-12">
          <SectionHeading
            label={hero.eyebrow}
            title={hero.headline}
            accentWord={hero.accentWord}
            text={hero.text}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#breads">{hero.primaryButton}</Button>
            <Button variant="secondary" href="#contact">
              {hero.secondaryButton}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-3xl p-4 md:p-6">
            {hero.image ? (
              <img
                src={hero.image}
                alt={hero.alt}
                className="w-full max-w-md rounded-2xl object-cover"
                loading="eager"
              />
            ) : (
              <ArchScene alt={hero.alt} className="w-full max-w-md" />
            )}
          </div>
          <FloatingBadge label={hero.badgeLabel} text={hero.badgeText} className="-bottom-6 -left-6 md:-bottom-8 md:-left-8 z-10" />
        </div>
      </Container>
    </section>
  );
}
