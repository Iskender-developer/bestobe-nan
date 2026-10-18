import { useState } from "react";
import type { ContactFormValues } from "../types";

type Status = "idle" | "sending" | "success" | "error";

const initial: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  acceptTerms: false,
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [hp, setHp] = useState("");

  function validate(v: ContactFormValues) {
    const e: Partial<Record<keyof ContactFormValues, string>> = {};
    if (!v.firstName.trim()) e.firstName = "Required";
    if (!v.lastName.trim()) e.lastName = "Required";
    if (!v.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Invalid email";
    if (!v.message.trim()) e.message = "Required";
    if (!v.acceptTerms) e.acceptTerms = "Required";
    return e;
  }

  function handleChange(field: keyof ContactFormValues, value: string | boolean) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const e2 = validate(values);
    setErrors(e2);
    if (Object.keys(e2).length) return;
    if (hp) return;
    setStatus("sending");
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  return { values, errors, status, hp, setHp, handleChange, handleSubmit };
}