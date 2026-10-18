# rules.md: Rules for Building the Bakery Site

Follow these rules for every change. If a rule conflicts with `plan.md` or `source.md`, ask before breaking it.

## Stack

React + TypeScript (strict) + Vite + Tailwind CSS + lucide-react. Do not add other libraries without asking.

## General

1. Read `source.md` for design and content. **All copy in it is placeholder** and will be replaced later.
2. Never hard-code text in components. Every string, price, name, link, and image path lives in `src/data/content.ts` and reaches components through typed props.
3. Never invent extra copy, prices, addresses, or reviews. If something is missing, ask or use a clearly marked placeholder.
4. Follow the order in `plan.md`. Finish one section before starting the next.
5. Keep it one page. No router.
6. Do not add features that were not asked for (no cart, no login, no blog, no state library).
7. Keep code simple. Small components, clear names, comments only where needed.
8. Use `reference/design-reference.png` for look and feel only. Never copy its text or photos.

## TypeScript

1. Strict mode on. No `any`.
2. Shared types in `src/types/index.ts`. Props get their own `type` (for example `type BreadCardProps`).
3. Prefer `type` over `interface` unless extending.
4. Type event handlers and form values explicitly.
5. `tsc --noEmit` must pass before finishing a task.

## React

1. Function components only, named exports (default export only for `App`).
2. One component per file, file name matches component name.
3. Keep logic out of JSX. Put form logic and repeated logic in hooks (`src/hooks`).
4. Use stable `key` values (ids), never array index.
5. Use `useId` to link labels and inputs.
6. Avoid unnecessary `useEffect`.
7. Environment values come from `import.meta.env.VITE_*`.

## Visual style: the look and feel

The site is a **quiet, moody, candle-lit bakery**. When unsure, choose calmer, darker, warmer, and with more space.

### Background
1. The page uses one fixed gradient (latte to roast to bark to rust) with a very faint grid overlay, defined once in `index.css`. Do not give sections their own solid backgrounds. Let the gradient show through.
2. Keep the grid faint (about 3 to 4 percent white). It should be felt, not seen.

### Glass cards
1. Every card, panel, form, and the navbar uses the shared `glass` utility through `GlassCard`. Do not restyle glass per component.
2. Glass = translucent dark brown fill, thin warm border, `backdrop-blur`, soft shadow.
3. Corner radius: `rounded-2xl` to `rounded-3xl` for cards, `rounded-full` for pills and buttons.
4. Do not nest glass inside glass more than one level. Use a slightly darker plain fill for inner areas such as caption areas on image cards.
5. Use generous padding (`p-6` to `p-8` on cards).

### Navbar
1. A floating pill with glass style, centered, with margin from the top edge, sticky.
2. Layout: logo left, links center, accent button right.
3. The active link sits in a darker pill. Other links are muted and brighten on hover.
4. On mobile, collapse to a menu button that opens a glass panel.

### Typography
1. Headings use `font-serif`, body uses `font-sans`. No other families.
2. **Accent word:** in hero and major section headlines, one word may be wrapped in `text-amber`. Maximum one accent word per headline.
3. **Eyebrows:** small, uppercase, `tracking-widest`, muted color, `text-xs`. Used above headings and inside small cards. Always through the `Eyebrow` component.
4. Headline sizes scale with screen (`text-4xl` on mobile up to `text-6xl` or `text-7xl` in the hero). Tight line height.
5. Body text on dark: `text-oat`. Secondary text: `text-mist`.

### Color
1. Use only the theme tokens from `source.md`. No arbitrary hex values in components.
2. Never use pure `black`, pure `white`, or any `gray`, `slate`, or `zinc` utilities. Everything is warm brown, oat, or amber.
3. `amber` is for the accent word, active states, focus rings, and small highlights, not large areas.
4. Buttons are pills:
   - Primary: `wine` fill, `oat` text
   - Secondary: `olive-brown` fill, `oat` text
   - Accent (nav): `caramel` fill, `oat` text
   - Hover: lighten slightly or shift toward `amber`
5. Do not use blue, green, or any cool color anywhere, including focus rings and links.

### Images
1. Photos sit inside rounded frames. The hero photo gets a thick glass frame (padding inside a glass card).
2. A `FloatingBadge` (small glass chip with a tiny label and a serif line) may overlap a photo corner in the hero.
3. Image cards: photo on top, caption area below with a darker fill, serif title, muted text.
4. Same aspect ratio within a group. Warm, moody photography only.
5. Add a subtle warm overlay (`bg-gradient-to-t from-espresso/30`) if a photo is too bright or cool.

