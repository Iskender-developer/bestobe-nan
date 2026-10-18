import { Loaf } from "./Loaf";

type ArchSceneProps = {
  alt: string;
  rise?: boolean;
  className?: string;
};

const rays = [-72, -54, -36, -18, 0, 18, 36, 54, 72];

/** Arched bakery window: a sun rising behind a loaf on the counter. */
export function ArchScene({ alt, rise = false, className = "" }: ArchSceneProps) {
  return (
    <div className={`overflow-hidden rounded-t-full bg-sand ${className}`}>
      <svg viewBox="0 0 400 500" role="img" aria-label={alt} className="block h-full w-full" preserveAspectRatio="xMidYMax slice">
        <g className={rise ? "sun-rise" : undefined}>
          {rays.map((deg) => (
            <line
              key={deg}
              x1="200"
              y1="290"
              x2="200"
              y2="110"
              transform={`rotate(${deg} 200 290)`}
              className="stroke-twine/50"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
          <circle cx="200" cy="290" r="86" className="fill-twine/40" />
          <circle cx="200" cy="290" r="62" className="fill-twine/60" />
        </g>
        <rect x="0" y="410" width="400" height="90" className="fill-fawn" />
        <rect x="0" y="410" width="400" height="8" className="fill-roast" />
        <g transform="translate(40 190) scale(1.6)">
          <Loaf shape="round" />
        </g>
      </svg>
    </div>
  );
}
