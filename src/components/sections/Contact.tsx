import { contact } from "../../data/content";
import { useContactForm } from "../../hooks/useContactForm";
import { ArchScene } from "../ui/ArchScene";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { Input } from "../ui/Input";
import { SectionHeading } from "../ui/SectionHeading";
import { Textarea } from "../ui/Textarea";

export function Contact() {
  const {
    values,
    errors,
    status,
    hp,
    rateLimited,
    setHp,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <SectionHeading label={contact.label} title={contact.heading} />
        <div className="grid grid-cols-2 gap-5">
          <div>
            <GlassCard className="mt-10 p-8 md:p-10">
              <form className="mt-0" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-x-5 sm:grid-cols-2">
                  <Input
                    label={contact.fields.firstName}
                    autoComplete="given-name"
                    value={values.firstName}
                    error={errors.firstName}
                    onChange={(v) => handleChange("firstName", v)}
                  />
                  <Input
                    label={contact.fields.lastName}
                    autoComplete="family-name"
                    value={values.lastName}
                    error={errors.lastName}
                    onChange={(v) => handleChange("lastName", v)}
                  />
                </div>
                <Input
                  label={contact.fields.email}
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(v) => handleChange("email", v)}
                />
                <Textarea
                  label={contact.fields.message}
                  value={values.message}
                  error={errors.message}
                  onChange={(v) => handleChange("message", v)}
                />

                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <label className="mt-1 flex items-center gap-3 text-sm text-oat">
                  <input
                    type="checkbox"
                    checked={values.acceptTerms}
                    onChange={(e) =>
                      handleChange("acceptTerms", e.target.checked)
                    }
                    className="h-3 w-3 rounded accent-amber "
                  />
                  {contact.fields.terms}
                </label>
                <p
                  aria-live="polite"
                  className="mt-1 min-h-1 text-sm text-damask"
                >
                  {errors.acceptTerms}
                </p>

                <div className="mt-6">
                  <Button
                    type="submit"
                    disabled={status === "sending" || rateLimited}
                  >
                    {status === "sending" ? contact.sending : contact.submit}
                  </Button>
                </div>

                <div aria-live="polite" className="mt-4 text-sm">
                  {rateLimited && (
                    <p className="text-damask">{contact.rateLimited}</p>
                  )}
                  {status === "success" && (
                    <p className="rounded-xl bg-amber/10 p-4 text-amber">
                      {contact.success}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-damask">{contact.error}</p>
                  )}
                  {status === "timeout" && (
                    <p className="text-amber">{contact.timeout}</p>
                  )}
                </div>
              </form>
            </GlassCard>
          </div>

          <div className="relative">
            {contact.image ? (
              <img
                src={contact.image}
                alt={contact.alt}
                loading="lazy"
                className="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl object-cover my-auto"
              />
            ) : (
              <ArchScene
                alt={contact.alt}
                className="mx-auto aspect-[4/5] w-full max-w-md my-auto"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