### Motion
1. Gentle only: fade and small upward slide on scroll, small lift on hover, `duration-200` to `duration-300`.
2. Respect `motion-reduce:`.
3. No parallax, no bouncing, no flashy effects.

## Contrast and readability (important for glass on gradient)

1. Body text must meet WCAG AA (4.5:1) against the card, not just against the page. Check the muted `mist` text especially.
2. Minimum text size is `text-sm` for readable content. `text-xs` is only for eyebrows.
3. Never place text directly on the bare gradient where the light tan area makes it hard to read. Put it on a glass card, or use `espresso` text there.
4. If a glass card sits over a light part of the gradient, increase its fill opacity.

## Layout and responsiveness

1. Mobile first. Test at 375px, 768px, 1024px, 1440px.
2. Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
3. Hero: two columns on desktop, stacked on mobile (text card first, photo second).
4. Highlights: 3 columns on desktop, stacked on mobile.
5. Feature cards: 2 columns on desktop, stacked on mobile.
6. No horizontal page scroll. Only the bread carousel scrolls sideways (`snap-x snap-mandatory`) with keyboard-accessible arrows.
7. Consistent vertical rhythm between sections (`py-16` to `py-24`).

## Content

1. Voice: friendly, simple, a little poetic. Short sentences.
2. Mark every placeholder block in `content.ts` with `// TODO: replace with real content`.
3. No lorem ipsum.
4. Buttons say what they do. No two adjacent buttons with the same label.
5. At the end of each work session, list what is still placeholder.

## Form

1. Required: first name, last name, email, message, terms checkbox.
2. Logic in `useContactForm`, which returns values, errors, status (`idle | sending | success | error`), and handlers.
3. Client-side validation with clear inline messages.
4. Submit with `fetch` to `import.meta.env.VITE_FORM_ENDPOINT`. No page reload.
5. Hidden honeypot field for spam.
6. Disable the submit button while sending.
7. On success: friendly message and reset. On error: friendly message and keep the input.
8. Every input has a visible `<label>`.
9. Style: darker translucent input fill, thin warm border, `amber` focus ring (`focus-visible:`), glass card around the form.
10. Never log or store personal data in the browser.

## Accessibility

1. Semantic HTML: `header`, `nav`, `main`, `section`, `footer`, one `h1`, headings in order.
2. Every image has meaningful `alt`. Decorative images use `alt=""`.
3. Everything interactive works by keyboard with a visible focus style.
4. Buttons are `<button>`, links are `<a>`.
5. Icon-only buttons have `aria-label`.
6. Form errors use `aria-live="polite"` and `aria-describedby`.
7. Mobile menu closes on Escape and returns focus to the menu button.

## Performance

1. `backdrop-blur` is expensive. Use it on cards and the navbar, but keep blur values modest (`blur(10px)`), avoid it on large full-screen layers, and test on a real phone. If scrolling stutters, reduce blur or use a more opaque fill.
2. Images: WebP or AVIF, compressed, `width` and `height` set. Hero loads eagerly, everything else `loading="lazy"`.
3. Load only the font weights that are used, with `display=swap`.
4. Import only the lucide icons that are used.
5. Target Lighthouse 90+ on all four scores.

## SEO and meta

1. Unique `<title>` and meta description.
2. Open Graph tags and image.
3. `LocalBusiness` JSON-LD with real details once they exist.
4. Favicon, `lang="en"`, and `theme-color` set to a dark brown.

## Code quality

1. No `console.log` in finished code.
2. No unused imports, variables, or files. ESLint must pass.
3. Do not rewrite working sections when editing another one.
4. Reuse components. If a class string repeats three times, extract a component.
5. Keep Tailwind classes readable. Order: layout, spacing, typography, color, effects, responsive.
6. After each task, say what changed and what is still placeholder.

## Do not

- Do not use cool, grey, black, or blue colors.
- Do not use solid white or light cream sections. This is a dark, warm theme.
- Do not add UI libraries (MUI, Chakra, shadcn) or animation libraries unless asked.
- Do not add cookie banners, popups, or autoplay media.
- Do not hard-code secrets or API keys.
- Do not copy text or images from the reference design.
- Do not treat placeholder text as final.
