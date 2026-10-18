import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, navLinks } from "../../data/content";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const focusable = "a[href], button:not([disabled])";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !headerRef.current) return;
      const items = Array.from(headerRef.current.querySelectorAll<HTMLElement>(focusable));
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass =
    "text-mist/80 transition duration-200 hover:text-oat focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";

  return (
    <header ref={headerRef} className="sticky top-6 z-20 mx-auto">
      <div className="glass rounded-full px-4 py-2.5 mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <Container>
          <nav aria-label={nav.mainNavigation} className="flex h-10 items-center justify-between gap-4">
            <a
              href="#home"
              className="font-serif text-xl font-semibold text-oat focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              {nav.brand}
            </a>

            <div className="hidden items-center gap-6 text-sm font-medium md:flex">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button variant="accent" href="#contact">
                {nav.cta}
              </Button>
              <button
                ref={toggleRef}
                type="button"
                aria-label={open ? nav.closeMenu : nav.openMenu}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-oat transition duration-200 hover:bg-amber/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber md:hidden"
              >
                {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {open && (
        <div className="glass rounded-3xl p-4 mt-4 mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 md:hidden">
          <Container className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-crumb py-3 font-serif text-xl text-oat last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {l.label}
              </a>
            ))}
            <Button href="#contact" onClick={() => setOpen(false)} variant="accent">
              {nav.cta}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
