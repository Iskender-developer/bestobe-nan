import { useRef } from "react";
import { breads } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { BreadCard } from "../ui/BreadCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Breads() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };
  return (
    <section id="breads" className="bg-sand py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label={breads.label} title={breads.heading} text={breads.text} />
        <div className="mt-8 relative">
          <div
            ref={scroller}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {breads.items.map((b) => <BreadCard key={b.id} bread={b} />)}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              aria-label="Previous breads"
              onClick={() => scroll(-1)}
              className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-cream text-fawn shadow hover:bg-damask hover:text-cream transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fawn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next breads"
              onClick={() => scroll(1)}
              className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-cream text-fawn shadow hover:bg-damask hover:text-cream transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fawn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="mt-6">
          <button className="text-fawn underline hover:text-damask">{breads.viewAll}</button>
        </div>
      </div>
    </section>
  );
}
