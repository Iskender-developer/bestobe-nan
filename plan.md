# plan.md: Bakery One-Page Website

Build plan for a cozy, one-page bakery site. Read `source.md` for design and content and `rules.md` for constraints before starting.

> **Important:** All text in this project (headlines, descriptions, prices, names, reviews, address, phone, email, bakery name) is **placeholder**. It comes from the Relume wireframe and from a reference design, and it will be replaced later. All text lives in `src/data/content.ts`, never inside components.

## Look and feel

The visual direction comes from a reference screenshot of a cafe site (saved in the repo as `reference/design-reference.png`). Use it for **look and feel only**. Do not copy its text or images.

In one line: **a quiet, moody, candle-lit bakery.** Warm brown gradient background with a faint grid texture, frosted-glass cards, a floating pill navbar, elegant serif headlines with one glowing amber word, and warm photography.

Key traits to reproduce:
- Full-page brown gradient (light tan top-left, deep roast brown through the middle, reddish brown at the bottom)
- Frosted-glass cards: translucent dark brown, thin warm border, soft blur, rounded corners
- Floating pill navbar with glass effect, active link as a darker pill, small accent button on the right
- Hero as a split: text card on the left, framed photo on the right with a small floating badge overlapping the photo corner
- Small uppercase "eyebrow" labels with letter spacing above headings
- Headlines in a high-contrast serif, with one word in amber
- Compact info cards in a row of three
- Image cards with the photo on top and a caption area below
- Lots of breathing room, calm and quiet

## Goal

A fast, responsive, single-page site for a neighborhood bread bakery. The main conversion is the contact/order form.

## Stack

- **React 18+** with **TypeScript** (strict mode)
- **Vite**
- **Tailwind CSS**
- **lucide-react** for icons
- Form: Formspree (or similar) via `fetch`, endpoint in `VITE_FORM_ENDPOINT`
- Deploy: Netlify, Vercel, or Cloudflare Pages

## Page structure (top to bottom)

1. Floating navbar (glass pill, sticky)
2. Hero (split: text card + photo with floating badge)
3. Highlights (row of 3 small glass cards)
4. Feature cards (2 large image cards side by side)
5. Breads (horizontal carousel of bread cards)
6. Why us (4 glass cards)
7. Testimonials ("Kind words")
8. Contact (glass form card + photo)
9. Footer (glass panel)

Section IDs: `home`, `breads`, `about`, `visit`, `contact`. See "Open decisions".

## Project structure

```
reference/
  design-reference.png
src/
  main.tsx
  App.tsx
  index.css                 (Tailwind import, theme tokens, background, glass utility)
  data/
    content.ts              (ALL placeholder copy)
  types/
    index.ts
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Highlights.tsx
      Features.tsx
      Breads.tsx
      WhyUs.tsx
      Testimonials.tsx
      Contact.tsx
    ui/
      GlassCard.tsx
      Button.tsx
      Eyebrow.tsx
      SectionHeading.tsx
      FloatingBadge.tsx
      BreadCard.tsx
      TestimonialCard.tsx
      Input.tsx
      Textarea.tsx
  hooks/
    useContactForm.ts
  assets/
    images/
```

## Phases

### Phase 1: Setup and theme
- [ ] Create the project: `npm create vite@latest bakery -- --template react-ts`
- [ ] Install and configure Tailwind CSS
- [ ] Add color tokens, fonts, radius, shadows to the theme (values in `source.md`)
- [ ] Add the page background: gradient plus faint grid overlay
- [ ] Create the `glass` utility (translucent bg, border, blur)
- [ ] Add Google Fonts (serif for headings, Inter for body)
- [ ] Create `types/index.ts` and `data/content.ts`
- [ ] Turn on strict TypeScript and ESLint
- [ ] Save the reference screenshot in `reference/`

### Phase 2: UI components
- [ ] `GlassCard` (the base for every card and panel)
- [ ] `Button` (primary, secondary, accent pill variants)
- [ ] `Eyebrow` (small uppercase label)
- [ ] `SectionHeading` (eyebrow, title with optional accent word, text)
- [ ] `FloatingBadge` (small glass chip that overlaps a photo corner)
- [ ] `BreadCard`, `TestimonialCard`
- [ ] `Input` and `Textarea` in the glass style

### Phase 3: Sections
- [ ] Navbar: glass pill, logo, links, active state, accent Order button, mobile menu
- [ ] Hero: text card (eyebrow, headline with amber word, text, two buttons) and framed photo with floating badge
- [ ] Highlights: 3 compact glass cards (eyebrow, title, one line)
- [ ] Features: 2 image cards, photo on top, title and text below
- [ ] Breads: scroll-snap carousel with prev/next buttons and "View all"
- [ ] WhyUs: 4 glass cards with icons
- [ ] Testimonials: 3 glass cards with stars
- [ ] Contact: glass form card and photo
- [ ] Footer: glass panel with logo, contact, links, socials, legal row
- [ ] Assemble in `App.tsx`

### Phase 4: Form
- [ ] Build `useContactForm` (state, validation, submit, status)
- [ ] Send to the endpoint from `VITE_FORM_ENDPOINT`
- [ ] Inline validation and friendly success/error messages
- [ ] Honeypot field for spam
- [ ] Test with a real submission

### Phase 5: Polish
- [ ] Replace placeholder images with real, warm-toned photos
- [ ] Check text contrast on every glass card (see `rules.md`)
- [ ] Gentle hover and fade-in effects
- [ ] Responsive pass: 375px, 768px, 1024px, 1440px
- [ ] Test blur performance on a real phone
- [ ] Accessibility pass
- [ ] Meta tags, Open Graph image, favicon

### Phase 6: Launch
- [ ] `npm run build` and `tsc --noEmit` pass
- [ ] Lighthouse 90+ on all four scores
- [ ] Deploy and test the form on the live URL
- [ ] **Replace all placeholder copy** in `content.ts`

## Open decisions

| Question | Notes |
|---|---|
| Real copy | Everything is placeholder. |
| Dark theme only? | The reference is dark. The earlier cream palette is replaced. Decide if a light version is ever needed. |
| Exact colors | Palette in `source.md` is estimated from the screenshot. Pick exact values with a color picker if needed. |
| Fonts | Serif in the reference is a guess. Confirm after testing. |
| Highlights vs Why us | They overlap. Keep both, or merge into one. |
| About and Visit | Nav links to them, but no sections exist yet. Add them or link to the footer. |
| Form fields | Design has first name, last name, email, message. Consider phone, bread type, quantity, pickup date. |
| Elements to remove | List cuts here: |

## Definition of done

- Matches the reference's look and feel on mobile and desktop
- No TypeScript errors, no `any`, no console errors
- Form sends a real email and shows a success message
- All copy comes from `content.ts` and is replaced with real text
- Text is readable on every glass card (AA contrast)
- Lighthouse 90+
