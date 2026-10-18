import { navLinks } from "../../data/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-cream/90 backdrop-blur border-b border-sand">
      <nav className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl text-fawn">The Neighborhood Loaf</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-ink hover:text-damask">{l.label}</a>
          ))}
        </div>
        <a href="#contact" className="bg-fawn text-cream px-5 py-2 rounded-full text-sm hover:bg-damask">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
