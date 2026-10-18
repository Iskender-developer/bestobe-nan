# source.md: Content and Design Source of Truth

> **ALL TEXT IN THIS FILE IS PLACEHOLDER.** The copy comes from the Relume wireframe and a reference design (bakery name, headlines, bread names, prices, testimonials, names, address, phone, email, footer text). It will be changed later. Do not hard-code it in components. Put it in `src/data/content.ts`.
>
> Not placeholder: the design decisions (palette, fonts, glass style, section order, form behavior).

## Reference design

A screenshot of a cafe site, saved as `reference/design-reference.png`. Use it for **look and feel only**. Do not copy its text, name, or photos.

### What the reference looks like

- **Background:** one big gradient across the whole page, light tan in the top-left, deep roast brown through the middle, reddish brown at the bottom. A very faint square grid sits on top.
- **Cards:** frosted glass. Translucent dark brown fill, a thin warm brown border, soft blur, large rounded corners (about 16 to 20px).
- **Navbar:** a floating pill with the same glass look. Logo on the left, links in the middle, the active link sits in a darker pill, a small orange button on the right.
- **Hero:** two columns. Left: a glass card with a tiny uppercase eyebrow, a big serif headline where one word is amber, a short muted paragraph, and two pill buttons (one dark red-brown, one dark olive-brown). Right: a photo in a thick glass frame, with a small glass badge overlapping the bottom-left corner of the photo.
- **Highlights:** three equal glass cards in a row. Each has a tiny uppercase label, a serif title, and one muted line.
- **Feature cards:** two large cards side by side. Photo fills the top, a darker caption area below with a serif title and two lines of muted text.
- **Typography:** high-contrast serif for headlines, clean sans (Inter-like) for everything else. Eyebrows are small, uppercase, widely spaced, and muted.
- **Mood:** quiet, warm, candle-lit, slow.

## Where this goes in code

- Copy and data: `src/data/content.ts` (typed with `src/types/index.ts`)
- Colors, fonts, radius, shadows, background, glass utility: `src/index.css`
- Images: `src/assets/images`

## Brand (placeholder)

- **Name:** The Neighborhood Loaf
- **Type:** Local bakery, bakes different types of bread
- **Voice:** Friendly, simple, a little poetic. Short sentences.

## Color palette (estimated from the screenshot, adjust with a color picker)

| Token | Hex | Use |
|---|---|---|
| `latte` | `#A56E48` | Gradient start (top-left) |
| `roast` | `#6B3A1A` | Gradient middle |
| `bark` | `#5C2F10` | Gradient deep tone |
| `rust` | `#7A4128` | Gradient end (bottom-right) |
| `espresso` | `#2B1608` | Darkest brown, glass tint, dark text on light |
| `glass` | `rgba(60, 35, 15, 0.55)` | Card fill |
| `glass-border` | `rgba(200, 150, 100, 0.25)` | Card border |
| `amber` | `#E08A47` | Accent word in headlines, active highlights |
| `caramel` | `#B8591C` | Small accent button (Order/Reserve) |
| `wine` | `#5A2A1A` | Primary pill button fill |
| `olive-brown` | `#3A2A0E` | Secondary pill button fill |
| `oat` | `#EADCC8` | Main text on dark |
| `mist` | `#BBA58F` | Muted text on dark (check contrast) |

### Theme CSS (Tailwind v4, put in `src/index.css`)

```css
@import "tailwindcss";

@theme {
  --color-latte: #A56E48;
  --color-roast: #6B3A1A;
  --color-bark: #5C2F10;
  --color-rust: #7A4128;
  --color-espresso: #2B1608;
  --color-amber: #E08A47;
  --color-caramel: #B8591C;
  --color-wine: #5A2A1A;
  --color-olive-brown: #3A2A0E;
  --color-oat: #EADCC8;
  --color-mist: #BBA58F;

  --font-serif: "Fraunces", "Playfair Display", Georgia, serif;
  --font-sans: "Inter", system-ui, sans-serif;
}

html {
  background-color: #5C2F10;
}

body {
  min-height: 100vh;
  color: var(--color-oat);
  font-family: var(--font-sans);
  background:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px) 0 0 / 44px 44px,
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px) 0 0 / 44px 44px,
    linear-gradient(160deg, #A56E48 0%, #6B3A1A 35%, #5C2F10 70%, #7A4128 100%);
  background-attachment: fixed;
}

@utility glass {
  background-color: rgba(60, 35, 15, 0.55);
  border: 1px solid rgba(200, 150, 100, 0.25);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 30px rgba(20, 8, 0, 0.25);
}
```

(For Tailwind v3, move the tokens to `tailwind.config.ts` and write `glass` as a component class.)

### Fonts

- **Headings:** Fraunces (best guess for the reference). Alternatives: Playfair Display, Newsreader.
- **Body:** Inter.

## Types (starter)

