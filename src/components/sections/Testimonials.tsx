import { testimonials } from "../../data/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "../ui/TestimonialCard";

export function Testimonials() {
  const [featured, ...rest] = testimonials.items;
  return (
    <section id="testimonials" className="min-h-dvh snap-start py-20 md:py-28">
      <Container>
        <SectionHeading title={testimonials.heading} text={testimonials.text} />
        <div className="mt-14 max-w-3xl">
          <TestimonialCard testimonial={featured} ratingLabel={testimonials.ratingLabel} featured />
        </div>
        <div className="mt-14 grid gap-10 border-t border-crumb/40 pt-12 md:grid-cols-2 md:gap-16">
          {rest.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} ratingLabel={testimonials.ratingLabel} />
          ))}
        </div>
      </Container>
    </section>
  );
}
