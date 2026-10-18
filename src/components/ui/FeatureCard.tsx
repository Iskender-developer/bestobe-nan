import type { FeatureCard } from "../../types";
import { GlassCard } from "./GlassCard";

type FeatureCardProps = { feature: FeatureCard };

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <GlassCard className="flex flex-col">
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-espresso/30 mb-4">
        {feature.image ? (
          <img src={feature.image} alt={feature.alt} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-mist text-4xl">🍞</div>
        )}
      </div>
      <h3 className="font-serif text-2xl font-semibold text-oat">{feature.title}</h3>
      <p className="mt-2 leading-relaxed text-mist">{feature.text}</p>
    </GlassCard>
  );
}
