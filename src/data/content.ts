// TODO: replace with real content
import type { Bread, Feature, NavLink, Testimonial } from "../types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Breads", href: "#breads" },
  { label: "Why us", href: "#why-us" },
  { label: "Visit", href: "#visit" },
];

export const hero = {
  headline: "Bread baked before the sun wakes up",
  text: "Warm loaves, slow fermentation, simple ingredients. The smell alone will pull you in.",
  primaryButton: "See our breads",
  secondaryButton: "Order now",
  image: "",
  alt: "Fresh loaves cooling on a rack",
};

export const breads = {
  label: "Fresh",
  heading: "Breads",
  text: "Baked every morning with flour, water, salt and time.",
  viewAll: "View all",
  items: [
    { id: "sourdough", name: "Sourdough", tag: "Classic", price: 8, image: "", alt: "Sourdough loaf" },
    { id: "rye", name: "Rye", tag: "Hearty", price: 9, image: "", alt: "Rye loaf" },
    { id: "baguette", name: "Baguette", tag: "Crusty", price: 5, image: "", alt: "Baguette" },
    { id: "whole-grain", name: "Whole grain", tag: "Nutty", price: 8, image: "", alt: "Whole grain loaf" },
    { id: "ciabatta", name: "Ciabatta", tag: "Airy", price: 7, image: "", alt: "Ciabatta" },
  ] as Bread[],
};

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

export const testimonials = {
  heading: "Kind words",
  text: "The neighborhood talks about us.",
  items: [
    { id: "marta", quote: "The sourdough is the best I have had outside of Paris. I come every morning.", name: "Marta", role: "Local regular", rating: 5 },
    { id: "aaron", quote: "You can taste the time in the bread. It is simple and perfect.", name: "Aaron", role: "Home baker", rating: 5 },
    { id: "elena", quote: "The focaccia sells out fast. Get there early. It is worth it.", name: "Elena", role: "Morning customer", rating: 5 },
  ] as Testimonial[],
};

export const contact = {
  label: "Order",
  heading: "Contact us",
  text: "Tell us what you need. We will have it ready.",
  image: "",
  alt: "Bakery interior",
  submit: "Send",
  success: "Thank you! We got your message and will reply soon.",
  error: "Something went wrong. Please try again or call us.",
};

export const footer = {
  brand: "The Neighborhood Loaf",
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