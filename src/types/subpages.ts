export interface SubPageHeroProps {
  title: string;
  description?: string;
  bgImage: string;
  heightClass?: string;
}

export interface TabItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface StatItem {
  value: string;
  unit: string;
  label: string;
}

export interface ExtraServiceItem {
  icon: string;
  heading: string;
  body?: string;
}

export interface DataBenefitItem {
  icon: string;
  heading: string;
  body: string;
  bg: string;
}
