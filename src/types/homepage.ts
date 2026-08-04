export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

export interface ProductCard {
  id: string;
  name: string;
  description: string;
  href: string;
  hoverImage: string;
}

export interface BusinessPanel {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  bgImage: string;
  bgImageHover: string;
  bgImageMobile: string;
}

export interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
}
