type FloatingBadgeProps = { label: string; text: string; className?: string };

export function FloatingBadge({ label, text, className = "" }: FloatingBadgeProps) {
  return (
    <div className={`glass rounded-xl p-3 flex items-center gap-2 shrink-0 ${className}`}>
      <span className="text-xs uppercase tracking-widest text-amber">{label}</span>
      <span className="text-xs font-medium text-oat">{text}</span>
    </div>
  );
}
