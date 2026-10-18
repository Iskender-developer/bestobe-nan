type EyebrowProps = { children: string; className?: string };

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`text-xs uppercase tracking-widest text-mist mb-3 ${className}`}>{children}</p>
  );
}
