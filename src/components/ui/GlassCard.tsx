import type { ReactNode } from "react";

type GlassCardProps = { children: ReactNode; className?: string };

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return <div className={`glass rounded-3xl p-6 ${className}`}>{children}</div>;
}
