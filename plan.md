# plan.md: Bakery One-Page Website

Build plan for a cozy, one-page bakery site. Read `source.md` for content and design values and `rules.md` for constraints before starting.

> **Important:** All text in this project (headlines, descriptions, prices, names, reviews, address, phone, email) is **placeholder** taken from the Relume design. It will be replaced later. Build so that changing copy is easy: all text lives in one file, `src/data/content.ts`, and never inside components.

## Goal

A fast, responsive, single-page site for a neighborhood bread bakery. The feeling is warm, handmade, and welcoming. The main conversion is the contact/order form.

## Stack

- **React 18+** with **TypeScript** (strict mode)
- **Vite** as the build tool
- **Tailwind CSS** for all styling
- **lucide-react** for icons
- Form: Formspree (or Getform) via `fetch`, no backend
- Deploy: Netlify, Vercel, or Cloudflare Pages

## Page structure (top to bottom)

1. Navbar (sticky)
2. Hero
3. Breads (horizontal carousel)
4. Why us (4 cards)
5. Testimonials ("Kind words")
6. Contact form + image
7. Footer

Section IDs for anchor links: `about`, `breads`, `why-us`, `visit`, `contact`. See "Open decisions" for About and Visit.

## Project structure

```
src/
  main.tsx
  App.tsx
  index.css                 (Tailwind import and theme tokens)
  data/
    content.ts              (ALL placeholder copy lives here)
  types/
    index.ts                (shared types: Bread, Feature, Testimonial, etc.)
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Breads.tsx
      WhyUs.tsx
      Testimonials.tsx
      Contact.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      BreadCard.tsx
      FeatureCard.tsx
      TestimonialCard.tsx
      Input.tsx
      Textarea.tsx
  hooks/
    useContactForm.ts
  assets/
    images/
```

## Phases

### Phase 1: Setup
- [ ] Create the project: `npm create vite@latest bakery -- --template react-ts`
- [ ] Install and configure Tailwind CSS
- [ ] Add color tokens, fonts, radius, and shadows to the Tailwind theme (values in `source.md`)
- [ ] Add Google Fonts (Playfair Display and DM Sans)
- [ ] Create `types/index.ts` and `data/content.ts` with all placeholder copy
- [ ] Turn on TypeScript strict mode and set up ESLint

### Phase 2: UI components
- [ ] `Button` (primary, secondary, link variants)
- [ ] `SectionHeading` (label, title, text)
- [ ] `BreadCard`, `FeatureCard`, `TestimonialCard`
- [ ] `Input` and `Textarea` with label and error state

### Phase 3: Sections
- [ ] Navbar: logo, links, Order button, mobile menu (keyboard accessible)
- [ ] Hero: headline, text, two buttons, large image
- [ ] Breads: cards in a scroll-snap carousel with prev/next buttons and "View all" button
- [ ] WhyUs: 4 feature cards with icons
- [ ] Testimonials: 3 cards with stars, quote, name, role
- [ ] Contact: form on the left, image on the right
- [ ] Footer: logo, address, contact, socials, link columns, legal row
- [ ] Assemble everything in `App.tsx`

### Phase 4: Form
- [ ] Build `useContactForm` hook (state, validation, submit, status)
- [ ] Send to the Formspree endpoint (URL from `VITE_FORM_ENDPOINT` env variable)
- [ ] Inline validation: required fields, email format, terms checkbox
- [ ] Success and error messages without page reload
- [ ] Honeypot field for spam
- [ ] Test with a real submission

### Phase 5: Polish
- [ ] Replace placeholder images with real photos (compressed, WebP)
- [ ] Gentle hover states and scroll reveal (Tailwind transitions)
- [ ] Responsive pass: 375px, 768px, 1024px, 1440px
- [ ] Accessibility pass (see `rules.md`)
- [ ] Meta tags, Open Graph image, favicon, JSON-LD

### Phase 6: Launch
- [ ] Run `npm run build` and `tsc --noEmit` with no errors
- [ ] Lighthouse check (target 90+ on all four scores)
- [ ] Deploy and test the form on the live URL
- [ ] **Replace all placeholder copy** in `content.ts` with the real bakery text
- [ ] Connect custom domain (if any)

## Open decisions (resolve before or during the build)

| Question | Notes |
|---|---|
| Real copy | Everything is placeholder for now. Replace later in `content.ts`. |
| Final color palette | Design is still dark grey. Use the warm palette in `source.md` unless changed. |
| About section | Nav links to "About" but the design has no About section. Add one or remove the link. |
| Visit section | Nav has "Visit" with a dropdown, but there is no section. Make it a section with hours and map, or link to the footer. |
| Duplicate buttons | Hero has two "See our breads" buttons, and the nav has "Order" and "Bread". Fix the labels. |
| Form fields | Design has first name, last name, email, message. For real orders, consider adding phone, bread type, quantity, pickup date. |
| Elements to remove | List anything cut from the design here: |

## Definition of done

- All sections render correctly on mobile and desktop
- No TypeScript errors, no `any`, no console errors
- Form sends a real email and shows a success message
- All copy comes from `content.ts` and is replaced with real text
- No placeholder images remain
- Lighthouse 90+
