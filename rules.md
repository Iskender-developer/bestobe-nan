# rules.md: Rules for Building the Bakery Site

Follow these rules for every change. If a rule conflicts with `plan.md` or `source.md`, ask before breaking it.

## Stack

React + TypeScript (strict) + Vite + Tailwind CSS + lucide-react. Do not add other libraries without asking.

## General

1. Read `source.md` for design values and content. **All copy in it is placeholder.** It will be replaced later.
2. Never hard-code text in components. Every string, price, name, link, and image path lives in `src/data/content.ts`. Components receive data through typed props.
3. Never invent extra copy, prices, addresses, or reviews. If something is missing, ask or use a clearly marked placeholder.
4. Follow the order in `plan.md`. Finish one section before starting the next.
5. Keep it one page. No router, no extra pages.
6. Do not add features that were not asked for (no cart, no login, no blog, no state library).
7. Keep code simple and readable. Small components, clear names, comments only where needed.

## TypeScript

1. Strict mode on. No `any`. Use `unknown` and narrow if needed.
2. Define shared types in `src/types/index.ts`. Props get their own `type` (for example `type BreadCardProps`).
3. Prefer `type` over `interface` unless extending.
4. Type event handlers and form values explicitly.
5. `tsc --noEmit` must pass with no errors before finishing a task.

## React

1. Function components only, with named exports (default export only for `App`).
2. One component per file. File name matches the component name (`BreadCard.tsx`).
3. Keep logic out of JSX. Move form logic and repeated logic into hooks in `src/hooks`.
4. Use stable `key` values (ids), never array index, for mapped lists.
5. Use `useId` for linking labels and inputs.
6. Avoid unnecessary `useEffect`. Do not use it for things that can be derived.
7. Environment values use `import.meta.env.VITE_*`. Never hard-code the form endpoint.

## Tailwind and design

1. The feeling is cozy and warm. When unsure, choose softer and warmer.
2. Use only the theme colors from `source.md` (`cream`, `sand`, `twine`, `fawn`, `damask`, `ink`). No arbitrary hex values like `bg-[#fff]` in components.
3. Never use `black`, `white`, or any `gray`/`slate`/`zinc` utilities. Use the warm tokens instead.
4. Page background is `cream`. Alternate sections with `sand` for rhythm.
5. Primary button: `fawn` background with `cream` text. Hover goes to `damask`. Never put white text on `twine`.
6. `damask` is for small accents only (hover, badges, links), never large areas.
7. Rounded corners (`rounded-2xl` on cards, `rounded-full` on buttons), soft shadows, generous spacing.
8. Headings use `font-serif`, body uses `font-sans`. No other font families.
9. Photos feel natural and slightly rustic. Same aspect ratio inside a group (all bread cards equal).
10. Animations are gentle: fade, small lift on hover, `duration-200` to `duration-300`. Respect `motion-reduce:`.
11. Reuse components (`Button`, `SectionHeading`, cards) instead of repeating long class lists. If a class string repeats three times, extract a component.
12. Keep class lists readable. Order: layout, spacing, typography, color, effects, responsive.

## Layout and responsiveness

1. Mobile first. Test at 375px, 768px, 1024px, 1440px.
2. Content container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
3. No horizontal page scroll at any size. Only the bread carousel scrolls sideways.
4. Navbar is sticky and collapses to a menu button on mobile.
5. Bread carousel uses `snap-x snap-mandatory overflow-x-auto`, with arrow buttons that also work with the keyboard.
6. Avoid fixed heights on text containers.

## Content

1. Voice: friendly, simple, a little poetic. Short sentences. No corporate words.
2. Anything in `content.ts` that is placeholder gets a `// TODO: replace with real content` comment at the top of its block.
3. No lorem ipsum.
4. Buttons say what they do ("Order now", "See our breads"). No two buttons side by side with the same label.
5. At the end of each work session, list which content is still placeholder.

## Form

1. Required fields: first name, last name, email, message, terms checkbox.
2. Logic lives in `useContactForm`. It returns values, errors, status (`idle | sending | success | error`), and handlers.
3. Validate on the client (required, email format) and show clear inline messages.
4. Submit with `fetch` to the endpoint from `import.meta.env.VITE_FORM_ENDPOINT`. No page reload.
5. Add a hidden honeypot field for spam.
6. Disable the submit button while sending to prevent double submits.
7. On success show a friendly message and reset the form. On error show a friendly message and keep the user's input.
8. Every input has a visible `<label>`. Placeholders are not labels.
9. Never log or store personal data in the browser.

## Accessibility

1. Semantic HTML: `header`, `nav`, `main`, `section`, `footer`, one `h1`, headings in order.
2. Every image has meaningful `alt` text. Decorative images use `alt=""`.
3. Text contrast meets WCAG AA (4.5:1 for body text).
4. Everything interactive works with a keyboard and has a visible focus style (`focus-visible:`).
5. Buttons are `<button>`, links are `<a>`.
6. Icon-only buttons (carousel arrows, social icons, menu button) have `aria-label`.
7. Form errors are announced with `aria-live="polite"` and linked with `aria-describedby`.
8. Mobile menu traps focus while open and closes on Escape.

## Performance

1. Images: WebP or AVIF, compressed, with `width` and `height` set.
2. Hero image loads eagerly. Everything below the fold uses `loading="lazy"`.
3. Load only the font weights that are used, with `display=swap`.
4. Import only the lucide icons that are used (named imports).
5. Target Lighthouse 90+ for Performance, Accessibility, Best Practices, and SEO.

## SEO and meta

1. Unique `<title>` and meta description in `index.html`.
2. Open Graph tags and an image.
3. `LocalBusiness` JSON-LD with the real name, address, phone, and hours (once real content exists).
4. Favicon, and `lang="en"` on `<html>`.

## Code quality

1. No `console.log` in finished code.
2. No unused imports, variables, or files. ESLint must pass.
3. Do not delete or rewrite working sections when editing another one.
4. Keep commits small and named by what they do.
5. After each task, say what changed and what is still placeholder.

## Do not

- Do not use grey, black, or blue colors.
- Do not use inline styles when a Tailwind class works.
- Do not add UI libraries (MUI, Chakra, shadcn) or animation libraries unless asked.
- Do not add cookie banners, popups, or autoplay media.
- Do not hard-code secrets or API keys.
- Do not treat placeholder text as final.
