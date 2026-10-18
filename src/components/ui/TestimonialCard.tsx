import { Star } from "lucide-react";
import type { Testimonial } from "../../types";

type TestimonialCardProps = {
  testimonial: Testimonial;
  ratingLabel: string;
  featured?: boolean;
};

export function TestimonialCard({ testimonial, ratingLabel, featured = false }: TestimonialCardProps) {
  return (
    <figure className={featured ? "glass rounded-3xl p-6" : ""}>
      <div className="flex gap-1 text-amber" role="img" aria-label={`${testimonial.rating} ${ratingLabel}`}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={`${testimonial.id}-star-${i}`} size={featured ? 22 : 18} className="fill-amber" aria-hidden="true" />
        ))}
      </div>
      <blockquote
        className={`mt-5 font-serif italic text-oat ${featured ? "text-3xl leading-snug md:text-4xl" : "text-xl leading-relaxed"}`}
      >
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 text-mist/80">
        <span className="font-medium text-oat">{testimonial.name}</span>
        <span className="block text-sm">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
