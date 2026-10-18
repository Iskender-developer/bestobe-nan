// TODO: replace with real content
import type { Bread, Feature, FeatureCard, Highlight, NavLink, Testimonial } from "../types";

// TODO: replace with real content — navigation links
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Breads", href: "#breads" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

// TODO: replace with real content — navbar and shared interface labels
export const nav = {
  brand: "The Neighborhood Loaf",
  cta: "Order",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  mainNavigation: "Main navigation",
};

// TODO: replace with real content — hero section
export const hero = {
  eyebrow: "· Since 2018 ·",
  headline: "Bread baked before the sun wakes up",
  accentWord: "sun",
  text: "Warm loaves, slow fermentation, simple ingredients. The smell alone will pull you in.",
  primaryButton: "Order bread",
  secondaryButton: "See the breads",
  image: "",
  alt: "Fresh loaves cooling on a rack",
  badgeLabel: "Today's bake",
  badgeText: "Sourdough",
  hoursLabel: "Open",
};

// TODO: replace with real content — highlights section
export const highlights: Highlight[] = [
  {
    id: "slow",
    eyebrow: "Slow",
    title: "Long ferment",
    text: "Dough rests for a full day.",
  },
  {
    id: "fresh",
    eyebrow: "Fresh",
    title: "Daily loaves",
    text: "Baked before the sun's up.",
  },
  {
    id: "small",
    eyebrow: "Small",
    title: "Small batches",
    text: "Few loaves. Big care.",
  },
] as Highlight[];

// TODO: replace with real content — feature cards section
export const features: FeatureCard[] = [
  {
    id: "slow-dough",
    title: "Slow dough, made well",
    text: "Sourdough, rye and whole grain, shaped by hand and baked on stone.",
    image: "",
    alt: "Loaves on a wooden board",
  },
  {
    id: "daily-oven",
    title: "From the oven, daily",
    text: "Baguettes, ciabatta and a rotating seasonal loaf, still warm at the door.",
    image: "",
    alt: "Bread fresh from the oven",
  },
] as FeatureCard[];

// TODO: replace with real content — breads section
export const breads = {
  label: "Fresh",
  heading: "Breads",
  text: "Baked every morning with flour, water, salt and time.",
  viewAll: "View all",
  previous: "Previous breads",
  next: "Next breads",
  items: [
    { id: "sourdough", shape: "round", name: "Sourdough", tag: "Classic", price: 8, image: "", alt: "Sourdough loaf" },
    { id: "rye", shape: "oval", name: "Rye", tag: "Hearty", price: 9, image: "", alt: "Rye loaf" },
    { id: "baguette", shape: "long", name: "Baguette", tag: "Crusty", price: 5, image: "", alt: "Baguette" },
    { id: "whole-grain", shape: "seeded", name: "Whole grain", tag: "Nutty", price: 8, image: "", alt: "Whole grain loaf" },
    { id: "ciabatta", shape: "flat", name: "Ciabatta", tag: "Airy", price: 7, image: "", alt: "Ciabatta" },
  ] as Bread[],
};

// TODO: replace with real content — why us section
export const whyUs = {
  label: "Why us",
  heading: "Bread the way it should be",
  text: "No shortcuts. No machines doing the real work. Just hands, heat and patience.",
  features: [
    { id: "natural", label: "Simple", title: "Natural ingredients", text: "Flour, water, salt. Nothing else. Nothing hidden.", icon: "Wheat" },
    { id: "daily", label: "Fresh", title: "Baked daily", text: "Every loaf comes out of the oven the same morning.", icon: "Sunrise" },
    { id: "honest", label: "Honest", title: "No preservatives", text: "No additives. Just good bread.", icon: "Leaf" },
    { id: "love", label: "Warm", title: "Made with love", text: "Made by hand, with care, before the neighborhood wakes.", icon: "Heart" },
  ] as Feature[],
};

// TODO: replace with real content — testimonials section
export const testimonials = {
  heading: "Kind words",
  ratingLabel: "out of 5 stars",
  text: "The neighborhood talks about us.",
  items: [
    { id: "marta", quote: "The sourdough is the best I have had outside of Paris. I come every morning.", name: "Marta", role: "Local regular", rating: 5 },
    { id: "aaron", quote: "You can taste the time in the bread. It is simple and perfect.", name: "Aaron", role: "Home baker", rating: 5 },
    { id: "elena", quote: "The focaccia sells out fast. Get there early. It is worth it.", name: "Elena", role: "Morning customer", rating: 5 },
  ] as Testimonial[],
};

// TODO: replace with real content — contact form
export const contact = {
  label: "Order",
  heading: "Contact us",
  text: "Tell us what you need. We will have it ready.",
  image: "",
  alt: "Bakery interior",
  submit: "Send",
  sending: "Sending...",
  fields: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    message: "Message",
    terms: "Accept the terms",
  },
  rateLimited: "You've submitted recently. Please wait before sending again.",
  timeout:
    "The request timed out. The server may still have received your message — please try sending again, or contact us directly.",
  privacy: "Your message is sent directly to us via Formspree. We only use your details to reply.",
  success: "Thank you! We got your message and will reply soon.",
  error: "Something went wrong. Please try again or call us.",
};

// TODO: replace with real content — footer
export const footer = {
  brand: "The Neighborhood Loaf",
  exploreHeading: "Explore",
  helpHeading: "Help",
  hoursHeading: "Opening hours",
  address: "Level 1, 12 Sample St, Sydney NSW 2000",
  phone: "0000 123 456",
  email: "hello@example.com",
  hours: [
    { day: "Mon to Fri", time: "6:30 to 15:00" },
    { day: "Sat to Sun", time: "7:00 to 14:00" },
  ],
  links1: ["About us", "Our breads", "Why us", "Visit us", "Contact"],
  links2: ["Order bread", "Pickup info", "FAQ", "Privacy policy", "Terms"],
  bottom: "(c) 2026 The Neighborhood Loaf. All rights reserved.",
};
