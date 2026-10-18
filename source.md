# source.md: Content and Design Source of Truth

> **ALL TEXT IN THIS FILE IS PLACEHOLDER.** The copy was taken from the Relume design (headlines, descriptions, bread names, prices, testimonials, names, address, phone, email, bakery name, footer text). It will be changed later. Do not treat any of it as final, and do not hard-code it in components. Put it in `src/data/content.ts` so it can be swapped in one place.
>
> The only things that are *not* placeholder are the design decisions: palette, fonts, section order, and form behavior.

## Where this goes in code

- Copy and data: `src/data/content.ts` (typed with `src/types/index.ts`)
- Colors, fonts, radius, shadows: Tailwind theme in `src/index.css`
- Images: `src/assets/images`

## Brand (placeholder)

- **Name:** The Neighborhood Loaf
- **Type:** Local bakery, bakes different types of bread
- **Feeling:** Cozy, warm, handmade, welcoming
- **Voice:** Friendly, simple, a little poetic. Short sentences. No corporate language.

## Color palette (design decision, not placeholder)

| Token | Name | Hex | Use |
|---|---|---|---|
| `cream` | Cream | `#FFF8EE` | Page background |
| `sand` | Albescent White | `#F5E6D3` | Secondary background, cards |
| `twine` | Twine | `#C08552` | Main color, highlights, icons, borders |
| `fawn` | Mule Fawn | `#8B5A2B` | Buttons, headings |
| `damask` | Red Damask | `#D26D3A` | Small accents only (hover, badges, links) |
| `ink` | Warm dark brown | `#2B1D14` | Body text, dark sections |

Warm neutral scale (never grey or black): `#2B1D14`, `#3A2A1F`, `#5A4636`, `#8A7565`, `#D9CBBB`.

Text on Twine must be dark brown, not white (contrast is weak).

Tailwind v4 example for `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-cream: #FFF8EE;
  --color-sand: #F5E6D3;
  --color-twine: #C08552;
  --color-fawn: #8B5A2B;
  --color-damask: #D26D3A;
  --color-ink: #2B1D14;

  --font-serif: "Playfair Display", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;
}
```

(If using Tailwind v3, put the same tokens in `tailwind.config.ts` under `theme.extend`.)

## Typography (design decision)

- **Headings:** Playfair Display (or Lora), serif
- **Body:** DM Sans (or Inter), sans-serif

## Types (starter)

```ts
// src/types/index.ts
export type NavLink = { label: string; href: string };

export type Bread = {
  id: string;
  name: string;
  tag: string;
  price: number;
  image: string;
  alt: string;
};

export type Feature = {
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

## Placeholder content (from the Relume design)

### Navbar
- Logo (left)
- Links: About, Breads, Why us, Visit
- Buttons: Order (secondary), plus one primary button (design says "Bread", relabel to "Order bread")

### Hero
- **Headline:** Bread baked before the sun wakes up
- **Text:** Warm loaves, slow fermentation, simple ingredients. The smell alone will pull you in.
- **Buttons:** "See our breads" (primary), "Order now" (secondary). The design repeats "See our breads", so fix this.
- **Image:** Large photo of fresh loaves

### Breads
- **Label:** Fresh
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
- **Label:** Why us
- **Heading:** Bread the way it should be
- **Text:** No shortcuts. No machines doing the real work. Just hands, heat and patience.

| Label | Title | Text |
|---|---|---|
| Simple | Natural ingredients | Flour, water, salt. Nothing else. Nothing hidden. |
| Fresh | Baked daily | Every loaf comes out of the oven the same morning. |
| Honest | No preservatives | No additives. Just good bread. |
| Warm | Made with love | Made by hand, with care, before the neighborhood wakes. |

Each card has a small "Order" link in the design. Keep or remove.

### Testimonials
- **Heading:** Kind words
- **Text:** The neighborhood talks about us.

| Quote | Name | Role |
|---|---|---|
| "The sourdough is the best I have had outside of Paris. I come every morning." | Marta | Local regular |
| "You can taste the time in the bread. It is simple and perfect." | Aaron | Home baker |
| "The focaccia sells out fast. Get there early. It is worth it." | Elena | Morning customer |

### Contact form
- **Label:** Order
- **Heading:** Contact us
- **Text:** Tell us what you need. We will have it ready.
- **Image:** Photo of the bakery or bread (right side)

| Field | Type | Required |
|---|---|---|
| First name | text | yes |
| Last name | text | yes |
| Email | email | yes |
| Message | textarea | yes |
| Accept the terms | checkbox | yes |

- **Submit button:** Send
- **Success message:** Thank you! We got your message and will reply soon.
- **Error message:** Something went wrong. Please try again or call us.

Optional extra fields for real orders: Phone, Bread type (dropdown), Quantity, Pickup date.

### Footer
- Logo
- **Address:** Level 1, 12 Sample St, Sydney NSW 2000
- **Contact:** 0000 123 456 / hello@example.com
- **Social icons:** Facebook, Instagram, X, LinkedIn, YouTube (keep only the ones the bakery uses)
- **Links column 1:** About us, Our breads, Why us, Visit us, Contact
- **Links column 2:** Order bread, Pickup info, FAQ, Privacy policy, Terms
- **Bottom:** (c) 2026 The Neighborhood Loaf. All rights reserved. Privacy policy, Terms of service, Cookie settings

### Opening hours (not in design, placeholder)
- Mon to Fri: 6:30 to 15:00
- Sat to Sun: 7:00 to 14:00

## Assets checklist

- [ ] Logo (SVG)
- [ ] Hero photo (loaves, warm light)
- [ ] 5 to 6 bread photos, same aspect ratio
- [ ] Contact section photo
- [ ] Favicon and Open Graph image
- [ ] Icons for Why us cards (lucide-react)
