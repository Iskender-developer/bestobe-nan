import { testimonials } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "../ui/TestimonialCard";

export function Testimonials() {
  return (
    <section className="bg-sand py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={testimonials.heading} text={testimonials.text} />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {testimonials.items.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
        </div>
      </div>
    </section>
  );
}