```ts
// src/types/index.ts
export type NavLink = { label: string; href: string };

export type Highlight = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
};

export type FeatureCard = {
  id: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type Bread = {
  id: string;
  name: string;
  tag: string;
  price: number;
  image: string;
  alt: string;
};

export type WhyUsItem = {
  id: string;
  label: string;
  title: string;
  text: string;
  icon: string; // lucide icon name
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  acceptTerms: boolean;
};
```

---

## Placeholder content

### Navbar
- Logo (left, with a small round mark)
- Links: Home, Breads, About, Visit, Contact (active link gets a darker pill)
- Button (accent): Order

### Hero
- **Eyebrow:** · Since 2018 ·
- **Headline:** Bread baked before the *sun* wakes up (accent word: "sun")
- **Text:** Warm loaves, slow fermentation, simple ingredients. The smell alone will pull you in.
- **Buttons:** "Order bread" (primary, wine), "See the breads" (secondary, olive-brown)
- **Photo:** Warm photo of the bakery or fresh loaves, in a thick glass frame
- **Floating badge:** Today's bake / Sourdough

### Highlights (3 cards)

| Eyebrow | Title | Text |
|---|---|---|
| Slow | Long ferment | Dough rests for a full day. |
| Fresh | Daily loaves | Baked before the sun's up. |
| Small | Small batches | Few loaves. Big care. |

### Feature cards (2 cards)

| Title | Text | Photo |
|---|---|---|
| Slow dough, made well | Sourdough, rye and whole grain, shaped by hand and baked on stone. | Loaves on a wooden board |
| From the oven, daily | Baguettes, ciabatta and a rotating seasonal loaf, still warm at the door. | Bread fresh from the oven |

### Breads
- **Eyebrow:** Fresh
- **Heading:** Breads
- **Text:** Baked every morning with flour, water, salt and time.
- **Button:** View all

| Name | Tag | Price |
|---|---|---|
| Sourdough | Classic | $8 |
| Rye | Hearty | $9 |
| Baguette | Crusty | $5 |
| Whole grain | Nutty | $8 |
| Ciabatta | Airy | $7 |

### Why us
- **Eyebrow:** Why us
- **Heading:** Bread the way it should be
- **Text:** No shortcuts. No machines doing the real work. Just hands, heat and patience.

| Label | Title | Text |
|---|---|---|
| Simple | Natural ingredients | Flour, water, salt. Nothing else. Nothing hidden. |
| Fresh | Baked daily | Every loaf comes out of the oven the same morning. |
| Honest | No preservatives | No additives. Just good bread. |
| Warm | Made with love | Made by hand, with care, before the neighborhood wakes. |

### Testimonials
- **Heading:** Kind words
- **Text:** The neighborhood talks about us.

| Quote | Name | Role |
|---|---|---|
| "The sourdough is the best I have had outside of Paris. I come every morning." | Marta | Local regular |
| "You can taste the time in the bread. It is simple and perfect." | Aaron | Home baker |
| "The focaccia sells out fast. Get there early. It is worth it." | Elena | Morning customer |

### Contact form
- **Eyebrow:** Order
- **Heading:** Contact us
- **Text:** Tell us what you need. We will have it ready.
- **Style:** form inside a glass card, inputs with a darker translucent fill, thin warm border, amber focus ring. Photo on the other side.

| Field | Type | Required |
|---|---|---|
| First name | text | yes |
| Last name | text | yes |
| Email | email | yes |
| Message | textarea | yes |
| Accept the terms | checkbox | yes |

- **Submit button:** Send
- **Success:** Thank you! We got your message and will reply soon.
- **Error:** Something went wrong. Please try again or call us.

Optional extra fields: Phone, Bread type, Quantity, Pickup date.

### Footer (glass panel)
- Logo
- **Address:** Level 1, 12 Sample St, Sydney NSW 2000
- **Contact:** 0000 123 456 / hello@example.com
- **Social icons:** keep only the ones the bakery uses
- **Links:** About us, Our breads, Visit us, Contact, Order bread, Pickup info, FAQ, Privacy policy, Terms
- **Bottom:** (c) 2026 The Neighborhood Loaf. All rights reserved.

### Opening hours (placeholder)
- Mon to Fri: 6:30 to 15:00
- Sat to Sun: 7:00 to 14:00

## Assets checklist

- [ ] Logo (SVG) with a small round mark
- [ ] Hero photo (warm, moody, natural light)
- [ ] 2 feature card photos (same aspect ratio, about 16:10)
- [ ] 5 to 6 bread photos (same aspect ratio)
- [ ] Contact section photo
- [ ] Favicon and Open Graph image
- [ ] Icons for Why us cards (lucide-react)

**Photo style:** warm tones, soft window light, shallow depth of field, a little dark and moody. Avoid bright, cold, or heavily saturated photos, since they clash with the brown palette.
