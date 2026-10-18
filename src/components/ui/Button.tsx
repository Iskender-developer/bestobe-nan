import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "link";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber motion-reduce:transition-none";
  const styles: Record<string, string> = {
    primary: "bg-wine text-oat hover:bg-amber hover:text-espresso",
    secondary: "bg-olive-brown text-oat hover:bg-amber hover:text-espresso",
    accent: "bg-caramel text-oat hover:bg-amber hover:text-espresso",
    link: "text-amber underline decoration-twine/50 underline-offset-4 hover:text-oat",
  };
  const style = styles[variant];
  if (href) {
    return (
      <a href={href} className={`${base} ${style}`}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${style} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
