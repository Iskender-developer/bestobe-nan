import type { Bread } from "../../types";
import { Loaf } from "./Loaf";

type BreadCardProps = { bread: Bread };

export function BreadCard({ bread }: BreadCardProps) {
  return (
    <article className="w-56 shrink-0 snap-start sm:w-64">
      <div className="aspect-[4/5] overflow-hidden rounded-t-full bg-espresso/30">
        {bread.image ? (
          <img src={bread.image} alt={bread.alt} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <svg viewBox="0 0 200 200" role="img" aria-label={bread.alt} className="h-full w-full">
            <g transform="translate(0 28)">
              <Loaf shape={bread.shape} />
            </g>
          </svg>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <h3 className="font-serif text-2xl font-semibold text-oat">{bread.name}</h3>
        <span aria-hidden="true" className="min-w-4 flex-1 border-b-2 border-dotted border-crumb" />
        <p className="font-medium text-amber">${bread.price}</p>
      </div>
      <p className="mt-1 text-sm text-mist">{bread.tag}</p>
    </article>
  );
}
