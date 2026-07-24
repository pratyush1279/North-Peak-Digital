import { Service, Metric, WhyChooseUsItem, CaseStudy, Testimonial, PricingPlan } from '../types';

export const METRICS_DATA: Metric[] = [
  {
    value: 180,
    suffix: '+',
    label: 'Products Launched',
    description: 'High-performance web applications, brand platforms, and SaaS products delivered globally.'
  },
  {
    value: 99,
    suffix: '.4%',
    label: 'Client Satisfaction',
    description: 'Consistently rated 5-stars by founders, CTOs, and marketing executives.'
  },
  {
    value: 48,
    prefix: '$',
    suffix: 'M+',
    label: 'Client Revenue Growth',
    description: 'Direct attributable financial uplift generated through engineering and conversion optimization.'
  },
  {
    value: 98,
    suffix: '+',
    label: 'Avg Lighthouse Score',
    description: 'Uncompromising engineering standards ensuring sub-second load times and zero CLS.'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-engineering',
    title: 'High-Performance Web Engineering',
    shortDescription: 'Custom, scalable web applications built with React, TypeScript, and modern edge server architectures.',
    fullDescription: 'We craft lightning-fast digital experiences engineered for maximum reliability, speed, and conversion. From custom enterprise web applications to headless e-commerce builds, our codebases adhere to strict Web Vitals and zero-bloat standards.',
    iconName: 'Code2',
    features: ['React & TypeScript Architecture', 'Micro-Frontend & Serverless Edge Routing', 'Sub-second Page Load Speeds', 'Automated CI/CD & Testing Pipelines'],
    deliverables: ['Production Ready Codebase', 'API Documentation', 'Performance Audits', '30-Day Post-Launch SLA'],
    timeline: '3 - 6 Weeks',
    impactMetric: 'Sub-300ms Core Web Vitals'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Systems',
    shortDescription: 'Conversion-driven user interfaces and comprehensive design systems built for seamless scaling.',
    fullDescription: 'We bridge the gap between aesthetic beauty and human psychology. Every pixel is calculated to guide users naturally toward conversion actions while building memorable, premium brand equity.',
    iconName: 'LayoutGrid',
    features: ['User Journey & Flow Mapping', 'Figma Design System Libraries', 'Interactive High-Fidelity Prototypes', 'Accessibility (WCAG AA) Compliance'],
    deliverables: ['Figma Master Component File', 'Design Tokens & CSS Variables', 'User Testing Reports'],
    timeline: '2 - 4 Weeks',
    impactMetric: '+42% User Engagement'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Strategy',
    shortDescription: 'Distinctive visual identities, typography systems, and messaging frameworks that command authority.',
    fullDescription: 'Position your business as an undisputed category leader. We develop cohesive brand systems that resonate deeply with high-value audiences across digital and physical touchpoints.',
    iconName: 'Sparkles',
    features: ['Strategic Brand Positioning', 'Logo System & Typography Guidelines', '3D Asset Creation & Brand Motion', 'Comprehensive Brand Guidelines Deck'],
    deliverables: ['Vector Logo Suite', 'Typography & Color Tokens', 'Brand Usage Guidelines PDF'],
    timeline: '2 - 3 Weeks',
    impactMetric: '2.8x Brand Perception Value'
  },
  {
    id: 'cro-performance',
    title: 'Conversion Rate Optimization',
    shortDescription: 'Data-led funnel engineering and continuous A/B testing designed to maximize revenue per visitor.',
    fullDescription: 'Turn existing traffic into predictable pipeline revenue. We analyze user recording data, heatmaps, and analytics to remove friction points and systematically lift conversion metrics.',
    iconName: 'TrendingUp',
    features: ['Behavioral Analytics & Heatmapping', 'A/B & Multivariate Testing', 'Checkout & Onboarding Funnel Redesign', 'Copywriting & Value Prop Tuning'],
    deliverables: ['Bi-weekly Test Experimentation Logs', 'Conversion Audit Report', 'UX Hotspot Fixes'],
    timeline: 'Ongoing / Monthly',
    impactMetric: '+64% Conversion Uplift'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    shortDescription: 'Bulletproof cloud architectures, serverless deployments, and automated security monitoring.',
    fullDescription: 'Ensure 99.99% uptime with enterprise-grade cloud architecture. We deploy cost-effective infrastructure on Cloud Run, AWS, and Cloudflare Edge networks capable of handling massive viral spikes.',
    iconName: 'Server',
    features: ['Infrastructure as Code (Terraform)', 'Zero-Downtime Deployment Pipelines', 'Global CDN & DDoS Protection', 'Security & SOC-2 Compliance Hardening'],
    deliverables: ['Cloud Architecture Diagrams', 'Docker Build Manifests', 'Monitoring Alerts Dashboard'],
    timeline: '2 - 4 Weeks',
    impactMetric: '99.99% Guaranteed Uptime'
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO & Organic Growth',
    shortDescription: 'Structured data schemas, crawl optimization, and programmatic content architectures for top rankings.',
    fullDescription: 'Dominate organic search results with deep technical SEO engineering. We structure your site data, optimize rendering paths, and create search-engine-favorite semantic architectures.',
    iconName: 'SearchCheck',
    features: ['Schema Markup & JSON-LD Integration', 'Core Web Vitals Audit & Repair', 'Dynamic XML Sitemap & Crawl Budget Control', 'Competitor Keyword Topology Mapping'],
    deliverables: ['SEO Technical Health Scorecard', 'Keyword Master Strategy', 'Monthly Search Console Reports'],
    timeline: 'Ongoing / 3-6 Months',
    impactMetric: '3.4x Organic Search Growth'
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'zero-bloat',
    title: 'Engineering Rigor, Zero Code Bloat',
    description: 'We reject bloated frameworks and slow page builders. Every line of code is handwritten for maximum speed, accessibility, and security.',
    icon: 'Zap',
    highlight: 'Sub-second performance guaranteed'
  },
  {
    id: 'business-first',
    title: 'Business Metric Focused',
    description: 'Design and code mean nothing without business impact. We map every design choice directly to conversion rates, ARPU, and customer retention.',
    icon: 'Target',
    highlight: 'Direct ROI attribution'
  },
  {
    id: 'senior-team',
    title: 'Dedicated Senior Craftspeople',
    description: 'No junior handoffs or offshore layers. You work directly with senior staff engineers and lead designers who own your outcomes.',
    icon: 'ShieldCheck',
    highlight: 'Direct Slack channel with senior leads'
  },
  {
    id: 'transparent-predictable',
    title: 'Fixed Pricing & Fast Sprints',
    description: 'Transparent deliverables, fixed-price sprint proposals, and guaranteed launch dates with zero scope creep surprises.',
    icon: 'Clock',
    highlight: 'Weekly production deployments'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'fintech-platform',
    client: 'FinFlow Cloud',
    category: 'Fintech & SaaS',
    title: 'Re-engineering a Global Financial Dashboard for High-Volume Enterprise Clients',
    summary: 'Redesigned the core web platform from scratch, reducing load time from 4.2s to 0.4s while boosting user retention by 58%.',
    stats: [
      { label: 'Page Speed Lift', value: '10x Faster' },
      { label: 'Conversion Increase', value: '+74%' },
      { label: 'Lighthouse Rating', value: '100 / 100' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=450&q=60&fm=webp',
    imageAlt: 'Analytics dashboard interface on a laptop displaying financial data visualizations',
    tags: ['React', 'TypeScript', 'Performance', 'UI/UX']
  },
  {
    id: 'ecommerce-scale',
    client: 'Aura Luxury Apparel',
    category: 'E-Commerce & Retail',
    title: 'Headless Commerce Architecture Generating 3.8x Mobile Revenue Growth',
    summary: 'Built a bespoke headless web app integrated with Shopify, delivering zero-layout-shift shopping experiences on mobile browsers.',
    stats: [
      { label: 'Mobile Conversion', value: '+112%' },
      { label: 'Avg Order Value', value: '+$46' },
      { label: 'Cart Abandonment', value: '-35%' }
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=450&q=60&fm=webp',
    imageAlt: 'Luxury apparel storefront showcase with minimalist modern branding',
    tags: ['Headless E-Commerce', 'Brand System', 'Web Vitals']
  },
  {
    id: 'healthtech-brand',
    client: 'Pulse AI Health',
    category: 'Healthcare & AI',
    title: 'Brand Positioning & Web Portal Launch for Series B AI Platform',
    summary: 'Developed an authoritative brand identity and responsive platform that helped secure $28M in Series B venture capital funding.',
    stats: [
      { label: 'Pipeline Valuations', value: '$28M Secured' },
      { label: 'Demo Request Rate', value: '3.2x Higher' },
      { label: 'Organic Traffic', value: '+240%' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=450&q=60&fm=webp',
    imageAlt: 'Healthcare technology dashboard showing patient analytics and AI metrics',
    tags: ['Brand Strategy', 'React SPA', 'SEO']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'FinFlow Cloud',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=60&fm=webp',
    content: 'NorthPeak Digital transformed our legacy platform into a lightning-fast web experience. Their focus on Web Vitals and clean React architecture is unmatched. Our Lighthouse score jumped from 48 to 99 overnight.',
    rating: 5,
    impact: 'Sub-400ms load times across all enterprise dashboards'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'VP of Growth & Marketing',
    company: 'Aura Luxury',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=60&fm=webp',
    content: 'Working with NorthPeak felt like having an elite internal engineering team. They delivered our complete rebrand and web build ahead of schedule, directly driving a 112% increase in mobile sales.',
    rating: 5,
    impact: '+112% increase in mobile conversion rates'
  },
  {
    id: 'test-3',
    name: 'David Sterling',
    role: 'Founder & CEO',
    company: 'Pulse AI Health',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=60&fm=webp',
    content: 'The level of craft and strategic clarity NorthPeak brings is remarkable. Our new site was instrumental in impressing institutional investors during our $28M Series B round.',
    rating: 5,
    impact: 'Helped secure $28M Series B round'
  },
  {
    id: 'test-4',
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Nexus Scale',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=60&fm=webp',
    content: 'Fast, responsive, and obsessive about performance details. They solved complex layout shift issues that our previous agency spent months failing to fix. I cannot recommend NorthPeak enough.',
    rating: 5,
    impact: 'Zero CLS & 100% Accessibility Compliance'
  }
];

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'sprint',
    name: 'Starter Sprint',
    tagline: 'Ideal for early-stage startups needing a high-impact, high-speed digital presence.',
    monthlyPrice: 3800,
    annualPrice: 3200,
    turnaround: '2 - 3 Weeks',
    ctaText: 'Start Your Sprint',
    features: [
      { text: 'Custom 1-Page or 5-Page Responsive Site', included: true },
      { text: '100/100 Core Web Vitals Optimization', included: true },
      { text: 'Complete UI/UX Design in Figma', included: true },
      { text: 'Technical SEO & JSON-LD Schema Integration', included: true },
      { text: 'Basic Analytics & Lead Capture Setup', included: true },
      { text: 'Design System & Component Library', included: false, tooltip: 'Available in Growth plan' },
      { text: 'Custom Web Application Engineering', included: false, tooltip: 'Available in Enterprise plan' },
      { text: 'Dedicated Slack Channel & 24/7 SLA', included: false, tooltip: 'Available in Growth & Enterprise' }
    ]
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    tagline: 'For scaling companies ready to dominate their market with custom web builds and branding.',
    monthlyPrice: 7500,
    annualPrice: 6200,
    popular: true,
    turnaround: '3 - 5 Weeks',
    ctaText: 'Accelerate Growth',
    features: [
      { text: 'Up to 15 Page Custom Web Application', included: true },
      { text: 'Complete Brand Identity System & Guidelines', included: true },
      { text: 'Full Design System & Component Library', included: true },
      { text: '100/100 Core Web Vitals Optimization', included: true },
      { text: 'Advanced CRO & Conversion Funnel Tuning', included: true },
      { text: 'CMS or Headless E-Commerce Integration', included: true },
      { text: 'Dedicated Slack Channel & Senior Lead', included: true },
      { text: '30-Day Post-Launch SLA & Bug Guarantee', included: true }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Custom',
    tagline: 'Comprehensive digital transformation for market leaders requiring custom engineering and ongoing retainer.',
    monthlyPrice: 14500,
    annualPrice: 12000,
    turnaround: '6 - 10 Weeks',
    ctaText: 'Schedule Consultation',
    features: [
      { text: 'Unlimited Custom Web & Mobile Apps', included: true },
      { text: 'Dedicated Pod: Lead Designer + Senior Engineer + PM', included: true },
      { text: 'Custom API Integrations & Microservices', included: true },
      { text: 'Cloud Infrastructure & DevOps CI/CD', included: true },
      { text: 'Continuous A/B Testing & Funnel Engineering', included: true },
      { text: 'Quarterly Strategic Growth Audits', included: true },
      { text: 'SOC-2 Compliance & Security Auditing', included: true },
      { text: '1-Hour Guaranteed SLA Response Time', included: true }
    ]
  }
];

export const FAQS_DATA = [
  {
    question: 'How do you guarantee sub-second load times and 90+ Lighthouse scores?',
    answer: 'We enforce strict engineering discipline: custom React components, zero heavy external scripts or videos, optimized WebP imagery with explicit dimensions, inline critical CSS, and server-side edge caching.'
  },
  {
    question: 'What is your typical project timeline from kickoff to launch?',
    answer: 'Our Starter Sprint delivers in 2–3 weeks. Growth Engine projects typically take 3–5 weeks. We operate in fast, transparent weekly production cycles with live staging previews.'
  },
  {
    question: 'Who will actually be working on our project?',
    answer: 'You work directly with dedicated senior engineers and lead designers based in North America and Europe. We do not use junior handoffs or outsourced layers.'
  },
  {
    question: 'How do we track project progress and communicate?',
    answer: 'We set up a shared private Slack channel for day-to-day communication, along with weekly async video demos and a live interactive Figma/GitHub staging link.'
  }
];
