import { useId } from "react";

type TextareaProps = {
  label: string;
  value: string;
  error?: string;
  rows?: number;
  onChange: (value: string) => void;
};

export function Textarea({ label, value, error, rows = 4, onChange }: TextareaProps) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-oat">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-xl border-2 border-crumb bg-espresso/40 px-4 py-3 text-oat transition duration-200 focus-visible:border-amber focus-visible:outline-none aria-invalid:border-damask placeholder:text-mist/70"
      />
      <p id={errorId} aria-live="polite" className="mt-1 min-h-5 text-sm text-damask">
        {error}
      </p>
    </div>
  );
}
