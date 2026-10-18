import type { Testimonial } from "../../types";

type TestimonialCardProps = { testimonial: Testimonial };

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-cream rounded-2xl p-6 shadow-md">
      <div className="flex gap-1 text-twine mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-ink italic">"{testimonial.quote}"</p>
      <p className="mt-4 font-serif text-fawn">{testimonial.name}</p>
      <p className="text-sm text-ink/70">{testimonial.role}</p>
    </div>
  );
}
