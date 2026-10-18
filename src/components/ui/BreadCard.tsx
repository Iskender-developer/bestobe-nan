import type { Bread } from "../../types";

type BreadCardProps = { bread: Bread };

export function BreadCard({ bread }: BreadCardProps) {
  return (
    <div className="snap-start shrink-0 w-64 bg-cream rounded-2xl shadow-md overflow-hidden">
      <div className="aspect-square bg-sand flex items-center justify-center text-twine">
        <span className="text-4xl">🍞</span>
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-twine">{bread.tag}</p>
        <h3 className="font-serif text-xl text-fawn mt-1">{bread.name}</h3>
        <p className="mt-2 text-ink font-medium">${bread.price}</p>
      </div>
    </div>
  );
}
