import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Highlights } from "./components/sections/Highlights";
import { Features } from "./components/sections/Features";
import { Breads } from "./components/sections/Breads";
import { WhyUs } from "./components/sections/WhyUs";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Highlights />
        <Features />
        <Breads />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
