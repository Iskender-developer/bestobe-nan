import { footer } from "../../data/content";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";

const linkHref: Record<string, string> = {
  "Our breads": "#breads",
  "Why us": "#why-us",
  Contact: "#contact",
  "Order bread": "#contact",
};

type LinkColumnProps = { heading: string; links: string[] };

function LinkColumn({ heading, links }: LinkColumnProps) {
  return (
    <div>
      <h2 className="font-serif text-lg font-semibold text-amber">{heading}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href={linkHref[l] ?? "#"} className="text-mist/80 transition duration-200 hover:text-oat focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-20">
      <GlassCard className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 p-8 md:p-12">
        <Container>
          <p className="font-serif text-4xl font-semibold leading-tight text-oat md:text-6xl">{footer.brand}</p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1 text-sm text-mist/80">
              <h2 className="mb-4 font-serif text-lg font-semibold text-amber">{footer.hoursHeading}</h2>
              {footer.hours.map((h) => (
                <p key={h.day}>
                  <span className="text-oat">{h.day}</span>
                  <span className="block">{h.time}</span>
                </p>
              ))}
              <address className="pt-4 not-italic">
                <p>{footer.address}</p>
                <p>{footer.phone}</p>
                <p>
                  <a href={`mailto:${footer.email}`} className="underline decoration-amber/50 underline-offset-4 hover:text-oat">
                    {footer.email}
                  </a>
                </p>
              </address>
            </div>
            <LinkColumn heading={footer.exploreHeading} links={footer.links1} />
            <LinkColumn heading={footer.helpHeading} links={footer.links2} />
          </div>

          <p className="mt-14 border-t border-crumb/40 pt-6 text-xs text-mist/70">{footer.bottom}</p>
        </Container>
      </GlassCard>
    </footer>
  );
}
