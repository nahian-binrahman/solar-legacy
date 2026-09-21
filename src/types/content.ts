export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  order: number;
  isVisible: boolean;
}

export interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  bgImageUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface HowItWorksItem {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  size: string;
  impact: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface SectionVisibility {
  hero: boolean;
  services: boolean;
  howItWorks: boolean;
  projects: boolean;
  statistics: boolean;
  architecture: boolean;
  calculator: boolean;
  testimonials: boolean;
  faq: boolean;
  contact: boolean;
}

export interface SiteContent {
  navigation: NavLinkItem[];
  hero: HeroContent;
  stats: StatItem[];
  services: ServiceItem[];
  howItWorks: HowItWorksItem[];
  projects: ProjectItem[];
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  sectionVisibility: SectionVisibility;
}
