import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { breads } from "../../data/content";
import { BreadCard } from "../ui/BreadCard";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const arrow =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber text-amber transition duration-200 hover:bg-amber hover:text-espresso focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber motion-reduce:transition-none";

export function Breads() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section id="breads" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label={breads.label} title={breads.heading} text={breads.text} />
          <div className="flex gap-3">
            <button type="button" aria-label={breads.previous} onClick={() => scroll(-1)} className={arrow}>
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" aria-label={breads.next} onClick={() => scroll(1)} className={arrow}>
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {breads.items.map((b) => (
            <BreadCard key={b.id} bread={b} />
          ))}
        </div>

        <div className="mt-10">
          <Button variant="link" href="#contact">
            {breads.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
