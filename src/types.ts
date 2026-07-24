export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  impactMetric: string;
}

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  summary: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
  imageAlt: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  impact: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number; // monthly rate when billed annually
  popular?: boolean;
  features: {
    text: string;
    included: boolean;
    tooltip?: string;
  }[];
  ctaText: string;
  turnaround: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  serviceType: string;
  budgetRange: string;
  message: string;
  privacyAgreed: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  serviceType?: string;
  budgetRange?: string;
  message?: string;
  privacyAgreed?: string;
}
