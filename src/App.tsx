import { useContactForm } from "./hooks/useContactForm";

export default function App() {
  const { values, errors, status, hp, setHp, handleChange, handleSubmit } = useContactForm();
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 bg-cream/90 backdrop-blur border-b border-sand">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-serif text-xl text-fawn">The Neighborhood Loaf</span>
          <div className="flex gap-4 text-sm">
            <a href="#breads" className="hover:text-damask">Breads</a>
            <a href="#why-us" className="hover:text-damask">Why us</a>
            <a href="#contact" className="hover:text-damask">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-4xl text-fawn">Bread baked before the sun wakes up</h1>
          <p className="mt-4 max-w-xl">Warm loaves, slow fermentation, simple ingredients.</p>
          <a href="#breads" className="inline-block mt-6 bg-fawn text-cream px-6 py-3 rounded-full">See our breads</a>
        </section>
        <section id="breads" className="bg-sand py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-fawn">Breads</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
              {["Sourdough", "Rye", "Baguette", "Whole grain", "Ciabatta"].map((n) => (
                <div key={n} className="bg-cream rounded-2xl p-4 shadow">
                  <div className="aspect-square bg-twine/20 rounded-xl" />
                  <p className="mt-2 font-serif text-fawn">{n}</p>
                  <p className="text-sm">$8</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="why-us" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-fawn">Bread the way it should be</h2>
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              {["Natural ingredients", "Baked daily", "No preservatives", "Made with love"].map((t) => (
                <div key={t} className="bg-sand rounded-2xl p-4">
                  <h3 className="font-serif text-fawn">{t}</h3>
                  <p className="text-sm mt-1">Placeholder text.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="bg-sand py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-fawn">Contact us</h2>
            <form className="mt-6 max-w-md space-y-3" onSubmit={handleSubmit}>
              <input type="text" name="firstName" value={values.firstName} onChange={(e) => handleChange("firstName", e.target.value)} className="w-full p-2 rounded border border-twine" placeholder="First name" />
              {errors.firstName && <p className="text-damask text-sm">{errors.firstName}</p>}
              <input type="text" name="lastName" value={values.lastName} onChange={(e) => handleChange("lastName", e.target.value)} className="w-full p-2 rounded border border-twine" placeholder="Last name" />
              {errors.lastName && <p className="text-damask text-sm">{errors.lastName}</p>}
              <input type="email" name="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full p-2 rounded border border-twine" placeholder="Email" />
              {errors.email && <p className="text-damask text-sm">{errors.email}</p>}
              <textarea name="message" value={values.message} onChange={(e) => handleChange("message", e.target.value)} className="w-full p-2 rounded border border-twine" placeholder="Message" />
              {errors.message && <p className="text-damask text-sm">{errors.message}</p>}
              <input type="text" name="_gotcha" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={values.acceptTerms} onChange={(e) => handleChange("acceptTerms", e.target.checked)} />
                Accept the terms
              </label>
              {errors.acceptTerms && <p className="text-damask text-sm">{errors.acceptTerms}</p>}
              <button disabled={status === "sending"} className="bg-fawn text-cream px-6 py-3 rounded-full disabled:opacity-50">
                {status === "sending" ? "Sending..." : "Send"}
              </button>
              {status === "success" && <p className="text-fawn text-sm">Thank you! We got your message and will reply soon.</p>}
              {status === "error" && <p className="text-damask text-sm">Something went wrong. Please try again or call us.</p>}
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-ink text-cream py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>The Neighborhood Loaf</p>
          <p className="text-sm">Level 1, 12 Sample St, Sydney NSW 2000</p>
        </div>
      </footer>
    </div>
  );
}
