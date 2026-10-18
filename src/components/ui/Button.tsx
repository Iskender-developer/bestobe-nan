import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export function Button({ children, variant = "primary", href, onClick, disabled, type = "button" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fawn motion-reduce:transition-none";
  const styles = {
    primary: "bg-fawn text-cream hover:bg-damask",
    secondary: "bg-twine text-ink hover:bg-fawn hover:text-cream",
    link: "text-fawn underline hover:text-damask px-0 py-0",
  }[variant];
  if (href) return <a href={href} className={`${base} ${styles}`}>{children}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles} disabled:opacity-50`}>{children}</button>;
}
