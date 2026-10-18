import type { Feature } from "../../types";

type FeatureCardProps = { feature: Feature };

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-sand rounded-2xl p-6 shadow-sm">
      <p className="text-xs uppercase tracking-widest text-twine">{feature.label}</p>
      <h3 className="font-serif text-xl text-fawn mt-2">{feature.title}</h3>
      <p className="mt-2 text-sm text-ink/80">{feature.text}</p>
    </div>
  );
}
