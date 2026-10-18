import { footer } from "../../data/content";

const linkHref: Record<string, string> = {
  "Our breads": "#breads",
  "Why us": "#why-us",
  "Contact": "#contact",
  "Order bread": "#contact",
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-serif text-xl">{footer.brand}</p>
          <p className="mt-2 text-sm text-cream/80">{footer.address}</p>
          <p className="text-sm text-cream/80">{footer.phone}</p>
          <p className="text-sm text-cream/80">{footer.email}</p>
        </div>
        <div>
          <p className="font-medium mb-2">Explore</p>
          <ul className="space-y-1 text-sm text-cream/80">
            {footer.links1.map((l) => (
              <li key={l}>
                <a href={linkHref[l] || "#"} className="hover:text-cream">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Help</p>
          <ul className="space-y-1 text-sm text-cream/80">
            {footer.links2.map((l) => (
              <li key={l}>
                <a href={linkHref[l] || "#"} className="hover:text-cream">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-cream/20 text-xs text-cream/60">
        {footer.bottom}
      </div>
    </footer>
  );
}
