# The Neighborhood Loaf

A cozy, one-page bakery website built with React, TypeScript, Vite, and Tailwind CSS. The main conversion is the contact/order form, which submits to Formspree.

## Stack

- React 19 + TypeScript (strict)
- Vite
- Tailwind CSS v4
- lucide-react
- Formspree (contact form, no backend)

## Project structure

```
src/
  main.tsx
  App.tsx
  index.css           (Tailwind import and theme tokens)
  data/
    content.ts        (ALL copy lives here)
  types/
    index.ts          (shared types)
  components/
    layout/           Navbar, Footer
    sections/         Hero, Breads, WhyUs, Testimonials, Contact, About, Visit
    ui/               Button, SectionHeading, BreadCard, FeatureCard, TestimonialCard
  hooks/
    useContactForm.ts
  assets/
    images/
```

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # typecheck + production build
npm run lint       # oxlint
npm run preview    # preview production build
```

## Content

All placeholder copy lives in `src/data/content.ts` and is marked with `// TODO: replace with real content`. Do not hard-code text in components.

## Rules

See `rules.md` for stack, TypeScript, React, Tailwind, accessibility, performance, and SEO rules. See `plan.md` for the build plan and definition of done.

## License

Private project.
