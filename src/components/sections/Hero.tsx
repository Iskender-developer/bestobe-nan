import { hero } from "../../data/content";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="font-serif text-4xl md:text-6xl text-fawn">{hero.headline}</h1>
        <p className="mt-4 text-lg text-ink/80">{hero.text}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#breads">{hero.primaryButton}</Button>
          <Button variant="secondary" href="#contact">{hero.secondaryButton}</Button>
        </div>
      </div>
      <div className="aspect-[4/3] bg-sand rounded-2xl flex items-center justify-center text-twine text-6xl">🍞</div>
    </section>
  );
}
