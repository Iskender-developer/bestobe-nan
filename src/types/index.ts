// TODO: replace with real content
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
  icon: string;
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