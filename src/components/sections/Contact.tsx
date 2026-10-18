import { useId } from "react";
import { contact } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { useContactForm } from "../../hooks/useContactForm";

export function Contact() {
  const { values, errors, status, hp, rateLimited, setHp, handleChange, handleSubmit } = useContactForm();

  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const messageId = useId();
  const acceptTermsId = useId();

  return (
    <section id="contact" className="py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionHeading label={contact.label} title={contact.heading} text={contact.text} />
          <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor={firstNameId} className="block text-sm font-medium text-ink mb-1">
                First name
              </label>
              <input
                id={firstNameId}
                type="text"
                value={values.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full p-3 rounded-xl border border-twine bg-cream"
                placeholder="First name"
                aria-describedby={errors.firstName ? `${firstNameId}-error` : undefined}
              />
              {errors.firstName && (
                <p id={`${firstNameId}-error`} className="text-damask text-sm mt-1" aria-live="polite">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={lastNameId} className="block text-sm font-medium text-ink mb-1">
                Last name
              </label>
              <input
                id={lastNameId}
                type="text"
                value={values.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full p-3 rounded-xl border border-twine bg-cream"
                placeholder="Last name"
                aria-describedby={errors.lastName ? `${lastNameId}-error` : undefined}
              />
              {errors.lastName && (
                <p id={`${lastNameId}-error`} className="text-damask text-sm mt-1" aria-live="polite">
                  {errors.lastName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={emailId} className="block text-sm font-medium text-ink mb-1">
                Email
              </label>
              <input
                id={emailId}
                type="email"
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full p-3 rounded-xl border border-twine bg-cream"
                placeholder="Email"
                aria-describedby={errors.email ? `${emailId}-error` : undefined}
              />
              {errors.email && (
                <p id={`${emailId}-error`} className="text-damask text-sm mt-1" aria-live="polite">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={messageId} className="block text-sm font-medium text-ink mb-1">
                Message
              </label>
              <textarea
                id={messageId}
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full p-3 rounded-xl border border-twine bg-cream"
                placeholder="Message"
                rows={4}
                aria-describedby={errors.message ? `${messageId}-error` : undefined}
              />
              {errors.message && (
                <p id={`${messageId}-error`} className="text-damask text-sm mt-1" aria-live="polite">
                  {errors.message}
                </p>
              )}
            </div>
            <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
            <label className="flex items-center gap-2 text-sm">
              <input id={acceptTermsId} type="checkbox" checked={values.acceptTerms} onChange={(e) => handleChange("acceptTerms", e.target.checked)} />
              Accept the terms
            </label>
            {errors.acceptTerms && <p className="text-damask text-sm" aria-live="polite">{errors.acceptTerms}</p>}
            {rateLimited && (
              <p className="text-damask text-sm">You've submitted recently. Please wait before sending again.</p>
            )}
            <button disabled={status === "sending" || rateLimited} className="bg-fawn text-cream px-6 py-3 rounded-full disabled:opacity-50">
              {status === "sending" ? "Sending..." : contact.submit}
            </button>
            {status === "success" && <p className="text-fawn text-sm">{contact.success}</p>}
            {status === "error" && <p className="text-damask text-sm">{contact.error}</p>}
            <p className="mt-3 text-xs text-ink/60">
              Your message is sent directly to us via Formspree. We only use your details to reply.
            </p>
          </form>
        </div>
         <div className="aspect-[4/3] md:aspect-auto md:h-full bg-sand rounded-2xl overflow-hidden flex items-center justify-center">
          {contact.image ? (
            <img src={contact.image} alt={contact.alt} className="w-full h-full object-cover" />
          ) : (
            <span className="text-twine text-6xl">🏠</span>
          )}
        </div>
      </div>
    </section>
  );
}
