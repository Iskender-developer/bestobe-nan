import { useEffect, useRef, useState } from "react";
import type { ContactFormValues } from "../types";

type Status = "idle" | "sending" | "success" | "error" | "timeout";

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
  const COOLDOWN_MS = 60_000; // 1 minute between submissions
  const lastSubmitRef = useRef<number>(0);
  const [rateLimited, setRateLimited] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);
  const TIMEOUT_MS = 20_000; // 20 seconds

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (abortControllerRef.current !== null) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
    };
  }, []);

  function clearPendingRequest() {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    abortControllerRef.current = null;
  }

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
    if (hp) {
      // Honeypot filled: likely a bot. Silently block.
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < COOLDOWN_MS) {
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), COOLDOWN_MS - (now - lastSubmitRef.current));
      return;
    }
    lastSubmitRef.current = now;
    clearPendingRequest();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, TIMEOUT_MS);
    timeoutRef.current = timeoutId;

    setStatus("sending");
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
        signal: controller.signal,
      });
      clearPendingRequest();
      if (!mountedRef.current) return;
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      setValues(initial);
    } catch (err) {
      if (!mountedRef.current) return;
      clearPendingRequest();
      if (err instanceof DOMException && err.name === "AbortError") {
        setStatus("timeout");
      } else {
        setStatus("error");
      }
    }
  }

  return { values, errors, status, hp, rateLimited, setHp, handleChange, handleSubmit };
}