import type { BreadShape } from "../../types";

type LoafProps = { shape: BreadShape };

const seeds: [number, number, number][] = [
  [62, 96, 20], [84, 80, -30], [108, 74, 10], [132, 84, 40], [150, 102, -15],
  [74, 118, 35], [100, 104, -20], [126, 112, 25], [92, 130, 5], [140, 128, -35],
  [58, 120, -10], [112, 130, 30],
];

/** Hand-drawn style loaf, drawn in a 200 x 200 box. Uses theme colors only. */
export function Loaf({ shape }: LoafProps) {
  switch (shape) {
    case "round":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="100" cy="152" rx="74" ry="7" className="fill-ink/15" />
          <path
            d="M26 120 C26 70 62 46 100 46 C138 46 174 70 174 120 C174 142 150 152 100 152 C50 152 26 142 26 120Z"
            className="fill-twine stroke-fawn"
            strokeWidth="3"
          />
          <path d="M46 100 C54 76 76 62 100 60" className="fill-none stroke-cream/50" strokeWidth="5" />
          <path d="M68 114 C88 76 122 74 140 98" className="fill-none stroke-sand" strokeWidth="8" />
          <path d="M80 124 C98 104 120 104 132 116" className="fill-none stroke-sand" strokeWidth="5" />
        </g>
      );
    case "oval":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="100" cy="150" rx="86" ry="7" className="fill-ink/15" />
          <path
            d="M14 118 C14 82 52 62 100 62 C148 62 186 82 186 118 C186 138 150 148 100 148 C50 148 14 138 14 118Z"
            className="fill-fawn stroke-roast"
            strokeWidth="3"
          />
          <path d="M52 116 L68 84" className="fill-none stroke-sand" strokeWidth="7" />
          <path d="M92 118 L108 82" className="fill-none stroke-sand" strokeWidth="7" />
          <path d="M132 116 L148 84" className="fill-none stroke-sand" strokeWidth="7" />
          <circle cx="40" cy="104" r="2.5" className="fill-cream/60" />
          <circle cx="162" cy="106" r="2.5" className="fill-cream/60" />
          <circle cx="116" cy="130" r="2" className="fill-cream/60" />
          <circle cx="76" cy="132" r="2" className="fill-cream/60" />
        </g>
      );
    case "long":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="100" cy="150" rx="86" ry="6" className="fill-ink/15" />
          <g transform="rotate(-16 100 100)">
            <rect x="6" y="84" width="188" height="34" rx="17" className="fill-twine stroke-fawn" strokeWidth="3" />
            <path d="M32 90 L44 112" className="fill-none stroke-sand" strokeWidth="6" />
            <path d="M66 90 L78 112" className="fill-none stroke-sand" strokeWidth="6" />
            <path d="M100 90 L112 112" className="fill-none stroke-sand" strokeWidth="6" />
            <path d="M134 90 L146 112" className="fill-none stroke-sand" strokeWidth="6" />
            <path d="M166 92 L174 108" className="fill-none stroke-sand" strokeWidth="5" />
          </g>
        </g>
      );
    case "seeded":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="100" cy="152" rx="74" ry="7" className="fill-ink/15" />
          <path
            d="M26 120 C26 70 62 46 100 46 C138 46 174 70 174 120 C174 142 150 152 100 152 C50 152 26 142 26 120Z"
            className="fill-fawn stroke-roast"
            strokeWidth="3"
          />
          {seeds.map(([x, y, r]) => (
            <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="4.5" ry="2" transform={`rotate(${r} ${x} ${y})`} className="fill-sand" />
          ))}
        </g>
      );
    case "flat":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="100" cy="152" rx="82" ry="6" className="fill-ink/15" />
          <path
            d="M18 120 C18 94 38 84 68 82 L134 80 C164 80 184 92 184 116 C184 138 162 146 122 148 L68 148 C36 148 18 142 18 120Z"
            className="fill-twine stroke-fawn"
            strokeWidth="3"
          />
          <path d="M34 100 C60 90 100 92 130 90" className="fill-none stroke-cream/50" strokeWidth="5" />
          <circle cx="62" cy="116" r="5" className="fill-fawn/40" />
          <circle cx="98" cy="108" r="4" className="fill-fawn/40" />
          <circle cx="130" cy="122" r="6" className="fill-fawn/40" />
          <circle cx="150" cy="104" r="3.5" className="fill-fawn/40" />
          <circle cx="84" cy="130" r="3.5" className="fill-fawn/40" />
        </g>
      );
  }
}
