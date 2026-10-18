type SectionHeadingProps = { label?: string; title: string; text?: string };

export function SectionHeading({ label, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {label && <p className="text-sm uppercase tracking-widest text-twine mb-2">{label}</p>}
      <h2 className="font-serif text-3xl md:text-4xl text-fawn">{title}</h2>
      {text && <p className="mt-3 text-ink/80">{text}</p>}
    </div>
  );
}
