import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  label?: string;
  title: string;
  accentWord?: string;
  text?: string;
};

export function SectionHeading({ label, title, accentWord, text }: SectionHeadingProps) {
  const isSerif = "font-serif";
  const parts = accentWord ? title.split(accentWord) : null;

  return (
    <div className="max-w-xl">
      {label && <Eyebrow>{label}</Eyebrow>}
      <h2 className={`${isSerif} text-4xl font-semibold leading-tight md:text-5xl text-oat`}>
        {parts
          ? parts.flatMap((part, i) => [
              <span key={`p-${i}`}>{part}</span>,
              i < parts.length - 1 && <span key={`a-${i}`} className="text-amber">
                {accentWord}
              </span>,
            ])
          : title}
      </h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-mist">{text}</p>}
    </div>
  );
}
